'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/Promotions.module.css';

export default function Promotions() {
  const { locale } = useLocale();

  const promos = [
    {
      id: 1,
      title: locale === 'en' ? 'Summer Sale' : 'تخفيضات الصيف',
      subtitle: locale === 'en' ? 'Up to 50% Off' : 'خصم يصل إلى 50%',
      description: locale === 'en' 
        ? 'Discover amazing deals on summer essentials'
        : 'اكتشف عروض رائعة على أساسيات الصيف',
      cta: locale === 'en' ? 'Shop Sale' : 'تسوق العروض',
      href: '/shop?sale=true',
      gradient: 'linear-gradient(135deg, #e94560, #ff6b6b)',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
    },
    {
      id: 2,
      title: locale === 'en' ? 'New Collection' : 'مجموعة جديدة',
      subtitle: locale === 'en' ? 'Just Arrived' : 'وصلت للتو',
      description: locale === 'en' 
        ? 'Check out our latest styles for the season'
        : 'اطلع على أحدث موديلاتنا للموسم',
      cta: locale === 'en' ? 'Explore' : 'استكشف',
      href: '/shop?filter=new',
      gradient: 'linear-gradient(135deg, #16213e, #0f3460)',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={styles.cardBackground}
                style={{ background: promo.gradient }}
              />
              <div 
                className={styles.cardImage}
                style={{ backgroundImage: `url(${promo.image})` }}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <span className={styles.subtitle}>{promo.subtitle}</span>
                <h3 className={styles.title}>{promo.title}</h3>
                <p className={styles.description}>{promo.description}</p>
                <Link href={promo.href} className={styles.cta}>
                  {promo.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
