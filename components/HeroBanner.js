import Image from 'next/image'; // Importing Next.js Image component
import styles from "../styles/HeroBanner.module.css"; // Importing the CSS file for styling

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      {/* Hero Image */}
      <div className={styles.heroImageWrapper}>
        <Image
          src="/images/hero-jpg/hero.jpg" // Path to the image in the public folder
          alt="Hero Image"
          layout="fill" // Ensures the image covers the whole section
          objectFit="cover" // Ensures the image covers the section without distortion
        />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Shape your Body</h1>
        <p className={styles.subtitle}>
          <span className={styles.boldText}>Be Strong!</span>
          <br />
          Train Hard!
        </p>
        
        {/* Button for More Info */}
        <button className={styles.heroButton}>Explore More</button>
      </div>
    </div>
  );
};

export default HeroBanner;
