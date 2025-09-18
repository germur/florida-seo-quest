// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingDice from "@/components/FloatingDice";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceCityDetail from "./pages/ServiceCityDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import HowWeWork from "./pages/HowWeWork";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingDice />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Routes>
              {/* Trailing slash redirects - FIRST */}
              <Route path="/about/" element={<Navigate to="/about" replace />} />
              <Route path="/services/" element={<Navigate to="/services" replace />} />
              <Route path="/case-studies/" element={<Navigate to="/case-studies" replace />} />
              <Route path="/how-we-work/" element={<Navigate to="/how-we-work" replace />} />
              <Route path="/blog/" element={<Navigate to="/blog" replace />} />
              <Route path="/resources/" element={<Navigate to="/resources" replace />} />
              <Route path="/contact/" element={<Navigate to="/contact" replace />} />
              <Route path="/sitemap/" element={<Navigate to="/sitemap" replace />} />
              <Route path="/privacy-policy/" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms-of-service/" element={<Navigate to="/terms-of-service" replace />} />
              <Route path="/cookie-policy/" element={<Navigate to="/cookie-policy" replace />} />

              {/* Old blog post URL redirect */}
              <Route path="/blog/seo-no-murio-hype-estrategia" element={<Navigate to="/blog/seo-didnt-die-hype-strategy" replace />} />

              {/* Main routes */}
              <Route path="/" element={<Index />} />
              
              {/* Services SILO */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/:service" element={<ServiceDetail />} />
              <Route path="/services/:service/:city" element={<ServiceCityDetail />} />
              
              {/* Case Studies */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              
              {/* Content */}
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Resources */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/tools" element={<Resources />} />
              
              {/* Company */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              {/* Sitemap HTML */}
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <CookieNotice />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;