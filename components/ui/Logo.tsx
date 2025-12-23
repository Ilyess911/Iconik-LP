import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="https://i.postimg.cc/pVCLzMTn/logo-sans-fond.png" 
      alt="ICONIK AUTOMOTIVE" 
      className={`h-14 md:h-28 w-auto object-contain transition-transform duration-300 ${className}`} 
    />
  );
};

export default Logo;