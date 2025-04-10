import Asesoramiento from "@/components/asesoramiento";

export default function TransporteMercaderia() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Transporte de Mercadería</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Producto diseñado para cubrir los bienes y mercancías transportados ante los posibles riesgos que puedan existir durante su desplazamiento de una locación a otra y, al mismo tiempo, en aquellos períodos en los cuales tales bienes deben permanecer en depósitos en tránsito, antes de su llegada a destino final.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tipos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Terrestre</h3>
              <p className="text-gray-600">
                Mercancías transportadas por vía terrestre.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Marítimo</h3>
              <p className="text-gray-600">
                Mercancías transportadas por vía marítima y/o acuática en general. (Consulte por coberturas).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Aéreo</h3>
              <p className="text-gray-600">
                Mercancías transportadas por vía aérea. (Consulte por coberturas).
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Choque, vuelco, desbarrancamiento o descarrilamiento del vehículo</li>
                <li>Derrumbe, caída de árboles o postes</li>
                <li>Incendio, explosión, rayo</li>
                <li>Huracán, ciclón, tornado</li>
                <li>Inundación, alud, aluvión</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Robo con violencia sobre personas o mercaderías</li>
                <li>Hurto</li>
                <li>Desaparición</li>
                <li>Descarga</li>
                <li>Rotura, abolladura, derrame y mojadura</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Asegurá tu carga de aquellas pérdidas que puedan sufrir durante el transporte terrestre, marítimo, y/o aéreo. Te brindamos cobertura para viajes locales, importaciones o exportaciones.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 