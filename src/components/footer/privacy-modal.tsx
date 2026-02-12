"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

export default function PrivacyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background border border-border/40 dark:border-border/20 rounded-lg max-w-2xl w-full max-h-[70vh] overflow-y-auto p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-foreground text-lg md:text-xl font-light tracking-tight">
                  {t.title}
                </h2>
                <p className="text-muted-foreground text-sm font-light mt-1">
                  {t.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-1 -mt-1 -mr-1"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="text-muted-foreground text-sm font-light leading-relaxed tracking-wide space-y-4">
              {t.content.split("\n\n").map((paragraph, i) => {
                const isHeader = /^\d+\./.test(paragraph.trim());
                return (
                  <p
                    key={i}
                    className={isHeader ? "text-foreground font-normal" : ""}
                  >
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
