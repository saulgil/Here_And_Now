import type { Promotion } from '@/types';

// No promotional codes exist in the current site content (the HERE20/HERE2025
// WooCommerce coupons mentioned in docs/content/migration-report.md have no
// equivalent data model and were never part of Sanity — see MANUAL_REVIEW
// section there). This array starts empty; add promotions here when the
// business defines one. Example shape (kept as a comment for reference):
//
// {
//   code: 'SUMMER10',
//   type: 'percentage',
//   value: 10,
//   validFrom: '2027-06-01',
//   validTo: '2027-06-30',
//   active: true,
// }
export const PROMOTIONS: Promotion[] = [];
