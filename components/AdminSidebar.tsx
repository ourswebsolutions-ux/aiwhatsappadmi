'use client'

import { MessageCircle, LayoutDashboard, Users, Settings } from 'lucide-react'
import Link from 'next/link'

export function AdminSidebar() {
  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-bold text-sm">WhatsApp</p>
            <p className="text-xs text-muted-foreground">Automation</p>
          </div>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/20 text-primary font-medium transition-colors"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-card transition-colors"
        >
          <Users className="w-5 h-5" />
          Users
        </Link>
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-card transition-colors"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        <p>Admin Dashboard v1.0</p>
      </div>
    </div>
  )
}
