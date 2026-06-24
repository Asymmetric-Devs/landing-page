import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Asymmetric Devs | Software a Medida, Web & Automatizaciones Inteligentes",
  description: "Diseño web moderno enfocado en conversión, automatización de procesos con IA y desarrollo de software a medida con absoluta precisión técnica.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "Desarrollo Web",
    "Landing Pages",
    "Automatizaciones con IA",
    "Software a Medida",
    "Next.js",
    "Diseño UI/UX Moderno",
    "Desarrollo de Software Argentina",
    "Conversión Digital",
    "Automatizaciones Inteligentes"
  ],
  authors: [{ name: "Asymmetric Devs", url: "https://asymmetricdevs.com" }],
  creator: "Asymmetric Devs",
  metadataBase: new URL("https://asymmetricdevs.com"),
  openGraph: {
    title: "Asymmetric Devs | Software a Medida, Web & Automatizaciones Inteligentes",
    description: "Diseño web moderno enfocado en conversión, automatización de procesos con IA y desarrollo de software a medida con absoluta precisión técnica.",
    url: "https://asymmetricdevs.com",
    siteName: "Asymmetric Devs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asymmetric Devs | Software a Medida, Web & Automatizaciones Inteligentes",
    description: "Diseño web moderno enfocado en conversión, automatización de procesos con IA y desarrollo de software a medida con absoluta precisión técnica.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetbrainsMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  if (theme === 'dark' || (!theme && darkQuery.matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="selection:bg-neutral-200 dark:selection:bg-zinc-800 dark:selection:text-zinc-200 selection:text-neutral-900 min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
