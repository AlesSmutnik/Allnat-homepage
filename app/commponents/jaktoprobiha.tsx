import React from 'react';
import styles from '../styles/jaktoprobiha.module.scss'; // Import SCSS module
import Image from 'next/image'; // Import Image component from Next.js
const JakToProbiha: React.FC = () => {
    return (
        <div className={styles.jakToProbihaContainer}>
    <h2 className={styles.jakTo}>Jak probíhá spolupráce na vývoji webu s klientem</h2>
        <section className={styles.jakToProbiha}>
            

                       

           <div className={styles.pngBox}>
           <Image src="/img/i2.png" alt="fotoMaker" width={50} height={50} className={styles.imPng} />
           <Image src="/img/i1.png" alt="fotoMaker" width={50} height={50} className={styles.imPng} />
           <Image src="/img/i3.png" alt="fotoMaker" width={50} height={50} className={styles.imPng} />
           <Image src="/img/i4.png" alt="fotoMaker" width={50} height={50} className={styles.imPng} />
           <Image src="/img/i5.png" alt="fotoMaker" width={50} height={50} className={styles.imPng} />
          </div>

          
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <strong>Konzultace:</strong> Společně si ujasníme vaše požadavky, cíle a představy o webu.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <strong>Plánování:</strong> Vytvoříme plán projektu, včetně časového harmonogramu a rozpočtu.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <strong>Design:</strong> Připravíme návrh designu, který odpovídá vašim požadavkům a značce.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <strong>Vývoj:</strong> Začneme s programováním a implementací funkcionalit.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                        <strong>Testování:</strong> Otestujeme web, abychom zajistili jeho funkčnost a kvalitu.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>6</div>
                    <div className={styles.stepContent}>
                        <strong>Spuštění:</strong> Po schválení web nasadíme na produkční server.
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>7</div>
                    <div className={styles.stepContent}>
                        <strong>Podpora:</strong> Poskytujeme podporu a údržbu po spuštění webu.
                    </div>
                </div>
            </div>
        
        </section>
        </div>
    );
};

export default JakToProbiha;