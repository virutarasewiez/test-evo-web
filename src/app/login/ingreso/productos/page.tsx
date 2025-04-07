'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Seguros from '@/components/seguros';

export default function OfertasPage() {
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
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 flex items-center justify-center`}>
        <div className="w-full max-w-6xl mx-auto px-4">
          <Seguros />
        </div>
      </div>
    </div>
  );
} 