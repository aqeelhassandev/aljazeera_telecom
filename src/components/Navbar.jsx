import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b border-zinc-100 shadow-xs">
      {/* Main Navbar */}
      <nav className="max-w-[1700px] mx-auto px-6 py-5">
        <div className="flex gap-6 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="brightness-0 w-fit h-fit"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            <Link href="/" className="text-[20px] font-semibold text-blue-600">
              Home
            </Link>
            <Link
              href="/about"
              className="text-[20px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="text-[20px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Service
            </Link>
            <Link
              href="/"
              className="text-[20px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand-secondary1 px-6 py-2.5 text-[16px] font-semibold text-white shadow-xs hover:bg-brand-secondary1/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              ></span>
              CALL 6055
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
