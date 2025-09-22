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

// Enhanced 3D compact dice face for floating version
function Pip({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full shadow-inner"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: "translate(-50%, -50%)",
        background: 'radial-gradient(circle at 30% 30%, #64748b, #334155)',
        boxShadow: 'inset 0 0.5px 1px rgba(0,0,0,0.4), 0 0.5px 1px rgba(255,255,255,0.2)'
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

// Enhanced 3D compact dice face with modern styling
function CompactDiceFace({ n }: { n: number }) {
  return (
    <div 
      className="relative w-10 h-10 rounded-lg shadow-xl transform-gpu"
      style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        boxShadow: `
          0 4px 16px rgba(0,0,0,0.1),
          0 1px 4px rgba(0,0,0,0.06),
          inset 0 0.5px 0 rgba(255,255,255,0.8),
          inset 0 -0.5px 0 rgba(0,0,0,0.05)
        `,
        transform: 'perspective(100px) rotateX(3deg) rotateY(-3deg)',
      }}
    >
      {/* Subtle inner glow */}
      <div 
        className="absolute inset-0.5 rounded-lg opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {LAYOUTS[n].map(([x, y], i) => (
        <Pip key={i} x={x} y={y} />
      ))}
      
      {/* Top highlight */}
      <div 
        className="absolute top-0 left-1 right-1 h-0.5 rounded-full opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
        }}
      />
    </div>
  );
}

// Enhanced 3D floating dice CSS animations with modern effects
const floatingDiceStyles = `
@keyframes floating-roll-3d {
  0% { 
    transform: perspective(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); 
  }
  20% { 
    transform: perspective(200px) rotateX(120deg) rotateY(90deg) rotateZ(45deg) scale(1.15) translateZ(15px); 
  }
  40% { 
    transform: perspective(200px) rotateX(240deg) rotateY(180deg) rotateZ(90deg) scale(0.9) translateZ(-8px); 
  }
  60% { 
    transform: perspective(200px) rotateX(360deg) rotateY(270deg) rotateZ(135deg) scale(1.1) translateZ(18px); 
  }
  80% { 
    transform: perspective(200px) rotateX(480deg) rotateY(360deg) rotateZ(180deg) scale(0.95) translateZ(-5px); 
  }
  100% { 
    transform: perspective(200px) rotateX(540deg) rotateY(450deg) rotateZ(225deg) scale(1) translateZ(0px); 
  }
}

@keyframes floating-glow-3d {
  0%, 100% { 
    box-shadow: 
      0 0 25px hsl(var(--electric-blue) / 0.5),
      0 0 50px hsl(var(--electric-blue) / 0.25),
      0 0 75px hsl(var(--electric-blue) / 0.1),
      0 8px 24px rgba(0,0,0,0.12);
  }
  50% { 
    box-shadow: 
      0 0 40px hsl(var(--electric-blue) / 0.7),
      0 0 80px hsl(var(--electric-blue) / 0.4),
      0 0 120px hsl(var(--electric-blue) / 0.2),
      0 12px 36px rgba(0,0,0,0.18);
  }
}

@keyframes floating-bounce-3d {
  0%, 100% { 
    transform: perspective(200px) rotateX(3deg) rotateY(-3deg) translateY(0px) translateZ(0px); 
  }
  25% { 
    transform: perspective(200px) rotateX(5deg) rotateY(-1deg) translateY(-3px) translateZ(6px); 
  }
  50% { 
    transform: perspective(200px) rotateX(1deg) rotateY(-6deg) translateY(-6px) translateZ(10px); 
  }
  75% { 
    transform: perspective(200px) rotateX(4deg) rotateY(-4deg) translateY(-3px) translateZ(6px); 
  }
}

@keyframes attention-pulse-3d {
  0%, 100% { 
    transform: perspective(200px) rotateX(3deg) rotateY(-3deg) scale(1) translateZ(0px); 
  }
  50% { 
    transform: perspective(200px) rotateX(6deg) rotateY(-6deg) scale(1.12) translateZ(8px); 
  }
}

@keyframes sparkle-float-3d {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(0.7) translateY(0px) translateZ(0px) rotate(0deg); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.3) translateY(-6px) translateZ(15px) rotate(180deg); 
  }
}

@keyframes micro-particles {
  0% { 
    opacity: 0; 
    transform: translateY(0px) scale(0.3); 
  }
  30% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
    transform: translateY(-25px) translateX(var(--random-x, 8px)) scale(0.7); 
  }
}

.floating-dice-rolling-3d { 
  animation: floating-roll-3d 900ms cubic-bezier(0.175, 0.885, 0.32, 1.275); 
}
.floating-dice-glowing-3d {
  animation: floating-glow-3d 3s ease-in-out infinite;
}
.floating-dice-bouncing-3d {
  animation: floating-bounce-3d 4s ease-in-out infinite;
}
.floating-attention-3d {
  animation: attention-pulse-3d 2.5s ease-in-out infinite;
}
.floating-sparkle-3d {
  animation: sparkle-float-3d 2.8s ease-in-out infinite;
}
`;

interface FloatingDiceButtonProps {
  onRollEnd: () => void;
  disabled: boolean;
  isMinimized: boolean;
}

// Enhanced 3D Floating Dice Button with particle effects
function FloatingDiceButton({ onRollEnd, disabled, isMinimized }: FloatingDiceButtonProps) {
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createMicroParticles = () => {
    const newParticles = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
    }));
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 800);
  };

  const startRoll = () => {
    if (rolling || disabled) return;
    
    setRolling(true);
    createMicroParticles();
    
    const faceInterval = setInterval(() => {
      setFace(1 + Math.floor(Math.random() * 6));
    }, 75);
    
    setTimeout(() => {
      clearInterval(faceInterval);
      setRolling(false);
      setFace(1 + Math.floor(Math.random() * 6));
      onRollEnd();
    }, 900);
  };

  if (isMinimized) {
    return (
      <div className="relative" style={{ perspective: '300px' }}>
        {/* Micro particles for minimized version */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-electric-blue rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              ['--random-x' as any]: `${particle.x}px`,
              animation: 'micro-particles 0.8s ease-out forwards',
              animationDelay: `${Math.random() * 0.15}s`
            }}
          />
        ))}
        
        <button
          type="button"
          onClick={startRoll}
          disabled={disabled || rolling}
          className={`
            group relative flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer
            transition-all duration-400 ease-out transform-gpu
            
            ${!rolling && !disabled ? 'floating-dice-glowing-3d floating-dice-bouncing-3d floating-attention-3d' : ''}
            ${!rolling && !disabled ? 'hover:scale-115 hover:-translate-y-2' : ''}
            
            active:scale-90 active:translate-y-1
            disabled:opacity-50 disabled:cursor-not-allowed
            
            ${rolling ? "floating-dice-rolling-3d" : ""}
          `}
          style={{
            background: rolling ? 
              'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)' :
              'linear-gradient(145deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
            border: rolling ? '2px solid rgba(59, 130, 246, 0.6)' : '2px solid rgba(148, 163, 184, 0.25)',
            boxShadow: rolling ? `
              0 0 25px hsl(var(--electric-blue) / 0.4),
              0 0 50px hsl(var(--electric-blue) / 0.15),
              0 8px 24px rgba(0,0,0,0.12)
            ` : `
              0 6px 20px rgba(0,0,0,0.06),
              0 2px 8px rgba(0,0,0,0.04),
              inset 0 1px 0 rgba(255,255,255,0.9)
            `,
          }}
        >
          <CompactDiceFace n={face} />
          
          {/* Enhanced sparkle effects */}
          <Sparkles className="absolute -top-2 -right-2 w-3 h-3 text-electric-blue floating-sparkle-3d opacity-90" />
          <Zap className="absolute -bottom-1 -left-1 w-2.5 h-2.5 text-bright-orange floating-sparkle-3d" style={{ animationDelay: '0.8s' }} />
          
          <div className="absolute inset-0 rounded-xl bg-electric-blue/25 opacity-0 group-active:opacity-100 group-active:animate-ping" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative" style={{ perspective: '400px' }}>
      {/* Enhanced particle system for expanded version */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-electric-blue rounded-full pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            ['--random-x' as any]: `${particle.x}px`,
            animation: 'micro-particles 0.9s ease-out forwards',
            animationDelay: `${Math.random() * 0.2}s`
          }}
        />
      ))}
      
      {/* Enhanced sparkle effects with 3D positioning */}
      <div className="absolute -inset-8 pointer-events-none">
        <Sparkles className="absolute top-1 left-2 w-3 h-3 text-electric-blue floating-sparkle-3d" />
        <Sparkles className="absolute top-2 right-1 w-2.5 h-2.5 text-bright-orange floating-sparkle-3d" style={{ animationDelay: '0.6s' }} />
        <Sparkles className="absolute bottom-1 left-1 w-2.5 h-2.5 text-electric-blue floating-sparkle-3d" style={{ animationDelay: '1.2s' }} />
        <Sparkles className="absolute bottom-2 right-2 w-3 h-3 text-bright-orange floating-sparkle-3d" style={{ animationDelay: '1.8s' }} />
        <Sparkles className="absolute top-4 left-4 w-2 h-2 text-teal floating-sparkle-3d" style={{ animationDelay: '0.3s' }} />
        <Sparkles className="absolute top-3 right-4 w-2 h-2 text-electric-blue floating-sparkle-3d" style={{ animationDelay: '0.9s' }} />
      </div>
      
      <button
        type="button"
        onClick={startRoll}
        disabled={disabled || rolling}
        className={`
          group relative flex items-center justify-center w-18 h-18 rounded-2xl cursor-pointer
          transition-all duration-500 ease-out transform-gpu
          
          ${!rolling && !disabled ? 'floating-dice-glowing-3d floating-dice-bouncing-3d floating-attention-3d' : ''}
          ${!rolling && !disabled ? 'hover:scale-115 hover:-translate-y-3' : ''}
          
          active:scale-90 active:translate-y-1
          disabled:opacity-50 disabled:cursor-not-allowed
          
          ${rolling ? "floating-dice-rolling-3d" : ""}
        `}
        style={{
          background: rolling ? 
            'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)' :
            'linear-gradient(145deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
          border: rolling ? '2px solid rgba(59, 130, 246, 0.6)' : '2px solid rgba(148, 163, 184, 0.2)',
          boxShadow: rolling ? `
            0 0 35px hsl(var(--electric-blue) / 0.4),
            0 0 70px hsl(var(--electric-blue) / 0.2),
            0 16px 32px rgba(0,0,0,0.12),
            inset 0 2px 4px rgba(255,255,255,0.8),
            inset 0 -2px 4px rgba(0,0,0,0.1)
          ` : `
            0 10px 40px rgba(0,0,0,0.08),
            0 4px 16px rgba(0,0,0,0.04),
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(0,0,0,0.05)
          `,
          transform: rolling ? 
            'perspective(400px) rotateX(0deg) rotateY(0deg)' : 
            'perspective(400px) rotateX(3deg) rotateY(-3deg)',
        }}
      >
        {/* Enhanced inner glow that responds to interaction */}
        <div 
          className={`absolute inset-1 rounded-2xl transition-opacity duration-300 ${
            rolling ? 'opacity-50' : 'opacity-0 group-hover:opacity-30'
          }`}
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.12) 0%, rgba(249, 115, 22, 0.08) 50%, transparent 70%)'
          }}
        />
        
        <CompactDiceFace n={face} />
        
        {/* Enhanced ripple effect with 3D depth */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-200"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
            animation: rolling ? 'none' : 'group-active:animate-ping'
          }}
        />
        
        {/* Subtle edge lighting effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)',
            pointerEvents: 'none'
          }}
        />
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