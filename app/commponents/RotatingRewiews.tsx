'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Interface pro jednu recenzi
interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
}

const RotatingReviews: React.FC = () => {
  // Všechny recenze z vašeho původního kódu
  const allReviews: Review[] = [
    {
      id: 1,
      name: "Petra S.",
      image: "/img/ref1.jpeg",
      text: "\"Nečekala jsem, že to půjde tak rychle! Web hotový v rekordním čase a přesně podle domluvy.\""
    },
    {
      id: 2,
      name: "Martin D.",
      image: "/img/ref2.jpeg",
      text: "\"Allnat nám vytvořil stránku, která konečně působí profesionálně. Komunikace? Naprosto bez problémů!\""
    },
    {
      id: 3,
      name: "Jaroslava M.",
      image: "/img/ref3.jpeg",
      text: "\"Super přístup! Všechno jsme probrali, dostala jsem skvělé rady a web funguje perfektně.\""
    },
    {
      id: 4,
      name: "Jan K.",
      image: "/img/ref4.jpeg",
      text: "\"Skvělá spolupráce! Web vypadá moderně, běží bleskově a přesně odpovídá našim potřebám.\""
    },
    {
      id: 5,
      name: "Tomáš R.",
      image: "/img/ref5.jpeg",
      text: "\"Rychlost, kvalita a osobní přístup, přesně to, co jsem hledal. Doporučuju!\""
    }
  ];

  // Stav pro aktuálně zobrazené recenze
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
  // Stav pro počet zobrazených recenzí
  const [displayCount, setDisplayCount] = useState<number>(3);
  // Stav pro automatickou rotaci (zapnuto/vypnuto)
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  // Stav pro index první zobrazené recenze
  const [startIndex, setStartIndex] = useState<number>(0);

  // Effect pro nastavení počtu zobrazených recenzí podle šířky okna
  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 700 ? 2 : 3);
    };
    
    // Nastavení počátečního počtu recenzí
    handleResize();
    
    // Přidání event listeneru pro změnu velikosti okna
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect pro aktualizaci viditelných recenzí při změně startIndex nebo displayCount
  useEffect(() => {
    updateVisibleReviews();
  }, [startIndex, displayCount]);

  // Effect pro automatickou rotaci recenzí
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoRotate) {
      interval = setInterval(() => {
        rotateNext();
      }, 10000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRotate, startIndex, allReviews.length, displayCount]);

  // Funkce pro aktualizaci viditelných recenzí
  const updateVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (startIndex + i) % allReviews.length;
      reviews.push(allReviews[index]);
    }
    setVisibleReviews(reviews);
  };

  // Funkce pro posun na další recenzi
  const rotateNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
  };

  // Funkce pro posun na předchozí recenzi
  const rotatePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + allReviews.length) % allReviews.length);
  };

  // Funkce pro přepnutí automatické rotace
  const toggleAutoRotate = () => {
    setAutoRotate(prev => !prev);
  };

  return (
    <div className="reviews-container">
      {/* Navigační tlačítka */}
      <div className="reviews-navigation">
        <button 
          onClick={rotatePrev} 
          className="review-nav-button"
          aria-label="Předchozí recenze"
        >
          &#10094; {/* Šipka doleva */}
        </button>
        
        <button 
          onClick={toggleAutoRotate} 
          className="review-auto-button"
          aria-label={autoRotate ? "Vypnout automatické přepínání" : "Zapnout automatické přepínání"}
        >
          {autoRotate ? "❚❚" : "▶"} {/* Pauza nebo Play symbol */}
        </button>
        
        <button 
          onClick={rotateNext} 
          className="review-nav-button"
          aria-label="Další recenze"
        >
          &#10095; {/* Šipka doprava */}
        </button>
      </div>
      
      {/* Recenze */}
      <div className="ref-box">
        {visibleReviews.map((review) => (
          <article key={review.id} className="artRef fade-in">
            <Image
              src={review.image}
              width={125}
              height={80}
              alt="Reference"
              className="imgRef"
            />
            <p className="refText">
              {review.text} {review.name}
            </p>
          </article>
        ))}
      </div>
      
      {/* Indikátor aktuálních recenzí (tečky) */}
      <div className="reviews-indicators">
        {allReviews.map((_, index) => (
          <span 
            key={index} 
            className={`review-indicator ${index >= startIndex && index < startIndex + displayCount ? 'active' : ''}`}
            onClick={() => setStartIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingReviews;