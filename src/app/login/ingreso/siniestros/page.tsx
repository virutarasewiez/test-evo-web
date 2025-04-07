'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import FormularioContacto from "@/components/FormularioContacto";

export default function SiniestrosPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      router.push('/login');
      return;
    }

    try {
      JSON.parse(storedData);
    } catch (err) {
      console.error('Error al parsear los datos del usuario:', err);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleSidebarToggle = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

  if (loading) {
    return (
      <div className="flex h-screen">
        <Sidebar onToggle={handleSidebarToggle} />
        <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-16`}>
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9A2329]"></div>
            <span className="text-lg text-gray-600">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16`}>
        <main className="py-10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Tuviste un siniestro?</h2>
              <div className="h-1 w-24 bg-[#9A2329] mx-auto rounded"></div>
            </div>
            
            <p className="text-lg mb-6 text-gray-800">
              Completa el formulario con los detalles de lo ocurrido y nos pondremos en contacto con vos lo antes posible. Estamos acá para ayudarte en todo momento.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Tarjeta de Teléfono */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                <div className="text-[#9A2329] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Teléfono</h3>
                <p className="text-gray-600">54 11 5278-3600</p>
                <p className="text-gray-600">54 911 2658 9562</p>
              </div>

              {/* Tarjeta de Email */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                <div className="text-[#9A2329] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600">evolucion@evolucionseguros.com.ar</p>
              </div>

              {/* Tarjeta de Horario */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
                <div className="text-[#9A2329] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Horario de Atención</h3>
                <p className="text-gray-600">Lunes a Viernes</p>
                <p className="text-gray-600">9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <FormularioContacto />
        </main>
      </div>
    </div>
  );
} 