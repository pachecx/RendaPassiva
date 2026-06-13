"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MODULES } from "../lib/constants";
import { ChevronDown } from "lucide-react";

export const ModulesSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <section id="modulos" className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-green-500/5 blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estrutura completa de construção de patrimônio
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Organização progressiva de conceitos para alocação de capital,
            geração de fluxo e gestão de risco.
          </p>
        </motion.div>

        {/* MODULES */}
        <div className="space-y-4">
          {MODULES.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              {/* HEADER DO MÓDULO */}
              <button
                onClick={() =>
                  setExpandedModule(
                    expandedModule === module.id ? null : module.id,
                  )
                }
                className="w-full p-6 flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.05] transition"
              >
                <div className="text-left">
                  <p className="text-xs text-green-400 mb-1">
                    Fase {index + 1}
                  </p>

                  <h3 className="text-white font-semibold text-lg">
                    {module.title}
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition ${
                    expandedModule === module.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {expandedModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-black">
                      <p className="text-gray-400 text-sm mb-4">
                        Componentes da estratégia:
                      </p>

                      <div className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-gray-300 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-6">
            <p className="text-gray-400 text-sm">
              Sistema estruturado de educação financeira aplicada
            </p>

            <p className="text-green-400 font-medium mt-2">
              Progressão lógica de risco, retorno e complexidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
