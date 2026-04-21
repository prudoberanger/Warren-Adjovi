import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const words = ['Vos Contenus', 'Vos Reels', 'Vos Vidéos', 'Vos Shorts'];

const pills = [
  { label: 'Réel Finesse', pos: 'p1' },
  { label: 'Short YouTube', pos: 'p2' },
  { label: 'Motion Design', pos: 'p3' },
  { label: 'Sound Design', pos: 'p4' },
  { label: '+50 Vidéos', pos: 'p5' },
  { label: '98% Satisfaits', pos: 'p6' },
];

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
      {/* GAUCHE */}
      <div className={styles.heroLeft}>
        <div className={styles.availBadge}>
          <div className={styles.availDot}></div>
          <span className={styles.availText}>Disponible pour nouveaux projets</span>
        </div>

        <h1 className={styles.title}>
          Je transforme<br />
          <span className={styles.twLine}>
            <span className={styles.typewriter}>{text}</span>
            <span className={styles.cursor}></span>
          </span>
          <br />en machines à vues
        </h1>

        <p className={styles.sub}>
          Montage vidéo <strong>professionnel</strong> · Sound design · Motion design —
          Pour les créateurs et marques qui veulent des vidéos qui{' '}
          <span className={styles.accent}>captivent et convertissent.</span>
        </p>

        <div className={styles.buttons}>
          <a href="#tarifs" className="btn-primary">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
            Voir mon travail
          </a>
          <a href="https://wa.me/22962569665" target="_blank" className="btn-outline">
            Me contacter
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://wa.me/22962569665" target="_blank" className={styles.soc}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.476 2 2 6.477 2 12.001c0 1.988.58 3.84 1.576 5.393L2 22l4.757-1.555A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2z"/></svg>
          </a>
          <a href="https://www.instagram.com/warren_adjovi" target="_blank" className={styles.soc}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61588258851728" target="_blank" className={styles.soc}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
        </div>
      </div>

      {/* DROITE — photo + pills */}
      <div className={styles.heroRight}>
        <div className={styles.photoScene}>
          {pills.map((p, i) => (
            <div key={i} className={`${styles.pill} ${styles[p.pos]}`}>
              <svg viewBox="0 0 24 24" width="13" height="13"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
              {p.label}
            </div>
          ))}
          <Image
            src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776751156/20260420_112231_bvoafw.png"
            alt="Warren ADJOVI"
            width={340}
            height={540}
            className={styles.photo}
            priority
          />
        </div>
      </div>
    </section>
  );
}
