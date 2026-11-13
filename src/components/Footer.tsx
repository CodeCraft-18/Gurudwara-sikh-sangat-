import React from 'react';
import { GURDWARA_ADDRESS, GURDWARA_PHONE, MAPS_URL, formatPhoneNumber } from '../utils/accommodation.ts';

interface FooterProps {
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const phone = formatPhoneNumber(GURDWARA_PHONE);

  return (
    <footer className="w-full bg-[#EEEEEE] border-t-2 border-black text-black py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top greeting */}
        <div className="text-center border-b border-[#CCCCCC] pb-4">
          <div className="text-lg font-black text-[#993D00]">
            Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!
          </div>
          <div className="text-xs text-[#555555] mt-1">
            May the blessings of Sri Guru Granth Sahib Ji be upon all.
          </div>
        </div>

        {/* 3 Column Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          {/* Col 1 */}
          <div>
            <h4 className="font-black text-base text-black mb-2 flex items-center gap-1">
              <span className="text-[#CC5500] font-bold">ੴ</span> Gurdwara Sikh Sangat
            </h4>
            <p className="text-xs leading-relaxed text-[#333333] mb-2">
              A peaceful place for prayer, community seva, and spiritual guidance located near Howrah Junction Railway Station in West Bengal.
            </p>
            <p className="text-xs font-bold text-black">
              All devotees, visitors, and yatris are warmly welcomed.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-black mb-2 border-b border-[#CCCCCC] pb-1">
              Quick Links
            </h4>
            <ul className="space-y-1.5 list-none p-0 m-0 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Home (Building Photo Background)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » About Gurudwara & Sangat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Gurudwara Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('accommodation')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Accommodation / Sarai (₹150/day)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Our Location & Maps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('langar')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Guru Ka Langar & Seva
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:underline text-black cursor-pointer font-medium"
                >
                  » Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-black mb-2 border-b border-[#CCCCCC] pb-1">
              Gurudwara Details
            </h4>
            <div className="space-y-1.5 text-xs text-black">
              <div>
                <strong>Address:</strong><br />
                {GURDWARA_ADDRESS}
              </div>
              <div>
                <strong>Phone:</strong>{' '}
                <a href={phone.href} className="underline font-bold text-black">
                  {GURDWARA_PHONE}
                </a>
              </div>
              <div>
                <strong>Directions:</strong>{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#CC5500] font-bold"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="border-t border-[#CCCCCC] pt-4 text-center text-[11px] text-[#555555]">
          <div>
            &copy; Gurdwara Sikh Sangat, Howrah (12 Mukhram Kanoria Road, Howrah, West Bengal – 711101).
          </div>
          <div className="mt-1">
            Traditional 2015-style website designed with reverence for Gurdwara Sikh Sangat.
          </div>
        </div>
      </div>
    </footer>
  );
};
