import { ApiResponse } from '@/types';

/**
 * API 베이스 URL
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * API 요청을 위한 fetch 래퍼 함수
 */
export async function fetchApi<T>(
    endpoint: string,
    options?: RequestInit
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: data.error || 'API 요청에 실패했습니다.',
            };
        }

        return {
            success: true,
            data: data as T,
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
        };
    }
}

/**
 * GET 요청
 */
export async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return fetchApi<T>(endpoint, { method: 'GET' });
}

/**
 * POST 요청
 */
export async function post<T>(
    endpoint: string,
    data?: unknown
): Promise<ApiResponse<T>> {
    return fetchApi<T>(endpoint, {
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
    });
}

/**
 * PUT 요청
 */
export async function put<T>(
    endpoint: string,
    data?: unknown
): Promise<ApiResponse<T>> {
    return fetchApi<T>(endpoint, {
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
    });
}

/**
 * DELETE 요청
 */
export async function del<T>(endpoint: string): Promise<ApiResponse<T>> {
    return fetchApi<T>(endpoint, { method: 'DELETE' });
}
