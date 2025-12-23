import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  pattern?: 'grid' | 'dots' | 'none';
}

const Section: React.FC<SectionProps> = ({ id, className, children, pattern = 'none' }) => {
  return (
    <section id={id} className={clsx("relative py-20 md:py-32 overflow-hidden", className)}>
      {/* Background Patterns */}
      {pattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      )}
      {pattern === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      )}
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-background/50 radial-vignette pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;