"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PROBLEMS } from "../lib/constants";
import { TrendingDown, AlertCircle, Clock, BookOpen } from "lucide-react";

const ICON_MAP: { [key: string]: React.ReactNode } = {
  TrendingDown: <TrendingDown className="w-12 h-12" />,
  AlertCircle: <AlertCircle className="w-12 h-12" />,
  Clock: <Clock className="w-12 h-12" />,
  BookOpen: <BookOpen className="w-12 h-12" />,
};

export const ProblemsSection: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
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
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Qual é o Seu Principal Problema?
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milhares de pessoas enfrentam esses desafios. O curso foi criado
              para resolvê-los.
            </motion.p>
          </div>

          {/* Problems Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {PROBLEMS.map((problem) => (
              <motion.div
                key={problem.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />

                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-600/20 hover:border-red-500/50 rounded-xl p-8 transition-all duration-300 backdrop-blur-sm">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-lg text-red-400 border border-red-600/30">
                    {ICON_MAP[problem.icon] || ICON_MAP.TrendingDown}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <p className="text-sm text-red-400 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Impacto direto na sua renda
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
