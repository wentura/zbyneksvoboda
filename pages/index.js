import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Logos from "@/components/Logos";
import Navigation from "@/components/Navigation";
import Price from "@/components/Price";
import References from "@/components/References";
import Services from "@/components/Services";
import ShortReference from "@/components/ShortReference";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <Services />
      <ShortReference />
      <Logos />
      <How />
      <References />
      <Price />
      {/* <Contact /> */}
      <About id="about_me" />
      <Footer />
    </main>
  );
}
