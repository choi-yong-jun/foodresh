export default function ProductFilterSidebar() {
    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
                <div className="p-6 rounded-lg bg-surface-light dark:bg-surface-dark">
                    <h3 className="text-lg font-bold mb-4 text-text-light dark:text-text-dark">필터</h3>
                    <div className="space-y-6">
                        {/* Price Range */}
                        <div>
                            <h4 className="font-semibold mb-3 text-text-light dark:text-text-dark">가격 범위</h4>
                            <div className="relative h-1 bg-gray-300 dark:bg-gray-600 rounded-full">
                                <div className="absolute h-1 bg-primary rounded-full" style={{ left: '10%', width: '65%' }}></div>
                                <div className="absolute -top-1.5 w-4 h-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-full cursor-pointer" style={{ left: '10%' }}></div>
                                <div className="absolute -top-1.5 w-4 h-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-full cursor-pointer" style={{ left: '75%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm text-text-muted-light dark:text-text-muted-dark mt-3">
                                <span>1,000원</span>
                                <span>50,000원</span>
                            </div>
                        </div>

                        {/* Sub-categories */}
                        <div>
                            <h4 className="font-semibold mb-3 text-text-light dark:text-text-dark">세부 카테고리</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">쌈채소</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">샐러드채소</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">잎채소</span>
                                </label>
                            </div>
                        </div>

                        {/* Origin */}
                        <div>
                            <h4 className="font-semibold mb-3 text-text-light dark:text-text-dark">생산지</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">전남 해남</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">제주</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">강원도 고랭지</span>
                                </label>
                            </div>
                        </div>

                        {/* Certification */}
                        <div>
                            <h4 className="font-semibold mb-3 text-text-light dark:text-text-dark">인증</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">유기농</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">무농약</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-checkbox rounded text-primary focus:ring-primary/50 bg-background-light dark:bg-surface-dark border-gray-300 dark:border-gray-600" type="checkbox" />
                                    <span className="text-text-light dark:text-text-dark">HACCP</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
