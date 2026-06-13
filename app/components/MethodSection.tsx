"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";

const TIMELINE_STEPS = [
  { title: "Iniciante", description: "Primeiro contato com investimentos" },
  { title: "Investidor", description: "Aplicando conhecimento básico" },
  { title: "Gerador de Renda", description: "Recebendo dividendos mensais" },
  {
    title: "Independência Financeira",
    description: "Liberdade total de escolhas",
  },
];

export const MethodSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="metodo"
      className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O Método Renda Passiva Vitalícia
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Treinamento completo que ensina desde reserva de emergência até
              construção de uma estratégia de renda passiva e planejamento
              patrimonial.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600" />

            {/* Timeline Steps */}
            <motion.div
              variants={containerVariants}
              className="relative w-full grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {TIMELINE_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Circle */}
                  <div className="flex flex-col items-center md:items-start">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-500/50 mb-6"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>

                  {/* Down Arrow for Mobile */}
                  {index < TIMELINE_STEPS.length - 1 && (
                    <motion.div className="md:hidden flex justify-center mt-8 mb-4">
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-blue-400"
                      >
                        <ArrowDown className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center p-8 bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-600/30 rounded-xl"
          >
            <p className="text-gray-300 mb-4">
              Cada etapa foi cuidadosamente projetada para construir
              conhecimento e confiança
            </p>
            <p className="text-green-400 font-semibold">
              Transforme sua relação com dinheiro em 8 módulos estruturados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
