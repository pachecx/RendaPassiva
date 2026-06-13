"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Smartphone, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Renda Passiva <span className="text-green-400">Vitalícia</span>
            </h3>

            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Plataforma educacional focada em construção de patrimônio, renda
              passiva e estratégias de longo prazo no mercado financeiro.
            </p>

            {/* TRUST BADGE */}
            <div className="mt-6 text-xs text-gray-500">
              ✔ Educação financeira • ✔ Investimentos • ✔ Planejamento
              patrimonial
            </div>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Método", "Módulos", "Bônus", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL (MAIS INSTITUCIONAL) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                Política de Privacidade
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Termos de Uso
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Aviso de Riscos
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Disclaimers Financeiros
              </li>
            </ul>
          </div>

          {/* CONTATO (MAIS PREMIUM) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                suporte@rendapassiva.com
              </div>

              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                +55 11 99999-9999
              </div>

              <div className="flex items-center gap-2 text-green-400 cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                Atendimento via WhatsApp
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/5 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>
            © {currentYear} Renda Passiva Vitalícia. Todos os direitos
            reservados.
          </p>

          {/* RISK DISCLAIMER (MELHORADO) */}
          <div className="max-w-xl text-center md:text-right bg-white/5 border border-white/10 p-4 rounded-lg">
            <p className="text-gray-400 font-semibold mb-1">
              Aviso importante sobre riscos
            </p>
            <p>
              Investimentos envolvem riscos. Nenhum retorno é garantido.
              Resultados passados não garantem resultados futuros. Este conteúdo
              é educacional.
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP (MAIS ESTRATÉGICO) */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </footer>
  );
};
