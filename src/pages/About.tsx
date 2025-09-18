// src/pages/About.tsx
import React from "react";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/seo";

/* ================================================
 *  Schemas específicos de About
 * ================================================ */
// Breadcrumbs para About
const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about/` },
  ],
};

// Person (local, porque schemaConfigs.person no existe en tu seo.ts)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Murillo",
  url: `${SITE}/about/`,
  image: `${SITE}/og-home.jpg`,
  jobTitle: "SEO Strategist & Consultant",
  worksFor: { "@type": "Organization", name: "Calvo Creativo" },
  sameAs: [
    "https://x.com/Rogermu47429637",
    "https://linkedin.com/in/rogermurillo",
  ],
};

/* ================================================
 *  Logos / Social proof
 * ================================================ */
type Brand = { name: string; src: string; href?: string };

const brands: Brand[] = [
  { name: "Craft", src: "/assets/logos/craftd.svg" },
  { name: "Le gramme", src: "/assets/logos/le-gramme.svg" },
  { name: "Flo Car Rental", src: "/assets/logos/flo-car-rental.svg" },
  { name: "Puff Cleaning", src: "/assets/logos/puff-cleaning.svg" },
  {
    name: "Paramount Property Restoration",
    src: "/assets/logos/paramount.svg", // súbelo cuando lo tengas
    href: "/case-studies/paramount-property-restoration",
  },
  { name: "Eduf1st", src: "/assets/logos/edu1st.svg" },
  { name: "Bull Fintech", src: "/assets/logos/bull-fintech.svg" },
  { name: "Sakura Advisors", src: "/assets/logos/sakura-advisors.svg" },
];

/* ================================================
 *  FAQ (las que enviaste)
 * ================================================ */
type FAQ = { q: string; a: JSX.Element };

const faqs: FAQ[] = [
  {
    q: "1. What is Calvo Creativo and what do you specialize in?",
    a: (
      <p>
        At Calvo Creativo, we specialize in <strong>strategic SEO</strong>,{" "}
        <strong>digital storytelling</strong>, and <strong>growth hacking</strong>{" "}
        for ambitious American businesses, particularly those in Florida. Our core
        mission is to transform your online presence into a robust pillar of{" "}
        <strong>topical authority</strong>, helping you attract high-quality
        organic leads and reduce dependence on paid ads for sustainable growth.
      </p>
    ),
  },
  {
    q: "2. How does your approach to SEO differ from traditional agencies?",
    a: (
      <p>
        We employ an <strong>AI-driven strategic SEO</strong> approach. We build{" "}
        <strong>semantic architecture</strong> y <strong>content clusters</strong>{" "}
        to establish your site as a definitive authority. Combinamos esto con{" "}
        <strong>digital storytelling</strong> que conecta con tu audiencia y
        priorizamos <strong>casos reales y resultados medibles</strong> — no solo
        “hablar de SEO”.
      </p>
    ),
  },
  {
    q: "3. What types of businesses are the best fit for Calvo Creativo's services?",
    a: (
      <p>
        High-ticket services en Florida (contratistas, real estate, law firms,
        educación/salud especializados), <strong>B2B</strong> que quieren escalar
        más allá de lo local y <strong>agencias</strong> que buscan expertise SEO
        externo. También potenciamos <strong>personal branding</strong> para
        profesionales y coaches.
      </p>
    ),
  },
  {
    q: "4. How do you integrate “digital storytelling” into SEO to benefit my brand?",
    a: (
      <p>
        Un producto no cambia vidas si no <em>conecta</em>. Nuestro{" "}
        <strong>digital storytelling</strong> crea narrativas que resuenan con tu
        audiencia y, integradas a una <strong>content strategy</strong> inteligente,
        elevan rankings, engagement y lealtad — construyendo una marca inspiradora.
      </p>
    ),
  },
  {
    q: "5. How do you leverage AI and automation in your SEO strategies?",
    a: (
      <p>
        La IA es un <strong>catalizador</strong> para eficiencia — no reemplaza la
        estrategia. Usamos IA para <strong>keyword research</strong>,
        scraping competitivo y reporting automatizado. Escalamos contenido con datos
        en tiempo real para decisiones precisas y <strong>ventaja competitiva</strong>.
      </p>
    ),
  },
  {
    q: "6. What kind of results can I expect, and how do you measure success?",
    a: (
      <p>
        Éxito = <strong>resultados medibles</strong>: Top-3 para keywords clave,
        +200% de tráfico orgánico en el primer año y 3-5% de conversión desde
        contenido. Medimos con GSC, GA4 y suites SEO, con KPIs claros y optimización
        continua.
      </p>
    ),
  },
  {
    q: "7. What makes your “7+ years of experience in Florida” so valuable?",
    a: (
      <p>
        Más de <strong>7 años</strong> operando con empresas en Florida nos dan{" "}
        conocimiento local profundo: audiencia, dinámicas y el paisaje de{" "}
        <strong>Local SEO Florida</strong>. Implementamos estrategias hiper-relevantes
        que generan leads de calidad en un entorno competitivo.
      </p>
    ),
  },
  {
    q: "8. Can you help with personal branding?",
    a: (
      <p>
        ¡Sí! El <strong>personal branding consulting</strong> es clave: construimos{" "}
        <strong>autoridad personal</strong> con roadmap estratégico de contenido,
        optimización de LinkedIn y narrativas que posicionan tu expertise como
        referencia innegable.
      </p>
    ),
  },
];

/* ================================================
 *  Página
 * ================================================ */
const About: React.FC = () => {
  return (
    <>
      {/* SEO base + schemas específicos */}
      <SEO
        page="about"
        additionalSchemas={[
          { schema: personSchema, id: "schema-person" },
          { schema: breadcrumbs, id: "schema-breadcrumbs" },
        ]}
      />

      <main className="min-h-screen">
        {/* HERO — sin imagen de fondo, consistente con el resto */}
        <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
                About Calvo Creativo
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Strategic SEO, Digital Storytelling &amp; AI-driven growth — built
                for Florida businesses ready to scale with authority.
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Combinamos arquitectura semántica, inteligencia de datos y narrativas
                que convierten para crear crecimiento sostenible y autoridad temática.
              </p>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+573046807443"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-electric-blue text-electric-blue-foreground hover:bg-electric-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-11 rounded-md px-8"
                >
                  Book Consultation
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-8"
                  href="/case-studies"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS / PROPUESTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  We build authority, not noise
                </h2>
                <p className="text-muted-foreground mb-4">
                  No perseguimos “tácticas sueltas”. Diseñamos{" "}
                  <strong>arquitectura semántica</strong> y <strong>content clusters</strong>{" "}
                  que posicionan tu marca como referencia: del{" "}
                  <em>keyword research</em> avanzado a la ejecución con{" "}
                  <strong>storytelling</strong> y UX que convierte.
                </p>
                <p className="text-muted-foreground">
                  Nuestro enfoque <strong>AI-driven</strong> acelera investigación,
                  priorización y reporting — para que la estrategia impacte al negocio,
                  no solo al ranking.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white text-xs font-bold">
                      1
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Strategic SEO
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Arquitectura, clusters y priorización basada en impacto.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white text-xs font-bold">
                      2
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Digital Storytelling
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Historias y formatos que conectan con intención y contexto.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white text-xs font-bold">
                      3
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        AI &amp; Automation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Datos en tiempo real, eficiencia y escalabilidad sin perder
                        criterio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 h-10 px-4 py-2 w-full"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS / SOCIAL PROOF – MARQUEE (TAMAÑO UNIFORME) */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-primary">
                  Trusted by Florida brands
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Selected collaborations and projects
                </p>
              </div>

              <style>{`
                @keyframes cc-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .cc-marquee {
                  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .cc-track {
                  display: flex;
                  gap: 1.5rem;
                  width: max-content;
                  animation: cc-scroll 28s linear infinite;
                }
                .cc-marquee:hover .cc-track { animation-play-state: paused; }
                .cc-card {
                  min-width: 200px;
                  height: 120px;
                  padding: 1.25rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 0.75rem;
                  border: 1px solid hsl(var(--border));
                  background: hsl(var(--card));
                  transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease;
                }
                @media (min-width: 768px) {
                  .cc-card { min-width: 220px; height: 130px; }
                }
                .cc-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,.08); transform: translateY(-2px); }
                .cc-logo {
                  height: 56px;
                  width: auto;
                  object-fit: contain;
                  opacity: .9;
                  filter: grayscale(1);
                  transition: opacity .2s ease, filter .2s ease, transform .2s ease;
                }
                @media (min-width: 768px) {
                  .cc-logo { height: 64px; }
                }
                .cc-card:hover .cc-logo { opacity: 1; filter: grayscale(0); transform: scale(1.02); }
              `}</style>

              <div className="relative overflow-hidden cc-marquee">
                <div className="cc-track">
                  {[...brands, ...brands].map((b, idx) => (
                    <a
                      key={`${b.name}-${idx}`}
                      href={b.href || "#"}
                      target={b.href ? "_blank" : undefined}
                      rel={b.href ? "noopener noreferrer" : undefined}
                      aria-label={b.name}
                      className="cc-card"
                    >
                      <img
                        src={b.src}
                        alt={`${b.name} logo`}
                        className="cc-logo"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS (placeholder) */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                What clients say
              </h2>
              <p className="text-muted-foreground">
                Próximamente agregaremos testimonios reales y verificados. Si quieres
                incluir logos con cita, los montamos aquí.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 text-left"
                >
                  <div className="text-sm text-muted-foreground italic">
                    “Calvo Creativo nos ayudó a estructurar el SEO con claridad
                    estratégica y foco en resultados. Flujo de leads en aumento.”
                  </div>
                  <div className="mt-4 text-sm font-semibold text-primary">
                    Client Name
                  </div>
                  <div className="text-xs text-muted-foreground">Role, Company</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-card border border-border rounded-xl p-5"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-primary pr-4">
                        {item.q}
                      </h3>
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 text-sm text-muted-foreground">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-neutral-gray text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Grow with Strategic SEO?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let’s align your content, architecture, and storytelling to win
              consistently in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+573046807443"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
              >
                Schedule Free Consultation
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent hover:text-primary-foreground transition-all duration-200 h-11 rounded-md px-8 border-white/30 text-white hover:bg-white/10"
                href="/services"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
