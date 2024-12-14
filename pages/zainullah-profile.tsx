import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Profile.module.css';

const ZainullahProfile = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const profileText = `Zainullah, an Assistant to Shihan Daud Oyama, holds a 2nd Dan in Karate and plays an essential role in assisting with training, mentorship, and supporting the growth of the Kyokushinkai community worldwide. With his experience and dedication, Zainullah has been instrumental in helping students reach their full potential in the martial art, promoting discipline, strength, and mental clarity. His passion for Kyokushinkai Karate continues to drive him as he works alongside Shihan Daud to elevate the standards of excellence in martial arts training.`;

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src="/images/zainullah.jpg" alt="Zainullah" className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <h1>Zainullah</h1>
          <p className={styles.position}>2nd Dan Karate and Assistant to Shihan Daud Oyama</p>
        </div>
      </div>

      <div className={styles.profileText}>
        <p>{showFullText ? profileText : `${profileText.substring(0, 200)}...`}</p>
        <button onClick={toggleText} className={styles.readMoreBtn}>
          {showFullText ? 'Show Less' : 'Read More'}
        </button>
      </div>

      <div className={styles.reviews}>
        <h2>Reviews & Ratings</h2>
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <p>(4.9) Based on 120 reviews</p>
        </div>
        <div className={styles.comments}>
          <h3>Recent Comments</h3>
          <div className={styles.comment}>
            <p><strong>Ahmad Shah</strong>: "Zainullah's guidance has been invaluable. His support during training sessions is second to none!"</p>
          </div>
          <div className={styles.comment}>
            <p><strong>Fatima Noor</strong>: "Zainullah’s dedication to the art of Karate is inspiring. He’s an incredible mentor!"</p>
          </div>
          <div className={styles.comment}>
            <p><strong>Reza Khan</strong>: "A true professional! Zainullah has been a key part of my growth in Kyokushinkai." </p>
          </div>
          <div className={styles.comment}>
            <p><strong>Sara Gul</strong>: "I’ve learned so much from Zainullah’s attention to detail and encouragement during training." </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.imageSlider}>
          <img src="/images/gallery-slider-zainullah/1.jpg" alt="Gallery Image 1" className={styles.sliderImage} />
          <div className={styles.navigation}>
            <button className={styles.prevBtn}>Previous</button>
            <button className={styles.nextBtn}>Next</button>
          </div>
        </div>
      </div>

      <Link href="/">
        <button className={styles.backBtn}>Back to Home</button>
      </Link>
    </div>
  );
};

export default ZainullahProfile;
