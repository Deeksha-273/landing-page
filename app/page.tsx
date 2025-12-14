import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials"; // New
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // New

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials /> {/* Social proof comes after services */}
      <Contact />
      <Footer />
    </main>
  );
}