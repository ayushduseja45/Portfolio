import React from "react";

const Navbar = () => {
  return (
    <div
      className="bg-gray-800 text-white w-full px-6 py-4 shadow-md fixed top-0 left-0 z-10"
      style={{ margin: 0 }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Main Heading */}
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Center Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-blue-400 transition">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0a12 12 0 00-3.795 23.393c.6.112.82-.261.82-.58 0-.285-.011-1.04-.017-2.04-3.338.725-4.042-1.612-4.042-1.612-.545-1.387-1.33-1.757-1.33-1.757-1.087-.743.083-.728.083-.728 1.203.085 1.837 1.237 1.837 1.237 1.068 1.831 2.804 1.302 3.49.997.107-.774.418-1.302.762-1.6-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.221-.123-.302-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.487 11.487 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.655 1.652.242 2.874.118 3.176.768.841 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.478 5.92.43.37.814 1.1.814 2.22 0 1.604-.015 2.895-.015 3.286 0 .32.217.694.824.576A12 12 0 0012 0"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452H16.89v-5.554c0-1.324-.025-3.029-1.846-3.029-1.847 0-2.13 1.443-2.13 2.936v5.647H9.356V9h3.424v1.561h.05c.478-.9 1.64-1.846 3.375-1.846 3.609 0 4.275 2.376 4.275 5.467v6.27zM5.337 7.433c-1.104 0-2-.898-2-2s.896-2 2-2c1.104 0 2 .898 2 2s-.896 2-2 2zm1.754 13.02H3.583V9h3.508v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451c.979 0 1.778-.774 1.778-1.729V1.729C24 .774 23.204 0 22.225 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
