import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx(className, width === "100%" ? "w-full" : "w-fit")} style={{ overflow: "visible" }}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;