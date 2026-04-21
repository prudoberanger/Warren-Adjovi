import styles from './Stats.module.css';

const stats = [
  { num: '+50', label: 'Vidéos montées' },
  { num: '+30', label: 'Clients satisfaits' },
  { num: '50K€', label: 'Générés pour mes clients' },
  { num: '98%', label: 'Satisfaction' },
];

export default function Stats() {
  return (
    <div className={styles.statsSection}>
      {stats.map((s, i) => (
        <div key={i} className={styles.statCard}>
          <div className={styles.statNum}>{s.num}</div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
