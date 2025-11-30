import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">
                            고객센터
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    1644-1234
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    1:1 문의
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    공지사항
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">
                            회사 정보
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    회사 소개
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    채용 정보
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">
                            약관 및 정책
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    이용약관
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                    개인정보처리방침
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-text-light dark:text-text-dark tracking-wider uppercase">
                            소셜 미디어
                        </h3>
                        <div className="flex space-x-6">
                            <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                <span className="sr-only">Facebook</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        clipRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#">
                                <span className="sr-only">Instagram</span>
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        clipRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 1.545c-1.02.046-1.634.21-2.188.437a3.339 3.339 0 00-1.217.882 3.339 3.339 0 00-.882 1.217c-.227.554-.391 1.168-.437 2.188-.046 1.004-.057 1.348-.057 3.731s.011 2.727.057 3.731c.046 1.02.21 1.634.437 2.188a3.339 3.339 0 00.882 1.217 3.339 3.339 0 001.217.882c.554.227 1.168.391 2.188.437 1.004.046 1.348.057 3.731.057s2.727-.011 3.731-.057c1.02-.046 1.634-.21 2.188-.437a3.339 3.339 0 001.217-.882 3.339 3.339 0 00.882-1.217c.227-.554.391-1.168.437-2.188.046-1.004.057-1.348.057-3.731s-.011-2.727-.057-3.731c-.046-1.02-.21-1.634-.437-2.188a3.339 3.339 0 00-.882-1.217 3.339 3.339 0 00-1.217-.882c-.554-.227-1.168-.391-2.188-.437-1.004-.046-1.348-.057-3.731-.057s-2.727.011-3.731.057z"
                                        fillRule="evenodd"
                                    />
                                    <path d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm-3.568 5.135a3.568 3.568 0 117.136 0 3.568 3.568 0 01-7.136 0z" />
                                    <path d="M16.802 6.11a1.265 1.265 0 100 2.53 1.265 1.265 0 000-2.53z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-border-light dark:border-border-dark pt-8 text-center text-base text-text-muted-light dark:text-text-muted-dark">
                    <p>© 2024 Fresh Harvest Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
