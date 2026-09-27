import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

// Cambia aquí la fecha y hora definitivas.
// Formato: AAAA-MM-DDTHH:mm:ss-06:00 (hora de Ciudad de México).
const FECHA_EVENTO = "2026-11-07T15:45:00-00:00";

const UNIDADES = ["Días", "Horas", "Minutos", "Segundos"];

function calcularTiempo(fecha) {
  const destino = new Date(fecha).getTime();
  const diferencia = Number.isFinite(destino)
    ? Math.max(0, destino - Date.now())
    : 0;

  return {
    Días: Math.floor(diferencia / 86400000),
    Horas: Math.floor((diferencia / 3600000) % 24),
    Minutos: Math.floor((diferencia / 60000) % 60),
    Segundos: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Contador({
  titulo = "¡Estás invitado!",
  texto = "Hay momentos que se sueñan toda la vida, y para mí será muy especial compartir este día contigo.",
  frase = "La magia está por comenzar",
  fecha = FECHA_EVENTO,
}) {
  const [tiempoRestante, setTiempoRestante] = useState(() =>
    calcularTiempo(fecha)
  );

  useEffect(() => {
    setTiempoRestante(calcularTiempo(fecha));

    const temporizador = window.setInterval(() => {
      setTiempoRestante(calcularTiempo(fecha));
    }, 1000);

    return () => window.clearInterval(temporizador);
  }, [fecha]);

  return (
    <section
      id="contador"
      className="
        contadorXV
        relative
        isolate
        overflow-hidden
        bg-[#302641]
        px-5
        py-20
        text-[#EBDCD4]
        sm:px-8
        sm:py-28
      "
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 15% 15%, rgba(125,107,156,0.38), transparent 45%), linear-gradient(145deg, #302641, #43304C 65%, #683E5D)",
      }}
    >
      <div className="pointer-events-none absolute inset-5 border border-[#C9AA85]/25 sm:inset-8" />

      <motion.div
        className="pointer-events-none absolute left-[7%] top-16 text-[#C9AA85]/70"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles size={27} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-16 right-[7%] text-[#C9AA85]/60"
        animate={{ opacity: [0.25, 0.85, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Sparkles size={32} strokeWidth={1.2} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9AA85]/60 text-[#C9AA85]">
            <Crown size={30} strokeWidth={1.2} />
          </div>

          <p className="mb-4 font-playfair text-xs uppercase tracking-[0.35em] text-[#C9AA85] sm:text-sm">
            Mis XV años
          </p>

          <h2 className="font-cursiveDancing text-5xl leading-tight text-[#F3E5DF] sm:text-6xl md:text-7xl">
            {titulo}
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-playfair text-lg leading-relaxed text-[#EBDCD4] sm:text-xl">
            {texto}
          </p>

          <div
            className="mx-auto my-8 flex items-center justify-center gap-4 text-[#C9AA85]"
            aria-hidden="true"
          >
            <span className="h-px w-14 bg-[#C9AA85]/60 sm:w-20" />
            <span>✦</span>
            <span className="h-px w-14 bg-[#C9AA85]/60 sm:w-20" />
          </div>

          <p className="font-cursiveDancing text-3xl text-[#C9AA85] sm:text-4xl">
            {frase}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-4xl border border-[#C9AA85]/60 bg-[#211B2D]/40 p-4 shadow-[0_22px_65px_rgba(15,10,25,0.25)] sm:mt-14 sm:p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="pointer-events-none absolute inset-[6px] border border-[#C9AA85]/25" />

          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {UNIDADES.map((etiqueta) => (
              <div
                key={etiqueta}
                className="flex min-h-36 flex-col items-center justify-center border border-[#C9AA85]/60 bg-[#EBDCD4] px-2 py-5 text-[#302641] sm:min-h-40"
              >
                <span className="font-playfair text-4xl font-medium tabular-nums sm:text-5xl">
                  {String(tiempoRestante[etiqueta]).padStart(2, "0")}
                </span>

                <span className="my-3 h-px w-10 bg-[#683E5D]/45" />

                <span className="font-playfair text-xs uppercase tracking-[0.14em] text-[#683E5D] sm:text-sm">
                  {etiqueta}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}