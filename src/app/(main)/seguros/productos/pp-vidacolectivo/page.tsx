import Asesoramiento from "@/components/asesoramiento";

export default function VidaColectivo() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Vida Colectivo</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Al cotizar el seguro de vida, contratas la seguridad de tener a resguardo a tu familia en caso de que fallezcas. Los beneficiarios de tu seguro serán quienes cobren la póliza en caso de fallecimiento, pudiendo así contar con un respaldo ante situaciones inesperadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Beneficios del producto</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Suscripción por grupos para empleados/asociados de Gremios, Mutuales, Municipios, Cooperativas, Asociaciones y otras entidades.</li>
                <li>Flexibilidad de rangos de cobertura de acuerdo a las necesidades del asegurado.</li>
                <li>Atención telefónica gratuita las 24 hrs.</li>
                <li>Beneficiarios a libre elección del contratante de la cobertura.</li>
                <li>Edad de permanencia en la póliza hasta 80 años.</li>
                <li>Tarifas al alcance de los contratantes.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Ventajas del seguro de vida colectivo</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>No requiere exámenes ni chequeos médicos.</li>
                <li>Amplio rango de edades para la contratación del seguro.</li>
                <li>Tarifas más bajas a las del seguro de vida individual.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-600 mb-4">
              En Evolución Seguros conocemos la importancia de brindarte el acompañamiento ante una necesidad imprevista y sensible, que requiere ser atendida con rapidez, respeto y solemnidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Asistencia Médica y Beneficios en Salud</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Traslado en ambulancia en caso de accidente</li>
                <li>Segunda opinión médica</li>
                <li>Médico a domicilio</li>
                <li>Enfermera a domicilio</li>
                <li>Cuidados prolongados y acompañamiento nocturno</li>
                <li>Envío de medicamentos y exámenes de laboratorio a domicilio</li>
                <li>Teleconsultas médicas las 24 hs.</li>
                <li>Recordatorio de citas médicas e ingesta de medicamentos</li>
                <li>Referencias médicas de especialistas e instituciones médicas en Argentina</li>
                <li>Empleada doméstica en caso de internación por accidente</li>
                <li>Reintegro del 40% por compra en farmacias en horario nocturno</li>
                <li>Descuento en testeo PCR</li>
                <li>Gestión de turnos para testeo PCR en Argentina</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Asistencia en vía pública</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Traslado del beneficiario en caso de accidente o robo</li>
                <li>Traslado médico en caso de lesiones</li>
                <li>Primera consulta médica en caso de lesiones</li>
                <li>Traslado de restos en caso de fallecimiento en viaje nacional</li>
                <li>Reintegro de medicamentos en caso de accidente</li>
                <li>Teleconsultas médicas las 24 hs.</li>
                <li>Cerrajero en caso de robo de llaves del domicilio</li>
                <li>Traslado del vehículo en caso de robo de llaves</li>
                <li>Transmisión de mensajes urgentes</li>
                <li>Conexión de servicio de emergencia (policía, bomberos, etc)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Aclaración</h3>
            <p className="text-gray-600">
              Tanto la asistencia médica como asistencia en vía pública son contrataciones adicionales al seguro de vida colectivo.
            </p>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
