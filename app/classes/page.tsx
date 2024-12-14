// pages/classes.tsx
import Link from 'next/link';
import styles from '../../styles/Classes.module.css'; // Go up one level to styles folder

export default function ClassesPage() {
  return (
    <div className={styles.classesPage}>
      <h1 className={styles.pageTitle}>Our Classes</h1>

      {/* Kids Karate Class */}
      <div className={styles.classSection}>
        <img src="/images/courses/kids-karate.jpg" alt="Kids Karate" className={styles.classImage} />
        <div className={styles.classInfo}>
          <h2>Kids Karate</h2>
          <p>
            Introduce your children to the world of discipline and focus through Kyokushinkai Karate. 
            Our kids' program emphasizes physical fitness, respect, and mental growth while learning 
            the techniques of this martial art.
          </p>
          <ul>
            <li><strong>Duration</strong> 3 months</li>
            <li><strong>Age Group</strong> 5-12 years</li>
            <li><strong>Frequency</strong> 2-3 times a week</li>
          </ul>
          <Link href="/book-kids-karate">
            <button className={styles.bookBtn}>Book Kids Karate</button>
          </Link>
        </div>
      </div>

      {/* Adult Karate Class */}
      <div className={styles.classSection}>
        <img src="/images/courses/adult-karate.jpg" alt="Adult Karate" className={styles.classImage} />
        <div className={styles.classInfo}>
          <h2>Adult Karate</h2>
          <p>
            Learn self-defense, improve fitness, and master karate techniques with our adult programs. 
            This class is perfect for those looking to increase strength, agility, and mental focus.
          </p>
          <ul>
            <li><strong>Duration</strong> 6 months</li>
            <li><strong>Age Group</strong> 18+ years</li>
            <li><strong>Frequency</strong> 3 times a week</li>
          </ul>
          <Link href="/book-adult-karate">
            <button className={styles.bookBtn}>Book Adult Karate</button>
          </Link>
        </div>
      </div>

      {/* Black Belt Course */}
      <div className={styles.classSection}>
        <img src="/images/courses/black-belt-course.jpg" alt="Black Belt Course" className={styles.classImage} />
        <div className={styles.classInfo}>
          <h2>Black Belt Course</h2>
          <p>
            Prepare to earn your black belt with advanced karate techniques and self-discipline training. 
            This course is for individuals dedicated to achieving mastery and the highest level of expertise.
          </p>
          <ul>
            <li><strong>Duration</strong> 1 year</li>
            <li><strong>Age Group</strong> 16+ years</li>
            <li><strong>Frequency</strong> 4 times a week</li>
          </ul>
          <Link href="/book-black-belt">
            <button className={styles.bookBtn}>Book Black Belt Course</button>
          </Link>
        </div>
      </div>

      {/* Women's Self-Defense */}
      <div className={styles.classSection}>
        <img src="/images/courses/womens-self-defense.jpg" alt="Women’s Self-Defense" className={styles.classImage} />
        <div className={styles.classInfo}>
          <h2>Women’s Self-Defense</h2>
          <p>
            Empower yourself with practical self-defense skills taught through Kyokushinkai Karate. 
            Our women's self-defense course focuses on real-world techniques and confidence-building.
          </p>
          <ul>
            <li><strong>Duration</strong> 2 months</li>
            <li><strong>Age Group</strong> 18+ years</li>
            <li><strong>Frequency</strong> 1-2 times a week</li>
          </ul>
          <Link href="/book-self-defense">
            <button className={styles.bookBtn}>Book Self-Defense</button>
          </Link>
        </div>
      </div>

      {/* Additional Courses can be added similarly */}
    </div>
  );
}
