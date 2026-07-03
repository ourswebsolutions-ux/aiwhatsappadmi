import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import {
  Download,
  Smartphone,
  LayoutDashboard,
  Users,
  MessageSquare,
  Send,
  Settings,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

interface Note {
  type: 'tip' | 'success' | 'warning';
  title: string;
  content: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
  image: string;
  note?: Note;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Download & Install",
    description: "Download the application according to your operating system.",
    icon: <Download className="w-6 h-6" />,
    bullets: [
      "Download Windows version if you use Windows.",
      "Download Linux version if you use Linux.",
      "Install the application normally.",
      "Launch the software."
    ],
    note: {
      type: 'tip',
      title: "Always download the latest version.",
      content: "Check our website for the most recent release to ensure you have all the latest features and security updates."
    },
    image: "/install.png"
  },
  {
    number: 2,
    title: "Connect WhatsApp",
    description: "After opening the software, connect your WhatsApp account.",
    icon: <Smartphone className="w-6 h-6" />,
    bullets: [
      "Open WhatsApp on your phone.",
      "Tap Menu or Settings.",
      "Open Linked Devices.",
      "Tap Link a Device.",
      "Scan the QR Code.",
      "Wait until status changes to Connected."
    ],
    note: {
      type: 'success',
      title: "When Connected appears, your WhatsApp is ready.",
      content: "You can now send messages through the software."
    },
    image: "/scan.png"
  },
  {
    number: 3,
    title: "Dashboard Overview",
    description: "The Dashboard displays connection status and software statistics.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    bullets: [
      "Connection Status",
      "Total Contacts",
      "Selected Contacts",
      "Queue Status",
      "Sending Progress",
      "Quick Actions"
    ],
    note: {
      type: 'tip',
      title: "Verify your WhatsApp status before sending messages.",
      content: "Make sure your connection is stable for optimal performance."
    },
    image: "/dashborad.png"
  },
  {
    number: 4,
    title: "Manage Contacts",
    description: "Import and organize your contacts before sending messages.",
    icon: <Users className="w-6 h-6" />,
    bullets: [
      "Import CSV",
      "Sync WhatsApp Contacts",
      "Search Contacts",
      "Select Individual Contacts",
      "Select All Contacts",
      "Export VCF",
      "Remove Duplicate Contacts"
    ],
    note: {
      type: 'tip',
      title: "Clean contact lists improve delivery.",
      content: "Removing duplicates and invalid numbers significantly increases success rate."
    },
    image: "/content.png"
  },
  {
    number: 5,
    title: "Compose Your Message",
    description: "Write your message using variables for personalization.",
    icon: <MessageSquare className="w-6 h-6" />,
    bullets: [
      "Write your message.",
      "Use {{name}}",
      "Use {{phone}}",
      "Preview the message.",
      "Continue to Queue."
    ],
    note: undefined,
    image: "/compose.png"
  },
  {
    number: 6,
    title: "Start Sending Queue",
    description: "Review your sending queue before starting.",
    icon: <Send className="w-6 h-6" />,
    bullets: [
      "Check total messages.",
      "Review batch settings.",
      "Monitor progress.",
      "Watch Sent / Remaining / Failed."
    ],
    note: {
      type: 'success',
      title: "Do not close the software while messages are sending.",
      content: "Keep the application running in the background to ensure uninterrupted delivery."
    },
    image: "/que.png"
  },
  {
    number: 7,
    title: "Configure Settings",
    description: "Customize the sending behaviour.",
    icon: <Settings className="w-6 h-6" />,
    bullets: [
      "Delay Between Messages",
      "Random Delay",
      "Messages Per Batch",
      "Batch Pause",
      "Retry Attempts",
      "Auto Reconnect"
    ],
    note: {
      type: 'warning',
      title: "Use reasonable delays to reduce the risk of WhatsApp restrictions.",
      content: "We recommend starting with 15-30 seconds between messages for safety."
    },
    image: "/configration.png"
  }
];

function StepCard({ step }: { step: Step }) {
  const noteColor = {
    tip: 'border-emerald-500/30 bg-emerald-950/50 text-emerald-300',
    success: 'border-emerald-500/30 bg-emerald-950/50 text-emerald-300',
    warning: 'border-amber-500/30 bg-amber-950/50 text-amber-300',
  }[step.note?.type || 'tip'];

  return (
    <div className="group bg-card border border-border rounded-3xl p-1 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 md:p-8 lg:p-10">
        {/* Left: Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          <div className="flex items-start gap-4 md:gap-6">
            {/* Step Number */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl md:text-3xl font-semibold text-emerald-500 mt-1">
              {step.number}
            </div>

            {/* Title & Icon */}
            <div className="pt-0.5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-primary flex-shrink-0">{step.icon}</div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-3 pl-1 md:pl-2">
            {step.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-[7px] flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Note Box */}
          {step.note && (
            <div className={`rounded-2xl border p-5 md:p-6 text-sm ${noteColor}`}>
              <div className="flex items-center gap-2 mb-3 font-medium">
                {step.note.type === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                )}
                {step.note.title}
              </div>
              <p className="leading-relaxed">{step.note.content}</p>
            </div>
          )}
        </div>

        {/* Right: Image - Always below on mobile */}
        <div className="flex-1 flex items-center justify-center lg:justify-end pt-4 lg:pt-0">
          <div className="w-full max-w-full lg:max-w-[520px] relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-inner group-hover:shadow-xl transition-all duration-500">
              <Image
                src={step.image}
                alt={`${step.title} screenshot`}
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority={step.number <= 2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GuidancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-12 md:pb-16">
          <Navbar />
    

      {/* Header */}
      <div className="border-b mt-20 border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Complete User Guide
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground px-2">
              Follow these simple steps to start using the WhatsApp Automation software.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 md:pt-12">
        <div className="space-y-12 md:space-y-16">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 mt-16 md:mt-20">
        <div className="bg-gradient-to-br from-card via-card to-card/80 border border-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-8 right-8 text-emerald-500/10 pointer-events-none hidden md:block">
            <CheckCircle className="w-32 h-32" />
          </div>

          <div className="relative">
            <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
              You&apos;re Ready!
            </h2>

            <p className="text-base md:text-xl text-muted-foreground max-w-md mx-auto mb-10">
              Your software is now fully configured. Import your contacts, compose your message and start sending professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 md:px-10 py-3.5 md:py-4 rounded-2xl transition-all active:scale-[0.985] text-base"
              >
                Need Help ?
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/+923245237429"
                className="inline-flex items-center justify-center gap-3 border border-border hover:bg-card hover:border-primary/50 font-medium px-8 py-3.5 md:py-4 rounded-2xl transition-all text-base"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}