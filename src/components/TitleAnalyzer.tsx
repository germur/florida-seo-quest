import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Search, CheckCircle, AlertTriangle, XCircle, Hash, Heart, Target, Lightbulb } from "lucide-react";

const TitleAnalyzer = () => {
  const [title, setTitle] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    analysis: [],
    suggestions: [],
    powerWords: [],
    label: "",
    description: ""
  });

  const powerWordsList = [
    'gratis', 'nuevo', 'fácil', 'rápido', 'mejor', 'completo', 'guía', 'cómo',
    'definitivo', 'último', 'probado', 'secreto', 'exclusivo', 'ahora',
    'descubre', 'aumenta', 'mejora', 'optimiza', 'garantizado', 'profesional',
    'esencial', 'práctico', 'efectivo', 'poderoso', 'simple', 'avanzado',
    'tutorial', 'paso a paso', 'estrategia', 'técnicas', 'trucos', 'tips'
  ];

  const emotionalWords = [
    'increíble', 'asombroso', 'revolucionario', 'impactante', 'sorprendente',
    'brutal', 'épico', 'magistral', 'genial', 'espectacular'
  ];

  const examples = [
    'Guía Completa de SEO 2025: Estrategias que Funcionan',
    '10 Mejores Herramientas SEO Gratis',
    'Cómo Aumentar el Tráfico Web en 30 Días [Probado]',
    'Marketing Digital'
  ];

  const getCharacterStatus = () => {
    const length = title.length;
    if (length >= 50 && length <= 60) {
      return { color: 'text-green-600', bg: 'bg-green-100', status: 'optimal' };
    } else if (length > 60 || (length < 50 && length > 30)) {
      return { color: 'text-yellow-600', bg: 'bg-yellow-100', status: 'warning' };
    } else {
      return { color: 'text-red-600', bg: 'bg-red-100', status: 'danger' };
    }
  };

  const analyzeTitle = async () => {
    if (!title.trim()) {
      alert('Por favor, ingresa un título para analizar');
      return;
    }

    setIsAnalyzing(true);

    // Simulate analysis delay
    setTimeout(() => {
      let score = 0;
      const analysis = [];
      const suggestions = [];

      // 1. Length analysis
      const length = title.length;
      if (length >= 50 && length <= 60) {
        score += 25;
        analysis.push({
          type: 'success',
          icon: CheckCircle,
          title: 'Longitud Óptima',
          desc: `${length} caracteres - Perfecto para desktop y móvil`
        });
      } else if (length > 60) {
        score += 10;
        analysis.push({
          type: 'warning',
          icon: AlertTriangle,
          title: 'Título Muy Largo',
          desc: `${length} caracteres - Google lo cortará en resultados`
        });
        suggestions.push(`Reduce el título a 50-60 caracteres (actualmente ${length})`);
      } else if (length < 30) {
        score += 5;
        analysis.push({
          type: 'error',
          icon: XCircle,
          title: 'Título Muy Corto',
          desc: `${length} caracteres - No aprovechas el espacio disponible`
        });
        suggestions.push('Añade más información relevante al título');
      } else {
        score += 15;
        analysis.push({
          type: 'warning',
          icon: AlertTriangle,
          title: 'Longitud Subóptima',
          desc: `${length} caracteres - Algo corto pero aceptable`
        });
      }

      // 2. Power words analysis
      const titleLower = title.toLowerCase();
      const foundPowerWords = powerWordsList.filter(word => titleLower.includes(word));

      if (foundPowerWords.length > 0) {
        score += Math.min(foundPowerWords.length * 10, 25);
        analysis.push({
          type: 'success',
          icon: Sparkles,
          title: 'Palabras de Poder',
          desc: `Encontradas ${foundPowerWords.length} palabras que aumentan CTR`
        });
      } else {
        analysis.push({
          type: 'warning',
          icon: AlertTriangle,
          title: 'Sin Palabras de Poder',
          desc: 'Considera añadir palabras que generen acción'
        });
        suggestions.push('Añade palabras como: gratis, guía, mejor, cómo, nuevo');
      }

      // 3. Numbers analysis
      const hasNumbers = /\d/.test(title);
      if (hasNumbers) {
        score += 15;
        analysis.push({
          type: 'success',
          icon: Hash,
          title: 'Contiene Números',
          desc: 'Los números aumentan el CTR en un 36%'
        });
      } else {
        suggestions.push('Considera añadir números (ej: "10 formas", "2025", "5 pasos")');
      }

      // 4. Emotional analysis
      const hasEmotional = emotionalWords.some(word => titleLower.includes(word));
      if (hasEmotional) {
        score += 10;
        analysis.push({
          type: 'success',
          icon: Heart,
          title: 'Impacto Emocional',
          desc: 'Genera curiosidad y engagement'
        });
      }

      // 5. Brackets analysis
      const hasBrackets = /\[.*\]|\(.*\)/.test(title);
      if (hasBrackets) {
        score += 10;
        analysis.push({
          type: 'success',
          icon: Target,
          title: 'Uso de Corchetes',
          desc: 'Aumenta CTR en un 38% según estudios'
        });
      } else {
        suggestions.push('Prueba añadir [Actualizado], [Guía], o (2025) al final');
      }

      // 6. Keyword position (assuming good position for longer titles)
      if (title.length > 20) {
        score += 15;
        analysis.push({
          type: 'success',
          icon: Target,
          title: 'Keyword Position',
          desc: 'Asumiendo keyword al inicio (mejor práctica)'
        });
      }

      // Limit score to 100
      score = Math.min(score, 100);

      // Determine label and description
      let label = 'Necesita Mejoras';
      let description = 'Tu título necesita optimización';

      if (score >= 80) {
        label = '¡Excelente!';
        description = 'Tu título está muy bien optimizado';
      } else if (score >= 60) {
        label = 'Bueno';
        description = 'Tu título es bueno pero puede mejorar';
      } else if (score >= 40) {
        label = 'Regular';
        description = 'Hay varias áreas de mejora';
      }

      // Default suggestions if none
      if (suggestions.length === 0) {
        suggestions.push('¡Tu título está muy bien optimizado! 🎉');
      }

      setResults({
        score,
        analysis,
        suggestions,
        powerWords: foundPowerWords,
        label,
        description
      });

      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  const getScoreColor = () => {
    if (results.score >= 80) return 'text-green-500';
    if (results.score >= 60) return 'text-yellow-500';
    if (results.score >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreStroke = () => {
    if (results.score >= 80) return '#10B981';
    if (results.score >= 60) return '#F59E0B';
    if (results.score >= 40) return '#F97316';
    return '#EF4444';
  };

  const charStatus = getCharacterStatus();

  return (
    <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-electric-blue to-bright-orange text-white p-8 text-center">
        <h1 className="font-black text-3xl md:text-4xl mb-3 flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8" />
          Analizador de Títulos SEO
        </h1>
        <p className="text-lg font-medium text-white/90">
          Optimiza tus títulos para maximizar CTR y rankings en Google
        </p>
      </div>

      {/* Body */}
      <div className="p-8 space-y-8">
        {/* Input Section */}
        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe o pega tu título aquí..."
            className="text-xl p-6 text-center font-medium"
            maxLength={100}
          />
          
          <div className="flex justify-between items-center">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${charStatus.bg} ${charStatus.color}`}>
              {title.length} / 60 caracteres
            </span>
            <span className="text-sm text-muted-foreground">
              Óptimo: 50-60 caracteres
            </span>
          </div>
        </div>

        {/* SERP Preview */}
        <div className="bg-secondary/30 p-6 rounded-2xl">
          <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
            📱 Vista previa en Google
          </h3>
          <div className="bg-background p-4 rounded-xl border border-border">
            <a 
              href="#" 
              className="text-blue-600 text-lg hover:underline block truncate"
              style={{ maxWidth: '100%' }}
            >
              {title || 'Tu título aparecerá aquí...'}
            </a>
            <div className="text-green-600 text-sm">
              www.tusitio.com › blog › articulo
            </div>
          </div>
        </div>

        {/* Analyze Button */}
        <Button
          onClick={analyzeTitle}
          disabled={isAnalyzing}
          className="w-full py-4 text-xl font-bold bg-gradient-to-r from-electric-blue to-bright-orange hover:opacity-90 transition-all hover:-translate-y-1"
          size="lg"
        >
          {isAnalyzing ? (
            <>Analizando título...</>
          ) : (
            <>
              <Search className="mr-2 h-6 w-6" />
              Analizar Título 🔍
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Score Display */}
            <div className="text-center bg-secondary/30 p-8 rounded-2xl">
              <div className="relative inline-block mb-6">
                <svg width="150" height="150" className="transform -rotate-90">
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    fill="none"
                    stroke={getScoreStroke()}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={408}
                    strokeDashoffset={408 - (results.score / 100) * 408}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl font-black ${getScoreColor()}`}>
                    {results.score}
                  </span>
                </div>
              </div>
              <div className="font-bold text-xl text-foreground mb-2">
                {results.label}
              </div>
              <div className="text-muted-foreground">
                {results.description}
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="space-y-4">
              {results.analysis.map((item, index) => {
                const IconComponent = item.icon;
                const colorClass = item.type === 'success' ? 'text-green-500 bg-green-100' :
                                 item.type === 'warning' ? 'text-yellow-500 bg-yellow-100' :
                                 'text-red-500 bg-red-100';
                
                return (
                  <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border">
                    <div className={`p-3 rounded-full ${colorClass}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Suggestions */}
            <div className="bg-electric-blue/10 border border-electric-blue/20 p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-electric-blue mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Sugerencias de Optimización
              </h3>
              <ul className="space-y-3">
                {results.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <span className="text-electric-blue font-bold mt-0.5">→</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Power Words */}
            {results.powerWords.length > 0 && (
              <div className="bg-secondary/30 p-6 rounded-2xl">
                <h4 className="font-bold text-lg text-foreground mb-4">
                  🔥 Palabras de Poder Detectadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {results.powerWords.map((word, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-electric-blue to-bright-orange text-white rounded-full text-sm font-medium"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Examples */}
        <div className="bg-secondary/30 p-6 rounded-2xl">
          <h4 className="font-bold text-lg text-foreground mb-4">
            Prueba estos ejemplos:
          </h4>
          <div className="flex flex-wrap gap-3">
            {examples.map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setTitle(example)}
                className="hover:border-electric-blue hover:text-electric-blue"
              >
                {example.split(':')[0]}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAnalyzer;