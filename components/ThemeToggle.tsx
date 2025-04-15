"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        type="button"
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="w-10 h-5 me-1 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow border dark:bg-black/25 dark:shadow-white dark:border-gray-300"
      >
        <div className={`w-6 h-6 flex justify-center items-center rounded-full transition-transform ease-in-out duration-500 transform border dark:border-gray-400 border-gray-200 p-[2px] text-white ${theme === "light" ? 'bg-yellow-500 -translate-x-2':'bg-white translate-x-4'}`}>
          {theme === "light" ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </div>
      </button>
    </>
  );
}
