"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./Button";
import { Check, Zap } from "lucide-react";

const INCLUDED_ITEMS = [
  "Curso completo com 8 módulos",
  "40+ aulas em vídeo HD",
  "Material complementar em PDF",
  "Bônus no valor de R$ 997",
  "Acesso vitalício ao conteúdo",
  "Suporte por email",
  "Comunidade de alunos",
  "Atualizações gratuitas",
];

export const PricingSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="preco"
      className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold">OFERTA LIMITADA</span>
              <Zap className="w-6 h-6 text-yellow-400" />
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Invista em Seu Futuro Financeiro
            </motion.h2>
          </div>

          {/* Pricing Card */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-2xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-3xl blur-2xl opacity-75 animate-pulse" />

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 overflow-hidden">
              {/* Top Badge */}
              <div className="absolute top-8 right-8 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full">
                <p className="text-white font-bold text-sm">MELHOR PREÇO</p>
              </div>

              {/* Pricing Content */}
              <div className="space-y-8">
                {/* Price Display */}
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-lg mb-2">Investimento:</p>
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-bold text-gray-400 line-through">
                        R$ 1.997
                      </span>
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                      >
                        R$ 497
                      </motion.span>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <p className="text-gray-300 font-semibold mb-2">
                      Parcelado em:
                    </p>
                    <p className="text-2xl font-bold text-green-400">
                      12x <span className="text-lg text-gray-400">de</span> R$
                      48,62
                    </p>
                    <p className="text-gray-500 text-sm mt-2">Sem juros 💚</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} className="w-full">
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full text-lg font-bold"
                  >
                    QUERO COMEÇAR AGORA
                  </Button>
                </motion.div>

                {/* What's Included */}
                <div className="space-y-4">
                  <p className="text-gray-400 font-semibold text-lg">
                    Você vai receber:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {INCLUDED_ITEMS.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 border border-blue-600/50 rounded-xl p-6 text-center">
                  <p className="text-gray-200 font-semibold mb-2">
                    Garantia de 7 dias de satisfação
                  </p>
                  <p className="text-gray-400 text-sm">
                    Se não ficar satisfeito, devolvemos 100% do valor sem
                    perguntas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center space-y-4"
          >
            <p className="text-gray-400 text-lg">
              Cada dia que você espera é um dia de renda passiva que não está
              gerando
            </p>
            <p className="text-gray-500 text-sm">
              +5.000 alunos já têm acesso ao curso. Não fique de fora.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
