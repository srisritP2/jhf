import React from 'react';

/**
 * Modal UI component for displaying overlay dialogs.
 * - Accepts isOpen, onClose, title, and children props.
 * - Used for popups, alerts, and dialogs.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 max-w-sm w-full">
        {/* Optional modal title */}
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {/* Modal body */}
        <div>{children}</div>
        {/* Close button */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;