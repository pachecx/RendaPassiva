"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./Button";
import { Check } from "lucide-react";

const INCLUDED_ITEMS = [
  "Acesso ao sistema completo de educação financeira",
  "8 módulos estruturados de alocação de capital",
  "Material complementar de análise e planejamento",
  "Ferramentas e simuladores de investimento",
  "Acesso vitalício à plataforma",
  "Atualizações contínuas do conteúdo",
  "Suporte educacional por email",
  "Comunidade de investidores em desenvolvimento",
];

export const PricingSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="preco" className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-10"
        >
          {/* HEADER */}
          <div>
            <p className="text-green-400 text-sm uppercase tracking-widest mb-3">
              Acesso ao programa
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Estrutura completa de construção de patrimônio
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Um sistema educacional estruturado para desenvolvimento de visão
              de longo prazo em investimentos.
            </p>
          </div>

          {/* PRICE BLOCK */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
            <p className="text-gray-400 text-sm mb-2">
              Acesso ao programa completo
            </p>

            <div className="flex items-baseline justify-center gap-4">
              <span className="text-gray-500 line-through text-2xl">
                R$ 1.997
              </span>

              <span className="text-5xl font-bold text-white">R$ 497</span>
            </div>

            <p className="text-gray-400 text-sm mt-3">ou 12x de R$ 48,62</p>

            {/* CTA */}
            <div className="mt-8">
              <Button size="lg" variant="primary" className="w-full">
                Acessar o programa
              </Button>

              <p className="text-gray-500 text-xs mt-3">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* INCLUDED */}
          <div className="text-left space-y-4">
            <p className="text-gray-400 text-sm">O que está incluído:</p>

            <div className="grid md:grid-cols-2 gap-3">
              {INCLUDED_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-400 mt-1" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GUARANTEE */}
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
            <p className="text-white font-medium mb-2">Garantia de 7 dias</p>
            <p className="text-gray-400 text-sm">
              Reembolso integral caso o conteúdo não atenda suas expectativas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
