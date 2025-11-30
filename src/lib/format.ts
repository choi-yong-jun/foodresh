/**
 * 가격 포맷팅 유틸리티 함수
 */

/**
 * 숫자를 한국 원화 형식으로 포맷팅
 * @param amount 금액
 * @returns 포맷팅된 문자열 (예: "12,000원")
 */
export function formatPrice(amount: number): string {
    return `${amount.toLocaleString('ko-KR')}원`;
}

/**
 * 숫자를 한국 원화 형식으로 포맷팅 (원 단위 없이)
 * @param amount 금액
 * @returns 포맷팅된 문자열 (예: "12,000")
 */
export function formatAmount(amount: number): string {
    return amount.toLocaleString('ko-KR');
}

