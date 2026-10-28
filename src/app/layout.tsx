import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halvad Henri naljad",
  description: "Üks halb Henri nali korraga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  );
}
