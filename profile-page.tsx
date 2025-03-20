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
              src="/devaansh_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/devaansh_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="fire">🔥</span> Devaansh Kumar
          </h1>
          <p className="text-xl mb-6">
            💻 Systems Lead @ IRIS, NITK | LFX Fellow @ Linux Foundation (squashing bugs harder than your ex’s texts) | GSoC @ Kubernetes (because I know how to manage complex deployments 😉)
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkle">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkle">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 Kernel-Level Optimization – Because I know how to get deep into your core. 😈</li>
              <li className="text-lg">🔞 Unlimited Container Orchestration – I manage pods better than you manage your social life.</li>
              <li className="text-lg">💦 Hot Reload Support – Because I never stop running, even after major changes.</li>
              <li className="text-lg">👉 Security Hardened – Exploits don’t stand a chance when I’m on guard. 😉</li>
              <li className="text-lg">🚀 Lightning Fast Rollbacks – If things go wrong, I’ll pull out faster than you expect. 😏</li>
              <li className="text-lg">👉 Pipeline Perfection – My CI/CD flows smoother than your pick-up lines, and my deployments hit harder than your assignment deadlines.</li>
              <li className="text-lg">🔧 Debugging Expert – Because I can spot your bugs faster than you spot red flags. 😎</li>
              <li className="text-lg">💻 Always in Root Mode – Because I never ask for permission before taking control. 😈</li>
              <li className="text-lg">🔌 Power Supply Guaranteed – Because I know exactly when to switch it on and off. 😉</li>
              <li className="text-lg">🧯 Error-Free Execution – Because my scripts don’t crash, they just leave you breathless. 😎</li>
              <li className="text-lg">💿 Disk Space Manager – I know when to expand and when to compress. 😏</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe your card and join my network—because once you’re in, there’s no escaping my control plane. 🔥
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
