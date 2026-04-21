import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>Prêt à booster<br />votre <em>contenu</em> ?</h2>
          <p>Travaillons ensemble pour créer des vidéos qui convertissent et font exploser votre audience.</p>
          <div className={styles.btns}>
            <a href="https://wa.me/22962569665" target="_blank" className="btn-primary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.476 2 2 6.477 2 12.001c0 1.988.58 3.84 1.576 5.393L2 22l4.757-1.555A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2z"/></svg>
              Démarrer maintenant
            </a>
            <a href="#tarifs" className="btn-outline">Voir les tarifs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
