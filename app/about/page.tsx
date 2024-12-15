// pages/about.tsx

import styles from '../../styles/About.module.css'; 
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* History Section */}
      <section className={styles.historySection}>
        <div className={styles.historyImage}>
          <img src="/images/mas-oyama.jpg" alt="Mas Oyama - Founder of Kyokushin Karate" />
        </div>
        <div className={styles.historyText}>
          <h2>History of Shinkyokushin Karate</h2>
          <p>
            Shinkyokushin Karate, founded by the legendary Mas Oyama, is a martial art
            that combines traditional Japanese Karate with elements of real-world
            self-defense. Mas Oyama established the Kyokushin Dojo in 1957 and was known
            for his rigorous training and discipline.
          </p>
          <p>
            The dojo’s philosophy focuses on both physical strength and mental discipline.
            Today, Shinkyokushin Karate is practiced by millions worldwide, with a network of
            dojos, events, and competitions that maintain the values established by its founder.
          </p>
        </div>
      </section>

      {/* F.I.K.K Section */}
      <section className={styles.fikkSection}>
        <div className={styles.fikkText}>
          <h2>The F.I.K.K. Organization</h2>
          <p>
            The Federation of International Kyokushinkai Karate (F.I.K.K.) is the governing
            body for the Shinkyokushin Karate system. Under the leadership of Kancho Riccardo
            Villa, the F.I.K.K. has grown into one of the largest and most respected karate
            organizations in the world, promoting the highest standards of training and
            discipline.
          </p>
        </div>
        <div className={styles.fikkImage}>
        <img src="/images/fikk-logo.png" alt="F.I.K.K. Organization" className={styles.fikkLogo} />
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <h2 className={styles.leadershipHeader}>Leadership of F.I.K.K.</h2>
        <div className={styles.leaderCards}>
          <div className={styles.leaderCard}>
            <img src="/images/kancho.jpg" alt="Master Kancho Riccardo Villa" />
            <h3>Kancho Riccardo Villa</h3>
            <p>World Chief of F.I.K.K.</p>
            <Link href="https://www.fikk-kyokushin.com/">
              <button className={styles.profileBtn}>Visit Official Website</button>
            </Link>
          </div>
          <div className={styles.leaderCard}>
            <img src="/images/shihan-daud.jpg" alt="Master Shihan Daud Oyama" />
            <h3>Shihan Daud Oyama</h3>
            <p>Country Representative - Afghanistan</p>
            <Link href="/shihan-daud-profile">
              <button className={styles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>
          <div className={styles.leaderCard}>
            <img src="/images/zainullah.jpg" alt="Assistant Master Zainullah" />
            <h3>Assistant Master Zainullah</h3>
            <p>Assistant to Shihan Daud Oyama</p>
            <Link href="/zainullah-profile">
              <button className={styles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Discover Karate Section */}
      <section className={styles.discoverKarateSection}>
        <h2>Discover the Karate World</h2>
        <p>
          Karate is more than just a martial art. It is a way of life that emphasizes
          discipline, respect, and self-improvement. Whether you’re looking to improve your
          physical fitness, learn self-defense, or join a global community, F.I.K.K. Karate is
          here for you.
        </p>
        <Link href="/classes">
          <button className={styles.discoverKarateBtn}>Discover Our Classes</button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
