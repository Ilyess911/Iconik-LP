import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  pulse?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group active:scale-[0.98] backface-hidden transform-gpu";
  
  const variants = {
    // Primary: High contrast, white on black background, subtle glow aimed at conversion
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_35px_-5px_rgba(255,255,255,0.7)] border-2 border-transparent",
    
    // Secondary: Dark background, light border, less aggressive
    secondary: "bg-surfaceHighlight text-white border border-white/10 hover:border-white/30 hover:bg-white/10 shadow-lg",
    
    // Outline: Minimalist
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    
    // Ghost: Text only
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {/* Pulse Effect for high priority CTAs */}
      {pulse && variant === 'primary' && (
        <span className="absolute -inset-1 rounded-full bg-white/20 blur-md animate-pulse z-0"></span>
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Shimmer Effect for Primary Buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[50%] -skew-x-12 translate-x-[-200%] group-hover:animate-[shimmer_1s_infinite] opacity-50" />
      )}
    </button>
  );
};

export default Button;