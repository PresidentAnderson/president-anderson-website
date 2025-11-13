'use client';

import Navigation from '../../components/Navigation';
import { motion } from 'framer-motion';
import { Video, Film, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function VideoContentPage() {
  return (
    <>
      <Navigation />

      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold/10" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-6">
                In Development
              </span>

              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
                Video Content
              </h1>

              <p className="text-xl md:text-2xl text-gold-light mb-4 font-playfair italic">
                Visual narratives that resonate.
              </p>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
                Behind-the-scenes and artistic documentary content that tells compelling visual stories.
              </p>

              <Link
                href="/contact?context=video-content"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-playfair text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-gold/50"
              >
                Explore Opportunities
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Film size={40} />,
                  title: 'Visual Storytelling',
                  description: 'Crafting narratives through compelling imagery, thoughtful editing, and intentional composition.',
                },
                {
                  icon: <Eye size={40} />,
                  title: 'Cinematic Quality',
                  description: 'Every frame is considered. Every shot serves the story. Production value that matches the vision.',
                },
                {
                  icon: <Video size={40} />,
                  title: 'Authentic Documentation',
                  description: 'Capturing real moments and genuine artistry without filters or pretense.',
                },
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-b from-gold/10 to-transparent rounded-lg border border-gold/20"
                >
                  <div className="text-gold mb-4 flex justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Strip */}
        <section className="py-24 bg-gradient-to-b from-gold/5 to-black border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Visual Experiences
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Music Videos',
                  description: 'Artistic visuals that amplify the emotional power of the music.',
                },
                {
                  title: 'Documentary Series',
                  description: 'Behind-the-scenes stories of creation, process, and artistry.',
                },
                {
                  title: 'Performance Captures',
                  description: 'Live moments preserved with cinematic attention to detail.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg border border-gold/30 mb-4 flex items-center justify-center">
                    <Video className="text-gold" size={48} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Offer Module */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-gold/40 rounded-lg p-8 md:p-12"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Stories that deserve to be seen.
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I approach video content with the same commitment to excellence I bring to music and
                events: intentional storytelling, visual precision, and emotional authenticity. From
                music videos to documentary series, every project is crafted to engage, inspire, and
                leave a lasting impression.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Music videos',
                  'Documentary content',
                  'Behind-the-scenes footage',
                  'Creative process videos',
                  'Performance captures',
                  'Visual essays',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={20} />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Link
                  href="/contact?context=video-content"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-6 py-3 rounded-full font-playfair font-semibold transition-all duration-300"
                >
                  Discuss Your Vision
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-gold/5 to-black border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s create visual stories that matter.
              </h2>
              <p className="text-gold-light text-lg md:text-xl mb-8">
                Every great video begins with a clear vision.
              </p>
              <Link
                href="/contact?context=video-content"
                className="inline-block bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-playfair text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-gold/50"
              >
                Start Collaboration
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
              Creative Authority | Singer-Songwriter | Impresario | Producer
            </p>
            <p className="text-white/40 mt-4 text-sm">
              © {new Date().getFullYear()} President Anderson. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
