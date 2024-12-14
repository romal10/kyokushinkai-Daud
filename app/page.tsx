// pages/index.tsx

import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseUs from '../components/WhyChooseUs';  // Import the new section
import AwardsSlider from '../components/AwardsSlider'; // Import the new slider component
import CourseTabs from '../components/CourseTabs';  // Import the CourseTabs component
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Import your custom styles
import leaderStyles from '../styles/Leader.module.css'; // Import the new Leader CSS

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
        {/* Leadership Info... */}
      </section>

      <section className={leaderStyles.leadersSection}>
        <h2>Meet Our Leadership</h2>

        <div className={leaderStyles.leaderProfiles}>
          {/* Master Kancho Riccardo Villa */}
          <div className={leaderStyles.leaderCard}>
            <img 
              src="/images/kancho.jpg" 
              alt="Master Kancho Riccardo Villa" 
              className={leaderStyles.leaderImage} 
            />
            <h3>Master Kancho Riccardo Villa</h3>
            <p>World Chief of F.I.K.K.</p>
            <Link href="https://www.fikk-kyokushin.com/">
              <button className={leaderStyles.profileBtn}>Visit Official Website</button>
            </Link>
          </div>

          {/* Master Shihan Daud Oyama */}
          <div className={leaderStyles.leaderCard}>
            <img 
              src="/images/shihan-daud.jpg" 
              alt="Master Shihan Daud Oyama" 
              className={leaderStyles.leaderImage} 
            />
            <h3>Master Shihan Daud Oyama</h3>
            <p>Country Representative, Afghanistan</p>
            <Link href="/shihan-daud-profile">
              <button className={leaderStyles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>

          {/* Assistant Master Zainullah */}
          <div className={leaderStyles.leaderCard}>
            <img 
              src="/images/zainullah.jpg" 
              alt="Assistant Master Zainullah" 
              className={leaderStyles.leaderImage} 
            />
            <h3>Assistant Master Zainullah</h3>
            <p>Assistant to Shihan Daud Oyama</p>
            <Link href="/zainullah-profile">
              <button className={leaderStyles.profileBtn}>Read Full Profile</button>
            </Link>
          </div>
        </div>
      </section>


      {/* Awards Slider Section */}
      <section className={styles.awardsSliderSection}>
        <h2>Awards and Certifications</h2>
        <AwardsSlider /> {/* Add the slider here */}
      </section>

      {/* Courses Overview Section with Tabs */}
      <section className={styles.coursesOverview} id="courses">
        <h2>Our Karate Courses</h2>
        <CourseTabs /> {/* Add the CourseTabs component here */}

        <div className={styles.viewCoursesBtnContainer}>
          <Link href="/classes">
            <button className={styles.viewCoursesBtn}>View Full Courses</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
