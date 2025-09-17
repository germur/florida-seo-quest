import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Calvo Creativo</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://calvocreativo.com/privacy-policy/" />
      </Helmet>

      <SEO page="privacyPolicy" />
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At Calvo Creativo, we collect information that you provide directly to us when:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You contact us through our forms</li>
                <li>You request a free consultation</li>
                <li>You subscribe to our blog or resources</li>
                <li>You interact with our social media</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Respond to your inquiries and provide our services</li>
                <li>Send you relevant information about digital marketing and SEO</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or transfer your personal information to third parties, 
                except when necessary to provide our services or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies and Similar Technologies</h2>
              <p>
                We use cookies to improve your experience on our website. 
                For more information, see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information (right to be forgotten)</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to provide 
                our services and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> info@calvocreativo.com</li>
                <li><strong>Website:</strong> calvocreativo.com</li>
              </ul>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              <strong>Effective Date:</strong> January 15, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
