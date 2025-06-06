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
        style={{ objectPosition: 'center 15%' }}
        draggable="false"
        aria-hidden="true"
      />
      {/* Bottom-only gradient overlay for image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 rounded-b-3xl" aria-hidden="true" />
      {/* Content: no glassmorphism, no white background, only text and button */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-6 py-10 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-center text-white drop-shadow-xl">
          {/* Welcome to <span className="whitespace-nowrap">JHF Church</span> */}
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium text-white drop-shadow-lg text-center">
          {/* Join us in our journey of faith and community. */}
        </p>
        <Button
          className="text-lg px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full shadow-lg transition duration-300 animate-bounce focus:outline focus:ring-2 focus:ring-yellow-300"
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