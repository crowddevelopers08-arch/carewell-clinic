"use client";

import { useEffect, useRef, useState } from "react";

function parseTarget(raw: string) {
  const match = raw.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, decimals: 0, suffix: raw, useComma: false };
  const [, numPart, suffix] = match;
  const decimals = numPart.includes(".") ? numPart.split(".")[1].length : 0;
  const target = parseFloat(numPart.replace(/,/g, ""));
  const useComma = numPart.includes(",");
  return { target, decimals, suffix, useComma };
}

function formatValue(value: number, decimals: number, useComma: boolean) {
  const fixed = value.toFixed(decimals);
  if (!useComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

type AnimatedNumberProps = {
  /** e.g. "15+", "3,124+", "4.9" — the numeric part is animated, everything else is kept as-is. */
  value: string;
  duration?: number;
  className?: string;
};

// Counts up from 0 to the target once the number scrolls into view, then holds at the final value.
export default function AnimatedNumber({ value, duration = 1600, className }: AnimatedNumberProps) {
  const { target, decimals, suffix, useComma } = parseTarget(value);
  const [display, setDisplay] = useState(() => formatValue(0, decimals, useComma));
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runAnimation = () => {
      if (started.current) return;
      started.current = true;

      if (reduceMotion) {
        requestAnimationFrame(() => setDisplay(formatValue(target, decimals, useComma)));
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(formatValue(target * eased, decimals, useComma));
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(formatValue(target, decimals, useComma));
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, decimals, useComma, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
