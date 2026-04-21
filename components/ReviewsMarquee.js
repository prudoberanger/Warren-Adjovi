import styles from './ReviewsMarquee.module.css';

const reviews = [
  { stars: 5, text: "Warren a transformé mes vidéos en véritable contenu professionnel. Le rendu est bluffant, je reviens à chaque fois.", name: "Julien Moreau", role: "Coach Fitness · Lyon", img: "https://i.pravatar.cc/80?img=11" },
  { stars: 5, text: "Livraison ultra rapide, qualité au rendez-vous. Warren comprend exactement ce qu'on veut sans avoir besoin de tout expliquer.", name: "Camille Bertrand", role: "Influenceuse Lifestyle · Paris", img: "https://i.pravatar.cc/80?img=5" },
  { stars: 5, text: "Mon taux d'engagement a explosé depuis qu'on travaille ensemble. Mes Reels font maintenant 2x plus de vues.", name: "Thomas Leroy", role: "Entrepreneur · Bordeaux", img: "https://i.pravatar.cc/80?img=33" },
  { stars: 4, text: "Très sérieux, à l'écoute et force de proposition. Les transitions et le sound design donnent une vraie identité à mes contenus.", name: "Inès Dupont", role: "Créatrice de contenu · Nantes", img: "https://i.pravatar.cc/80?img=47" },
  { stars: 5, text: "Je recommande à 100%. Warren est ponctuel, professionnel et surtout passionné. Ça se voit dans chaque vidéo.", name: "Marc Fontaine", role: "Coach Business · Marseille", img: "https://i.pravatar.cc/80?img=60" },
  { stars: 5, text: "Des vidéos courtes qui convertissent vraiment. Depuis qu'on a intégré ses montages à notre funnel, les ventes ont augmenté.", name: "Alexis Garnier", role: "E-commerçant · Lille", img: "https://i.pravatar.cc/80?img=52" },
  { stars: 4, text: "Je lui ai donné mes bruts et il m'a rendu une vidéo prête à publier. Efficace, rapide et le rendu est vraiment pro.", name: "Laura Simon", role: "Coach Nutrition · Strasbourg", img: "https://i.pravatar.cc/80?img=39" },
  { stars: 5, text: "Incroyable travail ! Il a su capter l'énergie de mes vidéos et les sublimer avec un montage dynamique et accrocheur.", name: "Nathan Petit", role: "Youtubeur · Paris", img: "https://i.pravatar.cc/80?img=18" },
  { stars: 5, text: "Collaboration au top ! Warren apporte des idées créatives en plus du montage. Un vrai partenaire pour mes contenus.", name: "Manon Dubois", role: "Styliste & Blogueuse · Nice", img: "https://i.pravatar.cc/80?img=29" },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFB800">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function ReviewsMarquee() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="stag" style={{ justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Ils nous font confiance
        </div>
        <h2 className="sh" style={{ textAlign: 'center' }}>Avis de nos <em>clients</em></h2>
        <p className="sp" style={{ margin: '0 auto' }}>
          Des dizaines de créateurs et entrepreneurs nous font confiance — voici ce qu'ils disent.
        </p>
      </div>
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {doubled.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: r.stars }).map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.auth}>
                <img src={r.img} alt={r.name} className={styles.av} />
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.role}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
