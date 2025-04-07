'use client';

import { ReactNode } from 'react';

interface IngresoLayoutProps {
  children: ReactNode;
}

export default function IngresoLayout({ children }: IngresoLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 