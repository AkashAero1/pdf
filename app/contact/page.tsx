    'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual API call when ready
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Have questions about our PDF Merger tool? Need help with a specific feature? 
              Or perhaps you have suggestions for improvements? We'd love to hear from you!
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-blue-400">support@pdfmerger.com</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
              <p>Monday - Friday: 9am - 5pm EST</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-800 text-white p-4 rounded mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-800 text-white p-4 rounded mb-6">
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="business">Business Inquiry</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}