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
              src="/shashank_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/shashank_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="eyes">👀</span> Shashank G
          </h1>
          <p className="text-xl mb-6">
            Spent years handling high-priority requests—now, I’m here to handle your deepest queries. I don’t just make API calls; I make you scream for a rollback.<br/>
            I don’t just push to GitHub—I push your limits. 😏<br/>
            💾 Longer than your cache expiration.<br/>
            ⚡ Faster than your WiFi.
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="gem">💎</span> Premium Subscription Perks: <span role="img" aria-label="gem">💎</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">🔹 "Hotfixes & Quick Patches" – I break things fast, but I fix them even faster. 😏</li>
              <li className="text-lg">🔥 Exclusive "Late Night Deployments" – Watch me push hard, fast, and raw into production at 3 AM. 😈</li>
              <li className="text-lg">🔹 "Deep System Testing" – Finding and exploiting your vulnerabilities is my specialty. 🔥</li>
              <li className="text-lg">🔹 "Private Repo Access" – The commit history is messy, but the results are always clean. 😉</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe your card and get unrestricted access.
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
