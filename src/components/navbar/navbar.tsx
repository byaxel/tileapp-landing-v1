"use client";

import { useEffect, useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const emptySubscribe = () => () => {};

function AppIcon() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const theme = mounted ? resolvedTheme : "light";
  const src =
    theme === "dark"
      ? "/images/tile_app_icon_dark_appbg.png"
      : "/images/tile_app_icon_light_appbg.png";

  return (
    <div className="relative w-7 h-7">
      <AnimatePresence mode="wait">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt="Tile App"
            width={28}
            height={28}
            className="rounded-md"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const badgeImg = `/images/appstore/appstore_badge_${language}_light.svg`;

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 0.5 : 0.8;
      setVisible(window.scrollY > window.innerHeight * threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 h-12 transition-all duration-300 ${
        visible
          ? "backdrop-blur-xl bg-background/70 border-b border-border/40 dark:border-border/20"
          : "pointer-events-none border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 h-12 flex items-center justify-between ${
          visible ? "" : "pointer-events-none"
        }`}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center"
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -20,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const start = window.scrollY;
                animate(start, 0, {
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  onUpdate: (v) => window.scrollTo(0, v),
                });
              }}
              className="cursor-pointer"
            >
              <AppIcon />
            </button>
            <a
              href="https://byaxel.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-normal text-xs tracking-wide hover:opacity-70 transition-opacity duration-300"
            >
              byaxel
            </a>
          </div>
        </motion.div>

        {/* App Store badge */}
        <motion.div
          className="flex items-center h-full"
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -20,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://apps.apple.com/app/id6748356798"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center h-7"
          >
            <Image
              src={badgeImg}
              alt="Download on the App Store"
              width={82}
              height={28}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
