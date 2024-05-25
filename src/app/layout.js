/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tareq Monower",
  description: "Professional Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider className="no-scrollbar">
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
