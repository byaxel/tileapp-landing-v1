"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";
import PrivacyModal from "@/components/footer/privacy-modal";

const emptySubscribe = () => () => {};

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <div className="w-4 h-4" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-1"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isDark ? (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </>
          )}
        </motion.svg>
      </AnimatePresence>
    </button>
  );
}

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].footer;
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="w-full border-t border-border/40 dark:border-border/20">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4 text-xs tracking-wide text-muted-foreground">
          {/* Row 1: Theme toggle + Language switcher — right aligned */}
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 font-light">
              <ThemeToggle />

              <span className="opacity-20">|</span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLanguage("es")}
                  className={`transition-colors duration-300 cursor-pointer ${
                    language === "es"
                      ? "text-foreground"
                      : "hover:text-foreground"
                  }`}
                >
                  ES
                </button>

                <span className="opacity-30">/</span>

                <button
                  onClick={() => setLanguage("en")}
                  className={`transition-colors duration-300 cursor-pointer ${
                    language === "en"
                      ? "text-foreground"
                      : "hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Copyright — Support + Privacy */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between font-light">
            <span>
              © {new Date().getFullYear()} {t.copyrightApp}{" "}
              <a
                href="https://byaxel.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-300"
              >
                byaxel
              </a>
              . {t.copyrightRights}
            </span>

            <div className="flex items-center gap-6">
              <a
                href="mailto:tileapp@byaxel.dev"
                className="hover:text-foreground transition-colors duration-300"
              >
                {t.support}
              </a>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-foreground transition-colors duration-300 cursor-pointer"
              >
                {t.policy}
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
}
