"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black pt-24 pb-12 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
            >
              RENDA PASSIVA VITALÍCIA
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              Aprenda a construir patrimônio, gerar renda passiva e desenvolver
              uma estratégia financeira sólida através de investimentos
              inteligentes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button size="lg" variant="primary">
                Quero Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Conteúdo do Curso
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold"
                  >
                    +{i}k
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">+5.000 alunos</p>
                <p className="text-gray-400 text-sm">gerando renda passiva</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Dashboard Mock */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Dashboard Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Patrimônio Total</p>
                  <p className="text-3xl font-bold text-white">R$ 245.890</p>
                  <p className="text-green-400 text-sm flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4" /> +12.5% este mês
                  </p>
                </div>

                {/* Dividend Cards */}
                <div className="space-y-3">
                  <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                    <p className="text-gray-300 text-sm">Dividendos este mês</p>
                    <p className="text-2xl font-bold text-green-400 mt-1">
                      R$ 1.245
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                    <p className="text-gray-300 text-sm">Renda passiva anual</p>
                    <p className="text-2xl font-bold text-blue-400 mt-1">
                      R$ 14.940
                    </p>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-24 bg-gray-700/30 rounded-lg border border-gray-600 flex items-end justify-between p-4">
                  {[40, 55, 45, 70, 60, 85, 75].map((height, i) => (
                    <div
                      key={i}
                      style={{ height: `${height}%` }}
                      className="w-3 bg-gradient-to-t from-green-500 to-blue-500 rounded-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
