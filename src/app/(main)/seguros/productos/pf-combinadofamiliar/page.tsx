import Asesoramiento from "@/components/asesoramiento";

export default function CombinadoFamiliar() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Combinado Familiar</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Es un producto diseñado para proteger tu hogar de robo, incendio, todo riesgo de electrodomésticos, cristales, y más. A través de este seguro proteges tu vivienda, con el dinamismo de poder combinar las coberturas y planes de acuerdo a tus necesidades.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Coberturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Básicas</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Incendio: Edificio y Contenido General</li>
                <li>Robo / Hurto: Contenido General</li>
                <li>Cristales: Rotura y/o Rajadura de Cristales y /o espejos fijados verticalmente al edificio</li>
                <li>Gastos de Limpieza y retiro de escombros</li>
                <li>Gastos de Alojamiento</li>
                <li>Gastos de Mudanza y guardamuebles</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Responsabilidad Civil Linderos y Hechos privados</li>
                <li>Robo de Dinero en efectivo (en domicilio)</li>
                <li>Robo y/ Hurtos Específicos</li>
                <li>Todo Riesgo en Domicilio: Daños por robo /incendio o daño de equipos conectados a corriente. No aplica para instrumentos musicales</li>
                <li>Todo Riesgo en Argentina y el Mundo: Daños por robo /incendio o daño de equipos portátiles (Cámaras fotográficas, Tablet, Notebook, Filmadoras). No aplica para equipos celulares</li>
                <li>Artefactos Sanitarios, Piletas y Mesadas: Rotura y Rajadura</li>
                <li>Jugadores de Golf-Efectos Personales</li>
                <li>Jugadores de Golf- Palos</li>
                <li>Jugadores de Golf-Hoyo en uno</li>
                <li>Jugadores de Golf-Responsabilidad Civil</li>
                <li>Daños por agua</li>
                <li>Accidentes personales para el tomador: Muerte o invalidez</li>
                <li>Accidentes personales para personal doméstico: Muerte o invalidez</li>
                <li>Animales Domésticos: Robo</li>
                <li>Animales Domésticos: Muerte o Sacrificio</li>
                <li>Animales Domésticos: Gastos veterinarios</li>
                <li>Animales Domésticos: Gastos de recuperación</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios y características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Beneficios del producto</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Atención de urgencias 24 hrs a través del 0810-222-4663</li>
                <li>Servicio de Urgencia domiciliaria para servicios de plomería, cerrajería, gas, electricidad y cristalería</li>
                <li>Posibilidad de combinar coberturas de acuerdo a las necesidades de cada afiliado</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Características del producto</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Área de cobertura: República Argentina</li>
                <li>Servicio brindado las 24 horas los 365 días del año</li>
                <li>Cantidad de servicios: 4 eventos anuales</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Prestaciones</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Plomería: Ante roturas de cañerías, llaves u otras instalaciones de agua</li>
              <li>Electricidad: Por falta de energía eléctrica en la vivienda asegurada o en alguna de sus dependencias</li>
              <li>Gas: Para la reparación de rotura de cañerías, llaves u otras instalaciones fijas de gas a la vista de la vivienda asegurada</li>
              <li>Cerrajería: Se cubre en caso de robo o extravío de las llaves, o imposibilidad de apertura de alguna de las puertas de ingreso y/o egreso de la vivienda</li>
              <li>Cerrajería: En caso de roturas de cristales y/o vidrios verticales de puertas y ventanas que formen parte del cerramiento exterior de la vivienda</li>
            </ul>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 