import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Task Manager App',
    description: 'A full-stack MERN application for managing daily tasks with authentication and CRUD features.',
    image: 'https://blog.lio.io/wp-content/uploads/2022/12/Blogs-Images-2023-01-03T181902.201.jpg', // Replace with your image path
    link: 'https://github.com/adityaAsFreelancer/Task_Management',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Next.js and TailwindCSS, showcasing my projects and skills.',
    image: 'https://cdn.dribbble.com/users/2478573/screenshots/11199542/media/ea774e63432d019731441bd1dd096f8f.jpg',
    link: '#',
  },
  {
    title: 'Hospital Management Platform',
    description: 'A blog app with Markdown support, admin dashboard, and a responsive UI.',
    image: 'https://www.karexpert.com/wp-content/uploads/2022/01/HIMS7-1.jpg',
    link: 'https://github.com/adityaAsFreelancer/Hospital_Managaement_Frontend',
  },
  {
    title: 'FreshMart',
    description: 'FreshMart is a modern, full-stack online grocery shopping platform built for a seamless and intuitive user experience.',
    image: 'https://market-resized.envatousercontent.com/themeforest.net/files/252594112/01_Preview.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=feb66c7b481c991a0a1b7b45935ccdeac41ef18ec5de595bfa278eb254ab4c66',
    link: 'https://github.com/adityaAsFreelancer/FreshMArt',
  },
  {
    title: 'JobFinder',
    description: 'JobFinder is a career-focused web application designed to help users search and apply for jobs across various industries.',
    image: 'https://colorlib.com/wp-content/uploads/sites/2/jobfinderportal-free-tempate.jpg',
    link: 'https://github.com/adityaAsFreelancer/JobFinder_frontend',
  },
  {
    title: '10minZepto',
    description: '10MinZepto is an ultra-fast grocery delivery application designed to bring essentials to customers’ doorsteps within 10 minutes.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*MyT8SLgF4S1zrXtfXnaOJA.jpeg',
    link: 'https://github.com/adityaAsFreelancer/10MinZepto_shoping-_project/tree/master',
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target='_blank'
                  className="text-indigo-500 hover:underline font-medium"
                >
                  View Project &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
