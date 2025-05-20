import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, FileUp, Lock, Zap, Shield, Users, Cloud, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';
import PdfMerger from './components/PdfMerger';

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl -z-10"></div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Merge PDFs with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Ease</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Combine multiple PDF files into one document in seconds. Fast, secure, and
            completely free. No watermarks, no registration required.
          </p>
          
          <SignedOut>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SignUpButton mode="modal">
                <button className="group relative rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="relative rounded-full bg-gray-900 px-6 py-3">
                    <span className="relative text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      Get Started Free
                    </span>
                  </div>
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="text-sm font-semibold leading-6 text-gray-300 hover:text-blue-400 transition-colors">
                  Sign in <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>

        {/* PDF Merger Component */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors">
              <PdfMerger />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Powerful Features for Effortless PDF Merging
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our PDF merger SaaS is designed to make your workflow seamless, secure, and lightning fast. Discover what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <Zap className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Merge PDFs in seconds with our optimized cloud engine.</p>
            </div>
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <Shield className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-400">Your files are encrypted and deleted after processing. Privacy first.</p>
            </div>
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <Lock className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Watermarks</h3>
              <p className="text-gray-400">Get clean, professional PDFs with zero branding or watermarks.</p>
            </div>
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <FileUp className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop Upload</h3>
              <p className="text-gray-400">Easily add files with our intuitive drag-and-drop interface.</p>
            </div>
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <Users className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-400">Invite team members and merge PDFs together in real time.</p>
            </div>
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <Cloud className="h-10 w-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Storage</h3>
              <p className="text-gray-400">Access your merged PDFs from anywhere, anytime, securely in the cloud.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start for free, upgrade anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-900/70 rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-4xl font-extrabold text-blue-400 mb-4">$0 <span className="text-base font-medium text-gray-400">/mo</span></p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-green-400 mr-2" /> Merge up to 5 PDFs at once</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-green-400 mr-2" /> No watermarks</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-green-400 mr-2" /> Secure file deletion</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="text-green-400 mr-2" /> Email support</li>
              </ul>
              <SignUpButton mode="modal">
                <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">Get Started Free</button>
              </SignUpButton>
            </div>
            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-700 via-purple-700 to-gray-900 rounded-2xl p-8 shadow-xl border border-blue-500/30 backdrop-blur-xl flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-4 right-4"><Star className="text-yellow-400 animate-pulse" /></div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-4xl font-extrabold text-yellow-400 mb-4">$9 <span className="text-base font-medium text-gray-200">/mo</span></p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-100"><CheckCircle2 className="text-green-400 mr-2" /> Unlimited PDF merges</li>
                <li className="flex items-center text-gray-100"><CheckCircle2 className="text-green-400 mr-2" /> Priority processing</li>
                <li className="flex items-center text-gray-100"><CheckCircle2 className="text-green-400 mr-2" /> Team collaboration</li>
                <li className="flex items-center text-gray-100"><CheckCircle2 className="text-green-400 mr-2" /> Cloud storage</li>
                <li className="flex items-center text-gray-100"><CheckCircle2 className="text-green-400 mr-2" /> Premium support</li>
              </ul>
              <SignUpButton mode="modal">
                <button className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-300 transition-all duration-200">Upgrade to Pro</button>
              </SignUpButton>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 sm:text-4xl">
            Ready to merge your PDFs?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of users who trust our PDF merger every day
          </p>
          <div className="mt-8">
            <SignUpButton mode="modal">
              <button className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <div className="relative rounded-full bg-gray-900 px-6 py-3">
                  <span className="relative text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    Get Started Now
                  </span>
                  <ArrowRight className="relative inline-block h-4 w-4 ml-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300" />
                </div>
              </button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </div>
  );
}
