"use client"
import { Button } from "@/components/ui/button"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Stats from "@/components/Stats"
import CustomerConnect from "@/components/CustomerConnect"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Blog from "@/components/Blog"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CustomerConnect />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}
