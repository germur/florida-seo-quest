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

// Modern 3D dice face with enhanced visual effects
function Pip({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute w-2.5 h-2.5 rounded-full bg-gradient-radial from-neutral-gray via-slate-700 to-slate-800 shadow-inner"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: "translate(-50%, -50%)",
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.1)'
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

// Modern 3D dice face with realistic depth and lighting
function DiceFace({ n }: { n: number }) {
  return (
    <div 
      className="relative w-16 h-16 rounded-xl shadow-2xl transform-gpu"
      style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        boxShadow: `
          0 8px 32px rgba(0,0,0,0.12),
          0 2px 8px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8),
          inset 0 -1px 0 rgba(0,0,0,0.05)
        `,
        transform: 'perspective(200px) rotateX(5deg) rotateY(-5deg)',
      }}
    >
      {/* Subtle inner glow effect */}
      <div 
        className="absolute inset-0.5 rounded-xl opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {LAYOUTS[n].map(([x, y], i) => (
        <Pip key={i} x={x} y={y} />
      ))}
      
      {/* Highlight reflection on top edge */}
      <div 
        className="absolute top-0 left-2 right-2 h-1 rounded-full opacity-60"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)'
        }}
      />
    </div>
  );
}

// Enhanced 3D CSS Animation styles with realistic physics
const diceStyles = `
@keyframes roll-dice-3d {
  0% { 
    transform: perspective(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); 
  }
  15% { 
    transform: perspective(400px) rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.1) translateZ(20px); 
  }
  30% { 
    transform: perspective(400px) rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.95) translateZ(-10px); 
  }
  45% { 
    transform: perspective(400px) rotateX(540deg) rotateY(270deg) rotateZ(135deg) scale(1.08) translateZ(25px); 
  }
  60% { 
    transform: perspective(400px) rotateX(720deg) rotateY(360deg) rotateZ(180deg) scale(0.98) translateZ(-5px); 
  }
  75% { 
    transform: perspective(400px) rotateX(900deg) rotateY(450deg) rotateZ(225deg) scale(1.05) translateZ(15px); 
  }
  90% { 
    transform: perspective(400px) rotateX(1080deg) rotateY(540deg) rotateZ(270deg) scale(0.99) translateZ(-2px); 
  }
  100% { 
    transform: perspective(400px) rotateX(1080deg) rotateY(540deg) rotateZ(360deg) scale(1) translateZ(0px); 
  }
}

@keyframes float-dice-3d {
  0%, 100% { 
    transform: perspective(400px) rotateX(5deg) rotateY(-5deg) translateY(0px) translateZ(0px); 
  }
  25% { 
    transform: perspective(400px) rotateX(8deg) rotateY(-2deg) translateY(-4px) translateZ(8px); 
  }
  50% { 
    transform: perspective(400px) rotateX(2deg) rotateY(-8deg) translateY(-8px) translateZ(12px); 
  }
  75% { 
    transform: perspective(400px) rotateX(6deg) rotateY(-6deg) translateY(-4px) translateZ(8px); 
  }
}

@keyframes glow-pulse-3d {
  0%, 100% { 
    box-shadow: 
      0 0 30px hsl(var(--electric-blue) / 0.4),
      0 0 60px hsl(var(--electric-blue) / 0.2),
      0 0 100px hsl(var(--electric-blue) / 0.1),
      0 16px 32px rgba(0,0,0,0.15),
      0 4px 16px rgba(0,0,0,0.1);
  }
  50% { 
    box-shadow: 
      0 0 50px hsl(var(--electric-blue) / 0.6),
      0 0 100px hsl(var(--electric-blue) / 0.3),
      0 0 150px hsl(var(--electric-blue) / 0.15),
      0 24px 48px rgba(0,0,0,0.2),
      0 8px 24px rgba(0,0,0,0.15);
  }
}

@keyframes sparkle-3d {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0.6) rotate(0deg) translateZ(0px); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.3) rotate(180deg) translateZ(20px); 
  }
}

@keyframes click-invitation-3d {
  0%, 100% { 
    transform: perspective(400px) rotateX(5deg) rotateY(-5deg) scale(1) translateZ(0px); 
  }
  50% { 
    transform: perspective(400px) rotateX(8deg) rotateY(-8deg) scale(1.08) translateZ(10px); 
  }
}

@keyframes particle-float {
  0% { 
    opacity: 0; 
    transform: translateY(0px) translateX(0px) scale(0.5); 
  }
  20% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
    transform: translateY(-40px) translateX(var(--random-x, 10px)) scale(0.8); 
  }
}

.dice-rolling-3d { 
  animation: roll-dice-3d 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275) both; 
}
.dice-face-changing {
  animation: pulse 120ms ease-in-out infinite;
}
.dice-floating-3d {
  animation: float-dice-3d 4s ease-in-out infinite;
}
.dice-glowing-3d {
  animation: glow-pulse-3d 3s ease-in-out infinite;
}
.dice-invitation-3d {
  animation: click-invitation-3d 2.5s ease-in-out infinite;
}
.sparkle-3d {
  animation: sparkle-3d 2.5s ease-in-out infinite;
}
`;

// Enhanced 3D Dice Button with realistic physics and modern effects
function DiceButton({ onRollEnd, disabled }: { onRollEnd: () => void; disabled: boolean }) {
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createParticles = () => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 40 - 20, // Random X offset
      y: Math.random() * 40 - 20, // Random Y offset
    }));
    setParticles(newParticles);
    
    // Clear particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  const startRoll = () => {
    if (rolling || disabled) return;
    
    setRolling(true);
    createParticles();
    
    // Fast face changes during animation with varied timing
    const faceInterval = setInterval(() => {
      setFace(1 + Math.floor(Math.random() * 6));
    }, 100);
    
    // End roll animation with longer duration for 3D effect
    setTimeout(() => {
      clearInterval(faceInterval);
      setRolling(false);
      setFace(1 + Math.floor(Math.random() * 6)); // Final face
      onRollEnd();
    }, 1200);
  };

  return (
    <div className="relative" style={{ perspective: '600px' }}>
      {/* Enhanced particle system */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-electric-blue rounded-full pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            ['--random-x' as any]: `${particle.x}px`,
            animation: 'particle-float 1s ease-out forwards',
            animationDelay: `${Math.random() * 0.2}s`
          }}
        />
      ))}
      
      {/* Enhanced sparkle effects with 3D positioning */}
      <div className="absolute -inset-12 pointer-events-none">
        <Sparkles className="absolute top-2 left-4 w-4 h-4 text-electric-blue sparkle-3d" />
        <Sparkles className="absolute top-4 right-2 w-3 h-3 text-bright-orange sparkle-3d" style={{ animationDelay: '0.6s' }} />
        <Sparkles className="absolute bottom-2 left-2 w-3 h-3 text-electric-blue sparkle-3d" style={{ animationDelay: '1.2s' }} />
        <Sparkles className="absolute bottom-4 right-4 w-4 h-4 text-bright-orange sparkle-3d" style={{ animationDelay: '1.8s' }} />
        <Sparkles className="absolute top-8 left-8 w-2 h-2 text-teal sparkle-3d" style={{ animationDelay: '0.3s' }} />
        <Sparkles className="absolute top-6 right-8 w-2 h-2 text-electric-blue sparkle-3d" style={{ animationDelay: '0.9s' }} />
      </div>
      
      {/* Modern 3D button with enhanced shadows and perspective */}
      <button
        type="button"
        onClick={startRoll}
        disabled={disabled || rolling}
        className={`
          group relative flex items-center justify-center w-28 h-28 rounded-3xl cursor-pointer
          transition-all duration-500 ease-out transform-gpu
          
          ${!rolling && !disabled ? 'dice-floating-3d dice-glowing-3d dice-invitation-3d' : ''}
          ${!rolling && !disabled ? 'hover:scale-110 hover:-translate-y-3' : ''}
          
          active:scale-95 active:translate-y-1
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
          
          ${rolling ? "dice-rolling-3d" : ""}
          ${rolling ? "dice-face-changing" : ""}
        `}
        style={{
          background: rolling ? 
            'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)' :
            'linear-gradient(145deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
          border: rolling ? '2px solid rgba(59, 130, 246, 0.6)' : '2px solid rgba(148, 163, 184, 0.2)',
          boxShadow: rolling ? `
            0 0 40px hsl(var(--electric-blue) / 0.3),
            0 0 80px hsl(var(--electric-blue) / 0.1),
            0 20px 40px rgba(0,0,0,0.15),
            inset 0 2px 4px rgba(255,255,255,0.8),
            inset 0 -2px 4px rgba(0,0,0,0.1)
          ` : `
            0 12px 48px rgba(0,0,0,0.08),
            0 4px 16px rgba(0,0,0,0.04),
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(0,0,0,0.05)
          `,
          transform: rolling ? 
            'perspective(600px) rotateX(0deg) rotateY(0deg)' : 
            'perspective(600px) rotateX(5deg) rotateY(-5deg)',
        }}
      >
        {/* Enhanced inner glow that responds to interaction */}
        <div 
          className={`absolute inset-1 rounded-3xl transition-opacity duration-300 ${
            rolling ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'
          }`}
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.15) 0%, rgba(249, 115, 22, 0.1) 50%, transparent 70%)'
          }}
        />
        
        <DiceFace n={face} />
        
        {/* Enhanced ripple effect with 3D depth */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-active:opacity-100 transition-opacity duration-200"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            animation: rolling ? 'none' : 'group-active:animate-ping'
          }}
        />
        
        {/* Subtle edge lighting effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)',
            pointerEvents: 'none'
          }}
        />
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
              Discover a Success Story!
            </h3>
            <MousePointer2 className="w-5 h-5 text-bright-orange animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Click the dice to see real results from our clients
          </p>
          
          {/* Visual hint with arrow pointing to dice */}
          {!isRolling && (
            <div className="flex items-center justify-center gap-2 text-xs text-electric-blue font-medium animate-pulse">
              <span>👆</span>
              <span>Click me!</span>
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
              Selecting success story...
            </div>
          </div>
        )}
        
        {/* Subtle instruction text */}
        {!isRolling && (
          <div className="text-center text-xs text-muted-foreground/70 max-w-xs">
            Each roll reveals real metrics from completed projects
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