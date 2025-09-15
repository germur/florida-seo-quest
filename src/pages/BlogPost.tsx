import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Calendar, List, User, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

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
            <div class="p-2 bg-teal/10 rounded-lg">
              <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            Plugin Dependency and Hidden Licensing Costs
          </h2>
          <p class="text-lg leading-relaxed mb-6">Another feature of WordPress is that its flexibility comes largely from plugins. The WordPress core provides basic features, but for almost anything extra — contact forms, advanced galleries, online stores, SEO optimization, backups, social media integration, etc. — additional plugins are needed. In the "traditional" WordPress environment you practically live in the <strong class="text-teal">"City of Plugins,"</strong> as there are thousands available, and you end up installing one for every feature you need.</p>
          
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
      title: "SEO no murió: del hype a la estrategia que sí funciona",
      date: "2025-01-15",
      readTime: "12 min",
      category: "SEO Strategy",
      tags: ["SEO Myths", "Voice Search", "Visual Search", "AEO", "SEO Strategy"],
      content: `
        <div class="table-of-contents bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 rounded-2xl p-8 mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-teal/10 rounded-lg">
              <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-primary mb-0">🧭 Índice</h2>
          </div>
          <nav class="space-y-2">
            <a href="#cuando-el-humo-se-disfraza-de-futuro" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Cuando el humo se disfrazó de futuro
            </a>
            <a href="#como-se-fabrica-el-hype" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Cómo se fabrica el hype (y por qué nos lo creemos)
            </a>
            <a href="#acronimos-que-venden-humo" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Acrónimos que venden humo: AEO y compañía
            </a>
            <a href="#predicciones-virales-vs-realidad" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Predicciones virales vs. realidad: el patrón que se repite
            </a>
            <a href="#lo-que-si-sirve" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Lo que sí sirve (y cuándo)
            </a>
            <a href="#la-regla-que-google-no-ha-cambiado" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              La regla que Google no ha cambiado en 20 años
            </a>
            <a href="#innovacion-real-o-espejismo" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              ¿Innovación real o espejismo de marketing?
            </a>
            <a href="#voz-promesas-gigantes" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Voz: promesas gigantes, impacto limitado
            </a>
            <a href="#busqueda-visual" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Búsqueda visual: revolución parcial, oportunidad real
            </a>
            <a href="#aeo-revolucion-costosa" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              AEO: ¿revolución costosa o etiqueta bonita?
            </a>
            <a href="#conclusion" class="flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors p-2 rounded-lg hover:bg-teal/5">
              <span class="w-2 h-2 bg-teal/30 rounded-full"></span>
              Conclusión: el SEO que sí funciona en 2025 (y en 2030)
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
          <p class="text-lg leading-relaxed mb-6">En 2016, Gartner lanzó un titular que corrió como pólvora: <strong class="text-teal">"Para 2020, el 30% de las búsquedas serán sin pantalla."</strong> Un año después, ComScore encendió más fuego: <strong class="text-teal">"La mitad de las búsquedas se harán por voz."</strong></p>
          
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
          
          <p class="text-lg leading-relaxed mb-6">El mecanismo es siempre el mismo:</p>
          
          <div class="grid gap-6 mb-8">
            <div class="flex items-start gap-4 p-4 bg-orange/5 border-l-4 border-orange rounded-r-lg">
              <div class="p-2 bg-orange/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-orange mb-2">1. Una consultora publica un estudio atractivo</h4>
                <p class="text-sm mb-0">Con proyecciones que suelen ser extrapolaciones lineales o basadas en muestras muy específicas.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-yellow/5 border-l-4 border-yellow rounded-r-lg">
              <div class="p-2 bg-yellow/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-yellow mb-2">2. Los medios lo amplifican sin contexto</h4>
                <p class="text-sm mb-0">Los titulares se vuelven más dramáticos con cada republication: "El 50% se convierte en "La mayoría", las "proyecciones" en "hechos".</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-green/5 border-l-4 border-green rounded-r-lg">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-green mb-2">3. Los "gurús" lo convierten en urgencia</h4>
                <p class="text-sm mb-0">Conferencias, cursos, certificaciones. El FOMO (Fear Of Missing Out) es el combustible perfecto.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 p-4 bg-blue/5 border-l-4 border-blue rounded-r-lg">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue mb-2">4. Las empresas invierten en la "solución"</h4>
                <p class="text-sm mb-0">Y cuando los resultados no llegan, la narrativa se mueve a la próxima gran cosa.</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple/10 to-pink/10 border-l-4 border-purple p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-purple mb-2">💡 El problema de fondo</p>
                <p class="mb-0">En un mundo donde la atención es el recurso más escaso, las predicciones <em>moderadas</em> no generan clics, conferencias, ni presupuestos. <strong>El espectáculo siempre gana.</strong></p>
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
          
          <p class="text-lg leading-relaxed mb-6">Cada "revolución" viene con su paquete de términos técnicos que suenan profesionales y sofisticados. Veamos algunos:</p>

          <div class="grid gap-6 mb-8">
            <div class="flex items-start gap-4 p-4 bg-purple/5 border border-purple/20 rounded-xl">
              <div class="p-2 bg-purple/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-purple mb-2">AEO (Answer Engine Optimization)</h4>
                <p class="text-sm mb-2">En teoría: "Optimizar para que AI responda tus consultas."</p>
                <p class="text-sm mb-0 text-muted-foreground">En la práctica: <strong>hacer buen SEO tradicional con structured data.</strong> Misma receta, nueva etiqueta.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-blue mb-2">VEO (Voice Engine Optimization)</h4>
              <p class="text-sm mb-2">En teoría: "Revoluciona tu estrategia para búsquedas por voz."</p>
              <p class="text-sm mb-0 text-muted-foreground">En la práctica: <strong>escribir content conversacional y optimizar snippets.</strong> Algo que ya hacíamos.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 bg-teal/5 border border-teal/20 rounded-xl">
            <div class="p-2 bg-teal/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-teal mb-2">VSEO (Visual Search Engine Optimization)</h4>
              <p class="text-sm mb-2">En teoría: "El futuro es visual, optimiza tus imágenes diferente."</p>
              <p class="text-sm mb-0 text-muted-foreground">En la práctica: <strong>alt text descriptivos, nombres de archivos relevantes, structured data.</strong> Lo mismo de siempre.</p>
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
              <p class="font-semibold text-yellow mb-2">⚠️ La trampa está en el packaging</p>
              <p class="mb-0">Lo que antes se llamaba "SEO bien hecho" ahora se vende como una disciplina completamente nueva. <strong>Mismo vino, botella más cara.</strong></p>
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
        
        <p class="text-lg leading-relaxed mb-8">En los últimos 10 años, hemos visto el mismo patrón una y otra vez:</p>

        <div class="space-y-6 mb-8">
          <div class="flex gap-6 p-6 bg-red/5 border border-red/20 rounded-xl">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center">
                <span class="text-red font-bold text-xl">2017</span>
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex items-center gap-3 mb-2">
                <h4 class="font-semibold text-red">Predicción viral</h4>
                <span class="px-2 py-1 bg-red/10 text-red text-xs rounded-full">ComScore</span>
              </div>
              <p class="mb-2">"50% de las búsquedas serán por voz en 2020"</p>
              <div class="mt-4 p-3 bg-white/50 rounded-lg">
                <p class="font-semibold text-muted-foreground text-sm mb-1">Realidad 2025:</p>
                <p class="text-sm">Menos del 20% usa voz de forma habitual, y principalmente para tareas básicas como música o clima.</p>
              </div>
            </div>
          </div>

          <div class="flex gap-6 p-6 bg-orange/5 border border-orange/20 rounded-xl">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                <span class="text-orange font-bold text-xl">2019</span>
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex items-center gap-3 mb-2">
                <h4 class="font-semibold text-orange">Predicción viral</h4>
                <span class="px-2 py-1 bg-orange/10 text-orange text-xs rounded-full">Varios analistas</span>
              </div>
              <p class="mb-2">"Las búsquedas visuales dominarán el e-commerce"</p>
              <div class="mt-4 p-3 bg-white/50 rounded-lg">
                <p class="font-semibold text-muted-foreground text-sm mb-1">Realidad 2025:</p>
                <p class="text-sm">La búsqueda visual existe, pero sigue siendo nicho. La mayoría busca con palabras.</p>
              </div>
            </div>
          </div>

          <div class="flex gap-6 p-6 bg-yellow/5 border border-yellow/20 rounded-xl">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-yellow/10 rounded-full flex items-center justify-center">
                <span class="text-yellow font-bold text-xl">2020</span>
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex items-center gap-3 mb-2">
                <h4 class="font-semibold text-yellow">Predicción viral</h4>
                <span class="px-2 py-1 bg-yellow/10 text-yellow text-xs rounded-full">Múltiples fuentes</span>
              </div>
              <p class="mb-2">"COVID acelerará la transformación digital: todo será diferente"</p>
              <div class="mt-4 p-3 bg-white/50 rounded-lg">
                <p class="font-semibold text-muted-foreground text-sm mb-1">Realidad 2025:</p>
                <p class="text-sm">Más tráfico online, sí. Pero las reglas del SEO básicamente no cambiaron.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue/10 to-purple/10 border-l-4 border-blue p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-blue/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-blue mb-2">📊 Lo que revelan los datos</p>
              <p class="mb-0">Cada "revolución" resultó siendo una <strong>evolución gradual</strong> en nichos específicos, no el cambio disruptivo que vendían los titulares.</p>
            </div>
          </div>
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
        
        <p class="text-lg leading-relaxed mb-8">No todo es humo. Hay situaciones específicas donde estas "innovaciones" sí generan resultados reales:</p>

        <div class="grid gap-6 mb-8">
          <div class="p-6 bg-green/5 border border-green/20 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-green mb-2">Negocios locales + Búsqueda por voz</h4>
                <p class="mb-3">"Oye Google, ¿dónde hay un dentista cerca?" sí genera tráfico real para consultorios, restaurantes, talleres.</p>
                <div class="bg-white/50 p-3 rounded-lg">
                  <p class="text-sm font-semibold mb-1">Qué optimizar:</p>
                  <ul class="text-sm space-y-1">
                    <li>• Google Business Profile completo y actualizado</li>
                    <li>• FAQ estructuradas que respondan "cómo llegar", "horarios", "servicios"</li>
                    <li>• Reseñas consistentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 bg-blue/5 border border-blue/20 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-blue/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-blue mb-2">E-commerce + Búsqueda visual</h4>
                <p class="mb-3">En moda y decoración, la gente sí busca "productos similares a esta imagen". Pero es un canal adicional, no reemplazo.</p>
                <div class="bg-white/50 p-3 rounded-lg">
                  <p class="text-sm font-semibold mb-1">Qué optimizar:</p>
                  <ul class="text-sm space-y-1">
                    <li>• Imágenes de alta calidad con metadatos correctos</li>
                    <li>• Alt text descriptivos y específicos</li>
                    <li>• Schema markup para productos</li>
                  </ul>
                </div>
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
                <h4 class="font-semibold text-purple mb-2">Contenido educativo + AI Overviews</h4>
                <p class="mb-3">Si produces contenido que realmente responde preguntas, las AI Overview pueden amplificar tu alcance.</p>
                <div class="bg-white/50 p-3 rounded-lg">
                  <p class="text-sm font-semibold mb-1">Qué optimizar:</p>
                  <ul class="text-sm space-y-1">
                    <li>• Respuestas completas y bien estructuradas</li>
                    <li>• Datos actualizados y fuentes confiables</li>
                    <li>• Formato que facilite la extracción (listas, tablas)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-teal/10 to-green/10 border-l-4 border-teal p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-teal/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-teal mb-2">✅ La clave del éxito</p>
              <p class="mb-0">Estas tecnologías funcionan cuando <strong>complementan</strong> una estrategia SEO sólida, no cuando la reemplazan. Son herramientas adicionales para contextos específicos.</p>
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
        
        <p class="text-lg leading-relaxed mb-8">En medio de todo el ruido sobre supuestas revoluciones, hay una constante que Google jamás ha modificado desde sus inicios:</p>

        <div class="bg-gradient-to-br from-teal/10 to-blue/10 border-2 border-teal/20 rounded-2xl p-8 mb-8 text-center">
          <div class="mb-6">
            <div class="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
          </div>
          <blockquote class="text-2xl font-bold text-primary mb-4">
            "Organizar la información del mundo y hacerla universalmente accesible y útil"
          </blockquote>
          <p class="text-teal font-semibold">— Misión de Google desde 1998</p>
        </div>

        <p class="text-lg leading-relaxed mb-6">Todo lo demás son medios, no el fin. Y para cumplir esa misión, Google evalúa contenido basándose en tres pilares que no han cambiado:</p>

        <div class="grid gap-6 mb-8">
          <div class="flex items-start gap-4 p-6 bg-green/5 border border-green/20 rounded-xl">
            <div class="p-3 bg-green/10 rounded-lg mt-1">
              <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-semibold text-green mb-3">1. Relevancia</h4>
              <p class="mb-2">¿Tu contenido responde realmente lo que el usuario busca?</p>
              <p class="text-sm text-muted-foreground">No importa si es voz, texto, imagen o AI: la pregunta sigue siendo la misma.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-blue/5 border border-blue/20 rounded-xl">
            <div class="p-3 bg-blue/10 rounded-lg mt-1">
              <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-semibold text-blue mb-3">2. Autoridad</h4>
              <p class="mb-2">¿Eres una fuente confiable sobre este tema?</p>
              <p class="text-sm text-muted-foreground">Experiencia, credibilidad, reconocimiento. Las métricas pueden evolucionar, el concepto no.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-purple/5 border border-purple/20 rounded-xl">
            <div class="p-3 bg-purple/10 rounded-lg mt-1">
              <svg class="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-semibold text-purple mb-3">3. Experiencia de usuario</h4>
              <p class="mb-2">¿Tu sitio es fácil, rápido y accesible?</p>
              <p class="text-sm text-muted-foreground">Desde dial-up hasta 5G, la velocidad siempre importó. Solo cambian los umbrales.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange/10 to-yellow/10 border-l-4 border-orange p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-orange/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-orange mb-2">💡 La realidad incómoda</p>
              <p class="mb-0">Mientras las agencias debaten sobre AEO vs VEO vs VSEO, <strong>los sitios que crecen son los que dominan estos tres fundamentos</strong>, independientemente de la tecnología del momento.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="innovacion-real-o-espejismo">
        <h2 class="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
          <div class="p-2 bg-yellow/10 rounded-lg">
            <svg class="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          ¿Innovación real o espejismo de marketing?
        </h2>
        
        <p class="text-lg leading-relaxed mb-8">Para separar la innovación real del hype, hagamos una evaluación práctica:</p>

        <div class="mb-8">
          <h3 class="text-xl font-semibold text-primary mb-6">📊 Test de realidad: Evalúa cualquier "nueva tendencia" con estas preguntas</h3>
          
          <div class="space-y-4">
            <div class="p-4 bg-muted/20 border border-border rounded-xl">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-teal/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-teal font-bold text-sm">1</span>
                </div>
                <div>
                  <p class="font-semibold text-primary mb-1">¿Hay datos de uso real (no proyecciones)?</p>
                  <p class="text-sm text-muted-foreground">Busca estadísticas de comportamiento actual, no predicciones de consultoras.</p>
                </div>
              </div>
            </div>

            <div class="p-4 bg-muted/20 border border-border rounded-xl">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-teal/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-teal font-bold text-sm">2</span>
                </div>
                <div>
                  <p class="font-semibold text-primary mb-1">¿Qué tan diferente es del SEO tradicional?</p>
                  <p class="text-sm text-muted-foreground">Si la "revolución" se reduce a hacer mejor lo que ya sabías, probablemente sea marketing.</p>
                </div>
              </div>
            </div>

            <div class="p-4 bg-muted/20 border border-border rounded-xl">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-teal/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-teal font-bold text-sm">3</span>
                </div>
                <div>
                  <p class="font-semibold text-primary mb-1">¿Aplica a tu industria específica?</p>
                  <p class="text-sm text-muted-foreground">Lo que funciona para e-commerce de moda no necesariamente sirve para SaaS B2B.</p>
                </div>
              </div>
            </div>

            <div class="p-4 bg-muted/20 border border-border rounded-xl">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-teal/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-teal font-bold text-sm">4</span>
                </div>
                <div>
                  <p class="font-semibold text-primary mb-1">¿Cuál es el ROI vs. esfuerzo invertido?</p>
                  <p class="text-sm text-muted-foreground">Una optimización que toma 40 horas pero genera 2% más tráfico no es estratégica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-red/10 to-purple/10 border-l-4 border-red p-6 rounded-r-lg">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-red/10 rounded-lg mt-1">
              <svg class="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-red mb-2">⚡ Regla práctica</p>
              <p class="mb-0">Si una "nueva técnica SEO" no puede demostrar resultados mensurables en tu contexto específico, <strong>probablemente sea mejor optimizar lo básico que ya sabes que funciona.</strong></p>
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
          
          <p class="leading-relaxed mb-8">Los titulares fueron tan virales que era imposible no sentir FOMO. ¿Qué empresa querría quedarse atrás? Agencias empezaron a vender "paquetes de Voice SEO". Consultores llenaron conferencias con slides que decían "El teclado morirá".</p>

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
          
          <p class="leading-relaxed mb-8">Cada vez la narrativa fue la misma: "El SEO murió, ahora todo es distinto." Pero si algo nos enseñan los datos, los fracasos y los espejismos, es que el SEO nunca murió.</p>

          <div class="bg-gradient-to-r from-green/10 to-teal/10 border-l-4 border-green p-6 my-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="p-2 bg-green/10 rounded-lg mt-1">
                <svg class="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-green mb-2">👉 Mensaje clave</p>
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
    },
    "topical-authority-2025": {
      title: "Topical Authority: Why It Wins in 2025",
      date: "2024-12-15",
      readTime: "8 min",
      category: "SEO Strategy",
      tags: ["Topical Authority", "SEO Strategy", "Content Architecture"],
      content: "<p>Content coming soon...</p>"
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
      
      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                to="/blog" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </nav>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-teal/10 text-teal rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('es-ES', { 
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

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-border rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-muted-foreground mb-6">
                Descubre cómo aplicar estas estrategias en tu negocio con una consulta personalizada.
              </p>
              <Button size="lg" className="mr-4" asChild>
                <Link to="/contact">
                  Agenda tu consulta
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">
                  Ver más artículos
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