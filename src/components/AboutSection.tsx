import React from 'react';
import { MAPS_URL } from '../utils/accommodation.ts';

interface AboutSectionProps {
  onNavigate: (tabId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="relative w-full border-b-2 border-black bg-white"
      style={{
        backgroundImage: "url('/assets/aistudio/file_00000000a5b48211a76cba40d4ef39bf_358184db.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay to ensure readability while preserving the visible facade */}
      <div className="w-full h-full bg-black/25 py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <div className="photo-overlay-box text-black">
            {/* Header */}
            <div className="border-b-2 border-black pb-3 mb-5">
              <span className="text-xs uppercase font-bold tracking-wider text-[#993D00] bg-[#FFF2E0] border border-[#FF8800] px-2 py-0.5 inline-block mb-1">
                About The Gurudwara
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
                About Gurdwara Sikh Sangat, Howrah
              </h2>
            </div>

            {/* Core copy specified by user */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-black">
              <p className="font-bold text-base sm:text-lg">
                Gurdwara Sikh Sangat is located in Howrah, West Bengal, near Howrah Railway Station.
              </p>
              <p>
                The Gurudwara represents the Sikh principles of <strong>equality, compassion, humility, and selfless service (Seva)</strong>.
              </p>
              <p>
                Visitors can learn about Sikh traditions and experience the spirit of <strong>Sangat</strong>, which means congregation or community.
              </p>
            </div>

            {/* Practical Visitor Protocol (2015 Style Table) */}
            <div className="mt-6 border border-black bg-white/70 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b border-[#CCCCCC] pb-2 mb-3">
                Guidelines for Visitors & Devotees
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="border-l-2 border-[#FF8800] pl-3">
                  <strong>Head Covering:</strong> Everyone must cover their head before entering the Darbar Sahib. Head cloths are available at the entrance.
                </div>
                <div className="border-l-2 border-[#FF8800] pl-3">
                  <strong>Footwear:</strong> Please remove shoes and socks, and deposit them respectfully in the designated Joda Ghar.
                </div>
                <div className="border-l-2 border-[#FF8800] pl-3">
                  <strong>Cleanliness:</strong> Wash hands and feet at the clean water stations provided before proceeding into prayer halls.
                </div>
                <div className="border-l-2 border-[#FF8800] pl-3">
                  <strong>Sacred Atmosphere:</strong> Tobacco, cigarettes, alcohol, and intoxicating substances are strictly prohibited on premises.
                </div>
              </div>
            </div>

            {/* Clickable Rectangular Orange Buttons */}
            <div className="mt-6 pt-4 border-t border-black flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => onNavigate('accommodation')}
                className="btn-orange text-xs sm:text-sm uppercase font-bold"
              >
                View Accommodation (₹150/Day)
              </button>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-xs sm:text-sm uppercase font-bold"
              >
                Get Directions to Gurudwara
              </a>

              <button
                type="button"
                onClick={() => onNavigate('langar')}
                className="btn-orange text-xs sm:text-sm uppercase font-bold"
              >
                Learn About Langar & Seva
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="btn-secondary text-xs sm:text-sm uppercase font-bold"
              >
                Contact Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
