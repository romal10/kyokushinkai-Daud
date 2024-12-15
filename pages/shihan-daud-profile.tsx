import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Profile.module.css';

const ShihanDaudProfile = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const profileText = `Shihan Daud Oyama is an internationally recognized 5th Dan Karate champion and the Country Director of F.I.K.K. (Federation of International Kyokushinkai Karate) in Italy. He is committed to spreading the discipline of Kyokushinkai Karate across the world. Shihan Daud's expertise and passion for teaching have made him a revered figure in the martial arts community. He has trained hundreds of students worldwide, inspiring them to pursue excellence, discipline, and focus. His dedication to the martial art extends beyond just physical training—he embodies the true spirit of Kyokushinkai.`;

  // Image data for gallery (you can add more images here)
  const images = [
    "/images/gallery-slider-daud/1-1.jpg",
    "/images/gallery-slider-daud/1.jpg",
    "/images/gallery-slider-daud/2-2.jpg",
    "/images/gallery-slider-daud/2.jpg",
    "/images/gallery-slider-daud/3.jpg",
    "/images/gallery-slider-daud/4.jpg",
    "/images/gallery-slider-daud/5.jpg",
    "/images/gallery-slider-daud/6.jpg",
    "/images/gallery-slider-daud/7.jpg",
    "/images/gallery-slider-daud/8.jpg",
    "/images/gallery-slider-daud/9.jpg",
    "/images/gallery-slider-daud/10.jpg",
    "/images/gallery-slider-daud/11.jpg",
    "/images/gallery-slider-daud/12.jpg",
    "/images/gallery-slider-daud/13.jpg",
    "/images/gallery-slider-daud/14.jpg",
    "/images/gallery-slider-daud/15.jpg",
    "/images/gallery-slider-daud/16.jpg",
    "/images/gallery-slider-daud/17.jpg",
    "/images/gallery-slider-daud/18.jpg",
    "/images/gallery-slider-daud/19.jpg",
    "/images/gallery-slider-daud/20.jpg",
    "/images/gallery-slider-daud/21.jpg",
    "/images/gallery-slider-daud/22.jpg",
    "/images/gallery-slider-daud/23.jpg",
    "/images/gallery-slider-daud/24.jpg",
    "/images/gallery-slider-daud/25.jpg",
    "/images/gallery-slider-daud/26.jpg",
    "/images/gallery-slider-daud/27.jpg",
    "/images/gallery-slider-daud/28.jpg",
    "/images/gallery-slider-daud/29.jpg",
    "/images/gallery-slider-daud/30.jpg",
    "/images/gallery-slider-daud/31.jpg",
    "/images/gallery-slider-daud/32.jpg",
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
          <p className={styles.position}>5th Dan Karate Champion & Country Director of F.I.K.K. Italy</p>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className={styles.socialMediaLinks}>
        <a href="https://www.facebook.com/ShihanDaud" target="_blank" className={styles.socialMediaLink}><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/ShihanDaud" target="_blank" className={styles.socialMediaLink}><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/ShihanDaud" target="_blank" className={styles.socialMediaLink}><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/ShihanDaud" target="_blank" className={styles.socialMediaLink}><i className="fab fa-linkedin"></i></a>
      </div>

      <div className={styles.profileText}>
        <p>{showFullText ? profileText : `${profileText.substring(0, 200)}...`}</p>
        <button onClick={toggleText} className={styles.readMoreBtn}>
          {showFullText ? 'Show Less' : 'Read More'}
        </button>
      </div>

      {/* Biography Section */}
      <div className={styles.biography}>
        <h2>Biography</h2>
        <p>Shihan Daud Oyama's journey in Kyokushinkai Karate began at a young age, studying under Master Masutatsu Oyama. With dedication and rigorous training, he quickly rose through the ranks, earning his 5th Dan. Today, he is a globally respected figure in martial arts and a mentor to many students.</p>
      </div>
      
      {/* Achievements Section */}
      <div className={styles.achievements}>
        <h2>Achievements</h2>
        <ul>
          <li>5th Dan Black Belt in Kyokushinkai Karate</li>
          <li>Founder and Owner of F.I.K.K. (Federation of International Kyokushinkai Karate)</li>
          <li>Multiple National and International Karate Championship titles</li>
          <li>Trainer to numerous successful Karateka across the world</li>
          <li>Recognized for contributing to the global spread of Kyokushinkai Karate</li>
        </ul>
      </div>

      {/* Martial Arts Philosophy */}
      <div className={styles.philosophy}>
        <h2>Martial Arts Philosophy</h2>
        <p>Shihan Daud believes that Karate is not just a martial art but a way of life. He emphasizes discipline, respect, perseverance, and mental fortitude. His teaching focuses on both physical and philosophical aspects of Kyokushinkai Karate, with an emphasis on the importance of balance, humility, and inner peace.</p>
      </div>

      {/* Personal Training */}
      <div className={styles.personalTraining}>
        <h2>Personal Training</h2>
        <p>Shihan Daud offers personal training sessions for students of all levels, focusing on perfecting technique, building strength, and achieving mental clarity. Whether you're a beginner or an advanced practitioner, his personalized approach ensures that you achieve your fullest potential in Karate.</p>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.imageSlider}>
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
        </div>
      </div>

      <Link href="/">
        <button className={styles.backBtn}>Back to Home</button>
      </Link>
    </div>
  );
};

export default ShihanDaudProfile;
