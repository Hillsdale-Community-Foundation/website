import React from 'react';
import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import Navigation from "@/app/_components/navigation";
import Script from "next/script";
import "./globals.css";

// Use default system fonts to avoid fetching external assets during build

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hillsdalecommunityfoundation.org'),
  title: 'Hillsdale Community Foundation',
  description: 'Building community in Hillsdale since 2006',
  openGraph: {
    images: ['/assets/hcf-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Script src="https://formspree.io/js/formbutton-v1.min.js" strategy="afterInteractive" />
        <Script id="feedback-widget" strategy="afterInteractive">
          {`
            window.formbutton = window.formbutton || function(){(formbutton.q = formbutton.q || []).push(arguments);};
            formbutton("create", {
              action: "https://formspree.io/f/mblyynrw",
              title: "How can we help?",
              fields: [
                { type: "email", label: "Email:", name: "email", required: true, placeholder: "your@email.com" },
                { type: "textarea", label: "Message:", name: "message", placeholder: "What's on your mind?" },
                { type: "submit" }
              ],
              styles: {
                title: { backgroundColor: "gray" },
                button: { backgroundColor: "#2563eb" }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
