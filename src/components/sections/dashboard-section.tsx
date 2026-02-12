"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

const emptySubscribe = () => () => {};

const colors = [
  { name: "yellow", hex: "#FFD60A" },
  { name: "orange", hex: "#FF7F2A" },
  { name: "coral", hex: "#FF5A5F" },
  { name: "purple", hex: "#AF52DE" },
  { name: "mint", hex: "#00C7BE" },
  { name: "blue", hex: "#007AFF" },
];

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { language } = useLanguage();
  const t = translations[language].dashboard;

  const theme = mounted ? resolvedTheme : "light";
  const [selectedIdx, setSelectedIdx] = useState(4); // mint by default

  const selectedColor = colors[selectedIdx];
  const dashboardImg = `/images/screenshots/dashboard_${language}_${theme}_${selectedColor.name}.png`;

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section id="dashboard" ref={ref} className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-40">
        {/* ——— Mobile layout ——— */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Main title + description */}
          <motion.h2
            {...fadeUp(0.1)}
            className="text-foreground text-2xl font-light tracking-tight"
          >
            {t.title1_1}
            {t.title1_2}
          </motion.h2>

          <motion.p
            {...fadeUp(0.15)}
            className="text-muted-foreground text-sm font-light leading-relaxed tracking-wide"
          >
            {t.description.map((seg, i) =>
              seg.highlight ? (
                <span key={i} className="text-foreground">
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </motion.p>

          {/* Mockup centered + color picker absolute to its right */}
          <div className="relative flex justify-center">
            {/* Dashboard image */}
            <motion.div
              {...fadeUp(0.2)}
              className="relative w-[240px] aspect-[9/16]"
            >
              {colors.map((color, i) => (
                <div
                  key={color.name}
                  className="absolute inset-0"
                  style={{ opacity: selectedIdx === i ? 1 : 0 }}
                >
                  <Image
                    src={`/images/screenshots/dashboard_${language}_${theme}_${color.name}.png`}
                    alt="Dashboard preview"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              ))}

              {/* Color picker — vertical, positioned to the right of mockup */}
              <motion.div
                {...fadeUp(0.35)}
                className="absolute top-1/2 -translate-y-1/2 left-full ml-3 flex flex-col items-center gap-4"
              >
                {colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedIdx(i)}
                    className="relative w-6 h-6 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{ backgroundColor: `${color.hex}30` }}
                    aria-label={`Select ${color.name} theme`}
                  >
                    <AnimatePresence>
                      {selectedIdx === i && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-1.5 rounded-full"
                          style={{ backgroundColor: color.hex }}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Color subtitle — below mockup */}
          <motion.h3
            {...fadeUp(0.3)}
            className="text-foreground text-lg font-light tracking-tight text-center"
          >
            {t.title2_1}
            <span
              className="transition-colors duration-500"
              style={{ color: selectedColor.hex }}
            >
              {t.title2_2}
            </span>
          </motion.h3>
        </div>

        {/* ——— Desktop layout ——— */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          {/* Text + color picker */}
          <div className="flex flex-col gap-8">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-foreground text-3xl lg:text-4xl font-light tracking-tight"
            >
              {t.title1_1}
              {t.title1_2}
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="text-muted-foreground text-base font-light leading-relaxed tracking-wide"
            >
              {t.description.map((seg, i) =>
                seg.highlight ? (
                  <span key={i} className="text-foreground">
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="w-12 h-px bg-border" />

            <motion.h3
              {...fadeUp(0.35)}
              className="text-foreground text-xl font-light tracking-tight"
            >
              {t.title2_1}
              <span
                className="transition-colors duration-500"
                style={{ color: selectedColor.hex }}
              >
                {t.title2_2}
              </span>
            </motion.h3>

            {/* Color picker — horizontal */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-4">
              {colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedIdx(i)}
                  className="relative w-6 h-6 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
                  style={{ backgroundColor: `${color.hex}30` }}
                  aria-label={`Select ${color.name} theme`}
                >
                  <AnimatePresence>
                    {selectedIdx === i && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-1.5 rounded-full"
                        style={{ backgroundColor: color.hex }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Dashboard image */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative w-full aspect-[9/16] max-w-[320px] mx-auto"
          >
            {colors.map((color, i) => (
              <div
                key={color.name}
                className="absolute inset-0"
                style={{ opacity: selectedIdx === i ? 1 : 0 }}
              >
                <Image
                  src={`/images/screenshots/dashboard_${language}_${theme}_${color.name}.png`}
                  alt="Dashboard preview"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
