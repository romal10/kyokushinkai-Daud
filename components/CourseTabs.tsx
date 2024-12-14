"use client"; // Indicate that this is a client-side component

import { useState } from 'react';
import styles from '../styles/CourseTabs.module.css';
import { FaChild, FaUsers, FaAward, FaFemale } from 'react-icons/fa'; // Importing icons

const CourseTabs = () => {
  // Use state to track the active tab
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    // Toggle the tab description visibility
    if (activeTab === tab) {
      setActiveTab(null); // If already active, hide it
    } else {
      setActiveTab(tab); // Show the clicked tab's description
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <h2 className={styles.coursesTitle}>Our Karate Courses</h2>
      
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'kids' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('kids')}
        >
          <FaChild className={styles.tabIcon} />
          Kids Karate
        </button>

        <button
          className={`${styles.tabButton} ${activeTab === 'adult' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('adult')}
        >
          <FaUsers className={styles.tabIcon} />
          Adult Karate
        </button>

        <button
          className={`${styles.tabButton} ${activeTab === 'blackBelt' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('blackBelt')}
        >
          <FaAward className={styles.tabIcon} />
          Black Belt Course
        </button>

        <button
          className={`${styles.tabButton} ${activeTab === 'women' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('women')}
        >
          <FaFemale className={styles.tabIcon} />
          Women’s Self-Defense
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === 'kids' && (
          <div className={styles.tabPanel}>
            <h3>Karate for Kids: Guided by Shihan Daud Oyama, 5th Dan Champion</h3>
            <p>Shihan Daud Oyama, a 5th Dan Champion and one of Afghanistan's most esteemed karate masters, 
                offers a specialized kids' karate program that builds discipline, confidence, and physical fitness. 
                With his professional training and decades of experience, Shihan Oyama provides children with the 
                essential foundations of Kyokushin Kai Karate, fostering both martial arts skills and life values.</p>

            <img
              src="/images/courses/kids-karate.jpg" // Image path for Kids Karate
              alt="Kids Karate"
              className={styles.courseImage}
            />
          </div>
        )}

        {activeTab === 'adult' && (
          <div className={styles.tabPanel}>
            <h3>Adult Karate: A Path to Fitness, Discipline, and Self-Empowerment</h3>
            <p>Under the expert guidance of Shihan Daud Oyama, a 5th Dan Champion, adult karate offers a unique opportunity 
                for individuals to transform their lives both physically and mentally. This program is designed to help adults 
                improve their overall fitness by developing strength, flexibility, and endurance through structured training. 
                Beyond the physical benefits, adult karate serves as a powerful tool for stress relief and mental clarity, promoting 
                focus and mindfulness in a fast-paced world. Participants also build self-confidence and discipline by mastering techniques 
                and achieving personal goals. Furthermore, Shihan Oyama’s program equips adults with practical self-defense skills, enhancing 
                personal safety and peace of mind. Whether you are seeking to enhance your physical health, develop mental resilience, 
                or embrace a rewarding challenge, adult karate provides a well-rounded path to growth and empowerment, all in a 
                supportive and inspiring environment.</p>

            <img
              src="/images/courses/adult-karate.jpg" // Image path for Adult Karate
              alt="Adult Karate"
              className={styles.courseImage}
            />
          </div>
        )}

        {activeTab === 'blackBelt' && (
          <div className={styles.tabPanel}>
            <h3>Black Belt Courses: Mastery and Excellence with Shihan Daud Oyama</h3>
            <p>The Black Belt courses offered by Shihan Daud Oyama, a 5th Dan Champion, are designed for serious martial artists aspiring to reach the 
                pinnacle of their karate journey. These advanced courses emphasize mastery of Kyokushin Kai Karate techniques, enhanced physical conditioning, 
                and a deep understanding of the discipline’s philosophy and traditions. Under Shihan Oyama’s expert mentorship, students refine their skills, 
                improve their endurance, and develop the mental resilience required to achieve the prestigious rank of Black Belt. The training is rigorous yet 
                rewarding, focusing on self-discipline, leadership, and personal excellence. This course is not just a test of physical ability but also a 
                transformative journey that instills confidence, respect, and a profound sense of accomplishment. Enroll today to take the ultimate step toward 
                becoming a true karate master under the guidance of a world-class instructor.</p>
            <img
              src="/images/courses/black-belt-course.jpg" // Image path for Black Belt Course
              alt="Black Belt Course"
              className={styles.courseImage}
            />
          </div>
        )}

        {activeTab === 'women' && (
          <div className={styles.tabPanel}>
            <h3>Women’s Self-Defense: Empowerment and Safety with Shihan Daud Oyama</h3>
            <p>Shihan Daud Oyama, a 5th Dan Champion, offers a specialized Women’s Self-Defense course designed to empower women with practical skills and 
                confidence to protect themselves in real-life situations. This course focuses on teaching situational awareness, effective self-defense techniques, 
                and the mental preparedness needed to handle potential threats. Under Shihan Oyama’s expert guidance, participants learn strategies to neutralize 
                physical confrontations, improve their reflexes, and build physical strength and agility. The program is tailored to suit women of all fitness levels,
                 ensuring an inclusive and supportive environment. Beyond self-defense, this course instills a sense of empowerment, boosting self-confidence and 
                 resilience in everyday life. Join this transformative journey and gain the knowledge and skills to feel safe and secure under the mentorship of a 
                 world-class instructor.</p>
            <img
              src="/images/courses/womens-self-defense.jpg" // Image path for Women's Self-Defense
              alt="Women’s Self-Defense"
              className={styles.courseImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTabs;
