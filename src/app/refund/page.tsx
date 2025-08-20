"use client";

import { motion } from "framer-motion";
import { Crown, ArrowLeft, CreditCard, Shield } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
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
              <CreditCard className="h-8 w-8 text-gold-500" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Politique de remboursement
              </h1>
            </motion.div>
            <p className="text-dark-300 text-lg">
              Dernière mise à jour : 5 août 2025
            </p>
          </div>

          {/* Refund Policy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700"
          >
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-dark-300 leading-relaxed">
                Nous appliquons une politique de retour de 30 jours, ce qui
                signifie que vous disposez de 30 jours après réception de votre
                article pour demander un retour.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Conditions de retour
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Pour être admissible à un retour, votre article doit être dans
                le même état que celui dans lequel vous l&apos;avez reçu, non
                porté ou non utilisé, avec les étiquettes et dans son emballage
                d&apos;origine. Vous aurez également besoin du reçu ou de la
                preuve d&apos;achat.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Processus de retour
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Pour effectuer un retour, contactez-nous à{" "}
                <a
                  href="mailto:royaltyperlerarehf@gmail.com"
                  className="text-gold-500 hover:text-gold-400"
                >
                  royaltyperlerarehf@gmail.com
                </a>
                . Les retours doivent être envoyés à : 2701 Chemin d&apos;Oka,
                Deux-Montagnes, QC, J7R 1P3, CA.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Si votre retour est accepté, nous vous enverrons une étiquette
                d&apos;expédition de retour, ainsi que des instructions sur la
                manière et le lieu d&apos;envoi de votre colis. Les articles
                renvoyés sans demande préalable de retour ne seront pas acceptés.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Vous pouvez toujours nous contacter pour toute question relative
                au retour à l&apos;adresse{" "}
                <a
                  href="mailto:royaltyperlerarehf@gmail.com"
                  className="text-gold-500 hover:text-gold-400"
                >
                  royaltyperlerarehf@gmail.com
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-white">
                Dommages et problèmes
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Veuillez inspecter votre commande dès sa réception et nous
                contacter immédiatement si l&apos;article est défectueux,
                endommagé ou si vous avez reçu le mauvais article, afin que nous
                puissions évaluer le problème et y remédier.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Articles non retournables
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Certains types d&apos;articles ne peuvent pas être retournés,
                comme les produits périssables (tels que les aliments, les
                fleurs ou les plantes), les produits sur mesure (tels que les
                commandes spéciales ou les articles personnalisés) et les
                produits de soins personnels (tels que les produits de beauté).
                Nous n&apos;acceptons pas non plus les retours de produits
                dangereux, de liquides inflammables ou de gaz.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Malheureusement, nous n&apos;acceptons pas les retours
                d&apos;articles en promotion ou de cartes-cadeaux.
              </p>

              <h3 className="text-xl font-semibold text-white">Échanges</h3>
              <p className="text-dark-300 leading-relaxed">
                Le moyen le plus rapide de vous assurer d&apos;obtenir ce que
                vous voulez est de retourner l&apos;article que vous avez et,
                une fois le retour accepté, d&apos;effectuer un achat séparé
                pour un nouvel article.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Délai de réflexion de 14 jours dans l&apos;Union européenne
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Nonobstant ce qui précède, si la marchandise est expédiée dans
                l&apos;Union européenne, vous avez le droit d&apos;annuler ou de
                retourner votre commande dans un délai de 14 jours, pour quelque
                raison que ce soit et sans justification. Comme ci-dessus, votre
                article doit être dans le même état que celui dans lequel vous
                l&apos;avez reçu, non porté ou non utilisé, avec les étiquettes,
                et dans son emballage d&apos;origine. Vous aurez également besoin
                du reçu ou de la preuve d&apos;achat.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Remboursements
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Nous vous informerons dès que nous aurons reçu et inspecté votre
                retour, et nous vous ferons savoir si le remboursement a été
                approuvé ou non. Si le remboursement est approuvé, vous serez
                automatiquement remboursé(e) sur votre moyen de paiement
                d&apos;origine dans les 10 jours ouvrables. N&apos;oubliez pas
                que le traitement et l&apos;affichage du remboursement par votre
                banque ou votre société de carte de crédit peuvent prendre un
                certain temps.
              </p>

              <p className="text-dark-300 leading-relaxed">
                Si plus de 15 jours ouvrables se sont écoulés depuis
                l&apos;approbation de votre retour, veuillez nous contacter à{" "}
                <a
                  href="mailto:royaltyperlerarehf@gmail.com"
                  className="text-gold-500 hover:text-gold-400"
                >
                  royaltyperlerarehf@gmail.com
                </a>
                .
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
                  href="/privacy"
                  className="btn-primary flex items-center justify-center space-x-2 px-6 py-3"
                >
                  <Shield className="h-5 w-5" />
                  <span>Politique de confidentialité</span>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
