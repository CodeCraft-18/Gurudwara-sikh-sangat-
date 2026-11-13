import React from 'react';
import { GURDWARA_PHONE, formatPhoneNumber } from '../utils/accommodation.ts';

export const AccommodationSection: React.FC = () => {
  const phone = formatPhoneNumber(GURDWARA_PHONE);

  return (
    <section id="accommodation" className="w-full bg-white border-b-2 border-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Bar */}
        <div className="border-b-2 border-black pb-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
            Accommodation
          </h2>
          <p className="text-sm font-bold text-[#444444] mt-1 mb-0">
            Affordable accommodation for visitors and travellers.
          </p>
        </div>

        {/* Accommodation Details Box */}
        <div className="border-2 border-black bg-[#FFF7EE] p-6 text-black">
          <p className="text-sm sm:text-base font-bold text-black mb-2">
            Rate and availability are subject to confirmation by Gurudwara management.
          </p>

          <p className="text-sm text-black mb-5">
            For accommodation enquiries, please contact the Gurudwara directly.
          </p>

          <div>
            <a
              href={phone.href}
              className="btn-orange text-sm font-bold uppercase tracking-wider"
            >
              Contact Gurudwara: {GURDWARA_PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
