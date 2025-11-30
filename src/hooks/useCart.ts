import { useState, useEffect, useMemo } from 'react';
import { CartItem, CartSummary } from '@/types/cart';

interface UseCartOptions {
    initialItems?: CartItem[];
    shippingCost?: number;
    discountAmount?: number;
}

export function useCart(options: UseCartOptions = {}) {
    const {
        initialItems = [],
        shippingCost = 0,
        discountAmount = 0,
    } = options;

    const [items, setItems] = useState<CartItem[]>(initialItems);
    const [selectedItems, setSelectedItems] = useState<Set<number>>(
        new Set(initialItems.map(item => item.id))
    );

    // 선택된 아이템들의 총 금액 계산
    const selectedItemsTotal = useMemo(() => {
        return items
            .filter(item => selectedItems.has(item.id))
            .reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [items, selectedItems]);

    // 전체 선택 상태
    const isAllSelected = useMemo(() => {
        return selectedItems.size === items.length && items.length > 0;
    }, [selectedItems, items]);

    // 주문 요약 계산
    const summary: CartSummary = useMemo(() => {
        const total = selectedItemsTotal;
        const shipping = total > 0 ? shippingCost : 0;
        const final = total - discountAmount + shipping;
        
        return {
            totalAmount: total,
            discountAmount,
            shippingCost: shipping,
            finalAmount: final,
        };
    }, [selectedItemsTotal, discountAmount, shippingCost]);

    // 전체 선택/해제
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedItems(new Set(items.map(item => item.id)));
        } else {
            setSelectedItems(new Set());
        }
    };

    // 개별 아이템 선택/해제
    const handleSelectItem = (id: number, checked: boolean) => {
        const newSelected = new Set(selectedItems);
        if (checked) {
            newSelected.add(id);
        } else {
            newSelected.delete(id);
        }
        setSelectedItems(newSelected);
    };

    // 수량 변경
    const handleQuantityChange = (id: number, change: number) => {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    // 아이템 삭제
    const handleDeleteItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        const newSelected = new Set(selectedItems);
        newSelected.delete(id);
        setSelectedItems(newSelected);
    };

    // 모든 아이템 가져오기
    const getAllItemsTotal = useMemo(() => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [items]);

    return {
        items,
        selectedItems,
        isAllSelected,
        selectedItemsTotal,
        summary,
        getAllItemsTotal,
        handleSelectAll,
        handleSelectItem,
        handleQuantityChange,
        handleDeleteItem,
        setItems,
    };
}

