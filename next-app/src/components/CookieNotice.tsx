'use client';

import Link from 'next/link';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <Card className="max-w-4xl mx-auto p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">🍪 Usamos Cookies para Mejorar tu Experiencia</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Utilizamos cookies esenciales para el funcionamiento del sitio y cookies de análisis para 
              mejorar nuestros servicios. También usamos cookies de marketing para personalizar tu experiencia. 
              Al hacer clic en "Aceptar", consientes el uso de todas las cookies.{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                Más información sobre cookies
              </Link>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={acceptCookies}
                className="bg-primary hover:bg-primary/90"
              >
                Aceptar Todas las Cookies
              </Button>
              
              <Button 
                variant="outline" 
                onClick={declineCookies}
                className="border-border"
              >
                Solo Cookies Esenciales
              </Button>
              
              <Link href="/cookie-policy">
                <Button variant="ghost" className="w-full sm:w-auto">
                  Configurar Cookies
                </Button>
              </Link>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={declineCookies}
            className="flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieNotice;