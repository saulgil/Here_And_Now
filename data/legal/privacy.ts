import type { LegalBlock } from '@/components/shared/LegalContent';
import { COMPANY_LEGAL_NAME, COMPANY_NIF, COMPANY_ADDRESS, COMPANY_EMAIL } from './company';

// Migrated from the original WordPress page (docs/legal/privacy-original.md,
// WP post ID 3, https://hereandnowibiza.com/politica-privacidad/).
//
// Legal substance is preserved verbatim. The only change applied is
// unifying the responsible-party identity (name/NIF/address) to the value
// that is most consistently used across the original WordPress legal pages
// (see docs/legal/legal-review-pending.md for the documented discrepancy
// and COMPANY_LEGAL_NAME/COMPANY_ADDRESS in ./company.ts).
//
// This document still describes e-commerce/newsletter/user-registration
// functionality ("Contrato de Compraventa", carrito, alta como usuario
// registrado...) inherited from the old WooCommerce store, which the new
// Next.js site does not implement. Per the migration rules this is flagged
// for business/legal review in docs/legal/legal-review-pending.md rather
// than rewritten on our own initiative — the wording below is kept exactly
// as in the original source.
export const PRIVACY_CONTENT: LegalBlock[] = [
  { type: 'heading', level: 2, text: '¿Quién es el responsable del tratamiento de sus datos?', id: 'responsable' },
  {
    type: 'list',
    items: [
      `**Responsable del tratamiento**: ${COMPANY_LEGAL_NAME}`,
      `**NIF:** ${COMPANY_NIF}`,
      `**Domicilio:** ${COMPANY_ADDRESS}`,
    ],
  },

  { type: 'heading', level: 2, text: '¿Qué tipo de datos tratamos?', id: 'tipo-datos' },
  {
    type: 'paragraph',
    text: 'Dependiendo de los productos, servicios o funcionalidades de los que quiera disfrutar en cada momento necesitaremos tratar unos datos u otros. En general dichos datos, serán, según el caso, los siguientes:',
  },
  {
    type: 'list',
    items: [
      'Sus datos identificativos: nombre, apellido, NIF, NIE o pasaporte, idioma, país desde el que interactúe con nosotros, etc.',
      'Datos de contacto: número de teléfono, dirección postal, correo electrónico, etc.',
      'Información económica y transaccional: sus datos de pago o de tarjeta, información acerca de sus compras, pedidos, devoluciones.',
      'Datos de conexión, geolocalización y navegación (en caso de que interactúes con nosotros desde el móvil, por ejemplo).',
      'Información comercial si estuviera suscrito a nuestra newsletter.',
      'Datos sobre sus gustos y preferencias.',
    ],
  },
  {
    type: 'paragraph',
    text: 'Recuerde que, cuando le pidamos que rellene sus datos personales para darle acceso a alguna funcionalidad o servicio de la web, marcaremos algunos campos como obligatorios, puesto que son datos que necesitamos para poder prestarle el servicio o darle acceso a la funcionalidad en cuestión.',
  },
  {
    type: 'paragraph',
    text: 'Por favor, tenga en cuenta que, si decide no facilitarnos esos datos, es posible que no pueda completar su registro como usuario o que no pueda disfrutar de esos servicios o funcionalidades.',
  },

  { type: 'heading', level: 2, text: '¿Con qué finalidad tratamos sus datos personales?', id: 'finalidad' },
  {
    type: 'paragraph',
    text: 'Dependiendo de cómo interactúe con nuestra web, trataremos sus datos personales para las siguientes finalidades:',
  },
  { type: 'heading', level: 3, text: '1. Para el desarrollo, cumplimiento y ejecución del Contrato de Compraventa' },
  { type: 'paragraph', text: 'Esta finalidad incluye el tratamiento de sus datos principalmente para:' },
  {
    type: 'paragraph',
    text: 'Contactar con usted en relación con actualizaciones o comunicaciones informativas relacionadas con los productos adquiridos, incluyendo el envío de encuestas de calidad sobre los productos suministrados.',
  },
  {
    type: 'paragraph',
    text: 'Gestionar el pago de los productos que adquiera, independientemente del medio de pago utilizado.',
  },
  {
    type: 'paragraph',
    text: 'Activar los mecanismos necesarios con objeto prevenir potenciales fraudes contra usted y contra nosotros mismos durante el proceso de compra. Si consideramos que la operación puede ser fraudulenta, este tratamiento puede tener como consecuencia el bloqueo de la transacción.',
  },
  {
    type: 'paragraph',
    text: 'Gestionar posibles devoluciones una vez haya realizado una compra y gestionar solicitudes de información sobre la disponibilidad de los distintos productos.',
  },
  {
    type: 'paragraph',
    text: 'Facturar y para poner a su disposición los tickets, facturas y cualquier otro documento acreditativo del pago respecto de las compras que haya realizado en nuestra Plataforma.',
  },
  { type: 'heading', level: 3, text: '2. Para atender las solicitudes o peticiones que realice a través de los distintos medios incorporados a nuestra Plataforma' },
  {
    type: 'paragraph',
    text: 'Sólo tratamos los datos personales que sean estrictamente necesarios para gestionar o resolver su solicitud o petición.',
  },
  { type: 'heading', level: 3, text: '3. Para su registro en la página web' },
  {
    type: 'paragraph',
    text: 'En caso de que decida registrarse en nuestra web, necesitamos tratar sus datos para identificarle como usuario de la misma y darle acceso a sus diferentes funcionalidades, productos y servicios que están a su disposición como usuario registrado. Puede cancelar su cuenta de usuario registrado contactando con nosotros a través de nuestro departamento de Atención al Cliente.',
  },
  { type: 'heading', level: 3, text: '4. Para fines de marketing' },
  {
    type: 'paragraph',
    text: 'En la medida en que se suscriba a nuestra Newsletter, sus datos personales serán utilizados para la remisión periódica de boletines informativos de la empresa.',
  },
  {
    type: 'paragraph',
    text: 'Debe recordar que puede darse de baja de la Newsletter, en cualquier momento y sin coste, poniéndose en contacto con nosotros a través del correo electrónico del responsable de tratamiento o siguiendo las indicaciones que le ofreceremos en cada una de nuestras comunicaciones.',
  },
  { type: 'heading', level: 3, text: '5. Análisis de usabilidad y de calidad para la mejora de nuestros servicios (cookies)' },
  {
    type: 'paragraph',
    text: 'Si accede a nuestra Plataforma, le informamos que trataremos sus datos de navegación para fines analíticos y estadísticos, es decir, para entender la forma en la que los usuarios interactúan con nuestra Plataforma y así ser capaces de introducir mejoras en la misma. Así mismo, en ocasiones, realizamos acciones y encuestas de calidad destinadas a conocer el grado de satisfacción de nuestros clientes y usuarios y detectar aquellas áreas en las que podemos mejorar.',
  },

  { type: 'heading', level: 2, text: '¿Cuál es la legitimación para el tratamiento de sus datos?', id: 'legitimacion' },
  {
    type: 'paragraph',
    text: 'La base legal que nos permite tratar sus datos personales también depende de la finalidad para la que los tratemos, de este modo encontraremos distintas bases legales en virtud de las siguientes finalidades:',
  },
  { type: 'heading', level: 3, text: '1. Desarrollo, cumplimiento y ejecución del contrato de compraventa' },
  {
    type: 'paragraph',
    text: 'El tratamiento de sus datos es necesario para la ejecución del contrato de compraventa que nos vincula con usted. Entendemos que el tratamiento de estos datos resulta positivo para todas las partes que intervienen cuando se produce el pago de una compra y en particular para usted ya que nos permite instaurar las medidas adecuadas con el fin de protegerle contra intentos de fraude realizados por terceros.',
  },
  { type: 'heading', level: 3, text: '2. Atención al cliente' },
  {
    type: 'paragraph',
    text: 'Consideramos que tenemos un interés legítimo para atender las solicitudes o consultas que nos plantee a través de los diversos medios de contacto existentes. Entendemos que el tratamiento de estos datos resulta también beneficioso para usted en tanto que nos permite poder atenderte adecuadamente y resolver las consultas planteadas. Cuando nos contacte, en particular, para la gestión de incidencias relacionadas con el producto adquirido a través de la Plataforma, el tratamiento es necesario para la ejecución del contrato de compraventa. Cuando su consulta esté relacionada con el ejercicio de los derechos sobre los que le informamos más abajo, o con reclamaciones relacionadas con nuestros productos o servicios, lo que nos legitima para tratar sus datos es el cumplimiento de obligaciones legales por nuestra parte.',
  },
  { type: 'heading', level: 3, text: '3. Para su registro en la página web' },
  {
    type: 'paragraph',
    text: 'La base de legitimación es la prestación de su consentimiento cuando se registra en nuestra página web.',
  },
  {
    type: 'paragraph',
    text: 'La base legítima para tratar sus datos con finalidades de marketing es el consentimiento que usted presta.',
  },
  {
    type: 'paragraph',
    text: 'A modo de ejemplo, cuando acepta recibir información personalizada a través de diversos medios, cuando autoriza el envío de newsletter, o cuando acepta las bases legales para participar en una acción promocional.',
  },
  {
    type: 'paragraph',
    text: 'Con el fin de mostrarle información personalizada, consideramos que tenemos un interés legítimo para realizar un perfilado con la información que tenemos sobre usted (navegación que realiza, preferencias o histórico de compras) y los datos personales que nos haya facilitado como rango de edad o idioma, ya que entendemos que el tratamiento de estos datos también resulta beneficioso para usted porque le permite mejorar su experiencia como usuario y acceder a información de acuerdo con sus preferencias.',
  },
  { type: 'heading', level: 3, text: '4. Análisis de usabilidad y de calidad' },
  {
    type: 'paragraph',
    text: 'Consideramos que tenemos un interés legítimo para analizar la usabilidad de la Plataforma y el grado de satisfacción del usuario ya que entendemos que el tratamiento de estos datos también resulta beneficioso para usted porque la finalidad es mejorar la experiencia del usuario y ofrecer un servicio de mayor calidad.',
  },

  { type: 'heading', level: 2, text: '¿Durante cuánto tiempo conservaremos sus datos?', id: 'conservacion' },
  { type: 'heading', level: 3, text: '1. Desarrollo, cumplimiento y ejecución del contrato de compraventa' },
  {
    type: 'paragraph',
    text: 'Trataremos sus datos durante el tiempo necesario para gestionar la compra de los productos o servicios que haya adquirido y posteriormente los plazos legalmente establecidos para el cumplimiento de nuestras obligaciones fiscales. En algunas ocasiones, únicamente trataremos algunos datos hasta el momento en que usted decida, como es el caso de los datos de pago (tarjeta bancaria) que nos haya solicitado almacenar para posibles compras futuras.',
  },
  { type: 'heading', level: 3, text: '2. Atención al cliente' },
  {
    type: 'paragraph',
    text: 'Trataremos sus datos durante el tiempo que sea necesario para atender su solicitud o petición.',
  },
  { type: 'heading', level: 3, text: '3. Para su registro en la página web' },
  {
    type: 'paragraph',
    text: 'Trataremos sus datos durante el tiempo en que mantenga la condición de usuario registrado (es decir, hasta que decida darse de baja).',
  },
  { type: 'heading', level: 3, text: '4. Marketing' },
  {
    type: 'paragraph',
    text: 'Trataremos sus datos hasta que solicite la baja o cancele su suscripción a la newsletter. Si participa en acciones promocionales conservaremos sus datos por un plazo de seis 6 meses desde que finalice la acción.',
  },
  {
    type: 'paragraph',
    text: 'Independientemente de que tratemos sus datos durante el tiempo estrictamente necesario para cumplir con la finalidad correspondiente, conservaremos los mismos posteriormente debidamente guardados y protegidos durante el tiempo en que pudieran surgir responsabilidades derivadas del tratamiento, en cumplimiento con la normativa vigente en cada momento. Una vez prescriban las posibles acciones en cada caso, procederemos a la supresión de los datos personales.',
  },

  { type: 'heading', level: 2, text: '¿Compartiremos sus datos con terceros?', id: 'terceros' },
  {
    type: 'paragraph',
    text: 'Para cumplir las finalidades indicadas en la presente Política de Privacidad, es necesario que demos acceso a sus datos personales a terceras partes que nos presten apoyo en los servicios que le ofrecemos y que detallamos a continuación:',
  },
  {
    type: 'list',
    items: [
      'Entidades financieras, para la gestión de los pagos.',
      'Proveedores de servicios tecnológicos que nos dan soporte.',
      'Proveedores y colaboradores de servicios de logística, transporte y entrega.',
    ],
  },
  {
    type: 'paragraph',
    text: 'Además, le informamos que estamos presentes en redes sociales, para mantener a nuestros seguidores informados respecto de las novedades y servicios de la empresa.',
  },
  {
    type: 'paragraph',
    text: 'Usted puede acceder a estas redes sociales de manera voluntaria y a través de los enlaces disponibles en la propia página web o accediendo directamente y por su cuenta desde el navegador o app instalada.',
  },
  {
    type: 'paragraph',
    text: 'Debe saber, que este sitio web no se hace responsable del uso de los datos que estas redes sociales pueden realizar. Sin embargo, cuando estos datos se generen en la red social y deriven de una interacción con nuestra cuenta oficial, seremos corresponsables del tratamiento junto con la red social.',
  },
  {
    type: 'paragraph',
    text: 'La creación de una cuenta en una red social por parte de esta empresa, no significa que usted deba consentir el tratamiento de los datos sin informarse previamente del alcance de este.',
  },
  {
    type: 'paragraph',
    text: 'Para poder consentir nuestra cesión desde este sitio web y el tratamiento que se realiza de sus datos, deberá leer detenidamente la política de privacidad de la red social a la que desee acceder, antes de pinchar en los logos de las redes sociales presentes en nuestra página web, de manera voluntaria.',
  },

  { type: 'heading', level: 2, text: '¿Cuáles son sus derechos cuando nos facilita sus datos?', id: 'derechos' },
  {
    type: 'paragraph',
    text: 'Nos comprometemos a respetar la confidencialidad de sus datos personales y a garantizarle el ejercicio de sus derechos.',
  },
  {
    type: 'paragraph',
    text: `Podrá ejercitarlos sin coste alguno remitiéndonos un correo electrónico a nuestra dirección [${COMPANY_EMAIL}](mailto:${COMPANY_EMAIL}), simplemente indicándonos el motivo de su solicitud y el derecho que quiere ejercitar.`,
  },
  {
    type: 'paragraph',
    text: 'En caso de que lo consideremos necesario para poder identificarle, podremos solicitarle copia de un documento acreditativo de su identidad. En particular, independientemente de la finalidad o la base legal en virtud de la que tratemos sus datos, usted tiene derecho a:',
  },
  { type: 'paragraph', text: 'Pedirnos acceso a los datos suyos de los que disponemos.' },
  {
    type: 'paragraph',
    text: 'Pedirnos que rectifiquemos los datos de los que ya disponemos. Tenga en cuenta que, al facilitarnos activamente sus datos personales por cualquier vía, garantiza que son ciertos y exactos y se compromete a notificarnos cualquier cambio o modificación de los mismos.',
  },
  {
    type: 'paragraph',
    text: 'Pedirnos que suprimamos sus datos en la medida en que ya no sean necesarios para la finalidad para los que necesitemos tratarlos según le hemos informado con anterioridad, o en que ya no contemos con legitimación para hacerlo.',
  },
  {
    type: 'paragraph',
    text: 'Pedirnos que limitemos el tratamiento de sus datos, lo que supone que en determinados casos pueda solicitarnos que suspendamos temporalmente el tratamiento de los datos o que los conservemos más allá del tiempo necesario cuando pueda necesitarlo. Si nos ha proporcionado su consentimiento para el tratamiento de sus datos para cualquier finalidad, también tiene derecho a retirarlo en cualquier momento.',
  },
  {
    type: 'paragraph',
    text: 'Recibir aquellos datos personales que le incumban y que nos haya facilitado, en un formato estructurado, de uso común y lectura mecánica, así como a transmitirlos a otro responsable del tratamiento.',
  },
  {
    type: 'paragraph',
    text: 'Por otra parte, cuando el tratamiento de sus datos esté basado en nuestro interés legítimo, también tendrá derecho a oponerse al tratamiento de sus datos.',
  },
  {
    type: 'paragraph',
    text: 'Por último, le informamos de su derecho a presentar una reclamación ante la autoridad de control en materia de protección de datos pertinente, en particular, ante la [Agencia Española de Protección de Datos](https://www.agpd.es/portalwebAGPD/index-ides-idphp.php).',
  },

  { type: 'heading', level: 2, text: 'Cambios a la política de privacidad', id: 'cambios' },
  {
    type: 'paragraph',
    text: 'Es posible que modifiquemos la información contenida en esta Política de Privacidad cuando lo estimemos conveniente. En caso de que lo hagamos, se lo notificaremos por distintas vías a través de la Plataforma, o incluso se lo comunicaremos a su dirección de correo electrónico cuando el cambio en cuestión sea significativo para con su privacidad, de manera que pueda revisar los cambios, valorarlos y, en su caso, oponerse o darse de baja en algún servicio o funcionalidad.',
  },

  { type: 'heading', level: 2, text: 'Información sobre cookies', id: 'cookies' },
  {
    type: 'paragraph',
    text: 'Utilizamos cookies y dispositivos similares para facilitar su navegación en la Plataforma, conocer cómo interactúa con nosotros y, en determinados casos, poder mostrarle publicidad en función de sus hábitos de navegación. Por favor, lea nuestra **[Política de Cookies](/cookies)** para conocer con mayor detalle las cookies y dispositivos similares que usamos, su finalidad y otra información de interés.',
  },
];
