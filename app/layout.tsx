import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don Bryan | Senior AI Full-Stack Engineer",
  description:
    "Portfolio website for Don Bryan, a senior AI full-stack engineer building production-grade AI systems and modern product experiences."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
