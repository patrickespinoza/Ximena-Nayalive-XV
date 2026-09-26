import React from "react";
import { motion } from "framer-motion";

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="relative isolate overflow-hidden bg-[#302641] px-5 py-20 text-center text-[#EBDCD4] sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(145deg, #302641, #43304C 65%, #683E5D)",
      }}
    >
      <div className="pointer-events-none absolute inset-5 border border-[#C9AA85]/35 sm:inset-8" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl border border-[#C9AA85] px-6 py-12 sm:px-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="font-playfair text-2xl text-[#C9AA85]"
          aria-hidden="true"
        >
          ✦
        </span>

        <h2 className="mt-4 font-playfair text-4xl font-normal leading-tight sm:text-5xl">
          Código de vestimenta
        </h2>

        <p className="mt-7 font-cursiveDancing text-5xl leading-tight text-[#C9AA85] sm:text-6xl">
          Formal
        </p>

        <div className="mx-auto my-8 flex items-center justify-center gap-4 text-[#C9AA85]">
          <span className="h-px w-12 bg-[#C9AA85]/60 sm:w-20" />
          <span aria-hidden="true">✦</span>
          <span className="h-px w-12 bg-[#C9AA85]/60 sm:w-20" />
        </div>

        <p className="font-playfair text-base leading-relaxed sm:text-lg">
          Color de vestimenta
        </p>

        <div className="mx-auto mt-5 max-w-xs border border-[#C9AA85] bg-[#101014] px-6 py-5 shadow-[0_12px_35px_rgba(0,0,0,0.3)]">
          <p className="font-playfair text-2xl uppercase tracking-[0.25em] text-white sm:text-3xl">
            Negro
          </p>
        </div>
      </motion.div>
    </section>
  );
}