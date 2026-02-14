import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Srividhya — Full-Stack Developer",
  description:
    "Personal portfolio of Srividhya — full-stack developer, data engineer, and cloud enthusiast building applications that solve real-world problems.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { Navbar } from "~/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
