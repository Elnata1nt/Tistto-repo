// src/components/Header.jsx
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-2 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-2xl text-primary font-bold font-['New Amsterdam']">
          Tistto
        </div> */}
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="public/assets/Tistto_principal.png"
            alt="Tistto Logo"
            className="h-16" // ajuste o tamanho conforme necessário
          />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex text-primary font-bold text-xl items-center space-x-6">
          <a href="/" className="hover:text-primarydark ">
            Home
          </a>
          <a href="/about" className="hover:text-primarydark ">
            Sobre
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/login"
            className="bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-primarydark hover:text-white transition-colors duration-200"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden flex items-center"
        >
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-primary"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed top-0 right-0 z-50 bg-black h-full w-[75vw] max-w-sm flex flex-col items-end py-6 px-4 space-y-6 text-xl font-semibold md:hidden ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="text-primary mb-4"
          >
            <AiOutlineClose size={30} />
          </button>
          <a
            href="/"
            onClick={toggleMenu}
            className="hover:text-primary text-white transition py-2 w-full text-right"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={toggleMenu}
            className="hover:text-primary text-white transition py-2 w-full text-right"
          >
            Sobre
          </a>
          <a
            href="/login"
            onClick={toggleMenu}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primarydark hover:text-white transition-colors duration-200 mt-4 w-full text-right"
          >
            Login
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
