import React from 'react';

/**
 * Button UI component for consistent button styling.
 * - Accepts onClick, children, className, and type props.
 * - Used for all interactive buttons across the site.
 */
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;