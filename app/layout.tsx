import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importing your new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Agency Portfolio",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* This places the Navbar at the top of EVERY page */}
        {children} {/* This renders the content from page.tsx underneath */}
      </body>
    </html>
  );
}