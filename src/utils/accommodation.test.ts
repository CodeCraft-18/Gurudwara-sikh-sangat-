import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAccommodationCost,
  calculateNights,
  formatPhoneNumber,
  validateEnquiry,
  ACCOMMODATION_RATE_PER_DAY,
} from './accommodation.ts';

test('calculateAccommodationCost computes correct rates for single and multiple days/guests', () => {
  assert.equal(calculateAccommodationCost(1, 1), 150);
  assert.equal(calculateAccommodationCost(2, 1), 300);
  assert.equal(calculateAccommodationCost(3, 2), 900);
  assert.equal(calculateAccommodationCost(1, 4), 600);
  assert.equal(calculateAccommodationCost(0, 0), 150); // Minimum 1 night and 1 guest fallback
});

test('calculateNights correctly determines days difference', () => {
  assert.equal(calculateNights('2026-11-12', '2026-11-13'), 1);
  assert.equal(calculateNights('2026-11-12', '2026-11-15'), 3);
  assert.equal(calculateNights('2026-11-12', '2026-11-12'), 1);
});

test('formatPhoneNumber formats readable and tel link correctly', () => {
  const result = formatPhoneNumber('033 3291 4166');
  assert.equal(result.display, '033 3291 4166');
  assert.equal(result.href, 'tel:03332914166');
});

test('validateEnquiry validates required fields properly', () => {
  const valid = validateEnquiry({
    name: 'Harpreet Singh',
    phone: '03332914166',
    checkIn: '2026-11-15',
    checkOut: '2026-11-17',
    guests: 2,
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.length, 0);

  const invalid = validateEnquiry({
    name: '',
    phone: '123',
    checkIn: '',
    checkOut: '',
    guests: 0,
  });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.errors.length > 0, true);
});
