import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
  { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: <FaReact />, name: 'React.js', color: 'text-cyan-400' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
  { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-400' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-blue-300' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-white' },
  { icon: <FaGithub />, name: 'GitHub', color: 'text-white' },
];

const SkillsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
