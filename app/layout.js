import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import the context

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Context Color Theme Toggle Practice",
  description: "Use the context api to make a color theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* wrap the context */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
