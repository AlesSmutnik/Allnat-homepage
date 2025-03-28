'use client';
import { useCallback } from 'react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMemo } from 'react';

// Interface pro jednu recenzi
interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
}

const RotatingReviews: React.FC = () => {
  // Všechny recenze z vašeho původního kódu
  const allReviews = useMemo(() => [
    { id: 1, name: "Petra S.", image: "/img/ref1.jpeg", text: "\"Nečekala jsem, že to půjde tak rychle! ...\"" },
    { id: 2, name: "Martin D.", image: "/img/ref2.jpeg", text: "\"Allnat nám vytvořil stránku, která konečně působí profesionálně. ...\"" },
    { id: 3, name: "Jaroslava M.", image: "/img/ref3.jpeg", text: "\"Super přístup! ...\"" },
    { id: 4, name: "Jan K.", image: "/img/ref4.jpeg", text: "\"Skvělá spolupráce! ...\"" },
    { id: 5, name: "Tomáš R.", image: "/img/ref5.jpeg", text: "\"Rychlost, kvalita a osobní přístup ...\"" }
  ], []);

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
      setDisplayCount(window.innerWidth < 700 ? 1 : 3);
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
 

    // Funkce pro posun na další recenzi
    const rotateNext = useCallback(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
    }, [allReviews.length]);

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
  }, [autoRotate, rotateNext]);
  

  // Funkce pro aktualizaci viditelných recenzí
  const updateVisibleReviews = useCallback(() => {
  const reviews = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (startIndex + i) % allReviews.length;
    reviews.push(allReviews[index]);
  }
  setVisibleReviews(reviews);
}, [displayCount, startIndex, allReviews]);

useEffect(() => {
  updateVisibleReviews();
}, [startIndex, displayCount, updateVisibleReviews]);

  


  

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