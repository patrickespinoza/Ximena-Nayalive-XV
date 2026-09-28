import React from "react";
import { motion } from "framer-motion";

export default function Portada() {
  const fechaEvento = "7 · Noviembre · 2026";

  return (
    <section
      id="portada"
      className="relative isolate flex  min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#302641] px-5 py-10 text-center text-[#F8EEE9] sm:px-10"
    >
      {/* Fotografía de fondo */}
      <img
        src="/portada3.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Sombra general para dar profundidad */}
      <div className="absolute inset-0 bg-[#1B1425]/30" />

      {/* Refuerzo de contraste en la zona del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,20,38,0.08) 0%, rgba(28,20,38,0.5) 32%, rgba(28,20,38,0.62) 70%, rgba(28,20,38,0.2) 100%)",
        }}
      />

      {/* Marcos */}
      <div className="pointer-events-none absolute inset-3 border border-[#EBDCD4]/65 sm:inset-5" />
      <div className="pointer-events-none absolute inset-[18px] border border-[#EBDCD4]/30 sm:inset-7" />

      {/* Contenido central */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center border border-[#EBDCD4]/55 bg-[#211B2D]/60 px-5 py-9 shadow-[0_20px_70px_rgba(12,7,19,0.45)] backdrop-blur-[3px] sm:px-10 sm:py-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div
          className="flex items-center gap-3 text-[#EBDCD4]"
          aria-hidden="true"
        >
          <span className="h-px w-9 bg-[#EBDCD4]/75 sm:w-16" />
          <span className="text-lg">✦</span>
          <span className="h-px w-9 bg-[#EBDCD4]/75 sm:w-16" />
        </div>

        <span className="mt-4 block font-playfair text-[clamp(5rem,21vw,9rem)] leading-none text-[#F3E5DF]">
          XV
        </span>

        <p className="mt-2 font-playfair text-xs uppercase tracking-[0.3em] text-[#F3E5DF] sm:text-sm">
          Mis quince años
        </p>

        <div className="my-5 h-px w-20 bg-[#EBDCD4]/70 sm:my-7" />

        <h1 className="font-cursiveDancing text-[clamp(3.5rem,12vw,6.5rem)] font-normal leading-[1.12] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]">
          Ximena Nayalive
        </h1>

        <p className="mt-9 font-playfair text-sm tracking-[0.08em] text-[#F8EEE9] sm:text-lg sm:tracking-[0.16em]">
          Aguilar Delgadillo
        </p>

        <div
          className="my-6 flex items-center gap-3 text-[#EBDCD4] sm:my-8"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[#EBDCD4]/70 sm:w-16" />
          <span>✦</span>
          <span className="h-px w-10 bg-[#EBDCD4]/70 sm:w-16" />
        </div>

        <p className="font-playfair text-sm uppercase tracking-[0.1em] text-white sm:text-lg sm:tracking-[0.2em]">
          {fechaEvento}
        </p>
      </motion.div>
    </section>
  );
}