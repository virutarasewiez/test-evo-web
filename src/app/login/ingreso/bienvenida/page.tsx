'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

interface UserData {
  Nombre: string | null;
  Apellido: string;
  Mail: string;
  session_token: string;
}

export default function BienvenidaPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      router.push('/login');
      return;
    }

    try {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    } catch (err) {
      console.error('Error al parsear los datos del usuario:', err);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex">
        <Sidebar onToggle={setIsSidebarOpen} />
        <div className={`flex-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="text-lg text-gray-600">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar onToggle={setIsSidebarOpen} />
      <main className={`flex-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ¡Bienvenido, {userData?.Nombre || 'Usuario'}!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gracias por acceder a nuestra plataforma. Aquí podrás gestionar tus pólizas y servicios de manera sencilla.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-2">Accesos Rápidos</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2">📋</span>
                      Ver mis pólizas
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2">💰</span>
                      Gestionar cobros
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2">📞</span>
                      Contactar soporte
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-green-900 mb-2">Información de Contacto</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-700">
                      <span className="mr-2">📧</span>
                      {userData?.Mail}
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="mr-2">👤</span>
                      {userData?.Nombre} {userData?.Apellido}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 