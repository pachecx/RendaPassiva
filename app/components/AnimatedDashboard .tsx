"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export const AnimatedDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl overflow-hidden"
    >
      {/* subtle glow (mais discreto, estilo banco) */}
      <div className="absolute inset-0 bg-green-500/5 blur-3xl" />

      <div className="relative z-10">
        {/* KPI PRINCIPAL */}
        <div className="mb-6">
          <p className="text-xs text-gray-400">Patrimônio estimado</p>

          <h3 className="text-3xl font-bold text-white">
            R$ <CountUp end={842350} duration={2.5} separator="." />
          </h3>

          <p className="text-green-400 text-sm mt-1">
            +12,4% crescimento anual médio
          </p>
        </div>

        {/* MINI KPIs (menos, mais impacto) */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-400">Renda mensal</p>
            <p className="text-lg font-semibold text-white">
              R$ <CountUp end={4280} duration={2.5} />
            </p>
            <p className="text-green-400 text-xs">Dividendos + FIIs</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-400">Fluxo anual</p>
            <p className="text-lg font-semibold text-white">
              R$ <CountUp end={51360} duration={2.5} />
            </p>
            <p className="text-gray-400 text-xs">Reinvestido automaticamente</p>
          </div>
        </div>

        {/* CHART (mais financeiro e menos “barras aleatórias”) */}
        <div>
          <p className="text-xs text-gray-400 mb-3">
            Evolução patrimonial projetada
          </p>

          <div className="h-24 flex items-end gap-2">
            {[20, 28, 35, 45, 55, 68, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="w-2 rounded-full bg-gradient-to-t from-green-500/60 to-green-300"
              />
            ))}
          </div>
        </div>

        {/* INSIGHT (muito importante para percepção premium) */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-gray-500 max-w-[70%]">
            Estratégia baseada em reinvestimento de dividendos e crescimento de
            longo prazo.
          </p>

          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-green-400">
            Perfil conservador
          </span>
        </div>
      </div>
    </motion.div>
  );
};
