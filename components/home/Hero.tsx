'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const { t, isRTL } = useLocale();

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOverlay} />
        <div className={styles.pattern} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ✨ New Collection 2026
            </motion.span>

            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t.home.hero.title}
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.home.hero.subtitle}
            </motion.p>

            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="/shop" className={styles.primaryButton}>
                {t.home.hero.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/category/women" className={styles.secondaryButton}>
                {t.home.hero.secondary}
              </Link>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>50k+</span>
                <span className={styles.statLabel}>Customers</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>4.9</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageCard}>
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                  alt="Fashion Model"
                  className={styles.heroImage}
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                className={`${styles.floatingCard} ${styles.floatingCard1}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className={styles.floatingIcon}>👗</span>
                <span>New Arrivals</span>
              </motion.div>

              <motion.div
                className={`${styles.floatingCard} ${styles.floatingCard2}`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className={styles.floatingIcon}>🔥</span>
                <span>Trending</span>
              </motion.div>

              <motion.div
                className={`${styles.floatingCard} ${styles.floatingCard3}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className={styles.floatingIcon}>⭐</span>
                <span>Best Sellers</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
