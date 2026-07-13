'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, Eye, Trash2, Ban, Plus, LogOut, BarChart3, Users as UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { AdminSidebar } from '@/components/AdminSidebar'
import { AddBalanceModal } from '@/components/modals/AddBalanceModal'
import { ActivatePackageModal } from '@/components/modals/ActivatePackageModal'

interface User {
  id: string
  name: string
  phone: string
  email: string
  package?: string
  balance: number
  status: 'ACTIVE' | 'SUSPENDED' | 'BANNED'
  registeredDate: string
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isAddBalanceOpen, setIsAddBalanceOpen] = useState(false)
  const [isActivatePackageOpen, setIsActivatePackageOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://waapi.axorawebsolutions.com/api/v1/admin-credit')
      const data = await res.json()
      if (data.success) {
        const formatted = data.users.map((u: any) => ({
          id: u.id,
          name: u.name,
          phone: u.phone || '',
          email: u.email,
          balance: parseFloat(u.credits || 0),
          status: u.status,
          registeredDate: u.createdAt ? new Date(u.createdAt).toISOString().split('T')[0] : '',
        }))
        setUsers(formatted)
      }
    } catch (e) {}
    setLoading(false)
  }

  const filteredUsers = useMemo(() => 
    users.filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm, users])

  const handleBanUser = async (id: string) => {
    await fetch('http://localhost:3000/api/v1/admin-credit', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: id, status: 'BANNED' })
    })
    fetchUsers()
  }

  const handleUnbanUser = async (id: string) => {
    await fetch('http://localhost:3000/api/v1/admin-credit', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: id, status: 'ACTIVE' })
    })
    fetchUsers()
  }

  const handleAddBalance = async (phoneNumber: string, amount: number) => {
    const user = users.find(u => u.phone === phoneNumber)
    if (user) {
      await fetch('http://localhost:3000/api/v1/admin-credit', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, credit: user.balance + amount })
      })
      fetchUsers()
    }
    setIsAddBalanceOpen(false)
    setSelectedUser(null)
  }

  const handleActivatePackage = async (phoneNumber: string, packageName: string) => {
    // Note: API doesn't support package directly; skipped or extend backend
    setIsActivatePackageOpen(false)
    setSelectedUser(null)
  }

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'ACTIVE').length,
    totalBalance: users.reduce((sum, u) => sum + u.balance, 0),
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="bg-card border-b border-border sticky top-0 z-40">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground text-sm">Manage users and system</p>
            </div>
            <Link href="/" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-card text-sm font-medium transition-colors">
              <LogOut className="w-4 h-4" /> Exit Admin
            </Link>
          </div>
        </div>

        <div className="p-6 border-b border-border">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div><p className="text-muted-foreground text-sm mb-1">Total Users</p><p className="text-3xl font-bold">{stats.totalUsers}</p></div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><UsersIcon className="w-6 h-6 text-primary" /></div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div><p className="text-muted-foreground text-sm mb-1">Active Users</p><p className="text-3xl font-bold text-primary">{stats.activeUsers}</p></div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><UsersIcon className="w-6 h-6 text-primary" /></div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div><p className="text-muted-foreground text-sm mb-1">Total Balance</p><p className="text-3xl font-bold">${stats.totalBalance.toFixed(2)}</p></div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><BarChart3 className="w-6 h-6 text-primary" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6 flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2" />
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2"><Plus className="w-5 h-5" />Add User</button>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Registered</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-card/50">
                      <td className="px-6 py-4 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.phone}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-sm font-medium">${user.balance.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === 'ACTIVE' ? 'bg-primary/20 text-primary' : user.status === 'BANNED' ? 'bg-destructive/20 text-destructive' : 'bg-muted text-muted-foreground'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.registeredDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => {setSelectedUser(user); setIsAddBalanceOpen(true)}} className="p-2 hover:bg-card rounded-lg"><Plus className="w-4 h-4" /></button>
                          <button onClick={() => {setSelectedUser(user); setIsActivatePackageOpen(true)}} className="p-2 hover:bg-card rounded-lg"><BarChart3 className="w-4 h-4" /></button>
                          {user.status === 'BANNED' ? (
                            <button onClick={() => handleUnbanUser(user.id)} className="p-2 hover:bg-card rounded-lg text-destructive"><Ban className="w-4 h-4" /></button>
                          ) : (
                            <button onClick={() => handleBanUser(user.id)} className="p-2 hover:bg-card rounded-lg"><Ban className="w-4 h-4" /></button>
                          )}
                          <button onClick={() => {/* delete */}} className="p-2 hover:bg-card rounded-lg"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {selectedUser && (
        <>
          <AddBalanceModal isOpen={isAddBalanceOpen} onClose={() => {setIsAddBalanceOpen(false); setSelectedUser(null)}} user={selectedUser} onAddBalance={handleAddBalance} />
          <ActivatePackageModal isOpen={isActivatePackageOpen} onClose={() => {setIsActivatePackageOpen(false); setSelectedUser(null)}} user={selectedUser} onActivatePackage={handleActivatePackage} />
        </>
      )}
    </div>
  )
}