"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayoutClient = ({ children }) => {
  const pathname = usePathname();
  const excludeSidebarRoutes = [
    "/login",
    "/signup",
    "/view/landingpage",
    "/view/Home",
  ];

  const shouldShowSidebar = !excludeSidebarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {shouldShowSidebar && <AppSidebar />}
            <main>
              {shouldShowSidebar && <SidebarTrigger />}
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayoutClient;
