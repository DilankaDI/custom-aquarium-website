"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#05050a] text-gray-300 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-indigo-900/20 to-sky-900/20 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        
        {/* Logo & About */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Aquarium Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            We design and maintain stunning custom aquariums for homes and
            businesses. Premium fish, expert care, and beautiful underwater
            experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Services", "About Us", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-purple-300 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-300 transition cursor-pointer">Custom Aquariums</li>
            <li className="hover:text-purple-300 transition cursor-pointer">Maintenance</li>
            <li className="hover:text-purple-300 transition cursor-pointer">Fish Supply</li>
            <li className="hover:text-purple-300 transition cursor-pointer">Consultation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Cambodia
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +855 77 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@youraquarium.com
            </li>
          </ul>

          <div className="flex gap-4 mt-5">
            <Facebook className="hover:text-purple-300 cursor-pointer" />
            <Instagram className="hover:text-purple-300 cursor-pointer" />
            <Twitter className="hover:text-purple-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Aquarium Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
