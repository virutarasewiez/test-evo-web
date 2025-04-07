import Asesoramiento from "@/components/asesoramiento";

export default function Sepelio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Sepelio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de sepelio es una protección que brinda asistencia integral ante el fallecimiento de un ser querido. Diseñado para aliviar la carga económica y emocional en momentos difíciles, garantizando un servicio digno y profesional.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Cobertura inmediata desde el primer día</li>
            <li>Servicio de sepelio las 24 horas</li>
            <li>Asistencia telefónica permanente</li>
            <li>Traslado de restos</li>
            <li>Capilla ardiente</li>
            <li>Servicio de cremación</li>
            <li>Asistencia psicológica</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Incluidos</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Traslado de restos</li>
                <li>Capilla ardiente</li>
                <li>Servicio de cremación</li>
                <li>Urna o ataúd</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asistencia psicológica</li>
                <li>Traslado de familiares</li>
                <li>Servicio de catering</li>
                <li>Flores y ornamentación</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de sepelio está diseñado para brindar un servicio completo y profesional, con atención personalizada y todas las coberturas necesarias para garantizar un servicio digno.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
