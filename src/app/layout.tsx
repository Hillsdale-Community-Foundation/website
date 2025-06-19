import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/app/_components/navigation";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navigation />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Script src="https://formspree.io/js/formbutton-v1.min.js" strategy="afterInteractive" />
        <Script id="feedback-widget" strategy="afterInteractive">
          {`
            window.formbutton = window.formbutton || function(){(formbutton.q = formbutton.q || []).push(arguments);};
            formbutton("create", {
              action: "https://formspree.io/f/your-form-id",
              title: "Website Feedback",
              description: "Found a problem or have a request? Let us know!",
              fields: [
                { type: "text", name: "name", label: "Name" },
                { type: "email", name: "email", label: "Email (optional)" },
                { type: "textarea", name: "message", label: "Feedback", required: true },
                { type: "submit" }
              ],
              styles: {
                title: { backgroundColor: "#2563eb" },
                button: { backgroundColor: "#2563eb" }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
