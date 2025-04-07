import Asesoramiento from "@/components/asesoramiento";

export default function SegurosTecnicos() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguros Técnicos</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Los seguros técnicos son soluciones especializadas que protegen equipos, maquinarias y bienes tecnológicos. Diseñados para brindar cobertura ante fallas técnicas, daños accidentales y otros riesgos específicos que pueden afectar tu operación.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección especializada para equipos técnicos</li>
            <li>Cobertura ante fallas mecánicas</li>
            <li>Asistencia técnica especializada</li>
            <li>Respuesta rápida ante siniestros</li>
            <li>Primas adaptadas a tu equipo</li>
            <li>Servicio de atención personalizado</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Fallas mecánicas</li>
                <li>Daños eléctricos</li>
                <li>Accidentes operativos</li>
                <li>Responsabilidad civil</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asistencia técnica 24/7</li>
                <li>Mantenimiento preventivo</li>
                <li>Repuestos originales</li>
                <li>Equipo de reemplazo</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestros seguros técnicos están diseñados para brindarte la máxima protección y tranquilidad en la operación de tus equipos, con coberturas específicas para cada tipo de tecnología y un servicio de atención personalizado que entiende las necesidades únicas de tu negocio.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 