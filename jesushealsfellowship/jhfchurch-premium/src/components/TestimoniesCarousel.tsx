import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * TestimoniesCarousel component displays member testimonials in a carousel.
 * - Uses react-responsive-carousel for sliding effect.
 * - Includes a custom SVG heart icon.
 * - Responsive and accessible.
 */
const HeartIcon = () => (
  // SVG heart icon for visual interest
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-pink-500" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
  </svg>
);

// Define the type for a testimony object
interface Testimony {
  id: number;
  text: string;
  author: string;
}

// Testimonies data
const testimonies: Testimony[] = [
    {
        id: 1,
        text: "This church has changed my life for the better. The community is so welcoming!",
        author: "John Doe"
    },
    {
        id: 2,
        text: "I found my faith here and the support from the congregation is incredible.",
        author: "Jane Smith"
    },
    {
        id: 3,
        text: "The sermons are inspiring and the worship is uplifting. Highly recommend!",
        author: "Emily Johnson"
    }
];

const TestimoniesCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
    };

    // Add type for testimony parameter
    const renderTestimonyCard = (testimony: Testimony) => (
      <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl shadow-md p-8 min-h-[220px] flex flex-col items-center w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105">
              <HeartIcon />
              <p className="text-lg italic text-center mb-4">"{testimony.text}"</p>
              <p className="mt-2 font-semibold text-right w-full">- {testimony.author}</p>
          </div>
      </div>
    );

    return (
        <section className="my-8 fade-in-section" aria-label="Testimonies Carousel">
            <div className="bg-white rounded-2xl shadow-lg max-w-5xl mx-auto p-6 min-h-[370px] flex flex-col justify-center">
                {/* Section heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700 text-center">What Our Members Say</h2>
                {/* Responsive layout for mobile and desktop */}
                <div className="w-full">
                  {/* Mobile: show one card at a time with navigation */}
                  <div className="block md:hidden">
                    <div className="flex justify-center items-center">
                      <button
                        aria-label="Previous Testimony"
                        onClick={handlePrev}
                        className="p-2 text-purple-500 hover:text-purple-700 focus:outline-none"
                      >
                        &#8592;
                      </button>
                      <div className="w-full max-w-xs mx-2">
                        {renderTestimonyCard(testimonies[currentIndex])}
                      </div>
                      <button
                        aria-label="Next Testimony"
                        onClick={handleNext}
                        className="p-2 text-purple-500 hover:text-purple-700 focus:outline-none"
                      >
                        &#8594;
                      </button>
                    </div>
                  </div>
                  {/* Desktop: show carousel as before */}
                  <div className="hidden md:block">
                    {/* Advanced carousel of testimonies with card style */}
                    <Carousel 
                        showArrows={true} 
                        infiniteLoop={true} 
                        autoPlay={true} 
                        interval={5000} 
                        transitionTime={600}
                        className="carousel"
                        showThumbs={false}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={33}
                        swipeable={true}
                        emulateTouch={true}
                        renderIndicator={(onClickHandler, isSelected, index, label) => (
                          <li
                            className={
                              isSelected
                                ? 'inline-block w-3 h-3 mx-1 bg-blue-700 rounded-full'
                                : 'inline-block w-3 h-3 mx-1 bg-blue-200 rounded-full cursor-pointer'
                            }
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                          />
                        )}
                    >
                        {testimonies.map(testimony => (
                            <div key={testimony.id} className="flex flex-col items-center justify-center h-full px-4">
                                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl shadow-md p-8 min-h-[220px] flex flex-col items-center w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105">
                                    <HeartIcon />
                                    <p className="text-lg italic text-center mb-4">"{testimony.text}"</p>
                                    <p className="mt-2 font-semibold text-right w-full">- {testimony.author}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default TestimoniesCarousel;