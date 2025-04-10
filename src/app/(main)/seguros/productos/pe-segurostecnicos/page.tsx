import Asesoramiento from "@/components/asesoramiento";

export default function SegurosTecnicos() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguros Técnicos</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un grupo de productos creados con la intención de resguardar las actividades comerciales y/o industriales de construcción, montaje, rotura de maquinarias, equipos electrónicos y equipos de contratistas, entre otras, garantizando la integridad de tu empresa, ante posibles eventualidades que puedan ocurrir durante las operaciones de trabajo.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Todo Riesgo Construcción</h3>
              <p className="text-gray-600">
                Cobertura integral para obras de construcción en general.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Todo Riesgo Montaje</h3>
              <p className="text-gray-600">
                Cobertura de todo riesgo para obras de montaje de máquinas, acueductos, gasoductos, calderas, turbinas, ascensores, motores, grúas, etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Equipos de Contratistas</h3>
              <p className="text-gray-600">
                Un seguro técnico pensado para resguardar máquinas viales y equipos destinados a la construcción y otras actividades durante el momento en que se encuentran en funcionamiento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Equipos Electrónicos</h3>
              <p className="text-gray-600">
                Una cobertura Todo Riesgo para equipos de computación, equipos destinados a la industria, ciencia y medicina, máquinas de oficina y telecomunicaciones.
              </p>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 