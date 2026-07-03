'use client'

import { useState } from 'react'
import { X, Package } from 'lucide-react'

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

interface ActivatePackageModalProps {
  isOpen: boolean
  onClose: () => void
  user: User
  onActivatePackage: (phoneNumber: string, packageName: string) => void
}

const packages = ['1 Month', '3 Months', '6 Months', '12 Months', 'Lifetime']

export function ActivatePackageModal({
  isOpen,
  onClose,
  user,
  onActivatePackage,
}: ActivatePackageModalProps) {
  const [selectedPackage, setSelectedPackage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!selectedPackage) {
      setError('Please select a package')
      return
    }

    onActivatePackage(user.phone, selectedPackage)
    setSelectedPackage('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md animate-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Activate Package</h2>
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
            <label className="block text-sm font-medium mb-2">Current Package</label>
            <div className="bg-input border border-border rounded-lg px-4 py-3">
              <p className={user.package === 'None' ? 'text-destructive' : 'text-primary'}>
                {user.package}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Select New Package</label>
            <div className="space-y-2">
              {packages.map((pkg) => (
                <label key={pkg} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value={pkg}
                    checked={selectedPackage === pkg}
                    onChange={(e) => {
                      setSelectedPackage(e.target.value)
                      setError('')
                    }}
                    className="w-4 h-4 text-primary border-border"
                  />
                  <span className="font-medium">{pkg}</span>
                </label>
              ))}
            </div>
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
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
              Activate
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
