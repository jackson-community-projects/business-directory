import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { classNames } from "@/components/utilities";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full min-h-[100vh] w-full max-w-[100vw] overflow-x-hidden"
    >
      <body
        className={classNames(
          inter.className,
          "flex h-full w-full min-w-[500px] flex-col",
        )}
      >
        {children}
      </body>
    </html>
  );
}
