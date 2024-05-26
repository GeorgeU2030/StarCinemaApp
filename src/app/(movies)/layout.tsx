import { Footer, NavBar } from "@/components";

export default function MoviesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="px-0 sm:px-5">{children}</div>
      <Footer />
    </main>
  );
}
