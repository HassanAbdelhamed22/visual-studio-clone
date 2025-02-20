import { useState, useEffect } from "react";

interface ColorThemeProps {
  onClose: () => void;
}

const themes = ["light", "dark", "high-contrast"];

const ColorTheme = ({ onClose }: ColorThemeProps) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Apply the selected theme
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  // Set the initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    onClose(); // Close after selecting a theme
  };

  return (
    <div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-2 w-40"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => handleThemeChange(theme)}
          className={`w-full px-4 py-2 rounded-md text-sm font-medium text-left ${
            currentTheme === theme
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ColorTheme;
