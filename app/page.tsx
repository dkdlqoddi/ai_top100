import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <>
      <section id="home" className="section">
        <div className="container">
          <Hero />
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <Features />
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <CTA />
        </div>
      </section>
    </>
  );
}
