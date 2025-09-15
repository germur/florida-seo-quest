import React from 'react';

// Brand Pattern Components based on the brand assets
export const DiagonalPattern = ({ className = "", opacity = 0.1 }: { className?: string; opacity?: number }) => (
  <div 
    className={`absolute inset-0 ${className}`}
    style={{
      backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 8px,
        hsl(var(--teal)) ${8 * opacity} 8px,
        hsl(var(--teal)) ${8 * opacity} 12px,
        transparent 12px,
        transparent 20px,
        hsl(var(--bright-orange)) ${8 * opacity} 20px,
        hsl(var(--bright-orange)) ${8 * opacity} 24px
      )`,
      backgroundSize: '40px 40px'
    }}
  >
    {/* Scattered dots */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--neutral-gray)) ${2 * opacity}, transparent 2px),
                         radial-gradient(circle at 75% 75%, hsl(var(--electric-blue)) ${2 * opacity}, transparent 2px)`,
        backgroundSize: '60px 60px, 80px 80px'
      }}
    />
  </div>
);

export const CirclePattern = ({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) => (
  <div 
    className={`absolute inset-0 ${className}`}
    style={{
      backgroundImage: `
        radial-gradient(circle at 0% 0%, hsl(var(--teal)) ${10 * opacity}, transparent 50%),
        radial-gradient(circle at 25% 25%, hsl(var(--bright-orange)) ${8 * opacity}, transparent 40%),
        radial-gradient(circle at 50% 0%, hsl(var(--electric-blue)) ${6 * opacity}, transparent 35%),
        radial-gradient(circle at 75% 25%, hsl(var(--teal)) ${10 * opacity}, transparent 45%),
        radial-gradient(circle at 100% 0%, hsl(var(--bright-orange)) ${8 * opacity}, transparent 40%)
      `,
      backgroundSize: '120px 120px, 100px 100px, 80px 80px, 140px 140px, 90px 90px',
      backgroundPosition: '0 0, 30px 30px, 60px 0, 90px 30px, 120px 0'
    }}
  />
);

// Brand Icons as SVG components
export const GlobalIcon = ({ className = "h-8 w-8", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M6 24h36M24 6v36" stroke={color} strokeWidth="1.5"/>
    <path d="M12 12l24 24M36 12L12 36" stroke={color} strokeWidth="1"/>
    <ellipse cx="24" cy="24" rx="8" ry="18" stroke="hsl(var(--bright-orange))" strokeWidth="2" fill="none"/>
    <circle cx="8" cy="16" r="2" fill="hsl(var(--teal))"/>
    <circle cx="38" cy="8" r="3" fill="hsl(var(--bright-orange))"/>
  </svg>
);

export const BrainIcon = ({ className = "h-8 w-8", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path d="M24 6c-6 0-10 4-10 10v16c0 6 4 10 10 10 6 0 10-4 10-10V16c0-6-4-10-10-10z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M24 6v36M14 16c-2 0-4 2-4 4v8c0 2 2 4 4 4M34 16c2 0 4 2 4 4v8c0 2-2 4-4 4" stroke={color} strokeWidth="1.5"/>
    <circle cx="18" cy="20" r="1.5" fill={color}/>
    <circle cx="30" cy="20" r="1.5" fill={color}/>
    <circle cx="18" cy="28" r="1.5" fill={color}/>
    <circle cx="30" cy="28" r="1.5" fill={color}/>
  </svg>
);

export const ChatIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path d="M8 12c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H16l-8 6V12z" fill="hsl(var(--teal))"/>
    <path d="M20 20c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H28l-8 6V20z" fill="hsl(var(--neutral-gray))"/>
    <circle cx="18" cy="18" r="2" fill="white"/>
    <circle cx="24" cy="18" r="2" fill="white"/>
    <circle cx="34" cy="26" r="2" fill="white"/>
    <circle cx="38" cy="26" r="2" fill="white"/>
  </svg>
);

export const GrowthIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path d="M8 32l8-8 6 6 12-12 6 6" stroke="hsl(var(--teal))" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 36l8-8 6 6 12-12 8 8" stroke="hsl(var(--bright-orange))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 8l8 8-8 8" stroke="hsl(var(--neutral-gray))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const NetworkIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="3" fill="hsl(var(--neutral-gray))"/>
    <circle cx="12" cy="12" r="3" fill="hsl(var(--teal))"/>
    <circle cx="36" cy="12" r="3" fill="hsl(var(--bright-orange))"/>
    <circle cx="12" cy="36" r="3" fill="hsl(var(--bright-orange))"/>
    <circle cx="36" cy="36" r="3" fill="hsl(var(--teal))"/>
    <circle cx="24" cy="8" r="2" fill="hsl(var(--electric-blue))"/>
    <circle cx="8" cy="24" r="2" fill="hsl(var(--electric-blue))"/>
    <circle cx="40" cy="24" r="2" fill="hsl(var(--electric-blue))"/>
    <path d="M24 24L12 12M24 24L36 12M24 24L12 36M24 24L36 36M24 24L24 8M24 24L8 24M24 24L40 24" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
  </svg>
);

export const AnalyticsIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="32" width="6" height="8" fill="hsl(var(--neutral-gray))"/>
    <rect x="18" y="20" width="6" height="20" fill="hsl(var(--bright-orange))"/>
    <rect x="28" y="16" width="6" height="24" fill="hsl(var(--teal))"/>
    <rect x="38" y="8" width="6" height="32" fill="hsl(var(--electric-blue))"/>
    <path d="M6 40h36" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// Floating elements component
export const FloatingElements = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute top-20 left-20 w-72 h-72 opacity-30">
      <CirclePattern opacity={0.1} />
    </div>
    <div className="absolute bottom-20 right-20 w-96 h-96 opacity-20">
      <DiagonalPattern opacity={0.08} />
    </div>
    <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
      <GlobalIcon className="h-16 w-16 text-teal/20" />
    </div>
    <div className="absolute top-32 right-32">
      <NetworkIcon className="h-12 w-12 text-bright-orange/30" />
    </div>
    <div className="absolute bottom-40 left-1/4">
      <GrowthIcon className="h-14 w-14 text-electric-blue/25" />
    </div>
  </div>
);

export default {
  DiagonalPattern,
  CirclePattern,
  GlobalIcon,
  BrainIcon,
  ChatIcon,
  GrowthIcon,
  NetworkIcon,
  AnalyticsIcon,
  FloatingElements
};