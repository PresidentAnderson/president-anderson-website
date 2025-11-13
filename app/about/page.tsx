'use client';

import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { Music, Award, Mic2, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
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
                About President Anderson
              </h1>
              <p className="text-gold text-xl md:text-2xl max-w-3xl mx-auto">
                A journey of artistry, innovation, and unwavering dedication to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/logo.jpg"
                  alt="President Anderson"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-2xl shadow-gold/20"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 text-white/80 text-lg leading-relaxed"
              >
                <p>
                  President Anderson is a multi-talented artist whose work spans the realms of music,
                  production, and event curation. As a <span className="text-gold font-semibold">singer-songwriter</span>,
                  the authentic voice and powerful storytelling captivate audiences worldwide.
                </p>
                <p>
                  With a passion for creating unforgettable experiences, President Anderson serves as an{' '}
                  <span className="text-gold font-semibold">impresario</span>, orchestrating events that
                  blend artistry with sophistication. Every production is a testament to meticulous
                  attention to detail and creative excellence.
                </p>
                <p>
                  As a <span className="text-gold font-semibold">producer</span>, President Anderson brings
                  visions to life, working with talented individuals to create content that resonates
                  deeply and leaves a lasting impact on culture and community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-playfair text-4xl md:text-5xl font-bold text-white text-center mb-16"
            >
              Core Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Music size={40} />,
                  title: 'Authenticity',
                  description: 'Staying true to artistic vision while creating meaningful connections.',
                },
                {
                  icon: <Award size={40} />,
                  title: 'Excellence',
                  description: 'Pursuing the highest standards in every project and performance.',
                },
                {
                  icon: <Mic2 size={40} />,
                  title: 'Innovation',
                  description: 'Pushing boundaries and exploring new creative territories.',
                },
                {
                  icon: <Heart size={40} />,
                  title: 'Passion',
                  description: 'Bringing heart and soul to every creative endeavor.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-b from-gold/10 to-transparent rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gold/5 border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8">
                The Journey Continues
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                President Anderson&apos;s artistic journey is one of continuous growth and exploration.
                From intimate songwriting sessions to grand-scale productions, every step is guided
                by a commitment to excellence and a deep love for the craft.
              </p>
              <p className="text-gold-light text-xl italic">
                &quot;True artistry comes from the courage to be authentic and the dedication to
                never stop evolving.&quot;
              </p>
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
      </main>
    </>
  );
}
