/**
 * helpers.ts provides utility functions for formatting dates, truncating text, validating email, and smooth scrolling.
 * - Used throughout the site for consistency and code reuse.
 */

export const formatDate = (date: Date): string => {
    // Format a Date object as 'Month Day, Year'
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const truncateText = (text: string, maxLength: number): string => {
    // Truncate text to a maximum length, adding ellipsis if needed
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const validateEmail = (email: string): boolean => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const scrollToTop = (): void => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
};