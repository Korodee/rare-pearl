"use client";

import { motion } from "framer-motion";
import { Crown, Heart, Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <Crown className="h-8 w-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-gold-500">
                  ROYALTY
                </span>
                <span className="text-xs text-dark-300 -mt-1">PERLE RARE</span>
              </div>
            </motion.div>

            <p className="text-dark-300 mb-6 max-w-md">
              Affirmez votre valeur en portant les perles qui relient au passé.
              Célébrez la culture africaine avec nos bijoux traditionnels.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="https://chkzu1-m3.myshopify.com/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="btn-primary"
              >
                Se connecter avec shop
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-dark-300 hover:text-gold-500 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-dark-300 hover:text-gold-500 transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-dark-300 hover:text-gold-500 transition-colors"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-dark-300 hover:text-gold-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <span className="text-dark-300">
                  contact@royaltyperlerare.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500" />
                <span className="text-dark-300">+1 438 439 2923</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-500" />
                <span className="text-dark-300">Montréal, QC, Canada</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <div className="flex space-x-3">
                <motion.a
                  href="https://www.tiktok.com/@chicbaya3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-dark-800 rounded-lg border border-dark-600 hover:border-gold-500 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-gold-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/royalty_perle_rare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-dark-800 rounded-lg border border-dark-600 hover:border-gold-500 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-gold-500" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden md:block mt-12 pt-8 border-t border-dark-700"
        >
          <h4 className="text-white font-semibold mb-4 text-center">
            Méthodes de Paiement
          </h4>
          <div className="flex justify-center items-center space-x-4 flex-wrap">
            {[
              "American Express",
              "Apple Pay",
              "Diners Club",
              "Discover",
              "Google Pay",
              "Mastercard",
              "Shop Pay",
              "Visa",
            ].map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-800 px-3 py-2 rounded-lg border border-dark-600"
              >
                <span className="text-dark-300 text-sm font-medium">
                  {method}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-dark-700 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-300 text-sm">
              © 2025 RoyaltyPerleRare. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-gold-500" />
              <span className="text-dark-300 text-sm">
                Fait avec amour, par Salutary Agency.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
