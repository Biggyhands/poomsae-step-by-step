import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import MainNav from "@/components/navbar/MainNav";
import Footer from "@/components/navbar/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poomsae Step by Step",
  description: "Taekwondo general guide",
  icons: {
    icon: "/tkdicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen antialiased`}
      >
        {/*Theme context provider for dark or light mode*/}
        <ThemeProvider>
          {/* Main navigation bar */}
          <MainNav />
          {/* Main content */}
          {children}
          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
