'use client';

import Image from 'next/image';
import { useEffect } from "react";

import ThemeToggle from "./commponents/ThemeToggle";
import RotatingReviews from "./commponents/RotatingRewiews";
import BidAndPrice from "./commponents/BidAndPrice";
import Button from "./commponents/Button";
import Onas from "./commponents/Onas";
import Contact from "./commponents/Contact";


export default function Home() {
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('ml-64');
    }
   // ScrollReveal animace
   import("scrollreveal").then((module) => {
    const ScrollReveal = module.default; // Správné volání
    ScrollReveal().reveal(".animate", {
      delay: 500,
      distance: "80px",
      origin: "bottom",
      duration: 1000,
    });
  });
  }, []);
  
 

//scroll section pro button 
const scrollToContact = () => { 
  const contactSection = document.getElementById("contact");
if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth"});
};
};

  return (
        <div className="flex min-h-screen">

{/* 🔥  Dark mode*/}

                 <div id="main-content" className="flex-1 transition-all duration-300">
        <div className="flex justify-end p-4">
        <ThemeToggle />
        </div>

 {/* 🔥 Hlavní obsah */}

        <section id="home">
        <header className="logo-box">
          <div className="logo">
            <p>Allnat web Design</p>    
          </div>
          <div>
          <Image src="/img/spin.png" alt="fotoMaker" width={300} height={260} className="spinImg" />
          </div>
          <h2>Moderní weby, které prodávají</h2>
        </header>
        <article className="bid-box">
            <p className="bid-p">
            Nabízíme vývoj webových aplikací a řešení na míru v Next.js, TypeScriptu a Reactu, zaměřený na efektivní a moderní kódování. Ideální pro firmy a jednotlivce, kteří potřebují rychlé, spolehlivé a škálovatelné webové projekty.
            </p>
          </article>

          <div className="button-box"> 
            <Button label="🚀 Chci nový Web" onClick={scrollToContact} />
          </div>
          </section>
{/*---------*/}
      {/*----------*/}
              {/*------------- 🔥 Všechny sekce webu ----------------*/}
      {/*----------*/}
{/*----------*/}

        <main>
                {/* 🔥 sekce o mě */}
          <section id="about" style={{}} className="animate">             
               <Onas />
          </section>
                {/* 🔥 sekce Služby a ceny  */}
          <section id="services" style={{}} className="animate">
               <BidAndPrice/>         
          </section>
                {/* 🔥 sekce Recenze   */}
          <section id="reference" style={{}} className="animate"> 
               <h3 className="text-center mt-8 mb-4">Co o nás říkají klienti</h3>
              <RotatingReviews />
          </section>
                {/* 🔥 sekce BLOG  */}
              {/* <Blog />                      */}
                       
                {/* 🔥 sekce Kontakty  */}          
          <section id="contact" style={{}} className="animate">
              <Contact />            
          </section>
        </main>
      </div>
    </div>
  );
}
