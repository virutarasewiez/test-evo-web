import FormularioContacto from "@/components/FormularioContacto";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Necesitas asesoramiento personalizado?</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
          </div>
          
          <p className="text-lg mb-6 text-gray-800">
            Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
          </p>
        </div>
      </section>

      <FormularioContacto />

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta Fallecimiento */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">En caso de fallecimiento</h3>
                <p className="text-2xl font-semibold text-primary">0800-345-7373</p>
              </div>
            </div>

            {/* Tarjeta Consultas */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Para otras Consultas</h3>
                <p className="text-2xl font-semibold text-primary mb-2">(5411) 5278 – 3600</p>
                <p className="text-gray-600">Lunes a Viernes</p>
                <p className="text-gray-600">09:00 a 17:00 horas</p>
              </div>
            </div>

            {/* Tarjeta WhatsApp */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                <a 
                  href="https://wa.me/5491126589562" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  54 911 2658 9562
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
