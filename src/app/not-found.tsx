"use client";

import { useLanguage } from "@/context/language-context";

const t = {
  es: {
    code: "404",
    message: "Esta página no existe.",
    back: "Volver al inicio",
  },
  en: {
    code: "404",
    message: "This page doesn't exist.",
    back: "Back to home",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <main className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-foreground text-6xl md:text-8xl font-light tracking-tight">
          {text.code}
        </h1>

        <p className="text-muted-foreground text-sm md:text-base font-light tracking-wide">
          {text.message}
        </p>

        <a
          href="/"
          className="mt-2 text-foreground text-xs tracking-[0.15em] uppercase font-light hover:text-muted-foreground transition-colors duration-300"
        >
          ← {text.back}
        </a>
      </div>
    </main>
  );
}
