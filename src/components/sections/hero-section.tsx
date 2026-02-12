"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

const emptySubscribe = () => () => {};

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { language } = useLanguage();
  const t = translations[language].hero;

  const theme = mounted ? resolvedTheme : "light";
  const heroImg = `/images/screenshots/index_${language}_${theme}.png`;
  const badgeImg = `/images/appstore/appstore_badge_${language}_light.svg`;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 w-full flex items-center px-4"
      style={{ minHeight: "calc(100lvh - 48px)" }}
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-12 md:py-20">
        {/* Text */}
        <div
          className={`flex flex-col gap-6 items-center text-center md:items-start md:text-left transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {t.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed tracking-wide max-w-md">
            {t.subtitle.map((seg, i) =>
              seg.highlight ? (
                <span key={i} className="text-foreground">
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </p>

          {/* App Store badge — desktop */}
          <div className="hidden md:block mt-4">
            <a
              href="https://apps.apple.com/app/id6748356798"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={badgeImg}
                alt="Download on the App Store"
                width={140}
                height={47}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div
          className={`relative w-full max-w-[300px] mx-auto md:max-w-none aspect-[9/16] md:aspect-auto md:h-[600px] transition-all duration-1000 ease-out delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src={heroImg}
            alt="Tile App screenshot"
            fill
            className="object-contain"
            quality={100}
            priority
          />
        </div>

      </div>
    </section>
  );
}
