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
  title: "Asymmetric Devs | Ingeniería de Software, Apps Móviles, Web & IA",
  description:
    "Estudio de ingeniería de software en Argentina. Desarrollamos plataformas web comerciales, aplicaciones móviles (iOS/Android) y automatizaciones con Inteligencia Artificial.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "Asymmetric Devs",
    "Desarrollo de Software Argentina",
    "Desarrollo Web Next.js",
    "Aplicaciones Móviles React Native",
    "Automatizaciones con IA",
    "Software a Medida Corrientes Chaco",
    "Diseño UI/UX Moderno",
  ],
  authors: [{ name: "Asymmetric Devs", url: "https://asymmetric.com.ar" }],
  creator: "Asymmetric Devs",
  metadataBase: new URL("https://asymmetric.com.ar"),
  openGraph: {
    title: "Asymmetric Devs | Ingeniería de Software, Apps Móviles, Web & IA",
    description:
      "Transformamos desafíos de negocio en productos digitales reales: plataformas web de alta conversión, aplicaciones móviles y sistemas con IA.",
    url: "https://asymmetric.com.ar",
    siteName: "Asymmetric Devs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asymmetric Devs | Ingeniería de Software, Apps Móviles, Web & IA",
    description:
      "Estudio de ingeniería de software: plataformas web, apps móviles e Inteligencia Artificial aplicada.",
  },
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
      <body className="selection:bg-emerald-500/20 dark:selection:bg-emerald-400/20 selection:text-foreground min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
