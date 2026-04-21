import Image from 'next/image';
import styles from './Testimonials.module.css';

const photos = [
  'https://res.cloudinary.com/dvwctezb3/image/upload/q_auto,f_auto/v1776751146/t%C3%A9l%C3%A9chargement_3_buxrub.jpg',
  'https://res.cloudinary.com/dvwctezb3/image/upload/q_auto,f_auto/v1776751147/t%C3%A9l%C3%A9chargement_4_drxeis.jpg',
  'https://res.cloudinary.com/dvwctezb3/image/upload/q_auto,f_auto/v1776751151/t%C3%A9l%C3%A9chargement_5_xbfb0g.jpg',
];

const videos = [
  {
    src: 'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1776721925/T%C3%A9moignages_pour_Warren_cpg63a.mp4',
    poster: 'https://res.cloudinary.com/dvwctezb3/video/upload/so_0,q_auto,f_auto/v1776721925/T%C3%A9moignages_pour_Warren_cpg63a.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dvwctezb3/video/upload/q_auto,f_auto/v1776721925/T%C3%A9moignages_pour_Warren_ulrlew.mp4',
    poster: 'https://res.cloudinary.com/dvwctezb3/video/upload/so_0,q_auto,f_auto/v1776721925/T%C3%A9moignages_pour_Warren_ulrlew.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-dark">
      <div className="container">
        <h2 className="section-title" style={{ color: 'white', textAlign: 'center' }}>
          Ils <span style={{ color: 'var(--orange)' }}>m'ont fait confiance</span>
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Découvrez ce que mes clients pensent de mon travail.
        </p>

        <div className={styles.photosGrid}>
          {photos.map((src, i) => (
            <div key={i} className={styles.photoCard}>
              <Image
                src={src}
                alt={`Témoignage ${i + 1}`}
                width={300}
                height={300}
                className={styles.photo}
              />
            </div>
          ))}
        </div>

        <div className={styles.videosGrid}>
          {videos.map((v, i) => (
            <div key={i} className={styles.videoCard}>
              <video
                controls
                preload="none"
                poster={v.poster}
                className={styles.video}
                playsInline
              >
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
