"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TESTIMONIALS } from "../lib/constants";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm uppercase tracking-widest mb-3">
            Experiência dos participantes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Percepção sobre o aprendizado
          </h2>

          <p className="text-gray-400 mt-4">
            Relatos de usuários que passaram pelo conteúdo estruturado do
            programa
          </p>
        </div>

        {/* TESTIMONIAL */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-10"
            >
              {/* USER HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10" />

                <div>
                  <p className="text-white font-medium">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {TESTIMONIALS[current].profession}
                  </p>
                </div>
              </div>

              {/* RATING (neutral) */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gray-400 fill-gray-400"
                    />
                  ),
                )}
              </div>

              {/* TEXT */}
              <p className="text-gray-300 leading-relaxed">
                {TESTIMONIALS[current].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
                )
              }
              className="text-gray-400 hover:text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
              }
              className="text-gray-400 hover:text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
