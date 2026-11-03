import { PROMOTIONS } from '@/data/promotions';
import type { Promotion } from '@/types';

function isWithinDateRange(promo: Promotion, now: Date): boolean {
  if (promo.validFrom && now < new Date(promo.validFrom)) return false;
  if (promo.validTo && now > new Date(promo.validTo)) return false;
  return true;
}

export function getAllPromotions(): Promotion[] {
  return PROMOTIONS;
}

/** Promotions marked active and within their validFrom/validTo window (if set). */
export function getActivePromotions(): Promotion[] {
  const now = new Date();
  return PROMOTIONS.filter((promo) => promo.active && isWithinDateRange(promo, now));
}

export function getPromotionByCode(code: string): Promotion | null {
  const normalized = code.trim().toUpperCase();
  return PROMOTIONS.find((promo) => promo.code.toUpperCase() === normalized) ?? null;
}
