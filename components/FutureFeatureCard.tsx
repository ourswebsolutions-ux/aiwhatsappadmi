import { LucideIcon } from 'lucide-react'

interface FutureFeatureCardProps {
  icon: LucideIcon
  title: string
}

export function FutureFeatureCard({ icon: Icon, title }: FutureFeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full">
            Coming Soon
          </div>
        </div>
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </div>
  )
}
