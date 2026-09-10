import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr CA Manohar Career Guidance",
  description: "Career Guidance Counselling & Allied Services under 1 Roofs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Mano's Career Guidance</h1>
            <ul className="flex space-x-4">
              <li><Link href="#home">HOME</Link></li>
              <li><Link href="#about">ABOUT FOUNDER</Link></li>
              <li><Link href="#services">SERVICES</Link></li>
              <li><Link href="#packages">PACKAGES</Link></li>
              <li><Link href="#testimonials">TESTIMONIALS</Link></li>
              <li><Link href="#contact">CONTACT US</Link></li>
            </ul>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          &copy; 2026 Dr. C.A. Manohar Vyankatesh Kale. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
