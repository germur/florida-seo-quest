import Header from "@/components/Header";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help us make the website work, improve your browsing experience, and provide 
                information about how the site is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function correctly. 
                    They cannot be disabled and are typically only set in response to 
                    actions you take that correspond to a service request.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can 
                    measure and improve the performance of our site. They help us know 
                    which pages are most and least popular and see how visitors move around the site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and 
                    personalization. They may be set by us or by third party providers whose 
                    services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
                  <p>
                    These cookies may be set through our site by our advertising partners. 
                    They may be used by those companies to build a profile of your interests 
                    and show you relevant adverts on other sites.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="mb-4">We also use third-party services that may set cookies:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Google Analytics:</strong> To understand website usage</li>
                <li><strong>Google Ads:</strong> For advertising purposes</li>
                <li><strong>Social Media:</strong> For social sharing functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies 
                that are already on your device and you can set most browsers to prevent them 
                from being placed.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Browser Controls:</h4>
                <p className="text-sm">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  However, if you limit the ability of websites to set cookies, you may worsen 
                  your overall user experience.
                </p>
              </div>

              <p className="mt-4">You can also use these tools to opt out of marketing cookies:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Your Online Choices (European Interactive Digital Advertising Alliance)</li>
                <li>Network Advertising Initiative (US)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Consent</h2>
              <p>
                By continuing to browse our website, you consent to our use of cookies in 
                accordance with this policy. You can withdraw your consent at any time by 
                adjusting your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookie Duration</h2>
              <p className="mb-4">The cookies we use have different durations:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (usually up to 2 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in 
                our practices or for other operational, legal, or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>If you have questions about our Cookie Policy, you can contact us:</p>
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

export default CookiePolicy;