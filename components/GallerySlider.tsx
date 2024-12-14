import React, { useState } from 'react';
import styles from '../styles/GallerySlider.module.css';

const GallerySlider = () => {
  const images = [
    '/images/gallery-slider-daud/1.jpg',
    '/images/gallery-slider-daud/2.jpg',
    '/images/gallery-slider-daud/3.jpg',
    '/images/gallery-slider-daud/4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <img src={images[currentImageIndex]} alt="Gallery" className={styles.sliderImage} />
      <div className={styles.navigation}>
        <button onClick={prevImage} className={styles.prevBtn}>Previous</button>
        <button onClick={nextImage} className={styles.nextBtn}>Next</button>
      </div>
    </div>
  );
};

export default GallerySlider;
