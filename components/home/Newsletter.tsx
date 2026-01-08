'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/Newsletter.module.css';

export default function Newsletter() {
  const { t, locale } = useLocale();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t.home.newsletter.title}</h2>
            <p className={styles.subtitle}>{t.home.newsletter.subtitle}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.home.newsletter.placeholder}
                className={styles.input}
                required
              />
              <motion.button
                type="submit"
                className={styles.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.home.newsletter.button}
              </motion.button>
            </div>
            
            {isSubmitted && (
              <motion.p
                className={styles.success}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ {t.home.newsletter.success}
              </motion.p>
            )}
          </form>

          {/* Decorative Elements */}
          <div className={styles.decorations}>
            <motion.div
              className={styles.decoration1}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className={styles.decoration2}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
