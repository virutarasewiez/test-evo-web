import Asesoramiento from "@/components/asesoramiento";

export default function AccidentesPersonales() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Accidentes Personales</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un producto diseñado para protegerte ante cualquier situación inesperada que pueda afectar tu integridad física producto de un accidente ajeno a tu voluntad, tanto en el ejercicio de tu profesión como en tu vida privada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Beneficios del producto</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Atención telefónica gratuita las 24 hs.</li>
                <li>Renovación automática de forma anual.</li>
                <li>No requiere examen médico, ni declaración de salud.</li>
                <li>Planes a medida para cada actividad.</li>
                <li>Libre elección de sumas aseguradas.</li>
                <li>Libre designación de beneficiarios.</li>
                <li>Tarifas al alcance de los contratantes.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Alcance</h3>
              <p className="text-gray-600">
                La póliza de Accidentes Personales brinda protección al asegurado en caso de muerte o incapacidades permanentes sean totales o parciales, sufridas en ocasión de un accidente.
              </p>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
