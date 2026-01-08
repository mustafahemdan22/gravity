'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getNewArrivals } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/NewArrivals.module.css';

export default function NewArrivals() {
  const { t } = useLocale();
  const newArrivals = getNewArrivals().slice(0, 8);

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{t.home.newArrivals.title}</h2>
            <p className={styles.subtitle}>{t.home.newArrivals.subtitle}</p>
          </div>
          <Link href="/shop?filter=new" className={styles.viewAll}>
            {t.product.viewDetails}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

        <div className={styles.grid}>
          {newArrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
