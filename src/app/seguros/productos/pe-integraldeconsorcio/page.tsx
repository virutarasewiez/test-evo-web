import Asesoramiento from "@/components/asesoramiento";

export default function IntegralConsorcio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Integral de Consorcio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro integral de consorcio es una protección completa para edificios y propiedades horizontales, brindando cobertura para las áreas comunes y la estructura del edificio. Diseñado para proteger el patrimonio común de todos los propietarios.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para el edificio</li>
            <li>Cobertura para áreas comunes</li>
            <li>Protección de la estructura</li>
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
                <li>Daños por agua</li>
                <li>Responsabilidad civil</li>
                <li>Robo y hurto</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Cristales y cerraduras</li>
                <li>Asistencia al consorcio</li>
                <li>Daños por vandalismo</li>
                <li>Gastos de limpieza</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro integral de consorcio está diseñado para brindar la máxima protección y tranquilidad a todos los propietarios, con coberturas adaptadas a las necesidades específicas del edificio y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 