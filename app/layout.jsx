'use client'
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import SideSheet from "@/components/sideSheet";
import ProfileHeader from "@/components/Profile-header";
import SideBar from "@/components/SideBar";
import { DarkModeToggle } from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}  >
        <ThemeProvider attribute="class" defaultTheme="system" >
          <div className="lg:hidden flex flex-row justify-between items-center w-screen p-2 h-20 bg-zinc-200 dark:bg-zinc-900 fixed top-0 left-0 ">
            <ProfileHeader />
            <div className="flex flex-row justify-center items-center gap-2">
              <DarkModeToggle />
              <SideSheet />
            </div>
          </div>
          <div className="max-md:mt-20 flex h-screen w-screen flex-row gap-2 ">
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
