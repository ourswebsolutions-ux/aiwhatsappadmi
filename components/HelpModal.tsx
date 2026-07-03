'use client'

import { X, MessageSquare, Send, FileText, Phone } from 'lucide-react'

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in">
      <div className="bg-card border border-border rounded-2xl max-w-md w-full shadow-2xl animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-2xl font-bold">Help & Support</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-muted-foreground mb-6">
            Need assistance? Choose your preferred contact method below.
          </p>

          <a
            href="https://wa.me/+923245237429"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/30 rounded-xl hover:border-primary/60 hover:bg-primary/20 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+923245237429</p>
            </div>
          </a>

          <a
            href="mailto:info.axoraweb@gmail.com"
            className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/30 rounded-xl hover:border-primary/60 hover:bg-primary/20 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">info.axoraweb@gmail.com</p>
            </div>
          </a>

          <a
            href="/doc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/30 rounded-xl hover:border-primary/60 hover:bg-primary/20 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Documentation</p>
              <p className="text-sm text-muted-foreground">View guides and tutorials</p>
            </div>
          </a>

          <a
            href="tel:+923245237429"
            className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/30 rounded-xl hover:border-primary/60 hover:bg-primary/20 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-muted-foreground">+923245237429</p>
            </div>
          </a>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-in {
          animation: fade-in 0.2s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
