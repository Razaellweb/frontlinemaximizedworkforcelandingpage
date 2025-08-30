// app/page.tsx
'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Button,
} from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { CheckIcon } from "../components/icons";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";

const HERO_IMAGE = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80";

const features = [
  {
    title: "Verified Portfolios",
    description: "Browse authentic portfolios from real photographers — see their style before you book.",
    icon: <CheckIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: "Streamlined Booking",
    description: "Book, chat, and manage jobs in one place. No more endless back-and-forth emails.",
    icon: <CheckIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: "Secure Payments",
    description: "All payments are held securely until the job is complete and you’re satisfied.",
    icon: <CheckIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: "Transparent Reviews",
    description: "See uncensored feedback and ratings from real clients for every photographer.",
    icon: <CheckIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
];

const testimonials = [
  {
    quote:
      "Booking through Front-line maximized workforce felt seamless. The portfolio previews set my expectations perfectly, and the results blew me away!",
    name: "Lena Thompson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "I landed my dream wedding client thanks to the trust I built with my portfolio and reviews right on the platform.",
    name: "Carlos Rivera",
    role: "Wedding Photographer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote:
      "The transparent booking and secure payments gave me the confidence to hire for my big event. Highly recommended!",
    name: "Priya Patel",
    role: "Event Planner",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

const faqs = [
  {
    question: "How do I book a photographer?",
    answer:
      "Simply browse verified photographer profiles, pick your favorite, and click 'Book Now' to start messaging and arrange your project.",
  },
  {
    question: "Is payment safe?",
    answer:
      "Payments are securely processed and not released to the photographer until your job is completed and you confirm satisfaction.",
  },
  {
    question: "How are photographers verified?",
    answer:
      "All photographers are manually screened, and only those with complete portfolios and verified credentials are listed.",
  },
  {
    question: "Can I leave a review after my project?",
    answer:
      "Yes! Reviews from real clients are the backbone of our platform’s trust and transparency.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 dark:bg-slate-900 dark:text-slate-50 font-[Work_Sans,Graphik,sans-serif]">
      <Head>
        <title>Front-line maximized workforce | Hire Photographers. Elevate Your Story.</title>
        <meta name="description" content="A dedicated platform to connect clients and professional photographers. Find, book, and trust the perfect photographer for you." />
        <meta property="og:title" content="Front-line maximized workforce" />
        <meta property="og:description" content="Book professional photographers. Review portfolios. Seamless hiring experience." />
        <meta property="og:image" content={HERO_IMAGE} />
      </Head>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 transition-all">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="Front-line maximized workforce Home">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent text-2xl font-bold tracking-tight">FLMW</span>
            <span className="sr-only">Front-line maximized workforce</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/signin" className="inline-flex items-center px-4 py-2 rounded-md font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-800/30 transition-colors">Sign In</Link>
            <Link href="/signup">
              <Button size="lg" className="px-6 py-2 text-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 shadow-lg rounded-md">
                Find Your Photographer
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative isolate h-[530px] sm:h-[550px] flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto gap-10 px-4 sm:px-8 py-14 md:py-28 animate-in fade-in-50">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-7 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent drop-shadow-md animate-fadeInUp">
            Hire Photographers. Elevate Your Story.
          </h1>
          <p className="mt-2 text-lg lg:text-xl text-slate-700 dark:text-slate-200 max-w-xl animate-fadeInUp delay-100">
            A dedicated platform to connect clients and professional photographers for all your photo needs. Seamless booking, transparent reviews, and inspiring portfolios—everything you need to capture the perfect shot.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="px-7 py-3 text-lg font-bold bg-blue-700 hover:bg-blue-800 text-white transition drop-shadow-lg animate-pulse"
              aria-label="Find Your Photographer"
            >
              Find Your Photographer
            </Button>
          </Link>
        </div>
        <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[320px]">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900 transition hover:ring-blue-300 animate-fadeInUp">
            <img
              src={HERO_IMAGE}
              alt="Dynamic scene of a professional photographer at work"
              className="object-cover w-full h-80 sm:h-96 md:h-[350px] aspect-[4/3]"
              width={580}
              height={430}
              loading="eager"
              draggable="false"
            />
          </div>
          {/* Photographer callout floating badge */}
          <div className="hidden sm:flex absolute top-5 left-5 items-center gap-2 bg-slate-100/80 dark:bg-slate-900/70 px-4 py-2 rounded-full shadow-xl backdrop-blur text-slate-900 dark:text-white text-base font-medium animate-fadeInLeft">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
            Verified Photographer
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Marks */}
      <section
        aria-label="Trusted By"
        className="w-full bg-blue-50/80 dark:bg-blue-900/30 py-6 sm:py-8 border-y border-blue-100 dark:border-blue-800 animate-fadeInUp"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8">
          <img src="/assets/brand1.svg" alt="Brand One" className="h-7 grayscale opacity-90" />
          <img src="/assets/brand2.svg" alt="Brand Two" className="h-7 grayscale opacity-90" />
          <img src="/assets/brand3.svg" alt="Brand Three" className="h-7 grayscale opacity-90" />
          <img src="/assets/brand4.svg" alt="Brand Four" className="h-7 grayscale opacity-90" />
          <img src="/assets/brand5.svg" alt="Brand Five" className="h-7 grayscale opacity-90" />
        </div>
      </section>

      {/* Features Section */}
      <section
        aria-labelledby="features-title"
        className="w-full bg-white dark:bg-slate-900 py-16 md:py-20 animate-fadeInUp"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 id="features-title" className="text-3xl sm:text-4xl font-extrabold mb-10 text-slate-900 dark:text-white text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex flex-col items-start justify-start bg-blue-50/40 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 rounded-xl shadow-md gap-4 p-7 h-full hover:scale-[1.025] transition-transform group animate-fadeInUp"
              >
                <span className="inline-flex items-center justify-center rounded-full p-2 mb-4 bg-blue-100 dark:bg-blue-800">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-800 transition-colors">{feature.title}</h3>
                <p className="text-base text-slate-700 dark:text-slate-200 font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        aria-labelledby="testimonials-title"
        className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-white dark:from-blue-950 dark:via-blue-900 dark:to-slate-900 animate-fadeInUp"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 dark:text-blue-200 mb-12">Real Stories, Trusted Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="relative flex flex-col bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-800 rounded-2xl shadow-lg px-7 py-8 gap-7 animate-fadeInUp"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={t.image} alt={`Photo of ${t.name}`} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-blue-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-blue-500 dark:text-blue-300">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-lg text-slate-800 dark:text-slate-200 leading-normal italic border-l-4 border-blue-700 pl-4">
                  “{t.quote}”
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        aria-labelledby="faq-title"
        className="bg-white dark:bg-slate-900 py-16 md:py-24 border-t border-slate-200 dark:border-blue-800 animate-fadeInUp"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`faq-${i}`} key={faq.question}>
                <AccordionTrigger className="text-lg font-medium text-left focus:outline-none" aria-expanded="false">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-700 dark:text-slate-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="relative z-10 py-16 md:py-24 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white animate-fadeInUp">
        <div className="max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-8 gap-7 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Elevate Your Story?</h2>
          <p className="text-lg sm:text-xl max-w-2xl text-blue-100 opacity-95">
            Find, book, and trust a professional photographer – the right way. Join the Front-line maximized workforce community today.
          </p>
          <Link href="/signup">
            <Button size="lg" className="px-8 py-4 text-lg font-bold bg-white text-blue-700 border-2 border-white hover:text-blue-900 hover:bg-blue-100 shadow-lg rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-900">
              Find Your Photographer
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900/80 border-t border-slate-200 dark:border-blue-900/90 py-6 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-blue-900 dark:text-blue-200 text-base">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-blue-800 dark:text-blue-400">FLMW</span>
            <span className="text-gray-400">© {new Date().getFullYear()} Front-line maximized workforce. All rights reserved.</span>
          </div>
          <nav className="flex gap-4">
            <Link href="/faq" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Privacy</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

/**
 * Animations (add to your global css/tailwind config):
 * .animate-fadeInUp { @apply opacity-0 translate-y-6; animation: fadeInUp 1s cubic-bezier(.23,1.11,.32,1) forwards }
 * .animate-fadeInLeft { @apply opacity-0 -translate-x-6; animation: fadeInLeft 1s cubic-bezier(.23,1.11,.32,1) forwards }
 * @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
 * @keyframes fadeInLeft { to { opacity: 1; transform: translateX(0); } }
 */
