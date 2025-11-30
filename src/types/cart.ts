// 장바구니 관련 타입 정의

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    imageAlt: string;
    variant?: string; // 예: "2개입", "1송이", "1팩"
}

export interface CartSummary {
    totalAmount: number;
    discountAmount: number;
    shippingCost: number;
    finalAmount: number;
}

