"use client";

import { useEffect } from "react";

export function SpotlightBackground() {
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${ev.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(200, 217, 230, 0.15), transparent 80%)`,
      }}
    />
  );
}
