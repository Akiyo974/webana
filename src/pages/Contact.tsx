import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Clock, Globe } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 transform scale-110">
          <img
            src="contact/contact_Banniere.webp"
            alt="Contact"
            className="w-full h-full object-cover transform scale-110 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl px-4">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
                <Phone className="h-6 w-6 text-red-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">Téléphone</h3>
                <p className="text-gray-600 dark:text-gray-400 truncate">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
                <Mail className="h-6 w-6 text-red-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 truncate">contact@webana.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">Horaires</h3>
                <p className="text-gray-600 dark:text-gray-400 truncate">Lun-Sam: 9h-18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                <Send className="h-5 w-5" />
                <span>Envoyer le message</span>
              </button>

              {status !== 'idle' && (
                <div className={`rounded-lg p-4 ${
                  status === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
                }`}>
                  <div className="flex items-center">
                    <AlertCircle className={`h-5 w-5 ${
                      status === 'success' ? 'text-green-400' : 'text-red-400'
                    }`} />
                    <p className={`ml-3 text-sm font-medium ${
                      status === 'success' 
                        ? 'text-green-800 dark:text-green-200' 
                        : 'text-red-800 dark:text-red-200'
                    }`}>
                      {status === 'success' 
                        ? 'Message envoyé avec succès !' 
                        : 'Une erreur est survenue. Veuillez réessayer.'}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Map and Info Section */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3404523!3d48.8615622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Notre Atelier
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/10 p-2 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      15 Rue des Forgerons<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/10 p-2 rounded-lg shrink-0">
                    <Globe className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Métro : Louvre-Rivoli (Ligne 1)<br />
                      Parking à proximité
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}