/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HomeSection } from './components/HomeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { AccommodationSection } from './components/AccommodationSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { LangarSection } from './components/LangarSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* 2015 Classic Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Home Section with original Gurudwara photo background */}
        <HomeSection onNavigate={handleNavigate} />

        {/* About Us Section with original Gurudwara photo background */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Photo Gallery Section */}
        <GallerySection />

        {/* Accommodation Section (₹150 per day) */}
        <AccommodationSection />

        {/* Our Location Section (Near Howrah Junction Railway Station) */}
        <LocationSection />

        {/* Langar & Seva Section */}
        <LangarSection onNavigate={handleNavigate} />

        {/* Contact Us Section (Phone: 033 3291 4166) */}
        <ContactSection />
      </main>

      {/* 2015 Classic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
