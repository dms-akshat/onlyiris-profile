import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="rounded-lg border shadow-sm overflow-hidden">
        {/* Banner and Profile Picture */}
        <div className="relative">
          <div className="h-40 bg-stone-600"></div>
          <div className="absolute -bottom-12 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
              <Image
                src="/placeholder.svg?height=96&width=96"
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
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            Vedant Tarale
          </h1>
          <p className="text-xl mb-6">
            "Lifting Code by Day, Lifting You by Night"{" "}
            <span role="img" aria-label="laptop">
              💻
            </span>
          </p>

          {/* Premium Subscription Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              <span role="img" aria-label="sparkle">
                ✨
              </span>{" "}
              Premium Subscription Perks:{" "}
              <span role="img" aria-label="sparkle">
                ✨
              </span>
            </h2>
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-lg">
                Unlimited Queries– No rate limits here, you can send requests all night –and I always return a 200 OK.{" "}
                <span role="img" aria-label="smile">
                  😀
                </span>
              </li>
              <li className="text-lg">
                Low effort, high performance –just like my commit messages{" "}
                <span role="img" aria-label="sweat droplets">
                  💦
                </span>
              </li>
              <li className="text-lg">
                Bug-free-experience – Because the only thing breaking is you.{" "}
                <span role="img" aria-label="pointing">
                  👉
                </span>
              </li>
              <li className="text-lg">
                Multi-Threaded Processing – Because I know how to handle multiple requests at once{" "}
                <span role="img" aria-label="smirking">
                  😏
                </span>
              </li>
              <li className="text-lg">
                Adaptive Performance – Slow and sensual or fast and aggressive, I scale as per demand{" "}
                <span role="img" aria-label="sweat droplets">
                  💦
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            Swipe your card, accept your fate, and join the premium experience –where every transaction is
            non-refundable, and so is your dignity.{" "}
            <span role="img" aria-label="grin">
              😁
            </span>{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </p>

          {/* Subscribe Button */}
          <Button className="w-full py-6 text-xl bg-blue-500 hover:bg-blue-600 rounded-full">
            SUBSCRIBE FOR $20 PER MONTH
          </Button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4">Posts</h2>
        {/* Post placeholders would go here */}
      </div>
    </div>
  )
}

