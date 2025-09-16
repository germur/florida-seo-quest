import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogSection = () => {
  const { language, getLocalizedPath } = useLanguage();
  
  const posts = language === 'es' ? [
    {
      id: "wordpress-solucion-asequible-o-ancla",
      title: "WordPress: ¿Solución Asequible o Ancla de Problemas?",
      date: "20 Ene, 2025",
      readTime: "10 min lectura",
      excerpt: "WordPress alimenta el 40% de sitios web, pero ¿es realmente la solución ideal? Un análisis crítico de costos ocultos, cargas de mantenimiento y problemas de rendimiento.",
      color: "from-bright-orange/10 to-transparent"
    },
    {
      id: "seo-no-murio-hype-estrategia",
      title: "SEO No Murió: Del Hype a la Estrategia que Funciona",
      date: "15 Ene, 2025", 
      readTime: "12 min lectura",
      excerpt: "Análisis crítico de tendencias de marketing digital: búsqueda por voz, visual y AEO. Por qué el SEO real sigue siendo lo que Google ha querido durante 20 años.",
      color: "from-electric-blue/10 to-transparent"
    }
  ] : [
    {
      id: "wordpress-affordable-solution-or-anchor",
      title: "WordPress: Affordable Solution or Anchor of Problems?",
      date: "Jan 20, 2025",
      readTime: "10 min read",
      excerpt: "WordPress powers 40% of websites, but is it really the ideal solution? A critical analysis of hidden costs, maintenance burdens, and performance issues.",
      color: "from-bright-orange/10 to-transparent"
    },
    {
      id: "seo-no-murio-hype-estrategia",
      title: "SEO Didn't Die: From Hype to Strategy That Actually Works",
      date: "Jan 15, 2025", 
      readTime: "12 min read",
      excerpt: "Critical analysis of digital marketing trends: voice, visual and AEO. Why real SEO remains what Google has wanted for 20 years.",
      color: "from-electric-blue/10 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            {language === 'es' ? 'Aprende SEO e IA en Acción' : 'Learn SEO & AI in Action'}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {posts.map((post, index) => (
              <Link key={index} to={getLocalizedPath(`/blog/${post.id}`)} className="block">
                <article 
                  className={`bg-gradient-to-br ${post.color} bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                >
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-electric-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-electric-blue font-medium group-hover:text-bright-orange transition-colors">
                    {language === 'es' ? 'Leer Artículo' : 'Read Article'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to={getLocalizedPath('/blog')}>
                {language === 'es' ? 'Visitar el Blog' : 'Visit the Blog'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;