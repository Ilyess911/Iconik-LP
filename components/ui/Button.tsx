import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className,
  ...props 
}) => {
  // Added active:scale-[0.98] for press feedback and improved shadow handling
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group active:scale-[0.96] backface-hidden transform-gpu";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)]",
    secondary: "bg-surfaceHighlight text-white border border-border hover:border-white/20 hover:bg-white/10",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Refined Shimmer Effect for Primary Buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[50%] -skew-x-12 translate-x-[-200%] group-hover:animate-[shimmer_1.5s_infinite] opacity-50" />
      )}
    </button>
  );
};

export default Button;