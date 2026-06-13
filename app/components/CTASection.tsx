"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH DEPTH */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-green-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* HEADLINE (mais institucional e menos hype) */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Comece a estruturar sua
            <span className="text-green-400 block mt-2">
              independência financeira
            </span>
          </h2>

          {/* SUBHEADLINE (reduz risco + clareza) */}
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Acesse o método completo para construção de renda passiva com foco
            em longo prazo, disciplina e gestão de risco.
          </p>

          {/* CTA PRINCIPAL */}
          <div>
            <Button
              size="lg"
              variant="primary"
              className="px-10 py-4 text-base font-semibold"
            >
              Quero acessar o método
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* MICROCOPY DE SEGURANÇA */}
            <p className="text-gray-500 text-xs mt-3">
              Acesso imediato • Garantia de 7 dias • Cancelamento simples
            </p>
          </div>

          {/* TRUST BAR (MUITO IMPORTANTE) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white font-semibold">+5.000</p>
              <p className="text-gray-400 text-xs">investidores</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white font-semibold">7 dias</p>
              <p className="text-gray-400 text-xs">garantia total</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white font-semibold">Acesso vitalício</p>
              <p className="text-gray-400 text-xs">conteúdo completo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
