"use client";

import { useCallback } from "react";
import { animate } from "framer-motion";

/**
 * Smooth scroll to anchor links using framer-motion's animate.
 * Returns an onClick handler that intercepts anchor clicks
 * and scrolls with a controlled duration and easing.
 */
export function useSmoothScroll(duration = 1.2) {
  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href?.startsWith("#")) return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      const start = window.scrollY;
      const navbarHeight = 48;
      const end = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      animate(start, end, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (value) => window.scrollTo(0, value),
      });
    },
    [duration],
  );

  return scrollTo;
}
