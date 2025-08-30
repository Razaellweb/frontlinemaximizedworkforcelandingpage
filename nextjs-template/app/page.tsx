"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { ArrowRight, Camera, Star, ShieldCheck, ChevronRight, LucideUser } from "lucide-react";

// Example data for social proof & testimonials
const featuredPhotographers = [
  {
    name: "Alex Kim",
    role: "Portrait & Events",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Wedding Specialist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Chan",
    role: "Commercial & Branding",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Front-line instantly connected us with a pro photographer who captured our company launch perfectly.",
    name: "Rachel M.",
    title: "Event Marketer, NovaTech",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    quote: "Booking and payment felt seamless – and the work was outstanding!",
    name: "James B.",
    title: "Owner, Flora Café",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const faqs = [
  {
    q: "How are photographers vetted?",
    a: "All photographers undergo portfolio reviews, background checks, and client references before joining.",
  },
  {
    q: "What is the booking and payment process?",
    a: "Simply post your job, choose a photographer, and make secure payments—backed by our satisfaction guarantee.",
  },
  {
    q: "Can I browse portfolios before contacting?",
    a: "Absolutely. Every photographer’s detailed portfolio is available to explore before reaching out.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-[#f1f5f9] to-white dark:from-[#0f172a] dark:to-[#1e293b]">
      {/** NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur flex items-center justify-between px-6 sm:px-12 py-5 border-b border-slate-200 dark:border-slate-800">
        <Link href="/" aria-label="Front-line maximized workforce logo" className="flex items-center gap-2 font-bold text-2xl text-[#1e3a8a] dark:text-[#f1f5f9]">
          <Camera className="w-8 h-8 text-[#1e3a8a] dark:text-[#f1f5f9]" aria-hidden />
          <span className="tracking-tight">Front-line</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="hover:text-[#1e3a8a] transition-colors text-base font-medium text-slate-700 dark:text-slate-200"
          >
            Features
          </Link>
          <Link
            href="#photographers"
            className="hover:text-[#1e3a8a] transition-colors text-base font-medium text-slate-700 dark:text-slate-200"
          >
            Photographers
          </Link>
          <Link
            href="#reviews"
            className="hover:text-[#1e3a8a] transition-colors text-base font-medium text-slate-700 dark:text-slate-200"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="hover:text-[#1e3a8a] transition-colors text-base font-medium text-slate-700 dark:text-slate-200"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/signin" aria-label="Sign In">
            <Button variant="ghost" size="sm" className="text-base font-medium text-[#1e3a8a] dark:text-[#f1f5f9] hover:bg-slate-100 dark:hover:bg-[#1e293b]">
              Sign In
            </Button>
          </Link>
          <Link href="/signup" aria-label="Sign Up">
            <Button
              variant="default"
              size="lg"
              className="text-base px-6 py-2 rounded-md bg-[#1e3a8a] text-white hover:bg-[#3b66c8] shadow-lg transition shadow-[#1e3a8a]/10"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full px-4 md:px-0 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between bg-gradient-to-tr from-[#f1f5f9] to-white dark:from-[#1e293b] dark:to-[#0f172a] ">
        <div className="max-w-xl w-full mx-auto md:mx-0 md:w-1/2 flex flex-col gap-6 order-2 md:order-1 items-start animate-fade-in-up">
          <h1 className="font-extrabold text-4xl sm:text-5xl xl:text-6xl text-[#1e3a8a] dark:text-[#f1f5f9] leading-tight tracking-tight mb-3 drop-shadow-md">
            Find & Hire <span className="bg-gradient-to-r from-[#1e3a8a] via-[#647acb] to-[#8da2fb] bg-clip-text text-transparent">Top Photographers</span>, Instantly.
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-3">
            Front-line maximized workforce is your dedicated platform for sourcing vetted, professional photographers—across every style & budget. Easily browse, book, and get stunning results for any occasion.
          </p>
          <Link href="/signup" aria-label="Find Your Photographer">
            <Button
              variant="outline"
              size="lg"
              className="text-[#1e3a8a] dark:text-[#1e3a8a] border-[#1e3a8a] dark:border-[#647acb] bg-white/80 dark:bg-[#1e293b] hover:bg-[#e0e7ef]/80 dark:hover:bg-[#223162] font-bold py-3 px-7 text-lg rounded-md flex items-center gap-2 animate-bounce-slow shadow-md"
            >
              <Camera className="w-5 h-5" aria-hidden />
              Find Your Photographer
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Button>
          </Link>
        </div>
        <div className="relative flex-1 flex items-center justify-center md:mt-0 order-1 md:order-2 w-full md:w-auto animate-fade-in">
          {/* Simulated portfolio / photo grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 p-3 bg-white/70 dark:bg-[#1e2333]/80 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
            {featuredPhotographers.map((photog, idx) => (
              <div
                key={photog.name}
                className="flex flex-col items-center gap-2 p-2 md:p-4 bg-gradient-to-br from-[#e0e7ef]/50 to-white/60 dark:from-[#223162]/80 dark:to-[#1e2333]/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <Avatar className="h-16 w-16">
                  <AvatarImage src={photog.img} alt={photog.name + " profile photo"} />
                  <AvatarFallback>{photog.name[0]}</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-[#1e3a8a] dark:text-[#f1f5f9] text-base md:text-lg text-center">
                  {photog.name}
                </div>
                <div className="text-xs md:text-sm text-[#3b4661] dark:text-slate-200 opacity-80 text-center">
                  {photog.role}
                </div>
              </div>
            ))}
            {/* filler images for photo grid style */}
            <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-2 p-2 md:p-4 bg-gradient-to-br from-[#f1f5f9] to-white dark:from-[#1e293b] dark:to-[#223162] rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80"
                alt="Sample event portfolio image"
                className="rounded-lg w-16 h-16 object-cover border border-slate-200"
                loading="lazy"
              />
              <span className="text-xs text-slate-500 dark:text-slate-400">Wedding Moment</span>
            </div>
            <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-2 p-2 md:p-4 bg-gradient-to-br from-[#e0e7ef] to-white dark:from-[#223162]/50 dark:to-[#1e2333] rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=facearea&w=128&q=80"
                alt="Business portrait portfolio image"
                className="rounded-lg w-16 h-16 object-cover border border-slate-200"
                loading="lazy"
              />
              <span className="text-xs text-slate-500 dark:text-slate-400">Business Portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SOCIAL PROOF */}
      <section id="socialproof" className="w-full px-4 md:px-0 pt-10 md:pt-16 pb-8 md:pb-14 flex flex-col items-center gap-6 bg-transparent">
        <p className="text-base font-semibold uppercase tracking-wide text-[#1e3a8a] dark:text-[#8da2fb] text-center mb-3">TRUSTED BY 12,000+ CUSTOMERS & TEAMS</p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 opacity-75">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="NovaTech" className="w-10 h-10 rounded-full shadow-md border border-slate-200" />
          <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="BloomEvents" className="w-10 h-10 rounded-full shadow-md border border-slate-200" />
          <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Photosnap Agency" className="w-10 h-10 rounded-full shadow-md border border-slate-200" />
          <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="Flora Café" className="w-10 h-10 rounded-full shadow-md border border-slate-200" />
          <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="EpicExtravaganza" className="w-10 h-10 rounded-full shadow-md border border-slate-200" />
        </div>
      </section>

      {/* FEATURES & BENEFITS SECTION */}
      <section id="features" className="w-full px-4 md:px-0 py-16 flex flex-col gap-12 items-center max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full mb-2">
          <FeatureCard
            icon={<ShieldCheck className="w-8 h-8 text-[#1e3a8a]" aria-hidden />}
            heading="Vetted Pros"
            desc="Hand-picked, experienced photographers for every style and need."
          />
          <FeatureCard
            icon={<Camera className="w-8 h-8 text-[#1e3a8a]" aria-hidden />}
            heading="Portfolio Highlights"
            desc="Stunning galleries to explore before you book. See real, verified work."
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-[#1e3a8a]" aria-hidden />}
            heading="Transparent Ratings"
            desc="Honest client reviews and star ratings, right on every profile."
          />
          <FeatureCard
            icon={<ArrowRight className="w-8 h-8 text-[#1e3a8a]" aria-hidden />}
            heading="One-click Booking"
            desc="Seamless job posting, instant availability, and secure payment."
          />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="howitworks" className="w-full px-4 md:px-0 py-12 flex flex-col items-center gap-5 bg-gradient-to-l from-[#f1f5f9] to-[#e0e7ef] dark:from-[#1e293b] dark:to-[#23316c]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] dark:text-[#f1f5f9] mb-4">How It Works</h2>
        <ol className="flex flex-col md:flex-row gap-6 md:gap-14 w-full justify-center items-start md:items-center list-decimal">
          <li className="flex-1 max-w-xs flex flex-col items-start gap-3 pl-4 relative before:bg-[#1e3a8a] before:rounded-full before:w-2 before:h-2 before:absolute before:left-0 before:top-2">
            <span className="font-semibold text-[#1e3a8a] dark:text-[#8da2fb]">Post your job or browse portfolios</span>
            <span className="text-sm text-slate-700 dark:text-slate-200">
              Share your needs and budget, or instantly explore our community of top talent.
            </span>
          </li>
          <li className="flex-1 max-w-xs flex flex-col items-start gap-3 pl-4 relative before:bg-[#1e3a8a] before:rounded-full before:w-2 before:h-2 before:absolute before:left-0 before:top-2">
            <span className="font-semibold text-[#1e3a8a] dark:text-[#8da2fb]">Connect & Collaborate</span>
            <span className="text-sm text-slate-700 dark:text-slate-200">
              Chat directly, review portfolios, and select a pro that matches your vision.
            </span>
          </li>
          <li className="flex-1 max-w-xs flex flex-col items-start gap-3 pl-4 relative before:bg-[#1e3a8a] before:rounded-full before:w-2 before:h-2 before:absolute before:left-0 before:top-2">
            <span className="font-semibold text-[#1e3a8a] dark:text-[#8da2fb]">Book & Pay Securely</span>
            <span className="text-sm text-slate-700 dark:text-slate-200">
              Manage bookings, contracts, and payments with full transparency and support.
            </span>
          </li>
        </ol>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="reviews" className="w-full px-4 md:px-0 py-16 flex flex-col gap-8 items-center bg-transparent">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] dark:text-[#f1f5f9] mb-2">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-7 w-full justify-center items-stretch">
          {testimonials.map((testi, idx) => (
            <div
              key={testi.name}
              className="flex-1 rounded-xl bg-gradient-to-tr from-[#e0e7ef] to-white dark:from-[#223162] dark:to-[#1e2333] p-7 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-6 max-w-md hover:scale-[1.03] hover:shadow-2xl transition-transform"
            >
              <blockquote className="text-lg italic text-[#1e3a8a] dark:text-[#f1f5f9] mb-2">“{testi.quote}”</blockquote>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testi.img} alt={testi.name + " avatar"} />
                  <AvatarFallback>{testi.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-[#1e3a8a] dark:text-[#8da2fb] leading-snug">{testi.name}</div>
                  <div className="text-xs text-[#3b4661] dark:text-slate-300 ">{testi.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full px-4 md:px-0 py-16 flex flex-col gap-8 items-center bg-gradient-to-tr from-[#f1f5f9] to-[#e0e7ef] dark:from-[#1e293b] dark:to-[#23316c]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] dark:text-[#f1f5f9]">Frequently Asked Questions</h2>
        <div className="w-full max-w-2xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e2333] rounded-md p-5 mb-5 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="font-semibold text-[#1e3a8a] dark:text-[#f1f5f9] text-base flex gap-2 items-center mb-2">
                <ChevronRight className="w-4 h-4 text-[#1e3a8a]" aria-hidden />
                {faq.q}
              </div>
              <div className="text-slate-700 dark:text-slate-200 text-sm pl-6">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* APP CTA / FINAL CONVERSION SECTION */}
      <section className="w-full px-4 md:px-0 py-16 flex flex-col items-center gap-7 bg-[#1e3a8a] dark:bg-gradient-to-br dark:from-[#1e3a8a] dark:to-[#223162] text-white">
        <h2 className="text-3xl font-bold mb-3 text-center">Ready to Capture Your Moment?</h2>
        <p className="text-lg mb-4 text-center max-w-xl">
          Join thousands trusting Front-line maximized workforce for unforgettable photography results. Hire, showcase, and grow your talent—all in one place.
        </p>
        <Link href="/signup" aria-label="Get Started">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white font-bold bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg text-lg shadow-xl flex items-center gap-2"
          >
            <Camera className="w-5 h-5" aria-hidden />
            Find Your Photographer
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-[#1e2333]/80 py-6 flex flex-col md:flex-row justify-between items-center px-8 gap-3 text-sm text-slate-700 dark:text-slate-300">
        <span className="flex items-center gap-2"><Camera className="w-5 h-5" aria-hidden /> Front-line maximized workforce &copy; {new Date().getFullYear()} </span>
        <div className="flex gap-5">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#photographers" className="hover:underline">Photographers</Link>
          <Link href="#faq" className="hover:underline">FAQ</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}

// Features Card Component
function FeatureCard({ icon, heading, desc }: { icon: React.ReactNode; heading: string; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white dark:bg-[#1e2333]/90 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform w-full text-center">
      <div className="mb-1">{icon}</div>
      <div className="font-semibold text-[#1e3a8a] dark:text-[#f1f5f9] text-base mb-1">{heading}</div>
      <div className="text-sm text-slate-700 dark:text-slate-300 opacity-90">{desc}</div>
    </div>
  );
}

/**
 * Subtle custom animation keyframes via Tailwind config (to be added):
 * animate-fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
 * animate-fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
 * animate-bounce-slow { ... }
 */
