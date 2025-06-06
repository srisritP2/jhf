import React from 'react';
import PrayerRequestForm from '../components/PrayerRequestForm';

const Prayer: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Prayer Requests</h1>
            <p className="text-lg text-center mb-4">
                We believe in the power of prayer. If you have a prayer request, please fill out the form below.
            </p>
            <PrayerRequestForm />
        </div>
    );
};

export default Prayer;