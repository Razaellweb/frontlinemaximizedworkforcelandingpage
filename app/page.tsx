"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { cn } from "../lib/utils"
import { ArrowRight, Camera, CheckCircle, CalendarDays, ShieldCheck, Users2, Star } from "lucide-react"

// ---- SECTION: NAVBAR ----
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-6 md:px-12 bg-white dark:bg-zinc-950 shadow-sm fixed top-0 left-0 z-40 backdrop-blur-lg">
      <Link href="/" aria-label="Front-line maximized workforce Home" className="flex items-center gap-2 select-none focus:outline-none">
        <Camera className="text-blue-800 dark:text-blue-400 w-7 h-7" aria-hidden="true" />
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Front-line <span className="text-blue-700 dark:text-blue-300">Maximized</span></span>
      </Link>
      <div className="flex gap-2">
        <Link href="/signin">
          <Button variant="ghost" size="sm" className="text-sm">Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shadow-sm transition-transform duration-200 focus:ring-2 focus:ring-blue-400">Sign Up</Button>
        </Link>
      </div>
    </nav>
  )
}

// ---- SECTION: HERO ----
function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-20 pt-24 md:pt-32 pb-16 md:pb-28 max-w-7xl mx-auto px-6 md:px-12 transition-all">
      {/* Left content */}
      <div className="flex-1 flex flex-col gap-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-[1.08] tracking-tight mb-3 animate-in fade-in slide-in-from-left duration-700">
          Hire the <span className="text-blue-700 dark:text-blue-400">Perfect Photographer</span><br className="hidden md:block"/> for Every Occasion
        </h1>
        <p className="text-lg md:text-xl max-w-xl font-medium text-zinc-700 dark:text-zinc-300 mb-6 animate-in fade-in slide-in-from-left delay-100 duration-700">
          Discover, book, and manage top photography talent for any project—all in one place. Make every shot count with confidence.
        </p>
        <div className="flex gap-5">
          <Link href="/signup">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-full bg-blue-700 hover:bg-blue-800 transition-colors duration-150 shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 flex items-center gap-2">
              Find Your Photographer
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="#how-it-works" className="flex items-center text-blue-700 dark:text-blue-400 font-medium underline underline-offset-2 hover:text-blue-800">
            How it works
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <Star className="text-yellow-500" aria-hidden="true" />
          <span className="text-zinc-600 dark:text-zinc-200 font-medium">Trusted by 2,500+ event planners & businesses</span>
        </div>
      </div>
      {/* Right visual: dynamic card collage with photographer portraits */}
      <div className="flex-1 flex items-center justify-center relative min-h-[340px] md:min-h-[420px]">
        <div className="absolute bg-gradient-to-tr from-blue-700 via-blue-400/60 to-transparent rounded-full blur-2xl w-60 h-60 md:w-96 md:h-96 -z-10 top-12 left-10 animate-in fade-in duration-700"/>
        {/* Avatar Collage */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
            {["men", "women", "men", "women", "men", "women", "men", "women", "men"].map((gender, i) => (
              <Card key={i} className={cn(
                "p-2 rounded-2xl flex flex-col items-center bg-white/90 dark:bg-zinc-900/75 shadow-xl",
                i === 4 && "scale-110 border-2 border-blue-700"
              )} style={{ animationDelay: `${i * 60}ms` }}>
                <Avatar className="w-16 h-16 md:w-20 md:h-20 mb-2 ring-2 ring-blue-400">
                  <AvatarImage src={`https://randomuser.me/api/portraits/${gender}/${30+i}.jpg`} alt="Photographer portrait" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">P</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">{gender === "men" ? "John Doe" : "Jane Doe"}</span>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

// ---- SECTION: SOCIAL PROOF ----
function SocialProof() {
  const brands = [
    { name: "Weddings.com", logo: Camera },
    { name: "Eventio", logo: CalendarDays },
    { name: "BizConnect", logo: Users2 },
    { name: "SecurePay", logo: ShieldCheck },
    { name: "Planners Hub", logo: CheckCircle },
  ]
  return (
    <section className="w-full py-7 bg-zinc-100 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="uppercase text-xs tracking-widest font-bold text-zinc-500 dark:text-zinc-400 mb-2 md:mb-0">TRUSTED BY LEADING BRANDS & PLANNERS</span>
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          {brands.map(({ name, logo: Logo }, i) => (
            <span
              key={name}
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" aria-label={name}>
              <Logo className="w-6 h-6 text-blue-700" aria-hidden="true" />
              <span className="hidden md:inline text-zinc-600 dark:text-zinc-400 font-medium">{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- SECTION: FEATURES ----
function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-700" aria-hidden="true" />,
      title: "Vetted Photographers",
      desc:
        "All talent is handpicked for skills, professionalism, and reliability.",
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-blue-700" aria-hidden="true" />,
      title: "Seamless Booking",
      desc:
        "Book and schedule shoots end-to-end, with secure payments included.",
    },
    {
      icon: <Star className="w-7 h-7 text-yellow-500" aria-hidden="true" />,
      title: "Verified Reviews",
      desc: "Browse real client testimonials and stunning portfolios.",
    },
    {
      icon: <Users2 className="w-7 h-7 text-blue-700" aria-hidden="true" />,
      title: "Smart Talent Match",
      desc: "Advanced search & job posting, bids, and project management—all-in-one.",
    },
  ]
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-10 tracking-tight text-center">A Platform Built for Trust, Talent, and Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {features.map((f, i) => (
          <Card key={i} className="flex flex-col items-center p-8 bg-white/90 dark:bg-zinc-900/70 shadow-xl rounded-3xl border border-transparent hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-150">
            <div className="mb-4 animate-in fade-in duration-700">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 text-center">{f.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-center text-base font-medium leading-relaxed">{f.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

// ---- SECTION: HOW IT WORKS ----
function HowItWorks() {
  const steps = [
    {
      icon: <Users2 className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Create your profile",
      desc: "Sign up, set your preferences and project needs, and get ready to start."
    },
    {
      icon: <CalendarDays className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Post or find a job",
      desc: "Post photography gigs or discover job opportunities tailored for you."
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Hire or get hired",
      desc: "Book photographers, manage jobs, and track all your projects—effortlessly."
    },
    {
      icon: <Star className="w-7 h-7 text-white" aria-hidden="true" />,
      title: "Showcase & review",
      desc: "Share portfolios, collect reviews, and build your photography brand."
    }
  ]
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-3 tracking-tight text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <Card key={i} className="relative overflow-visible flex flex-col items-center px-7 py-10 bg-blue-800/90 dark:bg-blue-900/90 border-0 shadow-2xl rounded-3xl group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 text-center">{s.title}</h3>
              <p className="text-blue-100/90 font-medium text-center text-base leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
      {/* dynamic highlight gradient */}
      <div className="absolute top-0 left-[20%] w-32 h-32 md:w-72 md:h-64 bg-gradient-to-bl from-blue-300 via-transparent to-transparent blur-3xl opacity-40 -z-10 animate-pulse" />
    </section>
  )
}

// ---- SECTION: TESTIMONIALS ----
function Testimonials() {
  const feedback = [
    {
      name: "Emily Chen",
      img: "https://randomuser.me/api/portraits/women/42.jpg",
      text: "The booking process was seamless, the photographer delivered beautiful images—couldn’t ask for more!",
      role: "Marketing Manager, Finix Ltd."
    },
    {
      name: "Ali Hassan",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "I booked a last-minute event and quickly found a professional photographer at a great rate. Highly recommended!",
      role: "Event Planner"
    },
    {
      name: "Caroline R.",
      img: "https://randomuser.me/api/portraits/women/66.jpg",
      text: "Loved the portfolio browsing, and the payment felt very secure. Already planning my next booking!",
      role: "Bride & Satisfied Customer"
    },
  ]
  return (
    <section className="py-20 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-2 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((t, i) => (
            <Card key={i} className="p-7 rounded-3xl border-0 bg-white/95 dark:bg-zinc-900/80 flex flex-col items-center gap-4 hover:shadow-2xl transition-shadow">
              <Avatar className="w-14 h-14 ring-2 ring-blue-300">
                <AvatarImage src={t.img} alt={`${t.name} user photo`} />
                <AvatarFallback className="bg-blue-50 text-blue-700 font-semibold">{t.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-zinc-700 dark:text-zinc-200 text-center text-base italic font-medium">“{t.text}”</p>
              <span className="text-sm text-blue-700 dark:text-blue-400 font-semibold">{t.name}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- SECTION: FAQ ----
function FAQ() {
  const qas = [
    {
      q: "How are photographers vetted?",
      a: "Each photographer is reviewed for technical skill, client satisfaction, and work ethic before acceptance."
    },
    {
      q: "Is payment secure?",
      a: "All payments are managed via encrypted, trusted gateways. You’re always protected."
    },
    {
      q: "Can I see portfolios and reviews?",
      a: "Absolutely. Every photographer has a full gallery and verified client feedback."
    },
    {
      q: "How fast can I book?",
      a: "Most clients match and book within 24 hours."
    },
  ]
  return (
    <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-5 text-center">FAQs</h2>
      <Accordion type="single" collapsible>
        {qas.map((qa, i) => (
          <AccordionItem value={`faq-${i}`} key={i}>
            <AccordionTrigger className="text-lg font-semibold text-zinc-700 dark:text-zinc-100">{qa.q}</AccordionTrigger>
            <AccordionContent className="text-base text-zinc-600 dark:text-zinc-300 font-medium">{qa.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

// ---- SECTION: CTA ----
function FinalCTA() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-4 tracking-tight">Ready to capture your perfect moment?</h2>
      <Link href="/signup">
        <Button size="lg" className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-950 transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center gap-2">
          Find Your Photographer
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
      <span className="text-zinc-600 dark:text-zinc-300 font-medium text-base">It’s free to browse. Only pay when you book.</span>
    </section>
  )
}

// ---- SECTION: FOOTER ----
function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-7 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-0">
        <span className="text-zinc-400 text-sm">© {new Date().getFullYear()} Front-line maximized workforce. All rights reserved.</span>
        <nav className="flex gap-5 text-sm">
          <Link href="/privacy" className="hover:underline text-zinc-500">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline text-zinc-500">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-x-hidden transition-colors">
      {/* SEO & Meta */}
      <head>
        <title>Hire the Perfect Photographer | Front-line maximized workforce</title>
        <meta name="description" content="The leading platform dedicated to connecting clients and professional photographers—discover, book, and manage top photography talent for any project, all in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hire the Perfect Photographer | Front-line maximized workforce" />
        <meta property="og:description" content="The leading platform for booking top photography talent. Find, book, and manage the best photographers for any event or project." />
        <meta property="og:type" content="website" />
      </head>
      <Navbar />
      <div className="pt-20 md:pt-28" />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
