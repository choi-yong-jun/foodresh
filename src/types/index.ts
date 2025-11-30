// 공통 타입 정의

// 사용자 타입
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  createdAt: Date;
}

// 상품 타입
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  stock: number;
  unit: string; // 예: kg, 개, 박스
  origin: string; // 원산지
  createdAt: Date;
  updatedAt: Date;
}

// 상품 카테고리
export type ProductCategory = 
  | 'vegetables'   // 채소
  | 'fruits'       // 과일
  | 'seafood'      // 수산물
  | 'meat'         // 육류
  | 'grains'       // 곡물
  | 'other';       // 기타

// 장바구니 아이템
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

// 주문 타입
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number; // 주문 시점의 가격
}

export type OrderStatus = 
  | 'pending'      // 대기 중
  | 'confirmed'    // 확인됨
  | 'processing'   // 처리 중
  | 'shipped'      // 배송 중
  | 'delivered'    // 배송 완료
  | 'cancelled';   // 취소됨

// 주소 타입
export interface Address {
  recipientName: string;
  phone: string;
  postcode: string;
  address: string;
  addressDetail?: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
