/** @format */

import { Courier_Prime } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
});

export const metadata = {
  title: "Tareq Monower",
  description: "Professional Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={courier.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
