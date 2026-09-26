import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crown,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function MusicaXV() {
  const audioRef = useRef(null);
  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [audioListo, setAudioListo] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    const marcarAudioListo = () => setAudioListo(true);
    const marcarPausa = () => setReproduciendo(false);
    const marcarReproduccion = () => setReproduciendo(true);

    audio.addEventListener("canplay", marcarAudioListo);
    audio.addEventListener("play", marcarReproduccion);
    audio.addEventListener("pause", marcarPausa);

    if (audio.readyState >= 3) marcarAudioListo();

    return () => {
      audio.removeEventListener("canplay", marcarAudioListo);
      audio.removeEventListener("play", marcarReproduccion);
      audio.removeEventListener("pause", marcarPausa);
    };
  }, []);

  const iniciarConMusica = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = false;
      setSilenciado(false);
      await audio.play();
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
    } finally {
      setMostrarModal(false);
    }
  };

  const continuarSinMusica = () => {
    audioRef.current?.pause();
    setMostrarModal(false);
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("No se pudo cambiar la reproducción:", error);
    }
  };

  const alternarSilencio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setSilenciado(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/musica.mp3" preload="auto" loop />

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#17111F]/85 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="pointer-events-none absolute left-[9%] top-[11%] text-[#C9AA85]"
              animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={28} strokeWidth={1.2} />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute bottom-[12%] right-[9%] text-[#7D6B9C]"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Sparkles size={34} strokeWidth={1.2} />
            </motion.div>

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="musica-xv-titulo"
              className="relative w-full max-w-md overflow-hidden border border-[#C9AA85]/70 bg-[radial-gradient(ellipse_at_top,#683E5D_0%,#302641_58%,#211B2D_100%)] px-7 py-10 text-center text-[#EBDCD4] shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:px-10 sm:py-12"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute inset-[7px] border border-[#C9AA85]/35" />

              <motion.div
                className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9AA85]/60 text-[#C9AA85]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Crown size={34} strokeWidth={1.2} />
              </motion.div>

              <p className="relative mb-3 font-playfair text-xs uppercase tracking-[0.32em] text-[#C9AA85]">
                Mis XV años
              </p>

              <h2
                id="musica-xv-titulo"
                className="relative font-cursiveDancing text-6xl leading-[1.2] text-[#F3E5DF] sm:text-7xl"
              >
                Ximena
              </h2>

              <p className="relative mt-2 font-playfair text-sm tracking-[0.08em] text-[#EBDCD4] sm:text-base">
                Nayalive Aguilar Delgadillo
              </p>

              <div className="relative mx-auto my-7 flex items-center justify-center gap-3 text-[#C9AA85]">
                <span className="h-px w-14 bg-[#C9AA85]/60" />
                <Music2 size={18} strokeWidth={1.4} />
                <span className="h-px w-14 bg-[#C9AA85]/60" />
              </div>

              <p className="relative mx-auto max-w-xs font-playfair text-base leading-relaxed text-[#EBDCD4] sm:text-lg">
                Hay momentos que se vuelven inolvidables al compartirlos contigo.
                Acompáñame a vivir esta celebración.
              </p>

              <div className="relative mt-8 flex flex-col gap-3">
                <motion.button
                  type="button"
                  onClick={iniciarConMusica}
                  className="flex w-full items-center justify-center gap-3 border border-[#C9AA85] bg-[#EBDCD4] px-5 py-4 font-playfair text-sm uppercase tracking-[0.12em] text-[#302641] transition-colors hover:bg-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={17} fill="currentColor" />
                  {audioListo ? "Entrar con música" : "Entrar con música"}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={continuarSinMusica}
                  className="flex w-full items-center justify-center gap-3 border border-[#C9AA85]/50 bg-transparent px-5 py-3.5 font-playfair text-sm uppercase tracking-[0.1em] text-[#EBDCD4] transition-colors hover:bg-white/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VolumeX size={17} />
                  Continuar sin música
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            className="fixed bottom-5 right-4 z-[9998] flex items-center gap-2 sm:bottom-7 sm:right-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.button
              type="button"
              onClick={alternarSilencio}
              aria-label={silenciado ? "Activar sonido" : "Silenciar música"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9AA85] bg-[#EBDCD4] text-[#302641] shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {silenciado ? <VolumeX size={19} /> : <Volume2 size={19} />}
            </motion.button>

            <motion.button
              type="button"
              onClick={alternarReproduccion}
              aria-label={reproduciendo ? "Pausar música" : "Reproducir música"}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9AA85] bg-[#302641] text-[#EBDCD4] shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {reproduciendo ? (
                <Pause size={21} fill="currentColor" />
              ) : (
                <Play size={21} fill="currentColor" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}