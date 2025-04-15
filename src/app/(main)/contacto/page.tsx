import FormularioContacto from "@/components/FormularioContacto"

export default function ContactPage() {
  return (
    <main className="bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Necesitas asesoramiento personalizado?</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>
        
        <p className="text-lg mb-6 text-gray-800">
          Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Tarjeta de Teléfono de Emergencia */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">En caso de fallecimiento</h3>
            <p className="text-gray-600">0800-345-7373</p>
          </div>

          {/* Tarjeta de Teléfono General */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Para otras Consultas</h3>
            <p className="text-gray-600">(5411) 5278 – 3600</p>
            <p className="text-gray-600">Lunes a Viernes</p>
            <p className="text-gray-600">09:00 a 17:00 horas</p>
          </div>

          {/* Tarjeta de WhatsApp */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">WhatsApp</h3>
            <a href="https://wa.me/5491126589562" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              54 911 2658 9562
            </a>
          </div>
        </div>
      </div>

      <FormularioContacto />
    </main>
  )
}

