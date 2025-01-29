import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Camaleonic Dashboard Test",
  description:
    "This is a web app created by Fran Benages to test his capabilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col text-[#BEC0BF] bg-[#1D1C1D]`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
