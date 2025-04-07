import Asesoramiento from "@/components/asesoramiento";

export default function VidaColectivo() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Vida Colectivo</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de vida colectivo es una solución diseñada para empresas y grupos, brindando protección financiera a los beneficiarios en caso de fallecimiento del asegurado. Una herramienta esencial para la seguridad financiera de las familias.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Primas adaptadas al tamaño del grupo</li>
            <li>Proceso de contratación simplificado</li>
            <li>Flexibilidad en las coberturas</li>
            <li>Posibilidad de incluir coberturas adicionales</li>
            <li>Servicio de atención personalizado</li>
            <li>Asesoramiento especializado</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Básicas</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Muerte por cualquier causa</li>
                <li>Muerte accidental</li>
                <li>Invalidez total y permanente</li>
                <li>Gastos de sepelio</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Opcionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Enfermedades graves</li>
                <li>Asistencia al viajero</li>
                <li>Asistencia médica</li>
                <li>Renta diaria por internación</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de vida colectivo está diseñado para brindar la máxima protección a los grupos y empresas, con coberturas flexibles y un servicio de atención personalizado que se adapta a las necesidades específicas de cada organización.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
