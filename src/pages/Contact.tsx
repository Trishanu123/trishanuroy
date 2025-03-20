import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you. I will get back to you as soon as possible.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900/30 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-gray-800/40 rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none" placeholder="Your message..." required />
              </div>
              <button type="submit" disabled={loading} className={`w-full px-6 py-3 bg-blue-600 rounded-lg transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}>{loading ? 'Sending...' : 'Send Message'}</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-gray-800/40 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>gtrishanu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Phone className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+91 9010691641</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/40 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="flex space-x-4">
                <a href="https://github.com/Trishanu123" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Github className="text-blue-500" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/trishanu-roy/" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="text-blue-500" size={24} />
                </a>
                <a href="https://www.youtube.com/@trishanustech281" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Youtube className="text-blue-500" size={24} />
                </a>
                <a href="https://www.instagram.com/trishanu_roy/" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Instagram className="text-blue-500" size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
