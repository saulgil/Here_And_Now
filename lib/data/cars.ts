import { CARS } from '@/data/cars';
import type { Car, CarListItem, CarAvailability } from '@/types';

function toListItem(car: Car): CarListItem {
  const activeAvailability = car.availability.filter((a) => a.active);
  const minPrice = activeAvailability.length
    ? Math.min(...activeAvailability.map((a) => a.pricePerDay))
    : undefined;

  return {
    _id: car._id,
    name: car.name,
    slug: car.slug,
    passengers: car.passengers,
    transmission: car.transmission,
    fuel: car.fuel,
    year: car.year,
    mainImage: car.mainImage,
    minPrice,
    availableLocations: activeAvailability.map((a) => a.location),
  };
}

/** All cars, regardless of active/availability status. */
export function getAllCars(): Car[] {
  return CARS;
}

/** Cars marked active with at least one active availability — mirrors the
 * old ALL_ACTIVE_CARS_QUERY behaviour (count(carAvailability isActive) > 0). */
export function getActiveCars(): CarListItem[] {
  return CARS
    .filter((car) => car.active && car.availability.some((a) => a.active))
    .map(toListItem);
}

export function getCarBySlug(slug: string): Car | null {
  return CARS.find((car) => car.slug.current === slug) ?? null;
}

export function getAllCarSlugs(): { slug: string }[] {
  return CARS.filter((car) => car.active).map((car) => ({ slug: car.slug.current }));
}

export function getCarAvailabilities(carId: string): CarAvailability[] {
  const car = CARS.find((c) => c._id === carId);
  return car?.availability.filter((a) => a.active) ?? [];
}

/** Cars with at least one active availability at the given destination. */
export function getCarsByLocation(location: 'ibiza' | 'alicante'): CarListItem[] {
  return getActiveCars().filter((car) => car.availableLocations?.includes(location));
}
