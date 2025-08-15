"use client";

import { motion } from "framer-motion";
import { Crown, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-dark-900 to-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <Crown className="h-8 w-8 text-gold-500" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Notre Mission
              </h2>
            </div>

            <p className="text-lg text-center md:text-left text-dark-300 mb-6 leading-relaxed">
              Transmettre et valoriser la culture africaine à travers le port
              traditionnel et symbolique des perles de hanches (baya), en
              éduquant, en inspirant, et en reconnectant les femmes (et hommes)
              à leur héritage culturel.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gold-500/20 rounded-lg">
                  <Heart className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Origines Culturelles
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Origine des perles de hanches en Afrique de l&apos;Ouest
                    (Sénégal, Mali, Bénin, Ghana...)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-royal-500/20 rounded-lg">
                  <Sparkles className="h-5 w-5 text-royal-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Signification Symbolique
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Signification culturelle selon les ethnies: séduction,
                    protection, maturité, fertilité...
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gold-500/20 rounded-lg">
                  <Crown className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Rituels Traditionnels
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Rituels associés (mariage, puberté, maternité) et
                    témoignages de femmes
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <motion.a
                href="https://chkzu1-m3.myshopify.com/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Découvrir Notre Collection</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700 relative overflow-hidden">
              {/* Background Image for this specific card */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/creamy.png)'
                }}
              />
              {/* Content overlay */}
              <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  &quot;Reconnecte-toi à tes racines, célèbre ta féminité,
                  incarne ta royauté.&quot;
                </h3>
                <p className="text-dark-300">
                  Avec RoyaltyPerleRare, chaque perle raconte ton histoire.
                </p>
              </div>

              {/* Cultural Elements Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Sénégal", flag: "🇸🇳" },
                  { title: "Mali", flag: "🇲🇱" },
                  { title: "Bénin", flag: "🇧🇯" },
                  { title: "Ghana", flag: "🇬🇭" },
                ].map((country, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="w-full h-20 rounded-lg bg-dark-700 border border-dark-600 mb-3 flex flex-col items-center justify-center hover:border-gold-500 transition-colors">
                      <span className="text-3xl mb-1">{country.flag}</span>
                      <span className="text-white font-semibold text-sm">
                        {country.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-6 bg-dark-700 rounded-xl border border-dark-600">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-dark-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Témoignage</p>
                    <p className="text-dark-300 text-sm">Femme Africaine</p>
                  </div>
                </div>
                <p className="text-dark-300 text-sm italic">
                  &quot;Porter ces perles me reconnecte à mes ancêtres et me
                  rappelle ma valeur royale. Chaque perle raconte une histoire
                  de force, de beauté et de tradition.&quot;
                </p>
              </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 text-gold-500 opacity-30"
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 text-royal-500 opacity-30"
            >
              <Heart className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
