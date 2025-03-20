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
              src="/dhruva_banner.jpg?height=160&width=500"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/dhruva_pfp.jpg?height=96&width=96"
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
            <span role="img" aria-label="fire">🔥</span> N Dhruva
          </h1>
          <p className="text-xl mb-6">
            💼 Hardware Engineer @ Texas Instruments (you should check out my 'hard' ware 🥴)
            💻 Experienced in handling complaints, whether they're of the hostel, room, or even the bed 🥵
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkles">✨</span> Premium Subscription Perks: <span role="img" aria-label="sparkles">✨</span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">👉 <strong>Web Dev Wonder</strong> - My frontend will leave you gasping in awe. My backend likes taking it raw.</li>
              <li className="text-lg">🔍 <strong>Elasticsearch Expert</strong> – I’ll search your codebase faster than you can say 404 not found. Just wait till you witness my shard 🔥</li>
              <li className="text-lg">💡 <strong>Unlimited Debugging</strong> – After we're done, your server will be crashing. Every error is a feature darling.</li>
              <li className="text-lg">💘 <strong>Girlfriend?</strong> She’s in a committed relationship… but for the right price, I can *gitignore* her. 😉</li>
              <li className="text-lg">💬 <strong>Fluent in GitHub</strong> – Commits, merges, and pull requests are my love language.</li>
              <li className="text-lg">🔥 <strong>Warning:</strong> Side effects include constant pinging, affectionate comments, and unfiltered fun.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            💳 Swipe your card and let’s fork this repository—because once you’re in my commit history, there’s no turning back. 😈💻
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
