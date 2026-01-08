'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getBlogPostBySlug, getRecentPosts } from '@/data/blogs';
import { useLocale } from '@/context/LocaleContext';
import styles from '@/styles/BlogPost.module.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const post = getBlogPostBySlug(resolvedParams.slug);
  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== resolvedParams.slug);
  const { t, locale } = useLocale();

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>{locale === 'en' ? 'Post not found' : 'المقال غير موجود'}</h1>
        <Link href="/blog" className={styles.backButton}>
          {locale === 'en' ? 'Back to Blog' : 'العودة للمدونة'}
        </Link>
      </div>
    );
  }

  const title = locale === 'ar' ? post.titleAr : post.title;
  const content = locale === 'ar' ? post.contentAr : post.content;
  const author = locale === 'ar' ? post.authorAr : post.author;
  const category = locale === 'ar' ? post.categoryAr : post.category;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero} style={{ backgroundImage: `url(${post.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.span
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {category}
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className={styles.meta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>{t.blog.by} {author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}</span>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentWrapper}>
          <motion.article
            className={styles.article}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div 
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
            />
          </motion.article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>
                {locale === 'en' ? 'Recent Posts' : 'أحدث المقالات'}
              </h3>
              <div className={styles.recentPosts}>
                {recentPosts.map((recentPost) => (
                  <Link
                    key={recentPost.id}
                    href={`/blog/${recentPost.slug}`}
                    className={styles.recentPost}
                  >
                    <div className={styles.recentPostImage}>
                      <Image
                        src={recentPost.image}
                        alt={locale === 'ar' ? recentPost.titleAr : recentPost.title}
                        fill
                        sizes="80px"
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.recentPostContent}>
                      <h4>{locale === 'ar' ? recentPost.titleAr : recentPost.title}</h4>
                      <span>{new Date(recentPost.date).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
