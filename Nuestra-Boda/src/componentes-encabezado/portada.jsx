import React from "react";
import { motion } from "framer-motion";

export default function Portada() {
  // Cambia esta fecha cuando tengas la definitiva.
  const fechaEvento = "26 · Septiembre · 2026";

  return (
    <section
      id="portada"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#211B2D] px-7 py-16 text-center text-[#EBDCD4] sm:px-12"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 37%, rgba(125,107,156,0.48), transparent 48%), radial-gradient(ellipse at 85% 90%, rgba(104,62,93,0.5), transparent 45%), linear-gradient(145deg, #191522, #302641 55%, #402B45)",
      }}
    >
      {/* Brillo suave detrás del nombre */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7D6B9C]/20 blur-[90px] sm:h-[500px] sm:w-[500px]" />

      {/* Doble marco */}
      <div className="pointer-events-none absolute inset-3 border border-[#C9AA85]/55 sm:inset-5" />
      <div className="pointer-events-none absolute inset-[18px] border border-[#C9AA85]/25 sm:inset-7" />

      {/* Adornos de las esquinas */}
      <span
        className="pointer-events-none absolute left-5 top-5 bg-[#211B2D] px-2 font-playfair text-xl text-[#C9AA85] sm:left-9 sm:top-8"
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className="pointer-events-none absolute bottom-5 right-5 bg-[#302641] px-2 font-playfair text-xl text-[#C9AA85] sm:bottom-8 sm:right-9"
        aria-hidden="true"
      >
        ✦
      </span>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="mb-6 flex items-center gap-3 text-[#C9AA85] sm:mb-8"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[#C9AA85]/65 sm:w-20" />
          <span className="text-xl">✦</span>
          <span className="h-px w-10 bg-[#C9AA85]/65 sm:w-20" />
        </div>


        <div className="relative mt-3 sm:mt-8">
          <span
            className="block font-playfair text-[clamp(5.5rem,23vw,12rem)] leading-[0.9] tracking-[-0.08em] text-[#C9AA85]/90"
            aria-label="Mis quince años"
          >
            XV
          </span>
          <span className="mt-4 block font-playfair text-xs uppercase tracking-[0.42em] text-[#EBDCD4] sm:text-sm">
            Mis quince años
          </span>
        </div>

        <div className="mt-7 h-px w-20 bg-[#C9AA85]/65 sm:mt-9" />

        <h1 className="mt-7 max-w-full font-cursiveDancing text-[clamp(3.8rem,13vw,7.5rem)] font-normal leading-[1.12] text-[#F3E5DF] drop-shadow-[0_5px_22px_rgba(12,7,19,0.65)] sm:mt-8">
          Ximena Nayalive
        </h1>

        <p className="mt-1 font-playfair text-base tracking-[0.12em] text-[#EBDCD4] sm:text-xl sm:tracking-[0.2em]">
          Aguilar Delgadillo
        </p>

        <div
          className="my-8 flex items-center gap-4 text-[#C9AA85] sm:my-10"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[#C9AA85]/65 sm:w-20" />
          <span className="text-lg">✦</span>
          <span className="h-px w-12 bg-[#C9AA85]/65 sm:w-20" />
        </div>

        <p className="font-playfair text-sm uppercase tracking-[0.14em] text-[#F3E5DF] sm:text-lg sm:tracking-[0.22em]">
          {fechaEvento}
        </p>
      </motion.div>
    </section>
  );
}