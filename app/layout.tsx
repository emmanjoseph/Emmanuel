import type { Metadata } from "next";
import { Noto_Znamenny_Musical_Notation } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Noto_Znamenny_Musical_Notation({
  variable: "--font-geist-sans",
  weight:["400"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Emmanuel",
  description: "Emmanuel Mulwa.com",
  icons:{
     icon:"/alien.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${geistSans.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
