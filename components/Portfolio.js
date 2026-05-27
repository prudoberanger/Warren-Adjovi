import styles from './Portfolio.module.css';

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
        <div className={styles.carousel}>
          <div className={styles.slide}>
            <iframe
              src="https://www.youtube.com/embed/yYQHUSB1EY4"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
