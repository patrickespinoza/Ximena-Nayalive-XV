import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  DoorOpen,
  Heart,
  Music2,
  UtensilsCrossed,
} from "lucide-react";

export default function Itinerario() {
  const eventos = [
    {
      hora: "3:45 p. m.",
      titulo: "Misa",
      descripcion: "Parroquia de San Bernardino Texcoco",
      icono: Church,
    },
    {
      hora: "5:30 p. m.",
      titulo: "Recepción",
      descripcion: "",
      icono: DoorOpen,
    },
    {
      hora: "6:00 p. m.",
      titulo: "Banquete",
      descripcion: "",
      icono: UtensilsCrossed,
    },
    {
      hora: "8:00 p. m.",
      titulo: "Vals",
      descripcion: "",
      icono: Heart,
    },
    {
      hora: "10:00 p. m.",
      titulo: "Baile",
      descripcion: "",
      icono: Music2,
    },
  ];

  return (
    <section
      id="itinerario"
      className="relative isolate overflow-hidden bg-[#E1CFC9] px-5 py-20 text-[#302641] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#7D6B9C]/15 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#683E5D]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
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

          <h2 className="mt-3 font-playfair text-4xl font-normal sm:text-5xl md:text-6xl">
            Itinerario
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-playfair text-lg leading-relaxed sm:text-xl">
            Los momentos que compartiremos en este día especial.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-2xl">
          {eventos.map((evento, index) => {
            const Icono = evento.icono;
            const esUltimo = index === eventos.length - 1;

            return (
              <motion.div
                key={evento.titulo}
                className="relative grid grid-cols-[82px_30px_1fr] gap-2 pb-10 sm:grid-cols-[115px_38px_1fr] sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <p className="pt-1 text-right font-playfair text-sm font-semibold text-[#683E5D] sm:text-base">
                  {evento.hora}
                </p>

                <div className="relative flex justify-center">
                  {!esUltimo && (
                    <span className="absolute left-1/2 top-5 bottom-[-40px] w-px -translate-x-1/2 bg-[#A68468]/70" />
                  )}

                  <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#A68468] bg-[#E1CFC9] text-[#683E5D] sm:h-8 sm:w-8">
                    <Icono size={16} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="pl-1">
                  <h3 className="font-playfair text-xl font-normal leading-tight sm:text-2xl">
                    {evento.titulo}
                  </h3>

                  {evento.descripcion && (
                    <p className="mt-2 font-playfair text-sm leading-relaxed text-[#4D4058] sm:text-base">
                      {evento.descripcion}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}