/** @format */

import type { ReactNode } from "react";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
});

export const metadata = {
  title: "Tareq Monower",
  description: "Professional Web Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={courier.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
