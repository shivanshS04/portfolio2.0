'use client'
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import SideSheet from "@/components/sideSheet";
import ProfileHeader from "@/components/Profile-header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="lg:hidden flex flex-row justify-between items-center w-screen p-2 h-20 bg-zinc-900 ">
            <ProfileHeader />
            <SideSheet />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
