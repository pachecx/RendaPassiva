"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TESTIMONIALS } from "../lib/constants";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent(
      (prev) =>
        (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              O Que Dizem Nossos Alunos
            </motion.h2>
            <motion.p className="text-gray-400 text-lg">
              Mais de 5.000 pessoas já transformaram suas vidas financeiras
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative h-96 md:h-80 flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute w-full"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {TESTIMONIALS[current].name}
                      </h3>
                      <p className="text-gray-400">
                        {TESTIMONIALS[current].profession}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: TESTIMONIALS[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed italic">
                    "{TESTIMONIALS[current].text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 z-20 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors -translate-x-16 md:-translate-x-24"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 z-20 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors translate-x-16 md:translate-x-24"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-green-500"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
