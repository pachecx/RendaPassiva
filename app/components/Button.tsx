import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "relative font-semibold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40",

    secondary:
      "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",

    outline:
      "border border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(props as any)}
    >
      {/* GLASS LIGHT EFFECT */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl" />

      {/* CONTENT */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
