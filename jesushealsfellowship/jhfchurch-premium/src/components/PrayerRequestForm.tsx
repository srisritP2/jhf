import React, { useState } from 'react';

/**
 * PrayerRequestForm component for submitting prayer requests.
 * - Includes form validation and user feedback.
 * - Accessible and responsive.
 */
const PrayerRequestForm: React.FC = () => {
    // State for form fields and feedback
    const [name, setName] = useState('');
    const [request, setRequest] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !request.trim()) {
            setError('Please fill out all required fields.');
            return;
        }
        setError('');
        // Here you would typically send the request to your backend
        setSubmitted(true);
        setName('');
        setRequest('');
    };

    return (
        <div className="max-w-md mx-auto p-3 bg-white rounded-lg shadow-md fade-in-section" aria-label="Prayer Request Form">
            <h2 className="text-xl font-semibold mb-4">Prayer Request</h2>
            {/* Show thank you message if submitted */}
            {submitted ? (
                <div className="text-green-600" role="status">Thank you for your prayer request!</div>
            ) : (
                <form onSubmit={handleSubmit} noValidate>
                    {/* Name field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline focus:ring-2 focus:ring-blue-400"
                            required
                            aria-required="true"
                        />
                    </div>
                    {/* Prayer request field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="request">
                            Prayer Request <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="request"
                            value={request}
                            onChange={(e) => setRequest(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline focus:ring-2 focus:ring-blue-400"
                            rows={4}
                            required
                            aria-required="true"
                        />
                    </div>
                    {/* Error message */}
                    {error && <div className="text-red-500 mb-2" role="alert">{error}</div>}
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline focus:ring-2 focus:ring-blue-400"
                        aria-label="Submit Prayer Request"
                    >
                        Submit Request
                    </button>
                </form>
            )}
        </div>
    );
};

export default PrayerRequestForm;