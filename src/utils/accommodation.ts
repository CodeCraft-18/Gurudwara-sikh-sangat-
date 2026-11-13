/**
 * Utility functions for Gurdwara Sikh Sangat, Howrah
 * Pure logic decoupled from React rendering
 */

export const ACCOMMODATION_RATE_PER_DAY = 150;
export const GURDWARA_PHONE = '033 3291 4166';
export const GURDWARA_ADDRESS = '12 Mukhram Kanoria Road, Howrah, West Bengal – 711101';
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Gurdwara+Sikh+Sangat+Howrah';

/**
 * Calculates number of nights between checkIn and checkOut dates (YYYY-MM-DD strings).
 * Minimum 1 night if dates are same or check-in is today.
 */
export function calculateNights(checkInDateStr: string, checkOutDateStr: string): number {
  if (!checkInDateStr || !checkOutDateStr) return 1;
  const checkIn = new Date(checkInDateStr);
  const checkOut = new Date(checkOutDateStr);
  const diffTime = checkOut.getTime() - checkIn.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

/**
 * Calculates total accommodation cost based on standard rate (₹150 per day/person)
 */
export function calculateAccommodationCost(
  nights: number,
  guests: number,
  ratePerDay: number = ACCOMMODATION_RATE_PER_DAY
): number {
  const validNights = Math.max(1, Math.floor(nights || 1));
  const validGuests = Math.max(1, Math.floor(guests || 1));
  const validRate = Math.max(0, ratePerDay);
  return validNights * validGuests * validRate;
}

/**
 * Formats phone string for tel: link and readable display
 */
export function formatPhoneNumber(phone: string = GURDWARA_PHONE): { display: string; href: string } {
  const cleaned = phone.replace(/[^0-9+]/g, '');
  return {
    display: phone.trim(),
    href: `tel:${cleaned}`,
  };
}

/**
 * Validates accommodation booking enquiry input
 */
export interface EnquiryInput {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export function validateEnquiry(input: EnquiryInput): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!input.name || input.name.trim().length < 2) {
    errors.push('Please enter your full name (at least 2 characters).');
  }
  const cleanPhone = input.phone ? input.phone.replace(/[^0-9]/g, '') : '';
  if (cleanPhone.length < 8) {
    errors.push('Please enter a valid phone number with area/mobile code.');
  }
  if (!input.checkIn) {
    errors.push('Please select a check-in date.');
  }
  if (!input.checkOut) {
    errors.push('Please select a check-out date.');
  }
  if (input.guests < 1) {
    errors.push('Number of persons must be at least 1.');
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}
