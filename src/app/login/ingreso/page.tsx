'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  session_token: string;
  Nombre: string | null;
  Apellido: string;
  Mail: string;
}

export default function IngresoPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      // Obtener los datos del localStorage
      const storedData = localStorage.getItem('userData');
      
      if (!storedData) {
        // Si no hay datos, redirigir al login
        router.push('/login');
        return;
      }

      const parsedData = JSON.parse(storedData);
      
      // Verificar que los datos tengan la estructura correcta
      if (!parsedData.session_token || !parsedData.Apellido || !parsedData.Mail) {
        console.error('Datos de usuario incompletos:', parsedData);
        setError('Los datos de usuario están incompletos o corruptos');
        return;
      }
      
      setUserData(parsedData);
    } catch (err) {
      console.error('Error al cargar datos de usuario:', err);
      setError('Error al cargar los datos de usuario');
      localStorage.removeItem('userData');
      router.push('/login');
    }
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => {
              localStorage.removeItem('userData');
              router.push('/login');
            }}
            className="mt-4 px-4 py-2 bg-[#9A2329] text-white rounded-md hover:bg-[#7a1c21]"
          >
            Volver al login
          </button>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Cargando...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Datos de Usuario</h1>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Información Personal</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Nombre:</p>
                  <p className="mt-1 text-sm text-gray-900">{userData.Nombre || 'No disponible'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Apellido:</p>
                  <p className="mt-1 text-sm text-gray-900">{userData.Apellido}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Correo Electrónico:</p>
                  <p className="mt-1 text-sm text-gray-900">{userData.Mail}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Token de Sesión</h2>
              <div className="bg-white p-3 rounded border border-gray-200 overflow-x-auto">
                <code className="text-sm text-gray-800 break-all">{userData.session_token}</code>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                localStorage.removeItem('userData');
                router.push('/login');
              }}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9A2329] hover:bg-[#7a1c21] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9A2329]"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
