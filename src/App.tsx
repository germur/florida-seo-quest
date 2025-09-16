import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
// Spanish pages
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import Recursos from "./pages/Recursos";
import ServiciosEs from "./pages/ServiciosEs";
import CasosDeExitoEs from "./pages/CasosDeExitoEs";
import ComoTrabajamosEs from "./pages/ComoTrabajamosEs";
import BlogEs from "./pages/BlogEs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <FloatingDice />
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <Routes>
                {/* English Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:service" element={<ServiceDetail />} />
                <Route path="/services/:service/:city" element={<ServiceCityDetail />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/tools" element={<Resources />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Spanish Routes */}
                <Route path="/es" element={<Index />} />
                <Route path="/es/servicios" element={<ServiciosEs />} />
                <Route path="/es/servicios/:service" element={<ServiceDetail />} />
                <Route path="/es/servicios/:service/:city" element={<ServiceCityDetail />} />
                <Route path="/es/casos-de-exito" element={<CasosDeExitoEs />} />
                <Route path="/es/casos-de-exito/:slug" element={<CaseStudyDetail />} />
                <Route path="/es/como-trabajamos" element={<ComoTrabajamosEs />} />
                <Route path="/es/blog" element={<BlogEs />} />
                <Route path="/es/blog/:slug" element={<BlogPost />} />
                <Route path="/es/recursos" element={<Recursos />} />
                <Route path="/es/herramientas" element={<Recursos />} />
                <Route path="/es/acerca-de" element={<AcercaDe />} />
                <Route path="/es/contacto" element={<Contacto />} />
                <Route path="/es/politica-de-privacidad" element={<PrivacyPolicy />} />
                <Route path="/es/terminos-de-servicio" element={<TermsOfService />} />
                <Route path="/es/politica-de-cookies" element={<CookiePolicy />} />
                <Route path="/es/mapa-del-sitio" element={<Sitemap />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <CookieNotice />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
