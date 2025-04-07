'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
      <main className={`flex-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} flex items-center justify-center pt-16`}>
        <div className="max-w-4xl w-full mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#9A2329] mb-4">
                ¡Bienvenido, {userData?.Apellido || 'Apellido'}! 
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gracias por acceder a nuestra plataforma. Aquí podrás gestionar tus pólizas y servicios de manera sencilla.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Accesos Rápidos</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/login/ingreso/polizas" className="flex items-center text-gray-700 hover:text-[#9A2329] transition-colors">
                        <i className="bi bi-file-earmark-text text-xl mr-3 text-[#9A2329]"></i>
                        Ver mis pólizas
                      </Link>
                    </li>
                    <li>
                      <Link href="/login/ingreso/cobros" className="flex items-center text-gray-700 hover:text-[#9A2329] transition-colors">
                        <i className="bi bi-cash text-xl mr-3 text-[#9A2329]"></i>
                        Gestionar cobros
                      </Link>
                    </li>
                    <li>
                      <Link href="/login/ingreso/chat" className="flex items-center text-gray-700 hover:text-[#9A2329] transition-colors">
                        <i className="bi bi-chat-dots text-xl mr-3 text-[#9A2329]"></i>
                        Contactar soporte
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#9A2329] mb-4">Información de Usuario</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <i className="bi bi-envelope text-xl mr-3 text-[#9A2329]"></i>
                      {userData?.Mail}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="bi bi-person-circle text-xl mr-3 text-[#9A2329]"></i>
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