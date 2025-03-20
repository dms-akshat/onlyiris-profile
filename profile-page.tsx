import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="rounded-lg border shadow-sm overflow-hidden">
        {/* Banner Image */}
        <div className="h-40 relative">
          <Image
            src="/aadarsh_banner.jpg?height=160&width=500"
            alt="Banner image"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Profile Picture */}
        <div className="flex justify-center mt-4 mb-6">
          <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
            <Image
              src="/aadarsh_pfp.jpg?height=96&width=96"
              alt="Profile picture"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-1">
            <span role="img" aria-label="fire">🔥</span> Aadarsh
          </h1>
          <p className="text-xl mb-6">🎤 Product Maestro | Random Thought Dispenser | International Crooner (because why not?)</p>

          {/* Premium Subscription Perks */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkle">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkle">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 Feature Forecasting – Predicting product needs before you even know you have them. 🔮</li>
              <li className="text-lg">🤔 Unfiltered Idea Streams – My tweets are like a brainstorming session, but make it public.</li>
              <li className="text-lg">🎶 Serenade Sessions – Occasional (or frequent) vocal performances, because life's a musical.</li>
              <li className="text-lg">🌍 Global Perspective – Bringing a non-Indian viewpoint to your timeline.</li>
              <li className="text-lg">🚀 Agile Adaptation – Pivoting product strategies and random tweets with equal finesse.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">💳 Subscribe to my chaos – because you never know what product idea or song lyric will drop next.</p>
        </div>
      </div>
    </div>
  );
}
