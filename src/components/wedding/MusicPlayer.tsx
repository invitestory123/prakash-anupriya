import { motion } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";
import { RefObject } from "react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  audioRef: RefObject<HTMLAudioElement | null>;
  src: string;
}

export function MusicPlayer({ isPlaying, onToggle, audioRef, src }: MusicPlayerProps) {
  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" playsInline />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-5 right-5 z-40"
      >
        <motion.button
          onClick={onToggle}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="border-gold/40 bg-emerald-ink/80 text-gold shadow-gold group relative flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors hover:border-gold/80"
          aria-label={isPlaying ? "Mute music" : "Play music"}
          title={isPlaying ? "Mute music" : "Play music"}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="flex items-center justify-center"
            >
              <Music className="h-4 w-4 text-gold" />
            </motion.div>
          ) : (
            <VolumeX className="h-4 w-4 text-ivory/60" />
          )}

          {isPlaying && (
            <span className="absolute -bottom-1 flex items-end gap-0.5 px-1">
              <span className="h-2 w-0.5 animate-pulse rounded-full bg-gold" style={{ animationDuration: "0.6s" }} />
              <span className="h-3 w-0.5 animate-pulse rounded-full bg-gold" style={{ animationDuration: "0.9s" }} />
              <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-gold" style={{ animationDuration: "0.7s" }} />
            </span>
          )}
        </motion.button>
      </motion.div>
    </>
  );
}

