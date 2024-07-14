import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11);
  const groups = [
    numbers.slice(0, 3),
    numbers.slice(3, 7),
    numbers.slice(7, 11),
  ];
  return groups.filter(group => group.length > 0).join('-');
}
