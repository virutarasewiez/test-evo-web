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
            El seguro de Caución es una de las herramientas más eficaces para todas aquellas personas físicas o jurídicas que desarrollan actividades comerciales o profesionales y que por determinadas exigencias legales, reglamentarias o contractuales, necesitan garantizar el cumplimiento de sus obligaciones contraídas frente a terceros.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Ponemos a tu disposición nuestro respaldo y experiencia, garantizándote un trámite ágil y sencillo, que te permitirá contar con una gama de coberturas acorde a las necesidades de gestión de tus negocios con el respaldo de la compañía pionera en este rubro.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías Contractuales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Garantías de Obras Públicas y Privadas</li>
                <li>Mantenimiento de oferta</li>
                <li>Ejecución de contrato</li>
                <li>Fondo de reparo</li>
                <li>Anticipo</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías de Suministros y Servicios</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Garantía de oferta</li>
                <li>Garantía de Adjudicación</li>
                <li>Sustitución Fondo de reparo</li>
                <li>Garantía de Anticipo</li>
                <li>Tenencia de bienes para su uso / reparación / manutención o reacondicionamiento</li>
                <li>Tenencia de material para fabricación o montaje</li>
                <li>Garantía de certificación de avance de fabricación</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías de Alquileres</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Comerciales y domiciliarios</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías Aduaneras</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Tránsito Terrestre</li>
                <li>IMPO/EXPO</li>
                <li>Falta de documentación</li>
                <li>Otros</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías de actividad o profesión</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Directores IGJ</li>
                <li>Agencias de Turismo</li>
                <li>Agencias de Loterías</li>
                <li>Administradores de sociedades</li>
                <li>Otros</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Garantías Judiciales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Sustitución de medidas cautelares</li>
                <li>Contracautela</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 