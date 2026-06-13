"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Sua Jornada Rumo à Independência Financeira
            <span className="text-green-400 block mt-2">Começa Hoje</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Não espere mais. Cada dia é uma oportunidade de começar a construir
            renda passiva real e conquistar liberdade financeira.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button size="lg" variant="primary" className="text-xl px-12 py-6">
              QUERO COMEÇAR AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg">
            +5.000 alunos já estão gerando renda passiva • Garantia de 7 dias •
            Acesso vitalício
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
