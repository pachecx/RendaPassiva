"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Método", href: "#metodo" },
    { label: "Módulos", href: "#modulos" },
    { label: "Bônus", href: "#bonus" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO PREMIUM */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-400 via-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/20">
              RP
            </div>

            <span className="hidden sm:block font-semibold text-white tracking-wide">
              Renda Passiva
            </span>
          </motion.div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -1 }}
                className="text-gray-300 hover:text-white transition text-sm font-medium relative group"
              >
                {item.label}

                {/* underline premium */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA DESKTOP (PRINCIPAL) */}
          <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
            <Button variant="primary">Começar Agora</Button>
          </motion.div>

          {/* MOBILE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* MOBILE MENU PREMIUM */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
            >
              <div className="py-6 space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 6 }}
                    className="block px-4 py-2 text-gray-300 hover:text-white transition text-sm"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="px-4 pt-4">
                  <Button variant="primary" className="w-full">
                    Começar Agora
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
