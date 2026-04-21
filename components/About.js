import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776751156/20260420_112231_bvoafw.png"
              alt="Warren ADJOVI"
              width={600}
              height={700}
              className={styles.image}
              priority
            />
            <div className={`${styles.card} ${styles.card1}`}>
              <strong>+50</strong>
              <span>Vidéos montées</span>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <strong>50K€</strong>
              <span>Générés</span>
            </div>
          </div>
          <div className={styles.text}>
            <h2 className="section-title">Je suis <span style={{color: 'var(--orange)'}}>Warren ADJOVI</span></h2>
            <p>Monteur vidéo spécialisé dans la création de contenus qui retiennent l'attention et convertissent. Mon approche : allier <strong>storytelling dynamique</strong> et techniques modernes pour que chaque seconde joue un rôle précis.</p>
            <p>Pas des vidéos jolies mais vides. Des vidéos qui <strong>performent.</strong></p>
            <div className={styles.chips}>
              <span>Réel Finesse</span>
              <span>Short YouTube</span>
              <span>Motion Design</span>
              <span>Vidéo Publicitaire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
