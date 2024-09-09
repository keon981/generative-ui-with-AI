import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { 
  style: 'currency', currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(amount)