'use client'
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import SideSheet from "@/components/sideSheet";
import ProfileHeader from "@/components/Profile-header";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}  >
        <ThemeProvider attribute="class" defaultTheme="dark" >
          <div className="lg:hidden flex flex-row justify-between items-center w-screen p-2 h-20 bg-zinc-900 ">
            <ProfileHeader />
            <SideSheet />
          </div>
          <div className="flex h-screen w-screen flex-row gap-2 ">
            <SideBar />
            <div className="max-md:w-full lg:w-4/5">
              {children}
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
