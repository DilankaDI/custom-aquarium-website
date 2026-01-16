import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">
          Aquarium
        </Link>

        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
