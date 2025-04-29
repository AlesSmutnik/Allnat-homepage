'use client';
import Image from "next/image";
import styles from  "../styles/Onas.module.scss";






export default function Onas () {



    return (
       <div>
          <h2 className={styles.Onas}>O nás / O mě</h2>       
        <div className={styles.onasBox}>        
        <div className={styles.OnasIN}>
        <p className={styles.oNasP}>Jmenuji se Aleš a tvorbou webů se zabývám, protože mě baví spojovat kreativitu s funkčností. Začínal jsem jako samouk a postupně jsem se vypracoval k zakázkám pro malé firmy a živnostníky. Vidět, jak moje práce pomáhá ostatním růst, mě neustále motivuje posouvat se dá
        Můj přístup k tvorbě webů je jednoduchý – rychlost, moderní design a individuální přístup. Každý projekt vnímám jako unikát a hledám nejlepší řešení na míru, aby web nejen dobře vypadal, ale hlavně plnil svůj účel.
        
        👋 Pokud hledáš někoho, kdo ti vytvoří web, který bude nejen hezký, ale i funkční, rád pomůžu!            
         </p>
         <Image src="/myFoto.jpg" alt="fotoMaker" width={160} height={200} className={styles.myFoto} />
        </div>        
      </div>
      </div>
    )
}