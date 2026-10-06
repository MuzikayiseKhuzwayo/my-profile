import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muzi Khuzwayo | Systems Architect & Automator",
  description: "Personal operating system, engineering projects, autonomous workflow automation, and the Hyper-Intentionalism dispatch by Muzi Khuzwayo.",
  keywords: ["Muzi Khuzwayo", "Systems Architect", "Automation", "Autonomous Agents", "Hyper-Intentionalism", "Cape Town", "Software Engineer"],
  authors: [{ name: "Muzi Khuzwayo", url: "https://x.com/3mk4y_" }],
  openGraph: {
    title: "Muzi Khuzwayo | Systems Architect & Automator",
    description: "Engineering deterministic systems from unexamined assumptions. Operational portfolio, active ventures, and dispatches.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzi Khuzwayo | Systems Architect & Automator",
    description: "Engineering deterministic systems from unexamined assumptions. Operational portfolio, active ventures, and dispatches.",
    creator: "@3mk4y_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
