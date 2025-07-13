import MainNavbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="flex mx-auto max-w-7xl flex-col items-center justify-center">
      <MainNavbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}
