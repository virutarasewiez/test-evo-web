import Asesoramiento from "@/components/asesoramiento";

export default function CombinadoFamiliar() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Combinado Familiar</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro combinado familiar es una solución integral que protege tu hogar y a tu familia bajo una única póliza. Diseñado para brindarte tranquilidad y seguridad, cubriendo los riesgos más comunes que pueden afectar tu patrimonio y seres queridos.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para tu hogar y familia</li>
            <li>Múltiples coberturas en una sola póliza</li>
            <li>Primas competitivas</li>
            <li>Servicio de atención personalizado</li>
            <li>Asistencia las 24 horas</li>
            <li>Proceso de siniestro simplificado</li>
            <li>Flexibilidad para adaptar las coberturas</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio y riesgos de la naturaleza</li>
                <li>Robo y hurto</li>
                <li>Responsabilidad civil familiar</li>
                <li>Cristales y cerraduras</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Electrodomésticos</li>
                <li>Daños por agua</li>
                <li>Asistencia al hogar</li>
                <li>Vandalismo</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro combinado familiar está diseñado para brindarte la máxima protección y tranquilidad, con coberturas adaptadas a tus necesidades específicas y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 