export function DealInfo({ dealNumber }) {
  const dealInfo = {
    dealName: 'Dummy deal',
    homeState: 'New Jersey',
    domicile: 'United States',
    inceptionDate: '06-05-2017',
    expiryDate: '06-14-2017',
    dealType: 'Treaty',
    mainLOB: 'Property',
    insuredName: 'ABC Corporation',
    insuredAddress: '123, North Main St',
    brokerCompany: 'AAA Risk Management',
    brokerContact: '(408) 269 8221'
  }

  return (
    <div className="rounded-xl bg-navy-900/80 p-6 backdrop-blur-sm shadow-lg shadow-purple-500/10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">DEAL NUMBER</p>
          <h2 className="text-2xl font-bold text-blue-300">{dealNumber}</h2>
        </div>
        <button className="rounded-full p-2 hover:bg-navy-700/50 transition-colors">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(dealInfo).map(([key, value]) => (
          <div key={key} className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="font-medium text-blue-400">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

