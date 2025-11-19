'use client';

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
    const analysis = [];

    if (roi > 200) {
      analysis.push("🎯 Excellent ROI: Your SEO investment is generating exceptional results.");
    } else if (roi > 100) {
      analysis.push("✅ Positive ROI: You're getting good returns from your SEO investment.");
    } else if (roi > 0) {
      analysis.push("📊 Moderate ROI: There's room for improvement. Consider optimizing conversions.");
    } else {
      analysis.push("⚠️ Negative ROI: Review your keyword strategy and conversion optimization.");
    }

    analysis.push(`💰 Google Ads equivalent value: This traffic would cost approximately $${(estimatedTraffic * 2.5).toLocaleString()}/month in paid advertising.`);
    analysis.push(`📈 Annual projection: Potential revenue of $${(revenue * 12).toLocaleString()} with an investment of $${(seoInvestment * 12).toLocaleString()}.`);

    if (conversions < 10) {
      analysis.push("💡 Tip: With few conversions, focus on long-tail keywords with higher purchase intent.");
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
            SEO ROI Calculator
          </h1>
          <p className="text-lg font-medium text-white/90">
            Discover the real value of your SEO investment and project your earnings
          </p>
        </div>

        {/* Calculator Body */}
        <div className="p-8 space-y-8">
          {/* Keyword Input */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Target Keyword
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The main keyword you want to rank for</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g: digital marketing agency"
              className="text-base"
            />
          </div>

          {/* Search Volume */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Monthly Search Volume
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Monthly search volume for your keyword</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={searchVolume}
                onChange={(e) => setSearchVolume(Number(e.target.value))}
                placeholder="e.g: 5000"
                className="text-base pr-32"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                searches/month
              </span>
            </div>
          </div>

          {/* Position Selector */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-foreground">
              Target Google Position
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The position you expect to achieve</p>
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
              Estimated Conversion Rate (%)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Percentage of visitors who convert to customers</p>
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
              Average Customer Value ($)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>How much each customer is worth to your business</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                placeholder="e.g: 500"
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
              Monthly SEO Investment ($)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>How much you invest monthly in SEO</p>
                </TooltipContent>
              </Tooltip>
            </label>
            <div className="relative">
              <Input
                type="number"
                value={seoInvestment}
                onChange={(e) => setSeoInvestment(Number(e.target.value))}
                placeholder="e.g: 1500"
                className="text-base pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                $/month
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
            Calculate ROI 📊
          </Button>

          {/* Results */}
          {showResults && (
            <div className="mt-12 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black text-foreground text-center">
                📈 Your SEO Investment Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Estimated Traffic/Month</div>
                  <div className="text-2xl font-bold text-foreground">
                    {results.estimatedTraffic.toLocaleString()}
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Conversions/Month</div>
                  <div className="text-2xl font-bold text-foreground">
                    {results.conversions.toLocaleString()}
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-2xl text-center">
                  <div className="text-sm text-muted-foreground mb-2">Revenue/Month</div>
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
                <h3 className="text-lg font-bold text-foreground mb-4">ROI Quality</h3>
                <div className="relative h-10 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-1 h-8 bg-black rounded-full transition-all duration-500"
                    style={{ left: `${getROIPosition()}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>Excellent</span>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-secondary/30 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4">💡 Detailed Analysis</h3>
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
                  📥 Export PDF Report
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