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
              src="/fahim_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/fahim_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="fire">🔥</span> Fahim Ahmed
          </h1>
          <p className="text-xl mb-6">
            💼 Admin Lead @ IRIS, NITK | Ex-Morgan Stanley (handled big assets, if you know what I mean 😉) | 5x Hackathon Winner (because breaking firewalls isn’t the only thing I’m good at 😏)
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkle">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkle">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 Product Management – I know exactly how to deliver satisfaction 😏</li>
              <li className="text-lg">🔞 Unlimited debugging—because trust me, I’ll find your deepest issues and fix them real good.</li>
              <li className="text-lg">🌶️ Halal-certified, but haram levels of spice.</li>
              <li className="text-lg">👉 99.99% Uptime – Because I go all night but I never shut down.</li>
              <li className="text-lg">⛔ Warning: Side effects may include dependency issues, attachment problems, and an inability to function without me.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe that card, let’s commit to this pull request—because once you enter my repository, there’s no way out. 😈💦
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
