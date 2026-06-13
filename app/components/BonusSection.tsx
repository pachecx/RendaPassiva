"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { BONUSES } from "../lib/constants";
import { Gift, Star } from "lucide-react";

export const BonusSection: React.FC = () => {
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
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            <motion.div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-lg">
                BÔNUS EXCLUSIVOS
              </span>
              <Gift className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bônus no Valor de <span className="text-yellow-400">R$ 997</span>
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ferramentas premium que potencializam seus resultados
            </motion.p>
          </div>

          {/* Bonuses Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {BONUSES.map((bonus, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />

                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-600/20 hover:border-yellow-500/50 rounded-xl p-8 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-600/30 to-orange-600/30 flex items-center justify-center text-yellow-400 border border-yellow-600/30 flex-shrink-0">
                      <Star className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-400">{bonus.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Highlight */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/50 rounded-xl p-8 text-center"
          >
            <p className="text-gray-300 mb-2">Valor total dos bônus:</p>
            <motion.p className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              R$ 997
            </motion.p>
            <p className="text-gray-400 mt-4">
              <span className="text-green-400 font-bold">GRATUITO</span> ao
              adquirir o curso
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
