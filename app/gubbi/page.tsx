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
              src="/gubbi_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/gubbi_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="crown">👑</span> Anirudh
          </h1>
          <p className="text-xl mb-6">
            💾 Head of Development, Been pushing all the right buttons at IRIS for over a year—now it's time to push yours. 😉<br/>
            9.6 CGPA, but the only "scores" that matter are the ones we set together. 😏
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkle">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkle">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">🔥 Exclusive Backend Access – Get hands-on with my private repo, because some things are too sensitive for GitHub.</li>
              <li className="text-lg">🚀 Zero crashes, infinite uptime – I might be a backend guy, but I know when to go front-end too. 😏</li>
              <li className="text-lg">💡 Ex-Google intern, so you know I optimize for maximum performance—no lag, no buffer, just seamless execution.</li>
              <li className="text-lg">🚫 No alcohol, no smoking—because the real addiction starts here.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe that card and let’s push this commit deep into your repository. 😈
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