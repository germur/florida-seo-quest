import Header from "@/components/Header";
import CaseStudies from "@/components/CaseStudies";
import SEO from "@/components/SEO";

const CasosDeExitoEs = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        page="caseStudiesEs" 
        customCanonical="/es/casos-de-exito"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Resultados reales de empresas de Florida que confiaron en nuestras estrategias SEO. 
              Aumentos comprobados en tráfico, rankings y conversiones.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />
    </main>
  );
};

export default CasosDeExitoEs;