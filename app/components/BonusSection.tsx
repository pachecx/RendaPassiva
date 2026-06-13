"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { BONUSES } from "../lib/constants";
import { Gift, Star } from "lucide-react";

export const BonusSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-green-400 mb-3">
            <Gift className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">
              Ferramentas Inclusas
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ferramentas para construção de patrimônio
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recursos utilizados para análise, planejamento e acompanhamento de
            investimentos de longo prazo.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {BONUSES.map((bonus, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* glow leve */}
              <div className="absolute inset-0 bg-green-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition" />

              <div className="relative bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                    <Star className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {bonus.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VALUE BLOCK (MAIS INSTITUCIONAL) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-10 py-8">
            <p className="text-gray-400 text-sm mb-2">
              Valor estimado dos materiais incluídos
            </p>

            <p className="text-4xl font-bold text-white">R$ 997</p>

            <p className="text-green-400 text-sm mt-3">
              Incluso no acesso ao programa completo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
