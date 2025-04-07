'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function CobrosPage() {
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
            <h1 className="text-3xl font-bold text-[#9A2329] mb-6">Gestión de Cobros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Próximos Vencimientos</h2>
                <div className="flex items-center text-gray-700">
                  <i className="bi bi-calendar-check text-xl mr-3 text-[#9A2329]"></i>
                  <p>No hay vencimientos próximos.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Historial de Pagos</h2>
                <div className="flex items-center text-gray-700">
                  <i className="bi bi-clock-history text-xl mr-3 text-[#9A2329]"></i>
                  <p>No hay pagos registrados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 