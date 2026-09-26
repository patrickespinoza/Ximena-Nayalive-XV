import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Regalos() {
  return (
    <section
      id="regalos"
      className="relative isolate overflow-hidden bg-[#EBDCD4] px-5 py-20 text-center text-[#302641] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#7D6B9C]/15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#683E5D]/10 blur-[85px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="font-playfair text-2xl text-[#A68468]"
          aria-hidden="true"
        >
          ✦
        </span>

        <h2 className="mt-3 font-playfair text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
          Mesa de regalos
        </h2>

        <div className="mx-auto mt-9 flex h-20 w-20 items-center justify-center text-[#683E5D]">
          <Mail size={66} strokeWidth={1} aria-hidden="true" />
        </div>

        <p className="mx-auto mt-7 max-w-xl font-playfair text-lg leading-relaxed sm:text-xl">
          Tu presencia es el regalo más importante para mí.
          Si deseas tener un detalle adicional, puedes hacerlo
          con un sobre con efectivo durante la celebración.
        </p>

        <div
          className="mx-auto my-8 flex items-center justify-center gap-4 text-[#A68468]"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[#A68468]/60 sm:w-20" />
          <span>✦</span>
          <span className="h-px w-12 bg-[#A68468]/60 sm:w-20" />
        </div>

        <p className="font-playfair text-sm uppercase tracking-[0.2em] text-[#683E5D] sm:text-base">
          Lluvia de sobres
        </p>
      </motion.div>
    </section>
  );
}