import Asesoramiento from "@/components/asesoramiento";

export default function Sepelio() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Sepelio</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un producto diseñado para mantener la calma de los seres queridos ante el fallecimiento del titular (empleados/asociados), permitiéndole coordinar telefónicamente los servicios fúnebres necesarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Beneficios del producto</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Suscripción por grupos para empleados/asociados de Gremios, Mutuales, Municipios, Cooperativas, Asociaciones y otras entidades</li>
                <li>Atención telefónica gratuita las 24 hs. a través de nuestra línea 0800-345-7373.</li>
                <li>Servicio de Sepelio a través de cocherías distribuidas en todo el país.</li>
                <li>Incorporación de todo el grupo familiar a los beneficios de la póliza.</li>
                <li>Edad de permanencia en la póliza hasta 80 años.</li>
                <li>Traslado hasta 30 kilómetros.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Modalidad de Sepelio</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Servicio Prestacional con opción de reintegro.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Servicio de Cochería incluye</h3>
            <p className="text-gray-600 mb-4">
              Servicio para mayores, desde los 8 años cumplidos en adelante. Tierra, Nicho, Panteón o Bóveda. El servicio estará compuesto por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Ataúd Bóveda Especial, uno, dos o tres paneles, ocho manijas, color natural.</li>
              <li>Caoba o nogal, con blondas volcables, mortaja, herrajes imitación plata vieja.</li>
              <li>Capilla Ardiente (o Capilla Velatoria Especial).</li>
              <li>Con crucifijos o Cristo Eucarístico o Estrella de David, velas eléctricas o a gas.</li>
              <li>Un coche porta coronas, una Carroza Fúnebre motorizada, dos autos de acompañamiento.</li>
              <li>Licencia del Registro Civil para inhumación y tramitación Municipal.</li>
            </ul>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
