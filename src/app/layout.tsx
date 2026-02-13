import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { SpotlightBackground } from "~/components/SpotlightBackground";

export const metadata: Metadata = {
  title: "Srividhya Portfolio",
  description: "Personal Portfolio of Srividhya",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

import { Navbar } from "~/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-navy text-beige antialiased selection:bg-teal selection:text-white">
        <Navbar />
        <SpotlightBackground />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
