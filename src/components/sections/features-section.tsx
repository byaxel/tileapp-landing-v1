"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

const emptySubscribe = () => () => {};

export default function FeaturesSection({
  variant,
}: {
  variant: "main" | "secondary";
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { language } = useLanguage();
  const t = translations[language].features[variant];

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const theme = isDark ? "dark" : "light";

  // Update all card glows based on cursor position relative to each card
  const updateGlows = useCallback((clientX: number, clientY: number) => {
    cardRefs.current.forEach((card, i) => {
      const glow = glowRefs.current[i];
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, var(--accent-glow), transparent 70%)`;
      glow.style.opacity = "1";
    });
  }, []);

  const hideGlows = useCallback(() => {
    glowRefs.current.forEach((glow) => {
      if (glow) glow.style.opacity = "0";
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      updateGlows(e.clientX, e.clientY);
    },
    [updateGlows],
  );

  // Reset refs array length when items change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, t.items.length);
    glowRefs.current = glowRefs.current.slice(0, t.items.length);
  }, [t.items.length]);

  return (
    <section
      id={variant === "main" ? "features" : undefined}
      ref={sectionRef}
      className="w-full"
      style={
        {
          "--accent-glow": isDark
            ? "rgba(0, 199, 190, 0.12)"
            : "rgba(0, 199, 190, 0.14)",
        } as React.CSSProperties
      }
    >
      {/* Mouse tracking zone — extends ~60px beyond the grid */}
      <div
        ref={gridRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={hideGlows}
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl border border-border/30 dark:border-border/15 overflow-hidden backdrop-blur-sm bg-background/60"
            >
              {/* Glow layer */}
              <span
                ref={(el) => {
                  glowRefs.current[i] = el;
                }}
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
              />

              <Image
                src={`/icons/${item.icon}_icon_${theme}.svg`}
                alt={item.title}
                width={44}
                height={44}
                className="relative z-10 md:w-[52px] md:h-[52px]"
              />
              <h3 className="relative z-10 text-foreground text-sm md:text-base font-normal tracking-wide">
                {item.title}
              </h3>
              <p className="relative z-10 text-muted-foreground text-xs md:text-sm font-light leading-relaxed tracking-wide">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
