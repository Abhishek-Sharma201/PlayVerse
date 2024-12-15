'use client'

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 40 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 80 },
  { name: 'Jun', value: 75 },
  { name: 'Jul', value: 85 },
  { name: 'Aug', value: 70 },
  { name: 'Sep', value: 55 },
  { name: 'Oct', value: 45 },
  { name: 'Nov', value: 40 },
  { name: 'Dec', value: 35 }
]

export function AuditChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#64748B"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#64748B"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => `${value}k`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg bg-navy-800 p-2 shadow-xl">
                    <p className="text-sm text-gray-200">
                      {`${payload[0].value}k`}
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#60A5FA"
            strokeWidth={2}
            fill="url(#gradient)"
            className="drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

