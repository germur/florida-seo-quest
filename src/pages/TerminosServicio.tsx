import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { FileText, Shield, AlertCircle, Users, CheckCircle, XCircle, Mail } from "lucide-react";

const TerminosServicio = () => {
  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="termsOfService" 
        customTitle="Términos de Servicio | Calvo Creativo"
        customDescription="Conoce los términos y condiciones que rigen nuestros servicios de SEO y consultoría digital en Calvo Creativo."
        customCanonical="https://calvocreativo.com/es/terminos-de-servicio"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Términos de Servicio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Los términos y condiciones que rigen el uso de nuestros servicios y sitio web.
            </p>
            <div className="text-sm text-muted-foreground">
              Última actualización: 15 de marzo de 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Aceptación de los Términos</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Al acceder y utilizar el sitio web de Calvo Creativo o contratar nuestros servicios, 
                aceptas estar sujeto a estos Términos de Servicio ("Términos"). Si no estás de acuerdo 
                con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estos términos constituyen un acuerdo legal entre tú ("Cliente" o "Usuario") y 
                Calvo Creativo ("nosotros", "nuestro" o "la empresa").
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Descripción de Servicios</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calvo Creativo ofrece servicios de consultoría en SEO y marketing digital, que incluyen pero no se limitan a:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Consultoría SEO estratégica</li>
                <li>Servicios de storytelling digital</li>
                <li>Automatización SEO</li>
                <li>Consultoría de branding personal</li>
                <li>Auditorías técnicas de SEO</li>
                <li>Desarrollo de estrategias de contenido</li>
              </ul>

              <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-xl p-6">
                <p className="text-muted-foreground text-sm">
                  <strong>Importante:</strong> Los servicios específicos, entregables, cronogramas y precios 
                  se definirán en acuerdos separados o propuestas de trabajo específicas para cada cliente.
                </p>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Responsabilidades del Cliente</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para garantizar la calidad y efectividad de nuestros servicios, el cliente se compromete a:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Proporcionar información precisa y completa sobre su negocio y objetivos</li>
                <li>Facilitar acceso necesario a sitios web, cuentas y herramientas relevantes</li>
                <li>Responder de manera oportuna a solicitudes de información y feedback</li>
                <li>Revisar y aprobar entregables dentro de los plazos acordados</li>
                <li>Cumplir con los pagos según los términos acordados</li>
                <li>Notificar cambios significativos que puedan afectar el proyecto</li>
              </ul>

              <div className="bg-bright-orange/5 border border-bright-orange/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Colaboración Necesaria</h3>
                <p className="text-muted-foreground text-sm">
                  El éxito de los proyectos SEO requiere colaboración activa. Retrasos en la comunicación 
                  o provision de accesos pueden impactar los cronogramas y resultados del proyecto.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Términos de Pago</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Estructura de Pagos</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Los proyectos requieren un pago inicial del 50% antes del inicio</li>
                <li>El saldo restante se paga según hitos del proyecto o al finalizar</li>
                <li>Los servicios continuos se facturan mensualmente por adelantado</li>
                <li>Los pagos vencen dentro de 15 días de la fecha de facturación</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">Política de Retrasos</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Los pagos tardíos pueden resultar en suspensión temporal del servicio</li>
                <li>Se aplicará un cargo por mora del 1.5% mensual sobre saldos vencidos</li>
                <li>Los gastos de cobranza serán responsabilidad del cliente</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Propiedad Intelectual</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Trabajo Desarrollado</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Una vez completado el pago total, el cliente obtiene los derechos del trabajo específicamente 
                desarrollado para su proyecto, incluyendo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Contenido creado específicamente para el cliente</li>
                <li>Estrategias y recomendaciones personalizadas</li>
                <li>Materiales de entrega del proyecto</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">Metodologías y Herramientas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calvo Creativo retiene todos los derechos sobre:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Metodologías, frameworks y procesos propietarios</li>
                <li>Herramientas y software desarrollados internamente</li>
                <li>Know-how y experiencia acumulada</li>
                <li>Templates y recursos genéricos</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Confidencialidad</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ambas partes se comprometen a mantener la confidencialidad de:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Información estratégica y comercial sensible</li>
                <li>Datos financieros y de rendimiento</li>
                <li>Estrategias de marketing no públicas</li>
                <li>Información técnica propietaria</li>
                <li>Datos de clientes y usuarios finales</li>
              </ul>

              <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Caso Studies y Referencias</h3>
                <p className="text-muted-foreground text-sm">
                  Con autorización previa del cliente, podemos usar el proyecto como caso de estudio, 
                  omitiendo información confidencial y enfocándonos en metodologías y resultados generales.
                </p>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-red-500" />
                <h2 className="text-2xl font-bold text-primary">Garantías y Exenciones</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Nuestro Compromiso</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos comprometemos a proporcionar servicios profesionales usando mejores prácticas de la industria 
                y nuestra experiencia comprobada.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Limitaciones Importantes</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>No garantizamos rankings específicos en buscadores</li>
                <li>Los algoritmos de buscadores cambian constantemente</li>
                <li>Resultados dependen de factores externos no controlables</li>
                <li>Competidores pueden implementar estrategias similares</li>
                <li>Cambios en el negocio del cliente pueden afectar resultados</li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Importante</h3>
                <p className="text-muted-foreground text-sm">
                  El SEO es una disciplina de resultados a mediano y largo plazo. Los resultados 
                  típicos se observan entre 3-6 meses, pero pueden variar según la industria, 
                  competencia y estado inicial del sitio web.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Limitación de Responsabilidad</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                La responsabilidad total de Calvo Creativo por cualquier reclamo relacionado con nuestros 
                servicios está limitada al monto total pagado por el cliente durante los 12 meses anteriores 
                al evento que origina el reclamo.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                En ningún caso seremos responsables por:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Daños indirectos, incidentales o consecuenciales</li>
                <li>Pérdida de beneficios o ingresos</li>
                <li>Pérdida de datos o información</li>
                <li>Interrupción del negocio</li>
                <li>Cambios en algoritmos de buscadores</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Terminación</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Terminación por Parte del Cliente</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Puede terminar servicios continuos con 30 días de aviso por escrito</li>
                <li>Proyectos específicos no pueden cancelarse una vez iniciados</li>
                <li>Los pagos realizados por trabajo completado no son reembolsables</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">Terminación por Nuestra Parte</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Podemos terminar por incumplimiento de pago después de 30 días de vencimiento</li>
                <li>Podemos terminar por violación material de estos términos</li>
                <li>Se proporcionará todo el trabajo completado hasta la fecha de terminación</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Ley Aplicable</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Estos términos se rigen por las leyes de Colombia. Cualquier disputa se resolverá 
                preferentemente mediante mediación. Si la mediación no es exitosa, las disputas 
                se someterán a arbitraje o a los tribunales competentes de Colombia.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Modificaciones</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor 30 días después de ser publicadas en nuestro sitio web.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                El uso continuado de nuestros servicios después de la publicación de cambios 
                constituye tu aceptación de los términos modificados.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Contacto</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para preguntas sobre estos Términos de Servicio o para discutir los términos 
                específicos de un proyecto, puedes contactarnos:
              </p>
              
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:rogermur1990@gmail.com" className="text-teal hover:underline">rogermur1990@gmail.com</a></p>
                <p><strong>Empresa:</strong> Calvo Creativo</p>
                <p><strong>Ubicación:</strong> Colombia (Servicios para Florida, USA)</p>
              </div>
              
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Respuesta garantizada:</strong> Respondemos todas las consultas contractuales 
                  dentro de 24 horas hábiles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TerminosServicio;