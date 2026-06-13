"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PROBLEMS } from "../lib/constants";

export const ProblemsSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* subtle background (menos agressivo) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase tracking-widest mb-3">
            Cenário do investidor brasileiro
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Desafios comuns na construção de patrimônio
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Esses são os principais fatores que impactam a evolução financeira
            de investidores iniciantes.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="flex items-start gap-4">
                {/* indicator */}
                <div className="w-2 h-2 mt-2 rounded-full bg-white/40" />

                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {problem.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOT NOTE (IMPORTANTE PARA POSICIONAMENTO) */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Educação financeira estruturada reduz decisões impulsivas e melhora
            consistência de longo prazo.
          </p>
        </div>
      </div>
    </section>
  );
};
