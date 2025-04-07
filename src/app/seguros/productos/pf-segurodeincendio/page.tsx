import Asesoramiento from "@/components/asesoramiento";

export default function SeguroIncendio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Incendio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de incendio es una protección esencial para tu hogar, brindando cobertura ante incendios y otros siniestros que puedan afectar tu propiedad. Diseñado para proteger tu patrimonio y brindarte tranquilidad.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para tu hogar</li>
            <li>Cobertura ante incendios y riesgos de la naturaleza</li>
            <li>Respuesta inmediata ante siniestros</li>
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
                <li>Incendio</li>
                <li>Riesgos de la naturaleza</li>
                <li>Explosión</li>
                <li>Daños por humo</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Daños por agua</li>
                <li>Robo y hurto</li>
                <li>Responsabilidad civil familiar</li>
                <li>Asistencia al hogar</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de incendio está diseñado para brindarte la máxima protección y tranquilidad para tu hogar, con coberturas adaptadas a tus necesidades específicas y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 