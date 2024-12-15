export function CircularProgress({ value, year, label, color }) {
  const colors = {
    cyan: 'from-cyan-500 to-blue-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500'
  }

  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progress = (100 - value) / 100 * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background circle */}
        <svg className="h-32 w-32 -rotate-90 transform">
          <circle
            className="text-navy-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
          {/* Progress circle */}
          <circle
            className={`drop-shadow-[0_0_8px_rgba(96,165,250,0.4)] bg-gradient-to-r ${colors[color]}`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-2xl font-bold">{value}%</span>
            {year && <p className="text-sm text-gray-400">Year {year}</p>}
          </div>
        </div>
      </div>
      {label && (
        <p className="mt-4 text-center text-sm text-gray-400">{label}</p>
      )}
    </div>
  )
}

