'use client';

export default function ProductDetails({ productPrice, userPoints }) {
  // Function to calculate discount based on points
  const calculateDiscount = (points) => {
    if (points > 200) {
      return 15; // 15% discount
    } else if (points > 100) {
      return 10; // 10% discount
    } else {
      return 5; // 5% discount
    }
  };

  const discount = calculateDiscount(userPoints);
  const discountAmount = (productPrice * discount) / 100;
  const finalPrice = productPrice - discountAmount;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-2">Product Details</h2>
      <p><strong>Original Price:</strong> ₹{productPrice}</p>
      <p><strong>Discount:</strong> {discount}%</p>
      <p className="text-green-600 font-bold"><strong>Final Price:</strong> ₹{finalPrice}</p>
      <button
        onClick={() => alert('Product purchased!')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Buy Now
      </button>
    </div>
  );
}
