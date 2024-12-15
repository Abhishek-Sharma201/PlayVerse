'use client'

import { useState } from 'react'
import { Bell, MoreVertical, Plus, MapPin, Clock } from 'lucide-react'
import { MetricCard } from '../self-components/Dashboard-Component/components_metric-card'
import { AuditChart } from '../self-components/Dashboard-Component/components_audit-chart'
import { CircularProgress } from '../self-components/Dashboard-Component/components_circular-progress'
import { DealInfo } from '../self-components/Dashboard-Component/components_deal-info'

export default function Dashboard() {
  const [dealNumber] = useState('D189810')
  
  // Function to handle "Create New Offer" button click
  const handleCreateNewOffer = () => {
    // Example logic: navigate to the "Create New Offer" page
    console.log('Navigating to Create New Offer...')
    // Perform navigation or other actions as needed
  }

  // Function to handle "Create Re-installment" button click
  const handleCreateReinstallment = () => {
    console.log('Navigating to Create Re-installment...')
    // Perform navigation or other actions as needed
  }

  // Function to handle "Retro Allocation" button click
  const handleRetroAllocation = () => {
    console.log('Navigating to Retro Allocation...')
    // Perform navigation or other actions as needed
  }
  
  return (
    <div className="min-w-[160vh] min-h-screen bg-navy-950 text-gray-100 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-blue-purple opacity-10"></div>
      
      <div className="relative container mx-auto p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-blue-300">SUMMARY</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-xs">
                1
              </div>
            </div>
            <img
              src="/images/logo.png"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition-all cursor-pointer"
            />
            <MoreVertical className="h-6 w-6 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={handleCreateNewOffer}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
          >
            <Plus className="h-5 w-5" />
            Create New Offer
          </button>
          <button
            onClick={handleCreateReinstallment}
            className="flex items-center gap-2 rounded-lg bg-navy-800/50 px-4 py-2 font-medium text-gray-300 backdrop-blur-sm hover:bg-navy-800/70 transition-all"
          >
            Create Re-installment
          </button>
          <button
            onClick={handleRetroAllocation}
            className="flex items-center gap-2 rounded-lg bg-navy-800/50 px-4 py-2 font-medium text-gray-300 backdrop-blur-sm hover:bg-navy-800/70 transition-all"
          >
            Retro Allocation
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Offers to Review"
            value="10"
            icon={<Clock />}
            gradient="from-purple-600 to-blue-400"
          />
          <MetricCard
            title="Location Count"
            value="03"
            icon={<MapPin />}
            gradient="from-blue-600 to-purple-400"
            active
          />
          <MetricCard
            title="Pending Checks"
            value="06"
            icon={<Clock />}
            gradient="from-red-600 to-pink-400"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8">
            {/* Chart Section */}
            <div className="p-6 bg-navy-900/80 backdrop-blur-sm border-navy-700 shadow-lg shadow-blue-500/10">
              <h2 className="mb-6 text-lg font-semibold text-blue-300">AUDIT CHART</h2>
              <AuditChart />
            </div>

            {/* Progress Section */}
            <div className="p-6 bg-navy-900/80 backdrop-blur-sm border-navy-700 shadow-lg shadow-purple-500/10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-blue-300">COMBINED RATIO</h2>
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <CircularProgress value={65} year={1} color="cyan" />
                <CircularProgress value={75} year={2} color="purple" />
                <CircularProgress value={80} label="CEDED DISTRIBUTION" color="green" />
              </div>
            </div>
          </div>

          {/* Deal Info Sidebar */}
          <DealInfo dealNumber={dealNumber} />
        </div>
      </div>
    </div>
  )
}
