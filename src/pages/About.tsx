import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE, schemaConfigs } from "@/lib/seo";
import { BarChart, Shield, Users, Search, List, Rocket, TrendingUp } from "lucide-react";

const About: React.FC = () => {
  const canonical = `${SITE}/about`;
  const title = "About Calvo Creativo — AI-Driven SEO Strategy for Florida Businesses";
  const description =
    "Meet the team behind Florida's premier SEO agency. Our AI-driven strategies and proven MAES method deliver 200-400% organic growth for businesses across Florida.";

  const breadcrumbsSchema = schemaConfigs.breadcrumbs([
    { name: "Home", item: `${SITE}/` },
    { name: "About", item: canonical },
  ]);

  // Organization schema (E-E-A-T)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Calvo Creativo",
    url: `${SITE}/about`,
    logo: `${SITE}/calvo_creartivo_logo.svg`,
    founder: {
      "@type": "Person",
      name: "Roger Murillo",
      jobTitle: "SEO Strategist & Consultant"
    },
    sameAs: [
      "https://x.com/Rogermu47429637",
      "https://www.linkedin.com/in/rogermurillo/",
    ],
    areaServed: "Florida, United States",
    serviceArea: {
      "@type": "State",
      name: "Florida"
    }
  };

  return (
    <>
      <SEO
        page="about"
        customTitle={title}
        customDescription={description}
        customCanonical={canonical}
        additionalSchemas={[
          { schema: breadcrumbsSchema, id: "breadcrumbs-schema" },
          { schema: organizationSchema, id: "organization-schema" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section with Background */}
        <section 
          className="relative flex min-h-[60vh] items-end bg-cover bg-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('/og-home.jpg')`
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                AI-Driven SEO Strategy for Florida Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/90">
                We leverage cutting-edge AI to craft bespoke SEO strategies, ensuring your business ranks higher and attracts more customers. Our micro-proof KPIs guarantee measurable results.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Calvo Creativo */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Why Choose Calvo Creativo?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Your trusted partner in navigating the digital landscape.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BarChart size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold">Data-Driven Results</h3>
                <p className="mt-2 text-base text-muted-foreground">We make decisions based on data, not guesswork, to ensure optimal performance.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold">Proven Expertise</h3>
                <p className="mt-2 text-base text-muted-foreground">Our team consists of industry veterans with a track record of success.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold">Client-Centric Approach</h3>
                <p className="mt-2 text-base text-muted-foreground">We succeed when you succeed. Your goals are our top priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Story</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Founded by Roger Murillo, a seasoned SEO strategist with over 7 years of experience, Calvo Creativo was born out of a passion for helping Florida businesses thrive online. Roger's deep understanding of AI-driven SEO strategies and commitment to ethical practices have driven the agency's success.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Starting as an in-house SEO specialist fixing crawling issues and thin content, the turning point came when building semantic maps and programmatic pages for multi-city services. Today, we combine technical SEO, AI automation, and UX writing to deliver predictable growth for our clients.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <img 
                  alt="Roger Murillo, Founder of Calvo Creativo" 
                  className="rounded-xl shadow-lg w-full" 
                  src="/og-home.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The MAES Method */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The MAES Method</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A four-step process for sustainable growth.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl p-6">
                <div className="text-primary mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold">Market Research</h3>
                <p className="mt-2 text-base text-muted-foreground">In-depth analysis of your industry, competitors, and target audience.</p>
              </div>
              <div className="rounded-xl p-6">
                <div className="text-primary mb-4">
                  <List size={32} />
                </div>
                <h3 className="text-xl font-bold">Architecture</h3>
                <p className="mt-2 text-base text-muted-foreground">Crafting a robust website structure and content strategy for optimal search engine visibility.</p>
              </div>
              <div className="rounded-xl p-6">
                <div className="text-primary mb-4">
                  <Rocket size={32} />
                </div>
                <h3 className="text-xl font-bold">Execution</h3>
                <p className="mt-2 text-base text-muted-foreground">Implementing proven SEO techniques, including on-page optimization and link building.</p>
              </div>
              <div className="rounded-xl p-6">
                <div className="text-primary mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold">Scaling</h3>
                <p className="mt-2 text-base text-muted-foreground">Continuous monitoring and refinement to maximize your long-term SEO performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Florida's Finest */}
        <section className="bg-secondary/20 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Trusted by Florida's Finest</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We're proud to have partnered with a diverse range of businesses.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield size={24} className="text-primary" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart size={24} className="text-primary" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Search size={24} className="text-primary" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Rocket size={24} className="text-primary" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center bg-card p-8 rounded-lg border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            </div>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="rounded-xl border border-border p-8 shadow-sm bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users size={24} className="text-primary" />
                </div>
                <blockquote className="text-lg font-medium">
                  <p>"Calvo Creativo transformed our online presence. We've seen a significant increase in organic traffic and leads."</p>
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">— Home Services Company</div>
              </div>
              <div className="rounded-xl border border-border p-8 shadow-sm bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart size={24} className="text-primary" />
                </div>
                <blockquote className="text-lg font-medium">
                  <p>"Their strategic approach and attention to detail are unmatched. Highly recommend!"</p>
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">— B2B Services</div>
              </div>
              <div className="rounded-xl border border-border p-8 shadow-sm bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield size={24} className="text-primary" />
                </div>
                <blockquote className="text-lg font-medium">
                  <p>"Roger and his team are true SEO experts. They delivered exceptional results for our business."</p>
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">— SMB Founder</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Elevate CTA */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Elevate Your Online Presence?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Schedule a free consultation and discover how Calvo Creativo can help your business achieve its SEO goals.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get a Free SEO Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <div className="mt-12 space-y-4">
                <details className="group rounded-lg border border-border bg-card p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    What is SEO?
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-muted-foreground">
                    Search Engine Optimization (SEO) is the process of improving your website's visibility in search engine results pages (SERPs). This involves optimizing various elements of your website, such as content, structure, and technical aspects, to rank higher for relevant keywords and attract more organic traffic.
                  </p>
                </details>
                <details className="group rounded-lg border border-border bg-card p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    How long does it take to see results?
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-muted-foreground">
                    SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 4-6 months. The exact timeline depends on factors like your industry's competitiveness, your website's current state, and the scope of our engagement.
                  </p>
                </details>
                <details className="group rounded-lg border border-border bg-card p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    What's included in your SEO services?
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-muted-foreground">
                    Our comprehensive SEO services include a full technical audit, keyword research, on-page optimization, content strategy, quality link building, and regular performance reporting. We tailor each package to your specific needs.
                  </p>
                </details>
                <details className="group rounded-lg border border-border bg-card p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    How do you measure success?
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-muted-foreground">
                    We focus on key performance indicators (KPIs) that matter to your business, such as organic traffic growth, keyword ranking improvements, conversion rate, and ultimately, return on investment (ROI).
                  </p>
                </details>
                <details className="group rounded-lg border border-border bg-card p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    What industries do you specialize in?
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-muted-foreground">
                    We have extensive experience working with businesses in various sectors across Florida, including tourism, real estate, professional services, and e-commerce. Our strategies are adaptable to any industry.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;