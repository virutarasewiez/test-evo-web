import Asesoramiento from "@/components/asesoramiento";

export default function PraxisProfesional() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro Praxis Profesional</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de mala praxis profesional es una protección esencial para profesionales de diversas disciplinas como contadores, abogados, arquitectos y otros profesionales liberales. Brinda cobertura ante reclamos por errores, omisiones o negligencia en el ejercicio de su profesión, protegiendo su patrimonio y su ejercicio profesional.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Protección integral para tu ejercicio profesional</li>
            <li>Cobertura ante reclamos por mala praxis</li>
            <li>Asistencia legal especializada</li>
            <li>Defensa técnica y jurídica</li>
            <li>Primas adaptadas a tu profesión y especialidad</li>
            <li>Servicio de atención personalizado</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Responsabilidad civil profesional</li>
                <li>Mala praxis profesional</li>
                <li>Negligencia en el ejercicio profesional</li>
                <li>Daños y perjuicios</li>
                <li>Errores y omisiones</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asistencia legal 24/7</li>
                <li>Defensa técnica</li>
                <li>Mediación previa</li>
                <li>Asesoramiento preventivo</li>
                <li>Apoyo en gestión de riesgos</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de mala praxis profesional está diseñado para brindarte la máxima protección en tu ejercicio profesional, con coberturas específicas para tu profesión y un servicio de atención personalizado que entiende las necesidades únicas de los profesionales liberales.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 