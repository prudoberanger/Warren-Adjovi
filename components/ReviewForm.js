import { useState } from 'react';
import styles from './ReviewForm.module.css';

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [toast, setToast] = useState(false);

  const submit = () => {
    if (!name || !msg || stars === 0) {
      alert('Merci de remplir votre nom, message et note !');
      return;
    }
    const newReview = { name, role: role || 'Visiteur', msg, stars };
    setReviews([newReview, ...reviews]);
    setName(''); setRole(''); setMsg(''); setStars(0);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const initials = (n) => n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <section id="avis" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="stag">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Votre expérience
          </div>
          <h2 className="sh">Laissez votre <em>avis</em></h2>
          <p className="sp">Vous avez travaillé avec Warren ? Partagez votre expérience ici.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.formTitle}>Partagez votre avis</div>
          <div className={styles.formSub}>Votre témoignage aide Warren à gagner la confiance de nouveaux clients.</div>
          <div className={styles.row}>
            <div className={styles.fg}>
              <label>Votre nom</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Ex : Jean Dupont" />
            </div>
            <div className={styles.fg}>
              <label>Votre métier</label>
              <input value={role} onChange={e => setRole(e.target.value)} placeholder="Ex : Coach Fitness" />
            </div>
          </div>
          <div className={styles.fg}>
            <label>Note</label>
            <div className={styles.starsRow}>
              {[1,2,3,4,5].map(v => (
                <button key={v} type="button"
                  className={styles.starBtn}
                  onClick={() => setStars(v)}
                  onMouseEnter={() => setHover(v)}
                  onMouseLeave={() => setHover(0)}>
                  <svg viewBox="0 0 24 24" className={(hover || stars) >= v ? styles.starFilled : styles.starEmpty}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.fg}>
            <label>Votre message</label>
            <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={4} placeholder="Décrivez votre expérience avec Warren..." />
          </div>
          <button className={styles.btnSubmit} onClick={submit}>Publier mon avis</button>
        </div>

        {reviews.length > 0 && (
          <div className={styles.userReviews}>
            <div className={styles.urTitle}>Avis de la communauté</div>
            <div className={styles.urGrid}>
              {reviews.map((r, i) => (
                <div key={i} className={styles.urCard}>
                  <div className={styles.urStars}>
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" width="13" height="13" fill="#FFB800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className={styles.urText}>"{r.msg}"</p>
                  <div className={styles.urAuth}>
                    <div className={styles.urAv}>{initials(r.name)}</div>
                    <div>
                      <div className={styles.urName}>{r.name}</div>
                      <div className={styles.urRole}>{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {toast && <div className={styles.toast}>Avis publié avec succès !</div>}
    </section>
  );
}
