import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`dark ${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="selection:bg-indigo-500/25 dark:selection:bg-indigo-400/30 selection:text-foreground min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
