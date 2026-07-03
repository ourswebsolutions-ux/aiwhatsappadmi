'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'

interface User {
  id: number
  name: string
  phone: string
  email: string
  package: string
  balance: number
  status: 'active' | 'inactive' | 'banned'
  registeredDate: string
}

interface AddBalanceModalProps {
  isOpen: boolean
  onClose: () => void
  user: User
  onAddBalance: (phoneNumber: string, amount: number) => void
}

export function AddBalanceModal({
  isOpen,
  onClose,
  user,
  onAddBalance,
}: AddBalanceModalProps) {
  const [balance, setBalance] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const amount = parseFloat(balance)
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount')
      return
    }

    onAddBalance(user.phone, amount)
    setBalance('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md animate-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Add Balance</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-border rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">User</label>
            <div className="bg-input border border-border rounded-lg px-4 py-3 text-foreground">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.phone}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Balance</label>
            <div className="bg-input border border-border rounded-lg px-4 py-3 text-primary font-medium">
              ${user.balance.toFixed(2)}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Amount to Add</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => {
                setBalance(e.target.value)
                setError('')
              }}
              placeholder="Enter amount"
              step="0.01"
              min="0"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              autoFocus
            />
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </div>

          <div className="bg-card/50 border border-border rounded-lg px-4 py-3">
            <p className="text-sm text-muted-foreground mb-1">New Balance</p>
            <p className="text-lg font-bold text-primary">
              ${(user.balance + (parseFloat(balance) || 0)).toFixed(2)}
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-card transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Add Balance
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
