'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useLocale, getLocalizedText } from '@/context/LocaleContext';
import ProductCard from '@/components/product/ProductCard';
import styles from '@/styles/Wishlist.module.css';

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();
  const { t, locale } = useLocale();

  if (items.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.emptyIcon}>❤️</div>
          <h1 className={styles.emptyTitle}>{t.wishlist.empty}</h1>
          <Link href="/shop" className={styles.shopButton}>
            {t.cart.continueShopping}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>
            {t.wishlist.title} ({items.length})
          </h1>
          <button className={styles.clearButton} onClick={clearWishlist}>
            {locale === 'en' ? 'Clear All' : 'مسح الكل'}
          </button>
        </motion.div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <ProductCard key={item.product.id} product={item.product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
