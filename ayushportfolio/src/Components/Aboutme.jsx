// import React from "react";

// const AboutMe = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center justify-center w-full">
//       {/* About Me Section */}
//       <div className="max-w-5xl mx-auto text-center space-y-8">
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//           About Me
//         </h2>

//         {/* Paragraph about you */}
//         <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
//           I am a passionate software developer who loves creating impactful and efficient applications.
//           With a strong foundation in frontend and backend technologies, I aim to build solutions that
//           bring value to users and businesses. I am also deeply interested in Artificial Intelligence, 
//           Machine Learning, and Data Science, having worked on several projects in these domains.
//           Continuous learning and adapting to new technologies is a core part of my journey as a developer.
//         </p>

//         {/* Six Rectangle Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//           {/* Box 1: Data Science & ML */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-data-science-data-engineering-outline-outline-black-m-oki-orlando-2.png"
//                 alt="Data Science"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Data Science & ML</h3>
//             <p className="text-gray-300 mt-2">
//               Exploring and implementing Machine Learning and Data Science techniques in projects and research.
//             </p>
//           </div>

//           {/* Box 2: Projects */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/ios/50/group-of-projects.png"
//                 alt="Projects"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Projects</h3>
//             <p className="text-gray-300 mt-2">
//               Developed applications using MERN stack, implemented AI/ML models, and participated in hackathons.
//             </p>
//           </div>

//           {/* Box 3: Education */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/ios/50/education.png"
//                 alt="Education"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Education</h3>
//             <p className="text-gray-300 mt-2">
//               Third-year undergraduate pursuing a degree in Computer Science & Engineering.
//             </p>
//           </div>

//           {/* Box 4: Frontend Development */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-green-500 via-teal-600 to-blue-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/ios/50/code--v1.png"
//                 alt="Frontend Development"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
//             <p className="text-gray-300 mt-2">
//               Building interactive and responsive user interfaces with modern technologies.
//             </p>
//           </div>

//           {/* Box 5: Backend Development */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-green-500 via-teal-600 to-blue-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/ios-filled/50/programming.png"
//                 alt="Backend Development"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Backend Development</h3>
//             <p className="text-gray-300 mt-2">
//               Creating robust and scalable server-side applications with various backend technologies.
//             </p>
//           </div>

//           {/* Box 6: Problem Solving */}
//           <div className="p-6 bg-transparent border-4 border-gradient-to-r from-green-500 via-teal-600 to-blue-500 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://img.icons8.com/ios/50/creativity-and-resourcefulness.png"
//                 alt="Problem Solving"
//                 className="h-12 w-12 filter invert"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-white">Problem Solving</h3>
//             <p className="text-gray-300 mt-2">
//               Solving complex problems through logical thinking and efficient algorithms.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;



import React, { useState } from "react";

const AboutMe = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  // Data for each box
  const boxes = [
    {
      id: 1,
      title: "Data Science & ML",
      description: "Exploring and implementing Machine Learning and Data Science techniques in projects and research.",
      icon: "https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-data-science-data-engineering-outline-outline-black-m-oki-orlando-2.png",
      color: "from-blue-500 to-indigo-600",
      details: "Worked on multiple projects involving data analysis, machine learning models, and predictive analytics. Familiar with Python, TensorFlow, and NumPy.",
    },
    {
      id: 2,
      title: "Projects",
      description: "Developed applications using MERN stack, implemented AI/ML models, and participated in hackathons.",
      icon: "https://img.icons8.com/ios/50/group-of-projects.png",
      color: "from-purple-500 to-pink-600",
      details: "Participated in hackathons, creating innovative solutions, including a job portal platform and an AI-based mental health chatbot.",
    },
    {
      id: 3,
      title: "Education",
      description: "Third-year undergraduate pursuing a degree in Computer Science & Engineering.",
      icon: "https://img.icons8.com/ios/50/education.png",
      color: "from-green-500 to-teal-600",
      details: "Currently pursuing a BE in Computer Science at VESIT, with a focus on software development and AI/ML research.",
    },
    {
      id: 4,
      title: "Frontend Development",
      description: "Building interactive and responsive user interfaces with modern technologies.",
      icon: "https://img.icons8.com/ios/50/code--v1.png",
      color: "from-yellow-500 to-orange-600",
      details: "Skilled in React, Material-UI, Tailwind, and Next.js. Focused on creating seamless and responsive user interfaces.",
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications with various backend technologies.",
      icon: "https://img.icons8.com/ios-filled/50/programming.png",
      color: "from-red-500 to-purple-600",
      details: "Experienced in Node.js, Express, and MongoDB. Built RESTful APIs and integrated machine learning models into backends.",
    },
    {
      id: 6,
      title: "Problem Solving",
      description: "Solving complex problems through logical thinking and efficient algorithms.",
      icon: "https://img.icons8.com/ios/50/creativity-and-resourcefulness.png",
      color: "from-cyan-500 to-blue-500",
      details: "Proficient in solving problems using data structures and algorithms. Currently strengthening competitive programming skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center justify-center w-full">
      {/* About Me Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          I am a passionate software developer who loves creating impactful and efficient applications.
          With a strong foundation in frontend and backend technologies, I aim to build solutions that
          bring value to users and businesses. I am also deeply interested in Artificial Intelligence, 
          Machine Learning, and Data Science, having worked on several projects in these domains.
          Continuous learning and adapting to new technologies is a core part of my journey as a developer.
        </p>

        {/* Six Rectangle Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`p-6 bg-transparent border-4 border-gradient-to-r ${box.color} rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer`}
              onClick={() => setSelectedBox(box)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={box.icon}
                  alt={box.title}
                  className="h-12 w-12 filter invert"
                />
              </div>
              <h3
                className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${box.color}`}
              >
                {box.title}
              </h3>
              <p className="text-gray-300 mt-2">{box.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedBox && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full text-center">
            <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${selectedBox.color}`}>
              {selectedBox.title}
            </h3>
            <p className="text-gray-300 mt-4">{selectedBox.details}</p>
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => setSelectedBox(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
