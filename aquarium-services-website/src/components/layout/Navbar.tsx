// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// import { Menu, X, Home, Info, MessageSquareQuote, List } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "Services", href: "/services", icon: List },
//   { name: "About Us", href: "/about", icon: Info },
//   { name: "Contact Us", href: "/contact", icon: MessageSquareQuote },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-xl transition-all">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">

//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <Image
//               src="/images/logo.png"
//               alt="Aquarium Logo"
//               width={70}
//               height={70}
//               className="object-contain"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
// <Link
//   key={link.name}
//   href={link.href}
//   className={`group relative flex items-center gap-2 text-sm uppercase tracking-wide transition-all duration-300
//     ${
//       isActive
//         ? "text-cyan-400"
//         : "text-gray-300 hover:text-white"
//     }`}
// >
//   <link.icon size={18} />
//   {link.name}

//   {/* Gradient underline */}
// <span
//   className={`absolute -bottom-2 left-0 h-0.5 w-full 
//     bg-linear-to-r from-cyan-400 via-teal-400 to-blue-500
//     scale-x-0 origin-left transition-transform duration-300
//     group-hover:scale-x-100
//     ${isActive && "scale-x-100"}`}
//  />


// <span
//   className="absolute inset-0 -z-10 rounded-lg opacity-0 
//     bg-linear-to-r from-cyan-500/20 via-teal-500/20 to-blue-500/20
//     blur-md transition-opacity duration-300
//     group-hover:opacity-100"
//  />

// </Link>

//               );
//             })}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition"
//           >
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-2">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//                   isActive
//                     ? "bg-cyan-500/10 text-cyan-400"
//                     : "text-gray-300 hover:bg-white/10 hover:text-cyan-400"
//                 }`}
//               >
//                 <link.icon size={18} />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, Home, Info, MessageSquareQuote, List } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "Services", href: "/services", icon: List },
//   { name: "About Us", href: "/about", icon: Info },
//   { name: "Contact Us", href: "/contact", icon: MessageSquareQuote },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(120,80,255,0.15)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <Image
//               src="/images/logo.png"
//               alt="Aquarium Logo"
//               width={70}
//               height={70}
//               className="object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`group relative flex items-center gap-2 text-sm uppercase tracking-wide transition-all duration-300 ${
//                     isActive ? "text-purple-300" : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   <link.icon size={18} />
//                   {link.name}

//                   {/* Gradient underline */}
//                   <span
//                     className={`absolute -bottom-2 left-0 h-0.5 w-full bg-linear-to-r from-purple-400 via-fuchsia-400 to-sky-200 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
//                       isActive ? "scale-x-100" : ""
//                     }`}
//                   />

//                   {/* Glow */}
//                   <span className="absolute inset-0 -z-10 rounded-xl opacity-0 bg-linear-to-r from-purple-500/20 via-fuchsia-500/20 to-sky-500/20 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition"
//           >
//             {isOpen ? <X size={30} /> : <Menu size={30} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-[#05050a]/90 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-2">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//                   isActive
//                     ? "bg-purple-500/10 text-purple-300"
//                     : "text-gray-300 hover:bg-white/10 hover:text-purple-300"
//                 }`}
//               >
//                 <link.icon size={18} />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-wide">
          Aqua<span className="text-cyan-400">Tech</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/Services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/About" className="hover:text-white transition">
            About
          </Link>
          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
