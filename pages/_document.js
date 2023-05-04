import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth antialiased">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
