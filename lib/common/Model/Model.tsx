import React, { lazy,useEffect, useRef } from "react";
import Button from "../Button";
// const Button = lazy(() => import("../Button"));

interface ButtonProps {
  children: string;
  func?: () => void;
  bgColor?: string;
  color?: string;
  className?: string;
  isDisable?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: React.ReactNode;
  buttons?: ButtonProps[];
  width?: string;
  height?: string;
  bgColor?: string;
  outsideClick?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  buttons = [],
  width = "w-[400px]",
  height = "h-[300px]",
  bgColor = "bg-white",
  outsideClick = true,
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Handle outside click to close modal
  const handleClickOutside = (e: React.MouseEvent) => {
    if (outsideClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[color:var(--color-overlay)] flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className={`rounded shadow-lg p-6 ${bgColor} ${width} ${height} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        {/* Content */}
        <div className="mb-4">{content}</div>

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex justify-end space-x-2 mt-4">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                onClick={btn.func}
                disabled={btn.isDisable}
                {...btn}
              >
                {btn.children}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
