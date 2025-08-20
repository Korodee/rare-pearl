"use client";

import { motion } from "framer-motion";
import { Crown, ArrowLeft, Shield, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <div className="bg-dark-900/95 backdrop-blur-md border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-6 w-6 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-gold-500">
                  ROYALTY
                </span>
                <span className="text-xs text-dark-300 -mt-1">PERLE RARE</span>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-dark-300 hover:text-gold-500 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour à l&apos;accueil</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Title */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center space-x-2 mb-6"
            >
              <Shield className="h-8 w-8 text-gold-500" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Politique de confidentialité
              </h1>
            </motion.div>
            <p className="text-dark-300 text-lg">
              Dernière mise à jour : 5 août 2025
            </p>
          </div>

          {/* Privacy Policy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-dark-300 leading-relaxed mb-6">
                RoyaltyPerleRare exploite cette boutique et ce site web, y
                compris toutes les informations, le contenu, les
                fonctionnalités, les outils, les produits et les services
                connexes afin de vous fournir, en tant que client(e), une
                expérience d&apos;achat personnalisée (ci-après les
                &quot;Services&quot;). RoyaltyPerleRare est une boutique
                propulsée par Shopify, qui nous permet de vous fournir les
                Services. La présente Politique de confidentialité décrit la
                façon dont nous collectons, utilisons et divulguons vos
                informations personnelles lorsque vous accédez aux Services, les
                utilisez, effectuez un achat ou toute autre transaction, ou
                lorsque vous communiquez avec nous par tout autre moyen.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">
                Les informations personnelles que nous collectons
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                Nous pouvons collecter ou traiter les catégories suivantes
                d&apos;informations personnelles :
              </p>

              <ul className="text-dark-300 leading-relaxed mb-6 space-y-2">
                <li>
                  • Coordonnées y compris votre nom, adresse, numéro de
                  téléphone et adresse e-mail
                </li>
                <li>
                  • Informations financières y compris les numéros de carte de
                  crédit et détails de transaction
                </li>
                <li>
                  • Informations du compte y compris votre nom
                  d&apos;utilisateur et préférences
                </li>
                <li>
                  • Informations de transaction y compris les articles que vous
                  consultez et achetez
                </li>
                <li>• Vos communications avec nous</li>
                <li>
                  • Informations sur l&apos;appareil y compris votre adresse IP
                </li>
                <li>
                  • Informations d&apos;utilisation y compris votre interaction
                  avec les Services
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">
                Comment nous utilisons vos informations
              </h2>
              <ul className="text-dark-300 leading-relaxed mb-6 space-y-2">
                <li>
                  • <strong>Fournir les Services :</strong> Traiter vos
                  paiements, commandes, et créer une expérience d&apos;achat
                  personnalisée
                </li>
                <li>
                  • <strong>Marketing et publicité :</strong> Vous envoyer des
                  communications marketing et vous montrer des publicités
                  pertinentes
                </li>
                <li>
                  • <strong>Sécurité :</strong> Authentifier votre compte et
                  prévenir la fraude
                </li>
                <li>
                  • <strong>Service client :</strong> Répondre à vos demandes et
                  maintenir notre relation commerciale
                </li>
                <li>
                  • <strong>Obligations légales :</strong> Nous conformer à la
                  législation en vigueur
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">
                Vos droits
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                En fonction de votre lieu de résidence, vous pouvez disposer des
                droits suivants :
              </p>

              <ul className="text-dark-300 leading-relaxed mb-6 space-y-2">
                <li>
                  • Droit d&apos;accès aux informations personnelles que nous
                  détenons
                </li>
                <li>
                  • Droit à l&apos;effacement de vos informations personnelles
                </li>
                <li>• Droit de rectification des informations inexactes</li>
                <li>• Droit à la portabilité de vos données</li>
                <li>• Gestion des préférences de communication</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Pour toute question concernant cette politique ou pour exercer
                vos droits, contactez-nous :<br />
                Téléphone : +1 438 439 2923
                <br />
                Email :{" "}
                <a
                  href="mailto:royaltyperlerarehf@gmail.com"
                  className="text-gold-500 hover:text-gold-400"
                >
                  royaltyperlerarehf@gmail.com
                </a>
                <br />
                Adresse : 2701 Chemin d&apos;Oka, Deux-Montagnes, QC, J7R 1P3,
                CA
              </p>
            </div>
          </motion.section>

          {/* Related Links Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Liens utiles
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/refund"
                  className="btn-primary flex items-center justify-center space-x-2 px-6 py-3"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Politique de remboursement</span>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
