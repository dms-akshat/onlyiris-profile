import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="rounded-lg border shadow-sm overflow-hidden">
        {/* Banner and Profile Picture */}
        <div className="relative">
          <div className="h-40 relative">
            <Image
              src="/hriday_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/hriday_pfp.jpg?height=96&width=96"
                alt="Profile picture"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-14 px-6 pb-6">
          {/* Name and Bio */}
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-1">
            <span role="img" aria-label="fire">🔥</span> Hriday
          </h1>
          <p className="text-xl mb-6">
            💻 Labs Software Lead @ IRIS, NITK | ML & RL Expert | Research @ UAlberta, IITM, IISc (optimizing policies better than your life choices)
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkles">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkles">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 <strong>Neural Network Tuning</strong> – Because I fine-tune better than your last relationship. 😏</li>
              <li className="text-lg">🔄 <strong>Infinite Reinforcement</strong> – I keep learning from my mistakes, unlike you. 😉</li>
              <li className="text-lg">💡 <strong>State-of-the-Art Models</strong> – My architectures are more advanced than your excuses.</li>
              <li className="text-lg">🔍 <strong>Optimal Decision Making</strong> – I maximize rewards while you maximize regrets. 😈</li>
              <li className="text-lg">🚀 <strong>Real-Time Adaptation</strong> – I adjust faster than your mood swings.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe your card and enter my Markov Decision Process—because once you're in, there’s no turning back. 🔥
          </p>

          {/* Subscribe Button */}
          <Button className="w-full py-6 text-xl bg-blue-500 hover:bg-blue-600 rounded-full">
            SUBSCRIBE FOR $20 PER MONTH
          </Button>
        </div>
      </div>
    </div>
  );
}