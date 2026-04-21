import styles from './Pricing.module.css';

const waBase = "https://wa.me/22962569665?text=";

const plans = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>,
    name: 'Vidéo Courte',
    type: 'Reels / Shorts / TikTok',
    price: '25€',
    packs: [
      { label: '3 vidéos', price: '70€' },
      { label: '5 vidéos', price: '110€' },
      { label: '10 vidéos', price: '200€' },
    ],
    options: ['Sous-titres animés : +5€', 'Livraison rapide (24h) : +10€', 'Révision supplémentaire : +5€'],
    waMsg: "Bonjour Warren, je veux commander le montage Vidéo Courte.",
    hot: false,
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>,
    name: 'Motion Design',
    type: 'Vidéo courte · 30 secondes',
    badge: 'Le plus populaire',
    price: '35€',
    packs: [
      { label: '3 vidéos', price: '95€' },
      { label: '5 vidéos', price: '150€' },
      { label: '10 vidéos', price: '280€' },
    ],
    options: ['Intro/Outro animée incluse', 'Livraison rapide (24h) : +15€', 'Révision supplémentaire : +8€'],
    waMsg: "Bonjour Warren, je veux commander le Motion Design.",
    hot: true,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="stag" style={{ justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            Tarifs
          </div>
          <h2 className="sh" style={{ textAlign: 'center' }}>Des offres <em>claires</em></h2>
          <p className="sp" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Transparentes, adaptées à vos besoins, sans mauvaises surprises.
          </p>
        </div>
        <div className={styles.grid}>
          {plans.map((p, i) => (
            <div key={i} className={`${styles.card} ${p.hot ? styles.hot : ''}`}>
              {p.badge && <div className={styles.badge}>{p.badge}</div>}
              <div className={styles.iconWrap}>{p.icon}</div>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.type}>{p.type}</div>
              <div className={styles.priceBox}>
                <div className={styles.priceLabel}>1 vidéo</div>
                <div className={styles.price}>{p.price}</div>
              </div>
              <div className={styles.packsGrid}>
                {p.packs.map((pk, j) => (
                  <div key={j} className={styles.packItem}>
                    <div className={styles.packLabel}>{pk.label}</div>
                    <div className={styles.packPrice}>{pk.price}</div>
                  </div>
                ))}
              </div>
              <ul className={styles.list}>
                {p.options.map((o, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {o}
                  </li>
                ))}
              </ul>
              <a href={`${waBase}${encodeURIComponent(p.waMsg)}`} target="_blank" className={styles.btnWa}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.476 2 2 6.477 2 12.001c0 1.988.58 3.84 1.576 5.393L2 22l4.757-1.555A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2z"/></svg>
                Démarrer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
