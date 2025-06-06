import React from 'react';
import TestimoniesCarousel from '../components/TestimoniesCarousel';

const Testimonies: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">What Our Members Say</h1>
            <TestimoniesCarousel />
        </div>
    );
};

export default Testimonies;