import Asesoramiento from "@/components/asesoramiento";

export default function Caucion() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Caución</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de caución es una garantía financiera que respalda el cumplimiento de obligaciones contractuales. Es una herramienta esencial para empresas y profesionales que necesitan garantizar su compromiso en diversos tipos de contratos y operaciones comerciales.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Garantía financiera inmediata</li>
            <li>Proceso de emisión ágil</li>
            <li>Costos competitivos</li>
            <li>Flexibilidad en los montos</li>
            <li>Asesoramiento especializado</li>
            <li>Documentación simplificada</li>
            <li>Vigencia adaptable a tus necesidades</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Tipos de Caución</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Caución de alquiler</li>
                <li>Caución de licitación</li>
                <li>Caución de fiel cumplimiento</li>
                <li>Caución de suministro</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Características</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Emisión inmediata</li>
                <li>Sin depósito de fondos</li>
                <li>Vigencia flexible</li>
                <li>Renovación automática</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de caución está diseñado para brindarte la máxima flexibilidad y seguridad en tus operaciones comerciales, con un servicio de atención personalizado y soluciones adaptadas a tus necesidades específicas.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 