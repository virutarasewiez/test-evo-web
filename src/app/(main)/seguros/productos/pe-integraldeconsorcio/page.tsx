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
            Es un producto orientado a la protección integral de propiedades de consorcios mediante una combinación de coberturas que permiten prevenir las consecuencias de posibles siniestros en esta propiedad.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio Edificio y Contenido de las partes comunes</li>
                <li>Robo de Mobiliario (incluye bombas de agua y motores eléctricos)</li>
                <li>Responsabilidad Civil Comprensiva</li>
                <li>Cristales</li>
                <li>Retiro de Escombros y/o Demolición de Edificios</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Accidentes Personales</li>
                <li>Daños por Agua</li>
                <li>Responsabilidad Civil en Garajes</li>
                <li>Robo de Matafuegos y Luces de Emergencia</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios del producto</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Atención de urgencias 24 hs. a través del 0810-222-4663</li>
            <li>Servicio de Urgencia domiciliaria para servicios de plomería, cerrajería, gas, electricidad y cristalería</li>
            <li>Posibilidad de combinar coberturas de acuerdo a las necesidades de cada afiliado</li>
          </ul>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 