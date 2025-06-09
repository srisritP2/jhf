import React from 'react';
import HeroSection from '../components/HeroSection';
import WorshipTimes from '../components/WorshipTimes';
import TestimoniesCarousel from '../components/TestimoniesCarousel';
import PrayerRequestForm from '../components/PrayerRequestForm';
import ContactInfo from '../components/ContactInfo';
import DirectionsMap from '../components/DirectionsMap';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

/**
 * Home page with modern, grid-based alignment and clear section separation.
 * - All sections use consistent max-width and spacing.
 * - Testimonies and prayer/contact use two-column layouts on desktop.
 * - Contact section uses a two-column grid for info and map.
 */
const Home: React.FC = () => {
    useFadeInOnScroll();
    return (
        <div className="flex flex-col min-h-screen items-center">
            <main className="flex-grow w-full flex flex-col items-center">
                {/* Hero Section */}
                <div id="hero" className="w-full flex justify-center">
                  <div className="w-full max-w-5xl px-2 md:px-0">
                    <HeroSection />
                  </div>
                </div>
                {/* Worship Times */}
                <div id="worship" className="w-full flex justify-center mt-12 z-10">
                  <div className="w-full max-w-5xl px-2 md:px-0">
                    <WorshipTimes />
                  </div>
                </div>
                {/* Miraculous Healings/Testimonies Section */}
                <div id="testimonies" className="w-full flex justify-center mt-12">
                  <div className="w-full max-w-5xl px-2 md:px-0 bg-gradient-to-br from-[#f8fafc] via-[#e0c3fc] to-[#c3cfe2] rounded-2xl shadow-xl py-8 md:py-12 my-8">
                    <TestimoniesCarousel />
                  </div>
                </div>
                {/* Prayer Team/Request Prayer Section (2-column grid) */}
                <div id="prayer" className="w-full flex justify-center mt-12">
                  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#e0c3fc] via-[#f5f7fa] to-[#c3cfe2] rounded-2xl shadow-xl py-8 md:py-12 my-8">
                    {/* Placeholder for Prayer Team/Ministry visual */}
                    <div className="bg-white/80 rounded-xl shadow p-8 flex flex-col items-center justify-center min-h-[260px]">
                      <span className="text-6xl mb-4">💚</span>
                      <div className="text-xl font-semibold text-center mb-4">[Prayer Team Ministering]</div>
                      <div className="text-3xl font-bold text-green-700">24</div>
                      <div className="text-base text-green-700">Healings This Month</div>
                    </div>
                    <div>
                      <PrayerRequestForm />
                    </div>
                  </div>
                </div>
                {/* Contact Section (2-column grid: info + map) */}
                <div id="contact" className="w-full flex justify-center mt-12">
                  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#c3cfe2] via-[#f5f7fa] to-[#e0c3fc] rounded-2xl shadow-xl py-8 md:py-12 my-8">
                    <div className="h-96 flex items-stretch">
                      <ContactInfo />
                    </div>
                    <div className="h-96 flex items-stretch">
                      <DirectionsMap />
                    </div>
                  </div>
                </div>
            </main>
        </div>
    );
};

export default Home;