import { useState } from "react";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    const body = document.body;
    body.classList.toggle("bg-gray-900", !darkMode);
    body.classList.toggle("text-white", !darkMode);
    body.classList.toggle("bg-white", darkMode);
    body.classList.toggle("text-black", darkMode);
  };

  return (
    <header
      className={`bg-gradient-to-br from-gray-700 to-gray-700 py-8 fixed top-0 w-full z-50 shadow-lg flex items-center transition duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-800 to-gray-700"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="leftcontent">
          <a href="#">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </a>
        </div>
        <nav className="centercontent flex-grow">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="#about"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="dark-mode-toggle relative inline-block w-16 h-8 ml-2">
          <input
            type="checkbox"
            id="darkModeSwitch"
            className="hidden"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="darkModeSwitch"
            className="block w-full h-full bg-gray-800 rounded-full cursor-pointer transition"
          >
            <span
              className={`sun-icon absolute top-1 left-1 text-white transition-opacity duration-300 ${
                darkMode ? "opacity-100" : "opacity-0"
              }`}
            >
              ☀️
            </span>
            <span
              className={`moon-icon absolute top-1 right-1 text-white transition-opacity duration-300 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            >
              🌙
            </span>
            <span
              className={`block w-8 h-8 bg-white rounded-full transition-transform duration-300 transform ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>
        <div className="rightcontent flex items-center space-x-2">
          <a
            className="btn1 text-white text-sm px-2 border-r border-black transition"
            href="#"
          >
            Sign Up
          </a>
          <a
            className="text-blue-300 text-sm transition hover:text-blue-600"
            href="#"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
