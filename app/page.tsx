'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import { motion } from 'framer-motion';
import { Music, Film, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/logo.jpg"
              alt="President Anderson"
              width={200}
              height={200}
              className="mx-auto rounded-full shadow-2xl shadow-gold/20"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
          >
            PRESIDENT ANDERSON
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-gold text-xl md:text-2xl lg:text-3xl font-playfair mb-2">
              Premium Brand
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gold-light text-lg md:text-xl">
              <span className="flex items-center gap-2">
                <Music size={20} />
                Singer-Songwriter
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <Film size={20} />
                Impresario
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Producer
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-inter leading-relaxed"
          >
            Crafting exceptional experiences through music, entertainment, and creative vision.
            Where artistry meets excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/productions"
              className="group bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-playfair text-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-gold/50"
            >
              View Productions
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gold hover:bg-gold/10 text-gold px-8 py-4 rounded-full font-playfair text-lg font-semibold transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Featured Section */}
      <section className="bg-black py-24 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              The Art of Excellence
            </h2>
            <p className="text-gold-light text-lg md:text-xl max-w-2xl mx-auto">
              A legacy built on creativity, passion, and uncompromising quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music size={40} />,
                title: 'Singer-Songwriter',
                description: 'Authentic storytelling through powerful lyrics and melodies that resonate with the soul.',
              },
              {
                icon: <Film size={40} />,
                title: 'Impresario',
                description: 'Orchestrating extraordinary events and experiences that leave lasting impressions.',
              },
              {
                icon: <Sparkles size={40} />,
                title: 'Producer',
                description: 'Bringing visions to life with meticulous attention to detail and creative excellence.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gold/10 to-transparent p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gold/20 via-black to-black py-24 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-gold-light text-lg md:text-xl mb-8">
              Let&apos;s collaborate and bring your vision to life
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-playfair text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-gold/50"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-light font-playfair text-lg mb-2">
            PRESIDENT ANDERSON
          </p>
          <p className="text-white/60">
            Premium Brand | Singer-Songwriter | Impresario | Producer
          </p>
          <p className="text-white/40 mt-4 text-sm">
            © {new Date().getFullYear()} President Anderson. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
