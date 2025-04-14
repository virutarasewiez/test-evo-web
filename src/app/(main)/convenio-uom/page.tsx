import React from 'react';
import Link from 'next/link';

export default function ConvenioUOM() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">CONVENIO UOM</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
  <p className="text-lg mb-4">
    Fuimos elegidos por la <strong>UOM</strong> para brindar cobertura a sus afiliados, y eso nos llena de orgullo. A partir de ahora, nos hacemos cargo del <strong>seguro de sepelio colectivo</strong> y del <strong>seguro de vida colectivo</strong>, siempre con atención personalizada y un trato humano, como te merecés.
  </p>
  <p className="text-lg mb-4">
    Cada afiliado cuenta con un equipo dedicado 🙋‍♂️🙋‍♀️ para resolver dudas y estar presente cuando más lo necesita. Nuestra cobertura es clara, simple y confiable, y además, gestionamos todo de forma rápida.
  </p>
  <p className="text-lg">
    En Evolución, creemos en acompañarte con compromiso y empatía. <strong>Siempre de la mano con vos 🤝</strong>.
  </p>
</div>


        <a 
          href="https://appseguros.evolucionseguros.com/login" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-[#b42830] hover:bg-[#9a2228] text-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-300"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <p className="text-lg text-center text-white mb-0">
              <strong>Completá tus datos y los de tus beneficiarios en nuestra app. <br />¡Es fácil y rápido!</strong>
            </p>
            <div className="flex items-center gap-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              ¡Hacé clic aquí!
            </div>
          </div>
        </a>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <h2 className="text-xl font-semibold mb-4">En caso de fallecimiento:</h2>
            <div className="flex items-center justify-center gap-2">
              <i className="bi bi-telephone-fill text-primary text-2xl"></i>
              <p className="text-2xl font-bold text-primary mb-2">0800-345-7373</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Para otras Consultas</h2>
            <div className="flex items-center justify-center gap-2">
              <i className="bi bi-telephone-fill text-blue-600 text-2xl"></i>
              <p className="text-2xl font-bold text-blue-600 mb-2">(5411) 5278 – 3600</p>
            </div>
            <p className="text-gray-600 text-center">Lunes a Viernes de 09:00 a 17:00 horas</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Formularios Disponibles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/certificacion-del-sepelio.pdf" className="block p-4 border rounded-lg hover:bg-gray-50" target="_blank">
              Certificación de sepelio
            </Link>
            <Link href="/docs/certificacion-de-seguro-colectivo-de-vida-UOM.pdf" className="block p-4 border rounded-lg hover:bg-gray-50" target="_blank">
              Certificación de seguro colectivo de vida
            </Link>
            <Link href="/docs/certificacion-fallecimiento-del-titular.pdf" className="block p-4 border rounded-lg hover:bg-gray-50" target="_blank">
              Certificación fallecimiento del titular
            </Link>
            <Link href="/docs/certificacion-fallecimiento-familiar-a-cargo.pdf" className="block p-4 border rounded-lg hover:bg-gray-50" target="_blank">
              Certificación fallecimiento familiar a cargo
            </Link>
            <Link href="/docs/solicitud-individual-de-seguro-colectivo-de-vida.pdf" className="block p-4 border rounded-lg hover:bg-gray-50" target="_blank">
              Solicitud individual de seguro colectivo de vida
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Guía para Completar Formularios</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Información General</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tomador (o Sindicato):</strong> Completar con el nombre del contratante de la póliza (por ej. UOMRA)</li>
                <li><strong>Póliza Nº:</strong> NO COMPLETAR</li>
                <li><strong>Código de Seccional:</strong> Se debe indicar el Número de la Seccional en la cuál la metalúrgica está registrada.</li>
                <li><strong>Código de Empresa:</strong> Se debe indicar el número de registro interno en la seccional, que identifica a la empresa metalúrgica.</li>
                <li><strong>Nº Certificado:</strong> NO COMPLETAR.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Datos del Empleado</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Empleado asegurado:</strong> Los datos que se solicitan son Nombre completo, Edad, Fecha de nacimiento, DNI, Fecha de ingreso al empleo, Sexo.</li>
                <li><strong>Capital Asegurado:</strong> NO COMPLETAR.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3-6. Información de Beneficiarios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Beneficiario del seguro:</strong> Los datos que se solicitan son Nombre completo, DNI y Domicilio, que el EMPLEADO ASEGURADO haya designado a tal efecto.</li>
                <li><strong>Porcentaje:</strong> el EMPLEADO puede establecer porcentajes de cobro del Capital Asegurado entre los distintos Beneficiarios que designe. Si no lo completa, se entenderá que dicho Capital se abonará en partes iguales entre los Beneficiarios Designados. La sumatoria total de los eventuales porcentajes que el EMPLEADO disponga entre sus beneficiarios DEBE ser igual al 100%.</li>
                <li><strong>Lugar y Fecha:</strong> se debe consignar donde y cuando el EMPLEADO ASEGURADO completó la solicitud.</li>
                <li><strong>Firma del Asegurado:</strong> Para que la designación de Beneficiarios sea eficaz, cada Solicitud Individual DEBERÁ estar firmada por el EMPLEADO ASEGURADO, tanto al frente como al dorso de la misma si allí se designaran otros Beneficiarios.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Datos de la Empresa</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Todos los datos que allí se solicitan deben ser completados y firmados por el responsable de la EMPRESA.</li>
                <li><strong>Lugar y Fecha:</strong> se debe consignar donde y cuando el EMPLEADOR firmó la solicitud.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Sección Final</h3>
              <p>NO COMPLETAR</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
