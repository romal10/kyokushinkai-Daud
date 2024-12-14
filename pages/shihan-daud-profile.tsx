import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Profile.module.css';

const ShihanDaudProfile = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const profileText = `Shihan Daud Oyama is an internationally recognized 5th Dan Karate champion and the owner of F.I.K.K. He is committed to spreading the discipline of Kyokushinkai Karate across the world. Shihan Daud's expertise and passion for teaching have made him a revered figure in the martial arts community. He has trained hundreds of students worldwide, inspiring them to pursue excellence, discipline, and focus. His dedication to the martial art extends beyond just physical training—he embodies the true spirit of Kyokushinkai.`;

  // Image data for gallery (you can add more images here)
  const images = [
    "/images/gallery-slider-daud/1.jpg",
    "/images/gallery-slider-daud/2.jpg",
    "/images/gallery-slider-daud/3.jpg",
    "/images/gallery-slider-daud/4.jpg",
  ];

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src="/images/shihan-daud.jpg" alt="Shihan Daud Oyama" className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <h1>Shihan Daud Oyama</h1>
          <p className={styles.position}>5th Dan Karate Champion & Country Representative of F.I.K.K. Afghanistan</p>
        </div>
      </div>

      <div className={styles.profileText}>
        <p>{showFullText ? profileText : `${profileText.substring(0, 200)}...`}</p>
        <button onClick={toggleText} className={styles.readMoreBtn}>
          {showFullText ? 'Show Less' : 'Read More'}
        </button>
      </div>

      {/* Gallery Section moved above Reviews */}
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.imageSlider}>
          {/* Display the current image based on the index */}
          <img
            src={images[currentImageIndex]}
            alt={`Gallery Image ${currentImageIndex + 1}`}
            className={styles.sliderImage}
          />
          <div className={styles.navigation}>
            <button onClick={prevImage} className={styles.prevBtn}>Previous</button>
            <button onClick={nextImage} className={styles.nextBtn}>Next</button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviews}>
        <h2>Reviews & Ratings</h2>
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <p>(5.0) Based on 150 reviews</p>
        </div>
        <div className={styles.comments}>
          <h3>Recent Comments</h3>
          <div className={styles.comment}>
            <p><strong>Ali Reza</strong>: "Shihan Daud's teachings have been transformative for me. His discipline and philosophy inspire me every day." </p>
          </div>
          <div className={styles.comment}>
            <p><strong>Karim Wali</strong>: "An incredible martial artist and a mentor who has shaped my journey. Highly recommend training with him!"</p>
          </div>
          <div className={styles.comment}>
            <p><strong>Hassan Tariq</strong>: "Shihan Daud is one of the finest Karate instructors in the world. His passion is unmatched." </p>
          </div>
          <div className={styles.comment}>
            <p><strong>Ayesha Makhdoom</strong>: "Training under Shihan Daud has been an honor. His leadership is second to none." </p>
          </div>
        </div>
      </div>

      <Link href="/">
        <button className={styles.backBtn}>Back to Home</button>
      </Link>
    </div>
  );
};

export default ShihanDaudProfile;
