"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MODULES } from "../lib/constants";
import { ChevronDown } from "lucide-react";
import {
  Shield,
  TrendingUp,
  Building2,
  Zap,
  Lock,
  Gift,
  Flame,
  CheckCircle,
} from "lucide-react";

const ICON_COMPONENTS: { [key: string]: React.ReactNode } = {
  Shield: <Shield className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Lock: <Lock className="w-8 h-8" />,
  Gift: <Gift className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
};

export const ModulesSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="modulos" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-x-1/2" />
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
              8 Módulos Completos
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conteúdo estruturado para levar você do iniciante à independência
              financeira
            </motion.p>
          </div>

          {/* Modules Accordion */}
          <motion.div variants={containerVariants} className="space-y-4">
            {MODULES.map((module, index) => (
              <motion.div key={module.id} variants={itemVariants}>
                <motion.button
                  onClick={() =>
                    setExpandedModule(
                      expandedModule === module.id ? null : module.id,
                    )
                  }
                  className="w-full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-6 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/30 to-blue-600/30 flex items-center justify-center text-green-400 border border-green-600/30">
                          {ICON_COMPONENTS[module.icon] ||
                            ICON_COMPONENTS.Shield}
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm font-semibold">
                              MÓDULO {index + 1}
                            </span>
                            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                              {module.topics.length}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mt-1">
                            {module.title}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedModule === module.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedModule === module.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-900/50 border border-t-0 border-gray-700 rounded-b-xl p-6 ml-0">
                        <div className="space-y-3">
                          {module.topics.map((topic, topicIndex) => (
                            <motion.div
                              key={topicIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: topicIndex * 0.1 }}
                              className="flex items-center gap-3 text-gray-300"
                            >
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              {topic}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Card */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400">8</p>
                <p className="text-gray-400 text-sm mt-1">Módulos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">40+</p>
                <p className="text-gray-400 text-sm mt-1">Aulas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">50+</p>
                <p className="text-gray-400 text-sm mt-1">Tópicos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">4</p>
                <p className="text-gray-400 text-sm mt-1">Bônus</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
