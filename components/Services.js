import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    title: 'Montage Short',
    desc: 'Vidéos courtes percutantes avec cuts rythmés et sous-titres dynamiques.',
    img: 'https://res.cloudinary.com/dvwctezb3/image/upload/v1776751132/t%C3%A9l%C3%A9chargement_fxrytp.jpg',
  },
  {
    title: 'Montage Réel',
    desc: 'Reels Instagram optimisés pour la rétention et la conversion.',
    img: 'https://res.cloudinary.com/dvwctezb3/image/upload/v1776751135/t%C3%A9l%C3%A9chargement_1_toi8on.jpg',
  },
  {
    title: 'Motion Design',
    desc: 'Animations graphiques pour captiver votre audience.',
    img: 'https://res.cloudinary.com/dvwctezb3/image/upload/v1776751141/t%C3%A9l%C3%A9chargement_2_gp8gtx.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title" style={{textAlign: 'center'}}>Mes <span style={{color: 'var(--orange)'}}>Services</span></h2>
        <p className="section-subtitle">Des prestations adaptées à chaque format, chaque plateforme, chaque objectif.</p>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={s.img} alt={s.title} width={400} height={250} className={styles.img} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="https://wa.me/22962569665" target="_blank" className={styles.link}>Demander un devis →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
