import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
              <p className="mb-4">
                En Calvo Creativo, recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Te pones en contacto con nosotros a través de nuestros formularios</li>
                <li>Solicitas una consulta gratuita</li>
                <li>Te suscribes a nuestro blog o recursos</li>
                <li>Interactúas con nuestras redes sociales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Cómo Utilizamos tu Información</h2>
              <p className="mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Responder a tus consultas y proporcionarte nuestros servicios</li>
                <li>Enviarte información relevante sobre marketing digital y SEO</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Compartir Información</h2>
              <p>
                No vendemos, comercializamos ni transferimos tu información personal a terceros, 
                excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
                Para más información, consulta nuestra Política de Cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
                proteger tu información personal contra acceso no autorizado, alteración, 
                divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Tus Derechos</h2>
              <p className="mb-4">Tienes derecho a:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos o incompletos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Portabilidad de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@calvocreativo.com<br />
                <strong>Teléfono:</strong> +57 304 680 7443<br />
                <strong>Dirección:</strong> Medellín, Colombia
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. 
                Te notificaremos sobre cualquier cambio publicando la nueva política en esta página.
              </p>
              <p className="mt-4">
                <strong>Última actualización:</strong> Septiembre 2024
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;