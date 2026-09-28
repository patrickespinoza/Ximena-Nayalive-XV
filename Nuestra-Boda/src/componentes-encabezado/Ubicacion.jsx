import React from "react";
import { motion } from "framer-motion";
import { Clock3, MapPin } from "lucide-react";

export default function Celebracion({
  hora = "5:30 p. m.",
  lugar = "Recepción", // Cambiar cuando tengas el nombre
  direccion = "Calle Miguel Hidalgo, El Arenal, San Cristóbal Nexquipayac, Atenco",
  ubicacion = "https://maps.app.goo.gl/KGNg2AeFBLscA9k3A",
}) {
  return (
    <section
      id="ubicacion"
      className="relative isolate overflow-hidden bg-[#EBDCD4] px-5 py-20 text-center text-[#302641] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#7D6B9C]/15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#683E5D]/10 blur-[85px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-playfair text-2xl text-[#A68468]" aria-hidden="true">
          ✦
        </span>

        <h2 className="mt-3 font-playfair text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
          Ubicación
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-playfair text-lg leading-relaxed sm:text-xl">
          Hay momentos que se vuelven inolvidables cuando los compartimos
          con quienes más queremos.
        </p>

        <div className="relative mx-auto mt-10 border border-[#B99778] bg-[#F8EEE9]/80 px-6 py-10 shadow-[0_18px_55px_rgba(48,38,65,0.12)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-[6px] border border-[#B99778]/35" />

          <div className="relative">
            <p className="font-playfair text-xs uppercase tracking-[0.28em] text-[#683E5D] sm:text-sm">
              La celebración
            </p>

            <h3 className="mt-5 font-playfair text-2xl font-normal leading-snug sm:text-3xl">
              {lugar}
            </h3>

            <div className="mx-auto my-6 flex items-center justify-center gap-3 text-[#A68468]">
              <span className="h-px w-12 bg-[#A68468]/60" />
              <MapPin size={19} strokeWidth={1.4} />
              <span className="h-px w-12 bg-[#A68468]/60" />
            </div>

            <p className="mx-auto max-w-lg font-playfair text-base leading-relaxed sm:text-lg">
              {direccion}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 font-playfair text-sm sm:flex-row sm:gap-6 sm:text-base">
              <span className="hidden text-[#A68468] sm:inline" aria-hidden="true">
                ✦
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={17} strokeWidth={1.5} />
                {hora}
              </span>
            </div>

            <a
              href={ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[#B99778] bg-[#302641] px-7 py-3 font-playfair text-sm uppercase tracking-[0.12em] text-[#EBDCD4] transition-colors hover:bg-[#683E5D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#683E5D]"
            >
              <MapPin size={18} strokeWidth={1.5} />
              Ver ubicación
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}