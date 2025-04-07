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
            El seguro de responsabilidad civil general es una protección esencial para empresas y profesionales, brindando cobertura ante reclamos por daños a terceros. Diseñado para proteger tu patrimonio y garantizar la continuidad de tu actividad.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para tu actividad</li>
            <li>Cobertura ante reclamos de terceros</li>
            <li>Asistencia legal especializada</li>
            <li>Defensa técnica y jurídica</li>
            <li>Primas adaptadas a tu riesgo</li>
            <li>Servicio de atención personalizado</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Daños a terceros</li>
                <li>Daños a la propiedad</li>
                <li>Daños personales</li>
                <li>Gastos de defensa</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Contaminación accidental</li>
                <li>Defensa y fianzas</li>
                <li>Daños por productos</li>
                <li>Asistencia legal</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de responsabilidad civil general está diseñado para brindar la máxima protección y tranquilidad en tu actividad, con coberturas adaptadas a las necesidades específicas de tu negocio y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 