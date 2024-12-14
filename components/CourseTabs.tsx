// Add this line at the top of the file
'use client'; 

import { useState } from 'react';
import styles from '../styles/CourseTabs.module.css';
import { FaChild, FaUsers, FaAward, FaFemale } from 'react-icons/fa'; // Importing icons

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("kids"); // Default active tab is "kids"

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Change active tab
  };

  return (
    <div className={styles.tabsContainer}>
      <h2 className={styles.coursesTitle}>Our Karate Courses</h2>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={styles.tabButton}
          onClick={() => handleTabClick("kids")}
        >
          <FaChild />
          Kids Karate
        </button>
        <button
          className={styles.tabButton}
          onClick={() => handleTabClick("adult")}
        >
          <FaUsers />
          Adult Karate
        </button>
        <button
          className={styles.tabButton}
          onClick={() => handleTabClick("blackBelt")}
        >
          <FaAward />
          Black Belt Course
        </button>
        <button
          className={styles.tabButton}
          onClick={() => handleTabClick("women")}
        >
          <FaFemale />
          Women’s Self-Defense
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Kids Karate */}
        {activeTab === "kids" && (
          <div className={styles.tabPanel}>
            <h3>Kids Karate</h3>
            <p>Introduce your children to the world of discipline and focus through Kyokushinkai Karate. Our program is tailored to help kids develop respect, responsibility, and self-discipline.</p>
          </div>
        )}

        {/* Adult Karate */}
        {activeTab === "adult" && (
          <div className={styles.tabPanel}>
            <h3>Adult Karate</h3>
            <p>Learn self-defense, improve fitness, and master karate techniques. Our adult programs are designed to help you grow in strength, both mentally and physically, while learning valuable life skills.</p>
          </div>
        )}

        {/* Black Belt Course */}
        {activeTab === "blackBelt" && (
          <div className={styles.tabPanel}>
            <h3>Black Belt Course</h3>
            <p>Prepare to earn your black belt with advanced karate techniques and self-discipline training. Our expert instructors will guide you through this intense and rewarding journey.</p>
          </div>
        )}

        {/* Women’s Self-Defense */}
        {activeTab === "women" && (
          <div className={styles.tabPanel}>
            <h3>Women’s Self-Defense</h3>
            <p>Empower yourself with practical self-defense skills. This course focuses on helping women build confidence and strength, teaching techniques to protect themselves in any situation.</p>
          </div>
        )}
      </div>
    </div>
  );
}
