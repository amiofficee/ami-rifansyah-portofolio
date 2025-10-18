"use client";

import React from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /** Optional delay in milliseconds for staggered animations */
  delayMs?: number;
  /** Optional custom animation class (defaults to fade-slide-up) */
  animationClassName?: string;
};

export default function Reveal({
  children,
  className,
  as = 'div',
  delayMs = 0,
  animationClassName = 'reveal-fade-up',
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delayMs);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  const classNames = [
    className,
    isVisible ? 'reveal-in' : 'reveal-init',
    animationClassName,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'div') {
    return (
      <div ref={ref} className={classNames}>
        {children}
      </div>
    );
  }
  // For other tags, wrap with a div to keep typed ref simple and avoid any
  const Tag: React.ElementType = as;
  return (
    <Tag className={classNames}>
      <div ref={ref}>{children}</div>
    </Tag>
  );
}


