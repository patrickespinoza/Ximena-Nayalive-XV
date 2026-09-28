import React from "react";
import { motion } from "framer-motion";

const IMAGEN_VESTIDOS = "/silueta.png";

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="relative isolate overflow-hidden bg-[#302641] px-5 py-20 text-center text-[#EBDCD4] sm:px-8 sm:py-28"
    >
      {/* Textura morada */}
      <img
        src="/fondom.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#211B2D]/35" />

      <div className="pointer-events-none absolute inset-5 border border-[#C9AA85]/45 sm:inset-8" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl border border-[#C9AA85] bg-[#211B2D]/50 px-6 py-12 shadow-[0_20px_60px_rgba(15,10,25,0.3)] sm:px-12 sm:py-16"
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

        <h2 className="mt-4 font-playfair text-4xl font-normal leading-tight text-[#F8EEE9] sm:text-5xl">
          Código de vestimenta
        </h2>

        <p className="mt-7 font-cursiveDancing text-5xl leading-tight text-[#E8C9AA] sm:text-6xl">
          Formal
        </p>

        {/* Siluetas: el fondo claro permite ver el vestido negro */}
        <div className="mx-auto mt-8 max-w-sm border border-[#C9AA85]  px-5 py-6 shadow-[0_14px_35px_rgba(0,0,0,0.2)]">
          <img
            src={IMAGEN_VESTIDOS}
            alt="Siluetas de vestidos negros como referencia de vestimenta formal"
            loading="lazy"
            className="mx-auto h-auto max-h-64 w-full object-contain sm:max-h-80"
          />
        </div>

        <div
          className="mx-auto my-8 flex items-center justify-center gap-4 text-[#C9AA85]"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-[#C9AA85]/70 sm:w-20" />
          <span>✦</span>
          <span className="h-px w-12 bg-[#C9AA85]/70 sm:w-20" />
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