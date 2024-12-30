import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import { GlobalContextProvider } from "./context/globalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalContextProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex w-full bg-stone-100">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
