"use client";

import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type AnimatedContentProps = {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  duration?: number;
  ease?: string;
  blur?: number;
  stagger?: number;
  threshold?: number;
  className?: string;
};

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  duration = 0.8,
  ease = "cubic-bezier(0.16, 1, 0.3, 1)",
  blur = 0,
  stagger = 0.08,
  threshold = 0.1,
  className = "",
}: AnimatedContentProps) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const items = Children.toArray(children);
  const offset = direction === "vertical" ? `0 ${distance}px` : `${distance}px 0`;
  const timingFunction = ease === "power3.out" ? "cubic-bezier(0.22, 1, 0.36, 1)" : ease;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={root} className={`animated-content ${visible ? "is-visible" : ""} ${className}`}>
      {items.map((child, index) => (
        <div
          className="animated-content__item"
          key={index}
          style={
            {
              "--content-offset": offset,
              "--content-blur": `${blur}px`,
              "--content-duration": `${duration}s`,
              "--content-delay": `${index * stagger}s`,
              "--content-ease": timingFunction,
            } as CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}
