import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Términos de Servicio</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar los servicios de Calvo Creativo, aceptas estar sujeto a estos 
                Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, 
                no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Descripción de Servicios</h2>
              <p className="mb-4">Calvo Creativo ofrece servicios de:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Optimización para motores de búsqueda (SEO)</li>
                <li>Marketing de contenidos</li>
                <li>Publicidad digital (Google Ads, Facebook Ads)</li>
                <li>Consultoría en marketing digital</li>
                <li>Desarrollo web y optimización de conversiones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades del Cliente</h2>
              <p className="mb-4">Como cliente, te comprometes a:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Proporcionar información precisa y completa</li>
                <li>Colaborar activamente en el desarrollo de los proyectos</li>
                <li>Cumplir con los plazos de pago acordados</li>
                <li>Respetar la propiedad intelectual y derechos de autor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Pagos y Facturación</h2>
              <p>
                Los pagos se realizarán según los términos acordados en cada proyecto específico. 
                Los pagos atrasados pueden resultar en la suspensión temporal de los servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
              <p>
                Todo el contenido, estrategias y materiales desarrollados por Calvo Creativo 
                permanecen como propiedad intelectual hasta el pago completo del proyecto. 
                Una vez pagado, los derechos se transfieren al cliente según lo acordado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitación de Responsabilidad</h2>
              <p>
                Calvo Creativo no será responsable por daños indirectos, incidentales o 
                consecuenciales. Nuestra responsabilidad máxima se limita al monto pagado 
                por los servicios en cuestión.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Garantías y Resultados</h2>
              <p>
                Si bien trabajamos diligentemente para lograr los mejores resultados posibles, 
                no podemos garantizar rankings específicos en motores de búsqueda ni resultados 
                de marketing específicos debido a factores fuera de nuestro control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Terminación</h2>
              <p>
                Cualquiera de las partes puede terminar los servicios con notificación previa 
                por escrito. Los trabajos completados hasta la fecha de terminación serán facturados 
                según corresponda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Ley Aplicable</h2>
              <p>
                Estos términos se regirán por las leyes de Colombia. Cualquier disputa será 
                resuelta en los tribunales competentes de Medellín, Colombia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
              <p>
                Para preguntas sobre estos Términos de Servicio, contáctanos:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@calvocreativo.com<br />
                <strong>Teléfono:</strong> +57 304 680 7443<br />
                <strong>Dirección:</strong> Medellín, Colombia
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación.
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

export default TermsOfService;