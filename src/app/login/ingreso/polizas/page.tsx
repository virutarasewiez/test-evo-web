'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

interface Poliza {
  IdPoliza: number;
  PolizaNro: number;
  Descripcion: string;
  VigenciaDesde: string;
  VigenciaHasta: string | null;
  Tomador: {
    Nombre: string;
  };
  Asegurado: {
    Nombre: string;
  };
  Productor: {
    Cuenta: string;
  };
  Seccion: {
    Descripcion: string;
  };
  Riesgo: {
    SumaAsegurada: number;
  };
}

type SortField = 'PolizaNro' | 'Tomador.Nombre' | 'Productor.Cuenta' | 'Asegurado.Nombre' | 'Descripcion' | 'Seccion.Descripcion' | 'Riesgo.SumaAsegurada' | 'VigenciaDesde' | 'VigenciaHasta';
type SortOrder = 'asc' | 'desc';

export default function PolizasPage() {
  const router = useRouter();
  const [polizas, setPolizas] = useState<Poliza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('PolizaNro');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const fetchPolizas = async () => {
      try {
        const userData = localStorage.getItem('userData');
        if (!userData) {
          router.push('/login');
          return;
        }

        const { session_token } = JSON.parse(userData);
        if (!session_token) {
          router.push('/login');
          return;
        }

        const response = await fetch('https://ingresopas-testing.evolucionseguros.com/dcxapi/api/V1/Poliza/obtenerpolizas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${session_token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener las pólizas');
        }

        const data = await response.json();
        if (data.payload) {
          setPolizas(data.payload);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchPolizas();
  }, [router]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const getSortedPolizas = (polizas: Poliza[]) => {
    return [...polizas].sort((a, b) => {
      let valueA: any = a;
      let valueB: any = b;
      
      // Manejar campos anidados
      const fields = sortField.split('.');
      for (const field of fields) {
        valueA = valueA[field];
        valueB = valueB[field];
      }

      if (valueA === null) return sortOrder === 'asc' ? -1 : 1;
      if (valueB === null) return sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return sortOrder === 'asc' 
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return sortOrder === 'asc' 
        ? valueA - valueB
        : valueB - valueA;
    });
  };

  const isPolizaVigente = (poliza: Poliza) => {
    const hoy = new Date();
    const vigenciaDesde = new Date(poliza.VigenciaDesde);
    const vigenciaHasta = poliza.VigenciaHasta ? new Date(poliza.VigenciaHasta) : null;

    // Si tiene fecha de vencimiento, verificar si está dentro del rango
    if (vigenciaHasta) {
      return hoy >= vigenciaDesde && hoy <= vigenciaHasta;
    }
    
    // Si no tiene fecha de vencimiento, solo verificar que haya comenzado
    return hoy >= vigenciaDesde;
  };

  const filteredPolizas = getSortedPolizas(polizas.filter(poliza => 
    poliza.PolizaNro.toString().includes(searchTerm) ||
    poliza.Descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poliza.Tomador.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poliza.Asegurado.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const totalSumaAsegurada = polizas.reduce((sum, poliza) => sum + poliza.Riesgo.SumaAsegurada, 0);
  const polizasVigentes = polizas.filter(poliza => isPolizaVigente(poliza)).length;
  const promedioSumaAsegurada = totalSumaAsegurada / polizas.length;
  const polizasRecientes = polizas.filter(poliza => {
    const fechaVigencia = new Date(poliza.VigenciaDesde);
    const hoy = new Date();
    const diffMeses = (hoy.getFullYear() - fechaVigencia.getFullYear()) * 12 + (hoy.getMonth() - fechaVigencia.getMonth());
    return diffMeses <= 3;
  }).length;

  const exportToCSV = () => {
    const headers = ['N° Póliza', 'Tomador', 'Productor', 'Asegurado', 'Descripción', 'Sección', 'Suma Asegurada', 'Vigencia Desde', 'Vigencia Hasta', 'Estado'];
    const csvContent = [
      headers.join(','),
      ...filteredPolizas.map(poliza => [
        poliza.PolizaNro,
        `"${poliza.Tomador.Nombre}"`,
        `"${poliza.Productor.Cuenta}"`,
        `"${poliza.Asegurado.Nombre}"`,
        `"${poliza.Descripcion}"`,
        `"${poliza.Seccion.Descripcion}"`,
        poliza.Riesgo.SumaAsegurada,
        poliza.VigenciaDesde,
        poliza.VigenciaHasta || 'Vigente',
        isPolizaVigente(poliza) ? 'Vigente' : 'No Vigente'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'polizas.csv';
    link.click();
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return (
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortOrder === 'asc' ? (
      <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="text-lg text-gray-600">Cargando pólizas...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full border-l-4 border-red-500">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900">Error al cargar las pólizas</h3>
            </div>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="w-full">
          {/* Tarjetas de Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Pólizas</p>
                  <p className="text-2xl font-semibold text-gray-900">{polizas.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Suma Asegurada Total</p>
                  <p className="text-2xl font-semibold text-gray-900">${totalSumaAsegurada.toLocaleString('es-AR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Pólizas Vigentes</p>
                  <p className="text-2xl font-semibold text-gray-900">{polizasVigentes}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Pólizas Recientes (3 meses)</p>
                  <p className="text-2xl font-semibold text-gray-900">{polizasRecientes}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Búsqueda y Exportación */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Buscar por número, descripción, tomador o asegurado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                onClick={exportToCSV}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Exportar a CSV
              </button>
            </div>
          </div>

          {/* Tabla Principal */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Pólizas</h2>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualizar
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('PolizaNro')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>N° Póliza</span>
                        <SortIcon field="PolizaNro" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Tomador.Nombre')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Tomador</span>
                        <SortIcon field="Tomador.Nombre" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Productor.Cuenta')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Productor</span>
                        <SortIcon field="Productor.Cuenta" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Asegurado.Nombre')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Asegurado</span>
                        <SortIcon field="Asegurado.Nombre" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Descripcion')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Descripción</span>
                        <SortIcon field="Descripcion" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Seccion.Descripcion')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Sección</span>
                        <SortIcon field="Seccion.Descripcion" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('Riesgo.SumaAsegurada')}
                    >
                      <div className="flex items-center justify-end space-x-1">
                        <span>Suma Asegurada</span>
                        <SortIcon field="Riesgo.SumaAsegurada" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('VigenciaDesde')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Vigencia Desde</span>
                        <SortIcon field="VigenciaDesde" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('VigenciaHasta')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Vigencia Hasta</span>
                        <SortIcon field="VigenciaHasta" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPolizas.map((poliza) => (
                    <tr key={poliza.IdPoliza} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {poliza.PolizaNro}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="max-w-xs truncate" title={poliza.Tomador.Nombre}>
                          {poliza.Tomador.Nombre}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="max-w-xs truncate" title={poliza.Productor.Cuenta}>
                          {poliza.Productor.Cuenta}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="max-w-xs truncate" title={poliza.Asegurado.Nombre}>
                          {poliza.Asegurado.Nombre}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="max-w-xs truncate" title={poliza.Descripcion}>
                          {poliza.Descripcion}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {poliza.Seccion.Descripcion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                        ${poliza.Riesgo.SumaAsegurada.toLocaleString('es-AR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(poliza.VigenciaDesde).toLocaleDateString('es-AR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {poliza.VigenciaHasta ? new Date(poliza.VigenciaHasta).toLocaleDateString('es-AR') : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {isPolizaVigente(poliza) ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Vigente
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            No Vigente
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <a href="#" className="text-blue-600 hover:text-blue-900">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Mostrando <span className="font-medium text-gray-900">{filteredPolizas.length}</span> de <span className="font-medium text-gray-900">{polizas.length}</span> pólizas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 