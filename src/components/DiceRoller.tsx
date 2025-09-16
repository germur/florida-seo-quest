import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, RotateCcw, Sparkles, MousePointer2 } from "lucide-react";

// Case studies data - using real cases from CaseStudies component
const CASE_STUDIES = [
  {
    id: "paramount-property-restoration",
    company: "Paramount",
    industry: "Property Restoration",
    location: "Miami, FL",
    result: "+180% qualified leads in 6 months",
    metrics: {
      leads: "+180% qualified leads",
      traffic: "+250% organic traffic", 
      roi: "+420% ROI improvement",
      rankings: "Top 3 in local restoration keywords"
    },
    color: "electric-blue"
  },
  {
    id: "1gc-construction",
    company: "1GC Construction", 
    industry: "Commercial Construction",
    location: "Orlando, FL",
    result: "+95% organic visibility in 4 months",
    metrics: {
      visibility: "+95% organic visibility",
      traffic: "+150% quality traffic",
      roi: "+280% ROI improvement", 
      rankings: "Dominance in commercial construction Orlando"
    },
    color: "bright-orange"
  },
  {
    id: "pura-piel-aesthetics",
    company: "Pura Piel",
    industry: "Aesthetics & Beauty", 
    location: "Fort Lauderdale, FL",
    result: "120+ technical errors fixed, +40% indexation",
    metrics: {
      fixes: "120+ technical SEO errors solved",
      indexation: "+40% indexation improvement", 
      roi: "+190% ROI improvement",
      sessions: "+75% increase in organic sessions"
    },
    color: "teal"
  }
];

function pickRandom(arr: typeof CASE_STUDIES) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Dice face with dots (pips)
function Pip({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute w-2.5 h-2.5 rounded-full bg-neutral-gray"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: "translate(-50%, -50%)" 
      }}
    />
  );
}

const LAYOUTS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[30, 30], [70, 70]],
  3: [[30, 30], [50, 50], [70, 70]],
  4: [[30, 30], [70, 30], [30, 70], [70, 70]],
  5: [[30, 30], [70, 30], [50, 50], [30, 70], [70, 70]],
  6: [[30, 25], [30, 50], [30, 75], [70, 25], [70, 50], [70, 75]],
};

function DiceFace({ n }: { n: number }) {
  return (
    <div className="relative w-16 h-16 bg-white rounded-xl border border-border shadow-lg">
      {LAYOUTS[n].map(([x, y], i) => (
        <Pip key={i} x={x} y={y} />
      ))}
    </div>
  );
}

// CSS Animation styles
const diceStyles = `
@keyframes roll-dice {
  0% { transform: rotate(0deg) scale(1); }
  20% { transform: rotate(120deg) scale(1.05); }
  40% { transform: rotate(240deg) scale(0.98); }
  60% { transform: rotate(360deg) scale(1.06); }
  80% { transform: rotate(480deg) scale(0.99); }
  100% { transform: rotate(600deg) scale(1); }
}

@keyframes float-dice {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px hsl(var(--electric-blue) / 0.3), 0 0 40px hsl(var(--electric-blue) / 0.1); }
  50% { box-shadow: 0 0 30px hsl(var(--electric-blue) / 0.5), 0 0 60px hsl(var(--electric-blue) / 0.2); }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
}

@keyframes click-invitation {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.dice-rolling { 
  animation: roll-dice 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) both; 
}
.dice-face-changing {
  animation: pulse 100ms ease-in-out infinite;
}
.dice-floating {
  animation: float-dice 3s ease-in-out infinite;
}
.dice-glowing {
  animation: glow-pulse 2s ease-in-out infinite;
}
.dice-invitation {
  animation: click-invitation 2s ease-in-out infinite;
}
`;

function DiceButton({ onRollEnd, disabled }: { onRollEnd: () => void; disabled: boolean }) {
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);

  const startRoll = () => {
    if (rolling || disabled) return;
    
    setRolling(true);
    
    // Fast face changes during animation
    const faceInterval = setInterval(() => {
      setFace(1 + Math.floor(Math.random() * 6));
    }, 120);
    
    // End roll animation
    setTimeout(() => {
      clearInterval(faceInterval);
      setRolling(false);
      setFace(1 + Math.floor(Math.random() * 6)); // Final face
      onRollEnd();
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Sparkle effects around the dice */}
      <div className="absolute -inset-8 pointer-events-none">
        <Sparkles className="absolute top-0 left-2 w-4 h-4 text-electric-blue animate-[sparkle_3s_ease-in-out_infinite]" />
        <Sparkles className="absolute top-2 right-0 w-3 h-3 text-bright-orange animate-[sparkle_3s_ease-in-out_infinite_0.5s]" />
        <Sparkles className="absolute bottom-0 left-0 w-3 h-3 text-electric-blue animate-[sparkle_3s_ease-in-out_infinite_1s]" />
        <Sparkles className="absolute bottom-2 right-2 w-4 h-4 text-bright-orange animate-[sparkle_3s_ease-in-out_infinite_1.5s]" />
      </div>
      
      <button
        type="button"
        onClick={startRoll}
        disabled={disabled || rolling}
        className={`
          group relative flex items-center justify-center w-24 h-24 rounded-2xl 
          bg-gradient-to-br from-white to-secondary border-2 cursor-pointer
          transition-all duration-300 ease-out
          shadow-[0_8px_32px_-8px_hsl(var(--electric-blue)/0.3)]
          
          ${!rolling && !disabled ? 'dice-floating dice-glowing dice-invitation hover:shadow-[0_12px_48px_-8px_hsl(var(--electric-blue)/0.5)]' : ''}
          ${!rolling && !disabled ? 'hover:scale-110 hover:-translate-y-2' : ''}
          ${!rolling && !disabled ? 'border-electric-blue/30 hover:border-electric-blue/60' : 'border-border'}
          
          active:scale-95 active:translate-y-0
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
          
          ${rolling ? "dice-rolling" : ""}
          ${rolling ? "dice-face-changing" : ""}
          
          before:absolute before:inset-0 before:rounded-2xl 
          before:bg-gradient-to-br before:from-electric-blue/5 before:to-bright-orange/5
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
        `}
      >
        <DiceFace n={face} />
        
        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-2xl bg-electric-blue/20 opacity-0 group-active:opacity-100 group-active:animate-ping" />
      </button>
    </div>
  );
}

interface CaseStudyOverlayProps {
  caseStudy: typeof CASE_STUDIES[0] | null;
  onClose: () => void;
  onRollAgain: () => void;
}

function CaseStudyOverlay({ caseStudy, onClose, onRollAgain }: CaseStudyOverlayProps) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-scale-in">
        <div className="text-center mb-6">
          <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
            caseStudy.color === 'teal' ? 'bg-teal/10 text-teal' :
            caseStudy.color === 'electric-blue' ? 'bg-electric-blue/10 text-electric-blue' :
            caseStudy.color === 'bright-orange' ? 'bg-bright-orange/10 text-bright-orange' :
            'bg-electric-blue/10 text-electric-blue'
          }`}>
            {caseStudy.industry} • {caseStudy.location}
          </div>
          
          <h3 className="text-3xl font-bold text-primary mb-2">
            {caseStudy.company}
          </h3>
          
          <p className="text-xl text-muted-foreground mb-6">
            {caseStudy.result}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {Object.values(caseStudy.metrics).map((metric, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Result</div>
              <div className="font-semibold text-primary">{metric}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => {
              // Navigate to case study detail page
              window.location.href = `/case-studies/${caseStudy.id}`;
              onClose();
            }}
            className="group"
          >
            View Full Case Study
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={onRollAgain}
            className="group"
          >
            <RotateCcw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            Roll Again
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

interface DiceRollerProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function DiceRoller({ size = "lg", className = "" }: DiceRollerProps) {
  const [selectedCase, setSelectedCase] = useState<typeof CASE_STUDIES[0] | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    setIsRolling(true);
    
    // Simulate thinking time before showing result
    setTimeout(() => {
      const randomCase = pickRandom(CASE_STUDIES);
      setSelectedCase(randomCase);
      setIsRolling(false);
    }, 1200);
  };

  const handleRollAgain = () => {
    setSelectedCase(null);
    handleRoll();
  };

  const handleClose = () => {
    setSelectedCase(null);
  };

  return (
    <>
      <style>{diceStyles}</style>
      
      <div className={`flex flex-col items-center gap-6 ${className}`}>
        {/* Engaging header with clear call to action */}
        <div className="text-center max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MousePointer2 className="w-5 h-5 text-electric-blue animate-bounce" />
            <h3 className="text-xl font-title text-primary">
              ¡Descubre un Caso de Éxito!
            </h3>
            <MousePointer2 className="w-5 h-5 text-bright-orange animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Haz clic en el dado para ver resultados reales de nuestros clientes
          </p>
          
          {/* Visual hint with arrow pointing to dice */}
          {!isRolling && (
            <div className="flex items-center justify-center gap-2 text-xs text-electric-blue font-medium animate-pulse">
              <span>👆</span>
              <span>¡Clickéame!</span>
              <span>👆</span>
            </div>
          )}
        </div>
        
        <DiceButton onRollEnd={handleRoll} disabled={isRolling} />
        
        {isRolling && (
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-bright-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <div className="text-sm text-muted-foreground animate-pulse">
              Seleccionando caso de éxito...
            </div>
          </div>
        )}
        
        {/* Subtle instruction text */}
        {!isRolling && (
          <div className="text-center text-xs text-muted-foreground/70 max-w-xs">
            Cada tirada revela métricas reales de proyectos completados
          </div>
        )}
      </div>

      <CaseStudyOverlay 
        caseStudy={selectedCase}
        onClose={handleClose}
        onRollAgain={handleRollAgain}
      />
    </>
  );
}