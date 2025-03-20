import Link from "next/link";

const profiles = [
  "aadarsh",
  "devaansh",
  "dhruva",
  "fahim",
  "gubbi",
  "hriday",
  "keerthi",
  "shashank",
  "vedant",
  "vinit",
];

export default function ProfilesPage() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🔥 Profile Directory</h1>
      <ul className="space-y-2">
        {profiles.map((name) => (
          <li key={name}>
            <Link href={`/${name}`} className="text-blue-500 hover:underline text-lg">
              {name.charAt(0).toUpperCase() + name.slice(1)}'s Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
