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
              src="/keerthi_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/keerthi_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="fire">🔥</span> Keerthi Bhushan
          </h1>
          <p className="text-xl mb-6">
            💾 Silicon Daddy | Lab Dom | Digital Deity (because circuits obey, and so will you)
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkles">✨</span> OnlyFans Premium Perks: <span role="img" aria-label="sparkles">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">🔩 <strong>Hardwired Obedience</strong> – I design ASICs, but I can also rewire your desires.</li>
              <li className="text-lg">🖥️ <strong>Debugging You in Real-Time</strong> – Strip away the inefficiencies, one instruction at a time.</li>
              <li className="text-lg">📡 <strong>Raw, Unfiltered Tech Rants</strong> – Whispering sweet nothings about semiconductor bottlenecks while you beg for more.</li>
              <li className="text-lg">🎓 <strong>Mentorship with a Side of Discipline</strong> – You want to learn? First, you kneel before the master of logic gates.</li>
              <li className="text-lg">⚡ <strong>Clock Cycles & Kinks</strong> – Faster, deeper, more optimized—pipelining your pleasure with precision.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Subscribe to get dominated by the architect of your next breakdown. You’re just a register in my pipeline.
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
