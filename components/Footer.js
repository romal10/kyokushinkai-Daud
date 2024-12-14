'use client'; // Ensure client-side code

import styles from '../styles/Footer.module.css'; // CSS for the footer

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerDescription}>
          <h2>Empowering our community through the art of Kyokushin Karate.</h2>
          <p>Dedicated to empowering our community through the art of International Federation of Karate Kyokushinkai (F.I.K.K).</p>

        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        <div className={styles.recentPosts}>
          <h3>Latest News</h3>
          <ul>
            <li><a href="/fitness-depression">How Physical Fitness Helps Prevent Depression and Anxiety</a><span>3 min read | 20 Comments</span></li>
            <li><a href="/fitness-belly-fat">The Best Exercises to Lose Belly Fat and Tone Your Body</a><span>3 min read | 20 Comments</span></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Kyokushin Karate | All rights reserved | Powered by DX Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
