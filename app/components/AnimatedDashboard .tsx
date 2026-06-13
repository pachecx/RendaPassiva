"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export const AnimatedDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl border border-white/10 p-8 shadow-2xl backdrop-blur-xl overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/5 blur-3xl" />

      {/* GRID STATS */}
      <div className="grid grid-cols-2 gap-4 relative z-10">

        {/* Patrimônio */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-400">Patrimônio</p>

          <p className="text-xl font-bold text-white">
            R${" "}
            <CountUp
              end={842350}
              duration={2.5}
              separator="."
            />
          </p>

          <p className="text-green-400 text-xs">+12,4% ano</p>
        </div>

        {/* Renda mensal */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-400">Renda Mensal</p>

          <p className="text-xl font-bold text-white">
            R${" "}
            <CountUp end={4280} duration={2.5} separator="." />
          </p>

          <p className="text-green-400 text-xs">Dividendos</p>
        </div>

        {/* Proventos */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-400">Proventos</p>

          <p className="text-xl font-bold text-white">
            R${" "}
            <CountUp end={51360} duration={2.5} separator="." />
          </p>

          <p className="text-blue-400 text-xs">12 meses</p>
        </div>

        {/* Carteira */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-400">Carteira</p>
          <p className="text-xl font-bold text-white">FIIs + Ações</p>
          <p className="text-gray-400 text-xs">Diversificado</p>
        </div>

      </div>

      {/* CHART ANIMADO */}
      <div className="mt-6 relative z-10">
        <p className="text-xs text-gray-400 mb-3">
          Evolução patrimonial
        </p>

        <div className="h-28 flex items-end gap-2">
          {[30, 45, 40, 60, 55, 80, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
              }}
              className="w-3 bg-gradient-to-t from-green-500 to-blue-500 rounded"
            />
          ))}
        </div>
      </div>

      {/* STATUS */}
      <div className="mt-6 flex items-center justify-between relative z-10">
        <p className="text-xs text-gray-400">
          Estratégia: longo prazo + reinvestimento
        </p>

        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="px-3 py-1 text-xs rounded-full bg-green-500/10 border border-green-500/30 text-green-400"
        >
          Crescimento estável
        </motion.span>
      </div>
    </motion.div>
  );
};