import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            // Singleton
            S.listItem()
              .title('⚙️ Configuración del sitio')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Main content
            S.documentTypeListItem('car').title('🚐 Vehículos'),
            S.documentTypeListItem('carAvailability').title('📅 Disponibilidades'),
            S.divider(),
            S.documentTypeListItem('location').title('📍 Destinos'),
            S.documentTypeListItem('pickupPoint').title('🏨 Puntos de recogida'),
            S.divider(),
            S.documentTypeListItem('guide').title('📖 Guías'),
            S.documentTypeListItem('faq').title('❓ FAQs'),
            S.documentTypeListItem('testimonial').title('⭐ Testimonios'),
            S.documentTypeListItem('sitePage').title('📄 Páginas'),
            S.divider(),
            // Catalogues
            S.documentTypeListItem('brand').title('🏷️ Marcas'),
            S.documentTypeListItem('carCategory').title('📂 Categorías'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
