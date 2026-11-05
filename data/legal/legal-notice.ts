import type { LegalBlock } from '@/components/shared/LegalContent';
import { COMPANY_LEGAL_NAME, COMPANY_NIF, COMPANY_ADDRESS, COMPANY_EMAIL } from './company';

// Migrated from the original WordPress page (docs/legal/legal-notice-original.md,
// WP post ID 272, https://hereandnowibiza.com/aviso-legal/). Legal
// substance preserved verbatim — this was already the most consistent of
// the three WordPress legal pages regarding company identity, so
// COMPANY_LEGAL_NAME/COMPANY_ADDRESS match the original text exactly here.
//
// The "LEGISLACIÓN APLICABLE Y JURISDICCIÓN" clause below designates
// Murcia as the competent court even though the company's registered
// address is in El Campello (Alicante). This looks like a leftover from a
// generic legal-notice template and is flagged for legal review in
// docs/legal/legal-review-pending.md rather than changed on our own
// initiative — the original wording is kept as-is.
export const LEGAL_NOTICE_CONTENT: LegalBlock[] = [
  {
    type: 'paragraph',
    text: 'Por favor, lea todos los apartados del presente Aviso Legal antes de utilizar este sitio web. Las siguientes condiciones son vinculantes para cualquier usuario del mismo.',
  },
  {
    type: 'paragraph',
    text: 'En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web.',
  },
  {
    type: 'paragraph',
    text: 'La razón de este texto es explicarle de manera detallada las funcionalidades de esta web y aportarle aquella información relacionada con el titular de la web y la finalidad de los contenidos incluidos en ella.',
  },

  { type: 'heading', level: 2, text: 'Datos de identificación', id: 'datos-identificacion' },
  {
    type: 'paragraph',
    text: 'El presente Aviso Legal regula el uso del servicio del sitio web informándole en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, de los siguientes extremos:',
  },
  {
    type: 'list',
    items: [
      `**Nombre de la empresa**: ${COMPANY_LEGAL_NAME}`,
      `**NIF:** ${COMPANY_NIF}`,
      `**Domicilio:** ${COMPANY_ADDRESS}`,
    ],
  },

  { type: 'heading', level: 2, text: 'Uso del sitio web y obligaciones de los usuarios', id: 'uso-sitio-web' },
  {
    type: 'paragraph',
    text: `El usuario se compromete a utilizar el sitio web, el contenido y servicios, sin contravenir la legislación vigente, los usos generalmente aceptados y el orden público. Queda prohibido el uso del sitio web con fines ilícitos o lesivos contra ${COMPANY_LEGAL_NAME} o un tercero, que, de cualquier forma, puedan causar perjuicio o impedir el normal uso del sitio web.`,
  },
  {
    type: 'paragraph',
    text: `**${COMPANY_LEGAL_NAME}** garantiza que los contenidos y servicios que ofrece el portal respetan el principio de dignidad de la persona, de protección de la juventud y la infancia, de no-discriminación por motivos de raza, sexo, religión, opinión, nacionalidad, discapacidad o cualquier otro aspecto personal y social.`,
  },
  {
    type: 'paragraph',
    text: 'Las presentes Condiciones Generales de Uso del sitio web no confieren al usuario ningún otro derecho de uso, alteración, explotación, reproducción, distribución o comunicación pública de los contenidos del sitio web distintos de los aquí expresamente previstos.',
  },
  {
    type: 'paragraph',
    text: `Los contenidos (información, archivos de sonido y/o imagen, fotografías, diseños, etc.) recogidos en el portal, son propiedad de ${COMPANY_LEGAL_NAME} o la misma se encuentra debidamente autorizada para su difusión por sus legítimos titulares.`,
  },
  {
    type: 'paragraph',
    text: `${COMPANY_LEGAL_NAME} se compromete a no realizar publicidad engañosa y por tanto, queda prohibido:`,
  },
  {
    type: 'list',
    items: [
      'El uso para todo tipo de fines comerciales o publicitarios, distintos de los estrictamente permitidos.',
      'Su reproducción, publicación, distribución o modificación, total o parcial a menos que se cuente con la autorización previa y por escrito de sus legítimos titulares o resulte legalmente permitido.',
      `Cualquier vulneración de los derechos de ${COMPANY_LEGAL_NAME} o de sus legítimos titulares sobre los mismos.`,
    ],
  },

  { type: 'heading', level: 2, text: 'Propiedad intelectual e industrial', id: 'propiedad-intelectual' },
  {
    type: 'paragraph',
    text: `El usuario reconoce y acepta que todos los derechos de propiedad industrial e intelectual sobre los contenidos y/o cualesquiera otros elementos insertados en el sitio web pertenecen a ${COMPANY_LEGAL_NAME} o la misma se encuentra debidamente autorizada para su difusión en el presente website.`,
  },
  {
    type: 'paragraph',
    text: `En el caso de que un usuario o un tercero consideren que se ha producido una violación de sus legítimos derechos de propiedad intelectual por la introducción de un determinado contenido en el website, deberá notificar dicha circunstancia a ${COMPANY_LEGAL_NAME} indicando:`,
  },
  {
    type: 'list',
    items: [
      'Datos del titular de los derechos presuntamente infringidos, o indicar la representación con la que actúa en caso de que la reclamación la presente un tercero distinto del interesado.',
      'Señalar los contenidos protegidos por los derechos de propiedad intelectual y su ubicación en el Web, la acreditación de los derechos de propiedad intelectual señalados y declaración expresa en la que el interesado se responsabiliza de la veracidad de las informaciones facilitadas en la notificación.',
    ],
  },

  { type: 'heading', level: 2, text: 'Enlaces', id: 'enlaces' },
  {
    type: 'paragraph',
    text: 'El presente sitio web proporciona enlaces a otros sitios web propios y contenidos que son propiedad de terceros.',
  },
  {
    type: 'paragraph',
    text: `El único objeto de los enlaces es proporcionar al usuario la posibilidad de acceder a dichos enlaces. ${COMPANY_LEGAL_NAME} no se responsabiliza en ningún caso de los resultados que puedan derivarse al usuario por el acceso a dichos enlaces.`,
  },
  {
    type: 'paragraph',
    text: `El usuario que se proponga establecer cualquier dispositivo técnico de enlace desde su sitio web al portal deberá obtener la autorización previa y escrita de ${COMPANY_LEGAL_NAME}. El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre ${COMPANY_LEGAL_NAME} y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte de ${COMPANY_LEGAL_NAME} de sus contenidos o servicios.`,
  },
  {
    type: 'paragraph',
    text: `El sitio web en el que se establezca el enlace no contendrá ninguna marca, denominación, logotipo, eslogan u otros signos distintivos pertenecientes a ${COMPANY_LEGAL_NAME} salvo los expresamente autorizados.`,
  },

  { type: 'heading', level: 2, text: 'Modificación unilateral y duración', id: 'modificacion' },
  {
    type: 'paragraph',
    text: `${COMPANY_LEGAL_NAME} se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración del sitio web así como el presente Aviso Legal.`,
  },

  { type: 'heading', level: 2, text: 'Exclusión de garantías y responsabilidad', id: 'exclusion-garantias' },
  {
    type: 'paragraph',
    text: `${COMPANY_LEGAL_NAME} no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran acarrear a causa de:`,
  },
  {
    type: 'list',
    items: [
      'La falta disponibilidad, mantenimiento y efectivo funcionamiento del Web y/o de sus servicios o contenidos.',
      'La existencia de virus, programas maliciosos o lesivos en los contenidos.',
      'El uso ilícito, negligente, fraudulento, contrario a las presentes condiciones, a la buena fe, a los usos generalmente aceptados o al orden público, del sitio Web, sus servicios o contenidos, por parte de los usuarios.',
    ],
  },

  { type: 'heading', level: 2, text: 'Tratamiento de datos personales', id: 'tratamiento-datos' },
  {
    type: 'paragraph',
    text: `${COMPANY_LEGAL_NAME} tal y como recoge en su "**[Política de Privacidad](/privacidad)**" que puede consultar en este sitio web, ha adoptado los niveles de seguridad adecuados a los datos que trata y gestiona, incorporando todos los medios y medidas técnicas a su alcance para garantizar su confidencialidad, evitar su mal uso, pérdida, alteración, acceso no autorizado y robo.`,
  },

  { type: 'heading', level: 2, text: 'Legislación aplicable y jurisdicción', id: 'legislacion-jurisdiccion' },
  {
    type: 'paragraph',
    text: 'Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso, los Juzgados y Tribunales del domicilio del demandante que se identifique como consumidor, en caso contrario los Juzgados y Tribunales competentes serán los de la ciudad de Murcia (España).',
  },

  { type: 'heading', level: 2, text: 'Contacto', id: 'contacto' },
  {
    type: 'paragraph',
    text: `En caso de que cualquier usuario tuviese alguna duda acerca del presente aviso legal o cualquier comentario sobre el mismo puede dirigirse a [${COMPANY_EMAIL}](mailto:${COMPANY_EMAIL}) o enviar una comunicación escrita a la dirección que consta en el encabezado.`,
  },
];
