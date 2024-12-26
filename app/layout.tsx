import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: "400", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Bhavy Jogani | Full Stack Web Developer",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className="m-0 p-0 bg-[#161616] text-[#f5f5f5]"
        style={{ fontFamily: oswald.style.fontFamily }}
      >
        <main className="w-full relative px-8 grid gap-16" id="mainWrapper">
            {children}
        </main>
      </body>
    </html>
  );
}
