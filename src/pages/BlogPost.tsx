import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Calendar, List, User, Eye, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SocialShare from "@/components/SocialShare";
import RelatedArticles from "@/components/RelatedArticles";
import { useEffect } from "react";

// SEO Article Images
import voicePredictionsVsReality from "@/assets/voice-search-predictions-vs-reality-2025.webp";
import hypeCycleVisualSearch from "@/assets/digital-marketing-hype-cycle-visual-search.webp";
import seoStrategyPuzzle from "@/assets/seo-strategy-puzzle-pieces.webp";
import hypeDataRealityLoop from "@/assets/hype-data-reality-loop.webp";
import voiceSearchLocalUsage from "@/assets/voice-search-local-seo-usage.webp";
import visualSearchConsumerAdoption from "@/assets/visual-search-consumer-adoption.webp";
import aeoFadingSnippetData from "@/assets/aeo-fading-snippet-data.webp";
import googleRuleTimeline from "@/assets/google-rule-timeline-solve-intent.webp";

const BlogPost = () => {
  const { slug } = useParams();

  // This would normally come from a CMS or API
  const posts = {
    "wordpress-affordable-solution-or-anchor": {
      title: "WordPress: Affordable Solution or Anchor of Problems?",
      date: "2025-01-20",
      readTime: "10 min",
      category: "Web Development",
      tags: ["WordPress", "Web Development", "Performance", "CMS", "Maintenance"],
      metaTitle: "WordPress: Affordable Solution or Anchor of Problems? | Calvo Creativo",
      metaDescription: "WordPress powers 40% of websites, but is it really the ideal solution? A critical analysis of hidden costs, maintenance burdens, and performance issues.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "WordPress: Affordable Solution or Anchor of Problems?",
        "description": "WordPress powers 40% of websites, but is it really the ideal solution? A critical analysis of hidden costs, maintenance burdens, and performance issues.",
        "author": {
          "@type": "Person",
          "name": "Calvo Creativo",
          "url": "https://calvocreativo.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Calvo Creativo",
          "logo": {
            "@type": "ImageObject",
            "url": "https://calvocreativo.com/logo.png"
          }
        },
        "datePublished": "2025-01-20",
        "dateModified": "2025-01-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://calvocreativo.com/blog/wordpress-affordable-solution-or-anchor"
        },
        "articleSection": "Web Development",
        "keywords": ["WordPress", "CMS", "Web Development", "Performance", "Website Maintenance"]
      },
      content: `
        <div class="table-of-contents bg-gradient-to-br from-purple/5 to-purple/10 border border-purple/20 rounded-2xl p-8 mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-purple/10 rounded-lg">
              <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-primary mb-0">Table of Contents</h2>
          </div>
          <nav class="space-y-2">
            <a href="#introduction" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Introduction
            </a>
            <a href="#constant-maintenance" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Constant Maintenance and Frequent Updates
            </a>
            <a href="#plugin-dependency" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Plugin Dependency and Hidden Licensing Costs
            </a>
            <a href="#performance-problems" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Performance and Loading Speed Problems
            </a>
            <a href="#page-builders" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Divi and Elementor: Magic Solution or Headache?
            </a>
            <a href="#scalability-difficulties" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Scalability Difficulties
            </a>
            <a href="#seo-issues" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Lack of Best Practices and SEO Issues
            </a>
            <a href="#bad-practices" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              "Smoke Sellers" and Industry Bad Practices
            </a>
            <a href="#conclusion" class="flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors p-2 rounded-lg hover:bg-purple/5">
              <span class="w-2 h-2 bg-purple/30 rounded-full"></span>
              Conclusion
            </a>
          </nav>
        </div>

        <section id="introduction">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-purple/10 rounded-lg">
              <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            Introduction
          </h2>
          <p class="text-lg leading-relaxed mb-6">WordPress is, without a doubt, one of the most popular platforms for building websites. It is estimated to power more than <strong class="text-purple">40% of all sites on the Internet</strong>, and its reputation as a free and easy-to-use tool convinces many entrepreneurs with limited budgets that it is the best option for any project. The common narrative presents WordPress as the ideal solution for those who need a website that is inexpensive and quick to launch.</p>
          
          <p class="text-lg leading-relaxed mb-8">However, is WordPress really the panacea it promises to be? In practice, many experienced professionals have discovered that, far from being a smooth path, WordPress often generates more conflicts and problems than solutions when not managed properly. Below, we explore why in many cases WordPress can become an obstacle to scaling a digital project, and how its popularity has given rise to bad practices and empty promises in the web development industry.</p>
        </section>

        <section id="constant-maintenance">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-orange/10 rounded-lg">
              <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            Constant Maintenance and Frequent Updates
          </h2>
          <p class="text-lg leading-relaxed mb-6">One of the first disadvantages faced by WordPress users is the ongoing maintenance it requires. Unlike a fully custom-built website that may remain more static, a WordPress site demands regular attention. WordPress does not maintain itself: it is necessary to update the system core, themes, and plugins regularly, and even review content periodically. If these tasks are not performed, problems soon begin to appear.</p>
          
          <p class="leading-relaxed mb-6">Every new version of WordPress or any plugin can introduce incompatibilities that break existing features. Skipping updates "for convenience" is not an option: it risks accumulating security vulnerabilities or serious errors over time.</p>
          
          <p class="leading-relaxed mb-8">Moreover, the updates themselves can create conflicts. It is advisable to make backups before updating and check compatibility of each new version with the rest of the site's ecosystem. Many users learn this the hard way: after a major update, certain parts of the website stop working, or the dreaded "white screen" appears.</p>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">⚠️ Reality Check</p>
                <p class="mb-0"><strong>In practical terms, owning a WordPress site is like owning a car that constantly needs to go to the shop:</strong> there is always a plugin asking for an update, or a warning in the dashboard like a check-engine light. Ignoring those "lights" and skipping maintenance is driving straight toward a breakdown.</p>
              </div>
            </div>
          </div>

          <p class="leading-relaxed mb-6">All this maintenance consumes time and resources that the entrepreneur could otherwise dedicate to growing their business instead of dealing with technical issues.</p>
          
          <div class="bg-muted/30 border border-border rounded-xl p-6 my-8">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-primary mb-2">Developer's Experience</p>
                <p class="italic mb-0">"WordPress released a new version that auto-installed on many sites I manage… suddenly, websites started crashing with fatal errors one after another" — requiring emergency intervention on each.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Continuing with the rest of the sections... -->
      `
    },
    "seo-no-murio-hype-estrategia": {
      title: "SEO Didn't Die: From Hype to the Strategy That Actually Works",
      date: "2025-01-15",
      readTime: "12 min",
      category: "SEO Strategy",
      tags: ["SEO", "Voice Search", "Visual Search", "AEO", "Digital Marketing"],
      metaTitle: "SEO Didn't Die: From Hype to the Strategy That Actually Works | Calvo Creativo",
      metaDescription: "Critical analysis of digital marketing trends: voice, visual and AEO. Discover why real SEO remains what Google has wanted for 20 years and avoid falling for marketing hype.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "SEO Didn't Die: From Hype to the Strategy That Actually Works",
        "description": "Critical analysis of digital marketing trends: voice, visual and AEO. Discover why real SEO remains what Google has wanted for 20 years.",
        "author": {
          "@type": "Person",
          "name": "Calvo Creativo",
          "url": "https://calvocreativo.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Calvo Creativo",
          "logo": {
            "@type": "ImageObject",
            "url": "https://calvocreativo.com/logo.png"
          }
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://calvocreativo.com/blog/seo-no-murio-hype-estrategia"
        },
        "articleSection": "SEO Strategy",
        "keywords": ["SEO", "Digital Marketing", "Voice Search", "Visual Search", "AEO", "Marketing Strategy"]
      },
      content: `
        <div class="table-of-contents bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border border-electric-blue/20 rounded-2xl p-8 mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-electric-blue/10 rounded-lg">
              <svg class="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-primary mb-0">Table of Contents</h2>
          </div>
          <nav class="space-y-2">
            <a href="#when-hype-dressed-up" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              When Hype Dressed Up as the Future
            </a>
            <a href="#how-hype-is-manufactured" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              How Hype Is Manufactured (and Why We Believe It)
            </a>
            <a href="#acronyms-that-sell-smoke" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Acronyms That Sell Smoke: AEO and Friends
            </a>
            <a href="#viral-predictions-vs-reality" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Viral Predictions vs. Reality: The Repeated Pattern
            </a>
            <a href="#what-actually-works" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              What Actually Works (and When)
            </a>
            <a href="#google-unchanged-rule" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              The Rule Google Hasn't Changed in 20 Years
            </a>
            <a href="#real-innovation-or-mirage" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Real Innovation or Just Marketing Mirage?
            </a>
            <a href="#voice-big-promises" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Voice: Big Promises, Limited Impact
            </a>
            <a href="#visual-search" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Visual Search: Partial Revolution, Real Opportunity
            </a>
            <a href="#aeo-expensive-revolution" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              AEO: Expensive Revolution or Just a Pretty Label?
            </a>
            <a href="#conclusion" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Conclusion: The SEO That Works in 2025 (and 2030)
            </a>
          </nav>
        </div>

        <section id="when-hype-dressed-up">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            When Hype Dressed Up as the Future
          </h2>
          <p class="text-lg leading-relaxed mb-6">In 2016, Gartner launched a headline that spread like wildfire: <strong class="text-electric-blue">"By 2020, 30% of searches will be screenless."</strong> A year later, ComScore poured more fuel: <strong class="text-electric-blue">"Half of all searches will be voice-based."</strong></p>
          
          <p class="leading-relaxed mb-6">The promise was irresistible. Who wouldn't want to get ahead of the revolution? The media amplified it. Marketing gurus showcased it at conferences as the coming extinction of traditional SEO. And thousands of companies shifted budgets to jump on the wave.</p>

          <div class="mb-8">
            <img src={voicePredictionsVsReality} alt="Graph contrasting Gartner and ComScore voice search predictions vs actual adoption in 2025." class="w-full rounded-xl shadow-lg" />
          </div>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">📌 The painful contrast:</p>
                <p class="mb-2">By 2020, fewer than 20% of users in the U.S. regularly used voice search (DemandSage, 2025).</p>
                <p class="mb-2">And most of them used it for trivial tasks: "Alexa, play music," "Siri, what's the weather today?"</p>
                <p class="mb-0 font-semibold">So… where was the revolution?</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-hype-is-manufactured">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-orange/10 rounded-lg">
              <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            How Hype Is Manufactured (and Why We Believe It)
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">The same thing happened with visual search.</p>
          
          <p class="leading-relaxed mb-6">When Pinterest launched Lens in 2017 and Google followed with Google Lens, headlines were apocalyptic: "The camera will replace words."</p>
          
          <p class="leading-relaxed mb-4">And yes, the numbers were impressive:</p>
          
          <div class="grid gap-4 mb-6">
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Pinterest Lens: over 600M monthly searches (VentureBeat, 2018).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="w-2 h-2 bg-blue rounded-full"></span>
              <span>Google Lens: over 8B monthly searches (Google Ads & Commerce Blog, 2024).</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-6">But behind the shiny figures, reality looked different: most queries were about fashion, décor, or lifestyle (ORR Consulting).</p>
          
          <p class="leading-relaxed mb-8">If you're a lawyer, doctor, or financial consultant, Lens is not your new sales channel.</p>

          <div class="bg-gradient-to-r from-orange/10 to-yellow/10 border-l-4 border-orange p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-orange/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-orange mb-2">💡 Reality</p>
                <p class="mb-0">Hype shines like fireworks: loud, dazzling, but short-lived.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="acronyms-that-sell-smoke">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-purple/10 rounded-lg">
              <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z"></path>
              </svg>
            </div>
            Acronyms That Sell Smoke: AEO and Friends
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Then came AEO (Answer Engine Optimization).</p>
          
          <p class="leading-relaxed mb-6">The name seemed designed to sell consulting packages. "The future of SEO," they called it.</p>
          
          <p class="leading-relaxed mb-6">The thesis: response engines like Alexa or Siri would replace Google, and only those who optimized for AEO would survive.</p>
          
          <div class="grid gap-4 mb-8">
            <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
              <p class="font-semibold text-red mb-2">📊 Reality check:</p>
              <p class="text-sm mb-2">Only 11.84% of global searches display featured snippets (Ahrefs).</p>
              <p class="text-sm mb-0">Nine out of ten searches don't even participate in this supposed "market of the future."</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-purple mb-2">📊 Conclusion</p>
                <p class="mb-0">AEO turned out to be what many suspected: more marketing smoke than technological revolution.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="viral-predictions-vs-reality">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            Viral Predictions vs. Reality: The Repeated Pattern
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">Each of these trends follows the same pattern:</p>

          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
              <span class="w-2 h-2 bg-red rounded-full"></span>
              <span>👉 A prediction with round numbers.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>👉 Viral headlines and premium consulting packages.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <span class="w-2 h-2 bg-yellow rounded-full"></span>
              <span>👉 A far more modest reality.</span>
            </div>
          </div>

          <div class="mb-8">
            <img src={hypeDataRealityLoop} alt="Flat design infographic showing hype vs data vs reality loop in digital marketing." class="w-full rounded-xl shadow-lg" />
          </div>

          <div class="text-center py-8">
            <p class="text-lg text-muted-foreground">SEO seems stuck in an endless déjà vu of unfulfilled promises.</p>
          </div>
        </section>

        <section id="what-actually-works">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-green/10 rounded-lg">
              <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            What Actually Works (and When)
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">Saying that voice or visual "don't work" would be just as irresponsible as the exaggerated predictions.</p>
        
          <div class="grid gap-6 mb-8">
            <div class="p-6 bg-green/5 border border-green/20 rounded-xl">
              <div class="flex items-start gap-4">
                <div class="p-2 bg-green/10 rounded-lg mt-1">
                  <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-green mb-2">Voice does matter</h4>
                  <p class="text-sm mb-0">For local searches ("near me"), accessibility, and quick tasks.</p>
                </div>
              </div>
            </div>

            <div class="p-6 bg-blue/5 border border-blue/20 rounded-xl">
              <div class="flex items-start gap-4">
                <div class="p-2 bg-blue/10 rounded-lg mt-1">
                  <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-blue mb-2">Visual is pure gold</h4>
                  <p class="text-sm mb-0">For e-commerce in fashion, décor, and physical products.</p>
                </div>
              </div>
            </div>

            <div class="p-6 bg-purple/5 border border-purple/20 rounded-xl">
              <div class="flex items-start gap-4">
                <div class="p-2 bg-purple/10 rounded-lg mt-1">
                  <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-purple mb-2">AEO, though limited</h4>
                  <p class="text-sm mb-0">Can be strategic in industries where snippets dominate.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">⚠️ The real problem</p>
                <p class="mb-0">The problem isn't the technology. The problem is selling it as the new gospel when they're really just specific pieces in a much bigger puzzle.</p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <img src={seoStrategyPuzzle} alt="Puzzle pieces infographic illustrating SEO strategy layers: voice, visual, and snippets connected to core SEO." class="w-full rounded-xl shadow-lg" />
          </div>
        </section>

        <section id="google-unchanged-rule">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-teal/10 rounded-lg">
              <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            The Rule Google Hasn't Changed in 20 Years
          </h2>
        
          <div class="bg-gradient-to-br from-teal/10 to-blue/10 border-2 border-teal/20 rounded-2xl p-8 mb-8 text-center">
            <div class="mb-6">
              <div class="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-bold text-primary mb-4">
              At the end of the day, Google still wants the same thing it did 20 years ago: solve what the user is looking for (Google Developers — Search Central).
            </p>
          </div>

          <div class="mb-8">
            <img src={googleRuleTimeline} alt="Timeline infographic from 2000 to 2025 repeating Google's core rule: solve user intent." class="w-full rounded-xl shadow-lg" />
          </div>

          <p class="text-lg leading-relaxed mb-6">SEO is not a set of acronyms that are born and die every season.</p>
        
          <p class="leading-relaxed mb-6">SEO is strategy, architecture, creativity. It's about understanding the intent behind every search.</p>
        
          <p class="leading-relaxed mb-8">The acronyms change. Gurus invent new terms. Conferences need fresh headlines.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">✅ The true constant</p>
                <p class="mb-0">But the discipline remains: <strong>resolve the user's need better than anyone else.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section id="real-innovation-or-mirage">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-yellow/10 rounded-lg">
              <svg class="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            Real Innovation or Just Marketing Mirage?
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">So, what are voice search, visual search, and AEO really? Undervalued innovations we haven't fully tapped? Or mirages built by digital marketing to sell smoke?</p>

          <div class="bg-gradient-to-r from-blue/10 to-purple/10 border-l-4 border-blue p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-blue mb-2">🔍 The answer</p>
                <p class="mb-0">In the following sections, we'll strip them down with data, examples, and analysis. Because what SEO needs today is not more acronyms, <strong>but more truth.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section id="voice-big-promises">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-blue/10 rounded-lg">
              <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            Voice: Big Promises, Limited Impact
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">In 2016, Gartner predicted that by 2020, 30% of searches would be screenless. A year later, ComScore doubled down: "Half of all searches will be voice."</p>
        
          <p class="leading-relaxed mb-6">The headlines were so viral it was impossible not to feel FOMO. Which business would want to be left behind?</p>
        
          <p class="leading-relaxed mb-6">Agencies started selling "Voice SEO packages." Consultants filled conference slides with "The keyboard will die."</p>

          <div class="mb-8">
            <img src={voiceSearchLocalUsage} alt="Isometric infographic highlighting voice search usage in local SEO with real adoption numbers." class="w-full rounded-xl shadow-lg" />
          </div>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">📌 The reality was much more modest:</p>
                <p class="mb-2">By 2020, fewer than 20% of U.S. users used voice search regularly (DemandSage, 2025).</p>
                <p class="mb-0">Most used it for simple tasks: "What's the weather today?", "Play Wendy Sulca," "Call mom."</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">Why voice didn't take off:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <h4 class="font-semibold text-orange mb-2">Context limitations</h4>
              <p class="text-sm mb-0">Talking to your phone isn't always comfortable.</p>
            </div>
          
            <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <h4 class="font-semibold text-yellow mb-2">Privacy concerns</h4>
              <p class="text-sm mb-0">Users distrust "always-on" microphones.</p>
            </div>
          
            <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
              <h4 class="font-semibold text-red mb-2">Complexity</h4>
              <p class="text-sm mb-0">Fine for micro-queries, insufficient for complex processes.</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">Where voice does deliver:</h3>
        
          <div class="bg-gradient-to-r from-teal/10 to-blue/10 border-l-4 border-teal p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-teal mb-2">Local intent:</p>
                <p class="mb-0">"Dentist near me", "Best pizza near me." 58% of U.S. consumers have used voice to find local businesses (DemandSage, 2025). For restaurants, gyms, or hardware stores, optimizing Google Business Profile, reviews, and FAQs is profitable.</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">Voice commerce? Loud noise, weak adoption:</h3>
        
          <div class="grid gap-4 mb-6">
            <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
              <p class="text-sm mb-2">Only 2% of Alexa owners in the U.S. made regular purchases with the device (Forbes).</p>
              <p class="text-sm mb-0">Most purchases were low-risk, repetitive goods (diapers, detergent, pet food).</p>
            </div>
          </div>

          <p class="leading-relaxed mb-8">Nobody buys an $800 TV through Alexa.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">Voice is a layer, not a substitute.</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">The lesson from the voice hype:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <p class="font-semibold text-yellow mb-1">Not everything shiny is a revolution.</p>
            </div>
          
            <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <p class="font-semibold text-orange mb-1">Optimize for local if it makes sense, but don't redesign your SEO around Alexa or Siri.</p>
            </div>
          
            <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
              <p class="font-semibold text-green mb-1">SEO remains SEO: even in voice, the best-structured, most trustworthy content wins.</p>
            </div>
          </div>
        </section>

        <section id="visual-search">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-purple/10 rounded-lg">
              <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            Visual Search: Partial Revolution, Real Opportunity
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">Like voice, visual search was also hyped as the next great disruptor.</p>
        
          <p class="leading-relaxed mb-6">In 2017, Pinterest presented Lens: "Point your camera and buy what you see." Google followed with Google Lens. Headlines screamed: "Visual will change SEO as we know it."</p>

          <h3 class="text-xl font-semibold text-primary mb-4">📊 The numbers:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="w-2 h-2 bg-blue rounded-full"></span>
              <span>Google Lens: 8B+ monthly searches (Google Ads, 2024).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Pinterest Lens: 600M monthly searches (VentureBeat, 2018).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
              <span class="w-2 h-2 bg-green rounded-full"></span>
              <span>74% of consumers say visual search influences purchase decisions (ORR Consulting).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>36% of online shoppers have used visual search (eMarketer).</span>
            </div>
          </div>

          <p class="leading-relaxed mb-6">On paper, it looked like prophecy fulfilled.</p>

          <div class="mb-8">
            <img src={visualSearchConsumerAdoption} alt="Chart showing visual search adoption by consumers in retail, décor, and fashion." class="w-full rounded-xl shadow-lg" />
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">The context that cools the hype:</h3>
        
          <div class="grid gap-6 mb-8">
            <div class="p-6 bg-red/5 border border-red/20 rounded-xl">
              <h4 class="font-semibold text-red mb-2">Concentrated in specific verticals</h4>
              <p class="mb-2">Fashion, décor, lifestyle.</p>
              <p class="text-sm mb-0">Less than 8% of queries outside retail (Gartner).</p>
            </div>

            <div class="p-6 bg-orange/5 border border-orange/20 rounded-xl">
              <h4 class="font-semibold text-orange mb-2">Aspirational, not always transactional</h4>
              <p class="text-sm mb-0">Saving outfits ≠ buying them.</p>
            </div>

            <div class="p-6 bg-yellow/5 border border-yellow/20 rounded-xl">
              <h4 class="font-semibold text-yellow mb-2">Adoption barrier</h4>
              <p class="text-sm mb-0">Fewer than 17% of Google users in the U.S. used Lens monthly in 2022 (eMarketer).</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">Where visual is pure gold:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
              <span class="font-semibold text-green">• Retail & fashion.</span>
            </div>
          
            <div class="p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="font-semibold text-blue">• Home décor.</span>
            </div>
          
            <div class="p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="font-semibold text-purple">• Travel & culture.</span>
            </div>
          </div>

          <p class="leading-relaxed mb-6">For e-commerce in these niches, ignoring visual search means losing qualified traffic.</p>
        
          <p class="leading-relaxed mb-8">But for B2B, SaaS, or complex services, text still rules.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">👉 Visual isn't a replacement. It's an accelerator in specific contexts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="aeo-expensive-revolution">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            AEO: Expensive Revolution or Just a Pretty Label?
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">In 2018, a new buzzword hit SEO conferences: AEO — Answer Engine Optimization.</p>
        
          <p class="leading-relaxed mb-6">The pitch: "SEO is dead. Only those optimized for Alexa, Siri, and Google Assistant will survive."</p>
        
          <p class="leading-relaxed mb-8">Fear spread fast. Agencies sold exclusive "AEO packages." Startups raised funding.</p>

          <div class="mb-8">
            <img src={aeoFadingSnippetData} alt="Infographic of AEO (Answer Engine Optimization) fading over time with limited snippet data." class="w-full rounded-xl shadow-lg" />
          </div>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">📊 But the data deflated the hype:</p>
                <div class="grid gap-2">
                  <p class="text-sm mb-0">• Only 11.84% of searches have snippets (Ahrefs).</p>
                  <p class="text-sm mb-0">• Most snippets appear in simple informational queries.</p>
                  <p class="text-sm mb-0">• 70%+ of snippets generate no clicks — users get the answer directly on Google.</p>
                </div>
              </div>
            </div>
          </div>

          <p class="leading-relaxed mb-8">The single-answer illusion: Great for theory. Useless for complex queries (insurance, health, B2B).</p>

          <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-purple mb-2">📌 The real fuel of AEO wasn't results — it was fear.</p>
              </div>
            </div>
          </div>

          <p class="leading-relaxed mb-8">Snippets are useful. But they're just a bonus, not a revolution.</p>
        </section>

        <section id="conclusion">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-green/10 rounded-lg">
              <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            Conclusion: The SEO That Works in 2025 (and 2030)
          </h2>
        
          <p class="text-lg leading-relaxed mb-6">Over the last decade, we've seen acronyms parade:</p>
        
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
              <span class="w-2 h-2 bg-red rounded-full"></span>
              <span>VEO (Voice).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>VSEO (Visual).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <span class="w-2 h-2 bg-yellow rounded-full"></span>
              <span>AEO.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>And tomorrow, there will be more.</span>
            </div>
          </div>
        
          <p class="leading-relaxed mb-8">The narrative is always the same: "SEO is dead, everything has changed."</p>
          
          <div class="mb-8">
            <img src={hypeCycleVisualSearch} alt="Infographic showing the digital marketing hype cycle with visual search as a partial revolution." class="w-full rounded-xl shadow-lg" />
          </div>
          
          <p class="leading-relaxed mb-8">But the data, failures, and mirages show otherwise: 👉 SEO never died. 👉 It evolved, adapted, but its essence remained: solving real user needs.</p>

          <h3 class="text-xl font-semibold text-primary mb-4">Why do we fall for hype?</h3>
        
          <p class="leading-relaxed mb-8">Because smoke sells easier than hard work. "We need 6 months of solid strategy" doesn't excite clients. "There's a revolution — get on board today or die" opens wallets.</p>

          <h3 class="text-xl font-semibold text-primary mb-4">The only thing Google always wants: Answers.</h3>
        
          <div class="bg-gradient-to-br from-green/10 to-teal/10 border-2 border-green/20 rounded-2xl p-8 mb-8 text-center">
            <p class="text-2xl font-bold text-primary mb-4">
              Whether it's voice, visual, or snippets — Google rewards clear, structured, trustworthy content that solves intent.
            </p>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-4">The fake funeral pattern:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
              <span class="w-2 h-2 bg-red rounded-full"></span>
              <span>Voice: useful only locally.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>Visual: gold in retail, marginal elsewhere.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <span class="w-2 h-2 bg-yellow rounded-full"></span>
              <span>AEO: snippets sold as revolution.</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-8">All share the same cycle: Exaggeration → Expensive packages → Limited results.</p>

          <h3 class="text-xl font-semibold text-primary mb-4">The brand that ignored the hype (and won):</h3>
        
          <p class="leading-relaxed mb-4">Those who focused on:</p>
        
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
              <span class="w-2 h-2 bg-green rounded-full"></span>
              <span>Understanding their audience.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="w-2 h-2 bg-blue rounded-full"></span>
              <span>Creating truly helpful content.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Building authority.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-teal/5 border border-teal/20 rounded-xl">
              <span class="w-2 h-2 bg-teal rounded-full"></span>
              <span>Solid SEO foundations.</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-8">They grew while others paid for hype.</p>

          <h3 class="text-xl font-semibold text-primary mb-4">The roadmap that actually matters:</h3>
        
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
              <span class="w-2 h-2 bg-green rounded-full"></span>
              <span>Search intent.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="w-2 h-2 bg-blue rounded-full"></span>
              <span>Clear site architecture.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Thematic & brand authority.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-teal/5 border border-teal/20 rounded-xl">
              <span class="w-2 h-2 bg-teal rounded-full"></span>
              <span>Trust (Google E-E-A-T).</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-8">Everything else — voice, visual, AEO, or whatever acronym comes tomorrow — are layers. Useful in some contexts, never replacements.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">👉 SEO doesn't die. What dies are the shortcuts sold as revolutions.</p>
              </div>
            </div>
          </div>
        </section>

        <hr class="my-12 border-border">

        <section class="sources">
          <h3 class="flex items-center gap-3 text-2xl font-bold text-primary mb-6">
            <div class="p-2 bg-blue/10 rounded-lg">
              <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            📚 References
          </h3>
          <div class="grid gap-4">
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Google Ads & Commerce Blog — Shashi Thakur (2024)</h4>
                <p class="text-sm mb-0">Google Lens and AI Overviews: New ways for marketers</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">DemandSage: Voice Search Statistics 2025</h4>
                <p class="text-sm mb-0">Comprehensive voice search adoption data</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Search Engine Land — Danny Goodwin (2024)</h4>
                <p class="text-sm mb-0">Nearly 60% of Google searches end without a click</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Content Marketing Institute — Robert Rose (2025)</h4>
                <p class="text-sm mb-0">Answer Engine Optimization Is a Familiar Trap</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Additional Research Sources</h4>
                <p class="text-sm mb-0">TechCrunch, VentureBeat, Backlinko, ORR Consulting, Stephan Spencer</p>
              </div>
            </div>
          </div>
        </section>
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="min-h-screen pt-16">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="py-6 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                <span className="text-primary font-medium">{post.title}</span>
              </li>
            </ol>
          </div>
        </div>
      </nav>
      
      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <nav className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </nav>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="flex items-center gap-1 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-lg"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-primary prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share */}
            <div className="mt-12">
              <SocialShare 
                url={`https://calvocreativo.com/blog/${slug}`}
                title={post.title}
                description={post.metaDescription}
              />
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <RelatedArticles 
                currentSlug={slug!}
                currentCategory={post.category}
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-electric-blue/5 to-bright-orange/5 border border-border rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Did you like this article?
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover how to apply these strategies to your business with a personalized consultation.
              </p>
              <Button size="lg" className="mr-4" asChild>
                <a href="tel:+573046807443">
                  Schedule your consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">
                  View more articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;