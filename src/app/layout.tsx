import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "roshi",
  description: "Discover roshi",
  icons: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
