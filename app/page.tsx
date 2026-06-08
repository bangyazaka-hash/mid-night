import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Roles from "@/components/roles";
import Requirements from "@/components/requirements";
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#0F172A] text-[#F8FAFC] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Roles />
      <Requirements />
      <Benefits />
      <Footer />
    </main>
  );
}