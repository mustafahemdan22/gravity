import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'cat-1',
        name: 'Men',
        nameAr: 'رجال',
        slug: 'men',
        description: 'Discover the latest men\'s fashion trends',
        descriptionAr: 'اكتشف أحدث صيحات الموضة الرجالية',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800',
        productCount: 15,
    },
    {
        id: 'cat-2',
        name: 'Women',
        nameAr: 'نساء',
        slug: 'women',
        description: 'Elegant styles for the modern woman',
        descriptionAr: 'أناقة عصرية للمرأة الحديثة',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
        productCount: 18,
    },
    {
        id: 'cat-3',
        name: 'Kids',
        nameAr: 'أطفال',
        slug: 'kids',
        description: 'Fun and comfortable styles for children',
        descriptionAr: 'ملابس مريحة وممتعة للأطفال',
        image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800',
        productCount: 12,
    },
    {
        id: 'cat-4',
        name: 'Shoes',
        nameAr: 'أحذية',
        slug: 'shoes',
        description: 'Step out in style with our footwear collection',
        descriptionAr: 'اخطو بأناقة مع مجموعة أحذيتنا',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
        productCount: 10,
    },
    {
        id: 'cat-5',
        name: 'Lingerie',
        nameAr: 'ملابس داخلية',
        slug: 'lingerie',
        description: 'Comfortable and elegant intimate wear',
        descriptionAr: 'ملابس داخلية مريحة وأنيقة',
        image: 'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=800',
        productCount: 8,
    },
    {
        id: 'cat-6',
        name: 'Jeans',
        nameAr: 'جينز',
        slug: 'jeans',
        description: 'Premium denim for every occasion',
        descriptionAr: 'جينز فاخر لكل مناسبة',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
        productCount: 10,
    },
    {
        id: 'cat-7',
        name: 'Accessories',
        nameAr: 'إكسسوارات',
        slug: 'accessories',
        description: 'Complete your look with our accessories',
        descriptionAr: 'أكمل إطلالتك مع إكسسواراتنا',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800',
        productCount: 14,
    },
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}
