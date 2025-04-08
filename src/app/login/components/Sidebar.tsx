'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface UserData {
  Nombre: string | null;
  Apellido: string;
  Mail: string;
  session_token: string;
}

interface SidebarProps {
  onToggle?: (isOpen: boolean) => void;
}

export default function Sidebar({ onToggle }: SidebarProps) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    router.push('/login');
  };

  const menuItems = [
    { name: 'Inicio', path: '/login/ingreso/bienvenida', icon: 'bi-house-door' },
    { name: 'Productos', path: '/login/ingreso/productos', icon: 'bi-file-text' },
    { name: 'Siniestros', path: '/login/ingreso/siniestros', icon: 'bi-file-text' },
    { name: 'Pólizas', path: '/login/ingreso/polizas', icon: 'bi-file-earmark-text' },
    { name: 'Detalle de Pólizas', path: '/login/ingreso/detallepoliza', icon: 'bi-file-earmark-text' },
    { name: 'Cobros', path: '/login/ingreso/cobros', icon: 'bi-cash' },
    { name: 'Contacto', path: '/login/ingreso/contacto', icon: 'bi-telephone' },
    { name: 'Chat', path: '/login/ingreso/chat', icon: 'bi-chat-dots' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100"
      >
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* User Profile Section */}
      <div className="p-4 border-b mt-16">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <i className="bi bi-person-circle text-4xl text-[#9A2329]"></i>
          </div>
          {isOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {userData?.Nombre} {userData?.Apellido}
              </p>
              <p className="text-xs text-gray-500 truncate">{userData?.Mail}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <i className={`bi ${item.icon} text-xl text-[#9A2329]`}></i>
                {isOpen && <span className="text-[#9A2329]">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-3 px-4 py-2 text-[#9A2329] bg-red-50 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          {isOpen && <span>Cerrar sesión</span>}
        </button>
      </div>
    </div>
  );
} 