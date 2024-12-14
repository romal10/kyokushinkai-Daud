// pages/index.tsx

import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseUs from '../components/WhyChooseUs';  // Import the new section
import AwardsSlider from '../components/AwardsSlider'; // Import the new slider component
import CourseTabs from '../components/CourseTabs';  // Import the CourseTabs component
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
        {/* Leadership Info... */}
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
