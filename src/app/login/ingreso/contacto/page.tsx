'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function ContactoPage() {
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
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-16`}>
        <div className="max-w-4xl w-full mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#9A2329] mb-6">Contacto</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Información de Contacto</h2>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <i className="bi bi-telephone text-xl mr-3 text-[#9A2329]"></i>
                    Teléfono: 54 11 5278-3600
                  </p>
                  <p className="flex items-center text-gray-700">
                    <i className="bi bi-phone text-xl mr-3 text-[#9A2329]"></i>
                    Móvil: 54 911 2658 9562
                  </p>
                  <p className="flex items-center text-gray-700">
                    <i className="bi bi-envelope text-xl mr-3 text-[#9A2329]"></i>
                    Email: evolucion@evolucionseguros.com.ar
                  </p>
                  <p className="flex items-center text-gray-700">
                    <i className="bi bi-building text-xl mr-3 text-[#9A2329]"></i>
                    Azopardo 1405 – Piso 8 (C1107ADY), CABA Argentina
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Horarios de Atención</h2>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <i className="bi bi-clock text-xl mr-3 text-[#9A2329]"></i>
                    Lunes a Viernes: 9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 