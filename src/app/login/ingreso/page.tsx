'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IngresoPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la página de pólizas
    router.push('/login/ingreso/polizas');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="text-lg text-gray-600">Redirigiendo...</span>
      </div>
    </div>
  );
}
