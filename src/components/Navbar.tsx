"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });

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
    setTheme(nextTheme);

    // Force style flush then restore transitions on next frame (better-ui rule)
    void root.offsetHeight;
    requestAnimationFrame(() => {
      root.classList.remove("no-transitions");
    });
  };

  const navLinks = [
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Noticias", href: "/#noticias" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Equipo", href: "/#nosotros" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-200 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="font-sans font-extrabold tracking-tight text-xl text-foreground group-hover:opacity-80 transition-opacity duration-150">
              ASYMMETRIC
            </span>
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/12 dark:bg-emerald-400/12 text-emerald-800 dark:text-emerald-300 border border-emerald-600/20 dark:border-emerald-400/20">
              [devs]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-neutral-600 dark:text-zinc-400 hover:text-foreground transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-neutral-200/80 dark:border-zinc-800 hover:bg-neutral-100 dark:hover:bg-zinc-900 text-neutral-600 dark:text-zinc-400 hover:text-foreground active:scale-[0.96] transition-[background-color,color,transform] duration-150 cursor-pointer"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0, filter: "blur(4px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 0.5, opacity: 0, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.25, bounce: 0 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0, filter: "blur(4px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 0.5, opacity: 0, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.25, bounce: 0 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-1.5 pl-5 pr-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 border border-transparent shadow-xs"
            >
              Hablemos
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-200/80 dark:border-zinc-800 hover:bg-neutral-100 dark:hover:bg-zinc-900 text-neutral-600 dark:text-zinc-400 active:scale-[0.96] transition-[background-color,color,transform] duration-150"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-zinc-900 text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150"
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
            className="fixed inset-0 z-40 bg-neutral-950/30 dark:bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.35, bounce: 0 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-border-subtle p-8 pt-24 shadow-2xl flex flex-col justify-between overscroll-contain overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-xl font-semibold text-neutral-800 dark:text-zinc-200 hover:text-foreground transition-colors duration-150 py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 mt-8">
                <span className="font-mono text-[11px] text-neutral-500 dark:text-zinc-400 uppercase tracking-widest">
                  ¿Tenés un proyecto en mente?
                </span>
                <Link
                  href="/#contacto"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 active:scale-[0.96] transition-[opacity,transform] duration-150 shadow-xs"
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
