import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { classNames } from "@/components/utilities";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Business Directory",
  description: "A searchable business directory for Jackson, MN.",
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
          "flex h-full w-auto min-w-[400px] flex-col overflow-x-hidden",
        )}
      >
        {children}
      </body>
    </html>
  );
}
