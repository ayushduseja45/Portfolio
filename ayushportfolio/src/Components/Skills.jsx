import React from "react";
import { motion } from "framer-motion";
import IconCloud from "./ui/icon-cloud"; // Icon cloud from magicui
import Javascript from "../assets/javascript.svg";
import Java from "../assets/java.svg";
import Python from "../assets/python.svg";
import Git from "../assets/git.svg";
import Github from "../assets/github.svg";
import Postman from "../assets/postman.svg";
import MongoDB from "../assets/mongodb.svg";
import ReactIcon from "../assets/react.svg";
import Node from "../assets/node.svg";
import Tailwind from "../assets/tailwind.svg";
import { SiExpress, SiMysql, SiFirebase, SiBootstrap, SiC } from "react-icons/si";

const Skills = () => {
  const slugs = [
    "javascript",
    "java",
    "react",
    "nodejs",
    "mongodb",
    "tailwindcss",
    "git",
    "github",
    "postman",
    "python",
    "bootstrap",
    "express",
    "firebase",
    "mysql",
    "oop",
  ];

  const skillSections = [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: Java },
        { name: "JavaScript", icon: Javascript },
        { name: "C", reactIcon: SiC },
        { name: "Python", icon: Python },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "Bootstrap", reactIcon: SiBootstrap },
      ],
    },
    {
      title: "Web Technologies",
      items: [
        { name: "React.js", icon: ReactIcon },
        { name: "Node.js", icon: Node },
        { name: "Express.js", reactIcon: SiExpress },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: MongoDB },
        { name: "Firebase", reactIcon: SiFirebase },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "GitHub", icon: Github },
        { name: "Git", icon: Git },
        { name: "Postman", icon: Postman },
      ],
    },
    {
      title: "Query Language",
      items: [
        { name: "MySQL", reactIcon: SiMysql },
      ],
    },
  ];

  const SkillSection = ({ title, items }) => (
    <motion.section
      className="flex flex-col items-start w-full mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-mono text-white mb-2">{title}:</h2>
      <motion.div className="flex flex-wrap gap-2" layout>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center gap-2 text-sm border border-gray-600 py-1 px-3 rounded-md hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon ? (
              <img
                className={`w-6 h-6 ${item.invert ? "invert" : ""}`}
                src={item.icon}
                alt={item.name}
              />
            ) : item.reactIcon ? (
              <item.reactIcon className="w-6 h-6 text-blue-400" />
            ) : (
              <span>{item.name}</span>
            )}
            <span className="text-white">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );

  return (
    <motion.div
      className="container mx-auto px-4 py-6 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Heading */}
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.div>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Rotating Icon Sphere */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <IconCloud iconSlugs={slugs} className="h-[250px] lg:h-[400px]" />
        </motion.div>

        {/* Skills List */}
        <div className="w-full lg:w-1/2">
          {skillSections.map((section, index) => (
            <SkillSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
