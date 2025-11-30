'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcKN98cwt4Q6R7r4HnoSI8DJTKobPBD7-UIL7E0yJccoTDo2o_kK_tfsTFsqlYU5YBbIBP95OY3rgMTGPz3qtfRdfuMJhS1x5SUdOtC3hwmUxfYm8Izt2zsKUanm4PLnzoL5UUakptC9sy1SjZo4UXhBUIIsatC0cD_Hz3XXZRyAIbeYroMu3NA3-O2k1aE5VryEoyJse5bXdXZkH0zwFLRe6QkpK3EAPoSp89Jn3roD7Ph9B7E-LwVO94My0f1F5lhfKOyMSpFXPb', alt: 'A bunch of fresh organic carrots with green tops' },
        { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNIjVzU1pqv0Z2nFcAuE3e56E-szK3_ZsLq0hsqQivbKKFcf89xi3pKfMvdNnrbdonWrNqfL_x8ZqWGsk5XjrXlfHDM8vrE3Od-RchhFiZPfoVxev749xtF2qYNUinO2qu1f34UuCEuglV4zROW3TmRy6T6QlMxrVkL66Q0QjoPmqOlF8VQb9lVTzEpzeGnS5mmO1OwjI4VKQRcoWR41ZgTsMpAcPvPBVEHTl34UYB6JIDlqkWlTgjhnDASiybx9ZMiIw0pAUzs13P', alt: 'A bunch of fresh organic carrots with green tops' },
        { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlFArl2liMllDCWVNQ6POqn0fogmpm9vxG7BOJfX1oRPNJpOp6M-oUIZysdWt7l2DiODIqLxlfMOAzYPyRUW5iVW-zUbgvBzQvgDq6Ov_YJqmlcdPftFmDV6hF3SGtP6kpM304vRK75bZSifCRkfUnoks8Pq4ipYxW2FhNhRkqAzDnnMbw3SQA0jtNV6IysXEtoPNSBCYv6PpXJ-HkYNmlRZaRM370IMPt0pwUnEunJ9xCY9bolhUVtVSNcWfOUvoFM_ANgLp0Iy8C', alt: 'A close-up of a single organic carrot' },
        { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDObCI2IF4HGnhyrmGD_3j9-KToDGvVLmnTzCWQ31XCW7wInaAx1Y2OiWr1hrca94MuZg2Na6p_sA5aTUyFnxHZW4qW9o-iKsSNisVXv6lM01DL8VfNItLZnf51dv9GtZquXx7nkHCczNKTusuRxwbFgRWoQuPWWN3BGoXDtdsU9D-cdAOPFBkNHqfiDav3pDzZbGJaLJ__zEYti8Mjs2h-rUmPvCRktYGQ3HiCDa3OE21acA4C2CoEtHNb2IaNuTkdCuexr_qW1hFp', alt: 'Carrots being harvested from the soil' },
        { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcpOXtadTBcF-l-qs2H_hbtA3q0bHovjGruZXrPCyLIqEmCYQ_0-TVi6pnrlbB_VOlwmk6kpWe4Cr963sUh8XXoG68u8pkEG4ROcq4zOftF364pZsEUw3LeRXqHXtBhSCAHxVQvUrxe6Rh_7FMldZ4grwsp4v2fIgAwifuGwscoh9bnFz_l-UBE1C1dq7eVY6k_R5RzGzGiduiK17iorwl5lgZDPS1K3COt5517d8rBYB8ZnbdQ5xPFg6qIzGUn6A-ZttqhOQJNbTI', alt: 'A dish made with fresh carrots' },
    ];

    return (
        <div className="flex flex-1 justify-center py-5 sm:py-10 px-4">
            <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 p-4">
                    <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="/">홈</Link>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                    <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="/vegetables">채소</Link>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                    <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">제주 유기농 햇 당근</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-6">
                    {/* Product Images */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl aspect-square"
                            style={{ backgroundImage: `url('${productImages[selectedImage].url}')` }}
                            role="img"
                            aria-label={productImages[selectedImage].alt}
                        />
                        <div className="grid grid-cols-5 gap-2">
                            {productImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-full bg-center bg-no-repeat bg-cover rounded-lg aspect-square cursor-pointer transition-all ${selectedImage === index ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100'}`}
                                    style={{ backgroundImage: `url('${img.url}')` }}
                                    onClick={() => setSelectedImage(index)}
                                    role="img"
                                    aria-label={img.alt}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col pt-4">
                        <span className="text-sm font-medium text-primary">제주농장 / 원산지: 대한민국</span>
                        <h1 className="text-text-light dark:text-text-dark tracking-tight text-3xl lg:text-4xl font-bold leading-tight mt-1">제주 유기농 햇 당근</h1>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal mt-3">제주의 깨끗한 토양에서 자란 신선하고 달콤한 유기농 햇 당근입니다. 지금 바로 만나보세요.</p>

                        <div className="flex items-baseline gap-3 mt-4">
                            <span className="text-primary text-2xl font-bold">20%</span>
                            <span className="text-text-muted-light dark:text-text-muted-dark text-lg font-medium line-through">12,000원</span>
                            <span className="text-text-light dark:text-text-dark text-3xl font-bold">9,600원</span>
                        </div>

                        <div className="flex items-center gap-2 mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                            <span className="material-symbols-outlined text-base text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span>4.9 (1,288개 리뷰)</span>
                            <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">재구매율 85%</span>
                        </div>

                        <div className="w-full h-px bg-border-light dark:bg-border-dark my-6"></div>

                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                                <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">배송 정보</span>
                                <span className="text-sm text-text-light dark:text-text-dark">내일(수) 5/29 도착 예정 (무료배송)</span>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-start gap-4">
                                <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark pt-2">옵션 선택</span>
                                <div className="flex flex-col gap-2 w-full">
                                    <button className="w-full text-left flex items-center justify-between p-2 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark hover:border-primary dark:hover:border-primary transition-colors">
                                        <span className="text-sm text-text-light dark:text-text-dark">중량: 1kg</span>
                                        <span className="material-symbols-outlined text-lg text-text-muted-light dark:text-text-muted-dark">expand_more</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                                <label className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark" htmlFor="quantity">수량</label>
                                <div className="flex items-center border border-border-light dark:border-border-dark rounded-lg w-fit">
                                    <button
                                        className="px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <span className="material-symbols-outlined text-lg">remove</span>
                                    </button>
                                    <input
                                        className="w-12 text-center border-x border-border-light dark:border-border-dark bg-transparent focus:ring-0 focus:outline-none focus:border-primary dark:focus:border-primary text-text-light dark:text-text-dark"
                                        id="quantity"
                                        type="text"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button
                                        className="px-3 py-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <span className="material-symbols-outlined text-lg">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border-light dark:bg-border-dark my-6"></div>

                        <div className="flex justify-between items-center">
                            <span className="text-base font-medium text-text-light dark:text-text-dark">총 상품 금액</span>
                            <span className="text-2xl font-bold text-primary">{(9600 * quantity).toLocaleString()}원</span>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button className="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors border border-border-light dark:border-border-dark">장바구니 담기</button>
                            <button className="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">바로 구매하기</button>
                        </div>
                    </div>
                </div>

                {/* Tabs & Content */}
                <div className="mt-16">
                    <div className="border-b border-border-light dark:border-border-dark">
                        <nav className="flex -mb-px gap-8">
                            <a className="px-1 py-4 border-b-2 border-primary text-primary font-bold text-base" href="#">상세 정보</a>
                            <a className="px-1 py-4 border-b-2 border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium text-base transition-colors" href="#">구매 후기 (1,288)</a>
                            <a className="px-1 py-4 border-b-2 border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium text-base transition-colors" href="#">상품 문의</a>
                            <a className="px-1 py-4 border-b-2 border-transparent text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium text-base transition-colors" href="#">배송/교환/반품</a>
                        </nav>
                    </div>

                    <div className="py-12">
                        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                            <span className="text-primary font-semibold">STORY OF FARMER</span>
                            <h2 className="text-3xl font-bold mt-2 text-text-light dark:text-text-dark">제주 바람과 함께 자란 건강한 당근</h2>
                            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl">30년간 제주에서 흙과 함께 살아온 농부의 정성이 담긴 유기농 당근입니다. 화학 비료나 농약을 사용하지 않고, 오직 자연의 힘으로만 키워내어 당근 본연의 깊고 진한 단맛을 느끼실 수 있습니다.</p>
                            <img
                                className="w-full mt-8 rounded-xl object-cover aspect-[2/1]"
                                alt="A farmer holding freshly harvested carrots in a field"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlg6-swcHNStaZmTiizkhRvVJqRtyX-x6kj8kB-W3toUExyx5hMMFflR69DzUwp0fYp1WandXsMHrjgva_S_Z87JIdevgwaTlLSMTX-a3xf5WkIJoB9-ND-pg6ch23xSvgPJCPEeUlFFODlz9_yU9BbjFAQQ0TpAOlWRVKMaEJBe0Nr0Pb2SML2SSz8upOcz8TpH-78ms0Z6vJ3BE9IbwCTXsP87dZti3Q3xCJn3apkEA2MlOkki2l7rdYyALL41HlRs3QPuaMvT52"
                            />

                            <div className="w-full h-px bg-border-light dark:bg-border-dark my-12"></div>

                            <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">이렇게 보관하세요</h3>
                            <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">수령 즉시 흙을 털어내고 키친타월에 감싸 냉장 보관하시면 신선함이 더 오래 유지됩니다.</p>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-12 bg-surface-light dark:bg-surface-dark rounded-xl p-8 sm:p-12">
                    <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">함께 구매하면 좋은 상품</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {[
                            { name: '유기농 햇 양파 1kg', price: '4,500원', desc: '달콤하고 아삭해요', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD_uP0f0vj4_2nPnUsUNMQ6-neA5NN-57bG5A3K8VBljn7C2Rrde47M3UL1EPEN-_j29qnA4aM5GTiC0f60g6nRQ8E19hpsbFDxuGxJYIUjkQwChp7-ecVD9Wiz5ZQkci7cRj70JANMO5lB5O0y_BiZ-QfLwtftus5jGCYI7Dpl6IMKg0Cm_qGkhQf5m-VPNQovuFntqA_LMqBeeVROXmPDBZdbjo6nRYO94G4Rrudm0icYvmZjKcqbhWq1Dm0Ffy8_Q_ZaUTjLYp3' },
                            { name: '유기농 감자 1kg', price: '5,200원', desc: '포슬포슬한 식감', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvBMzQGHPnz4YLQkzRIcRjxRHmkfx6Zq0bngjhTH6ZvR9WqDUFNS2UlxRKXAoETeM7x0igZraZAs0U3289WT9kVIxUCAWhfVl-CJGpsrvXMeAY33arHeLNq7pADEPaaTCMq4paxLBL4LIribPN0n9u-GtllaicjnFn5-4DIBER9n0aJSK1WY5WVH1aSu5muQvEowjhRsiKtthnVJzgFii1CvcPgAkPFNRNa6SRRnlKIXcq5I9ek9_zfZzO8atN1a8mVRV_VxBgRRPC' },
                            { name: '친환경 브로콜리 1개', price: '3,800원', desc: '신선하고 영양가 만점', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_hlXTG_rsPVUwjnE7QteJ5Y81wnQ6tGNWlKQtkWzA52XGqTLymXedW5nKIIXvqMfq3SyTCp2gH15Gj0PZlomoGKOx4QXWZNUzS2jzfc5F-TAmilcx7vPYL7J-5YNck69CJSrldkRrrx_DrjBMz1Tq9DRPzN27IuM0KZ8CR2J1MDUjQeF2nsAtwNov4HGS7fzLbViGC_lI1SRESaL0Zx9aIe2IfGQxswfQ-SRI9L86ERmGOd6Cg4WTKkP1sB-PJWPywlPmHTwRBoq' },
                            { name: '무농약 양배추 1통', price: '4,000원', desc: '샐러드나 볶음 요리에', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-M6yIAJIO_u6OJw9HzNsJs-zuSKL_TloPjj7ZE0FYSKJCCBt_8ugk-bcBRwyh00B-FZjL7N8nctFqOpybL0VDT09Zsma5l1qE5BDgVD2rKXzxolmaJZ33hTk9MUyw3nslbk1SLGA6z7VTT0uG_CTNHoxutxWuNWNN0jLrL4peTmJ0VIgCbcRTfKi5OeHe4xuJiOXTJwHT1mrqEufkkKM6EQXz3TpeMq1j6pm5FBZGT4EhsUwNDvFZzFwFcHpwl2uRMWZpFl01uxEL' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col group cursor-pointer">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-lg aspect-square transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${item.img}')` }}
                                />
                                <h3 className="mt-3 font-medium text-base text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{item.name}</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                                <span className="mt-1 font-bold text-text-light dark:text-text-dark">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
