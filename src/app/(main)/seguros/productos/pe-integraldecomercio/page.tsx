import Asesoramiento from "@/components/asesoramiento";

export default function IntegralComercio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Integral de Comercio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un producto diseñado para cuidar tus bienes patrimoniales y tu actividad comercial en general. Con esta póliza podés seleccionar las coberturas que quieras y armar tu propio seguro resguardando tu empresa de daños por incendio, robo, daños por agua, roturas de vidrios, granizo, responsabilidad civil comprensiva y más.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio (Edificio y contenido)</li>
                <li>Robo Contenido General</li>
                <li>Cristales</li>
                <li>Responsabilidad Civil (Comprensiva y linderos)</li>
                <li>Robo de bienes en Uso</li>
                <li>Valores en Caja</li>
                <li>Valores en tránsito</li>
                <li>Seguro Técnico (Equipos electrónicos)</li>
                <li>Daños por agua</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Huracán, vendaval, ciclón y/o tornado al edificio y contenido</li>
                <li>Granizo al edificio y contenido</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios del producto</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Atención de urgencias 24 hs. a través del 0810-222-4663</li>
            <li>Servicio de Urgencia domiciliaria para servicios de plomería, cerrajería, gas, electricidad y cristalería</li>
            <li>Posibilidad de combinar coberturas de acuerdo a las necesidades de cada asegurado</li>
          </ul>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 