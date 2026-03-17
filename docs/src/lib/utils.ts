import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BOOKING_URL = "https://n655230.yclients.com/company/619571/personal/menu?o=";
