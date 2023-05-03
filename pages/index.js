import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Logos from "@/components/Logos";
import Price from "@/components/Price";
import References from "@/components/References";
import Services from "@/components/Services";
import ShortReference from "@/components/ShortReference";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <ShortReference />
      <Logos />
      <How />
      <References />
      <Price />
      {/* <Contact /> */}
      <About id="about_me" />
    </main>
  );
}
