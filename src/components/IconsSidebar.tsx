import { useState, useEffect, useRef } from "react";
import ColorThemeIcon from "./SVG/ColorTheme";
import FileIcon from "./SVG/File";
import Search from "./SVG/Search";
import ColorTheme from "./ui/ColorTheme";

interface IProps {
  toggleLeftPanel: () => void;
  toggleSearchModal: () => void;
}

const IconsSidebar = ({ toggleLeftPanel, toggleSearchModal }: IProps) => {
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowThemeOptions(false);
      }
    };

    if (showThemeOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showThemeOptions]);

  return (
    <div className="bg-[#e4e4e4] dark:bg-[#1e1e1e] h-full shadow-md flex justify-center relative">
      <div className="h-full py-2 flex flex-col justify-between relative">
        <div className="p-1 flex flex-col gap-4">
          <button onClick={toggleLeftPanel}>
            <FileIcon height={30} width={30} className="text-gray-800 dark:text-gray-300" />
          </button>
          <button onClick={toggleSearchModal}>
            <Search className="text-gray-800 dark:text-gray-300" />
          </button>
        </div>

        {/* Color Theme Toggle Button */}
        <div className="relative" ref={modalRef}>
          <button onClick={() => setShowThemeOptions(!showThemeOptions)}>
            <ColorThemeIcon className="text-gray-800 dark:text-gray-300" />
          </button>

          {/* Show Color Theme Dropdown */}
          {showThemeOptions && (
            <div className="absolute left-28 bottom-1 transform -translate-x-1/2">
              <ColorTheme onClose={() => setShowThemeOptions(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconsSidebar;
