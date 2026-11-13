import React from 'react';
import { GURDWARA_ADDRESS, MAPS_URL } from '../utils/accommodation.ts';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="w-full bg-white border-b-2 border-black py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Bar */}
        <div className="border-b-2 border-black pb-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-black bg-[#FF8800] px-2 py-0.5 inline-block mb-1">
            Map & Directions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black m-0">
            Our Location
          </h2>
          <p className="text-sm font-bold text-[#444444] mt-1 mb-0">
            Conveniently located in Howrah, West Bengal – Near Howrah Junction Railway Station.
          </p>
        </div>

        {/* Location Info Banner */}
        <div className="border-2 border-black bg-[#F5F5F5] p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <div>
                <span className="text-xs font-bold uppercase text-[#777777] block">Address:</span>
                <span className="text-base sm:text-lg font-bold text-black block">
                  {GURDWARA_ADDRESS}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-[#777777] block">Nearby Landmark:</span>
                <span className="text-sm font-bold text-black block">
                  Howrah Junction Railway Station (Walking Distance / ~700 meters)
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-lg text-sm uppercase font-bold tracking-wider inline-flex items-center gap-2"
                >
                  <span>🗺️</span> Get Directions on Google Maps
                </a>

                <a
                  href="tel:03332914166"
                  className="btn-secondary text-sm font-bold uppercase inline-flex items-center gap-2"
                >
                  <span>📞</span> Call for Route Assistance
                </a>
              </div>
            </div>

            {/* How to Reach Guide */}
            <div className="border border-black bg-white p-3 text-xs text-black">
              <h4 className="font-bold uppercase border-b border-[#CCCCCC] pb-1 mb-2">
                Travel Directions
              </h4>
              <ul className="space-y-2 pl-4 list-disc m-0">
                <li>
                  <strong>From Howrah Railway Station:</strong> Exit towards the main station concourse/cab road. Head north on Mukhram Kanoria Road (approx. 5–10 min walk or local auto).
                </li>
                <li>
                  <strong>From Kolkata City / Esplanade:</strong> Cross the historic Howrah Bridge (Rabindra Setu) into Howrah; turn right towards Mukhram Kanoria Road.
                </li>
                <li>
                  <strong>From Netaji Subhash Chandra Bose Airport (CCU):</strong> Approx 18 km by pre-paid taxi or app cab via VIP Road and Vidyasagar Setu.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map Container (2015 Style rectangular frame) */}
        <div className="border-2 border-black">
          <div className="bg-[#333333] text-white px-3 py-1.5 text-xs font-bold flex justify-between items-center">
            <span>Google Maps View: Gurdwara Sikh Sangat, Howrah</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8800] underline"
            >
              [ Open Fullscreen Map ]
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 bg-[#EEEEEE]">
            <iframe
              title="Gurdwara Sikh Sangat Howrah Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=12+Mukhram+Kanoria+Road,+Howrah,+West+Bengal+711101&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
