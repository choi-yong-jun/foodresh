export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {/* TODO: Add Header, Navigation, etc. */}
            <main>{children}</main>
            {/* TODO: Add Footer */}
        </div>
    );
}
