import React from 'react';
import styles from "../styles/OursWork.module.scss"; // Import CSS modulu pro stylování
import Image from 'next/image';
import Link from 'next/link';
export default function OursWork() {
    return (
        <div className={styles.oursWorkAll}>
           <h2 className={styles.Tith2}>Naše práce</h2> 
           
        <div className={styles.frameAll}>
        <section>              
              
                <div className={styles.frame}>
                    <h3 className={styles.title}>Web pro montáže nábytku</h3>
                    <Link href="https://www.woodooalda.cz/" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo1.png"alt="Image 1" width={100} height={100} className={styles.image} />
                    </Link>
                    <p className={styles.text}> ukázka webu zákazníka </p>
                </div>
                {/* <div className={styles.frame}>
                    <Image src="/images/2.png" alt="Image 2" width={300} height={200} className={styles.image} />
                    <h3 className={styles.title}>Název projektu 2</h3>
                    <p className={styles.text}>Popis projektu 2</p>
                </div>
                <div className={styles.frame}>
                    <Image src="/images/3.png" alt="Image 3" width={300} height={200} className={styles.image} />
                    <h3 className={styles.title}>Název projektu 3</h3>
                    <p className={styles.text}>Popis projektu 3</p>
                </div> */}
                
            </section>
            </div>
        </div>
    );
}