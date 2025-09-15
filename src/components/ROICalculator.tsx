import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calculator, Download, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ROICalculator = () => {
  const [keyword, setKeyword] = useState("");
  const [searchVolume, setSearchVolume] = useState(5000);
  const [selectedPosition, setSelectedPosition] = useState(1);
  const [selectedCTR, setSelectedCTR] = useState(28.5);
  const [conversionRate, setConversionRate] = useState(2);
  const [customerValue, setCustomerValue] = useState(500);
  const [seoInvestment, setSeoInvestment] = useState(1500);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    estimatedTraffic: 0,
    conversions: 0,
    revenue: 0,
    roi: 0,
    profit: 0
  });

  const positions = [
    { position: 1, ctr: 28.5, label: "Top 1" },
    { position: 2, ctr: 15.7, label: "Top 2" },
    { position: 3, ctr: 11.0, label: "Top 3" },
    { position: 4, ctr: 8.0, label: "Top 4" },
    { position: 5, ctr: 7.2, label: "Top 5" },
  ];

  const calculateROI = () => {
    const estimatedTraffic = Math.round(searchVolume * (selectedCTR / 100));
    const conversions = Math.round(estimatedTraffic * (conversionRate / 100));
    const revenue = conversions * customerValue;
    const profit = revenue - seoInvestment;
    const roi = seoInvestment > 0 ? ((profit / seoInvestment) * 100) : 0;

    setResults({
      estimatedTraffic,
      conversions,
      revenue,
      roi,
      profit
    });

    setShowResults(true);
  };

  const getROIAnalysis = () => {
    const { roi, revenue, estimatedTraffic, conversions } = results;
    let analysis = [];

    if (roi > 200) {
      analysis.push("🎯 ROI Excelente: Tu inversión en SEO está generando resultados excepcionales.");
    } else if (roi > 100) {
      analysis.push("✅ ROI Positivo: Estás obteniendo buenas ganancias de tu inversión SEO.");
    } else if (roi > 0) {
      analysis.push("📊 ROI Moderado: Hay margen de mejora. Considera optimizar conversiones.");
    } else {
      analysis.push("⚠️ ROI Negativo: Revisa tu estrategia de keywords y conversión.");
    }

    analysis.push(`💰 Valor equivalente en Google Ads: Este tráfico costaría aproximadamente $${(estimatedTraffic * 2.5).toLocaleString()}/mes en publicidad paga.`);
    analysis.push(`📈 Proyección anual: Ingresos potenciales de $${(revenue * 12).toLocaleString()} con una inversión de $${(seoInvestment * 12).toLocaleString()}.`);

    if (conversions < 10) {
      analysis.push("💡 Tip: Con pocas conversiones, enfócate en keywords de cola larga con mayor intención de compra.");
    }

    return analysis;
  };

  const exportResults = () => {
    const data = {
      keyword,
      traffic: results.estimatedTraffic.toLocaleString(),
      conversions: results.conversions.toLocaleString(),
      revenue: `$${results.revenue.toLocaleString()}`,
      roi: `${results.roi.toFixed(0)}%`,
      timestamp: new Date().toLocaleString()
    };

    let content = `REPORTE ROI SEO\n`;
    content += `================\n\n`;
    content += `Fecha: ${data.timestamp}\n`;
    content += `Palabra Clave: ${data.keyword}\n\n`;
    content += `RESULTADOS:\n`;
    content += `- Tráfico Estimado: ${data.traffic} visitas/mes\n`;
    content += `- Conversiones: ${data.conversions}/mes\n`;
    content += `- Ingresos: ${data.revenue}/mes\n`;
    content += `- ROI: ${data.roi}\n\n`;
    content += `Generado con Calculadora ROI SEO - Calvo Creativo`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ROI_SEO_${keyword.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getROIPosition = () => {
    return Math.min(Math.max((results.roi + 100) / 4, 0), 100);
  };

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-electric-blue to-bright-orange text-white p-8 text-center">
          <h1 className="font-black text-3xl md:text-4xl mb-3 flex items-center justify-center gap-3">
            <Calculator className="h-8 w-8" />
            Calculadora ROI de SEO
          </h1>
          <p className="text-lg font-medium text-white/90">
            Descubre el valor real de tu inversión en SEO y proyecta tus ganancias
          </p>
        </div>

        {/* Calculator Body */}
        <div className="p-8 space-y-8">
          {/* Keyword Input */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Palabra clave objetivo
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>La palabra clave principal que quieres posicionar</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="ej: agencia marketing digital"
              className="text-base"
            />
          </div>

          {/* Search Volume */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Volumen de búsqueda mensual
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Número de búsquedas mensuales de tu keyword</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={searchVolume}
                onChange={(e) => setSearchVolume(Number(e.target.value))}
                placeholder="ej: 5000"
                className="text-base pr-32"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                búsquedas/mes
              </span>
            </div>
          </div>

          {/* Position Selector */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Posición objetivo en Google
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>La posición que esperas alcanzar</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {positions.map((pos) => (
                <Button
                  key={pos.position}
                  variant={selectedPosition === pos.position ? "default" : "outline"}
                  className={`font-semibold ${selectedPosition === pos.position 
                    ? "bg-electric-blue hover:bg-electric-blue/90 text-white" 
                    : "hover:border-electric-blue hover:-translate-y-1 transition-all"
                  }`}
                  onClick={() => {
                    setSelectedPosition(pos.position);
                    setSelectedCTR(pos.ctr);
                  }}
                >
                  {pos.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Tasa de conversión estimada (%)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Porcentaje de visitantes que se convierten en clientes</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                step="0.1"
                min="0.1"
                max="10"
                className="text-base pr-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                %
              </span>
            </div>
            <div className="px-2">
              <Slider
                value={[conversionRate]}
                onValueChange={([value]) => setConversionRate(value)}
                max={10}
                min={0.1}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          {/* Customer Value */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Valor promedio por cliente ($)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cuánto vale cada cliente para tu negocio</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                placeholder="ej: 500"
                className="text-base pr-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                $
              </span>
            </div>
          </div>

          {/* SEO Investment */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Inversión mensual en SEO ($)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cuánto inviertes mensualmente en SEO</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={seoInvestment}
                onChange={(e) => setSeoInvestment(Number(e.target.value))}
                placeholder="ej: 1500"
                className="text-base pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                $/mes
              </span>
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateROI}
            className="w-full py-4 text-lg font-bold bg-gradient-to-r from-electric-blue to-bright-orange hover:opacity-90 transition-all hover:-translate-y-1"
            size="lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calcular ROI 📊
          </Button>

          {/* Results */}
          {showResults && (
            <div className="mt-12 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-foreground text-center">
                📈 Resultados de tu Inversión SEO
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Tráfico Estimado/Mes</div>
                  <div className="text-2xl font-bold text-foreground">
                    {results.estimatedTraffic.toLocaleString()}
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Conversiones/Mes</div>
                  <div className="text-2xl font-bold text-foreground">
                    {results.conversions.toLocaleString()}
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Ingresos/Mes</div>
                  <div className="text-2xl font-bold text-electric-blue">
                    ${results.revenue.toLocaleString()}
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">ROI</div>
                  <div className="text-2xl font-bold text-electric-blue">
                    {results.roi.toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* ROI Meter */}
              <div className="bg-secondary/30 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Calidad del ROI</h3>
                <div className="relative h-10 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-1 h-8 bg-black rounded-full transition-all duration-500"
                    style={{ left: `${getROIPosition()}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>Bajo</span>
                  <span>Medio</span>
                  <span>Excelente</span>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-secondary/30 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4">💡 Análisis Detallado</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {getROIAnalysis().map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Export Button */}
              <div className="text-center">
                <Button
                  onClick={exportResults}
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  📥 Exportar Reporte PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ROICalculator;