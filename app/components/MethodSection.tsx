"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TIMELINE_STEPS = [
  {
    title: "Acúmulo Inicial",
    description: "Organização financeira e construção de reserva de emergência",
  },
  {
    title: "Alocação de Capital",
    description:
      "Primeiros investimentos em renda fixa e ativos de risco controlado",
  },
  {
    title: "Geração de Fluxo",
    description:
      "Estruturação de carteira com foco em dividendos e renda recorrente",
  },
  {
    title: "Liberdade de Capital",
    description:
      "Estratégia madura com reinvestimento e independência de renda",
  },
];

export const MethodSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="metodo" className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-green-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Método estruturado de construção de patrimônio
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Uma progressão lógica de alocação de capital, gestão de risco e
              geração de fluxo financeiro no longo prazo.
            </p>
          </div>

          {/* TIMELINE FINTECH */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {/* linha conectiva suave */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />

            {TIMELINE_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* NODE */}
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400 font-semibold mb-6">
                  {index + 1}
                </div>

                {/* CONTENT */}
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* INSIGHT BLOCK */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-6">
              <p className="text-gray-400 text-sm">
                Estrutura baseada em princípios de alocação de capital de longo
                prazo
              </p>

              <p className="text-green-400 font-medium mt-2">
                Evolução progressiva de risco e retorno
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
