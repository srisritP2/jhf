import React from 'react';

/**
 * ContactInfo component displays church contact details and social links.
 * - Shows email, phone, address, and social media links.
 * - Uses card layout and fade-in animation.
 * - Accessible and responsive.
 */
const ContactInfo: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl my-8 max-w-lg mx-auto text-center border-t-4 border-blue-400 fade-in-section" aria-label="Contact Information">
            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-700">Contact Us</h2>
            {/* Email */}
            <p className="mb-2 text-lg"><strong>Email:</strong> <span className="text-blue-600">info@jhfchurch.org</span></p>
            {/* Phone */}
            <p className="mb-2 text-lg"><strong>Phone:</strong> <span className="text-blue-600">(123) 456-7890</span></p>
            {/* Address */}
            <p className="mb-4 text-lg"><strong>Address:</strong> <span className="text-blue-600">123 Church St, City, State, ZIP</span></p>
            {/* Social media links */}
            <h3 className="text-xl font-semibold mt-6 mb-2 text-purple-700">Follow Us</h3>
            <div className="flex justify-center space-x-6 mt-2">
                <a href="https://facebook.com/jhfchurch" className="text-blue-600 hover:text-blue-800 font-bold" aria-label="Facebook">Facebook</a>
                <a href="https://twitter.com/jhfchurch" className="text-blue-400 hover:text-blue-600 font-bold" aria-label="Twitter">Twitter</a>
                <a href="https://instagram.com/jhfchurch" className="text-pink-600 hover:text-pink-800 font-bold" aria-label="Instagram">Instagram</a>
            </div>
        </div>
    );
};

export default ContactInfo;