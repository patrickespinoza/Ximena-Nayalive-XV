import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const numeroWhatsApp = "525549566368";

  const enviarConfirmacion = (event) => {
    event.preventDefault();

    if (!nombre.trim() || !asistencia) {
      setError("Escribe tu nombre y selecciona si asistirás.");
      return;
    }

    const cantidad = Number(invitados);

    if (
      asistencia === "Sí asistiré" &&
      (!Number.isInteger(cantidad) || cantidad < 1)
    ) {
      setError("Indica un número válido de invitados.");
      return;
    }

    setError("");

    const texto = [
      "Confirmación de asistencia · XV años de Ximena Nayalive",
      "",
      `Nombre: ${nombre.trim()}`,
      `Asistencia: ${asistencia}`,
      `Número de invitados: ${
        asistencia === "Sí asistiré" ? cantidad : 0
      }`,
      `Mensaje: ${mensaje.trim() || "Sin mensaje"}`,
    ].join("\n");

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(enlace, "_blank", "noopener,noreferrer");
  };

  const campo =
    "w-full border border-[#B99778]/65 bg-[#F8EEE9] px-4 py-3 font-playfair text-base text-[#302641] outline-none transition-colors placeholder:text-[#302641]/45 focus:border-[#683E5D] focus:ring-2 focus:ring-[#683E5D]/20";

  return (
    <section
      id="confirmacion"
      className="relative isolate overflow-hidden bg-[#EBDCD4] px-5 py-20 text-[#302641] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#7D6B9C]/15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#683E5D]/10 blur-[85px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center">
          <span
            className="font-playfair text-2xl text-[#A68468]"
            aria-hidden="true"
          >
            ✦
          </span>

          <h2 className="mt-3 font-playfair text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
            Confirma tu asistencia
          </h2>

          <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center text-[#683E5D]">
            <MessageCircle size={54} strokeWidth={1.1} aria-hidden="true" />
          </div>

          <p className="mx-auto mt-5 max-w-xl font-playfair text-lg leading-relaxed sm:text-xl">
            Tu presencia hará este día todavía más especial.
            Completa tus datos y envía tu confirmación por WhatsApp.
          </p>

          <div
            className="mx-auto my-8 flex items-center justify-center gap-4 text-[#A68468]"
            aria-hidden="true"
          >
            <span className="h-px w-12 bg-[#A68468]/60 sm:w-20" />
            <span>✦</span>
            <span className="h-px w-12 bg-[#A68468]/60 sm:w-20" />
          </div>
        </div>

        <form
          onSubmit={enviarConfirmacion}
          className="border border-[#B99778] bg-[#F8EEE9]/80 px-5 py-8 shadow-[0_18px_55px_rgba(48,38,65,0.12)] sm:px-9 sm:py-10"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="nombreInvitado"
                className="mb-2 block font-playfair text-sm text-[#683E5D]"
              >
                Nombre completo
              </label>
              <input
                id="nombreInvitado"
                type="text"
                autoComplete="name"
                value={nombre}
                onChange={(event) => {
                  setNombre(event.target.value);
                  setError("");
                }}
                placeholder="Escribe tu nombre"
                className={campo}
                required
              />
            </div>

            <div>
              <label
                htmlFor="asistenciaInvitado"
                className="mb-2 block font-playfair text-sm text-[#683E5D]"
              >
                ¿Asistirás?
              </label>
              <select
                id="asistenciaInvitado"
                value={asistencia}
                onChange={(event) => {
                  setAsistencia(event.target.value);
                  setInvitados("");
                  setError("");
                }}
                className={campo}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Sí asistiré">Sí asistiré</option>
                <option value="No podré asistir">No podré asistir</option>
              </select>
            </div>

            {asistencia === "Sí asistiré" && (
              <div>
                <label
                  htmlFor="numeroInvitados"
                  className="mb-2 block font-playfair text-sm text-[#683E5D]"
                >
                  Número de invitados
                </label>
                <input
                  id="numeroInvitados"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  value={invitados}
                  onChange={(event) => {
                    setInvitados(event.target.value);
                    setError("");
                  }}
                  placeholder="Ejemplo: 2"
                  className={campo}
                  required
                />
              </div>
            )}

            <div>
              <label
                htmlFor="mensajeInvitado"
                className="mb-2 block font-playfair text-sm text-[#683E5D]"
              >
                Mensaje para Ximena
              </label>
              <textarea
                id="mensajeInvitado"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
                rows={4}
                placeholder="Escribe tu mensaje..."
                className={`${campo} resize-y`}
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-5 font-playfair text-sm text-[#9B324D]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#B99778] bg-[#302641] px-6 py-3 font-playfair text-sm uppercase tracking-[0.1em] text-[#EBDCD4] transition-colors hover:bg-[#683E5D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#683E5D]"
          >
            <MessageCircle size={19} strokeWidth={1.6} />
            Enviar por WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}