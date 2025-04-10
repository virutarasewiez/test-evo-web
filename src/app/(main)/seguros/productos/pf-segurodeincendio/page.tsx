import Asesoramiento from "@/components/asesoramiento";

export default function SeguroIncendio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Incendio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Este producto está diseñado para cubrir los daños materiales de todos tus bienes patrimoniales, como consecuencia de la acción directa y/o indirecta del fuego, rayo o explosión que puedan ocurrir de forma imprevista.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Alcance de la cobertura</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio Edificio</li>
                <li>Incendio Contenido, Incendio mercaderías</li>
                <li>Incendio Instalaciones y Maquinarias</li>
                <li>Responsabilidad Civil Linderos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Daños directos</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Impactos de aeronaves, vehículos terrestres, sus partes componentes y/o cargas transportadas</li>
                <li>Humo que provenga de desperfectos en el funcionamiento de cualquier aparato de calefacción ambiental y/o cocina instalados en el bien asegurado</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Daños indirectos</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Cualquier medio empleado para extinguir, evitar o circunscribir la propagación del daño</li>
              <li>Salvamento o evacuación inevitable a causa del siniestro</li>
              <li>La destrucción y/o demolición ordenada por autoridad competente</li>
              <li>Consecuencia del fuego y demás eventos amparados por la póliza, ocurridos en las inmediaciones</li>
              <li>Extravío en ocasión del traslado de los bienes objeto del seguro con motivo de las operaciones de salvamento</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Coberturas adicionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Huracán, ciclón y/o tornado</li>
                <li>Granizo</li>
                <li>Terremoto</li>
                <li>Remoción de escombros y gastos de limpieza</li>
                <li>Daños por agua</li>
                <li>Daños a las mercaderías depositadas en cámaras frigoríficas por paralización de las mismas (falta de frío por incendio, falta de frío por rotura de maquinaria, falta de frío por corte de energía eléctrica, contaminación de las mercaderías por derrame del fluido refrigerante y falta de inertización)</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 