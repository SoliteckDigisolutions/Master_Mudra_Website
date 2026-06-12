
import Hero from "./components/Hero";
import About from "./components/About";
import Guarentess from "./components/Guarentess";
import Service from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Guarentess />
      <Service />
      <Testimonials />
      <Contact />
     
    </div>
  );
}
