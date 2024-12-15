import { Search } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically importing components to resolve module issues
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
const Card = ({ children, className }) => (
  <div
    className={`card ${className} transition-all transform hover:scale-105 hover:shadow-2xl rounded-2xl`}
  >
    {children}
  </div>
);
const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>{children}</div>
);
const Button = ({ children, className, ...props }) => (
  <button
    className={`btn ${className} transition-all transform hover:scale-105 hover:bg-purple-700 hover:ring-4 hover:ring-purple-500 hover:ring-opacity-50 rounded-lg`}
    {...props}
  >
    {children}
  </button>
);
const Input = ({ className, ...props }) => (
  <input
    className={`input ${className} rounded-xl transition-all transform hover:ring-4 hover:ring-purple-500`}
    {...props}
  />
);
const Avatar = ({ children, className }) => (
  <div
    className={`avatar ${className} transition-all transform hover:scale-105`}
  >
    {children}
  </div>
);
const AvatarImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="avatar-image rounded-full border-4 border-purple-500 transition-all transform hover:scale-110"
  />
);
const AvatarFallback = ({ children }) => (
  <div className="avatar-fallback text-xl text-gray-300">{children}</div>
);

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            className="pl-12 w-full bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-purple-600"
            placeholder="Search..."
            type="search"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Upcoming Events */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Upcoming Events
              </h2>
              <Card className="bg-gray-800 border border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src="/images/val.jpg" // Corrected path
                      alt="Fortnite Event"
                      width={800}
                      height={400}
                      className="w-full object-cover rounded-lg"
                    />
                    <Button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg">
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Feature Videos */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Feature Videos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Call Of Duty",
                    date: "20/12/2025",
                    image: "/images/COD.jpg", // Corrected path
                  },
                  {
                    title: "Gerena Free Fire",
                    date: "22/12/2025",
                    image: "/images/FF.jpg", // Corrected path
                  },
                ].map((game, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-gray-700 overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={game.image}
                          alt={game.title}
                          width={400}
                          height={300}
                          className="w-full object-cover rounded-lg"
                        />
                        <button className="absolute top-4 right-4 p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-all">
                          <svg
                            className="w-6 h-6 text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-purple-400">
                          {game.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          Event Date: {game.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-10">
            {/* Profile Section */}
            <Card className="p-6 bg-gray-800 border border-gray-700 rounded-lg hover:scale-105 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/ninjago.png" alt="Randy" />{" "}
                  {/* Corrected path */}
                  <AvatarFallback>-----</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-xl text-purple-400">
                    Randy Ortan
                  </h3>
                  <span className="text-yellow-500 text-sm">
                    5.6k Followers
                  </span>
                </div>
              </div>
            </Card>

            {/* Calendar */}
            <Card className="bg-gray-800 border border-gray-700 rounded-lg hover:scale-105 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Schedule
                </h2>
                <div className="relative">
                  <Calendar className="rounded-xl border-2 border-gray-700 bg-gray-900 shadow-lg hover:scale-105 transition-all transform duration-300" />
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* History */}
            <Card className="bg-gray-800 border border-gray-700 rounded-lg hover:scale-105 hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-purple-400">
                    History
                  </h2>
                  <Button className="text-purple-400 hover:text-purple-300">
                    See all
                  </Button>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      name: "Mini Militia",
                      days: 2,
                      avatar: "/images/MM.jpeg", // Corrected path
                    },
                    {
                      name: "PUBG",
                      days: 8,
                      avatar: "/images/PUBG.png", // Corrected path
                    },
                    {
                      name: "Call of Duty",
                      days: 12,
                      avatar: "/images/COD.JPG", // Corrected path
                    },
                    {
                      name: "Fortnite",
                      days: 18,
                      avatar: "/images/FORTNITE.webp", // Corrected path
                    },
                    {
                      name: "Minicraft",
                      days: 21,
                      avatar: "/images/MINECRAFT.jpg", // Corrected path
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <Avatar>
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-purple-400">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.days} Days ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
