import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="flex flex-col">
        <Navbar />
        <Hero />
        {/* <Services /> */}
      </main>
    </div>
  );
}
