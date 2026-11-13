import React, { useState } from 'react';
import { GURDWARA_PHONE, MAPS_URL, formatPhoneNumber } from '../utils/accommodation.ts';

interface HomeSectionProps {
  onNavigate: (tabId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const phone = formatPhoneNumber(GURDWARA_PHONE);

  return (
    <section
      id="home"
      className="relative w-full border-b-2 border-black bg-white"
      style={{
        backgroundImage: "url('/assets/aistudio/file_00000000a5b48211a76cba40d4ef39bf_358184db.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        minHeight: '650px',
      }}
    >
      <div className="w-full h-full min-h-[650px] bg-black/15 py-8 sm:py-14 px-4 flex flex-col justify-between">
        {/* Toggle Button */}
        <div className="max-w-5xl mx-auto w-full flex justify-end">
          <button
            type="button"
            onClick={() => setShowFullPhoto(!showFullPhoto)}
            className="btn-secondary text-xs font-bold"
            aria-label="Toggle full photo view"
          >
            {showFullPhoto ? '[ Show Content Panel ]' : '[ 👁️ View Unobscured Building ]'}
          </button>
        </div>

        {/* Center Content Panel */}
        {!showFullPhoto ? (
          <div className="max-w-3xl mx-auto w-full my-auto">
            <div className="photo-overlay-box text-black">
              {/* Ek Onkar & Title */}
              <div className="border-b-2 border-[#CC5500] pb-3 mb-4">
                <span className="text-[#CC5500] text-4xl sm:text-5xl font-bold mr-2 select-none">ੴ</span>
                <h1 className="inline text-2xl sm:text-3xl font-black tracking-tight text-black">
                  Gurdwara Sikh Sangat, Howrah
                </h1>
              </div>

              {/* Exact user text */}
              <p className="text-base sm:text-lg font-bold text-black leading-relaxed mb-6">
                A peaceful place for prayer, community seva, and spiritual guidance. We welcome devotees and visitors with respect and warmth.
              </p>

              {/* Clickable Rectangular Orange Buttons Over Photo */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => onNavigate('accommodation')}
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  Accommodation
                </button>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  Get Directions
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  About Us
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  Photo Gallery
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('langar')}
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  Langar & Seva
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn-orange text-sm font-bold uppercase tracking-wider"
                >
                  Contact Us
                </button>

                <a
                  href={phone.href}
                  className="btn-secondary text-sm font-bold"
                >
                  Call: {GURDWARA_PHONE}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto w-full text-center bg-white/70 border-2 border-black p-4 my-auto">
            <p className="text-sm font-bold text-black mb-3">
              Viewing Gurdwara Sikh Sangat, Howrah building facade and entrance arch.
            </p>
            <button
              type="button"
              onClick={() => setShowFullPhoto(false)}
              className="btn-orange text-sm uppercase font-bold"
            >
              Back to Content & Buttons
            </button>
          </div>
        )}

        <div className="max-w-5xl mx-auto w-full" />
      </div>
    </section>
  );
};
