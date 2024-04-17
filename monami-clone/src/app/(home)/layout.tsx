import type { Metadata } from "next";
import "../../../../style/globals.css";
import Header from "../components/header/Header";

export const metadata: Metadata = {
  title: "monami-clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}