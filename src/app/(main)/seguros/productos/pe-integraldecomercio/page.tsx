import Asesoramiento from "@/components/asesoramiento";

export default function IntegralComercio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Integral de Comercio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro integral de comercio es una protección completa para tu negocio, brindando cobertura para el local comercial, mercadería, responsabilidad civil y más. Diseñado para proteger tu actividad comercial y garantizar la continuidad de tu negocio.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para tu negocio</li>
            <li>Cobertura para local y mercadería</li>
            <li>Responsabilidad civil comercial</li>
            <li>Asistencia las 24 horas</li>
            <li>Primas competitivas</li>
            <li>Servicio de atención personalizado</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio y riesgos de la naturaleza</li>
                <li>Robo y hurto de mercadería</li>
                <li>Responsabilidad civil</li>
                <li>Daños por agua</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Cristales y cerraduras</li>
                <li>Asistencia al comercio</li>
                <li>Daños por vandalismo</li>
                <li>Pérdida de beneficios</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro integral de comercio está diseñado para brindar la máxima protección y tranquilidad a tu negocio, con coberturas adaptadas a las necesidades específicas de tu actividad comercial y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 