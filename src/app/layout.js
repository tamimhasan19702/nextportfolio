/** @format */

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tareq Monower",
  description: "Professional Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b form-blue-100 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
