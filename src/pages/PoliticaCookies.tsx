import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Cookie, Settings, Eye, BarChart3, Shield, CheckCircle, XCircle, Mail } from "lucide-react";

const PoliticaCookies = () => {
  return (
    <main className="min-h-screen pt-16">
      <SEO 
        page="cookiePolicy" 
        customTitle="Política de Cookies | Calvo Creativo"
        customDescription="Información sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web para mejorar tu experiencia."
        customCanonical="https://calvocreativo.com/es/politica-de-cookies"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange/20 rounded-2xl mb-6">
              <Cookie className="h-8 w-8 text-bright-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Información transparente sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.
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
            
            {/* What Are Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">¿Qué Son las Cookies?</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tablet o móvil) 
                cuando visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita, como tus preferencias 
                de idioma y otra configuración.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Las cookies pueden ser "de sesión" (se eliminan al cerrar el navegador) o "persistentes" 
                (permanecen en tu dispositivo por un período determinado).
              </p>

              <div className="bg-bright-orange/5 border border-bright-orange/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">¿Por Qué Utilizamos Cookies?</h3>
                <p className="text-muted-foreground text-sm">
                  Las cookies nos ayudan a entender cómo interactúas con nuestro sitio, mejorar tu experiencia, 
                  y proporcionar contenido más relevante. También nos permiten analizar el rendimiento del sitio 
                  y optimizar nuestros servicios.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Tipos de Cookies que Utilizamos</h2>
              </div>
              
              {/* Essential Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal" />
                  Cookies Esenciales
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no pueden desactivarse.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cookies de sesión para mantener tu navegación</li>
                  <li>Cookies de seguridad para prevenir ataques</li>
                  <li>Cookies de funcionalidad para recordar preferencias básicas</li>
                  <li>Cookies de balanceador de carga para distribuir tráfico</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-electric-blue" />
                  Cookies de Análisis
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento de usuarios</li>
                  <li><strong>Hotjar:</strong> Mapas de calor y grabaciones de sesión (anonimizadas)</li>
                  <li><strong>Métricas internas:</strong> Seguimiento de conversiones y objetivos</li>
                </ul>
                
                <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> Todos los datos analíticos se recopilan de forma agregada y anonimizada. 
                    No identificamos a usuarios individuales.
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-teal" />
                  Cookies Funcionales
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mejoran la funcionalidad del sitio y tu experiencia de usuario.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Preferencia de idioma (español/inglés)</li>
                  <li>Configuración de tema (claro/oscuro)</li>
                  <li>Preferencias de notificaciones de cookies</li>
                  <li>Formularios parcialmente completados</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-bright-orange" />
                  Cookies de Marketing (Opcionales)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se utilizan para mostrar contenido más relevante y medir la efectividad de nuestras campañas.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Facebook Pixel:</strong> Seguimiento de conversiones de redes sociales</li>
                  <li><strong>LinkedIn Insight:</strong> Análisis de audiencia profesional</li>
                  <li><strong>Google Ads:</strong> Optimización de campañas publicitarias</li>
                </ul>
                
                <div className="bg-bright-orange/5 border border-bright-orange/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tu control:</strong> Puedes optar por no recibir estas cookies sin afectar 
                    la funcionalidad básica del sitio.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Cookies de Terceros</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Algunos cookies en nuestro sitio son colocados por servicios de terceros. Tenemos contratos 
                con estos proveedores que garantizan el manejo responsable de los datos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3">Google Services</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Analytics 4</li>
                    <li>• Google Tag Manager</li>
                    <li>• Google Ads</li>
                    <li>• reCAPTCHA</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3">Otras Herramientas</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hotjar (Análisis de UX)</li>
                    <li>• Facebook Pixel</li>
                    <li>• LinkedIn Insight</li>
                    <li>• Mailchimp (Email marketing)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Enlaces a políticas:</strong> Cada servicio de terceros tiene su propia política de privacidad 
                  que puedes consultar en sus respectivos sitios web.
                </p>
              </div>
            </div>

            {/* Cookie Control */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-6 w-6 text-electric-blue" />
                <h2 className="text-2xl font-bold text-primary">Cómo Controlar las Cookies</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Configuración del Navegador</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puedes controlar y/o eliminar cookies según desees. Puedes eliminar todas las cookies 
                que ya están en tu computadora y configurar la mayoría de los navegadores para evitar que se coloquen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Chrome</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Firefox</h4>
                  <p className="text-sm text-muted-foreground">
                    Preferencias → Privacidad y seguridad → Cookies y datos del sitio web
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    Preferencias → Privacidad → Gestionar datos del sitio web
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Edge</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuración → Privacidad, búsqueda y servicios → Cookies
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">Opt-out de Servicios Específicos</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">Browser Add-on de Google</a></li>
                <li><strong>Facebook:</strong> Configuración de anuncios en tu cuenta de Facebook</li>
                <li><strong>LinkedIn:</strong> Configuración de privacidad en tu perfil de LinkedIn</li>
              </ul>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-red-500" />
                <h2 className="text-2xl font-bold text-primary">Impacto de Desactivar Cookies</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si decides desactivar o eliminar cookies, ten en cuenta que:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    Funcionalidad Limitada
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pérdida de preferencias guardadas</li>
                    <li>• Necesidad de reconfigurar idioma</li>
                    <li>• Formularios pueden no funcionar correctamente</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-yellow-600" />
                    Experiencia Menos Personalizada
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contenido menos relevante</li>
                    <li>• No recordamos tus preferencias</li>
                    <li>• Análisis de rendimiento limitado</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Consent */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-primary">Tu Consentimiento</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Al continuar utilizando nuestro sitio web después de recibir la notificación de cookies, 
                nos das tu consentimiento para usar cookies según se describe en esta política.
              </p>
              
              <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2">Gestión de Consentimiento</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Puedes cambiar o retirar tu consentimiento en cualquier momento:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Configurando tu navegador para bloquear cookies</li>
                  <li>• Eliminando cookies existentes</li>
                  <li>• Contactándonos directamente para opt-out</li>
                </ul>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Actualizaciones de Esta Política</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en 
                nuestras prácticas o por razones operativas, legales o regulatorias.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Cuando hagamos cambios significativos, te notificaremos a través de nuestro sitio web 
                y actualizaremos la fecha de "última actualización" en la parte superior de esta política.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-secondary/20 to-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-bright-orange" />
                <h2 className="text-2xl font-bold text-primary">Contacto</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tienes preguntas sobre esta Política de Cookies o sobre cómo manejamos las cookies 
                en nuestro sitio web, puedes contactarnos:
              </p>
              
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:rogermur1990@gmail.com" className="text-teal hover:underline">rogermur1990@gmail.com</a></p>
                <p><strong>Empresa:</strong> Calvo Creativo</p>
                <p><strong>Especialización:</strong> Servicios SEO para Florida</p>
              </div>
              
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Respuesta rápida:</strong> Respondemos consultas sobre cookies y privacidad 
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

export default PoliticaCookies;