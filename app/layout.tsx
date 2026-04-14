import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empath - Mental Wellness Simplified",
  description: "Your private mental wellness companion. Check in, reframe thoughts, and explore guided tools designed for your mind.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
