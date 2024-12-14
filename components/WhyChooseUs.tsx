// components/WhyChooseUs.tsx
import { FaTrophy, FaPeopleArrows, FaBrain, FaHandsHelping } from 'react-icons/fa';
import styles from '../styles/WhyChooseUs.module.css'; // Import the new CSS module

const WhyChooseUs = () => {
  return (
    <section className={styles['tabs-section']}>
      <h2>Why Choose Us?</h2>
      <div className={styles['tabs-container']}>
        {/* Tab 1: Expert Guidance */}
        <div className={styles.tab}>
          <FaTrophy size={40} />
          <h3>PUSH YOUR LIMITS FORWARD</h3>
          <p>
            Train under the leadership of Master Daud Oyama, a 5th Dan Karate champion. Benefit from his extensive experience and personalized coaching to enhance your skills and confidence in martial arts.
          </p>
        </div>

        {/* Tab 2: Community Focus */}
        <div className={styles.tab}>
          <FaPeopleArrows size={40} />
          <h3>Community Focus</h3>
          <p>
            Join a supportive community that fosters friendship, respect, and growth. Our club is a place where you can connect with fellow karate enthusiasts and thrive together.
          </p>
        </div>

        {/* Tab 3: Holistic Development */}
        <div className={styles.tab}>
          <FaBrain size={40} />
          <h3>Holistic Development</h3>
          <p>
            Experience a well-rounded approach to training that not only improves physical fitness but also enhances mental discipline and personal development.
          </p>
        </div>

        {/* Tab 4: Proven Track Record */}
        <div className={styles.tab}>
          <FaHandsHelping size={40} />
          <h3>Proven Track Record</h3>
          <p>
            With numerous successful students and championship titles, our club has a history of excellence in the Kyokushin community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
