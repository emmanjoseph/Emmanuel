"use client"
import React, { useRef, ReactNode } from 'react'

type GlowCardProps = {
  children: ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', `${angle + 60}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card border rounded-[30px] p-5 cursor-pointer mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
        <div className="text-sm flex flex-col items-center justify-between space-y-3">
          {children}
        </div>
      
    </div>
  );
};

export default GlowCard;
