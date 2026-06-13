"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Share2, MessageCircle, Smartphone } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Renda Passiva
                <span className="text-green-400"> Vitalícia</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Construindo patrimônio e gerando renda passiva para investidores
                que desejam independência financeira.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Página</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#hero" className="hover:text-green-400 transition">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#metodo" className="hover:text-green-400 transition">
                    Método
                  </a>
                </li>
                <li>
                  <a
                    href="#modulos"
                    className="hover:text-green-400 transition"
                  >
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#preco" className="hover:text-green-400 transition">
                    Preço
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Aviso de Riscos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contato@rpv.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition cursor-pointer">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-sm">+55 11 9 8888-8888</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                >
                  <Share2 className="w-4 h-4 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8" />

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
          >
            <div>
              <p>
                © {currentYear} Renda Passiva Vitalícia. Todos os direitos
                reservados.
              </p>
            </div>

            {/* Risk Warning */}
            <div className="text-center md:text-right text-xs text-gray-600 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <p className="font-semibold text-gray-400 mb-1">
                ⚠️ Aviso de Riscos
              </p>
              <p>
                Investimentos envolvem riscos. Resultados passados não garantem
                resultados futuros. Consulte um consultor financeiro.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5511988888888"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-40 transition"
      >
        <Smartphone className="w-7 h-7 text-white" />
      </motion.a>
    </footer>
  );
};
