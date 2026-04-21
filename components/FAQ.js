import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  { q: "Quel est le délai de livraison ?", a: "En général 48-72h pour une vidéo courte. Livraison express (24h) disponible en option." },
  { q: "Combien de révisions sont incluses ?", a: "2 révisions incluses par vidéo. Des révisions supplémentaires sont disponibles à +5€/+8€ selon la formule." },
  { q: "Comment me transmettre les fichiers bruts ?", a: "Via WeTransfer, Google Drive ou tout autre service de partage de fichiers que vous préférez." },
  { q: "Travaillez-vous avec toutes les plateformes ?", a: "Oui — Instagram Reels, YouTube Shorts, TikTok, Facebook, LinkedIn. Je formate chaque vidéo pour la plateforme cible." },
  { q: "Puis-je commander plusieurs vidéos à la fois ?", a: "Absolument, les packs créateur sont faits pour ça avec des tarifs dégressifs avantageux." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="stag">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2"/></svg>
            FAQ
          </div>
          <h2 className="sh">Questions <em>fréquentes</em></h2>
          <p className="sp">Tout ce que vous devez savoir avant de démarrer.</p>
        </div>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
              <button className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className={styles.answer}>
                <div className={styles.answerInner}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
