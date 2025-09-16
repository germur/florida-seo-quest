import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import SEO from "@/components/SEO";

const BlogEs = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        page="blogEs" 
        customCanonical="/es/blog"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Blog SEO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Estrategias, tendencias y conocimientos de SEO basados en experiencia real 
              con empresas de Florida. Contenido actualizado y actionable.
            </p>
          </div>
        </div>
      </section>

      <BlogSection />
    </main>
  );
};

export default BlogEs;