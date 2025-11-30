'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    return (
        <div
            className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7LcTWFd4fcED3_ykSiUAd1c30dSZXZR0tTo9dCSKEuihfRnr0-7e24L2rz_vohEbyq9GjcygC7ggg25oBGWvuHKIaMK5RxIKjh47JalFbox-DnNvXwEZl2g2KmNWQsZLrvHG_hxRJAKbv18i3Js2NUPeFro7MqTGMWI6hD1QcK0GxnolyoaB711AI8bZt5zOUnnGo-DAD_TmNSEEp9IcCnzCLZRBi07C3oWBl4YXEVpxe9OcLII1u0TlX6OjyR9lpfLLZkMR6DCzn')"
            }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative flex w-full max-w-md flex-col rounded-xl bg-background-light p-8 shadow-2xl dark:bg-background-dark/90 dark:backdrop-blur-lg">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="size-8 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_6_535)">
                                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                            </g>
                            <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Fresh Harvest Market</h2>
                </div>

                <div className="flex w-full flex-col">
                    <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-200/50 p-1 dark:bg-gray-800/50">
                        <label className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${authMode === 'login' ? 'bg-white text-text-light shadow-md dark:bg-gray-700 dark:text-text-dark' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
                            <span className="truncate">로그인</span>
                            <input
                                className="invisible w-0"
                                name="auth-toggle"
                                type="radio"
                                value="Log In"
                                checked={authMode === 'login'}
                                onChange={() => setAuthMode('login')}
                            />
                        </label>
                        <label className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${authMode === 'signup' ? 'bg-white text-text-light shadow-md dark:bg-gray-700 dark:text-text-dark' : 'text-text-muted-light dark:text-text-muted-dark'}`}>
                            <span className="truncate">회원가입</span>
                            <input
                                className="invisible w-0"
                                name="auth-toggle"
                                type="radio"
                                value="Sign Up"
                                checked={authMode === 'signup'}
                                onChange={() => setAuthMode('signup')}
                            />
                        </label>
                    </div>

                    <form className="mt-6 flex flex-col gap-4">
                        <label className="flex flex-col">
                            <p className="pb-2 text-sm font-medium leading-normal text-text-light dark:text-text-dark">이메일</p>
                            <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-3 text-base font-normal leading-normal text-text-light placeholder:text-text-muted-light focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-text-dark dark:placeholder:text-text-muted-dark" placeholder="you@example.com" type="email" />
                        </label>
                        <label className="flex flex-col">
                            <p className="pb-2 text-sm font-medium leading-normal text-text-light dark:text-text-dark">비밀번호</p>
                            <div className="flex w-full flex-1 items-stretch">
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border border-r-0 border-gray-300 bg-white p-3 pr-2 text-base font-normal leading-normal text-text-light placeholder:text-text-muted-light focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-text-dark dark:placeholder:text-text-muted-dark" placeholder="••••••••" type="password" />
                                <div className="flex items-center justify-center rounded-r-lg border border-l-0 border-gray-300 bg-white px-3 text-text-muted-light dark:border-gray-600 dark:bg-gray-800 dark:text-text-muted-dark cursor-pointer">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                                </div>
                            </div>
                        </label>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                    className="h-4 w-4 rounded border-2 border-gray-300 bg-transparent text-primary checked:border-primary checked:bg-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-600"
                                    id="remember-me"
                                    type="checkbox"
                                    style={{
                                        backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23ffffff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")"
                                    }}
                                />
                                <label className="cursor-pointer text-sm font-normal leading-normal text-text-light dark:text-text-dark" htmlFor="remember-me">로그인 상태 유지</label>
                            </div>
                            <Link className="shrink-0 text-sm font-medium text-primary hover:underline" href="#">비밀번호 찾기</Link>
                        </div>

                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 mt-4 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">
                            <span className="truncate">{authMode === 'login' ? '로그인' : '회원가입'}</span>
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-background-light px-2 text-text-muted-light dark:bg-background-dark dark:text-text-muted-dark">소셜 계정으로 간편하게 시작하기</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                            <img alt="Kakao logo" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KxqXKt9hQf6tTZBxDDDjDL4LhqtAfFRlsv1hntk2SXfnrAGnThtCmvMS-u1RVzPD7q5QlolhT6ySJjoUU4ORXUuZ6ZHipsweTkPjd158UUzo-Di2AqykLyZcD0uKz7kGHwFIFNVHqW8Lcr5F63dEweALPul__GuY_HZhbayXlF_JkLAxO041KcmHnbcYsG9TDgMsKXYImBHkDmkBdZ0Q0Z3mYfqE_SecsqFwHq9iplpPHs4WT4t_FADhk46ERzPGNzJcOHOwTdSz" />
                            <span className="text-text-light dark:text-text-dark">카카오로 계속하기</span>
                        </button>
                        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                            <img alt="Naver logo" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuFQe8QNUTNNQDqsmb1UQheiXVHQcKj0h9VhPi_vrYJwUXwV3pZl-PZ1ZT4EweZxQMN9PToCvkKTvyNHu0bdcplfTP4ZjnbuFdFQcg6NMGU-hhMgS4tGNHPWy7X-hWTozqtkqRMaZrsVQt2jF2CdBr9jH8CWUtHnF_mVfEYq4f6HxuqjqLJU2IJGJoWGg0iJn-_mYVhcMn_tw-HkKSYcNCfdSlXiapa7bp12d0DW7H44JFslEswAV4czq52p6aXdrOogIE85qUWhV9" />
                            <span className="text-text-light dark:text-text-dark">네이버로 계속하기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
