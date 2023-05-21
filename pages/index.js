import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Logos from "@/components/Logos";
import Navigation from "@/components/Navigation";
import Price from "@/components/Price";
import References from "@/components/References";
import Services from "@/components/Services";
import ShortReference from "@/components/ShortReference";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    var _paq = (window._paq = window._paq || []);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      var u = "http://matomo.zbyneksvoboda.cz/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "1"]);
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = u + "matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  });

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
