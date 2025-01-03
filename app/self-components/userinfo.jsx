'use client';

import { useEffect, useState } from 'react';

export default function UserInfo({ user }) {
  const [rewardTier, setRewardTier] = useState({ current: 'Bronze', next: 'Silver', progress: 0 });

  useEffect(() => {
    let currentTier, nextTier, progress;
    if (user.points > 200) {
      currentTier = 'Gold';
      nextTier = 'Platinum';
      progress = Math.min((user.points - 200) / 100, 1) * 100;
    } else if (user.points > 100) {
      currentTier = 'Silver';
      nextTier = 'Gold';
      progress = Math.min((user.points - 100) / 100, 1) * 100;
    } else {
      currentTier = 'Bronze';
      nextTier = 'Silver';
      progress = Math.min(user.points / 100, 1) * 100;
    }

    setRewardTier({ current: currentTier, next: nextTier, progress });
  }, [user.points]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
      <div className="bg-white shadow-2xl rounded-2xl p-8 lg:p-16 w-full max-w-4xl text-gray-800">
        <h2 className="text-4xl font-semibold mb-8 text-center text-indigo-600">🎉 User Rewards Dashboard</h2>

        {/* User Details */}
        <div className="mb-10 space-y-4">
          <p className="text-xl">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-xl">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-xl">
            <strong>Score:</strong> {user.score}
          </p>
          <p className="text-xl">
            <strong>Points:</strong> <span className="text-green-600 font-bold">{user.points}</span>
          </p>
        </div>

        {/* Reward Tier Progress */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">Your Rewards Progress</h3>
          <div className="w-full bg-gray-300 rounded-full h-6 shadow-md mb-4">
            <div
              className="bg-gradient-to-r from-blue-400 to-green-400 h-6 rounded-full transition-all"
              style={{ width: `${rewardTier.progress}%` }}
            ></div>
          </div>
          <p className="text-md text-gray-700">
            You are in the <strong className="text-blue-600">{rewardTier.current}</strong> tier. Earn more points to
            reach <strong className="text-teal-500">{rewardTier.next}</strong> tier!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transition-transform ease-in-out duration-300">
            Earn More Points
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transition-transform ease-in-out duration-300">
            View Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
