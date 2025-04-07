import Asesoramiento from "@/components/asesoramiento";

export default function AccidentesPersonales() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Accidentes Personales</h2>
          <div className="h-1 w-24 mx-auto bg-primary"></div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            El seguro de accidentes personales es una protección esencial que te brinda cobertura ante imprevistos que puedan afectar tu salud o integridad física. Diseñado para brindarte tranquilidad y seguridad en tu día a día.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-800">
            <li>Cobertura las 24 horas, los 365 días del año</li>
            <li>Protección en todo el territorio nacional</li>
            <li>Asistencia médica inmediata</li>
            <li>Indemnización por fallecimiento</li>
            <li>Invalidez permanente</li>
            <li>Gastos de sepelio</li>
            <li>Asistencia al hogar</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cobertura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Coberturas Principales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Muerte accidental</li>
                <li>Invalidez permanente</li>
                <li>Gastos médicos</li>
                <li>Asistencia al hogar</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Servicios Adicionales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Asistencia médica telefónica</li>
                <li>Traslado en ambulancia</li>
                <li>Internación domiciliaria</li>
                <li>Servicio de enfermería</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Nuestro seguro de accidentes personales está diseñado para brindarte la máxima protección y tranquilidad, con un servicio de atención personalizado y coberturas adaptadas a tus necesidades.
          </p>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
}
