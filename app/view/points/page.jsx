'use client';

import { useState } from 'react';
import UserInfo from '../../self-components/userinfo';
import ProductDetails from '../../self-components/productdetails';

export default function HomePage() {
  // User object
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    score: 120,
  });

  const productPrice = 1000; // Example product price

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold mb-6">Gamified Shopping Platform</h1>
      <UserInfo user={user} />
      <ProductDetails productPrice={productPrice} userPoints={user.points} />
    </div>
  );
}
