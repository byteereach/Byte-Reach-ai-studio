import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Results />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
