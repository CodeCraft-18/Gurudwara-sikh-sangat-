import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'location', label: 'Our Location' },
    { id: 'langar', label: 'Langar & Seva' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <header className="w-full bg-[#333333] border-b-2 border-black sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-2">
        <div className="flex flex-wrap items-center justify-start">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold border-r border-[#555555] text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#FF8800] text-black font-black'
                    : 'bg-transparent text-white hover:bg-[#555555]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
