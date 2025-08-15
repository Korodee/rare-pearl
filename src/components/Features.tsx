"use client";

import { motion } from "framer-motion";
import { Star, Heart, Shield, Crown, Sparkles, Award } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Crown,
    title: "Tradition Royale",
    description:
      "Chaque perle raconte une histoire de royauté et de tradition africaine, transmise de génération en génération.",
    color: "text-gold-500",
  },
  {
    icon: Heart,
    title: "Féminité Célébrée",
    description:
      "Célébrez votre féminité et votre beauté naturelle avec nos perles de hanches élégantes et significatives.",
    color: "text-royal-500",
  },
  {
    icon: Shield,
    title: "Protection Culturelle",
    description:
      "Portez avec fierté les symboles de protection et de maturité de la culture ouest-africaine.",
    color: "text-gold-500",
  },
  {
    icon: Star,
    title: "Qualité Exceptionnelle",
    description:
      "Des matériaux de première qualité et un artisanat soigné pour des perles qui durent dans le temps.",
    color: "text-royal-500",
  },
  {
    icon: Sparkles,
    title: "Design Unique",
    description:
      "Des créations uniques qui allient tradition et modernité pour un style authentique et contemporain.",
    color: "text-gold-500",
  },
  {
    icon: Award,
    title: "Héritage Culturel",
    description:
      "Reconnectez-vous à vos racines et portez fièrement votre héritage culturel africain.",
    color: "text-royal-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-white">Découvrez Notre</span>
            <span className="text-gradient"> Collection</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Des perles de hanches authentiques qui célèbrent la culture
            africaine et la féminité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-dark-700 group-hover:bg-dark-600 transition-colors ${feature.color}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Nos Collections Populaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  name: "Creamy💕",
                  price: "$48.00 CAD",
                  image: "/creamy.png",
                  link: "https://chkzu1-m3.myshopify.com/products/creamy%F0%9F%92%95",
                },
                {
                  name: "La Reine (Personnaliser)",
                  price: "$45.00 CAD",
                  image: "/La-Reine.png",
                  link: "https://chkzu1-m3.myshopify.com/products/la-reine-personnalisee",
                },
                {
                  name: "Noir Exotique (4Pieces)",
                  price: "$38.00 CAD",
                  image: "/Noir.png",
                  link: "https://chkzu1-m3.myshopify.com/products/noir-exotique",
                },
                {
                  name: "Nuance",
                  price: "$40.00 CAD",
                  image: "/Nuance.png",
                  link: "https://chkzu1-m3.myshopify.com/products/nuance",
                },
              ].map((product, index) => (
                <motion.a
                  key={index}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-gold-500 transition-all duration-300 block"
                >
                  <div className="w-full h-48 rounded-lg bg-dark-600 mb-4 overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {product.name}
                  </h4>
                  <p className="text-gold-500 font-medium">{product.price}</p>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://chkzu1-m3.myshopify.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Voir Toute la Collection</span>
              <Sparkles className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
