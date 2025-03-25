"use client"
import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -80; // Upravit podle výšky navbaru
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsOpen(false); // Zavře menu po kliknutí
    };

    return (
        <nav className={styles.navbar}>
            {/* Hamburger button */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Postranní menu */}
            <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                <li onClick={() => scrollToSection("home")}>Domů</li>
                <li onClick={() => scrollToSection("about")}>O nás</li>
                <li onClick={() => scrollToSection("services")}>Služby</li>
                <li onClick={() => scrollToSection("reference")}>Reference</li>
                <li onClick={() => scrollToSection("contact")}>Kontakt</li>
            </ul>
        </nav>
    );
}
