import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center w-full px-6 py-12">
      <div className="relative flex flex-col md:flex-row items-center max-w-4xl mx-auto text-white space-y-6 md:space-y-0 md:space-x-10 w-full">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src="myimg.png" // Replace with your photo's URL or import the image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left w-full relative">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Ayush Duseja
          </h1>

          {/* Small Title */}
          <p className="text-lg md:text-xl text-gray-300 mt-2">Software Developer</p>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href="AyushDuseja" // Replace with your CV's URL
              download
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Hire Me Button (Positioned at the bottom-right corner of the box) */}
          <div className="absolute bottom-6 right-6">
            <a
              href="mailto:dusejaayush45@gmail.com" // Replace with your email
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
