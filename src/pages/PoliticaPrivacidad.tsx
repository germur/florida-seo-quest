import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Mail, Shield, Database, Eye, UserCheck, FileText } from "lucide-react";

const PoliticaPrivacidad = () => {
  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="privacyPolicy" 
        customTitle="Política de Privacidad | Calvo Creativo"
        customDescription="Conoce cómo Calvo Creativo protege y maneja tu información personal. Transparencia total en el manejo de datos."
        customCanonical="https://calvocreativo.com/es/politica-de-privacidad"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-shield/20 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Tu privacidad es fundamental. Aquí te explicamos cómo manejamos y protegemos tu información.
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
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Introducción</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En Calvo Creativo ("nosotros", "nuestro" o "la empresa"), respetamos tu privacidad y estamos comprometidos 
                a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, 
                compartimos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Información que Recopilamos</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Información que Proporcionas Voluntariamente</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Nombre y información de contacto cuando solicitas una consulta</li>
                <li>Dirección de email cuando te suscribes a nuestro newsletter</li>
                <li>Información de tu empresa y proyecto cuando solicitas nuestros servicios</li>
                <li>Comentarios, preguntas o feedback que nos envíes</li>
                <li>Información que proporcionas en formularios de contacto</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">Información Recopilada Automáticamente</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Dirección IP y ubicación geográfica aproximada</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Enlaces en los que haces clic</li>
                <li>Fecha y hora de tu visita</li>
                <li>Sitio web desde el cual llegaste a nuestro sitio</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">Cookies y Tecnologías Similares</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio 
                y personalizar el contenido. Puedes controlar las cookies a través de la configuración de tu navegador.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Cómo Utilizamos Tu Información</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li><strong>Proveer nuestros servicios:</strong> Responder a tus consultas y proporcionar servicios de SEO</li>
                <li><strong>Comunicación:</strong> Enviarte información sobre nuestros servicios, actualizaciones y newsletters</li>
                <li><strong>Mejora del sitio:</strong> Analizar cómo se utiliza nuestro sitio para mejorarlo</li>
                <li><strong>Personalización:</strong> Adaptar el contenido y las ofertas a tus intereses</li>
                <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias</li>
                <li><strong>Seguridad:</strong> Proteger contra fraude, abuso y actividades maliciosas</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Compartición de Información</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                No vendemos, alquilamos o comercializamos tu información personal. Podemos compartir tu información 
                en las siguientes circunstancias limitadas:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li><strong>Proveedores de servicios:</strong> Con terceros que nos ayudan a operar nuestro negocio (hosting, analytics, email marketing)</li>
                <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o proceso legal</li>
                <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                <li><strong>Con tu consentimiento:</strong> Cuando tengas tu permiso explícito</li>
              </ul>

              <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Compromiso de Transparencia</h3>
                <p className="text-muted-foreground text-sm">
                  Todos nuestros proveedores de servicios están contractualmente obligados a proteger tu información 
                  y solo pueden usarla para los propósitos específicos que les autorizamos.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Seguridad de los Datos</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger tu información:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Encriptación SSL/TLS para todas las transmisiones de datos</li>
                <li>Acceso restringido a información personal solo a personal autorizado</li>
                <li>Sistemas de monitoreo y detección de intrusiones</li>
                <li>Actualizaciones regulares de seguridad y parches</li>
                <li>Copias de seguridad regulares y planes de recuperación</li>
              </ul>

              <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-xl p-6">
                <p className="text-muted-foreground text-sm">
                  <strong>Importante:</strong> Aunque implementamos medidas de seguridad robustas, ningún sistema es 100% seguro. 
                  Te recomendamos también tomar precauciones para proteger tu información personal.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Tus Derechos</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dependiendo de tu ubicación, puedes tener los siguientes derechos respecto a tu información personal:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li><strong>Acceso:</strong> Solicitar una copia de la información personal que tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Solicitar corrección de información inexacta o incompleta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información personal</li>
                <li><strong>Portabilidad:</strong> Solicitar una copia de tus datos en formato estructurado</li>
                <li><strong>Objeción:</strong> Oponerte al procesamiento de tu información para ciertos propósitos</li>
                <li><strong>Restricción:</strong> Solicitar la limitación del procesamiento de tus datos</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Para ejercer estos derechos, contáctanos en{' '}
                <a href="mailto:rogermur1990@gmail.com" className="text-teal hover:underline">
                  rogermur1990@gmail.com
                </a>
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Retención de Datos</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conservamos tu información personal solo durante el tiempo necesario para:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                <li>Proporcionar los servicios que solicitas</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
                <li>Mejorar nuestros servicios y operaciones</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Cuando ya no necesitemos tu información, la eliminaremos de manera segura o la anonimizaremos 
                para que no pueda identificarte.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Cambios a Esta Política</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras 
                prácticas o por razones operativas, legales o regulatorias.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Te notificaremos sobre cambios significativos publicando la política actualizada en nuestro sitio web 
                y actualizando la fecha de "última actualización". Te recomendamos revisar esta política periódicamente.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Contacto</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o 
                el manejo de tu información personal, puedes contactarnos:
              </p>
              
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:rogermur1990@gmail.com" className="text-teal hover:underline">rogermur1990@gmail.com</a></p>
                <p><strong>Empresa:</strong> Calvo Creativo</p>
                <p><strong>Ubicación:</strong> Colombia (Servicios para Florida, USA)</p>
              </div>
              
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder a todas las consultas 
                  relacionadas con privacidad dentro de 48 horas hábiles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliticaPrivacidad;