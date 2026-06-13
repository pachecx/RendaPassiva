"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { AnimatedDashboard } from "./AnimatedDashboard ";

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

      {/* BACKGROUND PREMIUM EFFECTS */}
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

          {/* LEFT SIDE - COPY (CONVERSÃO) */}
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
              uma estratégia financeira sólida com investimentos inteligentes.
            </motion.p>

            {/* CTA */}
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

            {/* TRUST SOCIAL PROOF */}
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
                <p className="text-gray-400 text-sm">
                  construindo renda passiva
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE - FINTECH DASHBOARD (WOW EFFECT) */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedDashboard />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};