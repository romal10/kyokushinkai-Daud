// pages/index.tsx
import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseUs from '../components/WhyChooseUs';  // Import the new section
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Import your custom styles

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Breadcrumb />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Welcome to Federation of International Kyokushinkai Karate (F.I.K.K.)</h1>
          <p>Your journey to mastering Kyokushinkai Karate starts here.</p>
          <div className={styles.heroButtons}>
            <Link href="/register">
              <button className={styles.registerBtn}>Register Now</button>
            </Link>
            <Link href="#getInfo">
              <button className={styles.getInfoBtn}>Get More Info</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs /> {/* Add the new section here */}

      {/* Leadership Overview Section */}
      <section className={styles.leadershipOverview} id="getInfo">
        <h2>Meet Our Leadership</h2>
        <div className={styles.leader}>
          <img src="/images/shihan-daud.jpg" alt="Shihan Daud Oyama" className={styles.leaderImage} />
          <div className={styles.leaderInfo}>
            <h3>Shihan Daud Oyama</h3>
            <p>5th Dan Karate Champion & Owner of F.I.K.K.</p>
            <p>Shihan Daud Oyama is an internationally recognized 5th Dan Karate champion and the owner of F.I.K.K. He is committed to spreading the discipline of Kyokushinkai Karate across the world.</p>
            <Link href="/shihan-daud-profile">
              <button className={styles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>
        </div>

        <div className={styles.leader}>
          <img src="/images/kancho.jpg" alt="Master Kancho Riccardo Villa" className={styles.leaderImage} />
          <div className={styles.leaderInfo}>
            <h3>Master Kancho Riccardo Villa</h3>
            <p>Partner in Italy</p>
            <p>Master Kancho has played a key role in expanding F.I.K.K. in Europe, particularly in Italy, bringing the Kyokushinkai spirit to many new students.</p>
            <Link href="https://www.fikk-kyokushin.com/" target="_blank">
              <button className={styles.profileBtn}>Visit Official Website</button>
            </Link>
          </div>
        </div>

        <div className={styles.leader}>
          <img src="/images/zainullah.jpg" alt="Mr. Zainullah" className={styles.leaderImage} />
          <div className={styles.leaderInfo}>
            <h3>Mr. Zainullah</h3>
            <p>Assistant to Shihan Daud Oyama, 2nd Dan</p>
            <p>Mr. Zainullah is the assistant to Shihan Daud Oyama, contributing to the daily operations of F.I.K.K. and training the next generation of karatekas.</p>
            <Link href="/zainullah-profile">
              <button className={styles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className={styles.coursesOverview}>
        <h2>Our Karate Courses</h2>
        <div className={styles.course}>
          <h3>Kids Karate</h3>
          <p>Introduce your children to the world of discipline and focus through Kyokushinkai Karate.</p>
        </div>

        <div className={styles.course}>
          <h3>Adult Karate</h3>
          <p>Learn self-defense, improve fitness, and master karate techniques with our adult programs.</p>
        </div>

        <div className={styles.course}>
          <h3>Black Belt Course</h3>
          <p>Prepare to earn your black belt with advanced karate techniques and self-discipline training.</p>
        </div>

        <div className={styles.course}>
          <h3>Women’s Self-Defense</h3>
          <p>Empower yourself with practical self-defense skills taught through Kyokushinkai Karate.</p>
        </div>

        <Link href="/courses">
          <button className={styles.viewCoursesBtn}>View All Courses</button>
        </Link>
      </section>
    </div>
  );
}
