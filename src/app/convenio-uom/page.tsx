import React from 'react';
import Link from 'next/link';

export default function ConvenioUOM() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">CONVENIO UOM</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg mb-4">
            Evolución Seguros ha sido elegida por la Unión Obrera Metalúrgica para asegurar a sus afiliados. 
            A partir del 1 del enero, en seguro de sepelio colectivo y, desde el 1 de febrero, en seguro de vida colectivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <h2 className="text-xl font-semibold mb-4">En caso de fallecimiento:</h2>
            <div className="flex items-center justify-center gap-2">
              <i className="bi bi-telephone-fill text-red-600 text-2xl"></i>
              <p className="text-2xl font-bold text-red-600 mb-2">0800-345-7373</p>
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
            <Link href="#" className="block p-4 border rounded-lg hover:bg-gray-50">
              Certificación de sepelio
            </Link>
            <Link href="#" className="block p-4 border rounded-lg hover:bg-gray-50">
              Certificación de seguro colectivo de vida
            </Link>
            <Link href="#" className="block p-4 border rounded-lg hover:bg-gray-50">
              Certificación fallecimiento del titular
            </Link>
            <Link href="#" className="block p-4 border rounded-lg hover:bg-gray-50">
              Certificación fallecimiento familiar a cargo
            </Link>
            <Link href="#" className="block p-4 border rounded-lg hover:bg-gray-50">
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
