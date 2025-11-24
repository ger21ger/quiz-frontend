import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// ⬇️ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Maintenance Logger",
  description: "Mini project using Next.js and Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* ⬇️ Bootstrap JavaScript (agar komponen seperti modal, dropdown, collapse bekerja) */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
