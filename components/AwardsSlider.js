// components/AwardsSlider.js
'use client'; // Ensure this file is treated as a client component

import { useState } from 'react';
import styles from '../styles/AwardsSlider.module.css'; // Importing the CSS file for styling

const awardsData = [
  {
    title: "Dan-5",
    description: "Dan ID Card",
    imageUrl: "/images/awards-cert/award1.jpg"
  },
  {
    title: "Coaching Diploma",
    description: "Awarded from the Kyokushinkai Karate Sabakido",
    imageUrl: "/images/awards-cert/award2.jpg"
  },
  {
    title: "Certificate of Country Representative",
    description: "Certificate of Authorization Country Representative F.I.K.K",
    imageUrl: "/images/awards-cert/award3.jpg"
  },

  {
    title: "Coaching Diploma",
    description: "Awarded from the Kyokushinkai Karate Sabakido",
    imageUrl: "/images/awards-cert/award4.jpg"
  },

  {
    title: "Certificate of Country Representative",
    description: "Awarded from the Kyokushinkai Karate Sabakido",
    imageUrl: "/images/awards-cert/award5.jpg"
  },

  // Add more award items as needed
];

const AwardsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        <img
          src={awardsData[currentIndex].imageUrl}
          alt={awardsData[currentIndex].title}
          className={styles.awardImage}
        />
        <div className={styles.awardDetails}>
          <h3 className={styles.awardTitle}>{awardsData[currentIndex].title}</h3>
          <p className={styles.awardDescription}>{awardsData[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button className={styles.prevButton} onClick={goToPrev}>
        &#8249; Prev
      </button>
      <button className={styles.nextButton} onClick={goToNext}>
        Next &#8250;
      </button>
    </div>
  );
};

export default AwardsSlider;
