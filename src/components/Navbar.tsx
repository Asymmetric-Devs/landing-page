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
      try {
        const stored = localStorage.getItem("theme");
        if (stored === "light") return "light";
        if (stored === "dark") return "dark";
      } catch {
        // Ignore storage errors
      }
      return document.documentElement.classList.contains("dark") ? "dark" : "dark";
    }
    return "dark";
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
      <header className="fixed top-4 inset-x-0 z-50 mx-auto max-w-5xl px-4">
        <div
          className={`rounded-full bg-white/80 dark:bg-[#0D111C]/85 backdrop-blur-xl border border-slate-900/8 dark:border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.28),inset_0_1px_0_0_rgba(255,255,255,0.12)] px-4 py-2.5 flex items-center justify-between transition-[background-color,border-color,box-shadow] duration-200 ${
            scrolled
              ? "bg-white/92 dark:bg-[#0D111C]/92 border-slate-900/12 dark:border-white/14"
              : ""
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5 pl-2">
            <span className="font-sans font-extrabold tracking-tight text-lg sm:text-xl text-foreground group-hover:opacity-85 transition-opacity duration-150">
              ASYMMETRIC
            </span>
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/12 dark:bg-indigo-500/15 text-indigo-700 dark:text-teal-300 border border-indigo-500/25 dark:border-teal-400/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
              [devs]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-foreground px-3.5 py-1.5 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/8 transition-[color,background-color] duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-900/10 dark:border-white/10 bg-slate-100/70 dark:bg-[#131929]/80 hover:bg-slate-200/80 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-300 hover:text-foreground active:scale-[0.96] transition-[background-color,color,transform] duration-150 cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
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
                    <Sun className="w-4 h-4 text-teal-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white active:scale-[0.96] transition-[background-color,transform] duration-150 border border-indigo-400/30 shadow-[0_4px_16px_-2px_rgba(99,102,241,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
            >
              Hablemos
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-900/10 dark:border-white/10 bg-slate-100/70 dark:bg-[#131929]/80 hover:bg-slate-200/80 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-300 active:scale-[0.96] transition-[background-color,color,transform] duration-150"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-teal-300" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#131929] text-foreground active:scale-[0.96] transition-[background-color,transform] duration-150"
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
            className="fixed inset-0 z-40 bg-slate-950/50 dark:bg-black/70 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.35, bounce: 0 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-[#0D111C] border-l border-slate-900/10 dark:border-white/10 p-8 pt-24 shadow-2xl flex flex-col justify-between overscroll-contain overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-teal-300 transition-colors duration-150 py-1.5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 mt-8">
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  ¿Tenés un proyecto en mente?
                </span>
                <Link
                  href="/#contacto"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-500 active:scale-[0.96] transition-[background-color,transform] duration-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
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
