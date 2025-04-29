'use client';
import { useCallback, useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../styles/RotatingRewiews.module.scss";

// interface Review {
//   id: number;
//   name: string;
//   image: string;
//   text: string;
// }

const RotatingReviews: React.FC = () => {
  const allReviews = useMemo(() => [
    { id: 1, name: "Petra S.", image: "/ref1.jpeg", text: "\"Nečekala jsem, že to půjde tak rychle! ...\"" },
    { id: 2, name: "Martin D.", image: "/ref2.jpeg", text: "\"Allnat nám vytvořil stránku, která konečně působí profesionálně. ...\"" },
    { id: 3, name: "Jaroslava M.", image: "/ref3.jpeg", text: "\"Super přístup! ...\"" },
    { id: 4, name: "Jan K.", image: "/ref4.jpeg", text: "\"Skvělá spolupráce! ...\"" },
    { id: 5, name: "Tomáš R.", image: "/ref5.jpeg", text: "\"Rychlost, kvalita a osobní přístup ...\"" }
  ], []);

  const [displayCount, setDisplayCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const handleResize = () => setDisplayCount(window.innerWidth < 700 ? 1 : 3);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rotateNext = useCallback(() => {
    setStartIndex(prev => (prev + 1) % allReviews.length);
  }, [allReviews.length]);

  const rotatePrev = () => {
    setStartIndex(prev => (prev - 1 + allReviews.length) % allReviews.length);
  };

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(rotateNext, 10000);
    return () => clearInterval(interval);
  }, [autoRotate, rotateNext]);

  const visibleReviews = useMemo(() => {
    return Array.from({ length: displayCount }, (_, i) => {
      return allReviews[(startIndex + i) % allReviews.length];
    });
  }, [startIndex, displayCount, allReviews]);

  return (
    <div className={styles.reviewsContainer}>
      <div>
      <h3 className={styles.textUnderRew}>Co o nás říkají klienti</h3>
        </div>       
      <div className={styles.reviewsNavigation}>
      
        <button onClick={rotatePrev} className={styles.reviewNavButton} aria-label="Předchozí recenze">
          &#10094;
        </button>
        <button onClick={() => setAutoRotate(prev => !prev)} className={styles.reviewAutoButton} aria-label={autoRotate ? "Vypnout automatické přepínání" : "Zapnout automatické přepínání"}>
          {autoRotate ? "❚❚" : "▶"}
        </button>
        <button onClick={rotateNext} className={styles.reviewNavButton} aria-label="Další recenze">
          &#10095;
        </button>
      </div>

      <div className={styles.refBox}>
        {visibleReviews.map(review => (
          <article key={review.id} className={styles.artRef}>
            <Image src={review.image} width={125} height={80} alt={review.name} className={styles.imgRef} />
            <p className={styles.refText}>{review.text} {review.name}</p>
          </article>
        ))}
      </div>

      <div className={styles.reviewsIndicators}>
        {Array.from({ length: allReviews.length }, (_, i) => (
          <span key={i} className={`${styles.reviewIndicator} ${i === startIndex ? styles.active : ''}`} onClick={() => setStartIndex(i)} />
        ))}
      </div>
    </div>
  );
};

export default RotatingReviews;
