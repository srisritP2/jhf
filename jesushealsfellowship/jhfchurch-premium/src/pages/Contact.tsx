import React from 'react';
import ContactInfo from '../components/ContactInfo';
import PrayerRequestForm from '../components/PrayerRequestForm';

/**
 * Contact page with side-by-side layout for ContactInfo and PrayerRequestForm on desktop,
 * stacked on mobile for responsiveness.
 */
const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="mb-8 text-center">We would love to hear from you! Please reach out with any questions or prayer requests.</p>
            {/* Responsive flex layout: side by side on md+, stacked on mobile */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-stretch justify-center">
                <div className="flex-1 flex items-stretch">
                    <ContactInfo />
                </div>
                <div className="flex-1 flex items-stretch">
                    <PrayerRequestForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;