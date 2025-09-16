import Header from "@/components/Header";
import ProcessSection from "@/components/ProcessSection";
import SEO from "@/components/SEO";

const ComoTrabajamosEs = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        page="howWeWorkEs" 
        customCanonical="/es/como-trabajamos"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Cómo Trabajamos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Nuestro Framework MAES: Una metodología probada que garantiza resultados 
              consistentes y medibles en cada proyecto SEO.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />
    </main>
  );
};

export default ComoTrabajamosEs;