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
  title: "Renda Passiva Vitalícia - Aprenda a Gerar Renda Passiva",
  description:
    "Curso completo de investimentos e renda passiva. Aprenda a construir patrimônio, gerar dividendos e conquistar independência financeira.",
  keywords:
    "renda passiva, investimentos, dividendos, FIIs, ações, independência financeira, planejamento patrimonial",
  authors: [{ name: "Renda Passiva Vitalícia" }],
  openGraph: {
    title: "Renda Passiva Vitalícia - Aprenda a Gerar Renda Passiva",
    description:
      "Curso completo de investimentos e renda passiva. Aprenda a construir patrimônio, gerar dividendos e conquistar independência financeira.",
    url: "https://rendapassivavitalicia.com",
    siteName: "Renda Passiva Vitalícia",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
