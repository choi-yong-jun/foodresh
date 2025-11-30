import ProductCard from '@/components/products/ProductCard';
import ProductFilterSidebar from '@/components/products/ProductFilterSidebar';
import Link from 'next/link';

// Mock data for products based on the design
const PRODUCTS = [
    {
        id: 1,
        name: '유기농 쌈채소 모음',
        price: 6370,
        originalPrice: 7500,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVFOqrayS_RX4frEaTdfzhgnViBkFyC3NQIVI_2BisDQAHfE2eZlc0WB_8NYG5b6rkmMoLMKlTQHKB-xwwKAp2ACJpTHiW2ewB1AdnCSqNeb74RnsyHnZxT1c7P5sc4hz0rrgaEH3eR9Shv7NbY3jfma7uZ6tCooVlEKBVu74qDvnj6jysGDqHx9vKqom9CIjrew_vxkOkmgcuu2rpCJJdeGlPm6lnhRzOWcKuBjNNHLmmEI9zNYgNPtX1N30ZdnBuoyQViyXsb23H',
        imageAlt: 'organic mixed greens in a package',
        discount: 15,
        rating: 4.8,
        reviewCount: 120,
        description: '신선하고 다양한 쌈채소'
    },
    {
        id: 2,
        name: '해남 고랭지 배추 1포기',
        price: 5900,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY40SwwMoJIOHhVcSj9ZijAPia6NN_NysAEFNyAiGmVldgjV5lCYsGaUUf3rd-iV5vxmqnUNegwMky9WdY9TAWDZiAuz_P0Cge2z6ozNsV9x6eZyMfcSY2ZXAMdPgj3QplA2ecUqe0EXtnpfJXjfuZKZLOnYjYCoaaNswMZ0RAPnk3kG5bcoo1IPi-RCpyt4UxGQS_EfYcRdsHwi0REUjHN_kzDytfkztOt1nPUnm2UxhkVmNXPjQAOfTHkLzwt7uUBONfF7LBYR7Z',
        imageAlt: 'A whole head of napa cabbage',
        rating: 4.7,
        reviewCount: 88,
        description: '아삭하고 달콤한 맛'
    },
    {
        id: 3,
        name: '청상추 200g',
        price: 2500,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlyHNUIpNJ4LqQW0NlsvWKEhxyNZboD3rMwovKg6rHx1y-Zvs2UBdGGmVZXPawhPif128AVhArlfGMaWDfz_SsI26UX4TQsrGPOnLj7oTECGc6HfrXNsKIrG17dyc49PYuaw2sdRNN6AEJhiCFGBPJ3yS-9kiO_88dENlqjanX1YobOa3b32Hdg8k_H2-dLRPHNNBk9J6g80dvweuqEORyjlCXEAd7AvZV94PARckIIX_2e9PMfn7xOtIM1SMLh-tvsuAi35-4k4cG',
        imageAlt: 'Fresh green lettuce',
        rating: 4.9,
        reviewCount: 250,
        description: '부드러운 식감'
    },
    {
        id: 4,
        name: '아삭한 양상추 1통',
        price: 3200,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuSSwpMJADGhyTkRA3cHfKXCIYihASLMjIEB-P1J4e5l5tOmWyETadxaGnnExcTEbrVmm6KV3eGgx7q5IxJJpd87OHWm2qIa4UrqZdz1t1pdccfZeB8mdQGV3I0qg-5J1_0Hw5mAcp-Rsy-kgvR74SdlmLfsb00JNfDUMQjMZiSCuLmRhubUZqxBRxt4BE-A7vMNJs1IHmg5HUJb9Mcj-8AUH-C6Jqwga8lmotTDHFoqaEP_xsncT6oWIZ_CXDnLeqKVN_UWD6s8Zm',
        imageAlt: 'A head of iceberg lettuce',
        rating: 4.8,
        reviewCount: 150,
        description: '샐러드에 최적'
    },
    {
        id: 5,
        name: '깻잎 20묶음',
        price: 2000,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT7a4Dbnu_N6Dii8P4ITjADLyUXn2QlY6hyeQTbFQDyEnJ3O-RBwPQPNcYKjSmSqXioUm2qvDC1xmStFdCFidxM584hBfY5q4rkJuXXYx3UB9p-4yLx5mLiSIYE3DEjeGibdm8kDaaHCVeUWf-bIdf42bZk1EhmhzQA6_Nqg1ucKZZAD_vNbWciUm1nW-ZzL4rt5Bp6EFa-D9vz-eKassp6JA6PdaFlrSRBBJv1kxhR_-jZe0tZ6Zxg2NnCQThyEkD5h4v8IP6vN4n',
        imageAlt: 'Perilla leaves fanned out',
        rating: 4.9,
        reviewCount: 310,
        description: '향긋한 풍미'
    },
    {
        id: 6,
        name: '적상추 200g',
        price: 2500,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJyL7cu2p12OMkHqkD6oBRhAkLLzxWPrypEpNjGDd3BF3Ea1KN3EWgjImDrVTL99QAfIdfiWe-lYArbkrVVrPLq8n63ETwzWsCwGw3QCcFC6x9UZsSHa6iF5yPvLpOepGeIQ3HK7fDiLNos-4vyEnN-rktVBQ_rq1sgD1bbahEhf2PeAqDH6tb9GKs8xgQGYd_0MsGGVvXgnTOBldi2e1C3I0ueBVV1qzbcotRYQtKKw9JgZW9lDifCqXHtNn-ltAlch1cD7gQlCuw',
        imageAlt: 'Red leaf lettuce',
        rating: 4.8,
        reviewCount: 180,
        description: '색감과 영양을 한번에'
    },
    {
        id: 7,
        name: '새벽에 수확한 부추',
        price: 3500,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXJaquB-blVzimeBojbuPXk3pslDBhTldEdOSGRzw2UYbV2WEcBc1iA0Lzpo8qxnBeB8HepKTjNnJYzbzJSfrxfc4C0zFmOmmdwAiYQP9th2_caIERbLtRq-H0_McGdWUwSA5TXRxerbcWoGmio7fuLSmOAcoYukgrcSGDjUyf_7M2M8yMJE3BmFRNaf8f-03ZXiIeYRa9V3_N21SJM7vnTpMImr1rJNdyf9NnshF422vg11OJ5XxdkgKVE9uKiYp5h2SJd_9z_VQa',
        imageAlt: 'A bunch of fresh chives',
        rating: 4.7,
        reviewCount: 95,
        description: '신선함이 살아있는'
    },
    {
        id: 8,
        name: '친환경 시금치 1단',
        price: 4000,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNuQ-5tPdCKJmvkrHRJCYc_wbZtlI852j8cn3i5KkunV1sXl8y5JVhEADsGAwyD6A0zz08lzKyIV41g5hI3TKdOLzF-vKwt6M1EuQLhAi1vpqQ05JzqnqdmWFHMU5b34Gg5fl6EfF-e1W62GXuZNj59kTtbgeEyk_em7w4J0NxY_4eGf17UlQe2QMBzhwxABkizEba34odWUh0nYFcQOjYlWaKh13cTrkjZ9y-POyasXbFTr7Wp1kZEsHqJbPooQ9DgA8goww0XFQB',
        imageAlt: 'A bunch of spinach',
        rating: 4.8,
        reviewCount: 110,
        description: '달큰한 맛이 일품'
    }
];

// Map category slugs to display names
const CATEGORY_NAMES: Record<string, string> = {
    vegetables: '채소',
    fruits: '과일',
    seafood: '수산물',
    meat: '정육/계란',
    events: '이벤트',
    new: '신상품'
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryName = CATEGORY_NAMES[params.category] || '상품 목록';

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <ProductFilterSidebar />

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div className="flex flex-col gap-6">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2">
                            <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary" href="/">홈</Link>
                            <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                            <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary" href={`/${params.category}`}>{categoryName}</Link>
                            <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                            <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">잎채소</span>
                        </div>

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between items-baseline gap-3">
                            <div className="flex min-w-72 flex-col gap-2">
                                <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-tighter">{categoryName} (24)</p>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">신선하고 품질 좋은 {categoryName}를 만나보세요.</p>
                            </div>
                        </div>

                        {/* Chips / Sort options */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-4 pr-3">
                                    <p className="text-sm font-semibold">신상품순</p>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">인기순</p>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">낮은 가격순</p>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">높은 가격순</p>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <p className="text-sm font-medium text-text-light dark:text-text-dark">리뷰많은순</p>
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                            {PRODUCTS.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                    imageAlt={product.imageAlt}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    rating={product.rating}
                                    reviewCount={product.reviewCount}
                                    description={product.description}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center pt-8">
                            <nav aria-label="Pagination" className="flex items-center gap-2">
                                <Link className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-light dark:text-text-dark" href="#">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </Link>
                                <Link aria-current="page" className="flex items-center justify-center h-9 w-9 rounded-full bg-primary text-white font-bold" href="#">1</Link>
                                <Link className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors font-medium text-text-light dark:text-text-dark" href="#">2</Link>
                                <Link className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors font-medium text-text-light dark:text-text-dark" href="#">3</Link>
                                <span className="flex items-center justify-center h-9 w-9 text-text-light dark:text-text-dark">...</span>
                                <Link className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors font-medium text-text-light dark:text-text-dark" href="#">10</Link>
                                <Link className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-light dark:text-text-dark" href="#">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
