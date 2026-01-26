import React, { useRef, useState } from "react";
import IconPreview from "./IconPreview";

export default function DesktopIcon({ icon, label, preview, onOpen }) {
  const timer = useRef(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleEnter = () => {
    timer.current = setTimeout(() => setShowPreview(true), 500);
  };

  const handleLeave = () => {
    clearTimeout(timer.current);
    setShowPreview(false);
  };

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onDoubleClick={onOpen}
        className="flex flex-col items-center gap-2 text-black focus:outline-none"
      >
        {/* ICON directly scales on hover */}
        <div className="transition-transform duration-300 hover:scale-125">
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt={label}
              className="w-16 h-16 object-contain" // default size
              draggable={false}
            />
          ) : (
            // For React SVG components
            React.cloneElement(icon, { width: 64, height: 64 }) 
          )}
        </div>

        {/* LABEL */}
        <span className="text-[11px] leading-tight text-center select-none mt-1">
          {label}
        </span>
      </button>

      {showPreview && <IconPreview title={label} description={preview} />}
    </div>
  );
}
