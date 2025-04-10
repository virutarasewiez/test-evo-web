import Asesoramiento from "@/components/asesoramiento";

export default function PraxisMedica() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Praxis Médica</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Protegemos a médicos, auxiliares e instituciones ante reclamos de pacientes fundados en presuntos errores en el ejercicio de la actividad.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Doble reposición de suma asegurada</li>
                <li>Sin franquicia</li>
                <li>Ámbito de cobertura: República Argentina</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Incluidos</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asesoría Médico-Legal: Profesionales en medicina legal para cualquier necesidad de apoyatura técnica</li>
                <li>Asesoría General y Jurídica ante siniestros</li>
                <li>Representación letrada</li>
                <li>Capacitaciones con diversos temas con el objetivo de brindar herramientas a los profesionales que les permitan el ejercicio de su profesión a la reglamentación legal vigente, colaborar con la detección de vulnerabilidades en la práctica médica</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 