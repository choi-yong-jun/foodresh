import { CartItem } from '@/types/cart';

// 초기 장바구니 아이템 데이터
export const INITIAL_CART_ITEMS: CartItem[] = [
    {
        id: 1,
        name: "유기농 아보카도",
        price: 7900,
        quantity: 1,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1uGglTaNrW4Xkwv63WHEXarrk8Hihk5EWNNkW6pgLVweiaE4A-00Nr4q_d-M7Cn43b5yYgIUH_dkH573-zhDdM_sJDf9-tHKIRM2kxXC3yiwzwy5CZRxmpA1oUFaHPfK0VBe4qDiK2ve6XvDi-Aml4LJSP6zLuFhDwxiso8-5YpPv5RA-jCckQYHKT74-z9eudIOjJfaONAUh1EMc9lkDoinhHpGCTPCvzNeOW26L1KooqFRQfJCHLs9rWt0XyBv_LNxXROGU8N6",
        imageAlt: "Fresh organic avocados",
        variant: "2개입"
    },
    {
        id: 2,
        name: "고산지 바나나",
        price: 4500,
        quantity: 1,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAof3eegI9mkj-jduEwXeBazANtslCKSElxH4-B30-RBywB1dBiFbEXLPJR9BUtxuQ7Q_rLQOKes3TCMIyauyczBCai81eOqay__UowzNh6qxc5kwAWYAAFtsDJjlEYFRaajpyX0ttgJlyVGcKD3UKHd0ANJFoTcNyq_ZBOb1vD4Y3cUiUGcOirz-X37Th9lKGg_m9V6TWCdShR3Q1cMx3VezQBexEKDzId_NZWzZJ0XaXTPBShOwDbMtaTLI0eIk63q7P1adqtOH_Y",
        imageAlt: "Fresh organic bananas",
        variant: "1송이"
    },
    {
        id: 3,
        name: "무농약 블루베리",
        price: 12900,
        quantity: 2,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4qRmHhnqjkOa9F_8ded4ubq0OC0jYYgAqBOT9T0egXlMRr8ZCMjQAVyxV2MtxKiOv8STpXFVv6OY9aNdBRBC4xhVUb0zm9EPySo-MNQDV13oA7FOBMkksVf19HtonQqL0kGrFIpJxCmDe_o6ZTeNnvNr43Hb-rkZeyf6_qcgArYTXCQuEZEsAYsmDVbMte8tVfiQ2W24LPWKIOoJ8C2598qZ2HLoXLNQjSFIurlQL4fE1XUSWZVcVV5_G0NUuJ52T-Zjk9Ef91lB1",
        imageAlt: "Fresh organic blueberries",
        variant: "1팩"
    }
];

// 체크아웃 페이지용 초기 아이템
export const INITIAL_CHECKOUT_ITEMS: CartItem[] = [
    {
        id: 1,
        name: "GAP 인증 설향 딸기 1kg",
        price: 18900,
        quantity: 1,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6lFa41fRSkzVys7MvkP5jO2owio7NDnFAJ-R9JD6ZWl8smR4gB0lWAjK3vkFVR1gtaXmzaDehXsP9MbhBDB2zZM4c-aZlvQjtGpBrJ_Gn_HArh9mhrUWblFbksuKCuHao-G23HFqKKOgeTxcdebqs8csnh8a5xYNo5UhyH68HFnzX3gL05l-0dT_1AduAR0Emgsq9vUKqM1e8XuGKtywKRyNfw7W7zFdTACR7ean6dx5_24u1VqaP-Le_OtuKQ25dwx3oNtuZqDrD",
        imageAlt: "Fresh strawberries in a basket"
    },
    {
        id: 2,
        name: "제주 월동 양배추 1통",
        price: 3500,
        quantity: 1,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzCHJ7e7R9RzAh9vsy895EAUzU_eAF1tY5AMVyeueUT3zsQy71v8Pl2ixAGJJDNZD-1qJK1Kp-1e4If43jQH6gzOsXjJM05Wzs9vj7E_2lJvctmgidUSi-iyHOLjFz1pX70PbAa8k-pakLUhl4D7Y1zLnSyoDRD-Vf2UYrZ0Da39xxka7pTjKxdVyPjht9Yv0nYGxAPrICBl0sblNrU1s8bmZvIT4h1mTzA4nVLSWyl80NXXz0ZtFhitW5DXH1i3YCwOAjcVMiYbT2",
        imageAlt: "A whole fresh cabbage"
    }
];

// 기본 배송비
export const DEFAULT_SHIPPING_COST = 3000;

// 기본 할인 금액
export const DEFAULT_DISCOUNT_AMOUNT = 2000;

