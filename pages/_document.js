import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth antialiased">
      <Head />
      <body>
        <NavBar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
