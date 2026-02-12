"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

const emptySubscribe = () => () => {};

export default function SubscriptionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { language } = useLanguage();
  const t = translations[language].subscription;

  const theme = mounted ? resolvedTheme : "light";
  const screenshotImg = `/images/screenshots/subscription_${language}_${theme}.png`;
  const bgImg = `/images/screenshots/subscriptionSection_bg_${theme}.png`;

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
    <section id="subscription" ref={ref} className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-40">
        {/* ——— Mobile layout ——— */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Title + description */}
          <motion.h2
            {...fadeUp(0.1)}
            className="text-foreground text-2xl font-light tracking-tight"
          >
            {t.title1}{" "}
            <span style={{ color: "#4084F4" }}>{t.title2}</span>
            {t.title3}
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

          {/* Images */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="grid grid-cols-2 items-center">
              <div className="relative w-full overflow-hidden opacity-20">
                <Image
                  src={bgImg}
                  alt=""
                  width={1320}
                  height={3656}
                  className="w-full h-auto object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="relative w-full aspect-[9/19] -ml-24 z-10">
                <Image
                  src={screenshotImg}
                  alt="Subscription management"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>

          {/* Footer label, centered */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-muted-foreground text-xs font-light tracking-wide text-center"
          >
            {t.footer}
          </motion.p>
        </div>

        {/* ——— Desktop layout ——— */}
        <div className="hidden md:grid grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Images — bg list + screenshot overlapping */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative w-full"
          >
            <div className="grid grid-cols-2 items-center">
              <div className="relative w-full overflow-hidden opacity-20">
                <Image
                  src={bgImg}
                  alt=""
                  width={1320}
                  height={3656}
                  className="w-full h-auto object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="relative w-full aspect-[9/19] -ml-32 z-10">
                <Image
                  src={screenshotImg}
                  alt="Subscription management"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <motion.h2
              {...fadeUp(0.15)}
              className="text-foreground text-3xl lg:text-4xl font-light tracking-tight"
            >
              {t.title1}{" "}
              <span style={{ color: "#4084F4" }}>{t.title2}</span>
              {t.title3}
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
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

            <motion.div {...fadeUp(0.35)} className="w-12 h-px bg-border" />

            <motion.p
              {...fadeUp(0.4)}
              className="text-muted-foreground text-xs font-light tracking-wide"
            >
              {t.footer}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
