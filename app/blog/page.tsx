'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogs';
import { useLocale, getLocalizedText } from '@/context/LocaleContext';
import styles from '@/styles/Blog.module.css';

export default function BlogPage() {
  const { t, locale } = useLocale();

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
            <h1 className={styles.heroTitle}>{t.blog.title}</h1>
            <p className={styles.heroSubtitle}>{t.blog.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post, index) => {
              const title = locale === 'ar' ? post.titleAr : post.title;
              const excerpt = locale === 'ar' ? post.excerptAr : post.excerpt;
              const author = locale === 'ar' ? post.authorAr : post.author;
              const category = locale === 'ar' ? post.categoryAr : post.category;

              return (
                <motion.article
                  key={post.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={post.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.image}
                      />
                      <span className={styles.category}>{category}</span>
                    </div>
                    <div className={styles.content}>
                      <h2 className={styles.title}>{title}</h2>
                      <p className={styles.excerpt}>{excerpt}</p>
                      <div className={styles.meta}>
                        <span>{t.blog.by} {author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}</span>
                      </div>
                      <span className={styles.readMore}>
                        {t.blog.readMore}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
