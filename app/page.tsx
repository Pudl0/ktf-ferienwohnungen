import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Apartment1 from "@/components/apartment1";
import Apartment2 from "@/components/apartment2";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <Hero />
      <section id="description">
        <Description />
      </section>
      <section id="apartments" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">
          Unsere Ferienwohnungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Apartment1 />
          <Apartment2 />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
