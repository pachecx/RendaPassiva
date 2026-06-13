"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FAQ } from "../lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      {/* BACKGROUND FINTECH */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-green-400">
            <HelpCircle className="w-6 h-6" />
            <span className="text-sm uppercase tracking-widest">
              Central de Ajuda
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-400 text-lg">
            Tudo o que você precisa saber antes de começar sua jornada
            financeira
          </p>
        </motion.div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {FAQ.map((faq, index) => (
            <div key={faq.id}>
              <motion.button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                className={`w-full text-left rounded-xl border transition-all duration-300 ${
                  openFAQ === index
                    ? "border-green-500/40 bg-white/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3
                    className={`font-medium text-base transition-colors ${
                      openFAQ === index ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={
                      openFAQ === index ? "text-green-400" : "text-gray-500"
                    }
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.button>

              {/* ANSWER */}
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-400 text-sm leading-relaxed border-l border-green-500/20 ml-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* TRUST BLOCK (IMPORTANTE PARA CONVERSÃO) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-6 py-5 max-w-xl">
            <p className="text-gray-300 text-sm">
              Ainda com dúvidas? Nosso suporte está disponível para orientar sua
              decisão de forma transparente e educativa.
            </p>

            <p className="text-green-400 mt-2 text-sm font-medium">
              contato@rendapassivavitalicia.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
