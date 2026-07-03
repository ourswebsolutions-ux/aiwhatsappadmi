'use client'

import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";   // Next.js Image

import {
  MessageSquare,
  QrCode,
  Users,
  Send,
  Image as ImageIcon,        // Renamed to avoid conflict
  BarChart3,
  FileText,
  Zap,
  Shield,
  Sparkles,
  Clock,
  MessageSquareText,
  Cpu,
  Share2,
  Database,
  TrendingUp,
  Package,
  Cloud,
  Users as UsersIcon,
  Settings,
  Globe,
  Download,
  Terminal,
} from "lucide-react";

import { AdminPasswordModal } from '@/components/AdminPasswordModal'
import { Navbar } from '@/components/Navbar'
import { HelpButton } from '@/components/HelpButton'
import { HelpModal } from '@/components/HelpModal'
import { FutureFeatureCard } from '@/components/FutureFeatureCard'

const features = [
  { icon: QrCode, title: 'Connect WhatsApp using QR Code', desc: 'Secure QR code authentication' },
  { icon: Shield, title: 'Secure Login', desc: 'Enterprise-grade security' },
  { icon: Users, title: 'Load WhatsApp Contacts', desc: 'Import all your contacts instantly' },
  { icon: Send, title: 'Send Bulk Messages', desc: 'Send messages to thousands at once' },
  { icon: ImageIcon, title: 'Send Images Videos Documents', desc: 'Support all media types' },
  { icon: MessageSquare, title: 'One by One Safe Sending', desc: 'Avoid WhatsApp blocks with safe sending' },
  { icon: BarChart3, title: 'Progress Tracking', desc: 'Real-time sending progress' },
  { icon: FileText, title: 'Message Logs', desc: 'Complete message history' },
  { icon: Zap, title: 'Fast Performance', desc: 'Lightning-fast processing' },
  { icon: Shield, title: 'Easy to Use Interface', desc: 'Intuitive and user-friendly' },
]

const futureFeatures = [
  { icon: Sparkles, title: 'AI Powered Message Personalization' },
  { icon: Clock, title: 'Scheduled Messaging' },
  { icon: MessageSquareText, title: 'Message Templates' },
  { icon: Cpu, title: 'Auto Reply System' },
  { icon: Share2, title: 'Multiple WhatsApp Account Support' },
  { icon: Database, title: 'Contact Group Management' },
  { icon: TrendingUp, title: 'Campaign Analytics' },
  { icon: Package, title: 'Message Delivery Reports' },
  { icon: Cloud, title: 'Import Contacts from Excel and CSV' },
  { icon: UsersIcon, title: 'Contact Filtering' },
  { icon: Database, title: 'Cloud Backup' },
  { icon: Zap, title: 'Team Management' },
  { icon: Settings, title: 'API Integration' },
  { icon: Zap, title: 'Auto Updates' },
  { icon: Globe, title: 'Multi Language Support' },
]

export default function Home() {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [showHelpPage, setShowHelpPage] = useState(false);
const [isLinuxOpen, setIsLinuxOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                WhatsApp 
                <span className="text-primary block">Automation</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Automate your WhatsApp messaging with our powerful desktop software.
                Send bulk messages, manage contacts, and track progress all in one
                place.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">

  {/* 🪟 WINDOWS - direct download */}
  <a
    href="/downloads/WhatsApp-Automated-Setup-1.0.3.exe"
    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
  >
    <Download className="w-5 h-5 group-hover:animate-bounce" />
    Download for Windows
  </a>

  {/* 🐧 LINUX DROPDOWN */}
  <div className="relative">

    <button
      onClick={() => setIsLinuxOpen(!isLinuxOpen)}
      className="bg-black text-green-500 border-2 border-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2"
    >
      <Terminal className="w-5 h-5" />
      Download for Linux
    </button>

    {isLinuxOpen && (
      <div className="absolute mt-2 w-full bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">

        <a
          href="/downloads/WhatsApp-Automated-1.0.3.AppImage"
          className="block px-4 py-3 hover:bg-muted transition"
        >
          AppImage (Universal)
        </a>

        <a
          href="/downloads/whatsapp-automated_1.0.3_amd64.deb"
          className="block px-4 py-3 hover:bg-muted transition"
        >
          Debian (.deb)
        </a>

      </div>
    )}

  </div>

</div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Need help setting up the software?{" "}
                  <Link
                    href="/doc"
                    className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Side Preview */}
           <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-primary/30 animate-float bg-card">
  <Image
    src="/hero.png"
    alt="WhatsApp Automation Desktop Preview"
    fill
    priority
    className="object-contain p-4 hover:scale-105 transition-transform duration-300"
  />
</div>          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate your WhatsApp messaging at scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 md:py-20 px-5 sm:px-6 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See It in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our clean and intuitive interface
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Login Screen', desc: 'Secure authentication', image: '/login.png' },
              { title: 'QR Code Screen', desc: 'Easy WhatsApp connection', image: '/scan.png' },
              { title: 'Contact List', desc: 'Manage your contacts', image: '/content.png' },
              { title: 'Bulk Messaging', desc: 'Send messages to many', image: '/compose.png' },
              { title: 'Sending Progress', desc: 'Real-time tracking', image: '/que.png' },
              { title: 'Dashboard Interface', desc: 'Complete overview', image: '/dashborad.png' },
            ].map((screenshot, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-semibold mb-1 text-foreground">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section id="coming-soon" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exciting premium features in development to enhance your WhatsApp automation experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {futureFeatures.map((feature, i) => {
              return (
                <FutureFeatureCard
                  key={i}
                  icon={feature.icon}
                  title={feature.title}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+92 324 5237429</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">infoaxorawebsolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <p className="text-muted-foreground">www.axorawebsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-card border border-border rounded-2xl p-8">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+92 324 5237429"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} WhatsApp Automation Software. All rights reserved.
              </p>
            </div>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="text-xs px-3 py-2 rounded-md border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              Admin
            </button>
          </div>
        </div>
      </footer>

      {/* Admin Modal */}
      <AdminPasswordModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      {/* Help Button & Modal */}
      <HelpButton onClick={() => setIsHelpOpen(true)} />
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}