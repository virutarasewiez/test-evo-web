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
            En Evolución Seguros, sabemos cuán importante son los estudios de tus hijos, por ello queremos asegurarnos que puedan culminarlos brindándoles protección en caso de que vos no puedas estar.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Objetivos</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Asegurar a los estudiantes los medios económicos a fin de que logren la finalización de sus estudios (eje inicial, eje primario, eje secundario) en la Institución contratante.</li>
              <li>Trasladar el riesgo a la Compañía Aseguradora, a través del reemplazo de fondos de previsión escolar, o sus equivalentes.</li>
              <li>En caso de inexistencia de estos fondos, crear una ayuda frente a la incertidumbre en que quedan los alumnos, y un equilibrio para la matrícula de la Institución.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Beneficios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Para las familias</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Premio accesible, por ser una póliza de Vida Colectivo.</li>
                <li>No acceder a costos financieros, en caso del fallecimiento del sostén económico familiar, a fin de mantener el estándar de vida del grupo familiar.</li>
                <li>Seguridad de la finalización de los estudios en la Institución a la que pertenece.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Para la institución</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Protección integral de los alumnos al tener resueltos los conflictos humanos en momento de problemas emocionales.</li>
                <li>Imagen diferenciada dentro del sistema educativo, brindando un servicio adicional a los alumnos.</li>
                <li>El seguro constituye un medio de custodia a largo plazo, de los alumnos en la institución y permite fortalecer la imagen de interés integral a sus necesidades y las de su núcleo familiar.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tipo de seguro</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>VIDA RIESGOS CUBIERTOS: Muerte por enfermedad o accidente. La cobertura rige las 24 hs, dentro y fuera del país durante todo el año.</li>
              <li>TOMADOR: Institución educativa o asociación de padres de alumnos (APA), según el caso, como persona jurídica que suscribe el contrato.</li>
              <li>ASEGURADOS: El asegurado serán los padres o tutores que fueron informados oportunamente a la compañía según listado en poder de la misma.</li>
              <li>BENEFICIARIOS: En todos los casos el beneficiario del seguro será el colegio, quien recibirá la indemnización.</li>
              <li>TIPO DE POLIZA: Póliza de grupo anual renovable en forma automática.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Requisitos y datos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Requisitos de asegurabilidad</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Será necesario contar con una adhesión del 80% de los padres o tutores actualmente asegurados (traspaso de póliza)</li>
                <li>Para futuros ingresos: se establece como periodo de preexistencia los primeros 12 meses de vigencia de cada certificado individual.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Datos para cotizar</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Nomina (en Excel) de padres (responsable económico) con fechas de nacimiento, indicando también cantidad de hijos en la institución y grado/año que están cursando.</li>
                <li>Cuadro con valor de cuota mensual por grado/año. Indicando cantidad de cuotas que se abonan por año lectivo y costo de matrícula.</li>
              </ul>
            </div>
          </div>
        </div>

        <Asesoramiento />
      </div>
    </section>
  );
} 