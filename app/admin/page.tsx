'use client'

import { useState, useMemo } from 'react'
import {
  Search,
  Eye,
  Trash2,
  Ban,
  Plus,
  LogOut,
  BarChart3,
  Users as UsersIcon,
} from 'lucide-react'
import Link from 'next/link'
import { AdminSidebar } from '@/components/AdminSidebar'
import { AddBalanceModal } from '@/components/modals/AddBalanceModal'
import { ActivatePackageModal } from '@/components/modals/ActivatePackageModal'

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

// Mock data
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    phone: '+966501234567',
    email: 'ahmed@example.com',
    package: '3 Months',
    balance: 450.50,
    status: 'active',
    registeredDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Fatima Al-Rashid',
    phone: '+966551234567',
    email: 'fatima@example.com',
    package: 'Lifetime',
    balance: 999.99,
    status: 'active',
    registeredDate: '2024-02-20',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    phone: '+966561234567',
    email: 'mohammed@example.com',
    package: '1 Month',
    balance: 100.00,
    status: 'inactive',
    registeredDate: '2024-03-10',
  },
  {
    id: 4,
    name: 'Noor Sultan',
    phone: '+966571234567',
    email: 'noor@example.com',
    package: '6 Months',
    balance: 750.25,
    status: 'active',
    registeredDate: '2024-01-05',
  },
  {
    id: 5,
    name: 'Layla Ahmed',
    phone: '+966581234567',
    email: 'layla@example.com',
    package: 'None',
    balance: 0,
    status: 'banned',
    registeredDate: '2024-04-12',
  },
  {
    id: 6,
    name: 'Omar Ibrahim',
    phone: '+966591234567',
    email: 'omar@example.com',
    package: '1 Month',
    balance: 250.75,
    status: 'active',
    registeredDate: '2024-02-28',
  },
  {
    id: 7,
    name: 'Sara Khalid',
    phone: '+966601234567',
    email: 'sara@example.com',
    package: '3 Months',
    balance: 580.50,
    status: 'active',
    registeredDate: '2024-03-20',
  },
  {
    id: 8,
    name: 'Hassan Karim',
    phone: '+966611234567',
    email: 'hassan@example.com',
    package: '12 Months',
    balance: 899.99,
    status: 'active',
    registeredDate: '2024-01-25',
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState(mockUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isAddBalanceOpen, setIsAddBalanceOpen] = useState(false)
  const [isActivatePackageOpen, setIsActivatePackageOpen] = useState(false)

  // Filter users based on search
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, users])

  const handleDeleteUser = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const handleBanUser = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: 'banned' } : user
      )
    )
  }

  const handleUnbanUser = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: 'active' } : user
      )
    )
  }

  const handleAddBalance = (phoneNumber: string, amount: number) => {
    setUsers(
      users.map((user) =>
        user.phone === phoneNumber
          ? { ...user, balance: user.balance + amount }
          : user
      )
    )
    setIsAddBalanceOpen(false)
    setSelectedUser(null)
  }

  const handleActivatePackage = (phoneNumber: string, packageName: string) => {
    setUsers(
      users.map((user) =>
        user.phone === phoneNumber
          ? { ...user, package: packageName, status: 'active' }
          : user
      )
    )
    setIsActivatePackageOpen(false)
    setSelectedUser(null)
  }

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === 'active').length,
    totalBalance: users.reduce((sum, u) => sum + u.balance, 0),
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-card border-b border-border sticky top-0 z-40">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground text-sm">Manage users and system</p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-card text-sm font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Exit Admin
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6 border-b border-border">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Total Users</p>
                  <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Active Users</p>
                  <p className="text-3xl font-bold text-primary">{stats.activeUsers}</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Total Balance</p>
                  <p className="text-3xl font-bold">${stats.totalBalance.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Table */}
        <div className="p-6">
          {/* Search */}
          <div className="mb-6 flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, phone, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add User
            </button>
          </div>

          {/* Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Phone Number
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Package
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Balance
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Registered
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.phone}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={user.package === 'None' ? 'text-destructive' : 'text-primary'}>
                          {user.package}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">${user.balance.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active'
                              ? 'bg-primary/20 text-primary'
                              : user.status === 'banned'
                                ? 'bg-destructive/20 text-destructive'
                                : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.registeredDate}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            title="View"
                            className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedUser(user)
                              setIsAddBalanceOpen(true)
                            }}
                            title="Add Balance"
                            className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-primary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedUser(user)
                              setIsActivatePackageOpen(true)
                            }}
                            title="Activate Package"
                            className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-primary"
                          >
                            <BarChart3 className="w-4 h-4" />
                          </button>
                          {user.status === 'banned' ? (
                            <button
                              onClick={() => handleUnbanUser(user.id)}
                              title="Unban User"
                              className="p-2 hover:bg-card rounded-lg transition-colors text-destructive"
                            >
                              <Ban className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleBanUser(user.id)}
                              title="Ban User"
                              className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-destructive"
                            >
                              <Ban className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            title="Delete User"
                            className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No users found</p>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {selectedUser && (
        <>
          <AddBalanceModal
            isOpen={isAddBalanceOpen}
            onClose={() => {
              setIsAddBalanceOpen(false)
              setSelectedUser(null)
            }}
            user={selectedUser}
            onAddBalance={handleAddBalance}
          />
          <ActivatePackageModal
            isOpen={isActivatePackageOpen}
            onClose={() => {
              setIsActivatePackageOpen(false)
              setSelectedUser(null)
            }}
            user={selectedUser}
            onActivatePackage={handleActivatePackage}
          />
        </>
      )}
    </div>
  )
}
