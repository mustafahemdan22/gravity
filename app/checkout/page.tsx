'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useLocale } from '@/context/LocaleContext';
import { formatPrice } from '@/lib/utils';
import styles from '@/styles/Checkout.module.css';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { t, locale } = useLocale();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    paymentMethod: 'card',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className={styles.emptyCheckout}>
        <div className={styles.emptyIcon}>🛒</div>
        <h1>{locale === 'en' ? 'Your cart is empty' : 'سلتك فارغة'}</h1>
        <Link href="/shop" className={styles.shopButton}>
          {t.cart.continueShopping}
        </Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className={styles.successPage}>
        <motion.div
          className={styles.successContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.successTitle}>
            {locale === 'en' ? 'Order Placed Successfully!' : 'تم تأكيد الطلب بنجاح!'}
          </h1>
          <p className={styles.successMessage}>
            {locale === 'en' 
              ? 'Thank you for your order. You will receive a confirmation email shortly.'
              : 'شكراً لطلبك. ستتلقى رسالة تأكيد بالبريد الإلكتروني قريباً.'}
          </p>
          <Link href="/shop" className={styles.continueButton}>
            {t.cart.continueShopping}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.checkout.title}
        </motion.h1>

        <div className={styles.content}>
          {/* Checkout Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Shipping Information */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.checkout.shipping}</h2>
              
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.firstName}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.lastName}</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{t.checkout.address}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.city}</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.checkout.zip}</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{t.checkout.country}</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">{locale === 'en' ? 'Select Country' : 'اختر الدولة'}</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="EG">Egypt</option>
                </select>
              </div>
            </section>

            {/* Payment Method */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t.checkout.payment}</h2>
              
              <div className={styles.paymentMethods}>
                <label className={`${styles.paymentOption} ${formData.paymentMethod === 'card' ? styles.active : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <span className={styles.paymentIcon}>💳</span>
                  <span>{locale === 'en' ? 'Credit Card' : 'بطاقة ائتمان'}</span>
                </label>
                <label className={`${styles.paymentOption} ${formData.paymentMethod === 'paypal' ? styles.active : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                  />
                  <span className={styles.paymentIcon}>📱</span>
                  <span>PayPal</span>
                </label>
                <label className={`${styles.paymentOption} ${formData.paymentMethod === 'cod' ? styles.active : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <span className={styles.paymentIcon}>💵</span>
                  <span>{locale === 'en' ? 'Cash on Delivery' : 'الدفع عند الاستلام'}</span>
                </label>
              </div>

              <p className={styles.paymentNote}>
                {locale === 'en' 
                  ? '* This is a demo checkout. No actual payment will be processed.'
                  : '* هذا عرض توضيحي. لن تتم معالجة أي دفعة فعلية.'}
              </p>
            </section>

            <motion.button
              type="submit"
              className={styles.placeOrderButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.checkout.placeOrder}
            </motion.button>
          </motion.form>

          {/* Order Summary */}
          <motion.div
            className={styles.summary}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className={styles.summaryTitle}>{t.checkout.orderSummary}</h2>

            <div className={styles.summaryItems}>
              {items.map((item) => {
                const name = locale === 'ar' ? item.product.nameAr : item.product.name;
                return (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.hex}`} className={styles.summaryItem}>
                    <div className={styles.itemImage}>
                      <Image
                        src={item.product.images[0]}
                        alt={name}
                        fill
                        sizes="60px"
                        className={styles.image}
                      />
                      <span className={styles.itemQuantity}>{item.quantity}</span>
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{name}</p>
                      <p className={styles.itemMeta}>
                        {item.selectedSize} / {locale === 'ar' ? item.selectedColor.nameAr : item.selectedColor.name}
                      </p>
                    </div>
                    <span className={styles.itemPrice}>
                      {formatPrice(item.product.price * item.quantity, locale)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={styles.summaryTotals}>
              <div className={styles.summaryRow}>
                <span>{t.cart.subtotal}</span>
                <span>{formatPrice(subtotal, locale)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>{t.cart.shipping}</span>
                <span>{shipping === 0 ? t.cart.free : formatPrice(shipping, locale)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>{t.cart.total}</span>
                <span>{formatPrice(total, locale)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
