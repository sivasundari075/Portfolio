import React, { useState } from 'react';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'sivasundari075@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          service: formData.service,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 relative overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-teal-500/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Get in touch with me through this form. Fill out all the necessary details so I can help you
          out in the best way possible.
        </p>

        {/* Quick Contact */}
        <div className="mb-12">
          <p className="text-gray-400 mb-4">Want to skip the form? Get in touch here</p>
          <div className="space-y-2">
            <a 
              href="mailto:sivasundari075@gmail.com" 
              className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              sivasundari075@gmail.com
            </a>
            <a 
              href="tel:+33 0751855566" 
              className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              +33 0751855566
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-3xl space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Name*</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email Address*</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Phone number*</label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Company*</label>
              <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Website (if any)</label>
            <input 
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Service Required*</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
              required
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-application">Mobile Application</option>
              <option value="llm-chatbot">LLM Chatbot Integration</option>
              <option value="rag-pdf-chat">RAG - Chat with PDFs</option>
              <option value="computer-vision">Computer Vision</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message*</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900/50 border border-teal-500/10 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-100 transition-all duration-300"
              rows="6"
              required
              placeholder="Tell me about your project..."
            />
          </div>

          {submitStatus.message && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 text-green-400' 
                : 'bg-red-500/10 text-red-400'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold 
                hover:from-teal-400 hover:to-blue-400 transition-all duration-300 shadow-lg 
                hover:shadow-teal-500/25 transform hover:scale-105
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Form'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact; 