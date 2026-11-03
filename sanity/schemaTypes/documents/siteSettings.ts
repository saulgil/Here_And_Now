import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  icon: CogIcon,
  // Note: Singleton behaviour enforced via Studio structure (no 'create' button)
  groups: [
    { name: 'brand', title: 'Marca', default: true },
    { name: 'contact', title: 'Contacto' },
    { name: 'social', title: 'Redes sociales' },
    { name: 'nav', title: 'Navegación' },
    { name: 'seo', title: 'SEO global' },
  ],
  fields: [
    defineField({ name: 'siteName', title: 'Nombre del sitio', type: 'string', group: 'brand', initialValue: 'Here & Now', validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'localeString', group: 'brand' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', group: 'brand', options: { accept: '.svg,.png' } }),
    defineField({ name: 'logoLight', title: 'Logo (versión clara)', type: 'image', group: 'brand' }),
    defineField({ name: 'favicon', title: 'Favicon', type: 'image', group: 'brand' }),

    // Contact
    defineField({ name: 'phone', title: 'Teléfono', type: 'string', group: 'contact', initialValue: '+34625305620' }),
    defineField({ name: 'email', title: 'Email', type: 'string', group: 'contact' }),
    defineField({ name: 'whatsappUrl', title: 'WhatsApp URL', type: 'url', group: 'contact' }),

    // Social
    defineField({ name: 'instagramUrl', title: 'Instagram', type: 'url', group: 'social', initialValue: 'https://www.instagram.com/hereandnowibiza/' }),
    defineField({ name: 'threadsUrl', title: 'Threads', type: 'url', group: 'social', initialValue: 'https://www.threads.net/@hereandnowibiza' }),
    defineField({ name: 'facebookUrl', title: 'Facebook', type: 'url', group: 'social' }),

    // Navigation
    defineField({ name: 'mainNav', title: 'Menú principal', type: 'array', group: 'nav', of: [{ type: 'navItem' }] }),
    defineField({ name: 'footerNavCol1', title: 'Footer columna 1', type: 'array', group: 'nav', of: [{ type: 'navItem' }] }),
    defineField({ name: 'footerNavCol2', title: 'Footer columna 2', type: 'array', group: 'nav', of: [{ type: 'navItem' }] }),
    defineField({ name: 'footerNavLegal', title: 'Footer legal', type: 'array', group: 'nav', of: [{ type: 'navItem' }] }),

    // SEO
    defineField({ name: 'defaultSeo', title: 'SEO por defecto', type: 'seoFields', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Configuración global' }) },
});
