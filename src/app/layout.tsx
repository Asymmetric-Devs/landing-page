import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
      className={`${spaceGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var blockedAttrs = { bis_skin_checked: 1, bis_register: 1 };
                  var origSetAttribute = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, value) {
                    if (name && blockedAttrs[String(name).toLowerCase()]) return;
                    return origSetAttribute.apply(this, arguments);
                  };
                  var stripExtensionAttrs = function(root) {
                    if (!root || !root.querySelectorAll) return;
                    var nodes = root.querySelectorAll('[bis_skin_checked], [bis_register]');
                    for (var i = 0; i < nodes.length; i++) {
                      nodes[i].removeAttribute('bis_skin_checked');
                      nodes[i].removeAttribute('bis_register');
                    }
                  };
                  stripExtensionAttrs(document.documentElement);
                  var obs = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName && blockedAttrs[m.attributeName]) {
                        m.target.removeAttribute(m.attributeName);
                      } else if (m.type === 'childList' && m.addedNodes) {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node && node.nodeType === 1) {
                            node.removeAttribute('bis_skin_checked');
                            node.removeAttribute('bis_register');
                            stripExtensionAttrs(node);
                          }
                        }
                      }
                    }
                  });
                  obs.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register'],
                    childList: true,
                    subtree: true
                  });
                } catch (e) {}
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
      <body
        suppressHydrationWarning
        className="selection:bg-accent selection:text-accent-foreground min-h-full flex flex-col font-sans bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
