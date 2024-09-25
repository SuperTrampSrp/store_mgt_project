import NavBar from "@/components/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div>
                <NavBar />
            </div>
            {children}
        </main>
    );
}
