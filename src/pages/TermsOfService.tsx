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
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Calvo Creativo's services, you agree to be bound by these
                Terms of Service. If you do not agree to any part of these terms,
                you should not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="mb-4">Calvo Creativo offers services including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Content Marketing</li>
                <li>Digital Advertising (Google Ads, Facebook Ads)</li>
                <li>Digital Marketing Consulting</li>
                <li>Web Development and Conversion Optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Actively collaborate in project development</li>
                <li>Meet agreed payment deadlines</li>
                <li>Respect intellectual property and copyright</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payments and Billing</h2>
              <p>
                Payments will be made according to the terms agreed upon for each specific project.
                Late payments may result in temporary suspension of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p>
                All content, strategies, and materials created by Calvo Creativo remain our
                intellectual property until full payment is received. Upon payment completion,
                specified deliverables are transferred to the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitations of Liability</h2>
              <p>
                Calvo Creativo shall not be liable for indirect, incidental, special, or
                consequential damages resulting from the use of our services. Our liability
                is limited to the amount paid for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Service Guarantees</h2>
              <p>
                While we strive for excellence, digital marketing results can vary based on
                numerous factors beyond our control. We provide best effort services but
                cannot guarantee specific outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p>
                Either party may terminate services with 30 days written notice.
                Upon termination, payment is due for all work completed up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information and
                business strategies. This confidentiality continues beyond the termination
                of our service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Updates to Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time.
                Clients will be notified of significant changes via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with
                applicable international business law and dispute resolution practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us:</p>
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

export default TermsOfService;
