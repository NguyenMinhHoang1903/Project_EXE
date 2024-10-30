import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Dark mode toggle
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } bg-[#f9fafc] font-sans text-[#333] leading-relaxed`}
    >
      <header
        className={`${
          sticky ? "sticky top-0" : ""
        } bg-gradient-to-r from-gray-800 to-gray-900 p-4 fixed top-0 w-full z-50 shadow-md flex items-center`}
      >
        <div className="flex items-center w-full px-5 justify-between">
          <img src={logo} alt="Logo" className="h-16 rounded-full" />
          <nav className="flex-grow flex justify-center space-x-6">
            <a
              href="#"
              className="text-white font-semibold text-lg hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-semibold text-lg hover:underline"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white font-semibold text-lg hover:underline"
            >
              About
            </a>
          </nav>
          <div className="dark-mode-toggle">
            <input
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="darkModeSwitch">
              <span className="sun-icon">☀️</span>
              <span className="moon-icon">🌙</span>
            </label>
          </div>
          <div className="absolute top-0 right-6 flex space-x-4 text-sm">
            <a
              href="#"
              className="text-white border-r hover:text-blue-600 border-black pr-4"
            >
              Sign In
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
