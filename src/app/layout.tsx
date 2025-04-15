import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/style/globals.css";
import Navbar from "@/components/Layout/Navbar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Syber",
  description: "Syper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
