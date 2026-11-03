import { FAQS } from '@/data/faqs';
import type { FAQ } from '@/types';

export function getFaqsByCategory(category: string): FAQ[] {
  return FAQS.filter((faq) => faq.category === category);
}

export function getAllFaqs(): FAQ[] {
  return FAQS;
}
