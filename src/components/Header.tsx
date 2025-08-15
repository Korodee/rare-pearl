"use client";

import { motion } from "framer-motion";
import { Crown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-md border-b border-dark-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0 z-10"
          >
            <div className="relative">
              <Crown className="h-8 w-8 text-gold-500" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-royal-500 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-gold-500">
                ROYALTY
              </span>
              <span className="text-xs text-dark-300 -mt-1">PERLE RARE</span>
            </div>
          </motion.div>

          {/* Desktop Navigation - Perfectly Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-gold-500 transition-colors duration-300 font-medium"
            >
              Accueil
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-gold-500 transition-colors duration-300 font-medium"
            >
              À propos
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-gold-500 transition-colors duration-300 font-medium"
            >
              Collection
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-gold-500 transition-colors duration-300 font-medium"
            >
              Contact
            </motion.a>
          </nav>

          {/* CTA Button - Right Side */}
          <motion.a
            href="https://chkzu1-m3.myshopify.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-primary flex-shrink-0 z-10"
          >
            Se connecter avec shop
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gold-500 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/95 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-dark-700">
                <div className="flex items-center space-x-2">
                  <Crown className="h-6 w-6 text-gold-500" />
                  <div className="flex flex-col">
                    <span className="text-lg font-serif font-bold text-gold-500">
                      ROYALTY
                    </span>
                    <span className="text-xs text-dark-300 -mt-1">PERLE RARE</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 border border-dark-600 rounded-lg hover:border-gold-500 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 flex flex-col justify-center px-6 space-y-6">
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-gold-500 transition-colors text-center"
                >
                  Accueil
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-gold-500 transition-colors text-center"
                >
                  À propos
                </a>
                <a
                  href="#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-gold-500 transition-colors text-center"
                >
                  Collection
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-gold-500 transition-colors text-center"
                >
                  Contact
                </a>

                {/* Mobile CTA Buttons */}
                <div className="space-y-4 pt-8">
                  <a
                    href="https://chkzu1-m3.myshopify.com/collections/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full btn-primary text-center py-4"
                  >
                    Se connecter avec shop
                  </a>
                  <a
                    href="https://chkzu1-m3.myshopify.com/collections/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full btn-secondary text-center py-4"
                  >
                    Shop all →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
