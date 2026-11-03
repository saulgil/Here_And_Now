import { SITE_SETTINGS } from '@/data/site';
import type { SiteSettings } from '@/types';

export function getSiteSettings(): SiteSettings {
  return SITE_SETTINGS;
}
