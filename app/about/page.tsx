'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 text-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl -z-10"></div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">About PDF Merger</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A powerful yet simple tool designed to help you combine multiple PDF files into a single
              document quickly and efficiently.
            </p>
          </div>
          
          <section className="mb-16 bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to provide a seamless, user-friendly solution for managing PDF documents. We believe that
              working with PDFs should be simple, secure, and accessible to everyone, regardless of technical expertise.
            </p>
            <p className="text-lg text-gray-300">
              We're committed to creating tools that make document management easier and more efficient, helping you save time and focus on what matters most.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Simple & Intuitive</h3>
                <p className="text-gray-300">
                  Our user-friendly interface makes merging PDFs a breeze, even for those with minimal technical knowledge.
                </p>
              </div>
              <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Our optimized processing engine handles even large files quickly, saving you valuable time.
                </p>
              </div>
              <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Secure & Private</h3>
                <p className="text-gray-300">
                  Your files are encrypted during processing and automatically deleted afterward, ensuring your data remains private.
                </p>
              </div>
              <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">No Installation Required</h3>
                <p className="text-gray-300">
                  Access our tool from any device with an internet connection—no downloads or installations needed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Our Team</h2>
            <p className="text-lg text-gray-300 mb-6">
              We are a team of passionate developers and designers committed to creating tools that make document
              management easier. With backgrounds in software engineering, UX design, and document processing, we bring
              a wealth of expertise to our platform.
            </p>
            <p className="text-lg text-gray-300">
              Our diverse team works together to ensure PDF Merger is not only powerful and feature-rich but also
              intuitive and accessible to users of all technical levels.
            </p>
          </section>

          <section className="mb-16 bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Our Technology</h2>
            <p className="text-lg text-gray-300 mb-6">
              PDF Merger is built using modern web technologies to ensure speed, security, and reliability. Our cloud-based
              processing ensures you can merge PDFs from any device with an internet connection, without installing any software.
            </p>
            <p className="text-lg text-gray-300">
              We continuously update our technology stack to incorporate the latest advancements, ensuring that PDF Merger
              remains at the cutting edge of document processing solutions.
            </p>
          </section>

          <div className="mt-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 sm:text-4xl mb-6">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-gray-300 mb-8">
              Join thousands of users who trust our PDF merger every day
            </p>
            <a
              href="/"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <div className="relative rounded-full bg-gray-900 px-6 py-3">
                <span className="relative text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Try PDF Merger Now
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}