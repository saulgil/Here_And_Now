import { TESTIMONIALS } from '@/data/testimonials';
import type { Testimonial } from '@/types';

export function getFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}

export function getTestimonialsByLocation(locationSlug: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.location?.slug?.current === locationSlug);
}
