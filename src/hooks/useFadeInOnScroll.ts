// useFadeInOnScroll.ts
// React hook to add fade-in effect to elements with the 'fade-in-section' class using Intersection Observer
import React, { useEffect } from 'react';

/**
 * useFadeInOnScroll hook adds fade-in animation to elements with the 'fade-in-section' class.
 * - Uses Intersection Observer API.
 * - One-time animation per element.
 */
const useFadeInOnScroll = () => {
  useEffect(() => {
    // Select all elements with the fade-in-section class
    const elements = document.querySelectorAll('.fade-in-section');
    // Create an Intersection Observer
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    // Observe each element
    elements.forEach((el) => observer.observe(el));
    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);
};

export default useFadeInOnScroll;
