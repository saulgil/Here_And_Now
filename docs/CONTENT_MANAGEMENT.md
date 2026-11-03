# Gestión de contenido — Here & Now

> Guía para desarrolladores que necesiten cambiar precios, disponibilidad, textos o imágenes
> de la web sin tocar nada de infraestructura. No requiere conocer Next.js a fondo.

Toda la información editable vive en la carpeta `data/`. Cada archivo exporta una lista (array)
de objetos TypeScript. Editas el archivo, guardas, haces commit y despliegas — no hay base de
datos ni panel de administración.

| Archivo | Contenido |
|---|---|
| `data/cars.ts` | Vehículos, precios, disponibilidad por destino, specs, textos |
| `data/locations.ts` | Ibiza y Alicante (textos, SEO) |
| `data/pickup-points.ts` | Puntos de recogida (aeropuertos, puerto, oficina) |
| `data/faqs.ts` | Preguntas frecuentes (homepage, Ibiza, Alicante, ficha de coche) |
| `data/testimonials.ts` | Reseñas de clientes |
| `data/promotions.ts` | Códigos promocionales (vacío por ahora) |
| `data/site.ts` | Nombre del sitio, teléfono, redes sociales, menús |

---

## Cambiar precio

Abre `data/cars.ts`. Dentro del coche, en el array `availability`, busca el destino y cambia
`pricePerDay`:

```ts
availability: [
  {
    location: 'ibiza',
    active: true,
    pricePerDay: 130,   // ← cambia este número
    ...
  },
]
```

## Activar/desactivar un vehículo

Para quitar un coche de toda la web (sin borrarlo del archivo):

```ts
active: false,   // en el nivel del coche, dentro del objeto Car
```

Para quitarlo solo de un destino concreto pero dejarlo en el otro:

```ts
availability: [
  { location: 'ibiza', active: false, ... },   // deja de aparecer en /ibiza
  { location: 'alicante', active: true, ... },  // sigue en /alicante y /flota
]
```

## Cambiar un vehículo de Alicante a Ibiza (o añadirlo a ambos)

Edita el array `availability` del coche en `data/cars.ts`. Cada entrada representa "este coche
en este destino". Para que un coche pase a estar disponible en un destino nuevo, añade una
entrada; para quitarlo de uno, pon `active: false` o elimina la entrada:

```ts
availability: [
  { location: 'ibiza', active: true, pricePerDay: 130, pickupPoints: ['aeropuerto', 'puerto'], ... },
  { location: 'alicante', active: true, pricePerDay: 130, pickupPoints: ['aeropuerto', 'oficina', 'puerto'], ... },
]
```

`pickupPoints` es la lista de slugs de puntos de recogida disponibles para ese coche en ese
destino (deben existir en `data/pickup-points.ts` con ese `locationSlug`).

## Activar/desactivar un código promocional

Abre `data/promotions.ts`. Añade un objeto al array `PROMOTIONS`:

```ts
export const PROMOTIONS: Promotion[] = [
  {
    code: 'SUMMER10',
    type: 'percentage',      // 'percentage' o 'fixed'
    value: 10,                // 10% o 10€ según el type
    validFrom: '2027-06-01',  // opcional
    validTo: '2027-06-30',    // opcional
    active: true,
  },
];
```

Para desactivarlo sin borrarlo, cambia `active: false`.

> Nota: por ahora este array no se usa en ningún formulario de reserva (no existía checkout con
> cupones en la web original). Está preparado para cuando se implemente.

## Cambiar texto

- Textos de un vehículo (descripción, features, condiciones): `data/cars.ts`.
- Textos de las páginas de Ibiza/Alicante (hero, "por qué alquilar aquí"): directamente en
  `app/(site)/ibiza/page.tsx` y `app/(site)/alicante/page.tsx` (son literales en el propio
  archivo de la página, igual que ya funcionaba antes de la migración).
- Textos de las páginas de puntos de recogida (aeropuerto, puerto, oficina): en el objeto
  `CONTENT` dentro de cada `app/(site)/<destino>/<punto>/page.tsx`.
- Preguntas frecuentes: `data/faqs.ts`.
- Teléfono, redes sociales, menú de navegación: `data/site.ts`.

Todos los textos con idioma tienen la forma `{ es: '...', en: '...' }`. El campo `en` es
opcional — si no se rellena, se usa `es` como alternativa.

## Cambiar imagen

1. Coloca el archivo de imagen dentro de `public/images/<categoría>/` (por ejemplo
   `public/images/cars/mi-foto.jpg`).
2. En `data/cars.ts` (o el archivo de datos correspondiente), actualiza la ruta:

```ts
mainImage: {
  asset: { url: '/images/cars/mi-foto.jpg' },
  alt: { es: 'Descripción de la foto en español' },
},
```

La ruta siempre empieza por `/` y es relativa a `public/`. No se usa ningún servicio externo
de imágenes — todo vive en el repositorio.

> El vehículo actual usa una imagen placeholder (`public/images/cars/placeholder-mercedes-clase-v.svg`)
> porque no se dispone de fotos reales del coche. Sustitúyela en cuanto estén disponibles.

## Añadir un coche nuevo

1. Abre `data/cars.ts`.
2. Copia el objeto del coche existente como plantilla y pégalo dentro del array `CARS`.
3. Cambia como mínimo: `_id` (único), `slug.current` (único, se usa en la URL `/flota/<slug>`),
   `name`, `model`, specs (`passengers`, `doors`, `transmission`, `fuel`, etc.), `shortDescription`,
   `features`, `availability` (precio y destinos) y `seo`.
4. Si el coche no tiene foto real todavía, usa un placeholder como el existente o añade una
   imagen real en `public/images/cars/`.
5. Guarda. La página `/flota/<slug>` y la ficha del coche se generan automáticamente — no hace
   falta tocar ningún otro archivo. El coche aparecerá en `/flota` y en `/ibiza`/`/alicante` si
   tiene `availability` activa para ese destino.

---

## Qué NO se puede hacer desde aquí

- No hay editor visual ni panel de administración — todo cambio implica editar un archivo
  `.ts` y hacer un nuevo despliegue (Vercel). Esta es una decisión consciente dado el volumen
  bajo de cambios del negocio (ver `docs/development/sanity-removal-plan.md`).
- No hay fechas de disponibilidad por temporada todavía implementadas en la UI (el modelo de
  datos ya soporta `validFrom`/`validTo` en `CarAvailability`, ver `docs/architecture/future-cms.md`
  o el tipo `CarAvailability` en `types/index.ts`, pero ninguna página filtra por fecha hoy).
