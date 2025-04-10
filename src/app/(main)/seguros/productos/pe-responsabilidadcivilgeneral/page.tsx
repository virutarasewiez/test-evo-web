import Asesoramiento from "@/components/asesoramiento";

export default function ResponsabilidadCivilGeneral() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Responsabilidad Civil General</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un producto diseñado para proteger tu patrimonio o el de tu empresa frente a reclamos de terceros que deriven de tu actividad profesional, comercial, industrial, o deportiva. Contamos con una gran variedad de coberturas específicas para cada actividad o riesgo frente al que quieras protegerte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Responsabilidad Civil Comprensiva</h3>
              <p className="text-gray-600 mb-4">
                Responsabilidad Civil emergente de la actividad desarrollada por el asegurado, cubriendo daños a terceros y/o cosas de terceros como consecuencia de hechos ocurridos durante la vigencia de la póliza y que tengan lugar en el/los domicilio/s declarado/s por el asegurado.
              </p>
              <p className="text-gray-600">
                Bajo este producto pueden asegurarse actividades comerciales, industriales, sociales, educativas, eventos deportivos, empresariales, colonias de vacaciones, empresas de viajes y/o turismo entre otras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Responsabilidad Civil Básica con adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio, rayo, explosión, descargas eléctricas y escapes de gas</li>
                <li>Carteles y/o letreros y/o antenas y/u objetos afines</li>
                <li>Ascensores y/o montacargas</li>
                <li>Guarda y/o depósito de vehículos a título no oneroso</li>
                <li>Instalaciones a vapor agua caliente o aceite caliente</li>
                <li>Suministro de alimentos</li>
                <li>Vendedores ambulantes y/o viajantes y/o promotores</li>
                <li>Carga y descarga de bienes fuera del local del asegurado</li>
                <li>Rotura de cañerías</li>
                <li>Armas de fuego</li>
                <li>Grúas, guinches, autoelevadores</li>
                <li>Animales domésticos</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Riesgos de la Construcción</h3>
            <p className="text-gray-600">
              Construcción, refacción, demolición: Responsabilidad Civil en que incurra el asegurado por daños causados a terceros en su persona o en sus bienes emergente de la ejecución de los trabajos realizados exclusivamente en el/los domicilio/s declarado/s por asegurado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Otros productos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Rc carteles</li>
                <li>Rc tintorerías</li>
                <li>Rc hechos privados</li>
                <li>Rc ascensores y/o montacargas</li>
                <li>Rc para instalaciones a vapor, agua caliente y aceite caliente (calderas)</li>
                <li>Rc en garage, playas de estacionamiento y locales similares</li>
                <li>Rc incendio, rayo, explosión, descargas eléctricas y escapes de gas</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 