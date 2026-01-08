'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/About.module.css';

export default function AboutPage() {
  const { t, locale } = useLocale();

  const values = [
    {
      icon: '✨',
      title: t.about.values.quality,
      description: t.about.values.qualityDesc,
    },
    {
      icon: '👗',
      title: t.about.values.style,
      description: t.about.values.styleDesc,
    },
    {
      icon: '🤝',
      title: t.about.values.service,
      description: t.about.values.serviceDesc,
    },
  ];

  const team = [
    {
      name: locale === 'en' ? 'Sarah Johnson' : 'سارة جونسون',
      role: locale === 'en' ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: locale === 'en' ? 'Michael Chen' : 'مايكل تشن',
      role: locale === 'en' ? 'Creative Director' : 'المدير الإبداعي',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: locale === 'en' ? 'Emily Davis' : 'إيميلي ديفيس',
      role: locale === 'en' ? 'Head of Design' : 'رئيس التصميم',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>{t.about.title}</h1>
            <p className={styles.heroSubtitle}>
              {locale === 'en' 
                ? 'Where Fashion Meets Excellence'
                : 'حيث تلتقي الموضة بالتميز'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
                alt="Our Story"
                fill
                className={styles.image}
              />
            </motion.div>
            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.sectionTitle}>{t.about.story.title}</h2>
              <p className={styles.sectionText}>{t.about.story.content}</p>
              
              <h2 className={styles.sectionTitle}>{t.about.mission.title}</h2>
              <p className={styles.sectionText}>{t.about.mission.content}</p>
              
              <h2 className={styles.sectionTitle}>{t.about.vision.title}</h2>
              <p className={styles.sectionText}>{t.about.vision.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <motion.h2
            className={styles.valuesSectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.about.values.title}
          </motion.h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className="container">
          <motion.h2
            className={styles.teamTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {locale === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا'}
          </motion.h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.teamImage}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
