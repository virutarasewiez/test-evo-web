import Asesoramiento from "@/components/asesoramiento";

export default function EducacionSegura() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Seguro de Educación</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de educación es una protección esencial para el futuro de tus hijos, brindando cobertura para garantizar su educación incluso ante imprevistos. Diseñado para asegurar que tus hijos puedan continuar con sus estudios sin interrupciones.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Garantía de educación para tus hijos</li>
            <li>Cobertura ante fallecimiento o invalidez</li>
            <li>Flexibilidad en los planes de estudio</li>
            <li>Primas adaptadas a tus necesidades</li>
            <li>Servicio de atención personalizado</li>
            <li>Asesoramiento educativo</li>
            <li>Gestión eficiente de siniestros</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Fallecimiento del asegurado</li>
                <li>Invalidez total y permanente</li>
                <li>Enfermedades graves</li>
                <li>Gastos educativos</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asesoramiento educativo</li>
                <li>Orientación vocacional</li>
                <li>Apoyo psicológico</li>
                <li>Becas y descuentos</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de educación está diseñado para brindarte la máxima tranquilidad sobre el futuro educativo de tus hijos, con coberturas adaptadas a tus necesidades específicas y un servicio de atención personalizado que está disponible cuando lo necesites.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 