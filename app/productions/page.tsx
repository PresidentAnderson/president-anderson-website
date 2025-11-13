'use client';

import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { Music, Film, Radio, Users, Calendar, Star } from 'lucide-react';

export default function Productions() {
  const productions = [
    {
      category: 'Music',
      icon: <Music size={32} />,
      items: [
        {
          title: 'Original Albums',
          description: 'Crafting soulful albums that tell stories and evoke emotion',
          status: 'Ongoing',
        },
        {
          title: 'Live Performances',
          description: 'Intimate concerts and large-scale shows that captivate audiences',
          status: 'Featured',
        },
        {
          title: 'Collaborations',
          description: 'Working with talented artists to create unique musical experiences',
          status: 'Active',
        },
      ],
    },
    {
      category: 'Productions',
      icon: <Film size={32} />,
      items: [
        {
          title: 'Premium Events',
          description: 'Curating sophisticated entertainment experiences for discerning audiences',
          status: 'Signature',
        },
        {
          title: 'Content Creation',
          description: 'Producing high-quality multimedia content across platforms',
          status: 'Active',
        },
        {
          title: 'Brand Partnerships',
          description: 'Collaborating with premium brands on exclusive projects',
          status: 'Selective',
        },
      ],
    },
    {
      category: 'Media',
      icon: <Radio size={32} />,
      items: [
        {
          title: 'Podcast Series',
          description: 'Conversations with creative minds and industry leaders',
          status: 'Coming Soon',
        },
        {
          title: 'Video Content',
          description: 'Behind-the-scenes and artistic documentary content',
          status: 'In Development',
        },
        {
          title: 'Digital Presence',
          description: 'Engaging with audiences across social media platforms',
          status: 'Active',
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />

      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
                Productions
              </h1>
              <p className="text-gold text-xl md:text-2xl max-w-3xl mx-auto">
                A portfolio of excellence spanning music, entertainment, and creative content
              </p>
            </motion.div>

            {/* Featured Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: <Star size={32} />, value: 'Premium', label: 'Quality Standard' },
                { icon: <Users size={32} />, value: 'Global', label: 'Reach' },
                { icon: <Calendar size={32} />, value: 'Year-Round', label: 'Active' },
                { icon: <Music size={32} />, value: 'Multi-Genre', label: 'Versatility' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-b from-gold/10 to-transparent rounded-lg border border-gold/20"
                >
                  <div className="text-gold mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-white font-playfair text-2xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gold-light text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Productions Grid */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {productions.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-gold">
                      {section.icon}
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
                      {section.category}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-gradient-to-b from-gold/5 to-transparent p-8 rounded-lg border border-gold/20 hover:border-gold/40 hover:from-gold/10 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-playfair text-2xl font-semibold text-white group-hover:text-gold transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full border border-gold/30">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 bg-gradient-to-b from-gold/5 to-black border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Every Project Tells a Story
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                From intimate musical performances to grand-scale productions, each project
                is approached with dedication, creativity, and an unwavering commitment to
                excellence. The work speaks for itself, resonating with audiences and
                creating memorable experiences that stand the test of time.
              </p>
              <div className="inline-block bg-gold/20 border border-gold/40 rounded-lg p-6">
                <p className="text-gold text-xl italic font-playfair">
                  &quot;Excellence is not an act, but a habit cultivated through passion and dedication.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Interested in Collaboration?
              </h2>
              <p className="text-gold-light text-lg md:text-xl mb-8">
                Let&apos;s discuss how we can create something extraordinary together
              </p>
              <a
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-full font-playfair text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-gold/50"
              >
                Get in Touch
              </a>
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
