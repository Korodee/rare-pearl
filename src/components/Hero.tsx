"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart, Crown, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero.jpg)",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-dark-800/40 to-dark-900/50" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-gold-500 opacity-20"
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 text-royal-500 opacity-20"
      >
        <Heart className="h-6 w-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 text-gold-500 opacity-20"
      >
        <Crown className="h-10 w-10" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            <span className="text-white">Royalty</span>
            <span className="text-gradient">PerleRare</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center space-x-2 mb-8"
          >
            <Crown className="h-8 w-8 text-gold-500" />
            <span className="text-xl text-gold-500 font-medium">
              &quot;RoyaltyPerleRare&quot;
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Affirmez votre valeur en portant les perles qui relient au passé.
          Célébrez la culture africaine avec nos bijoux traditionnels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="https://chkzu1-m3.myshopify.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-3"
          >
            <span>Shop all</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@chicbaya3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center space-x-2 text-lg px-8 py-3"
          >
            <Heart className="h-5 w-5" />
            <span>Suivre sur tiktok</span>
            <MessageCircle className="h-5 w-5" />
          </motion.a>
        </motion.div>

        {/* Cultural Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700 max-w-4xl mx-auto"
        >
          <p className="text-dark-300 text-sm md:text-base leading-relaxed">
            Origine des perles de hanches en Afrique de l&apos;Ouest (Sénégal,
            Mali, Bénin, Ghana...) Signification culturelle selon les ethnies:
            séduction, protection, maturité, fertilité... Rituels associés
            (mariage, puberté, maternité) Témoignages de femmes (ou récits
            fictifs inspirés de la tradition)
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
