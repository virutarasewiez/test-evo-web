import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo y Redes Sociales */}
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="Company Logo"
              width={150}
              height={40}
              className="mb-4"
              style={{ maxHeight: '60px' }}
            />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/evolseguros/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://ar.linkedin.com/company/evolucion-seguros-s-a-86b265169" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V9.34h2.67V19zm-1.34-11a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08zm12 11h-2.66v-4.66c0-1.11-.02-2.55-1.56-2.55-1.56 0-1.8 1.22-1.8 2.47V19h-2.67V9.34h2.56v1.32h.04c.36-.69 1.22-1.42 2.5-1.42 2.67 0 3.17 1.76 3.17 4.06V19z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/Evolucionseg/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="mb-4 font-semibold text-lg">Contacto</h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                54 11 5278-3600
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <a
                  href="https://api.whatsapp.com/send?phone=5491126589562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  54 911 2658 9562
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                evolucion@evolucionseguros.com.ar
              </li>
            </ul>
          </div>

          {/* Datos Fiscales */}
          <div className="text-center lg:text-right">

            <a
              href="http://qr.afip.gob.ar/?qr=kGL3OdV1P-iE6IVsQQXWPw,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 text-xs"
            >
              <Image
                src="/assets/images/qr-afip.jpg"
                alt="Código QR AFIP"
                width={80}
                height={100}
                className="mx-auto lg:ml-auto"
              />
              <p className="mt-2">CUIT: 30-50005062-0</p>
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Control info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-400 mb-6">
          <div>
            <p className="leading-tight">
              <strong>N° de inscripción en SSN</strong>
              <br />
              0236
            </p>
          </div>
          <div>
            <p className="leading-tight">
              <strong>Atención al asegurado</strong>
              <br />
              0800-666-8400
            </p>
          </div>
          <div>
            <p className="leading-tight">
              <strong>Organismo de control</strong>
              <br />
              <a
                href="https://www.argentina.gob.ar/ssn"
                className="hover:underline"
              >
                argentina.gob.ar/ssn
              </a>
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/SSN-footer-white.png"
              alt="SSN"
              width={300}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Info adicional */}
        <div className="text-center text-xs text-gray-500 space-y-2 leading-tight">
          <p>
            La Entidad Aseguradora dispone de un Servicio de Atención al Asegurado que atenderá en el
            horario de 9:00 a 17:00 horas, las consultas y reclamos que presenten los tomadores de
            seguros, asegurado, beneficiario y/o derechohabiente, hospitales públicos, centros de
            salud pública y/o terceros damnificados.
          </p>
          <p>
            <strong>RESPONSABLE:</strong> Dr. Juan E. Cesaretti - Int. 3633 - denuncias@evolucionseguros.com.ar
            <br />
            <strong>SUPLENTE:</strong> Sr. Alejandro Vykoukal - Int. 3640 - denuncias@evolucionseguros.com.ar
          </p>
          <p>
            En caso de que el reclamo no haya sido resuelto o haya sido desestimado, podrá comunicarse
            con la Superintendencia de Seguros de la Nación: 0800-666-8400 o
            <a href="mailto:denuncias@ssn.gob.ar" className="hover:underline ml-1">denuncias@ssn.gob.ar</a>
            , o formulario en
            <a href="https://www.argentina.gob.ar/ssn" className="hover:underline ml-1">argentina.gob.ar/ssn</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
