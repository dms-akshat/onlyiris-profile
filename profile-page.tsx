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
              src="/vinit_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/vinit_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="fire">🔥</span> Vinit Puranik
          </h1>
          <p className="text-xl mb-6">
            🔬 Systems Lead @ IRIS, NITK | LFX Fellow @ RISC-V (because my performance is pure assembly-level precision)
            💻 Hardware & App Team Wizard (I know how to connect all the right circuits 😉)
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkles">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkles">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 <strong>Low-Level Mastery</strong> – I don’t just handle APIs—I talk directly to the hardware. 😏</li>
              <li className="text-lg">💦 <strong>Overclocked for Performance</strong> – Push me to my limits, I’ll keep going. 🔥</li>
              <li className="text-lg">👉 <strong>"Bare Metal Experience"</strong> – Because I don’t need a UI to satisfy your needs. 😉</li>
              <li className="text-lg">🚀 <strong>Multi-Architecture Flexibility</strong> – Whether x86 or ARM, I perform flawlessly on every platform. 😈</li>
              <li className="text-lg">🔧 <strong>System Stability</strong> – Because my deployments are rock solid, unlike your GPA. 😎</li>
              <li className="text-lg">💥 <strong>Cache King</strong> – I know when to clear the junk and when to keep things hot. 🔥</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe that card and enter my pipeline—I'll take you straight to production, no staging required. 😎
          </p>

          {/* Subscribe Button */}
          <Button className="w-full py-6 text-xl bg-blue-500 hover:bg-blue-600 rounded-full">
            SUBSCRIBE FOR $200 PER MONTH
          </Button>
        </div>
      </div>
    </div>
  );
}
