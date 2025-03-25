'use client';

import { useEffect } from "react";
// import Navbar from "./commponents/Navbar";
import ThemeToggle from "./commponents/ThemeToggle";
import RotatingReviews from "./commponents/RotatingRewiews";
import BidAndPrice from "./commponents/BidAndPrice";
import Button from "./commponents/Button";
import Onas from "./commponents/Onas"
import Blog from "./commponents/Blog"
import Contact from "./commponents/Contact";
// import Footer from "./commponents/Footer";

export default function Home() {
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('ml-64');
    }
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
          <section id="about" style={{}}>             
               <Onas />
          </section>
                {/* 🔥 sekce Služby a ceny  */}
          <section id="services" style={{}}>
               <BidAndPrice/>         
          </section>
                {/* 🔥 sekce Recenze   */}
          <section id="reference" style={{}}> 
               <h3 className="text-center mt-8 mb-4">Co o nás říkají klienti</h3>
              <RotatingReviews />
          </section>
                {/* 🔥 sekce BLOG  */}
              <Blog />                     
                       
                {/* 🔥 sekce Kontakty  */}          
          <section id="contact" style={{}}>
              <Contact />            
          </section>
        </main>
      </div>
    </div>
  );
}
