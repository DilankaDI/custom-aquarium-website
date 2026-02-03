// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const HomeHero: React.FC = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center text-white">
      
//       {/* Background overlay image */}
//       <Image
//         src="/images/hero-aquarium1.jpg" 
//         alt="Aquarium Showcase"
//         fill
//         className="object-cover opacity-30"
//         priority
//       />

//       {/* Content */}
//       <div className="z-10 text-center px-6 md:px-0 space-y-6 max-w-3xl">
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Bring Your Aquarium to Life
//         </h1>
//         <p className="text-gray-200 text-lg md:text-xl">
//           Custom aquarium design, installation, and professional maintenance
//           for homes and commercial spaces.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
//           <Link
//             href="#services"
//             className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
//           >
//             Our Services
//           </Link>
//           <Link
//             href="#contact"
//             className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold transition"
//           >
//             Get a Free Quote
//           </Link>
//         </div>
//       </div>

//       {/* Optional gradient overlay for more depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
//     </section>
//   );
// };

// export default HomeHero;

// import Image from "next/image";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="font-sans text-gray-900">
//       {/* Hero Banner */}
//       <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-aquarium.jpg')" }}>
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">
//             Professional Fish Tank Cleaning & Aquarium Care
//           </h1>
//           <p className="mt-4 text-lg text-white/90">
//             Trusted aquarium service — weekly, biweekly, or monthly options
//           </p>
//           <Link href="#services" className="mt-6 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* About / Intro Section */}
//       <section className="py-16 bg-white text-center max-w-4xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-4">Since 1985 We’ve Cared for Aquariums</h2>
//         <p className="text-lg text-gray-700">
// We design customized fish tank cleaning plans to fit your needs — residential or commercial — with reliable scheduling and state-of-the-art equipment to keep your aquatic ecosystem thriving.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 bg-gray-100">
//         <h2 className="text-3xl text-center font-bold mb-12">Our Services</h2>

//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
//           {/* Freshwater */}
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold mb-3">Freshwater Aquarium Maintenance</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>Water chemistry analysis</li>
//               <li>Gravel vacuuming & debris removal</li>
//               <li>Filter cleaning and media change</li>
//               <li>Algae removal & décor cleaning</li>
//             </ul>
//           </div>

//           {/* Saltwater */}
//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold mb-3">Saltwater Aquarium Maintenance</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>Reverse osmosis water changes</li>
//               <li>Water parameter adjustment</li>
//               <li>Protein skimmer & cleaning</li>
//               <li>Filter checks & equipment operation</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 text-center max-w-3xl mx-auto px-6">
//         <h2 className="text-3xl text-white font-bold mb-6">Why Choose Our Service</h2>
//         <p className="text-lg text-white">
// We use only ultra-pure water and top quality supplies during water changes and maintenance — keeping fish healthy and your tank crystal clear. Reliable scheduled visits mean you never miss a service.
//         </p>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <h2 className="text-center text-3xl font-bold mb-8">What Clients Say</h2>
//         <div className="max-w-4xl mx-auto px-6 space-y-8">
//   <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-800">
//     “Amazing service — professional and timely every time.” — Antonia M.
//   </blockquote>

//   <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-800">
//     “Highly recommend — crew always delivers great results.” — Donny O.
//   </blockquote>
// </div>

//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-cyan-500 text-black text-center">
//         <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner Aquarium?</h2>
//         <Link href="/contact" className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
//           Request a Quote
//         </Link>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="font-sans text-white bg-gray-900">
<section className="relative h-screen">
  <video
    src="/videos/aquarium1.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      Professional Fish Tank Cleaning & Aquarium Care
    </h1>
    <p className="mt-4 text-lg text-white/90">
      Trusted aquarium service — weekly, biweekly, or monthly options
    </p>
    <Link
      href="#services"
      className="mt-6 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition"
    >
      Get Started
    </Link>
  </div>
</section>


      {/* About / Intro Section */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Since 1985 We’ve Cared for Aquariums</h2>
        <p className="text-lg text-gray-200">
          We design customized fish tank cleaning plans to fit your needs — residential or commercial — with reliable scheduling and state-of-the-art equipment to keep your aquatic ecosystem thriving.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <h2 className="text-3xl text-center font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {/* Freshwater */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-white">Freshwater Aquarium Maintenance</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Water chemistry analysis</li>
              <li>Gravel vacuuming & debris removal</li>
              <li>Filter cleaning and media change</li>
              <li>Algae removal & décor cleaning</li>
            </ul>
          </div>

          {/* Saltwater */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-white">Saltwater Aquarium Maintenance</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Reverse osmosis water changes</li>
              <li>Water parameter adjustment</li>
              <li>Protein skimmer & cleaning</li>
              <li>Filter checks & equipment operation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Service</h2>
        <p className="text-lg text-gray-200">
          We use only ultra-pure water and top quality supplies during water changes and maintenance — keeping fish healthy and your tank crystal clear. Reliable scheduled visits mean you never miss a service.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <h2 className="text-center text-3xl font-bold mb-8">What Clients Say</h2>
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-200">
            “Amazing service — professional and timely every time.” — Antonia M.
          </blockquote>

          <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-200">
            “Highly recommend — crew always delivers great results.” — Donny O.
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyan-500 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner Aquarium?</h2>
        <Link
          href="/contact"
          className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition"
        >
          Request a Quote
        </Link>
      </section>
    </main>
  );
}
