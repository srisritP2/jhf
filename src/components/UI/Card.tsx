import React from 'react';

/**
 * Card UI component for displaying content in a styled card.
 * - Accepts title, content, and optional image.
 * - Used for modular, reusable card layouts.
 */
interface CardProps {
    title: string;
    content: string;
    imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Optional image at the top of the card */}
            {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
            <div className="px-6 py-4">
                {/* Card title */}
                <div className="font-bold text-xl mb-2">{title}</div>
                {/* Card content */}
                <p className="text-gray-700 text-base">{content}</p>
            </div>
        </div>
    );
};

export default Card;