'use client'

import { motion } from 'framer-motion'
import { Crown, Sparkles, Heart, ArrowRight, Star, Users, Award } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </main>
  )
}
