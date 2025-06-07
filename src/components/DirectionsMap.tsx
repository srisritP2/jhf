import React from 'react';

/**
 * DirectionsMap component embeds a Google Map for church directions.
 * - Uses an iframe for Google Maps embed.
 * - Styled as a card with fade-in animation.
 * - Responsive and accessible.
 */
const DirectionsMap: React.FC = () => {
    return (
        <div className="w-full h-96 my-8 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto border-t-4 border-purple-400 fade-in-section" aria-label="Directions Map">
            {/* Google Maps iframe embed */}
            <iframe
                title="Directions to JHF Church"
                src="https://www.google.com/maps?q=18.115091,83.4153228&hl=en&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default DirectionsMap;

// In your Contact or Home page, replace the DirectionsMap usage with the new location:
// <DirectionsMap />