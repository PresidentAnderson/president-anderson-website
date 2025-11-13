'use client';

import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                Get in Touch
              </h1>
              <p className="text-gold text-xl md:text-2xl max-w-3xl mx-auto">
                Let&apos;s collaborate and create something extraordinary together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-white/70 text-lg mb-8">
                    Whether you&apos;re interested in a collaboration, booking, or just want to connect,
                    we&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <div className="text-gold mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@presidentanderson.com"
                        className="text-gold-light hover:text-gold transition-colors"
                      >
                        contact@presidentanderson.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <div className="text-gold mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gold-light hover:text-gold transition-colors"
                      >
                        Available upon request
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <div className="text-gold mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gold-light">
                        Available for projects worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg border border-gold/30">
                  <h3 className="font-playfair text-xl font-bold text-white mb-3">
                    Business Inquiries
                  </h3>
                  <p className="text-white/70">
                    For bookings, collaborations, and partnership opportunities,
                    please use the contact form or reach out directly via email.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="" className="bg-black">Select a subject</option>
                      <option value="booking" className="bg-black">Booking Inquiry</option>
                      <option value="collaboration" className="bg-black">Collaboration</option>
                      <option value="partnership" className="bg-black">Partnership</option>
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-playfair text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-gold/50"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-24 border-t border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Create Together
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Every great collaboration starts with a conversation. Whether you have a specific
                project in mind or just want to explore possibilities, I&apos;m always open to
                connecting with fellow creatives, brands, and visionaries who share a passion
                for excellence.
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
