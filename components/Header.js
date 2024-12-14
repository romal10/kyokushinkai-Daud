"use client";  // Marking this file as a client component

import Image from 'next/image'; // Importing Next.js Image component
import Link from 'next/link'; // For navigation
import { useState } from 'react'; // Importing useState hook
import styles from '../styles/Header.module.css'; // Importing the CSS for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/classes">Classes</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/team">Our Team</Link></li>
          <li className={styles.dropdown}>
            <span>Pages</span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/branches">Branches</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/info">Info</Link></li>
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Burger Menu */}
      <div className={styles.burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
