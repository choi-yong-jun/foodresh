interface ProductCardProps {
    name: string;
    price: number;
    imageUrl: string;
    imageAlt: string;
}

export default function ProductCard({ name, price, imageUrl, imageAlt }: ProductCardProps) {
    return (
        <div className="flex flex-col gap-3 pb-3 bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden">
            <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                style={{ backgroundImage: `url("${imageUrl}")` }}
                role="img"
                aria-label={imageAlt}
            />
            <div className="px-3">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{name}</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                    {price.toLocaleString('ko-KR')}원
                </p>
            </div>
            <button className="mx-3 mb-3 flex items-center justify-center gap-2 rounded h-9 bg-primary/20 text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                담기
            </button>
        </div>
    );
}
