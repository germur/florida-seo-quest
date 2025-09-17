import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Calvo Creativo</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://calvocreativo.com/terms-of-service/" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* ——— tu contenido tal cual ——— */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Calvo Creativo's services, you agree to be bound by these 
                Terms of Service. If you do not agree to any part of these terms, 
                you should not use our services.
              </p>
            </section>

            {/* (resto de secciones exactamente como las tienes) */}

            <p className="text-sm text-muted-foreground mt-8">
              <strong>Effective Date:</strong> January 15, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
