import React from 'react';

/**
 * WorshipTimes component displays the schedule of worship services.
 * - Uses card layout for each service.
 * - Includes a custom SVG music icon.
 * - Responsive and accessible.
 */
const MusicIcon = () => (
  // SVG music note icon for visual interest
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-blue-500" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const WorshipTimes: React.FC = () => {
    return (
        <section className="py-8 bg-gradient-to-br from-[#f8fafc] via-[#e0c3fc] to-[#c3cfe2] rounded-2xl shadow-lg my-12 fade-in-section" aria-label="Worship Times">
            <div className="container mx-auto text-center">
                {/* Section heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 tracking-tight leading-tight drop-shadow-md">Worship With Us</h2>
                {/* Service cards */}
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Sunday Morning Service */}
                    <div className="bg-gradient-to-br from-blue-100 to-white border-l-4 border-blue-500 shadow-md rounded-xl p-8 min-w-[220px]">
                        <MusicIcon />
                        <h3 className="text-xl font-bold mb-2 text-blue-800">Sunday Morning<br/>9:30 AM</h3>
                        <p className="text-gray-700">Worship & Sermon Service</p>
                    </div>
                    {/* Sunday Evening Service */}
                    <div className="bg-gradient-to-br from-blue-100 to-white border-l-4 border-blue-500 shadow-md rounded-xl p-8 min-w-[220px]">
                        <MusicIcon />
                        <h3 className="text-xl font-bold mb-2 text-blue-800">Sunday Evening<br/>6:00 PM</h3>
                        <p className="text-gray-700">Healing & Deliverance Service</p>
                        <p className="text-gray-700">Prayers for Individuals</p>
                    </div>
                    {/* Wednesday Night Service */}
                    <div className="bg-gradient-to-br from-purple-100 to-white border-l-4 border-purple-500 shadow-md rounded-xl p-8 min-w-[220px]">
                        <MusicIcon />
                        <h3 className="text-xl font-bold mb-2 text-purple-800">Friday Night<br/>7:00 PM</h3>
                        <p className="text-gray-700">Fasting Prayer and Service</p>
                    </div>
                    {/* Friday Night Service */}
                    <div className="bg-gradient-to-br from-pink-100 to-white border-l-4 border-pink-500 shadow-md rounded-xl p-8 min-w-[220px]">
                        <MusicIcon />
                        <h3 className="text-xl font-bold mb-2 text-pink-800">Branch Church Sunday Morning<br/>8:00 AM</h3>
                        <p className="text-gray-700">Worship and Service</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorshipTimes;