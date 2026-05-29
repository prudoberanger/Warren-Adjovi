import { useState } from 'react';
import styles from './Portfolio.module.css';

const carousel1 = [
  'https://www.youtube.com/embed/yYQHUSB1EY4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048171/VID-20260527-WA0021_us6edi.mp4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048254/VID-20260527-WA0013_bjm0t8.mp4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048465/VID-20260527-WA0018_g6nlyb.mp4',
];

const carousel2 = [
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048520/VID-20260527-WA0020_lmcl5j.mp4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048697/VID-20260527-WA0028_hi8s8a.mp4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780049597/VID-20260527-WA0026_tewmp0.mp4',
  'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1780048516/VID-20260527-WA0025_ry4hh1.mp4',
];

function Carousel({ videos }) {
  const [idx, setIdx] = useState(0);
  const go = (i) => setIdx((i + videos.length) % videos.length);
  const isYoutube = (src) => src.includes('youtube.com');

  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
        {videos.map((src, i) => (
          <div key={i} className={styles.slide}>
            {isYoutube(src) ? (
              <iframe
                src={i === idx ? src : ''}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <video
                controls
                preload="none"
                playsInline
                className={styles.video}
                src={i === idx ? src : ''}
              />
            )}
          </div>
        ))}
      </div>
      <button className={`${styles.arr} ${styles.prev}`} onClick={() => go(idx - 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className={`${styles.arr} ${styles.next}`} onClick={() => go(idx + 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div className={styles.dots}>
        {videos.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === idx ? styles.active : ''}`} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="stag">
            <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            Portfolio
          </div>
          <h2 className="sh">Mes <em>Réalisations</em></h2>
          <p className="sp">Des vidéos pensées pour captiver, retenir et convertir — à chaque seconde.</p>
        </div>
        <Carousel videos={carousel1} />
        <div style={{ marginTop: 24 }}>
          <Carousel videos={carousel2} />
        </div>
      </div>
    </section>
  );
}
