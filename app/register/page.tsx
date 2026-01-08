'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/Auth.module.css';

export default function RegisterPage() {
  const { t, locale } = useLocale();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = t.auth.errors.required;
    if (!formData.lastName) newErrors.lastName = t.auth.errors.required;
    
    if (!formData.email) {
      newErrors.email = t.auth.errors.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.auth.errors.email;
    }
    
    if (!formData.password) {
      newErrors.password = t.auth.errors.required;
    } else if (formData.password.length < 8) {
      newErrors.password = t.auth.errors.password;
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.auth.errors.passwordMatch;
    }
    
    if (!formData.terms) {
      newErrors.terms = t.auth.errors.required;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(locale === 'en' ? 'Account created successfully!' : 'تم إنشاء الحساب بنجاح!');
    }
  };

  return (
    <div className={styles.page}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>{t.auth.register.title}</h1>
          <p className={styles.subtitle}>{t.auth.register.subtitle}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t.auth.register.firstName}</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
              />
              {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t.auth.register.lastName}</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.auth.register.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="example@email.com"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.auth.register.password}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.auth.register.confirmPassword}</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={`${styles.checkbox} ${errors.terms ? styles.checkboxError : ''}`}>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <span>{t.auth.register.terms}</span>
            </label>
            {errors.terms && <span className={styles.error}>{errors.terms}</span>}
          </div>

          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.auth.register.button}
          </motion.button>
        </form>

        <p className={styles.switchAuth}>
          {t.auth.register.hasAccount}{' '}
          <Link href="/login" className={styles.switchLink}>
            {t.auth.register.login}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
