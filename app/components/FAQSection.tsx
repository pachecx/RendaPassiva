"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FAQ } from "../lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Perguntas Frequentes
            </motion.h2>
            <motion.p className="text-gray-400 text-lg">
              Respostas para as dúvidas mais comuns
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div variants={containerVariants} className="space-y-4">
            {FAQ.map((faq, index) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className={`w-full bg-gradient-to-r transition-all duration-300 rounded-xl p-6 border cursor-pointer ${
                      openFAQ === index
                        ? "from-indigo-600/30 to-purple-600/30 border-indigo-600/50 bg-indigo-600/10"
                        : "from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          openFAQ === index ? "text-indigo-300" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={
                          openFAQ === index
                            ? "text-indigo-400"
                            : "text-gray-400"
                        }
                      >
                        <ChevronDown className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-900/50 border border-t-0 border-indigo-600/30 rounded-b-xl p-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-600/30 rounded-xl"
          >
            <p className="text-gray-300 mb-4">Ainda tem dúvidas?</p>
            <p className="text-indigo-300 font-semibold">
              Envie um email para contato@rendapassivavitalicia.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
