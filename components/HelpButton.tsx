'use client'

import { HelpCircle } from 'lucide-react'

interface HelpButtonProps {
  onClick: () => void
}

export function HelpButton({ onClick }: HelpButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-110 flex items-center justify-center z-40 group"
      title="Help & Support"
    >
      <HelpCircle className="w-6 h-6" />
      <span className="absolute -left-32 bg-card border border-border rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Help & Support
      </span>
    </button>
  )
}
