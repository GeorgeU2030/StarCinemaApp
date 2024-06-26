import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import ReduxProvider from "./provider";
import SessionWrapper from "./SessionWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarCinema",
  description: "StarCinema - The best movies in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
    </SessionWrapper>
  );
}
