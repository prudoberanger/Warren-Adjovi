import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Brief & Objectifs', desc: "On définit ensemble le ton, la cible et les résultats attendus." },
  { num: '02', title: 'Production', desc: "Je monte, anime et optimise chaque seconde pour maximiser l'impact." },
  { num: '03', title: 'Révisions', desc: "On affine ensemble jusqu'au résultat exact que vous voulez." },
  { num: '04', title: 'Livraison', desc: "Fichiers livrés dans tous les formats requis, prêts à publier." },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="glass-sec">
          <div className={styles.header}>
            <div className="stag">
              <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              Méthode de travail
            </div>
            <h2 className="sh">Mon <em>Processus</em></h2>
            <p className="sp">Un flux structuré pour des livrables impeccables, sans mauvaises surprises.</p>
          </div>
          <div className={styles.grid}>
            {steps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.num}>{s.num}</div>
                <div className={styles.title}>{s.title}</div>
                <div className={styles.desc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
