import Head from "next/head";
import Header from "./Header/Header";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "./Footer/Footer";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { useState } from "react";
export default function Layout({ children }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [navSelected, setNavSelected] = useState("");
  return (
    <>
      <Head>
        <title>
          Nancy Johnson | {!navSelected ? "Professional Coach" : navSelected}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <main
        onClick={() => setHamburgerOpen(false)}
        className={`${pjs.className}`}
      >
        {children}
      </main>
      <Footer navSelected={navSelected} setNavSelected={setNavSelected} />
    </>
  );
}
