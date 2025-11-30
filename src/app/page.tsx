import ProductCard from '@/components/products/ProductCard';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Hero Section */}
          <div className="w-full @container">
            <div className="flex flex-col gap-6 p-4 py-10 @[480px]:gap-8 @[864px]:flex-row bg-surface-light dark:bg-surface-dark rounded-xl">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                role="img"
                aria-label="Freshly harvested strawberries in a basket"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdMn8fnWtH97gwflsfvDwrAJPMnfrXz92Aj_hk5jauXGcR5x5oKyX6Znio-S9EPv6V6gFb7IzN6fkXd5mQZXXg1bMTMumYSILgt1e2_CZS6JaaYLcfvM6WS200gXFk2NEK0354xagfi9gQL_KdI4MSHh43iK3Lhq16W0CqgrKfgG1TJoeXL5p8SSGuOJ4ieLSAFKGd6iPoR1wDlXUqGww4YIgGwFwRJtsFBRLuU_8RmcghRvjBGA1ijpa4auL9RPjYaJbCX-rNhsiu")',
                }}
              />
              <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    오늘 막 수확한 제철 딸기
                  </h1>
                  <h2 className="text-text-light dark:text-text-dark text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    산지에서 직접 배송되는 신선함을 집에서 느껴보세요.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">자세히 보기</span>
                </button>
              </div>
            </div>
          </div>

          {/* MD Recommendation Section */}
          <section className="mt-10 sm:mt-16">
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              MD가 추천하는 이달의 상품
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <ProductCard
                name="유기농 대추방울토마토"
                price={15900}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBXOhB4XjLyssn2UweWvwaZ10KmlMYCSHrYmStfEdAYNkt5MLKsbt6TJQvMGtlJsrE5jwi3Xy2zSPhsetvFJ319GGnCwzqhP31ake4AADmzHILj21nWkW62qyWqEKpylYyPX9PurPIcVJwhiqh659-XApf0V0t98yyXyL6BGiPQfr7gZMIF5dVYl2MeHGwUn68giNzpD3Sbea6xIr7pnfLGVE-TAvcVHcxS8tQC0xq4wyuGMXCeNFiVYme6B3MnzAdhPEuWn8eyyj0F"
                imageAlt="Organic grape tomatoes"
              />
              <ProductCard
                name="아삭한 로메인 상추"
                price={3500}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBnsjjk0EjdM6_Vi7Eid_DJOXCXxjf1LEiU80Ow-9ZVub9GHWrtvf5GMqo7xOkwuReTPc2abAejHihdOE-VSR9E6aRbZLF8zqcSzn7Goh7sYkXnpLFpQumt16321LPKEOPvTg_hBZ2Z_1MutfkFavRNbA_6AgsH7XF-W9tfRebF_wH8__uiXnELUmWAq_g3upKpu4e-QVbMw8O069a94vay2V9R3a6gFbdm7eh5KP-cThAUGhviiBgTXOL0Bz6v4B9Md5nLb2khrlZP"
                imageAlt="Crispy romaine lettuce"
              />
              <ProductCard
                name="고당도 샤인머스캣"
                price={25000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDEW_vn6soRg2U_ge7iIXGzxb5KuabyVqnw_y88ERTFAFJT-zqJNJYYYeHXtSyw8lWTOc4xWrOB5IcKoTNfvBW0XBgmEqI_65_tr6VgStTvVujEbFiLdpu8MbUb74m5kAN6g8Upcu2H1Zyf00v8bMNEfMDgbjCexkZ6CqJsr9ytngD9oR0GBdAHuukliqkFBjPLN3dWdKk2Kjh64GOOwxvyU3O4B8ICSSG4QuAfAkLs1QB-Rdho_z3vDISLJq-OULoYrGHGzKUP4NcO"
                imageAlt="High-sugar Shine Muscat grapes"
              />
              <ProductCard
                name="제주 흑돼지 오겹살"
                price={22000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCLTrgXNztUXs0823PaJVuifbTtihjaTdb7gSOgCIX1JD-mY8FaFco1fruRshJFd2QGrxwu7iP1ZYZen0156nQ7GL5cjfWiGvUoV3W6SwtI70APxM2NQiiKqe36rCW6qs-_v32DViNB_DnVUolxIQ_IW0kJpg_IcUNIxxtDyYbLMi5_KWsGbvI3nZBgivP4mK3kKNBPy2yMRUKYdQgSxKbQCS7xGKD_Z6IesUNYIjFZ26P2Lo-fqcAs3doW5Qt71blUvIqllcgkPeck"
                imageAlt="Jeju black pork belly"
              />
            </div>
          </section>

          {/* Farmer Story Section */}
          <section className="mt-10 sm:mt-16">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[480px]:rounded-lg min-h-[218px]"
                  role="img"
                  aria-label="A farmer holding fresh vegetables in a clean field in Jeju"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5hPN8CjOinmdDFdlMkgtYzwZNYa608z0xX60a9c9grBoXqyHndivkOfkO5QjYNTCZO_z6iOwViur9wLqxuqTzvbjA5iSm5H6-ftACJOyY1hNlUqohs4S_ciL1pU0VEiCmQl0gJPN_SEAN0f7llLMkZbVtwqg_pE6vWOHMEJrdCpZ-649jjTHGFOOZYkqq2FXBkfgvvT6r4HLiBJpLhQhJ_-8RROIL_sR7MWxVEjvCzowZscketrqOIo1Tu4rJJiJCH3XG2VwARxjI")',
                  }}
                >
                  <div className="flex p-4">
                    <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                      청정 제주 농부 이야기
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Products Section */}
          <section className="mt-10 sm:mt-16">
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              모두가 주목하는 인기 상품 Best
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <ProductCard
                name="완도 활전복"
                price={35000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuALkLrcUlwsYloLFIjo3P3qEoT3VwU1JwWhW5bzAjdVz027lV1IlSepfp4XpbRQGIgOdtwnrWC8vEpxTbBxyuCiddZjiF83tku4YbMs4hJnsxcjS3jZ4qAcKUklp3EimMa5MdW4cpSq_3F0NgoHwKgNQR2RcqL1F0N9VmEvqUKn4NQnloxMO-4f3GN-bXhvEZa9xZFESQdCvO-F7PdgMMZapdxWc7jlQcAdslK5R-Puwhe3_rZDRI3Brh2pc88gZoaHGKmOpJdVggWg"
                imageAlt="Fresh abalone from Wando"
              />
              <ProductCard
                name="유기농 당근 주스"
                price={12000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBnyzuEa9nOJAf53E_C2skhCC-CWAPzJHZrdr0at3umRx-Ta3VHNfW8cp5538EvpCTLaTr7bQsynGz8aaiQgQypmbGQFc-KXWbs5jx1nmVx0P0evh0dkswG-iMnzWis9ZJGEAyNVHP45ahGU3nWbvUOVyVPEzudcNEKb72QRbpnj22vE5kGlyRGHF38c9mATkdvwUjZ4mUBGzhMzJ2sOt5Uc2UymBfLWjFYztdwhoS_IWz7NtRswIvQAPrQJoHwasnUfBpx59pZHP7y"
                imageAlt="A glass of fresh carrot juice"
              />
              <ProductCard
                name="무농약 블루베리"
                price={18000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB0kMKKzOXvF2iNRc1nXeLO3MgNP4s5ekemoImCxsnUN0SCEVFix6QCqfpenuPJRuMNRvAPvWyDxlxtQpiOw1mvFsB5swoEuwltkFpyswStStqGDMMcMUtIIMP2uHvwgixI4jr-Rx2Gh3JrtoXTJ5L5mI4eml9rS4_Rsi6DqNtvcmHnwGahIw8F4wl3gaDFgMlJqlw2tUmqGrrU9xwats3nrOX5xExyiQRSTF2CaRVDrC1rccyT7jYvNpVP09qFj9Jmq5NFhIVU3elW"
                imageAlt="A basket of fresh blueberries"
              />
              <ProductCard
                name="프리미엄 한우 선물세트"
                price={120000}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDCEm7oSbFDLW0ApdbJAF2RWFjBEwVwesK-LcUUCSmxid1VP7Rw5TmWLuqf-AG7mXkAWCtl82jWvdhh8KaN_jjdIOIPu5nJ73GbDMGaUgzUjgEu4e3I8XCbyP_4bUb38r79dBi3ZSSCkJGN8kB6WCRyLxs4oGcUGQpYhfdEHuwZS50UPWitHiN22HBnBBKFlNJGlof2lsgbIeFyEK_X0xCWOt_2xN-OWns1Zg0BOPOHnyNAqxBCw2HoUK6dbb-35UjCbasTj_cQv0DM"
                imageAlt="A premium Hanwoo beef set"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
