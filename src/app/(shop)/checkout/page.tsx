'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
    const [isOrderItemsOpen, setIsOrderItemsOpen] = useState(true);

    return (
        <div className="flex flex-col items-center py-8 lg:py-12 px-4">
            <div className="w-full max-w-4xl">
                {/* Breadcrumbs / Stepper */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
                    <Link className="text-text-muted-light dark:text-text-muted-dark font-medium hover:text-primary transition-colors" href="/cart">장바구니</Link>
                    <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-lg">chevron_right</span>
                    <span className="text-primary font-bold">주문/결제</span>
                    <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-lg">chevron_right</span>
                    <span className="text-text-muted-light dark:text-text-muted-dark font-medium">주문완료</span>
                </div>

                {/* Page Heading */}
                <div className="mb-10 text-center">
                    <p className="text-3xl md:text-4xl font-black tracking-tighter text-text-light dark:text-text-dark">주문 / 결제</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex flex-col space-y-6">
                            {/* Accordion: Ordered Items */}
                            <div className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden">
                                <button
                                    className="flex cursor-pointer items-center justify-between gap-4 p-4 w-full text-left"
                                    onClick={() => setIsOrderItemsOpen(!isOrderItemsOpen)}
                                >
                                    <p className="text-lg font-bold text-text-light dark:text-text-dark">주문 상품 (2개)</p>
                                    <span className={`material-symbols-outlined transition-transform duration-200 text-text-light dark:text-text-dark ${isOrderItemsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>

                                {isOrderItemsOpen && (
                                    <div className="border-t border-border-light dark:border-border-dark p-4 space-y-4 bg-background-light dark:bg-background-dark">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6lFa41fRSkzVys7MvkP5jO2owio7NDnFAJ-R9JD6ZWl8smR4gB0lWAjK3vkFVR1gtaXmzaDehXsP9MbhBDB2zZM4c-aZlvQjtGpBrJ_Gn_HArh9mhrUWblFbksuKCuHao-G23HFqKKOgeTxcdebqs8csnh8a5xYNo5UhyH68HFnzX3gL05l-0dT_1AduAR0Emgsq9vUKqM1e8XuGKtywKRyNfw7W7zFdTACR7ean6dx5_24u1VqaP-Le_OtuKQ25dwx3oNtuZqDrD')" }}
                                                role="img"
                                                aria-label="Fresh strawberries in a basket"
                                            />
                                            <div className="flex-grow min-w-0">
                                                <p className="font-medium text-text-light dark:text-text-dark truncate">GAP 인증 설향 딸기 1kg</p>
                                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">수량: 1</p>
                                            </div>
                                            <p className="font-bold text-text-light dark:text-text-dark whitespace-nowrap">18,900원</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzCHJ7e7R9RzAh9vsy895EAUzU_eAF1tY5AMVyeueUT3zsQy71v8Pl2ixAGJJDNZD-1qJK1Kp-1e4If43jQH6gzOsXjJM05Wzs9vj7E_2lJvctmgidUSi-iyHOLjFz1pX70PbAa8k-pakLUhl4D7Y1zLnSyoDRD-Vf2UYrZ0Da39xxka7pTjKxdVyPjht9Yv0nYGxAPrICBl0sblNrU1s8bmZvIT4h1mTzA4nVLSWyl80NXXz0ZtFhitW5DXH1i3YCwOAjcVMiYbT2')" }}
                                                role="img"
                                                aria-label="A whole fresh cabbage"
                                            />
                                            <div className="flex-grow min-w-0">
                                                <p className="font-medium text-text-light dark:text-text-dark truncate">제주 월동 양배추 1통</p>
                                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">수량: 1</p>
                                            </div>
                                            <p className="font-bold text-text-light dark:text-text-dark whitespace-nowrap">3,500원</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Section: Orderer Information */}
                            <div className="rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 sm:p-6">
                                <h2 className="text-lg font-bold mb-4 text-text-light dark:text-text-dark">주문자 정보</h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="orderer-name">이름</label>
                                        <input className="w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="orderer-name" placeholder="홍길동" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="orderer-phone">연락처</label>
                                        <input className="w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="orderer-phone" placeholder="010-1234-5678" type="tel" />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Shipping Information */}
                            <div className="rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-text-light dark:text-text-dark">배송 정보</h2>
                                    <div className="flex items-center">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="same-as-orderer" type="checkbox" />
                                        <label className="ml-2 text-sm text-text-light dark:text-text-dark cursor-pointer" htmlFor="same-as-orderer">주문자 정보와 동일</label>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="recipient-name">받는 분</label>
                                            <input className="w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="recipient-name" placeholder="김영희" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="recipient-phone">연락처</label>
                                            <input className="w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="recipient-phone" placeholder="010-1234-5678" type="tel" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="postcode">주소</label>
                                        <div className="flex gap-2">
                                            <input className="w-1/3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="postcode" placeholder="우편번호" type="text" />
                                            <button className="flex-shrink-0 rounded-md bg-gray-200 dark:bg-gray-700 px-4 text-sm font-bold text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">검색</button>
                                        </div>
                                        <input className="mt-2 w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="address-main" placeholder="기본 주소" type="text" />
                                        <input className="mt-2 w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" id="address-detail" placeholder="상세 주소" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-light dark:text-text-dark" htmlFor="delivery-notes">배송 메모</label>
                                        <div className="relative">
                                            <select className="w-full rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-2 text-text-light dark:text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none" id="delivery-notes">
                                                <option>배송 전에 미리 연락주세요.</option>
                                                <option>부재 시 경비실에 맡겨주세요.</option>
                                                <option>문 앞에 놓아주세요.</option>
                                                <option>직접 입력</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light dark:text-text-dark">
                                                <span className="material-symbols-outlined text-lg">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Payment Method */}
                            <div className="rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 sm:p-6">
                                <h2 className="text-lg font-bold mb-4 text-text-light dark:text-text-dark">결제 수단</h2>
                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
                                    <button className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-primary rounded-lg bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-primary mb-1">credit_card</span>
                                        <span className="text-sm font-semibold text-primary">신용카드</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-border-light dark:border-border-dark rounded-lg hover:border-primary dark:hover:border-primary bg-background-light dark:bg-background-dark transition-colors">
                                        <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark mb-1">account_balance</span>
                                        <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">무통장입금</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-3 sm:p-4 border border-border-light dark:border-border-dark rounded-lg hover:border-primary dark:hover:border-primary bg-background-light dark:bg-background-dark transition-colors">
                                        <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark mb-1">phone_iphone</span>
                                        <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">휴대폰 결제</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Order Summary Card */}
                    <div className="lg:col-span-1 mt-8 lg:mt-0">
                        <div className="sticky top-24 space-y-6">
                            <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">최종 결제 정보</h3>
                                <div className="space-y-3 border-b border-border-light dark:border-border-dark pb-4 mb-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted-light dark:text-text-muted-dark">상품 금액</span>
                                        <span className="text-text-light dark:text-text-dark">22,400원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted-light dark:text-text-muted-dark">배송비</span>
                                        <span className="text-text-light dark:text-text-dark">+ 3,000원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted-light dark:text-text-muted-dark">할인/포인트</span>
                                        <span className="text-red-500 font-medium">- 0원</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center font-bold text-lg">
                                    <span className="text-text-light dark:text-text-dark">총 결제 금액</span>
                                    <span className="text-primary text-2xl">25,400원</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <input className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary" id="terms-agree" type="checkbox" />
                                <label className="ml-2 text-sm text-text-muted-light dark:text-text-muted-dark cursor-pointer" htmlFor="terms-agree">
                                    주문 내역을 확인하였으며, 정보 제공 등에 동의합니다.
                                </label>
                            </div>

                            <button className="w-full rounded-lg bg-primary h-14 text-white font-bold text-lg hover:bg-primary/90 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors shadow-md">
                                25,400원 결제하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
