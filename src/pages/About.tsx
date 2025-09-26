// src/pages/About.tsx
import React from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/seo";

/* ================================================
 *  Schemas specific to About
 * ================================================ */
const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about/` },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Murillo",
  url: `${SITE}/about/`,
  image: `${SITE}/og-home.webp`,
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
    src: "/assets/logos/paramount.svg", // add file to remove fallback
    href: "/case-studies/paramount-property-restoration",
  },
  { name: "Edu1st", src: "/assets/logos/edu1st.svg" },
  { name: "Bull Fintech", src: "/assets/logos/bull-fintech.svg" },
  { name: "Sakura Advisors", src: "/assets/logos/sakura-advisors.svg" },
];

const BrandLogo: React.FC<{ brand: Brand; idx: number }> = ({ brand, idx }) => {
  const [error, setError] = React.useState(false);
  return (
    <a
      key={`${brand.name}-${idx}`}
      href={brand.href || "#"}
      target={brand.href ? "_blank" : undefined}
      rel={brand.href ? "noopener noreferrer" : undefined}
      aria-label={brand.name}
      className="cc-card"
    >
      {!error ? (
        <img
          src={brand.src}
          alt={`${brand.name} logo`}
          className="cc-logo"
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-sm text-muted-foreground">{brand.name}</span>
      )}
    </a>
  );
};

/* ================================================
 *  FAQ
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
        mission is to turn your online presence into a pillar of{" "}
        <strong>topical authority</strong>, attracting high-quality organic leads
        and reducing dependence on paid ads for sustainable growth.
      </p>
    ),
  },
  {
    q: "2. How does your approach to SEO differ from traditional agencies?",
    a: (
      <p>
        We use an <strong>AI-driven strategic SEO</strong> approach. We build{" "}
        <strong>semantic architecture</strong> and <strong>content clusters</strong>{" "}
        that position your site as the definitive authority. Combined with{" "}
        <strong>digital storytelling</strong> that truly connects with your
        audience, we prioritize <strong>real case studies</strong> and{" "}
        <strong>measurable results</strong> — not just talk about SEO.
      </p>
    ),
  },
  {
    q: "3. What types of businesses are the best fit for Calvo Creativo's services?",
    a: (
      <p>
        High-ticket service businesses in Florida (contractors, real estate, law
        firms, specialized education/health), <strong>B2B</strong> companies
        expanding beyond local to statewide/national, and <strong>agencies</strong>{" "}
        seeking external SEO expertise. We also help professionals and coaches build
        a formidable <strong>personal brand</strong>.
      </p>
    ),
  },
  {
    q: "4. How do you integrate “digital storytelling” into SEO to benefit my brand?",
    a: (
      <p>
        A product doesn’t change lives if it doesn’t <em>connect</em>. Our{" "}
        <strong>digital storytelling</strong> crafts narratives that resonate with
        your audience and, integrated with a smart <strong>content strategy</strong>,
        drives rankings, engagement, and loyalty — building a truly inspiring brand.
      </p>
    ),
  },
  {
    q: "5. How do you leverage AI and automation in your SEO strategies?",
    a: (
      <p>
        AI is a <strong>catalyst</strong> for efficiency — it doesn’t replace
        strategy. We use AI for <strong>keyword research</strong>, competitive
        scraping, and automated reporting. This lets us scale content with real-time
        data for precise decisions and a <strong>competitive edge</strong>.
      </p>
    ),
  },
  {
    q: "6. What kind of results can I expect, and how do you measure success?",
    a: (
      <p>
        Success means <strong>measurable results</strong>: Top-3 rankings for
        strategic keywords, +200% organic traffic in year one, and 3-5% conversion
        from content. We track with GSC, GA4, and SEO suites, using clear KPIs and
        continuous optimization.
      </p>
    ),
  },
  {
    q: "7. What makes your “7+ years of experience in Florida” so valuable?",
    a: (
      <p>
        Over <strong>7 years</strong> working with Florida companies gives us{" "}
        deep local insight — audience, dynamics, and the{" "}
        <strong>Local SEO Florida</strong> landscape. We implement hyper-relevant
        strategies that win quality leads in a competitive region.
      </p>
    ),
  },
  {
    q: "8. I'm a professional looking to strengthen my online presence. Can you help?",
    a: (
      <p>
        Absolutely. <strong>Personal branding consulting</strong> is a key service:
        we build <strong>personal topical authority</strong> with a strategic
        content roadmap, LinkedIn optimization, and narratives that position your
        expertise as an undeniable reference.
      </p>
    ),
  },
];

/* ================================================
 *  Page
 * ================================================ */
const About: React.FC = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* SEO + specific schemas */}
      <SEO
        page="about"
        additionalSchemas={[
          { schema: personSchema, id: "schema-person" },
          { schema: breadcrumbs, id: "schema-breadcrumbs" },
        ]}
      />

      {/* NAVBAR */}
      <Header />

      {/* HERO (no background image) */}
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
              We combine semantic architecture, data intelligence, and converting
              narratives to create sustainable growth and topical authority.
            </p>

            {/* Primary CTAs */}
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

      {/* WHO WE ARE / VALUE PROP */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                We build authority, not noise
              </h2>
              <p className="text-muted-foreground mb-4">
                We don’t chase “isolated tactics.” We design{" "}
                <strong>semantic architecture</strong> and{" "}
                <strong>content clusters</strong> that position your brand as the
                reference in your niche — from advanced keyword research to
                execution with <strong>storytelling</strong> and UX that converts.
              </p>
              <p className="text-muted-foreground">
                Our <strong>AI-driven</strong> process accelerates research,
                prioritization, and reporting — so strategy impacts the business,
                not just rankings.
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
                      Architecture, clusters, and impact-first prioritization.
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
                      Stories and formats that match intent and context.
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
                      Real-time data, efficiency, and scale without losing judgment.
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

      {/* LOGOS / SOCIAL PROOF – MARQUEE (UNIFORM SIZE + FALLBACK) */}
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
                  <BrandLogo brand={b} idx={idx} key={`${b.name}-${idx}`} />
                ))}
              </div>
            </div>
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

      {/* FINAL CTA */}
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
  );
};

export default About;
