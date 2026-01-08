'use client';

import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import NewArrivals from '@/components/home/NewArrivals';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Promotions from '@/components/home/Promotions';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrivals />
      <Promotions />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
