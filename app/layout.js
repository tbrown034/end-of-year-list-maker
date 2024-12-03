import localFont from "next/font/local";
import "./globals.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Listly",
  description: "Created by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} p-2 flex flex-col min-h-screen  justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
