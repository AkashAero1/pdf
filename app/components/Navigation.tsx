'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Menu, TrendingUpDown, X } from 'lucide-react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                PDF Merger
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-blue-400 transition-colors">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="relative rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    <div className="relative rounded-full bg-gray-900 px-4 py-2">
                      <span className="relative text-sm font-semibold text-white">
                        Get Started
                      </span>
                    </div>
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]",
                      userButtonPopoverCard: "bg-gray-900/95 backdrop-blur-xl border border-white/10",
                      userButtonPopoverActionButton: "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50",
                      userButtonPopoverFooter: "border-t border-white/10",
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base text-center font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#features" 
            className="block px-3 py-2 rounded-md text-base text-center font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="block px-3 py-2 rounded-md text-base text-center font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 rounded-md text-base text-center font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-base text-center font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <SignedOut>
            <div className="pt-4 pb-3 border-t border-white/10">
              <SignInButton mode="modal">
                <button 
                  className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button 
                  className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
} 