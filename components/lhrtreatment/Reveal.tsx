"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import styles from "./faq.module.css";

export default function Reveal({ children, className = "", direction, delay = 0 }: {
  children: ReactNode;
  className?: string;
  direction: "up" | "left" | "right";
  delay?: number;
  as?: "div";
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={elementRef} className={`${styles.reveal} ${className}`} style={{
    "--delay": `${delay}ms`,
    "--offset-x": direction === "left" ? "-12px" : direction === "right" ? "12px" : "0px",
    "--offset-y": direction === "up" ? "12px" : "0px",
  } as CSSProperties}>{children}</div>;
}

