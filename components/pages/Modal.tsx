"use client";
import React, { PropsWithChildren, useEffect, useRef } from "react";

interface props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

// Modal Component Definition
export const Modal: React.FC<props> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Effect to handle Escape key press for closing the modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle click outside the modal content to close it
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // If the click is on the backdrop itself (not on the modal content)
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    // Backdrop overlay
    <div
      className="modal"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleBackdropClick}
    >
      {/* Modal content container */}
      <div
        ref={modalRef}
        className="modal__container"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal content passed as children */}
        {children}
      </div>
    </div>
  );
};
