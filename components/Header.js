'use client'; // Ensure client-side code

import Image from 'next/image'; // Importing Next.js Image component
import Link from 'next/link'; // For navigation
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked (on mobile)
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false); // Close the menu on mobile
    }
  };

  // Add Font Awesome script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js';
    script.onload = () => console.log('Font Awesome loaded');
    document.body.appendChild(script);
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Mobile burger icon */}
      <div className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/classes" onClick={closeMenu}>Classes</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/our-team" onClick={closeMenu}>Our Team</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" target="_blank" className={styles.socialIcon}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className={styles.socialIcon}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" className={styles.socialIcon}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" className={styles.socialIcon}>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
