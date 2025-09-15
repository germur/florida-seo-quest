import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, RotateCcw } from "lucide-react";

// Case studies data - using the same structure as in CaseStudies page
const CASE_STUDIES = [
  {
    id: "paramount",
    company: "Paramount Property Restoration",
    industry: "Property Restoration",
    location: "Miami, FL",
    result: "+180% qualified leads in 6 months",
    metrics: {
      traffic: "+250% organic traffic",
      leads: "+180% qualified leads", 
      rankings: "Top 3 in 15+ target keywords",
      conversions: "+85% conversion improvement"
    },
    color: "teal"
  },
  {
    id: "1gc",
    company: "1GC Construction", 
    industry: "Commercial Construction",
    location: "Orlando, FL",
    result: "+95% organic visibility in 4 months",
    metrics: {
      visibility: "+95% organic visibility",
      traffic: "+150% quality traffic",
      rankings: "Dominance in 'commercial construction Orlando'",
      rfps: "+60% increase in qualified RFPs"
    },
    color: "electric-blue"
  },
  {
    id: "pura-piel",
    company: "Pura Piel",
    industry: "Aesthetics & Beauty", 
    location: "Fort Lauderdale, FL",
    result: "120+ technical errors fixed, +40% indexation",
    metrics: {
      fixes: "120+ technical errors solved",
      indexation: "+40% indexation improvement", 
      sessions: "+75% increase in organic sessions",
      bounce: "60% reduction in bounce rate"
    },
    color: "bright-orange"
  },
  {
    id: "quintana",
    company: "Quintana",
    industry: "Professional Services",
    location: "Boca Raton, FL", 
    result: "+200% brand mentions",
    metrics: {
      mentions: "+200% brand mentions",
      rankings: "Top 5 in high-competition keywords",
      traffic: "+90% qualified organic traffic",
      leads: "+45% leads from organic search"
    },
    color: "purple"
  },
  {
    id: "roger-murillo",
    company: "Roger Murillo Image Consulting",
    industry: "Image Consulting",
    location: "Miami, FL",
    result: "+300% brand searches",
    metrics: {
      searches: "+300% brand searches",
      rankings: "Leader in 'image consultant Miami'",
      consultations: "+120% qualified consultations", 
      bookings: "+80% increase in premium bookings"
    },
    color: "green"
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
.dice-rolling { 
  animation: roll-dice 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) both; 
}
.dice-face-changing {
  animation: pulse 100ms ease-in-out infinite;
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
    <button
      type="button"
      onClick={startRoll}
      disabled={disabled || rolling}
      className={`
        group flex items-center justify-center w-20 h-20 rounded-2xl 
        bg-card border border-border shadow-xl
        hover:shadow-2xl hover:scale-105 
        active:scale-95 transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${rolling ? "dice-rolling" : ""}
        ${rolling ? "dice-face-changing" : ""}
      `}
    >
      <DiceFace n={face} />
    </button>
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
          <div className={`inline-block px-3 py-1 bg-${caseStudy.color}/10 text-${caseStudy.color} text-sm font-medium rounded-full mb-4`}>
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
              // Navigate to case study detail (you can implement this)
              window.location.href = `/case-studies#${caseStudy.id}`;
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
      
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <DiceButton onRollEnd={handleRoll} disabled={isRolling} />
        
        {isRolling && (
          <div className="text-center animate-fade-in">
            <div className="text-sm text-muted-foreground animate-pulse">
              Rolling the dice...
            </div>
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