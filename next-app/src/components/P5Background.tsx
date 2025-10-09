'use client';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Icon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  symbol: string;
  opacity: number;
}

const P5Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons: Icon[] = [];
    const symbols = ['⚡', '🎯', '📈', '🔍', '💡', '🚀', '⭐', '💎'];
    
    const sketch = (p: p5) => {
      p.setup = () => {
        const canvas = p.createCanvas(
          containerRef.current?.offsetWidth || window.innerWidth,
          containerRef.current?.offsetHeight || window.innerHeight
        );
        canvas.parent(containerRef.current!);
        
        // Create floating icons
        for (let i = 0; i < 15; i++) {
          icons.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.5, 0.5),
            vy: p.random(-0.5, 0.5),
            size: p.random(20, 40),
            rotation: p.random(p.TWO_PI),
            rotationSpeed: p.random(-0.02, 0.02),
            symbol: p.random(symbols),
            opacity: p.random(0.1, 0.3)
          });
        }
      };

      p.draw = () => {
        p.clear();
        
        // Update and draw icons
        icons.forEach(icon => {
          // Update position
          icon.x += icon.vx;
          icon.y += icon.vy;
          icon.rotation += icon.rotationSpeed;
          
          // Wrap around edges
          if (icon.x < -50) icon.x = p.width + 50;
          if (icon.x > p.width + 50) icon.x = -50;
          if (icon.y < -50) icon.y = p.height + 50;
          if (icon.y > p.height + 50) icon.y = -50;
          
          // Draw icon
          p.push();
          p.translate(icon.x, icon.y);
          p.rotate(icon.rotation);
          p.textSize(icon.size);
          p.textAlign(p.CENTER, p.CENTER);
          p.fill(255, 255, 255, icon.opacity * 255);
          p.text(icon.symbol, 0, 0);
          p.pop();
        });
        
        // Draw connecting lines between nearby icons
        p.stroke(100, 180, 255, 30);
        p.strokeWeight(1);
        for (let i = 0; i < icons.length; i++) {
          for (let j = i + 1; j < icons.length; j++) {
            const d = p.dist(icons[i].x, icons[i].y, icons[j].x, icons[j].y);
            if (d < 200) {
              p.line(icons[i].x, icons[i].y, icons[j].x, icons[j].y);
            }
          }
        }
      };

      p.windowResized = () => {
        if (containerRef.current) {
          p.resizeCanvas(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        }
      };
    };

    p5Instance.current = new p5(sketch);

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default P5Background;
