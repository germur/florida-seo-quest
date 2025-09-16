import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, RotateCcw, Sparkles, X, Zap } from "lucide-react";

// Real case studies data
const CASE_STUDIES = [
  {
    id: "paramount-property-restoration",
    company: "Paramount Property Restoration",
    industry: "Property Restoration",
    location: "Florida, USA",
    result: "200+ optimized pages, dozens of keywords in top 3",
    metrics: {
      leads: "Emergency leads from SEO",
      traffic: "Multi-city coverage achieved",
      roi: "Results in <6 months",
      rankings: "Top 3 for dozens of local keywords"
    },
    color: "electric-blue"
  },
  {
    id: "flo-car-rental",
    company: "Flo Car Rental", 
    industry: "Car Rental",
    location: "Miami, USA",
    result: "+120% growth in Google Business Profile actions",
    metrics: {
      visibility: "+120% GBP actions growth",
      traffic: "Higher booking conversions",
      roi: "CTR boost on rental queries", 
      rankings: "Improved local search visibility"
    },
    color: "bright-orange"
  },
  {
    id: "puff-cleaning",
    company: "Puff Cleaning",
    industry: "Cleaning Services", 
    location: "Bogotá, Colombia",
    result: "From 0 to ~2,000 monthly organic visits",
    metrics: {
      fixes: "Built from zero digital presence",
      indexation: "Top 3 local rankings achieved", 
      roi: "Strong local pack presence",
      sessions: "~2,000 monthly visits in year one"
    },
    color: "teal"
  },
  {
    id: "edu1st-preschools",
    company: "Edu1st Preschools",
    industry: "Education",
    location: "Florida, USA", 
    result: "+80% increase in Google Maps actions",
    metrics: {
      engagement: "+80% GMB actions increase",
      traffic: "Significant blog growth",
      roi: "More tour bookings achieved",
      sessions: "Enhanced parent engagement"
    },
    color: "electric-blue"
  },
  {
    id: "craftd-london",
    company: "CRAFTD London",
    industry: "Men's Jewelry",
    location: "UK & US",
    result: "50+ keywords in top 10 within 4 months", 
    metrics: {
      keywords: "50+ keywords in top 10",
      traffic: "Higher category visibility",
      roi: "CTR lift from rich snippets",
      rankings: "4 months to achieve results"
    },
    color: "bright-orange"
  },
  {
    id: "le-gramme", 
    company: "LE GRAMME",
    industry: "Luxury Jewelry",
    location: "France & Global",
    result: "+40% impressions on flagship collections",
    metrics: {
      impressions: "+40% flagship impressions", 
      visibility: "International market expansion",
      roi: "Luxury brand SEO alignment",
      keywords: "Multiple top 10 luxury keywords"
    },
    color: "teal"
  }
];

function pickRandom(arr: typeof CASE_STUDIES) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Compact dice face for floating version
function Pip({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full bg-neutral-gray"
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

function CompactDiceFace({ n }: { n: number }) {
  return (
    <div className="relative w-10 h-10 bg-white rounded-lg border border-border shadow-lg">
      {LAYOUTS[n].map(([x, y], i) => (
        <Pip key={i} x={x} y={y} />
      ))}
    </div>
  );
}

// Floating dice CSS animations
const floatingDiceStyles = `
@keyframes floating-roll {
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(180deg) scale(1.1); }
  50% { transform: rotate(360deg) scale(0.95); }
  75% { transform: rotate(540deg) scale(1.05); }
  100% { transform: rotate(720deg) scale(1); }
}

@keyframes floating-glow {
  0%, 100% { 
    box-shadow: 
      0 0 20px hsl(var(--electric-blue) / 0.4),
      0 0 40px hsl(var(--electric-blue) / 0.2),
      0 4px 12px rgba(0,0,0,0.1);
  }
  50% { 
    box-shadow: 
      0 0 30px hsl(var(--electric-blue) / 0.6),
      0 0 60px hsl(var(--electric-blue) / 0.3),
      0 8px 16px rgba(0,0,0,0.15);
  }
}

@keyframes floating-bounce {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-4px) rotate(1deg); }
  50% { transform: translateY(-8px) rotate(0deg); }
  75% { transform: translateY(-4px) rotate(-1deg); }
}

@keyframes attention-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes sparkle-float {
  0%, 100% { opacity: 0.3; transform: scale(0.8) translateY(0px) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) translateY(-4px) rotate(180deg); }
}

.floating-dice-rolling { 
  animation: floating-roll 800ms cubic-bezier(0.2, 0.9, 0.2, 1); 
}
.floating-dice-glowing {
  animation: floating-glow 2.5s ease-in-out infinite;
}
.floating-dice-bouncing {
  animation: floating-bounce 3s ease-in-out infinite;
}
.floating-attention {
  animation: attention-pulse 2s ease-in-out infinite;
}
.floating-sparkle {
  animation: sparkle-float 2.5s ease-in-out infinite;
}
`;

interface FloatingDiceButtonProps {
  onRollEnd: () => void;
  disabled: boolean;
  isMinimized: boolean;
}

function FloatingDiceButton({ onRollEnd, disabled, isMinimized }: FloatingDiceButtonProps) {
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);

  const startRoll = () => {
    if (rolling || disabled) return;
    
    setRolling(true);
    
    const faceInterval = setInterval(() => {
      setFace(1 + Math.floor(Math.random() * 6));
    }, 80);
    
    setTimeout(() => {
      clearInterval(faceInterval);
      setRolling(false);
      setFace(1 + Math.floor(Math.random() * 6));
      onRollEnd();
    }, 800);
  };

  if (isMinimized) {
    return (
      <button
        type="button"
        onClick={startRoll}
        disabled={disabled || rolling}
        className={`
          group relative flex items-center justify-center w-12 h-12 rounded-xl 
          bg-gradient-to-br from-white to-secondary border-2 cursor-pointer
          transition-all duration-300 ease-out
          
          ${!rolling && !disabled ? 'floating-dice-glowing floating-dice-bouncing floating-attention' : ''}
          ${!rolling && !disabled ? 'hover:scale-110 hover:-translate-y-1' : ''}
          ${!rolling && !disabled ? 'border-electric-blue/40 hover:border-electric-blue/70' : 'border-border'}
          
          active:scale-95 active:translate-y-0
          disabled:opacity-50 disabled:cursor-not-allowed
          
          ${rolling ? "floating-dice-rolling" : ""}
        `}
      >
        <CompactDiceFace n={face} />
        
        {/* Sparkle effects for minimized version */}
        <Sparkles className="absolute -top-2 -right-2 w-3 h-3 text-electric-blue floating-sparkle opacity-80" />
        <Zap className="absolute -bottom-1 -left-1 w-2.5 h-2.5 text-bright-orange floating-sparkle" style={{ animationDelay: '0.7s' }} />
        
        <div className="absolute inset-0 rounded-xl bg-electric-blue/20 opacity-0 group-active:opacity-100 group-active:animate-ping" />
      </button>
    );
  }

  return (
    <div className="relative">
      {/* Sparkle effects around expanded dice */}
      <div className="absolute -inset-6 pointer-events-none">
        <Sparkles className="absolute top-0 left-1 w-3 h-3 text-electric-blue floating-sparkle" />
        <Sparkles className="absolute top-1 right-0 w-2.5 h-2.5 text-bright-orange floating-sparkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-0 left-0 w-2.5 h-2.5 text-electric-blue floating-sparkle" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-1 right-1 w-3 h-3 text-bright-orange floating-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <button
        type="button"
        onClick={startRoll}
        disabled={disabled || rolling}
        className={`
          group relative flex items-center justify-center w-16 h-16 rounded-xl 
          bg-gradient-to-br from-white to-secondary border-2 cursor-pointer
          transition-all duration-300 ease-out
          
          ${!rolling && !disabled ? 'floating-dice-glowing floating-dice-bouncing floating-attention' : ''}
          ${!rolling && !disabled ? 'hover:scale-110 hover:-translate-y-2' : ''}
          ${!rolling && !disabled ? 'border-electric-blue/40 hover:border-electric-blue/70' : 'border-border'}
          
          active:scale-95 active:translate-y-0
          disabled:opacity-50 disabled:cursor-not-allowed
          
          ${rolling ? "floating-dice-rolling" : ""}
          
          before:absolute before:inset-0 before:rounded-xl 
          before:bg-gradient-to-br before:from-electric-blue/5 before:to-bright-orange/5
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
        `}
      >
        <CompactDiceFace n={face} />
        
        <div className="absolute inset-0 rounded-xl bg-electric-blue/20 opacity-0 group-active:opacity-100 group-active:animate-ping" />
      </button>
    </div>
  );
}

// Same overlay as original but optimized for floating context
interface CaseStudyOverlayProps {
  caseStudy: typeof CASE_STUDIES[0] | null;
  onClose: () => void;
  onRollAgain: () => void;
  navigate: (path: string) => void;
}

function CaseStudyOverlay({ caseStudy, onClose, onRollAgain, navigate }: CaseStudyOverlayProps) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl p-6 max-w-lg w-full shadow-2xl animate-scale-in">
        <div className="text-center mb-6">
          <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
            caseStudy.color === 'teal' ? 'bg-teal/10 text-teal' :
            caseStudy.color === 'electric-blue' ? 'bg-electric-blue/10 text-electric-blue' :
            caseStudy.color === 'bright-orange' ? 'bg-bright-orange/10 text-bright-orange' :
            'bg-electric-blue/10 text-electric-blue'
          }`}>
            {caseStudy.industry} • {caseStudy.location}
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-2">
            {caseStudy.company}
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6">
            {caseStudy.result}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {Object.values(caseStudy.metrics).slice(0, 2).map((metric, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1">Result</div>
              <div className="font-semibold text-primary text-sm">{metric}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Button 
            size="sm" 
            onClick={() => {
              navigate(`/case-studies/${caseStudy.id}`);
              onClose();
            }}
            className="group w-full"
          >
            View Full Case Study
            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onRollAgain}
              className="group flex-1"
            >
              <RotateCcw className="mr-2 h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              Roll Again
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="flex-1"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FloatingDice() {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState<typeof CASE_STUDIES[0] | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip on first visit
  useEffect(() => {
    const hasSeenFloatingDice = localStorage.getItem('hasSeenFloatingDice');
    if (!hasSeenFloatingDice) {
      setTimeout(() => setShowTooltip(true), 2000);
      localStorage.setItem('hasSeenFloatingDice', 'true');
    }
  }, []);

  const handleRoll = () => {
    setIsRolling(true);
    setShowTooltip(false);
    
    setTimeout(() => {
      const randomCase = pickRandom(CASE_STUDIES);
      setSelectedCase(randomCase);
      setIsRolling(false);
    }, 1000);
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
      <style>{floatingDiceStyles}</style>
      
      {/* Floating dice container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {/* Tooltip for first-time users */}
        {showTooltip && !selectedCase && (
          <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium animate-fade-in relative">
            Try our Success Story dice! 🎲
            <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-primary-foreground/80 hover:text-primary-foreground"
            >
              ✕
            </button>
          </div>
        )}
        
        {/* Loading indicator */}
        {isRolling && (
          <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-bright-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-xs text-muted-foreground">Rolling...</span>
            </div>
          </div>
        )}
        
        {/* Minimize/expand toggle */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          {isMinimized ? '↗️' : '↙️'}
        </button>
        
        {/* Main floating dice */}
        <div className="relative group">
          <FloatingDiceButton 
            onRollEnd={handleRoll} 
            disabled={isRolling}
            isMinimized={isMinimized}
          />
          
          {/* Hover tooltip */}
          {!isMinimized && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Click for success stories! 🎯
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-y-4 border-r-0 border-transparent border-l-primary"></div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay with results - same as original */}
      <CaseStudyOverlay 
        caseStudy={selectedCase}
        onClose={handleClose}
        onRollAgain={handleRollAgain}
        navigate={navigate}
      />
    </>
  );
}