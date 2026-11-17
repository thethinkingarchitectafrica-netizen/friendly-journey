import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Thinking Architect: a community for people in architecture",
  description:
    "A pan-African community for people in architecture at every stage. Join for live sessions, resources and honest conversations about the profession.",
  openGraph: {
    title: "The Thinking Architect",
    description: "Nobody should have to figure out this profession alone.",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
