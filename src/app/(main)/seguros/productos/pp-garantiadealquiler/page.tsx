import Asesoramiento from "@/components/asesoramiento";

export default function GarantiaAlquiler() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Garantía de Alquiler</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            La póliza de caución de alquileres es un producto diseñado para solucionar las necesidades tanto de inquilinos como de propietarios e inmobiliarias. Con este seguro, el inquilino asegura al propietario el cumplimiento del pago de los alquileres de expensas y depósito en garantía, durante la vigencia del contrato.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Beneficios</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Aplica para alquileres particulares (departamentos / casas) y para alquileres comerciales (locales / oficinas).</li>
                <li>Respuestas en 24 hs.</li>
                <li>Precios adaptados a las necesidades del inquilino.</li>
                <li>Financiamiento en cuotas mensuales.</li>
                <li>No requiere garantía adicional.</li>
                <li>Producto aprobado por la Superintendencia de Seguros de la Nación.</li>
                <li>Respuesta personalizada ante el incumplimiento de inquilino.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Cobertura</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Alquileres</li>
                <li>Expensas</li>
                <li>Depósito en garantía</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Coberturas adicionales</h3>
            <p className="text-gray-600 mb-4">
              La caución de alquileres de Evolución Seguros busca brindar la protección necesaria tanto a inquilinos como a propietarios, por ello incluimos como coberturas adicionales:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Cristales</li>
                <li>Responsabilidad Civil</li>
                <li>Incendio</li>
                <li>Robo</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
