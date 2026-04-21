import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const words = ['Vos Contenus', 'Vos Reels', 'Vos Vidéos', 'Vos Shorts'];

export default function Hero() {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const current = words[loopNum % words.length];
    let timeout;
    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, loopNum]);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>
            Je transforme <br />
            <span className={styles.typewriter}>
              {text}
              <span className={styles.cursor}>|</span>
            </span>
            <br />en machines à vues
          </h1>
          <p className={styles.sub}>
            Montage vidéo professionnel, sound design, motion design — pour les créateurs et marques qui veulent des vidéos qui captivent et convertissent.
          </p>
          <div className={styles.buttons}>
            <a href="#services" className="btn-primary">Voir mon travail</a>
            <a href="https://wa.me/22962569665" target="_blank" className="btn-outline">Me contacter</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>+50</strong>
              <span>Vidéos montées</span>
            </div>
            <div className={styles.stat}>
              <strong>+30</strong>
              <span>Clients satisfaits</span>
            </div>
            <div className={styles.stat}>
              <strong>50K€</strong>
              <span>Générés pour mes clients</span>
            </div>
            <div className={styles.stat}>
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="https://wa.me/22962569665" target="_blank" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.476 2 2 6.477 2 12.001c0 1.988.58 3.84 1.576 5.393L2 22l4.757-1.555A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2z"/></svg>
            </a>
            <a href="https://www.instagram.com/warren_adjovi" target="_blank" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
