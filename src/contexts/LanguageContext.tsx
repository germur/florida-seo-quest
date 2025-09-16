import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
  getCurrentPath: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
    'nav.howWeWork': 'How We Work',
    'nav.blog': 'Blog',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Common
    'common.readMore': 'Read More',
    'common.getStarted': 'Get Started',
    'common.contactUs': 'Contact Us',
    'common.learnMore': 'Learn More',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.caseStudies': 'Casos de Éxito',
    'nav.howWeWork': 'Cómo Trabajamos',
    'nav.blog': 'Blog',
    'nav.resources': 'Recursos',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Common
    'common.readMore': 'Leer Más',
    'common.getStarted': 'Comenzar',
    'common.contactUs': 'Contáctanos',
    'common.learnMore': 'Saber Más',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect language from URL
  const getLanguageFromPath = (pathname: string): Language => {
    return pathname.startsWith('/es/') || pathname === '/es' ? 'es' : 'en';
  };

  const [language, setLanguageState] = useState<Language>(() => {
    return getLanguageFromPath(location.pathname);
  });

  // Update language when route changes
  useEffect(() => {
    const newLang = getLanguageFromPath(location.pathname);
    if (newLang !== language) {
      setLanguageState(newLang);
    }
  }, [location.pathname, language]);

  const setLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (newLang === 'es') {
      // Convert to Spanish path
      if (currentPath.startsWith('/es/')) {
        return; // Already in Spanish
      } else if (currentPath === '/') {
        newPath = '/es';
      } else {
        newPath = `/es${currentPath}`;
      }
    } else {
      // Convert to English path
      if (currentPath.startsWith('/es/')) {
        newPath = currentPath.replace('/es', '') || '/';
      } else if (currentPath === '/es') {
        newPath = '/';
      } else {
        return; // Already in English
      }
    }

    navigate(newPath);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const getLocalizedPath = (path: string): string => {
    if (language === 'es') {
      return path === '/' ? '/es' : `/es${path}`;
    }
    return path;
  };

  const getCurrentPath = (): string => {
    const path = location.pathname;
    if (language === 'es') {
      return path.replace('/es', '') || '/';
    }
    return path;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      getLocalizedPath,
      getCurrentPath
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};