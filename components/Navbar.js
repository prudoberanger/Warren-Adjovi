import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Warren <span>ADJOVI</span>
          </Link>
          <div className={styles.links}>
            <a href="#about">À propos</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Réalisations</a>
            <a href="#testimonials">Témoignages</a>
            <a href="#avis">Avis</a>
            <a href="#tarifs">Tarifs</a>
            <a href="https://wa.me/22962569665" target="_blank" className={styles.cta}>
              Me contacter
            </a>
          </div>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Réalisations</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Témoignages</a>
          <a href="#avis" onClick={() => setMenuOpen(false)}>Avis</a>
          <a href="#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
          <a href="https://wa.me/22962569665" target="_blank" onClick={() => setMenuOpen(false)}>Me contacter</a>
        </div>
      )}
    </>
  );
}
