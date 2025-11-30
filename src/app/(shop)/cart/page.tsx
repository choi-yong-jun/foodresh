'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { INITIAL_CART_ITEMS, DEFAULT_DISCOUNT_AMOUNT } from '@/constants/cart';
import { formatPrice } from '@/lib/format';

export default function CartPage() {
    const {
        items,
        selectedItems,
        shippingCost,
        discountAmount,
        setItems,
        setShippingCost,
        setDiscountAmount,
        handleSelectAll,
        handleSelectItem,
        handleQuantityChange,
        handleDeleteItem,
        getIsAllSelected,
        getSummary,
    } = useCartStore();

    // 초기 데이터 설정
    useEffect(() => {
        setItems(INITIAL_CART_ITEMS);
        setShippingCost(0);
        setDiscountAmount(DEFAULT_DISCOUNT_AMOUNT);
    }, [setItems, setShippingCost, setDiscountAmount]);

    const isAllSelected = getIsAllSelected();
    const summary = getSummary();

    return (
        <main className="flex flex-1 justify-center py-5 px-4 sm:px-10 lg:px-20">
            <div className="flex flex-col w-full max-w-7xl">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                        장바구니
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
                    {/* Cart Items Table */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-6">
                            <div className="overflow-x-auto">
                                <div className="inline-block min-w-full align-middle">
                                    <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                                        <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
                                            <thead className="bg-gray-50 dark:bg-gray-900/50">
                                                <tr>
                                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-text-light dark:text-text-dark sm:pl-6" scope="col">
                                                        <input
                                                            className="h-5 w-5 rounded-md border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-border-light dark:focus:border-border-dark"
                                                            type="checkbox"
                                                            checked={isAllSelected}
                                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                                        />
                                                    </th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-text-light dark:text-text-dark" scope="col">
                                                        상품정보
                                                    </th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-text-light dark:text-text-dark" scope="col">
                                                        수량
                                                    </th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-text-light dark:text-text-dark" scope="col">
                                                        상품금액
                                                    </th>
                                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
                                                        <span className="sr-only">삭제</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border-light dark:divide-border-dark bg-surface-light dark:bg-surface-dark">
                                                {items.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={5} className="px-6 py-12 text-center text-text-muted-light dark:text-text-muted-dark">
                                                            장바구니가 비어있습니다.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    items.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                <input
                                                                    className="h-5 w-5 rounded-md border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-border-light dark:focus:border-border-dark"
                                                                    type="checkbox"
                                                                    checked={selectedItems.has(item.id)}
                                                                    onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                                                                />
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="h-16 w-16 flex-shrink-0">
                                                                        <img
                                                                            className="h-16 w-16 rounded-lg object-cover"
                                                                            alt={item.imageAlt}
                                                                            src={item.imageUrl}
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <div className="font-medium text-text-light dark:text-text-dark">
                                                                            {item.name}
                                                                        </div>
                                                                        {item.variant && (
                                                                            <div className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                                                                {item.variant}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                                        disabled={item.quantity <= 1}
                                                                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                                    >
                                                                        <span className="material-symbols-outlined text-sm">remove</span>
                                                                    </button>
                                                                    <span className="w-8 text-center font-medium text-text-light dark:text-text-dark">
                                                                        {item.quantity}
                                                                    </span>
                                                                    <button
                                                                        onClick={() => handleQuantityChange(item.id, 1)}
                                                                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                                    >
                                                                        <span className="material-symbols-outlined text-sm">add</span>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-text-light dark:text-text-dark">
                                                                {formatPrice(item.price * item.quantity)}
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                <button
                                                                    onClick={() => handleDeleteItem(item.id)}
                                                                    className="text-text-muted-light dark:text-text-muted-dark hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                                                >
                                                                    <span className="material-symbols-outlined !text-xl">delete</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6">
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">주문 요약</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between gap-x-6 py-2 border-b border-dashed border-border-light dark:border-border-dark">
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                                            총 상품금액
                                        </p>
                                        <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal text-right">
                                            {formatPrice(summary.totalAmount)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-x-6 py-2 border-b border-dashed border-border-light dark:border-border-dark">
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                                            총 할인금액
                                        </p>
                                        <p className="text-red-500 text-sm font-medium leading-normal text-right">
                                            - {formatPrice(summary.discountAmount)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-x-6 py-2 border-b border-dashed border-border-light dark:border-border-dark">
                                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                                            배송비
                                        </p>
                                        <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal text-right">
                                            {formatPrice(summary.shippingCost)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-x-6 pt-4">
                                        <p className="text-text-light dark:text-text-dark text-base font-bold leading-normal">
                                            결제 예정 금액
                                        </p>
                                        <p className="text-primary text-xl font-black leading-normal text-right">
                                            {formatPrice(summary.finalAmount)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch gap-3">
                                {selectedItems.size > 0 ? (
                                    <Link
                                        href="/checkout"
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:opacity-90 transition-opacity"
                                    >
                                        <span className="truncate">주문하기</span>
                                    </Link>
                                ) : (
                                    <button
                                        disabled
                                        className="flex min-w-[84px] max-w-[480px] cursor-not-allowed items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 text-base font-bold leading-normal tracking-[0.015em] w-full"
                                    >
                                        <span className="truncate">주문하기</span>
                                    </button>
                                )}
                                <Link
                                    href="/"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-border-light dark:border-border-dark"
                                >
                                    <span className="truncate">쇼핑 계속하기</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

