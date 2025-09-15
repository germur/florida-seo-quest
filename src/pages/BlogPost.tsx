import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Calendar, List, User, Eye, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SocialShare from "@/components/SocialShare";
import RelatedArticles from "@/components/RelatedArticles";
import { useEffect } from "react";

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

        <section id="plugin-dependency">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-electric-blue/10 rounded-lg">
              <svg class="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            Plugin Dependency and Hidden Licensing Costs
          </h2>
          <p class="text-lg leading-relaxed mb-6">Another feature of WordPress is that its flexibility comes largely from plugins. The WordPress core provides basic features, but for almost anything extra — contact forms, advanced galleries, online stores, SEO optimization, backups, social media integration, etc. — additional plugins are needed. In the "traditional" WordPress environment you practically live in the <strong class="text-electric-blue">"City of Plugins,"</strong> as there are thousands available, and you end up installing one for every feature you need.</p>
          
          <h3 class="flex items-center gap-2 text-xl font-semibold text-primary mb-4">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            This creates several problems:
          </h3>
          <div class="grid gap-6 mb-8">
            <div class="flex gap-4 p-4 bg-red/5 border-l-4 border-red rounded-r-lg">
              <div class="p-2 bg-red/10 rounded-lg">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-red mb-1">More plugins, more risks</h4>
                <p class="text-sm mb-0">The more active plugins, the greater the risk of conflicts, failures after updates, or simply a slower and heavier website.</p>
              </div>
            </div>
            
            <div class="flex gap-4 p-4 bg-orange/5 border-l-4 border-orange rounded-r-lg">
              <div class="p-2 bg-orange/10 rounded-lg">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-orange mb-1">Variable quality and security risks</h4>
                <p class="text-sm mb-0">Anyone can publish plugins. Some are excellent, but many are poorly coded and unsafe.</p>
              </div>
            </div>
            
            <div class="flex gap-4 p-4 bg-yellow/5 border-l-4 border-yellow rounded-r-lg">
              <div class="p-2 bg-yellow/10 rounded-lg">
                <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-yellow mb-1">License costs</h4>
                <p class="text-sm mb-0">WordPress is free, but many key plugins and themes are paid, with recurring fees.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 rounded-r-lg">
            <p class="font-semibold text-purple mb-2">💰 Hidden Cost Reality</p>
            <p class="mb-0">The sum of these licenses transforms what seemed like an inexpensive solution into a significant long-term expense.</p>
          </div>
        </section>

        <section id="performance-problems">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            Performance and Loading Speed Problems
          </h2>
          <p class="text-lg leading-relaxed mb-6">Website speed is critical today, not only for user experience but also for SEO. Many WordPress sites suffer performance issues because of:</p>
          
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-muted/30 border border-border rounded-xl">
              <div class="p-2 bg-red/10 rounded-lg">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary">Legacy code base</h4>
                <p class="text-sm text-muted-foreground mb-0">Slower than modern static frameworks</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-muted/30 border border-border rounded-xl">
              <div class="p-2 bg-orange/10 rounded-lg">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary">Bloated plugins and themes</h4>
                <p class="text-sm text-muted-foreground mb-0">Add scripts, styles, and weight</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-muted/30 border border-border rounded-xl">
              <div class="p-2 bg-yellow/10 rounded-lg">
                <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary">Heavy page builders</h4>
                <p class="text-sm text-muted-foreground mb-0">Like Divi or Elementor, which add excessive JS/CSS</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-muted/30 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary">Inadequate hosting</h4>
                <p class="text-sm text-muted-foreground mb-0">Cheap plans often mean slow performance</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-primary mb-2">Developer's Insight</p>
                <p class="italic mb-0">"By default, WordPress is slower than a static custom-built site. It gets worse once you start adding plugins or visual builders."</p>
              </div>
            </div>
          </div>
        </section>

        <section id="page-builders">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-yellow/10 rounded-lg">
              <svg class="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            Divi and Elementor: Magic Solution or Headache?
          </h2>
          <p class="text-lg leading-relaxed mb-6">These page builders are marketed as easy solutions, but often become nightmares.</p>
          
          <div class="grid gap-6 mb-8">
            <div class="flex gap-4 p-4 bg-red/5 border-l-4 border-red rounded-r-lg">
              <div class="p-2 bg-red/10 rounded-lg">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-red mb-1">Performance issues</h4>
                <p class="text-sm mb-0">Sites become inflated, slow, and unstable.</p>
              </div>
            </div>
            
            <div class="flex gap-4 p-4 bg-orange/5 border-l-4 border-orange rounded-r-lg">
              <div class="p-2 bg-orange/10 rounded-lg">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-orange mb-1">Complex interfaces</h4>
                <p class="text-sm mb-0">Users complain of confusing editors and cluttered workflows.</p>
              </div>
            </div>
            
            <div class="flex gap-4 p-4 bg-yellow/5 border-l-4 border-yellow rounded-r-lg">
              <div class="p-2 bg-yellow/10 rounded-lg">
                <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-yellow mb-1">Stability risks</h4>
                <p class="text-sm mb-0">Updates frequently break sites until patches are released.</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-purple mb-2">🦄 Developer's Joke</p>
                <p class="italic mb-0">"Show me an Elementor site with fewer than 10 plugins, no premium dependencies, easy for the owner to manage, and scoring 90%+ on Lighthouse… and I'll show you a unicorn!"</p>
              </div>
            </div>
          </div>
        </section>

        <section id="scalability-difficulties">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-blue/10 rounded-lg">
              <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
            </div>
            Scalability Difficulties
          </h2>
          <p class="text-lg leading-relaxed mb-6">In theory, WordPress scales with your project. In practice, growth often leads to:</p>
          
          <div class="grid gap-4 mb-6">
            <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
              <span class="w-2 h-2 bg-red rounded-full"></span>
              <span>Higher hosting and infrastructure costs.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>Increased plugin conflicts.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <span class="w-2 h-2 bg-yellow rounded-full"></span>
              <span>Bloated databases and disorganized structures.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Eventual need for a full rebuild.</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">📊 Enterprise Reality</p>
                <p class="mb-0">Even enterprises admit these limitations: <strong>84% of companies</strong> said their CMS (often WordPress) prevents them from unlocking full multichannel value.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-issues">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-teal/10 rounded-lg">
              <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            Lack of Best Practices and SEO Issues
          </h2>
          <p class="text-lg leading-relaxed mb-6">WordPress markets itself as "SEO-friendly," but poor execution ruins results.</p>
          
          <h3 class="flex items-center gap-2 text-xl font-semibold text-primary mb-4">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            Common problems include:
          </h3>
          <div class="grid gap-4 mb-8">
            <div class="flex items-start gap-4 p-4 bg-red/5 border-l-4 border-red rounded-r-lg">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-red mb-1">Multiple H1 tags or skipped hierarchies</h4>
                <p class="text-sm mb-0">Breaks proper heading structure for SEO and accessibility.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-orange/5 border-l-4 border-orange rounded-r-lg">
              <div class="p-2 bg-orange/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-orange mb-1">Poorly optimized templates</h4>
                <p class="text-sm mb-0">Marked "SEO-ready" but actually aren't optimized.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-yellow/5 border-l-4 border-yellow rounded-r-lg">
              <div class="p-2 bg-yellow/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-yellow mb-1">Heavy images, duplicate menus</h4>
                <p class="text-sm mb-0">Bad robots.txt, missing sitemaps and other technical issues.</p>
              </div>
            </div>
          </div>
          
          <p class="leading-relaxed">Inexperienced implementers often deliver "WordPress SEO" sites that rank poorly.</p>
        </section>

        <section id="bad-practices">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            "Smoke Sellers" and Industry Bad Practices
          </h2>
          <p class="text-lg leading-relaxed mb-6">WordPress' accessibility opened the door to pseudo-experts selling cheap websites with big promises.</p>
          
          <p class="leading-relaxed mb-6">Many agencies install a flashy theme, stuff content with keywords, charge monthly SEO "maintenance," and deliver nothing of value.</p>
          
          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">⚠️ Important Note</p>
                <p class="mb-0">The problem isn't WordPress itself — it's misuse and bad practices by unqualified providers.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="conclusion">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-green/10 rounded-lg">
              <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            Conclusion
          </h2>
          <p class="text-lg leading-relaxed mb-6">This article doesn't reject WordPress outright — when used correctly, it can be powerful. But it's not the magic shortcut many believe.</p>
          
          <h3 class="flex items-center gap-2 text-xl font-semibold text-primary mb-4">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            WordPress often means:
          </h3>
          <div class="grid gap-4 mb-8">
            <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
              <span class="w-2 h-2 bg-red rounded-full"></span>
              <span>Ongoing maintenance.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
              <span class="w-2 h-2 bg-orange rounded-full"></span>
              <span>Plugin dependency and hidden costs.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
              <span class="w-2 h-2 bg-yellow rounded-full"></span>
              <span>Slow performance if poorly managed.</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Frequent SEO mistakes.</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-8">The tool itself isn't bad — but it demands knowledge, discipline, and resources. Professionals can mitigate its downsides. Amateurs often create time bombs.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">💡 Final Advice</p>
                <p class="mb-0"><strong>If you're tempted by WordPress' apparent ease, be cautious.</strong> Either invest the time to learn, or hire competent professionals. Otherwise, what looked like a quick start can turn into an anchor holding your project back.</p>
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
            Sources
          </h3>
          <div class="grid gap-4">
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Hygraph</h4>
                <p class="text-sm mb-2"><a href="https://hygraph.com/blog/wordpress-disadvantages" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">9 disadvantages of WordPress that are holding you back</a></p>
                <p class="text-xs text-muted-foreground">Performance analysis and CMS comparison</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Raiola Networks</h4>
                <p class="text-sm mb-2"><a href="https://raiolanetworks.com/blog/ventajas-wordpress/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">Ventajas y desventajas de utilizar WordPress</a></p>
                <p class="text-xs text-muted-foreground">Hosting and maintenance perspectives</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Javier Vallejo</h4>
                <p class="text-sm mb-2"><a href="https://javiervallejo.com/desventajas-de-utilizar-wordpress/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">Desventajas de utilizar WordPress</a></p>
                <p class="text-xs text-muted-foreground">Developer experience and technical insights</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Hoot Host</h4>
                <p class="text-sm mb-2"><a href="https://hoot.host/elementor-is-everything-wrong-with-wordpress/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">Elementor is Everything Wrong with WordPress</a></p>
                <p class="text-xs text-muted-foreground">Page builder performance analysis</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Nestrategia</h4>
                <p class="text-sm mb-2"><a href="https://nestrategia.com/blog/errores-wordpress-seo/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">Los 9 errores en WordPress más comunes en SEO</a></p>
                <p class="text-xs text-muted-foreground">SEO optimization and best practices</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Enova IC</h4>
                <p class="text-sm mb-2"><a href="https://enovaic.es/el-posicionamiento-web-esta-prostituido/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">El posicionamiento web está prostituido</a></p>
                <p class="text-xs text-muted-foreground">Industry bad practices and SEO myths</p>
              </div>
            </div>
          </div>
        </section>
      `
    },
    "seo-no-murio-hype-estrategia": {
      title: "SEO Didn't Die: From Hype to Strategy That Actually Works",
      date: "2025-01-15",
      readTime: "12 min",
      category: "SEO Strategy",
      tags: ["SEO Myths", "Voice Search", "Visual Search", "AEO", "SEO Strategy"],
      metaTitle: "SEO Didn't Die: From Hype to Strategy That Actually Works | Calvo Creativo",
      metaDescription: "Critical analysis of digital marketing trends: voice, visual and AEO. Discover why real SEO remains what Google has wanted for 20 years and avoid falling for marketing hype.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "SEO Didn't Die: From Hype to Strategy That Actually Works",
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
            <h2 class="text-xl font-bold text-primary mb-0">🧭 Índice</h2>
          </div>
          <nav class="space-y-2">
            <a href="#cuando-el-humo-se-disfraza-de-futuro" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Cuando el humo se disfrazó de futuro
            </a>
            <a href="#como-se-fabrica-el-hype" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Cómo se fabrica el hype (y por qué nos lo creemos)
            </a>
            <a href="#acronimos-que-venden-humo" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Acrónimos que venden humo
            </a>
            <a href="#predicciones-virales-vs-realidad" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Predicciones virales vs. realidad
            </a>
            <a href="#lo-que-si-sirve" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Lo que sí sirve (spoiler: no es sexy)
            </a>
            <a href="#la-regla-que-google-no-ha-cambiado" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              La regla que Google no ha cambiado
            </a>
            <a href="#innovacion-real-o-espejismo" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Innovación real o espejismo
            </a>
            <a href="#voz-promesas-gigantes" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Búsqueda por voz: promesas gigantes, adopción lenta
            </a>
            <a href="#busqueda-visual" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Búsqueda visual: el futuro que sigue siendo futuro
            </a>
            <a href="#aeo-revolucion-costosa" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              AEO: la revolución más costosa que rentable
            </a>
            <a href="#conclusion" class="flex items-center gap-2 text-muted-foreground hover:text-electric-blue transition-colors p-2 rounded-lg hover:bg-electric-blue/5">
              <span class="w-2 h-2 bg-electric-blue/30 rounded-full"></span>
              Conclusión
            </a>
          </nav>
        </div>

        <section id="cuando-el-humo-se-disfraza-de-futuro">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            Cuando el humo se disfrazó de futuro
          </h2>
          <p class="text-lg leading-relaxed mb-6">En 2016, Gartner lanzó un titular que corrió como pólvora: <strong class="text-electric-blue">"Para 2020, el 30% de las búsquedas serán sin pantalla."</strong> Un año después, ComScore encendió más fuego: <strong class="text-electric-blue">"La mitad de las búsquedas se harán por voz."</strong></p>
          
          <p class="leading-relaxed mb-6">La promesa sonaba irresistible. ¿Quién no querría adelantarse a la revolución?</p>
          
          <p class="leading-relaxed mb-8">Los medios lo amplificaron. Los gurús del marketing lo presentaron en conferencias como la próxima extinción del SEO tradicional. Y miles de empresas movieron presupuestos para subirse a la ola.</p>

          <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-red/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-red mb-2">📌 El contraste duele:</p>
                <p class="mb-2">En 2020, menos del 20% de los usuarios en EE.UU. usaban la voz como canal habitual (DemandSage, 2025).</p>
                <p class="mb-2">Y la mayoría lo hacía para lo trivial: "Alexa, pon música", "Siri, ¿qué clima hace hoy?".</p>
                <p class="mb-0 font-semibold">¿Dónde quedó la revolución?</p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-se-fabrica-el-hype">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-orange/10 rounded-lg">
              <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            Cómo se fabrica el hype (y por qué nos lo creemos)
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Lo mismo ocurrió con la búsqueda visual.</p>
          
          <p class="leading-relaxed mb-6">Cuando Pinterest lanzó Lens en 2017 y Google apostó con Google Lens, los titulares eran apocalípticos: "La cámara sustituirá a las palabras."</p>
          
          <p class="leading-relaxed mb-4">Y es cierto, los números impresionan:</p>
          
          <div class="grid gap-4 mb-6">
            <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <span class="w-2 h-2 bg-purple rounded-full"></span>
              <span>Pinterest Lens registra más de 600 millones de búsquedas mensuales (VentureBeat, 2018).</span>
            </div>
            <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <span class="w-2 h-2 bg-blue rounded-full"></span>
              <span>Google Lens supera los 8.000 millones de búsquedas al mes (Google Ads & Commerce Blog, 2024).</span>
            </div>
          </div>
          
          <p class="leading-relaxed mb-6">Pero detrás de esas cifras brillantes, la realidad es otra: la mayoría de consultas son sobre moda, decoración o lifestyle (ORR Consulting).</p>
          
          <p class="leading-relaxed mb-8">Si eres abogado, médico o consultor financiero, Lens no es tu nuevo canal de ventas.</p>

          <div class="bg-gradient-to-r from-orange/10 to-yellow/10 border-l-4 border-orange p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-orange/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-orange mb-2">💡 Realidad</p>
                <p class="mb-0">El hype brilla como un fuego artificial. Ruidoso, deslumbrante, pero efímero.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="acronimos-que-venden-humo">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-purple/10 rounded-lg">
              <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z"></path>
              </svg>
            </div>
            Acrónimos que venden humo: AEO y compañía
          </h2>
          
          <p class="text-lg leading-relaxed mb-6">Después vino el AEO (Answer Engine Optimization).</p>
          
          <p class="leading-relaxed mb-6">El nombre ya parecía diseñado para vender consultorías. "El futuro del SEO", lo llamaban.</p>
          
          <p class="leading-relaxed mb-6">La tesis: los motores de respuesta como Alexa o Siri desplazarían a Google, y solo quienes optimizaran para AEO sobrevivirían.</p>
          
          <div class="grid gap-4 mb-8">
            <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
              <p class="font-semibold text-red mb-2">Los datos reales son menos espectaculares:</p>
              <p class="text-sm mb-2">Apenas 11.84% de las búsquedas globales muestran featured snippets (Ahrefs).</p>
              <p class="text-sm mb-0">Nueve de cada diez búsquedas ni siquiera participan en el supuesto "mercado del futuro".</p>
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
                <p class="font-semibold text-purple mb-2">📊 Conclusión</p>
                <p class="mb-0">El AEO terminó siendo lo que muchos sospechaban: más humo de marketing que revolución tecnológica.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="predicciones-virales-vs-realidad">
          <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <div class="p-2 bg-red/10 rounded-lg">
              <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          Predicciones virales vs. realidad: el patrón que se repite
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">Cada una de estas modas se repite como un patrón:</p>

        <div class="grid gap-4 mb-8">
          <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            <span>Primero, una predicción con cifras redondas.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <span class="w-2 h-2 bg-orange rounded-full"></span>
            <span>Luego, titulares virales y consultorías premium.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <span class="w-2 h-2 bg-yellow rounded-full"></span>
            <span>Finalmente, la realidad mucho más modesta.</span>
          </div>
        </div>

        <div class="text-center py-8">
          <p class="text-2xl font-bold text-primary mb-2">👉 Hype, hype, hype.</p>
          <p class="text-2xl font-bold text-primary mb-2">👉 Datos, datos, datos.</p>
          <p class="text-2xl font-bold text-primary mb-4">👉 Realidad, realidad, realidad.</p>
          <p class="text-lg text-muted-foreground">El SEO parece vivir en un eterno déjà vu de promesas incumplidas.</p>
        </div>
      </section>

      <section id="lo-que-si-sirve">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-green/10 rounded-lg">
            <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          Lo que sí sirve (y cuándo)
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">Decir que la voz o lo visual "no sirven" sería tan irresponsable como las predicciones que criticamos.</p>
        
        <div class="grid gap-6 mb-8">
          <div class="p-6 bg-green/5 border border-green/20 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-green mb-2">La voz sí importa</h4>
                <p class="text-sm mb-0">Para búsquedas locales ("near me"), accesibilidad y tareas inmediatas.</p>
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
                <h4 class="font-semibold text-blue mb-2">La visual es oro puro</h4>
                <p class="text-sm mb-0">Para e-commerce en moda, decoración y productos físicos (ORR Consulting).</p>
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
                <h4 class="font-semibold text-purple mb-2">Incluso el AEO</h4>
                <p class="text-sm mb-0">Aunque limitado, puede ser estratégico en industrias donde los snippets dominan (Stephan Spencer).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-yellow/10 to-orange/10 border-l-4 border-yellow p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-yellow/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-yellow mb-2">⚠️ El problema real</p>
              <p class="mb-0">El problema no está en la tecnología. El problema está en venderla como si fuera el nuevo evangelio, cuando en realidad son piezas específicas dentro de un rompecabezas mucho más amplio.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="la-regla-que-google-no-ha-cambiado">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-teal/10 rounded-lg">
            <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          La regla que Google no ha cambiado en 20 años
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
            Al final del día, Google quiere lo mismo desde hace 20 años: que resuelvas lo que busca tu usuario (Google Developers – Search Central).
          </p>
        </div>

        <p class="text-lg leading-relaxed mb-6">El SEO no es un conjunto de siglas que nacen y mueren cada temporada.</p>
        
        <p class="leading-relaxed mb-6">El SEO es estrategia, arquitectura, creatividad, es entender la intención detrás de cada búsqueda.</p>
        
        <p class="leading-relaxed mb-8">Los acrónimos cambian. Los gurús encuentran nuevas palabras. Las conferencias buscan nuevos titulares.</p>

        <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-green/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-green mb-2">✅ La verdadera constante</p>
              <p class="mb-0">Pero la disciplina permanece: <strong>resolver la necesidad del usuario mejor que nadie.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section id="innovacion-real-o-espejismo">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-yellow/10 rounded-lg">
            <svg class="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          ¿Innovación real o espejismo de marketing?
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">Entonces, ¿qué son realmente la búsqueda por voz, la búsqueda visual y el AEO?</p>
        
        <p class="leading-relaxed mb-6">¿Innovaciones infravaloradas que aún no explotamos?</p>
        
        <p class="leading-relaxed mb-8">¿O espejismos creados por el marketing digital para vender humo?</p>

        <div class="bg-gradient-to-r from-blue/10 to-purple/10 border-l-4 border-blue p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-blue/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-blue mb-2">🔍 La respuesta</p>
              <p class="mb-0">En las siguientes secciones, lo desnudaremos con datos, ejemplos y análisis. Porque si algo necesitamos hoy en SEO no son más siglas, <strong>sino más verdad.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section id="voz-promesas-gigantes">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-blue/10 rounded-lg">
            <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
          </div>
          Voz: promesas gigantes, impacto limitado
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">En 2016, Gartner predijo que para 2020, el 30% de las búsquedas se realizarían sin pantalla. Un año después, ComScore fue aún más contundente: "La mitad de las búsquedas se harán por voz."</p>
        
        <p class="leading-relaxed mb-6">Los titulares fueron tan virales que era imposible no sentir FOMO. ¿Qué empresa querría quedarse atrás? Agencias empezaron a vender "paquetes de Voice SEO". Consultores llenaron conferencias con slides que decían "El teclado morirá".</p>
        
        <p class="leading-relaxed mb-8">El resultado: miles de negocios invirtieron tiempo y dinero esperando un 2020 en el que los usuarios hablarían más de lo que escribían.</p>

        <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-red/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-red mb-2">📌 La realidad fue mucho más modesta:</p>
              <p class="mb-2">Según datos recopilados en 2020, menos del 20% de los usuarios en EE.UU. usaban la voz de manera habitual para buscar en internet (DemandSage, 2025).</p>
              <p class="mb-0">Y de esos, la mayoría lo hacía para cosas simples: "¿Qué tiempo hace hoy?", "Pon música de Wendy Sulca", "Llama a mamá".</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">¿Por qué la voz no despegó?</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <h4 class="font-semibold text-orange mb-2">Limitaciones de contexto</h4>
            <p class="text-sm mb-0">Hablarle al teléfono no siempre es cómodo ni viable. En transporte público, en la oficina o incluso en casa con más gente alrededor, dictar una búsqueda puede resultar invasivo.</p>
          </div>
          
          <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h4 class="font-semibold text-yellow mb-2">Privacidad y confianza</h4>
            <p class="text-sm mb-0">El usuario aún desconfía de tener un micrófono abierto escuchando todo el tiempo. Casos como el de Alexa guardando conversaciones privadas generaron desconfianza.</p>
          </div>
          
          <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
            <h4 class="font-semibold text-red mb-2">Complejidad en búsquedas transaccionales</h4>
            <p class="text-sm mb-0">Una cosa es pedirle a Siri la hora del partido. Otra muy distinta es elegir un seguro médico o comprar un computador. La voz es excelente para microconsultas, pero insuficiente para procesos complejos.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Dónde la voz sí aporta: lo local</h3>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>"Dentist near me"</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>"Best pizza near me"</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>"Gas station near me"</span>
          </div>
        </div>

        <p class="leading-relaxed mb-6">El 58% de los consumidores en EE.UU. declaró haber usado búsquedas por voz para encontrar negocios locales (DemandSage, 2025).</p>
        
        <p class="leading-relaxed mb-8">Aquí la voz tiene todo el sentido: estás en movimiento, tienes prisa, necesitas un resultado inmediato.</p>

        <div class="bg-gradient-to-r from-teal/10 to-blue/10 border-l-4 border-teal p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-teal/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-teal mb-2">📌 Para un restaurante, un gimnasio o una ferretería</p>
              <p class="mb-0">Optimizar para voz (con datos correctos en Google Business Profile, reseñas y FAQ bien estructuradas) sí es una estrategia rentable.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Voice commerce: ruido alto, adopción baja</h3>
        
        <p class="leading-relaxed mb-6">Durante años se habló del "voice commerce" como la próxima gran disrupción del e-commerce.</p>
        
        <p class="leading-relaxed mb-4">Pero los datos cuentan otra historia:</p>
        
        <div class="grid gap-4 mb-6">
          <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
            <p class="text-sm mb-2">Solo el 2% de los propietarios de Alexa en EE.UU. usaban el dispositivo para realizar compras habitualmente (Forbes).</p>
            <p class="text-sm mb-0">Y de ese 2%, la mayoría se limitaba a productos recurrentes como pañales, detergente o comida para mascotas.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-red/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-red mb-2">📌 Realidad dura</p>
              <p class="mb-0">Nadie compra un televisor de $800 hablando con Alexa. Nadie decide su nuevo plan de salud con un comando de voz.</p>
            </div>
          </div>
        </div>

        <p class="leading-relaxed mb-8">El voice commerce existe, pero es marginal y limitado a productos de bajo riesgo.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">La voz como capa, no como sustituto</h3>
        
        <p class="leading-relaxed mb-6">El error estuvo en vender la voz como sustituto del SEO, cuando en realidad es una capa complementaria.</p>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <p class="font-semibold text-green mb-1">Para locales</p>
            <p class="text-sm mb-0">Voz + "near me" es vital.</p>
          </div>
          
          <div class="p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <p class="font-semibold text-blue mb-1">Para marcas globales</p>
            <p class="text-sm mb-0">La voz es un canal más, útil para recordatorios, FAQs o tareas simples.</p>
          </div>
          
          <div class="p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <p class="font-semibold text-purple mb-1">Para sectores complejos</p>
            <p class="text-sm mb-0">Salud, legal, B2B: su impacto es casi irrelevante.</p>
          </div>
        </div>

        <p class="leading-relaxed mb-6">Es un recordatorio de que en marketing digital las promesas absolutas suelen esconder humo.</p>
        
        <p class="leading-relaxed mb-6">Imagina a un usuario buscando "cómo declarar impuestos como freelancer en EE.UU.".</p>
        
        <p class="leading-relaxed mb-6">¿De verdad va a preguntarle a Alexa y confiar en una respuesta de un solo párrafo?</p>
        
        <p class="leading-relaxed mb-8">La realidad es que terminará en un artículo completo, en un video explicativo o en un tutorial paso a paso. La voz es el inicio de la conversación, no el final del embudo.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Lo que aprendimos del hype de la voz</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h4 class="font-semibold text-yellow mb-2">No todo lo que brilla es revolución</h4>
            <p class="text-sm mb-0">Las cifras que sonaban tan redondas (30%, 50%) se convirtieron en titulares fáciles, pero nunca tuvieron respaldo en el uso real.</p>
          </div>
          
          <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <h4 class="font-semibold text-orange mb-2">Optimizar sin perder la cabeza</h4>
            <p class="text-sm mb-0">Vale la pena asegurar que tu negocio local esté optimizado para búsquedas por voz. No vale la pena rediseñar toda tu estrategia SEO en torno a Alexa o Siri.</p>
          </div>
          
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <h4 class="font-semibold text-green mb-2">El SEO sigue siendo SEO</h4>
            <p class="text-sm mb-0">Incluso en voz, el principio no cambia: Google, Siri o Alexa responden con la información mejor estructurada y más confiable (Google Developers – Search Central).</p>
          </div>
        </div>
      </section>

      <section id="busqueda-visual">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-purple/10 rounded-lg">
            <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          Búsqueda visual: revolución parcial, oportunidad real
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">Así como la voz, la búsqueda visual también se presentó como el próximo gran disruptor del SEO. Pero, ¿qué sucedió en realidad?</p>
        
        <p class="leading-relaxed mb-6">En 2017, Pinterest presentó Lens con un mensaje contundente: "Apunta tu cámara y compra lo que ves."</p>
        
        <p class="leading-relaxed mb-6">Ese mismo año, Google lanzó Google Lens, reforzando la narrativa: la cámara sería la nueva caja de búsqueda.</p>
        
        <p class="leading-relaxed mb-8">Los titulares repitieron lo mismo: "La búsqueda visual cambiará el SEO tal como lo conocemos." Hoy, más de 7 años después, vale la pena revisar qué pasó.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Los números que deslumbran</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Google Lens procesa más de 8.000 millones de búsquedas al mes (Google Ads & Commerce Blog, 2024).</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Pinterest Lens supera los 600 millones de búsquedas mensuales (VentureBeat, 2018).</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>El 74% de los consumidores afirma que la búsqueda visual influye en su decisión de compra en verticales como moda y decoración (ORR Consulting).</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <span class="w-2 h-2 bg-orange rounded-full"></span>
            <span>En e-commerce, el 36% de los compradores en línea han utilizado alguna vez funciones de búsqueda visual (eMarketer).</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">Sobre el papel, los datos parecen confirmar lo que los gurús predijeron: la visual es enorme.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">El contexto que enfría los datos</h3>
        
        <p class="leading-relaxed mb-4">Pero los números necesitan contexto:</p>
        
        <div class="grid gap-6 mb-8">
          <div class="p-6 bg-red/5 border border-red/20 rounded-xl">
            <h4 class="font-semibold text-red mb-2">Concentrado en verticales específicos</h4>
            <p class="mb-2">Moda, hogar y decoración, belleza, y productos físicos fácilmente identificables.</p>
            <p class="text-sm mb-0">Un estudio de Gartner mostró que menos del 8% de las consultas visuales se realizan en sectores fuera de retail o lifestyle. Es decir, si eres abogado, consultor financiero o vendes SaaS, la visual no te traerá clientes mañana.</p>
          </div>

          <div class="p-6 bg-orange/5 border border-orange/20 rounded-xl">
            <h4 class="font-semibold text-orange mb-2">El sesgo aspiracional</h4>
            <p class="text-sm mb-0">Gran parte de las búsquedas visuales en Pinterest son aspiracionales: usuarios guardando ideas de moda, decoración o recetas. El paso a la compra es mucho más débil que en una búsqueda textual como "comprar zapatos Nike talla 10".</p>
          </div>

          <div class="p-6 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h4 class="font-semibold text-yellow mb-2">Barrera cultural y tecnológica</h4>
            <p class="text-sm mb-0">Aunque la cámara está en todos los smartphones, menos del 17% de los usuarios de Google en EE.UU. usaban Lens de forma mensual en 2022 (eMarketer).</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Dónde la visual sí es oro</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <h4 class="font-semibold text-green mb-2">Retail y moda</h4>
            <p class="text-sm mb-0">Un usuario ve un vestido en la calle, lo fotografía y encuentra opciones similares en línea.</p>
          </div>
          
          <div class="p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <h4 class="font-semibold text-blue mb-2">Decoración</h4>
            <p class="text-sm mb-0">Apuntas la cámara a un mueble y descubres dónde comprarlo o cómo combinarlo.</p>
          </div>
          
          <div class="p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <h4 class="font-semibold text-purple mb-2">Viajes y cultura</h4>
            <p class="text-sm mb-0">Con Lens puedes identificar monumentos, plantas, animales o lugares turísticos en segundos.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-green/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-green mb-2">📌 Para un e-commerce de ropa o muebles</p>
              <p class="mb-0">Ignorar la búsqueda visual sería perder un canal emergente de tráfico altamente cualificado.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Cuando la cámara gana… y cuando no</h3>
        
        <p class="leading-relaxed mb-4">Piensa en la diferencia:</p>
        
        <div class="grid gap-4 mb-6">
          <div class="p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <h4 class="font-semibold text-blue mb-2">Texto</h4>
            <p class="text-sm mb-0">Escribes "zapatillas Nike negras talla 10".</p>
          </div>
          
          <div class="p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <h4 class="font-semibold text-purple mb-2">Visual</h4>
            <p class="text-sm mb-0">Apuntas la cámara a las zapatillas de tu amigo y encuentras modelos similares al instante.</p>
          </div>
        </div>

        <p class="leading-relaxed mb-6">La segunda experiencia parece futurista, pero solo aplica a contextos donde el producto es claramente reconocible. Es difícil imaginar a alguien usando Lens para buscar "estrategia SEO programática" o "abogado laboralista en Miami".</p>
        
        <p class="leading-relaxed mb-8">La visual, entonces, no es un sustituto del SEO, sino un acelerador en sectores específicos.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Por qué la adopción masiva no llegó</h3>
        
        <p class="leading-relaxed mb-4">¿Por qué, con cifras tan grandes, la búsqueda visual no ha desplazado al SEO tradicional?</p>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
            <h4 class="font-semibold text-red mb-2">La costumbre pesa más que la innovación</h4>
            <p class="text-sm mb-0">Escribir sigue siendo más natural para el 80% de las consultas. Para preguntar "mejor seguro de salud en Florida", el texto sigue siendo la vía lógica.</p>
          </div>
          
          <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <h4 class="font-semibold text-orange mb-2">Dificultad en búsquedas abstractas</h4>
            <p class="text-sm mb-0">Muchas consultas no pueden representarse con imágenes: "Cómo hacer autoridad temática en SEO", "Plan de pensiones más rentable", "Mejores libros de filosofía en 2024".</p>
          </div>
          
          <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h4 class="font-semibold text-yellow mb-2">El sesgo de datos inflados</h4>
            <p class="text-sm mb-0">Que Google Lens tenga 8.000 millones de consultas no significa 8.000 millones de compradores. Muchas búsquedas son educativas, curiosas o recreativas, no transaccionales.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Lecciones prácticas para decidir si te conviene</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <h4 class="font-semibold text-green mb-2">No todo sector debe correr</h4>
            <p class="text-sm mb-0">Si estás en moda, decoración o productos físicos, integra la búsqueda visual ya. Si estás en B2B o servicios complejos, prioriza el SEO clásico.</p>
          </div>
          
          <div class="p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <h4 class="font-semibold text-blue mb-2">El SEO sigue gobernando el funnel</h4>
            <p class="text-sm mb-0">La visual ayuda en el descubrimiento, pero el cierre y la conversión siguen estando en búsquedas textuales y contenidos bien optimizados.</p>
          </div>
          
          <div class="p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <h4 class="font-semibold text-purple mb-2">El marketing debe leer la intención</h4>
            <p class="text-sm mb-0">El error es obsesionarse con la herramienta. La clave es preguntarse: ¿Qué busca mi usuario? ¿Cómo lo busca? ¿Qué canal es más natural para resolverlo?</p>
          </div>
        </div>
      </section>

      <section id="aeo-revolucion-costosa">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-red/10 rounded-lg">
            <svg class="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          AEO: ¿revolución costosa o etiqueta bonita?
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">En 2018 apareció con fuerza un nuevo término en conferencias de SEO y marketing: AEO – Answer Engine Optimization.</p>
        
        <p class="leading-relaxed mb-6">El mensaje era claro y alarmista: "El SEO murió, ahora solo sobrevivirán quienes optimicen para motores de respuesta como Alexa, Siri o Google Assistant."</p>
        
        <p class="leading-relaxed mb-6">Se vendía como una verdad inevitable. El futuro ya no eran diez enlaces azules en Google, sino una única respuesta hablada que definiría ganadores y perdedores.</p>
        
        <p class="leading-relaxed mb-8">El miedo corrió como pólvora: ¿qué pasaría con una web que no fuera "la" respuesta?</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Los números que bajan la espuma</h3>
        
        <p class="leading-relaxed mb-4">En la práctica, el AEO se reducía a una obsesión por los featured snippets (el famoso "puesto 0" en Google).</p>
        
        <div class="bg-gradient-to-r from-red/10 to-orange/10 border-l-4 border-red p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-red/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-red mb-2">📊 Pero los números desinflan el discurso:</p>
              <div class="grid gap-2">
                <p class="text-sm mb-0">• Solo el 11.84% de las búsquedas globales muestran un featured snippet (Ahrefs).</p>
                <p class="text-sm mb-0">• La mayoría de snippets aparecen en consultas informacionales simples, como "qué es blockchain" o "cuántos huesos tiene el cuerpo humano".</p>
                <p class="text-sm mb-0">• Según un estudio de Ahrefs, más del 70% de los snippets no generan clics adicionales, porque el usuario obtiene la respuesta en Google sin visitar ningún sitio.</p>
              </div>
            </div>
          </div>
        </div>

        <p class="leading-relaxed mb-8">Es decir: la supuesta "revolución del AEO" se basaba en menos del 12% de las búsquedas, en preguntas básicas y con poco potencial de conversión.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">El combustible del AEO: el espejismo de los asistentes</h3>
        
        <p class="leading-relaxed mb-4">Gran parte del hype de AEO venía de los asistentes de voz. La narrativa era sencilla: "Si Alexa solo dará una respuesta, debes ser esa respuesta."</p>
        
        <p class="leading-relaxed mb-4">Pero los datos de uso de Alexa y Google Assistant revelan que:</p>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-red/5 border border-red/20 rounded-xl">
            <p class="text-sm mb-2">Más del 70% de las interacciones con asistentes de voz están relacionadas con música, clima, recordatorios o preguntas triviales (OC&C Strategy Consultants).</p>
            <p class="text-sm mb-0">Menos del 2% de los usuarios de Alexa en EE.UU. realizan compras recurrentes con el dispositivo (Forbes).</p>
          </div>
        </div>

        <p class="leading-relaxed mb-8">¿De verdad valía la pena invertir miles de dólares en AEO para estar en un canal donde la mayoría solo pide que pongan "Safaera" de Bad Bunny o que le digan si, según mercurio retrógrado, va a volver con su novio?</p>

        <h3 class="text-xl font-semibold text-primary mb-4">La "respuesta única": buena historia, mala decisión</h3>
        
        <p class="leading-relaxed mb-4">Imagina a una empresa de seguros que paga una consultoría completa de AEO para aparecer en Alexa.</p>
        
        <p class="leading-relaxed mb-4">El usuario pregunta: "¿Cuál es el mejor seguro médico en Miami?"</p>
        
        <p class="leading-relaxed mb-6">Alexa no entrega un comparador. No analiza cobertura, precios, reseñas ni casos reales. Simplemente responde con un snippet simplificado tomado de alguna fuente.</p>
        
        <p class="leading-relaxed mb-8">El resultado: la información es incompleta, sesgada y poco confiable. El usuario, al no quedar satisfecho, vuelve a Google, compara varias opciones y toma la decisión como siempre lo ha hecho: leyendo, investigando y contrastando.</p>

        <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-purple/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-purple mb-2">📌 Moral</p>
              <p class="mb-0">La "respuesta única" es atractiva en teoría, pero insuficiente en búsquedas complejas que requieren contexto, matices y confianza.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Cómo se vendió el miedo (y se cobró caro)</h3>
        
        <p class="leading-relaxed mb-4">La fuerza del AEO no vino de su impacto real, sino de su capacidad de vender miedo.</p>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            <span>Consultores lo presentaban como "el fin del SEO".</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <span class="w-2 h-2 bg-orange rounded-full"></span>
            <span>Agencias ofrecían paquetes exclusivos de "optimización para motores de respuesta".</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <span class="w-2 h-2 bg-yellow rounded-full"></span>
            <span>Startups se crearon solo para vender herramientas de AEO.</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">El término sonaba técnico, futurista y urgente. Y en marketing, esas tres palabras abren billeteras.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Qué sí hacer con snippets (sin vender el alma)</h3>
        
        <p class="leading-relaxed mb-4">¿Significa esto que los snippets no sirven? No.</p>
        
        <p class="leading-relaxed mb-4">Optimizar para ellos puede traer beneficios:</p>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>Mayor visibilidad en resultados.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Posibilidad de captar usuarios en etapa informativa.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Refuerzo de marca al ser percibido como autoridad.</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">Pero el error es venderlo como una revolución total. El snippet es solo una pieza más en el ecosistema de SEO. Un bonus dentro de una estrategia de contenidos, no el centro de ella.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Lecciones para no morder el anzuelo</h3>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h4 class="font-semibold text-yellow mb-2">Los acrónimos venden más que los datos</h4>
            <p class="text-sm mb-0">AEO era básicamente SEO enfocado en snippets. Pero ponerle sigla nueva lo convirtió en tendencia global.</p>
          </div>
          
          <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <h4 class="font-semibold text-orange mb-2">El usuario no cambia tan rápido</h4>
            <p class="text-sm mb-0">Aunque Google, Alexa o Siri muestren respuestas directas, el usuario sigue investigando, comparando y validando fuentes.</p>
          </div>
          
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <h4 class="font-semibold text-green mb-2">El SEO sigue siendo integral</h4>
            <p class="text-sm mb-0">Ninguna "moda" sustituye a la estrategia base: arquitectura, intención de búsqueda, autoridad temática y experiencia de usuario.</p>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-green/10 rounded-lg">
            <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          Conclusión: el SEO que sí funciona en 2025 (y en 2030)
        </h2>
        
        <p class="text-lg leading-relaxed mb-6">Durante la última década, hemos visto desfilar acrónimos y supuestas revoluciones: Voz (VEO), Visual (VSEO), AEO, y los que vendrán mañana con siglas nuevas.</p>
        
        <p class="leading-relaxed mb-8">Cada vez la narrativa fue la misma: "El SEO murió, ahora todo es distinto." Pero si algo nos enseñan los datos, los fracasos y los espejismos, es que el SEO nunca murió. Cambió, evolucionó, se adaptó, pero la esencia siempre ha sido la misma: resolver la necesidad real de un usuario.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Por qué caemos —y cómo evitarlo</h3>
        
        <p class="leading-relaxed mb-4">¿Por qué caemos una y otra vez en las mismas trampas?</p>
        
        <p class="leading-relaxed mb-6">Porque el humo se vende más fácil que el trabajo constante. Decirle a un cliente "necesitamos 6 meses de estrategia sólida" no emociona. Decirle "hay una nueva revolución, si no te subes al tren hoy, mueres" sí abre billeteras.</p>
        
        <p class="leading-relaxed mb-8">Así nacen los acrónimos que terminan siendo trending topic en conferencias pero irrelevantes en la práctica.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Lo único que Google siempre quiere: respuestas</h3>
        
        <div class="bg-gradient-to-br from-green/10 to-teal/10 border-2 border-green/20 rounded-2xl p-8 mb-8 text-center">
          <div class="mb-6">
            <div class="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <p class="text-2xl font-bold text-primary mb-4">
            📌 Google no quiere revoluciones. Quiere respuestas (Google Developers – Search Central).
          </p>
        </div>

        <p class="leading-relaxed mb-4">Su negocio depende de que el usuario encuentre lo que busca lo más rápido posible.</p>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Si usas voz, Google quiere darte una respuesta breve y útil.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Si usas visual, Google quiere mostrarte imágenes relevantes.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>Si preguntas a un asistente, Google (o Alexa) quiere devolverte algo confiable.</span>
          </div>
        </div>

        <p class="leading-relaxed mb-4">En todos los casos, ¿qué necesita Google?</p>
        
        <div class="bg-gradient-to-r from-teal/10 to-green/10 border-l-4 border-teal p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-teal/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-teal mb-2">👉 Contenido claro, estructurado, confiable y que resuelva la intención.</p>
              <p class="mb-0">Es decir, SEO.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">El patrón del funeral inventado</h3>
        
        <p class="leading-relaxed mb-6">La voz fue un hype que terminó siendo útil solo en contextos locales. La visual es oro puro en retail y lifestyle, pero marginal en otros sectores. El AEO fue básicamente snippets vendidos como revolución.</p>
        
        <p class="leading-relaxed mb-4">Los tres compartieron un mismo patrón:</p>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-red/5 border border-red/20 rounded-xl">
            <span class="w-2 h-2 bg-red rounded-full"></span>
            <span>Exageración en conferencias y medios.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <span class="w-2 h-2 bg-orange rounded-full"></span>
            <span>Agencias vendiendo paquetes "exclusivos".</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <span class="w-2 h-2 bg-yellow rounded-full"></span>
            <span>Resultados prácticos limitados.</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">La moraleja es simple: el SEO no muere, pero cada cierto tiempo alguien inventa un funeral para vender ataúdes.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">La marca que no persiguió el humo (y ganó)</h3>
        
        <p class="leading-relaxed mb-6">Imagina que eres dueño de un e-commerce. Te dicen que necesitas invertir miles en "optimización para motores de respuesta" porque "la gente ya no escribe, solo habla". Luego te dicen que todo será visual, que "el futuro es apuntar con la cámara". Después que el AEO es lo único que importa, que "sin snippet no existes".</p>
        
        <p class="leading-relaxed mb-4">Pasan los años, y mientras tanto tu competencia —que no corrió detrás del humo— se dedicó a:</p>
        
        <div class="grid gap-4 mb-6">
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>Entender su audiencia.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Crear contenidos que realmente ayudaran.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Construir autoridad en su nicho (Dejan.ai).</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-teal/5 border border-teal/20 rounded-xl">
            <span class="w-2 h-2 bg-teal rounded-full"></span>
            <span>Optimizar su web con bases sólidas.</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">Resultado: ellos siguen creciendo, mientras tú acumulaste facturas de consultorías que nunca cambiaron nada.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Tu ventaja real: pensamiento crítico</h3>
        
        <p class="leading-relaxed mb-4">Lo que separa a los negocios que triunfan de los que caen en la trampa es la capacidad de pensar críticamente. De no dejarse arrastrar por modas, y en cambio preguntarse:</p>
        
        <div class="grid gap-4 mb-8">
          <div class="p-4 bg-yellow/5 border border-yellow/20 rounded-xl">
            <p class="font-semibold text-yellow mb-1">¿Esto aporta valor a mi usuario?</p>
          </div>
          <div class="p-4 bg-orange/5 border border-orange/20 rounded-xl">
            <p class="font-semibold text-orange mb-1">¿Resuelve un problema real?</p>
          </div>
          <div class="p-4 bg-green/5 border border-green/20 rounded-xl">
            <p class="font-semibold text-green mb-1">¿Encaja en mi estrategia o es solo una distracción?</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-primary mb-4">Hoja de ruta: intención, arquitectura, autoridad, confianza</h3>
        
        <p class="leading-relaxed mb-6">El SEO que importa en 2025 (y en 2030) es el mismo que importaba en 2010:</p>
        
        <div class="grid gap-4 mb-8">
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>Entender la intención de búsqueda.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Estructurar un sitio claro y navegable.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Crear autoridad temática y de marca (Dejan.ai).</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-teal/5 border border-teal/20 rounded-xl">
            <span class="w-2 h-2 bg-teal rounded-full"></span>
            <span>Dar confianza con datos, experiencia y consistencia (Google E-E-A-T).</span>
          </div>
        </div>

        <p class="leading-relaxed mb-8">Todo lo demás —voz, visual, AEO, la sigla que inventen mañana— son capas. Complementos. Herramientas útiles en algunos contextos, pero jamás sustitutos de la estrategia.</p>

        <h3 class="text-xl font-semibold text-primary mb-4">Qué recordar (y qué ignorar) desde hoy</h3>
        
        <p class="leading-relaxed mb-4">Si algo debes recordar de todo este recorrido es esto:</p>
        
        <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-green/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-green mb-2">👉 El SEO no es humo. El humo son los atajos que nos quieren vender disfrazados de revoluciones.</p>
            </div>
          </div>
        </div>

        <p class="leading-relaxed mb-4">La única revolución real es volver a lo esencial:</p>
        
        <div class="grid gap-4 mb-8">
          <div class="flex items-center gap-4 p-4 bg-green/5 border border-green/20 rounded-xl">
            <span class="w-2 h-2 bg-green rounded-full"></span>
            <span>Conocer a tu audiencia.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
            <span class="w-2 h-2 bg-blue rounded-full"></span>
            <span>Crear para ella.</span>
          </div>
          <div class="flex items-center gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
            <span class="w-2 h-2 bg-purple rounded-full"></span>
            <span>Ser más útil, más claro y más confiable que la competencia.</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green/10 to-teal/10 border-2 border-green/20 rounded-2xl p-8 text-center">
          <p class="text-2xl font-bold text-primary mb-4">
            El SEO seguirá vivo mientras existan personas con preguntas y negocios dispuestos a responderlas.
          </p>
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
          Fuentes adicionales citadas
        </h3>
        
        <div class="grid gap-4 mb-8">
          <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
            <div class="p-2 bg-purple/10 rounded-lg mt-1">
              <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-1">Statcounter</h4>
              <p class="text-sm mb-2">Cuota de chatbots de IA.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
            <div class="p-2 bg-purple/10 rounded-lg mt-1">
              <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-1">SparkToro</h4>
              <p class="text-sm mb-2">Crecimiento de Google vs. ChatGPT.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
            <div class="p-2 bg-purple/10 rounded-lg mt-1">
              <svg class="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-primary mb-1">SISTRIX</h4>
              <p class="text-sm mb-2">Impacto de búsquedas zero-click.</p>
            </div>
          </div>
        </div>

        <h4 class="text-xl font-semibold text-primary mb-4">Referencias de investigación</h4>
        
        <div class="space-y-3 text-sm">
          <p>• Google Ads & Commerce Blog — Shashi Thakur (03-10-2024): Google Lens and AI Overviews: New ways for marketers to reach customers. <a href="https://blog.google/products/ads-commerce/google-lens-ai-overviews-ads-marketers/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://blog.google/products/ads-commerce/google-lens-ai-overviews-ads-marketers/</a></p>
          
          <p>• DemandSage — Voice Search Statistics 2025 (24-07-2025). <a href="https://www.demandsage.com/voice-search-statistics/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.demandsage.com/voice-search-statistics/</a></p>
          
          <p>• Search Engine Land — Danny Goodwin (02-07-2024): Nearly 60% of Google searches end without a click in 2024. <a href="https://searchengineland.com/google-search-zero-click-study-2024-443869" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://searchengineland.com/google-search-zero-click-study-2024-443869</a></p>
          
          <p>• TechCrunch — Sarah Perez (13-07-2022): Google exec suggests Instagram and TikTok are eating into Google's core products, Search and Maps. <a href="https://techcrunch.com/2022/07/12/google-exec-suggests-instagram-and-tiktok-are-eating-into-googles-core-products-search-and-maps/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://techcrunch.com/2022/07/12/google-exec-suggests-instagram-and-tiktok-are-eating-into-googles-core-products-search-and-maps/</a></p>
          
          <p>• Doors Studio Blog — Key Takeaways from Search Central Live Deep Dive 2025 (01-08-2025). <a href="https://ae.doorsstudio.com/blogs/search-central-live-deep-dive-2025" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://ae.doorsstudio.com/blogs/search-central-live-deep-dive-2025</a></p>
          
          <p>• VentureBeat — Pinterest sees 600 million visual searches every month (2018). <a href="https://venturebeat.com/ai/pinterest-lens-sees-600-million-visual-searches-every-month/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://venturebeat.com/ai/pinterest-lens-sees-600-million-visual-searches-every-month/</a></p>
          
          <p>• Google Developers — Search Central Blog (2019): Helping publishers and users get more out of visual searches on Google Images with AMP. <a href="https://developers.google.com/search/blog/2019/07/helping-publishers-and-users-get-more" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/search/blog/2019/07/helping-publishers-and-users-get-more</a></p>
          
          <p>• Backlinko — Voice Search SEO Study: Results From 10k Voice Searches. <a href="https://backlinko.com/voice-search-seo-study" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://backlinko.com/voice-search-seo-study</a></p>
          
          <p>• Stephan Spencer — Want to Be the Answer People Hear on Google Voice Search? Featured Snippets Are the Key. <a href="https://www.stephanspencer.com/voice-search-featured-snippets/" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.stephanspencer.com/voice-search-featured-snippets/</a></p>
          
          <p>• ORR Consulting — Why You Can't Ignore Visual Search: 62% of Millennials Prefer It Over Text-Based Search. <a href="https://www.orr-consulting.com/post/why-you-can-t-ignore-visual-search-62-of-millennials-prefer-it-over-text-based-search" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://www.orr-consulting.com/post/why-you-can-t-ignore-visual-search-62-of-millennials-prefer-it-over-text-based-search</a></p>
          
          <p>• Content Marketing Institute — Robert Rose (12-02-2025): Answer Engine Optimization Is a Familiar Trap. <a href="https://contentmarketinginstitute.com/seo-for-content/answer-engine-optimization" class="text-purple hover:underline" target="_blank" rel="noopener noreferrer">https://contentmarketinginstitute.com/seo-for-content/answer-engine-optimization</a></p>
        </div>
      </section>
                <p class="mb-0">El SEO no es humo. El humo son los atajos que nos quieren vender disfrazados de revoluciones. La única revolución real es volver a lo esencial: conocer a tu audiencia, crear para ella, ser más útil, más claro y más confiable que la competencia.</p>
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
            Referencias de investigación
          </h3>
          <div class="grid gap-4">
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Google Ads & Commerce Blog</h4>
                <p class="text-sm mb-2"><a href="https://blog.google/products/ads-commerce/google-lens-ai-overviews-ads-marketers/" class="text-teal hover:underline" target="_blank" rel="noopener noreferrer">Google Lens and AI Overviews: New ways for marketers to reach customers</a></p>
                <p class="text-xs text-muted-foreground">Shashi Thakur (03-10-2024)</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">DemandSage</h4>
                <p class="text-sm mb-2"><a href="https://www.demandsage.com/voice-search-statistics/" class="text-teal hover:underline" target="_blank" rel="noopener noreferrer">Voice Search Statistics 2025</a></p>
                <p class="text-xs text-muted-foreground">(24-07-2025)</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Search Engine Land</h4>
                <p class="text-sm mb-2"><a href="https://searchengineland.com/google-search-zero-click-study-2024-443869" class="text-teal hover:underline" target="_blank" rel="noopener noreferrer">Nearly 60% of Google searches end without a click in 2024</a></p>
                <p class="text-xs text-muted-foreground">Danny Goodwin (02-07-2024)</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-muted/20 border border-border rounded-xl">
              <div class="p-2 bg-teal/10 rounded-lg mt-1">
                <svg class="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-1">Content Marketing Institute</h4>
                <p class="text-sm mb-2"><a href="https://contentmarketinginstitute.com/seo-for-content/answer-engine-optimization" class="text-teal hover:underline" target="_blank" rel="noopener noreferrer">Answer Engine Optimization Is a Familiar Trap</a></p>
                <p class="text-xs text-muted-foreground">Robert Rose (12-02-2025)</p>
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
                <Link to="/contact">
                  Schedule your consultation
                </Link>
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