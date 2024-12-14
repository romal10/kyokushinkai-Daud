"use client"; // Add this line at the top

import Image from 'next/image'; // Importing Next.js Image component
import Link from 'next/link'; // For navigation
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
      </div>
      <div className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/classes">Classes</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/our-team">Our Team</Link>
          </li>
          <li className={styles.dropdown}>
            <Link href="#">Pages <span className={styles.dropdownIcon}>▼</span></Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/branches">Branches</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/info">Info</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
