import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, User, Tag, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import RelatedArticles from "@/components/RelatedArticles";

const BlogPostEs = () => {
  const { slug } = useParams();
  
  const blogPosts = {
    'wordpress-solucion-asequible-o-ancla': {
      title: "WordPress: ¿Solución Asequible o Ancla de Problemas?",
      excerpt: "Análisis crítico sobre las ventajas y desventajas de WordPress para proyectos empresariales",
      author: "Roger Murillo",
      date: "2024-03-15",
      readTime: "8 min lectura",
      category: "Desarrollo Web",
      tags: ["WordPress", "CMS", "Desarrollo Web", "SEO"],
      image: "/src/assets/wordpress-analysis.jpg",
      content: `
        <h2>La Popularidad de WordPress: Números que Impresionan</h2>
        <p>WordPress alimenta más del 40% de todos los sitios web en internet. Esta estadística impresionante ha convertido a la plataforma en sinónimo de desarrollo web accessible. Pero, ¿realmente es la mejor opción para todos los proyectos?</p>
        
        <h2>Las Ventajas Innegables</h2>
        
        <h3>1. Facilidad de Uso</h3>
        <p>WordPress democratizó la creación de sitios web. Su interfaz intuitiva permite que usuarios sin conocimientos técnicos puedan:</p>
        <ul>
          <li>Crear y editar contenido fácilmente</li>
          <li>Instalar themes y plugins con un clic</li>
          <li>Gestionar múltiples usuarios y permisos</li>
          <li>Programar publicaciones automáticas</li>
        </ul>
        
        <h3>2. Ecosistema Extenso</h3>
        <p>Con más de 58,000 plugins gratuitos y miles de themes, WordPress ofrece soluciones para prácticamente cualquier necesidad:</p>
        <ul>
          <li><strong>SEO:</strong> Yoast, RankMath, All in One SEO</li>
          <li><strong>E-commerce:</strong> WooCommerce, Easy Digital Downloads</li>
          <li><strong>Seguridad:</strong> Wordfence, Sucuri, iThemes Security</li>
          <li><strong>Performance:</strong> W3 Total Cache, WP Rocket</li>
        </ul>
        
        <h2>Los Problemas Ocultos</h2>
        
        <h3>1. Vulnerabilidades de Seguridad</h3>
        <p>La popularidad de WordPress lo convierte en un objetivo atractivo para hackers:</p>
        <ul>
          <li>Más del 90% de los ataques a CMS se dirigen a WordPress</li>
          <li>Plugins desactualizados son la principal puerta de entrada</li>
          <li>Themes de fuentes no confiables pueden contener malware</li>
        </ul>
        
        <h3>2. Problemas de Rendimiento</h3>
        <p>WordPress puede volverse lento por múltiples factores:</p>
        <ul>
          <li>Exceso de plugins activos</li>
          <li>Themes mal optimizados</li>
          <li>Base de datos sobrecargada</li>
          <li>Hosting de baja calidad</li>
        </ul>
        
        <h2>Alternativas Modernas</h2>
        
        <h3>Headless CMS</h3>
        <p>Los CMS sin cabeza como Strapi, Contentful o Sanity ofrecen:</p>
        <ul>
          <li>Mayor flexibilidad en el frontend</li>
          <li>Mejor rendimiento</li>
          <li>Mayor seguridad</li>
          <li>Escalabilidad superior</li>
        </ul>
        
        <h3>Generadores de Sitios Estáticos</h3>
        <p>Tecnologías como Next.js, Gatsby o Nuxt.js proporcionan:</p>
        <ul>
          <li>Velocidad de carga ultrarrápida</li>
          <li>Seguridad inherente</li>
          <li>SEO optimizado por defecto</li>
          <li>Experiencia de desarrollador superior</li>
        </ul>
        
        <h2>¿Cuándo Usar WordPress?</h2>
        
        <p>WordPress sigue siendo una excelente opción cuando:</p>
        <ul>
          <li>El presupuesto es limitado</li>
          <li>Se necesita un sitio funcional rápidamente</li>
          <li>El equipo no tiene conocimientos técnicos avanzados</li>
          <li>Se requiere gestión de contenido por múltiples usuarios</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>WordPress no es intrínsecamente malo, pero tampoco es la solución universal que muchos creen. La decisión debe basarse en:</p>
        <ul>
          <li>Objetivos específicos del proyecto</li>
          <li>Presupuesto disponible</li>
          <li>Capacidades técnicas del equipo</li>
          <li>Requisitos de escalabilidad</li>
        </ul>
        
        <p>En Calvo Creativo, evaluamos cada proyecto individualmente para recomendar la tecnología más apropiada, siempre priorizando el rendimiento, la seguridad y los objetivos de SEO a largo plazo.</p>
      `
    },
    'seo-no-murio-hype-estrategia': {
      title: "SEO No Murió: Del Hype a la Estrategia que Funciona",
      excerpt: "Desmitificando las tendencias del marketing digital y enfocándose en estrategias SEO que realmente generan resultados",
      author: "Roger Murillo",
      date: "2024-02-20", 
      readTime: "12 min lectura",
      category: "SEO Strategy",
      tags: ["SEO", "Marketing Digital", "Estrategia", "Tendencias"],
      image: "/src/assets/seo-strategy-reality.jpg",
      content: `
        <h2>El Ciclo Interminable del Hype en Marketing Digital</h2>
        <p>Cada año aparecen nuevas "revoluciones" en el marketing digital. Voice search, visual search, AI content, NFT marketing... la lista es interminable. Mientras los marketers saltan de tendencia en tendencia, las empresas que realmente crecen están aplicando fundamentos sólidos.</p>
        
        <h2>Por Qué las Predicciones Fallan Sistemáticamente</h2>
        
        <h3>El Problema de las Predicciones Lineales</h3>
        <p>Las predicciones de marketing digital suelen asumir adopción lineal:</p>
        <ul>
          <li><strong>2018:</strong> "50% de búsquedas serán por voz en 2020"</li>
          <li><strong>Realidad 2024:</strong> Voice search representa menos del 8% del total</li>
          <li><strong>2019:</strong> "Visual search dominará el e-commerce"</li>
          <li><strong>Realidad 2024:</strong> Sigue siendo nicho en sectores específicos</li>
        </ul>
        
        <h3>La Brecha Entre Tecnología y Comportamiento</h3>
        <p>La tecnología puede estar lista, pero el comportamiento del usuario cambia lentamente:</p>
        <ul>
          <li>La gente sigue escribiendo en Google, no hablando</li>
          <li>El visual search se usa para productos específicos, no búsquedas generales</li>
          <li>Los chatbots complementan, no reemplazan la búsqueda tradicional</li>
        </ul>
        
        <h2>Los Fundamentos que Nunca Pasan de Moda</h2>
        
        <h3>1. Intención de Búsqueda</h3>
        <p>Entender qué busca realmente el usuario:</p>
        <ul>
          <li><strong>Informacional:</strong> "cómo optimizar SEO"</li>
          <li><strong>Navegacional:</strong> "Google Analytics login"</li>
          <li><strong>Transaccional:</strong> "contratar consultor SEO"</li>
          <li><strong>Comercial:</strong> "mejor herramienta SEO 2024"</li>
        </ul>
        
        <h3>2. Arquitectura de Información</h3>
        <p>Organizar el contenido de manera lógica:</p>
        <ul>
          <li>Estructura de silos temáticos</li>
          <li>Internal linking estratégico</li>
          <li>Jerarquía clara de páginas</li>
          <li>URLs descriptivas y consistentes</li>
        </ul>
        
        <h3>3. Contenido que Resuelve Problemas Reales</h3>
        <p>No content for content's sake, sino valor genuino:</p>
        <ul>
          <li>Investigación profunda del tema</li>
          <li>Ejemplos prácticos y casos de uso</li>
          <li>Actualización regular basada en feedback</li>
          <li>Formato adaptado a la intención de búsqueda</li>
        </ul>
        
        <h2>El Framework MAES: Metodología Probada</h2>
        
        <h3>M - Market Research (Investigación de Mercado)</h3>
        <p>Antes de crear contenido, entendemos:</p>
        <ul>
          <li>¿Quién es tu competencia real?</li>
          <li>¿Qué gaps de contenido existen?</li>
          <li>¿Cuáles son las preguntas sin responder?</li>
          <li>¿Dónde están las oportunidades?</li>
        </ul>
        
        <h3>A - Architecture Planning (Planificación de Arquitectura)</h3>
        <p>Diseñamos la estructura antes de escribir:</p>
        <ul>
          <li>Mapeo de topics clusters</li>
          <li>Definición de pillar pages</li>
          <li>Estrategia de internal linking</li>
          <li>Optimización de crawlability</li>
        </ul>
        
        <h3>E - Execution Strategy (Estrategia de Ejecución)</h3>
        <p>Implementamos con metodología:</p>
        <ul>
          <li>Content calendar basado en prioridades</li>
          <li>Optimización técnica paralela</li>
          <li>Link building selectivo y relevante</li>
          <li>Monitoreo de métricas específicas</li>
        </ul>
        
        <h3>S - Scaling & Optimization (Escalado y Optimización)</h3>
        <p>Crecemos basado en datos:</p>
        <ul>
          <li>Identificación de contenido top performer</li>
          <li>Expansión a subtopics relacionados</li>
          <li>Optimization de pages existentes</li>
          <li>Automatización de procesos repetitivos</li>
        </ul>
        
        <h2>Casos Reales: Cuando la Estrategia Supera al Hype</h2>
        
        <h3>Caso 1: E-commerce vs Visual Search</h3>
        <p>Cliente: Tienda online de muebles en Miami</p>
        <ul>
          <li><strong>Hype approach:</strong> Invertir en visual search tools</li>
          <li><strong>Nuestra estrategia:</strong> Optimizar para "muebles [estilo] [ciudad]"</li>
          <li><strong>Resultado:</strong> +340% tráfico orgánico en 8 meses</li>
        </ul>
        
        <h3>Caso 2: Local Business vs AI Content</h3>
        <p>Cliente: Bufete legal en Orlando</p>
        <ul>
          <li><strong>Hype approach:</strong> Generar contenido masivo con AI</li>
          <li><strong>Nuestra estrategia:</strong> Content hiperreleante para casos locales</li>
          <li><strong>Resultado:</strong> +250% leads calificados</li>
        </ul>
        
        <h2>Cómo Mantenerse Relevante Sin Caer en el Hype</h2>
        
        <h3>1. Adopción Gradual</h3>
        <ul>
          <li>Prueba nuevas tecnologías en small scale</li>
          <li>Mide resultados vs esfuerzo invertido</li>
          <li>Integra solo lo que demuestre ROI claro</li>
        </ul>
        
        <h3>2. Focus en Métricas de Negocio</h3>
        <ul>
          <li>Leads calificados > vanity metrics</li>
          <li>Revenue attribution > clicks</li>
          <li>Customer lifetime value > conversions únicas</li>
        </ul>
        
        <h3>3. Educación Continua Selectiva</h3>
        <ul>
          <li>Fuentes confiables vs noise de LinkedIn</li>
          <li>Case studies reales vs theoretical frameworks</li>
          <li>Implementación práctica vs endless research</li>
        </ul>
        
        <h2>Conclusión: El SEO Que Funciona en 2024</h2>
        
        <p>El SEO efectivo en 2024 no se trata de perseguir las últimas tendencias, sino de:</p>
        
        <ol>
          <li><strong>Entender profundamente a tu audiencia</strong> - Sus problemas reales, no los que crees que tienen</li>
          <li><strong>Crear arquitecturas de información sólidas</strong> - Que soporten crecimiento a largo plazo</li>
          <li><strong>Producir contenido genuinamente útil</strong> - Que resuelva problemas específicos</li>
          <li><strong>Medir lo que importa</strong> - Revenue y business impact, no solo rankings</li>
          <li><strong>Optimizar continuamente</strong> - Basado en data, no en corazonadas</li>
        </ol>
        
        <p>En Calvo Creativo, hemos visto cómo esta aproximación consistente supera cualquier táctica de moda. Mientras otros persiguen el próximo shiny object, nosotros construimos fundamentos que generan resultados sostenibles.</p>
        
        <p>¿Listo para una estrategia SEO que realmente funcione? Hablemos sobre tu proyecto específico.</p>
      `
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];
  
  if (!currentPost) {
    return <Navigate to="/es/blog" replace />;
  }

  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="blog" 
        customTitle={`${currentPost.title} | Blog Calvo Creativo`}
        customDescription={currentPost.excerpt}
        customCanonical={`https://calvocreativo.com/es/blog/${slug}`}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/es/blog" 
              className="inline-flex items-center text-teal hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al Blog
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-sm font-medium">
                  {currentPost.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(currentPost.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {currentPost.readTime}
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                {currentPost.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {currentPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-electric-blue rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{currentPost.author}</div>
                    <div className="text-sm text-muted-foreground">Consultor SEO Florida</div>
                  </div>
                </div>
                
                <SocialShare 
                  title={currentPost.title}
                  url={`https://calvocreativo.com/es/blog/${slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-primary 
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-muted-foreground prose-li:mb-2
                prose-ol:text-muted-foreground
                prose-strong:text-primary prose-strong:font-semibold
                prose-a:text-teal prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-teal prose-blockquote:bg-teal/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
              "
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Etiquetas:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentPost.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-secondary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            ¿Te Gustó Este Artículo?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Recibe más insights como este directamente en tu email. Estrategias probadas, sin hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:rogermur1990@gmail.com?subject=Consulta sobre Estrategia SEO">
                Hablar sobre Tu Proyecto
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/es/blog">Ver Más Artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentSlug={slug || ''} />
    </main>
  );
};

export default BlogPostEs;