'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Company Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/oficinavirtual"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center"
          >
            <i className="bi bi-building-door mr-2"></i>Oficina Virtual
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700"
              >
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <circle cx="18" cy="12" r="1.5" fill="currentColor" />
                <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                <circle cx="18" cy="18" r="1.5" fill="currentColor" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <ul className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {[
                  { href: '/', label: 'Inicio', icon: 'bi-house-door' },
                  { href: '/nosotros', label: 'Nosotros', icon: 'bi-info-circle' },
                  { href: '/seguros', label: 'Seguros', icon: 'bi-shield-check' },
                  { href: '/convenio-uom', label: 'Convenio UOM', icon: 'bi-check-circle' },
                  { href: '/productores', label: 'Productores', icon: 'bi-person' },
                  { href: '/siniestros', label: 'Siniestros', icon: 'bi-x-circle' },
                  { href: '/oficinavirtual', label: 'Oficina Virtual', icon: 'bi-laptop' },
                  { href: '/contacto', label: 'Contacto', icon: 'bi-envelope' },
                ].map(({ href, label, icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <i className={`bi ${icon} mr-2`}></i> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
