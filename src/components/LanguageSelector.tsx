import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm xl:text-base">
        <Globe className="h-4 w-4 mr-1" />
        {language === 'es' ? 'ES' : 'EN'}
      </button>
      <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          <button
            onClick={() => setLanguage('en')}
            className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
              language === 'en' 
                ? 'text-primary bg-secondary/50' 
                : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
              language === 'es' 
                ? 'text-primary bg-secondary/50' 
                : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
            }`}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;