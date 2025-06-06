import React from 'react';
import WorshipTimes from '../components/WorshipTimes';
import TestimoniesCarousel from '../components/TestimoniesCarousel';
import PrayerRequestForm from '../components/PrayerRequestForm';

const Worship: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Worship Services</h1>
            <WorshipTimes />
            <div className="my-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Member Testimonies</h2>
                <TestimoniesCarousel />
            </div>
            <div className="my-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Prayer Requests</h2>
                <PrayerRequestForm />
            </div>
        </div>
    );
};

export default Worship;