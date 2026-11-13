import React, { useState } from 'react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/assets/aistudio/file_00000000a5b48211a76cba40d4ef39bf_358184db.png',
    title: 'Gurdwara Sikh Sangat Building Facade',
    description: 'Exterior view of Gurdwara Sikh Sangat Sahib at 12 Mukhram Kanoria Road, Howrah.',
  },
  {
    src: '/assets/aistudio/Screenshot_20261112-090918_6ce09c45.png',
    title: 'Darbar Sahib Hall & Sangat Congregation',
    description: 'Devotees and Sangat gathered for prayer and kirtan in the main prayer hall.',
  },
  {
    src: '/assets/aistudio/Screenshot_20261112-091634_c9eaefb4.png',
    title: 'Gurudwara Courtyard & Architecture',
    description: 'Inner courtyard, arches, and dome architecture of Gurdwara Sahib.',
  },
  {
    src: '/assets/aistudio/Screenshot_20261112-091505_f0f31a2e.png',
    title: 'Floral Decorated Palki Sahib',
    description: 'Close-up of the sacred Palki Sahib adorned with fresh flower garlands.',
  },
  {
    src: '/assets/aistudio/Screenshot_20261112-090909_4dc6c773.png',
    title: 'Darbar Sahib Sacred Altar',
    description: 'Marble Palki Sahib with red ceremonial canopy and Sangat in Darbar Sahib.',
  },
  {
    src: '/assets/aistudio/Screenshot_20261112-091549_2669f731.png',
    title: 'Sri Guru Granth Sahib Ji Palki Sahib',
    description: 'Marble canopy with golden ceremonial drapery and Granthi Sahib Ji performing seva.',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="w-full bg-white border-b-2 border-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Bar */}
        <div className="border-b-2 border-black pb-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-black bg-[#FF8800] px-2 py-0.5 inline-block mb-1">
            Photo Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
            Gurudwara Photo Gallery
          </h2>
          <p className="text-sm font-bold text-[#444444] mt-1 mb-0">
            Darshans of Gurdwara Sikh Sangat, Howrah – Darbar Sahib, Palki Sahib, Courtyard, and Sangat.
          </p>
        </div>

        {/* 2015 Style Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="border-2 border-black bg-[#FAFAFA] p-2 flex flex-col justify-between"
            >
              <div
                className="w-full h-56 bg-[#EEEEEE] overflow-hidden border border-black cursor-pointer relative"
                onClick={() => handleOpen(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-2.5">
                <h3 className="text-sm font-bold text-black m-0 leading-tight">
                  {image.title}
                </h3>
                <p className="text-xs text-[#444444] mt-1 mb-2 line-clamp-2">
                  {image.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleOpen(index)}
                  className="btn-orange w-full text-xs font-bold uppercase tracking-wider py-1.5"
                >
                  View Large Photo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2015 Style Lightbox / Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-6"
            onClick={handleClose}
          >
            <div
              className="bg-white border-2 border-black max-w-3xl w-full p-4 max-h-[95vh] flex flex-col justify-between text-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="border-b-2 border-black pb-2 mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-black text-black m-0 truncate">
                  {GALLERY_IMAGES[selectedIndex].title}
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-secondary text-xs sm:text-sm font-bold px-3 py-1"
                  aria-label="Close photo view"
                >
                  Close [X]
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="w-full max-h-[60vh] bg-black border border-black flex items-center justify-center overflow-hidden mb-3">
                <img
                  src={GALLERY_IMAGES[selectedIndex].src}
                  alt={GALLERY_IMAGES[selectedIndex].title}
                  className="max-h-[60vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption & Navigation Controls */}
              <div className="border-t border-[#CCCCCC] pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-black">
                  <span className="font-bold">
                    Photo {selectedIndex + 1} of {GALLERY_IMAGES.length}:
                  </span>{' '}
                  {GALLERY_IMAGES[selectedIndex].description}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-orange text-xs font-bold uppercase px-3 py-1.5"
                  >
                    &laquo; Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-orange text-xs font-bold uppercase px-3 py-1.5"
                  >
                    Next &raquo;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
