import React, { useState, useEffect } from 'react';
import { Car, Lock } from 'lucide-react';

const ScrollProgressCar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isParked, setIsParked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      
      const percentage = Math.min(scroll * 100, 100);
      setScrollProgress(percentage);

      // Park Logic: If we are at > 99%, we are parked
      if (percentage > 99 && !isParked) {
        setIsParked(true);
      } else if (percentage < 98 && isParked) {
        setIsParked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isParked]);

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-50">
      {/* Progress Line filled */}
      <div 
        className="h-full bg-gradient-to-r from-transparent via-white/50 to-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* The Car Icon */}
      <div 
        className="absolute bottom-1 -translate-x-1/2 transition-all duration-100 ease-out will-change-transform flex flex-col items-center"
        style={{ left: `${scrollProgress}%` }}
      >
         {/* Lock Icon - Appears when parked */}
         <div className={`mb-1 transition-all duration-500 ${isParked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <Lock className="w-3 h-3 text-green-400" />
         </div>

         {/* Car Container */}
         <div className="relative">
            {/* The Car */}
            <Car 
                className={`w-6 h-6 text-white transform -scale-x-100 transition-colors duration-300 ${isParked ? 'text-zinc-400' : 'text-white'}`} 
                fill={isParked ? "#555" : "black"}
                strokeWidth={1.5}
            />
            
            {/* Headlights (Front) - Hidden when parked */}
            <div className={`absolute top-2 right-[-20px] w-12 h-6 bg-gradient-to-r from-white/80 to-transparent blur-md rounded-full pointer-events-none transition-opacity duration-300 ${isParked ? 'opacity-0' : 'opacity-60'}`} />

            {/* Hazard Lights (Blinkers) - Only active when parked */}
            {/* Left Blinker */}
            <div className={`absolute top-[6px] left-[2px] w-1 h-1 bg-orange-500 rounded-full ${isParked ? 'animate-hazards' : 'opacity-0'}`} />
            {/* Right Blinker (simulated via same div for simplicity or distinct) */}
            <div className={`absolute top-[6px] right-[2px] w-1 h-1 bg-orange-500 rounded-full ${isParked ? 'animate-hazards' : 'opacity-0'}`} />
         </div>
      </div>
    </div>
  );
};

export default ScrollProgressCar;