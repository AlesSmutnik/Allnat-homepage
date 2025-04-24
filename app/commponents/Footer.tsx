import styles from "../styles/Footer.module.scss";
import React from 'react';
import Link from "next/link";
import Image from "next/image";



export default function Footer () {
    return(
        <div className={styles.footerAll}>
            <h3>Sociální sítě</h3>
            <div className={styles.socIcons}>
             <Link href="https://www.facebook.com/profile.php?id=61574919272925" target="_blank" rel="noopener noreferrer">
                    <Image src="/fb.png" alt="Facebook" width={50} height={50} className={styles.imagef} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61574919272925" target="_blank" rel="noopener noreferrer">
                    <Image src="/ins.png" alt="Instagram" width={50} height={50} className={styles.imagef} />
              </Link>
            </div>
          
                    
        </div>
    )
}