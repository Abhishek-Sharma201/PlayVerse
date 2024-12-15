export function MetricCard({ title, value, icon, gradient, active }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl p-6
        ${active 
          ? `bg-gradient-to-r ${gradient} shadow-lg` 
          : 'bg-navy-800/50 hover:bg-navy-800/70'}
        backdrop-blur-sm transition-all duration-300
        hover:shadow-xl hover:scale-[1.02]
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${active ? 'text-white/80' : 'text-gray-400'}`}>
            {title}
          </p>
          <p className="mt-2 text-4xl font-bold">{value}</p>
        </div>
        <div className={`
          rounded-full p-3
          ${active 
            ? 'bg-white/20' 
            : 'bg-navy-700/50 group-hover:bg-navy-700'}
        `}>
          {icon}
        </div>
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer" />
    </div>
  )
}

