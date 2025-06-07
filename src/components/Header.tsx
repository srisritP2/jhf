import React, { useState } from 'react';

// Navigation links for the header (now scroll to section IDs)
const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'worship', label: 'Worship' },
  { to: 'testimonies', label: 'Testimonies' },
  { to: 'prayer', label: 'Prayer' },
  { to: 'contact', label: 'Contact' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Header component with responsive navigation and logo.
 * - Shows a hamburger menu on mobile.
 * - Uses semantic HTML and accessible ARIA labels.
 * - Navigation links are mapped for maintainability.
 */
const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
                {/* Logo and site title */}
                <div className="flex items-center gap-3 mb-2 md:mb-0 text-white">
                  <span className="mr-2 flex items-center" aria-label="JHF Logo">
                    {/* Red Christian cross: vertical bar longer, horizontal bar shorter and higher, only cross is red */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" className="drop-shadow-md">
                      <rect x="14.5" y="4" width="3" height="20" rx="1.5" fill="#dc2626"/>
                      <rect x="9" y="11" width="14" height="3" rx="1.5" fill="#dc2626"/>
                      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
                    </svg>
                    <span className="font-bold text-2xl md:text-3xl tracking-tight">Jesus Heals Fellowship</span>
                  </span>
                </div>
                {/* Mobile Hamburger Button */}
                {/* Hamburger menu button for mobile navigation */}
                <button
                  className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-white/10 focus:outline focus:ring-2 focus:ring-yellow-200"
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    )}
                  </svg>
                </button>
                {/* Desktop Navigation */}
                {/* Main navigation for desktop screens */}
                <nav aria-label="Main Navigation" className="hidden md:block">
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-lg">
                        {navLinks.map((link) => (
                          <li key={link.to}>
                            <button
                              type="button"
                              onClick={() => scrollToSection(link.to)}
                              className="hover:text-yellow-200 text-white transition font-semibold focus:outline focus:ring-2 focus:ring-yellow-200 px-2 py-1 rounded-md duration-200 bg-transparent border-none cursor-pointer"
                            >
                              {link.label}
                            </button>
                          </li>
                        ))}
                    </ul>
                </nav>
                {/* Mobile Navigation Dropdown */}
                {/* Dropdown navigation for mobile screens */}
                {menuOpen && (
                  <nav aria-label="Mobile Navigation" className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 shadow-lg animate-fadeIn">
                    <ul className="flex flex-col items-center gap-2 py-4">
                      {navLinks.map((link) => (
                        <li key={link.to}>
                          <button
                            type="button"
                            onClick={() => { scrollToSection(link.to); setMenuOpen(false); }}
                            className="block px-6 py-2 text-lg text-white hover:text-yellow-200 font-semibold focus:outline focus:ring-2 focus:ring-yellow-200 duration-200 bg-transparent border-none cursor-pointer"
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
            </div>
        </header>
    );
};

export default Header;