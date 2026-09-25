"use client";

import { useEffect, useRef, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

const SPAWN_INTERVAL_MS = 150;
const SPAWN_CHANCE = 0.5;

export function CursorSparks() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastSpawn = 0;

    function handleMove(event: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn < SPAWN_INTERVAL_MS) return;
      if (
        document.documentElement.dataset.theme !== "dark" ||
        reducedMotion.matches
      )
        return;

      lastSpawn = now;
      if (Math.random() > SPAWN_CHANCE) return;

      const id = nextId.current++;
      setSparks((current) => [
        ...current,
        { id, x: event.clientX, y: event.clientY },
      ]);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  function removeSpark(id: number) {
    setSparks((current) => current.filter((spark) => spark.id !== id));
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {sparks.map(({ id, x, y }) => (
        <span
          key={id}
          onAnimationEnd={() => removeSpark(id)}
          className="firefly-glow absolute size-[5px] rounded-full text-yellow animate-spark"
          style={{ left: x, top: y }}
        />
      ))}
    </div>
  );
}
