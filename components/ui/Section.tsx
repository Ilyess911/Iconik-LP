import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  pattern?: 'grid' | 'dots' | 'noise' | 'none';
}

const Section: React.FC<SectionProps> = ({ id, className, children, pattern = 'none' }) => {
  return (
    <section id={id} className={clsx("relative py-24 md:py-32 overflow-hidden bg-background", className)}>
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Patterns */}
      {pattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)] pointer-events-none" />
      )}
      {pattern === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)] pointer-events-none" />
      )}
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-background/30 radial-vignette pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;