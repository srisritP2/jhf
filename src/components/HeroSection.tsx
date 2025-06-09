import React from 'react';
import jhfimage from '../assets/jhfimage.jpg';
import Button from './UI/Button';

/**
 * HeroSection: advanced, with image background and minimal overlay for full image visibility.
 */
const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[520px] md:min-h-[700px] w-full overflow-hidden rounded-b-3xl shadow-xl mb-2 fade-in-section"
      aria-label="Welcome section with background image"
    >
      {/* Full-bleed background image */}
      <img
        src={jhfimage}
        alt="Jesus Heals Fellowship background"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none rounded-b-3xl"
        style={{ objectPosition: 'top center', filter: 'brightness(0.97) saturate(1.15)' }}
        draggable="false"
        aria-hidden="true"
      />
      {/* Premium radiant gradient blur overlay at bottom */}
      <div
        className="absolute left-0 bottom-0 w-full"
        style={{
          height: '32%',
          background: 'linear-gradient(0deg, rgba(255,255,255,0.97) 60%, rgba(99,102,241,0.18) 90%, transparent 100%)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          zIndex: 15,
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
        }}
        aria-hidden="true"
      />
      {/* Content: no glassmorphism, no white background, only text and button */}
      {/* Move the welcome text and subtext to the bottom, above the button, on the radiant blur */}
      <div className="absolute left-0 bottom-20 w-full flex flex-col items-center z-30 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight text-center drop-shadow-xl pointer-events-auto" style={{ color: '#000957' }} id="hero-welcome-text">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium drop-shadow-lg text-center pointer-events-auto" style={{ color: '#000957' }} id="hero-welcome-subtext">
          Experience faith, healing, and community with us every week.
        </p>
      </div>
      {/* Move the button to the very bottom, on the radiant blur */}      <div
        className="absolute left-0 bottom-0 w-full flex justify-center pb-2 z-40"
        style={{ pointerEvents: 'none' }}
      >        <Button
          className="pointer-events-auto text-lg md:text-xl px-14 py-4 bg-[#344CB7] backdrop-blur-md text-blue-700 font-bold rounded-full shadow-1xl transition-all duration-300 animate-bounce focus:outline-none focus:ring-4 focus:ring-blue-200 tracking-wide drop-shadow-lg border-4 border-white/20 ring-2 ring-white/30 hover:bg-[#23337a]"
          onClick={() => alert('Get Involved Clicked!')}
          aria-label="Get Involved"
        >
          Get Involved
        </Button>
      </div>
      {/* Decorative animated shapes for extra polish */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-pink-400/30 rounded-full blur-2xl animate-pulse z-10" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse z-10" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;