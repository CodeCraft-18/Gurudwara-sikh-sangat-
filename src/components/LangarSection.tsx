import React from 'react';

interface LangarSectionProps {
  onNavigate?: (tabId: string) => void;
}

export const LangarSection: React.FC<LangarSectionProps> = () => {
  return (
    <section id="langar" className="w-full bg-white border-b-2 border-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Bar */}
        <div className="border-b-2 border-black pb-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
            Langar & Seva
          </h2>
        </div>

        {/* Content as specified */}
        <p className="text-base sm:text-lg text-black leading-relaxed m-0 font-normal">
          The Gurudwara follows the Sikh traditions of seva, equality, and community service.
        </p>
      </div>
    </section>
  );
};
