import { create } from 'zustand';
import { CartItem, CartSummary } from '@/types/cart';

interface CartState {
    items: CartItem[];
    selectedItems: Set<number>;
    shippingCost: number;
    discountAmount: number;
    
    // Actions
    setItems: (items: CartItem[]) => void;
    setSelectedItems: (items: Set<number>) => void;
    setShippingCost: (cost: number) => void;
    setDiscountAmount: (amount: number) => void;
    
    // Cart operations
    handleSelectAll: (checked: boolean) => void;
    handleSelectItem: (id: number, checked: boolean) => void;
    handleQuantityChange: (id: number, change: number) => void;
    handleDeleteItem: (id: number) => void;
    addItem: (item: CartItem) => void;
    
    // Computed values
    getSelectedItemsTotal: () => number;
    getAllItemsTotal: () => number;
    getIsAllSelected: () => boolean;
    getSummary: () => CartSummary;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    selectedItems: new Set(),
    shippingCost: 0,
    discountAmount: 0,

    setItems: (items) => {
        set({ items });
        // 아이템이 설정되면 모든 아이템을 선택 상태로 설정
        set({ selectedItems: new Set(items.map(item => item.id)) });
    },

    setSelectedItems: (selectedItems) => set({ selectedItems }),

    setShippingCost: (shippingCost) => set({ shippingCost }),

    setDiscountAmount: (discountAmount) => set({ discountAmount }),

    handleSelectAll: (checked) => {
        const { items } = get();
        if (checked) {
            set({ selectedItems: new Set(items.map(item => item.id)) });
        } else {
            set({ selectedItems: new Set() });
        }
    },

    handleSelectItem: (id, checked) => {
        const { selectedItems } = get();
        const newSelected = new Set(selectedItems);
        if (checked) {
            newSelected.add(id);
        } else {
            newSelected.delete(id);
        }
        set({ selectedItems: newSelected });
    },

    handleQuantityChange: (id, change) => {
        set((state) => ({
            items: state.items.map(item => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }),
        }));
    },

    handleDeleteItem: (id) => {
        set((state) => {
            const newItems = state.items.filter(item => item.id !== id);
            const newSelected = new Set(state.selectedItems);
            newSelected.delete(id);
            return {
                items: newItems,
                selectedItems: newSelected,
            };
        });
    },

    addItem: (item) => {
        set((state) => {
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                // 이미 존재하는 아이템이면 수량만 증가
                return {
                    items: state.items.map(i =>
                        i.id === item.id
                            ? { ...i, quantity: i.quantity + item.quantity }
                            : i
                    ),
                };
            } else {
                // 새로운 아이템이면 추가하고 선택 상태로 설정
                const newSelected = new Set(state.selectedItems);
                newSelected.add(item.id);
                return {
                    items: [...state.items, item],
                    selectedItems: newSelected,
                };
            }
        });
    },

    getSelectedItemsTotal: () => {
        const { items, selectedItems } = get();
        return items
            .filter(item => selectedItems.has(item.id))
            .reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    getAllItemsTotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    getIsAllSelected: () => {
        const { items, selectedItems } = get();
        return selectedItems.size === items.length && items.length > 0;
    },

    getSummary: () => {
        const { getSelectedItemsTotal, shippingCost, discountAmount } = get();
        const total = getSelectedItemsTotal();
        const shipping = total > 0 ? shippingCost : 0;
        const final = total - discountAmount + shipping;
        
        return {
            totalAmount: total,
            discountAmount,
            shippingCost: shipping,
            finalAmount: final,
        };
    },
}));

