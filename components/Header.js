'use client'; // Ensure client-side code

import Image from 'next/image'; // Importing Next.js Image component
import Link from 'next/link'; // For navigation
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/classes">Classes</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/our-team">Our Team</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
