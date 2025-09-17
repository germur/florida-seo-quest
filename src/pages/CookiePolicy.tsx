import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookie Policy | Calvo Creativo</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://calvocreativo.com/cookie-policy/" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* tu contenido tal cual */}
            {/* ... */}
            <p className="text-sm text-muted-foreground mt-8">
              <strong>Effective Date:</strong> January 15, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
