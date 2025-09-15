import Header from "@/components/Header";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
                cuando visitas un sitio web. Nos ayudan a hacer que el sitio web funcione, 
                mejorar tu experiencia de navegación, y proporcionar información sobre cómo se utiliza el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Cookies Esenciales</h3>
                  <p>
                    Estas cookies son necesarias para que el sitio web funcione correctamente. 
                    No se pueden desactivar y generalmente solo se configuran en respuesta a 
                    acciones realizadas por ti.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Cookies de Rendimiento</h3>
                  <p>
                    Estas cookies nos permiten contar las visitas y fuentes de tráfico para 
                    medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué 
                    páginas son más populares y cómo se mueven los visitantes por el sitio.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Cookies de Funcionalidad</h3>
                  <p>
                    Estas cookies permiten que el sitio web proporcione funcionalidad y 
                    personalización mejoradas. Pueden ser establecidas por nosotros o por 
                    proveedores externos cuyos servicios hemos agregado a nuestras páginas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Cookies de Marketing</h3>
                  <p>
                    Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros 
                    socios publicitarios. Pueden ser utilizadas por esas empresas para crear un 
                    perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies de Terceros</h2>
              <p className="mb-4">También utilizamos servicios de terceros que pueden establecer cookies:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
                <li><strong>Google Ads:</strong> Para remarketing y publicidad dirigida</li>
                <li><strong>Facebook Pixel:</strong> Para seguimiento de conversiones y publicidad</li>
                <li><strong>LinkedIn Analytics:</strong> Para medir el rendimiento de contenido profesional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Gestión de Cookies</h2>
              <p className="mb-4">
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas 
                las cookies que ya están en tu dispositivo y puedes configurar la mayoría de 
                los navegadores para evitar que se coloquen.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Configuración del Navegador</h3>
                  <p>
                    La mayoría de los navegadores web te permiten controlar las cookies a través 
                    de la configuración. Para encontrar cómo hacer esto en tu navegador particular, 
                    consulta la función de ayuda de tu navegador.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Herramientas de Exclusión</h3>
                  <p>También puedes usar estas herramientas para optar por no recibir cookies de marketing:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Google Ads: <a href="https://adssettings.google.com/" className="text-primary hover:underline">Google Ad Settings</a></li>
                    <li>Facebook: <a href="https://www.facebook.com/ads/preferences/" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Consentimiento</h2>
              <p>
                Al continuar navegando en nuestro sitio web, consientes el uso de cookies de 
                acuerdo con esta política. Puedes retirar tu consentimiento en cualquier momento 
                modificando la configuración de tu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Duración de las Cookies</h2>
              <p className="mb-4">Las cookies que utilizamos tienen diferentes duraciones:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Cookies de Sesión:</strong> Se eliminan cuando cierras tu navegador</li>
                <li><strong>Cookies Persistentes:</strong> Permanecen en tu dispositivo durante un período determinado (generalmente hasta 2 años)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios 
                en nuestras prácticas o por otras razones operativas, legales o reglamentarias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
              <p>
                Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@calvocreativo.com<br />
                <strong>Teléfono:</strong> +57 304 680 7443<br />
                <strong>Dirección:</strong> Medellín, Colombia
              </p>
            </section>

            <section className="text-sm text-muted-foreground">
              <p><strong>Última actualización:</strong> Septiembre 2024</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;