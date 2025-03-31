import React from "react";
import styles from "./BidAndPrice.module.scss"; // Import SCSS modulu

const packages = [
  {
    id: 1,
    title: "One-Page Web",
    description: "Rychlé a efektivní řešení",
    features: [
      "Moderní jednostránkový web",
      "Responzivní design pro mobily i počítače",
      "Kontaktní formulář",
      "Základní SEO optimalizace",
    ],
    price: "od 5 900 Kč",
  },
  {
    id: 2,
    title: "Firemní web",
    description: "Profesionální prezentace pro firmy a živnostníky",
    features: [
      "Vícestránkový web (O nás, Služby, Kontakt...)",
      "Individuální design na míru",
      "Responzivní a rychlé načítání",
      "Základní SEO optimalizace",
      "Možnost napojení na sociální sítě",
    ],
    price: "od 12 900 Kč",
  },
  {
    id: 3,
    title: "E-shop",
    description: "Začni prodávat online snadno a rychle",
    features: [
      "Kompletní e-shop na míru",
      "Správa produktů a objednávek",
      "Napojení na platební brány",
      "Optimalizace pro vyhledávače",
      "Možnost automatických faktur a dopravy",
    ],
    price: "od 19 900 Kč",
  },
  {
    id: 4,
    title: "Individuální řešení",
    description: "Web přesně podle tvých potřeb",
    features: [
      "Speciální funkce na míru",
      "Napojení na externí služby (CRM, API, databáze...)",
      "Pokročilé SEO a marketingové nástroje",
      "Správa webu a dlouhodobá podpora",
    ],
    price: "Cena dle rozsahu projektu",
  },
];

const BidAndPrice: React.FC = () => {
  return (
    <div className={styles.serviceBox}>
      <p className={styles.nadpis}>Balíčky služeb</p>
      <p className={styles.popis}>Vyber si Přesně ten, který nejlépe odpovídá tvým potřebám.</p>

      <div className={styles.gridContainer}>
      {packages.map((pkg) => (
        <div key={pkg.id} className={styles.packageCard}>
          <h3 className={styles.title}>{pkg.title}</h3>
          <p className={styles.description}>{pkg.description}</p>
          <ul className={styles.featureList}>
            {pkg.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className={styles.price}>💰 {pkg.price}</p>
        </div>
      ))}
    </div>

    </div>
  
  );
};

export default BidAndPrice;
