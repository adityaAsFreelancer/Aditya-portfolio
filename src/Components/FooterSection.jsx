import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Branding & Copyright */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-indigo-400">Aditya Kumar</h3>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="text-sm text-gray-500">Crafted with ❤️ using React & Tailwind CSS</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Back to Top */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-indigo-500 transition"
        >
          <FaArrowUp className="text-lg" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
