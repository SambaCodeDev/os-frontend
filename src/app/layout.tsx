import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Mui from "@/components/mui/mui";
import Toastify from "@/components/toastify";
import { AuthProvider } from "@/contexts/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocurrence System",
  description: "Ocurrence System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mui>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toastify />
        </Mui>
      </body>
    </html>
  );
}
