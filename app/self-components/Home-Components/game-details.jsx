"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GameDetails({ params }) {
  const router = useRouter();
  const [game, setGame] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const games = [
    {
      id: "Clothes",
      name: "Clothes",
      description: "Valorant is a tactical 5v5 shooter with unique agents...",
      products: [
        {
          id: "product1",
          name: "Valorant Hoodie",
          image: "/images/valorant_hoodie.jpg",
          description: "A stylish Valorant-themed hoodie for gaming enthusiasts.",
          price: "$39.99",
          details: "Soft, comfortable hoodie perfect for casual gaming sessions.",
        },
        {
          id: "product2",
          name: "Apex Legends T-shirt",
          image: "/images/apex_tshirt.jpg",
          description: "An awesome Apex Legends T-shirt for true fans.",
          price: "$19.99",
          details: "100% cotton T-shirt with vibrant Apex Legends design.",
        },
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
      ],
    },
    {
      id: "Gadgets",
      name: "Gadgets",
      description: "Valorant is a tactical 5v5 shooter with unique agents...",
      products: [
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
      ],
    },
    {
      id: "Accessorise",
      name: "Accessorise",
      description: "Valorant is a tactical 5v5 shooter with unique agents...",
      products: [
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
      ],
    },
    {
      id: "Laptops",
      name: "Laptops",
      description: "Valorant is a tactical 5v5 shooter with unique agents...",
      products: [
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
      ],
    },
    {
      id: "Laptops",
      name: "Laptops",
      description: "Valorant is a tactical 5v5 shooter with unique agents...",
      products: [
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
        {
          id: "product3",
          name: "Valorant Mug",
          image: "/images/valorant_mug.jpg",
          description: "A mug for your Valorant morning brew.",
          price: "$12.99",
          details: "Ceramic mug featuring the iconic Valorant logo.",
        },
        {
          id: "product4",
          name: "Valorant Backpack",
          image: "/images/valorant_backpack.jpg",
          description: "Carry your gear in a Valorant-themed backpack.",
          price: "$49.99",
          details: "Durable and stylish backpack for gamers on the go.",
        },
      ],
    },
    // Add more game sections with their products...
  ];

  useEffect(() => {
    const selectedGame = games.find((g) => g.id === params.id);
    setGame(selectedGame);
  }, [params.id]);

  if (!game) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    alert("Redirecting to checkout!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-900 text-white p-5 m-10">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
        <div className="lg:w-1/2 lg:pl-10 text-left flex flex-col justify-center h-full m-10 p-10">
          <button
            onClick={() => router.back()}
            className="mb-6 text-purple-700 underline hover:text-purple-500 transition-colors"
          >
            Back to Games
          </button>
          <h1 className="text-6xl font-bold mb-8 neon-text">{game.name}</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">{game.description}</p>

          {/* Product Cards */}
          <div className="mt-12">
            <h2 className="text-4xl font-semibold mb-6 text-purple-500">Exclusive {game.name} Merchandise</h2>
            <div className="grid grid-cols-2 gap-8">
              {game.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-700 p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleProductClick(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-gray-300">{product.description}</p>
                  <p className="text-lg text-yellow-400 mt-2">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <button
                  onClick={handleCloseProductDetails}
                  className="text-purple-700 underline mb-6 hover:text-purple-500 transition-colors"
                >
                  Close Details
                </button>
                <div className="flex flex-col items-center">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-4xl font-bold text-white">{selectedProduct.name}</h3>
                  <p className="text-xl text-gray-300 mt-4">{selectedProduct.details}</p>
                  <p className="text-lg text-yellow-400 mt-2">{selectedProduct.price}</p>
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="bg-green-500 text-white py-2 px-8 rounded-full hover:scale-105 transition-transform"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="bg-purple-700 text-white py-2 px-8 rounded-full hover:scale-105 transition-transform"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
