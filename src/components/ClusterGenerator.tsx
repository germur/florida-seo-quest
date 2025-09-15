import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Download, FileText, Map, Lightbulb, Loader2 } from "lucide-react";

const ClusterGenerator = () => {
  const [mainTopic, setMainTopic] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("marketing");
  const [subtopicCount, setSubtopicCount] = useState("8");
  const [contentDepth, setContentDepth] = useState("intermediate");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [clusterData, setClusterData] = useState({
    totalPages: 0,
    totalLinks: 0,
    contentHours: 0,
    authorityScore: 0,
    subtopics: []
  });

  const industries = [
    { id: "tecnologia", name: "Tecnología" },
    { id: "marketing", name: "Marketing" },
    { id: "salud", name: "Salud" },
    { id: "finanzas", name: "Finanzas" },
    { id: "educacion", name: "Educación" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "otros", name: "Otros" }
  ];

  const clusterTemplates = {
    marketing: {
      subtopics: [
        'estrategia de contenidos', 'email marketing', 'redes sociales',
        'SEO y SEM', 'marketing automation', 'analítica web',
        'branding', 'marketing de influencers', 'growth hacking',
        'publicidad digital', 'conversión y CRO', 'marketing viral'
      ],
      contentTypes: ['guía', 'tutorial', 'caso estudio', 'herramientas', 'estrategia', 'tips']
    },
    tecnologia: {
      subtopics: [
        'desarrollo web', 'inteligencia artificial', 'cloud computing',
        'ciberseguridad', 'blockchain', 'IoT', 'machine learning',
        'DevOps', 'bases de datos', 'APIs', 'microservicios', 'edge computing'
      ],
      contentTypes: ['tutorial', 'documentación', 'comparativa', 'guía', 'mejores prácticas']
    },
    salud: {
      subtopics: [
        'nutrición', 'ejercicio físico', 'salud mental', 'prevención',
        'tratamientos', 'medicina alternativa', 'wellness', 'diagnóstico',
        'pediatría', 'geriatría', 'enfermedades crónicas', 'primeros auxilios'
      ],
      contentTypes: ['guía', 'consejos', 'investigación', 'prevención', 'tratamiento']
    },
    finanzas: {
      subtopics: [
        'inversiones', 'ahorro personal', 'criptomonedas', 'impuestos',
        'créditos', 'seguros', 'planificación financiera', 'trading',
        'fintech', 'banca digital', 'educación financiera', 'retiro'
      ],
      contentTypes: ['guía', 'calculadora', 'análisis', 'estrategia', 'tutorial']
    },
    educacion: {
      subtopics: [
        'metodologías', 'e-learning', 'evaluación', 'tecnología educativa',
        'gamificación', 'educación especial', 'formación docente',
        'recursos didácticos', 'educación STEM', 'habilidades blandas',
        'educación continua', 'certificaciones'
      ],
      contentTypes: ['curso', 'recurso', 'metodología', 'guía', 'evaluación']
    },
    ecommerce: {
      subtopics: [
        'optimización conversión', 'logística', 'pagos online', 'UX/UI',
        'marketplaces', 'dropshipping', 'inventario', 'atención cliente',
        'email transaccional', 'retargeting', 'reviews', 'fulfillment'
      ],
      contentTypes: ['guía', 'checklist', 'caso estudio', 'herramienta', 'estrategia']
    },
    otros: {
      subtopics: [
        'estrategia digital', 'transformación empresarial', 'innovación',
        'productividad', 'liderazgo', 'comunicación', 'ventas',
        'customer experience', 'sostenibilidad', 'compliance',
        'recursos humanos', 'operaciones'
      ],
      contentTypes: ['guía', 'framework', 'metodología', 'caso estudio', 'herramientas']
    }
  };

  const generateCluster = async () => {
    if (!mainTopic.trim()) {
      alert('Por favor, ingresa un tema principal');
      return;
    }

    setIsLoading(true);

    // Simular generación con delay
    setTimeout(() => {
      const count = parseInt(subtopicCount);
      const template = clusterTemplates[selectedIndustry] || clusterTemplates.marketing;
      const selectedSubtopics = template.subtopics.slice(0, count);

      const totalPages = count * 3 + 1;
      const totalLinks = count * 4;
      const contentHours = totalPages * 3;
      const authorityScore = Math.min(95, count * 8);

      setClusterData({
        totalPages,
        totalLinks,
        contentHours,
        authorityScore,
        subtopics: selectedSubtopics
      });

      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const getContentByDepth = (topic: string) => {
    if (contentDepth === 'beginner') {
      return [
        `Introducción a ${topic}`,
        `${topic} para principiantes`,
        `Errores comunes en ${topic}`
      ];
    } else if (contentDepth === 'intermediate') {
      return [
        `Guía completa de ${topic}`,
        `Mejores prácticas de ${topic}`,
        `Herramientas para ${topic}`,
        `Casos de éxito en ${topic}`
      ];
    } else {
      return [
        `Estrategias avanzadas de ${topic}`,
        `${topic}: Análisis profundo`,
        `Innovaciones en ${topic}`,
        `ROI y métricas de ${topic}`,
        `Futuro de ${topic}`
      ];
    }
  };

  const exportContentPlan = () => {
    const template = clusterTemplates[selectedIndustry] || clusterTemplates.marketing;
    const count = parseInt(subtopicCount);
    
    let content = `PLAN DE CONTENIDO - CLUSTER TEMÁTICO\n`;
    content += `=====================================\n\n`;
    content += `Tema Principal: ${mainTopic}\n`;
    content += `Número de Subtemas: ${count}\n`;
    content += `Fecha: ${new Date().toLocaleDateString()}\n\n`;
    
    content += `ESTRUCTURA:\n`;
    content += `-----------\n`;
    content += `1. Página Pilar: ${mainTopic} (5000+ palabras)\n`;
    content += `   - Publicar primero\n`;
    content += `   - Optimizar para keyword principal\n\n`;
    
    clusterData.subtopics.forEach((topic, index) => {
      content += `${index + 2}. Subtema: ${topic}\n`;
      content += `   - 3 artículos de 2000+ palabras\n`;
      content += `   - Enlazar a página pilar\n`;
      content += `   - Keywords long-tail\n\n`;
    });
    
    content += `\nTOTAL: ${clusterData.totalPages} páginas de contenido\n`;
    content += `TIEMPO ESTIMADO: ${clusterData.contentHours} horas de producción\n`;
    content += `\nGenerado con Generador de Clusters Temáticos - Calvo Creativo`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cluster_${mainTopic.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Control Panel */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-2xl mb-4">
              <Target className="h-8 w-8 text-electric-blue" />
            </div>
            <h2 className="font-black text-2xl text-foreground mb-2">
              Configuración del Cluster
            </h2>
            <p className="font-body text-muted-foreground">
              Define los parámetros para generar tu cluster temático
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="font-semibold text-foreground">
                Tema Principal (Pillar Page)
              </label>
              <Input
                value={mainTopic}
                onChange={(e) => setMainTopic(e.target.value)}
                placeholder="ej: Marketing Digital"
                className="text-base"
              />
            </div>

            <div className="space-y-3">
              <label className="font-semibold text-foreground">
                Industria o Nicho
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry.id}
                    variant={selectedIndustry === industry.id ? "default" : "outline"}
                    size="sm"
                    className={`${
                      selectedIndustry === industry.id
                        ? "bg-electric-blue hover:bg-electric-blue/90 text-white"
                        : "hover:border-electric-blue hover:-translate-y-0.5 transition-all"
                    }`}
                    onClick={() => setSelectedIndustry(industry.id)}
                  >
                    {industry.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-semibold text-foreground">
                Número de Subtemas
              </label>
              <Select value={subtopicCount} onValueChange={setSubtopicCount}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">6 subtemas (Básico)</SelectItem>
                  <SelectItem value="8">8 subtemas (Recomendado)</SelectItem>
                  <SelectItem value="10">10 subtemas (Completo)</SelectItem>
                  <SelectItem value="12">12 subtemas (Avanzado)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="font-semibold text-foreground">
                Profundidad del Contenido
              </label>
              <Select value={contentDepth} onValueChange={setContentDepth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Principiante</SelectItem>
                  <SelectItem value="intermediate">Intermedio</SelectItem>
                  <SelectItem value="advanced">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generateCluster}
              disabled={isLoading}
              className="w-full py-4 text-lg font-bold bg-gradient-to-r from-electric-blue to-bright-orange hover:opacity-90 transition-all hover:-translate-y-1"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generando cluster...
                </>
              ) : (
                <>
                  <Target className="mr-2 h-5 w-5" />
                  Generar Cluster Temático 🚀
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Visualization Panel */}
        {showResults && (
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-black text-2xl text-foreground mb-6 text-center">
              Tu Cluster Temático
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-secondary/30 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  {clusterData.totalPages}
                </div>
                <div className="text-sm text-muted-foreground">Páginas Totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  {clusterData.totalLinks}
                </div>
                <div className="text-sm text-muted-foreground">Enlaces Internos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  {clusterData.contentHours}h
                </div>
                <div className="text-sm text-muted-foreground">Horas de Contenido</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  {clusterData.authorityScore}%
                </div>
                <div className="text-sm text-muted-foreground">Score Autoridad</div>
              </div>
            </div>

            {/* Cluster Visualization */}
            <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl p-8 mb-8 min-h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-electric-blue to-bright-orange rounded-full flex items-center justify-center text-white font-bold text-center text-lg shadow-lg">
                  {mainTopic}
                </div>
              </div>
              
              {/* Subtopic nodes positioned around */}
              {clusterData.subtopics.slice(0, 6).map((topic, index) => {
                const angle = (index * 60) - 90; // Start from top, 60 degrees apart
                const radian = (angle * Math.PI) / 180;
                const radius = 140;
                const x = 50 + (radius * Math.cos(radian)) / 3.2; // Convert to percentage
                const y = 50 + (radius * Math.sin(radian)) / 3.2;
                
                return (
                  <div
                    key={index}
                    className="absolute w-20 h-20 bg-white border-2 border-electric-blue/30 rounded-xl flex items-center justify-center text-xs font-medium text-center p-2 shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {topic}
                  </div>
                );
              })}
            </div>

            {/* Export Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={exportContentPlan}
                variant="outline"
                className="flex-1 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
              >
                <FileText className="mr-2 h-4 w-4" />
                Exportar Plan
              </Button>
              <Button
                onClick={() => alert('Mapa Mental generado! (Funcionalidad en desarrollo)')}
                variant="outline"
                className="flex-1 border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white"
              >
                <Map className="mr-2 h-4 w-4" />
                Mapa Mental
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Content List */}
      {showResults && (
        <div className="mt-12 bg-secondary/30 rounded-3xl p-8">
          <h3 className="font-bold text-xl text-foreground mb-6 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-electric-blue" />
            Estructura de Contenido Detallada
          </h3>

          <div className="space-y-6">
            {/* Pillar Page */}
            <div className="bg-card border border-border rounded-2xl p-6 border-l-4 border-l-electric-blue">
              <div className="font-bold text-lg text-electric-blue mb-4">
                📌 Página Pilar: {mainTopic}
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-electric-blue text-white rounded text-xs font-bold">
                    PILAR
                  </span>
                  <span>Guía definitiva de {mainTopic} (5000+ palabras)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-bright-orange text-white rounded text-xs font-bold">
                    SEO
                  </span>
                  <span>Keyword principal: "{mainTopic}" + variaciones</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-neutral-gray text-white rounded text-xs font-bold">
                    ESTRUCTURA
                  </span>
                  <span>Tabla de contenidos + Enlaces a todos los subtemas</span>
                </li>
              </ul>
            </div>

            {/* Subtopics */}
            {clusterData.subtopics.map((topic, index) => {
              const contents = getContentByDepth(topic);
              const template = clusterTemplates[selectedIndustry] || clusterTemplates.marketing;
              
              return (
                <div key={index} className="bg-card border border-border rounded-2xl p-6">
                  <div className="font-bold text-lg text-foreground mb-4">
                    🔗 Cluster {index + 1}: {topic}
                  </div>
                  <ul className="space-y-3 text-sm">
                    {contents.slice(0, 3).map((content, i) => {
                      const type = template.contentTypes[i % template.contentTypes.length].toUpperCase();
                      return (
                        <li key={i} className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-xs font-bold">
                            {type}
                          </span>
                          <span>{content}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClusterGenerator;