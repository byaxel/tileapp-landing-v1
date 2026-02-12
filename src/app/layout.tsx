import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/language-context";
import { Analytics } from "@vercel/analytics/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tileapp.byaxel.dev"),
  title: {
    default: "Tile App — Subscription Tracker",
    template: "%s | Tile App",
  },
  description:
    "Tile helps you track your subscriptions easily, control your spending, and customize everything to your style.",
  keywords: [
    "subscriptions",
    "expenses",
    "budget",
    "subscription manager",
    "Tile App",
    "iOS",
    "spending tracker",
  ],
  authors: [{ name: "Axel Álvarez Santos", url: "https://byaxel.dev" }],
  creator: "Axel Álvarez Santos",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://tileapp.byaxel.dev",
    siteName: "Tile App",
    title: "Tile App — Subscription Tracker",
    description:
      "Tile helps you track your subscriptions easily, control your spending, and customize everything to your style.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile App — Subscription Tracker",
    description:
      "Tile helps you track your subscriptions easily, control your spending, and customize everything to your style.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-itunes-app": "app-id=6748356798",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      <head>
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
      </head>
      <body className={`${roboto.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
