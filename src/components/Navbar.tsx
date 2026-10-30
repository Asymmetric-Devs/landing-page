"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

function subscribeTheme(onStoreChange: () => void) {
  if (typeof document === "undefined") return () => {};
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getThemeServerSnapshot(): "light" | "dark" {
  return "light";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("no-transitions");

    const nextTheme = theme === "light" ? "dark" : "light";
    if (nextTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);

    // Force style flush then restore transitions on next frame (better-ui rule)
    void root.offsetHeight;
    requestAnimationFrame(() => {
      root.classList.remove("no-transitions");
    });
  };

  const navLinks = [
    { name: "Proyectos", href: "/#proyectos", idx: "01" },
    { name: "Noticias", href: "/#noticias", idx: "02" },
    { name: "Servicios", href: "/#servicios", idx: "03" },
    { name: "Equipo", href: "/#nosotros", idx: "04" },
    { name: "Contacto", href: "/#contacto", idx: "05" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 border-b border-border-subtle transition-colors duration-150 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md"
            : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full border-x border-border-subtle flex items-stretch justify-between">
          {/* Left Cell: Brand Logo */}
          <Link
            href="/"
            className="group px-5 sm:px-7 border-r border-border-subtle flex items-center gap-2.5 hover:bg-surface transition-colors duration-150 shrink-0"
          >
            <span className="font-sans font-bold tracking-[-0.04em] text-lg sm:text-xl text-foreground">
              ASYMMETRIC
            </span>
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-none bg-[#FF4D15] text-white tracking-wider uppercase">
              [DEVS]
            </span>
          </Link>

          {/* Center Cells: Desktop Navigation */}
          <nav
            className="hidden lg:flex items-stretch flex-1"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group flex-1 px-4 border-r border-border-subtle flex items-center justify-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-brand-muted hover:text-foreground hover:bg-surface transition-colors duration-150 relative"
              >
                <span className="text-[10px] text-[#FF4D15] opacity-75 group-hover:opacity-100">
                  {link.idx}
                </span>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Cells: Status + Theme Switcher + Flush Orange CTA */}
          <div className="hidden lg:flex items-stretch shrink-0">
            {/* Location / Status Cell */}
            <div className="px-4 border-r border-border-subtle flex items-center gap-2 font-mono text-[11px] font-semibold text-brand-muted uppercase tracking-wider bg-surface/50">
              <span className="w-2 h-2 bg-[#FF4D15] inline-block" />
              <span>NEA · AR</span>
            </div>

            {/* Theme Toggle Cell */}
            <button
              onClick={toggleTheme}
              className="w-14 border-r border-border-subtle flex items-center justify-center text-foreground hover:bg-surface active:scale-[0.97] transition-[background-color,transform] duration-150 cursor-pointer"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="w-4 h-4 text-[#FF5B26]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Flush CTA Cell */}
            <Link
              href="/#contacto"
              className="px-6 flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider bg-[#FF4D15] hover:bg-[#E03E0B] text-white transition-colors duration-150"
            >
              <span>HABLEMOS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-stretch lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-14 border-l border-border-subtle flex items-center justify-center text-foreground hover:bg-surface transition-colors duration-150"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-[#FF5B26]" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 border-l border-border-subtle flex items-center justify-center text-foreground bg-surface hover:bg-[#FF4D15] hover:text-white transition-colors duration-150"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-border-subtle pt-16 flex flex-col justify-between overscroll-contain overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="divide-y divide-border-subtle border-b border-border-subtle">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-6 py-4 font-sans text-lg font-bold tracking-tight text-foreground hover:bg-surface transition-colors duration-150"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-[#FF4D15]">[{link.idx}]</span>
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-border-subtle bg-surface flex flex-col gap-4">
                <span className="font-mono text-[11px] text-brand-muted uppercase tracking-widest">
                  ¿Tenés un proyecto en mente?
                </span>
                <Link
                  href="/#contacto"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-none text-xs font-mono font-bold uppercase tracking-wider bg-[#FF4D15] text-white hover:bg-[#E03E0B] transition-colors duration-150"
                >
                  Iniciar Proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
