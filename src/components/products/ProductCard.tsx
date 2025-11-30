import Link from 'next/link';

interface ProductCardProps {
    id?: number | string;
    name: string;
    price: number;
    imageUrl: string;
    imageAlt: string;
    originalPrice?: number;
    discount?: number;
    rating?: number;
    reviewCount?: number;
    description?: string;
}

export default function ProductCard({
    id = 1,
    name,
    price,
    imageUrl,
    imageAlt,
    originalPrice,
    discount,
    rating,
    reviewCount,
    description
}: ProductCardProps) {
    return (
        <div className="group relative flex flex-col gap-3 pb-3 bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden">
            <Link href={`/products/${id}`} className="block">
                <div className="relative w-full overflow-hidden rounded-lg">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url("${imageUrl}")` }}
                        role="img"
                        aria-label={imageAlt}
                    />
                    {discount && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {discount}%
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <button className="w-9 h-9 flex items-center justify-center bg-white/90 dark:bg-black/90 rounded-full text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-base">favorite_border</span>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center bg-white/90 dark:bg-black/90 rounded-full text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col px-3 pt-3">
                    <p className="font-semibold text-base leading-snug text-text-light dark:text-text-dark">{name}</p>
                    {description && (
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">{description}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                        <p className="text-lg font-bold text-primary">{price.toLocaleString('ko-KR')}원</p>
                        {originalPrice && (
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-through">
                                {originalPrice.toLocaleString('ko-KR')}원
                            </p>
                        )}
                    </div>
                    {rating && (
                        <div className="flex items-center gap-1 mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">
                            <span className="material-symbols-outlined text-base text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span>{rating} ({reviewCount})</span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}
