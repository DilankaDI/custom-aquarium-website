// import HeroVideo from "@/components/layout/HeroVideo";
// import HomeHero from "@/components/layout/HomeHero";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center">
//       {/* <h1 className="text-4xl font-bold">Aquarium Services Website</h1> */}
//       <HeroVideo />
//       <HomeHero />
//     </main>

//   );
// }
// import HeroVideo from "@/components/layout/HeroVideo";
import HomeHero from "@/components/layout/HomeHero";

export default function Home() {
  return (
    <main className="pt-20 w-full">
      {/* Hero video at the top */}
      {/* <HeroVideo /> */}

      {/* HomeHero section below */}
      <HomeHero />
    </main>
  );
}
