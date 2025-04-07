import React from 'react';

const valores = [
  {
    id: 1,
    titulo: 'Calidad',
    descripcion: 'ESTAMOS COMPROMETIDOS A DAR UN SERVICIO DE EXCELENCIA.',
    icon: 'bi-award'
  },
  {
    id: 2,
    titulo: 'Innovación',
    descripcion: 'POSEEMOS TODOS LOS FORMATOS DE PÓLIZAS DIGITALES PARA BRINDARLE A NUESTROS CLIENTES MAYOR COMODIDAD Y VELOCIDAD.',
    icon: 'bi-lightbulb'
  },
  {
    id: 3,
    titulo: 'Profesionalismo',
    descripcion: 'CONTAMOS CON UN EQUIPO DE PROFESIONALES CON AMPLIA TRAYECTORIA EN EL MERCADO ASEGURADOR NACIONAL E INTERNACIONAL.',
    icon: 'bi-person-badge'
  },
  {
    id: 4,
    titulo: 'Solidez',
    descripcion: 'CON MÁS DE 70 AÑOS SEGUIMOS SIENDO LOS PRINCIPALES ALIADOS EN LOS GRANDES PROYECTOS DE NUESTRO PAÍS.',
    icon: 'bi-building'
  },
  {
    id: 5,
    titulo: 'Ética',
    descripcion: 'NUESTROS VALORES SE COMBINAN PARA OFRECER A NUESTROS CLIENTES LOS MAS ALTOS ESTÁNDARES DE ÉTICA Y RESPONSABILIDAD SOCIAL EMPRESARIAL.',
    icon: 'bi-shield-check'
  },
  {
    id: 6,
    titulo: 'Honestidad',
    descripcion: 'LA TRANSPARENCIA EN NUESTROS PROCESOS HABLAN DE LA INTEGRIDAD DE LOS SERVICIOS PRESTADOS.',
    icon: 'bi-hand-thumbs-up'
  },
  {
    id: 7,
    titulo: 'Compromiso',
    descripcion: 'ESTAMOS COMPROMETIDOS EN RESPALDAR Y ASEGURAR LA VIDA DE LAS PERSONAS Y EMPRESAS DE NUESTRO PAÍS.',
    icon: 'bi-heart'
  },
  {
    id: 8,
    titulo: 'Confianza',
    descripcion: 'BRINDANDO CONFIANZA ES QUE NUESTROS CLIENTES LOGRAN ASEGURAR A SU FAMILIA, BIENES Y PROYECTOS.',
    icon: 'bi-handshake'
  }
];

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Evolución Seguros
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Una empresa que reúne la energía y la experiencia de los grandes, dispuestos siempre a respaldar tu futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Los valores que nos caracterizan</h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              En Evolución seguros, nos comprometemos a prestar servicios con calidad, adecuados a las necesidades y expectativas de nuestros clientes, brindando tranquilidad y seguridad mediante soluciones efectivas, respaldadas en los valores que nos caracterizan como organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor) => (
              <div 
                key={valor.id} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <div className="inline-block p-4 bg-red-50 rounded-full mb-6">
                    <i className={`bi ${valor.icon} text-4xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{valor.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{valor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos y Visión Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="bi bi-bullseye text-2xl text-primary"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestros Objetivos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Prestarles un servicio de calidad a nuestros clientes, mediante un equipo altamente capacitado para detectar y desarrollar oportunidades de negocios, de manera creativa y con sentido de compromiso social.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="bi bi-compass text-2xl text-primary"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Hacia dónde vamos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nuestra meta es brindar protección personal y patrimonial a todos los argentinos a lo largo de su vida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
