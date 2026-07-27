import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiayang Lin | Football Video & Content",
  description:
    "Portfolio of Xiayang Lin, a football video editor and international content producer based near Leiden, Netherlands.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
