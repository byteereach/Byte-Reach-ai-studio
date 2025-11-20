import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you! We will be in touch soon.');
    setFormData({ name: '', business: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-deep-teal relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 left-[-10%] w-96 h-96 bg-neon-yellow opacity-5 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-blue-500 opacity-5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 text-white">
            <h2 className="text-4xl font-display font-bold mb-6">Let's Grow Your Business</h2>
            <p className="text-gray-300 mb-12 text-lg">
              Ready to take your brand to the next level? Fill out the form or reach out to us directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="text-neon-yellow w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:byteereach@gmail.com" className="text-lg font-semibold hover:text-neon-yellow transition-colors">bytereach@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="text-neon-yellow w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call / WhatsApp</p>
                  <a href="tel:+918320086937" className="text-lg font-semibold hover:text-neon-yellow transition-colors">+91 9199877599</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-deep-teal mb-8">Send us a message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-grey mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors"
                    placeholder="admin"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-grey mb-2">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-grey mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors"
                    placeholder="admin@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-grey mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-grey mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Meta Ads">Meta Ads</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="SEO">SEO</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Full Stack">Full Stack Marketing</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-neutral-grey mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors resize-none"
                  placeholder="Tell us about your project goals..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-deep-teal text-white font-bold py-4 rounded-lg hover:bg-deep-teal-dark transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};