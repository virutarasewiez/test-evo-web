'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';

interface Poliza {
  IdPoliza: number;
  ItemNro: number;
  Descripcion: string;
  PolizaNro: number;
  FechaEmisionOriginal: string;
  VigenciaDesde: string;
  VigenciaHasta: string | null;
  EstadoItem: string | null;
  FechaAlta: string;
  FechaBaja: string | null;
  IdProvinciaRiesgo: number;
  ProvinciaRiesgo: string | null;
  Seccion: {
    IdSeccion: number;
    Codigo: number;
    Descripcion: string;
    SeccionTipo: {
      IdSeccionTipo: number;
      Descripcion: string;
    }
  };
  CentroCosto: {
    IdCentroCosto: number;
    Descripcion: string;
    Domicilio: string | null;
    Horario: string | null;
    Latitud: number | null;
    Longitud: number | null;
    Observaciones: string | null;
  };
  Tomador: {
    Nombre: string;
    Codigo: number;
    Telefono: string[];
  };
  Asegurado: {
    Nombre: string;
    CUIT: string | null;
    TipoDoc: string | null;
    NroDocumento: number;
    FechaNacimiento: string | null;
  };
  Productor: {
    Codigo: string;
    Cuenta: string;
  };
  VendedorPoliza: {
    Codigo: string;
    Cuenta: string;
  };
  VendedorItem: {
    Codigo: string;
    Cuenta: string;
  };
  Auto: unknown | null;
  Riesgo: {
    CoberturaPaquete: string;
    SumaAsegurada: number;
  };
  Coberturas: {
    IdCobertura: number;
    Codigo: string;
    Descripcion: string;
    SumaAsegurada: number;
  }[];
  Documentos: unknown[];
  FormaCobro: {
    IdFormaCobro: number;
    Descripcion: string;
  };
  Domicilio: {
    Calle: string;
    Numero: number;
    Piso: string;
    Departamento: string;
    IdProvincia: number;
    Provincia: string;
    CodigoPostal: string;
    Localidad: string;
    IdCodigoPostal: number;
    IdTipoDomicilio: number;
    TipoDomicilio: string | null;
    IdPais: number;
    Pais: string;
  }[];
}

export default function DetallePolizaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [polizas, setPolizas] = useState<Poliza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPoliza, setSelectedPoliza] = useState<Poliza | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [, setTotalSumaAsegurada] = useState(0);
  const [, setPolizasVigentes] = useState(0);
  const [, setPolizasRecientes] = useState(0);

  // Función para determinar el tamaño del texto según la longitud
  const getTextSizeClass = (text: string) => {
    if (!text) return 'text-lg';
    const length = text.length;
    if (length <= 15) return 'text-lg';
    if (length <= 30) return 'text-base';
    if (length <= 45) return 'text-sm';
    return 'text-xs';
  };

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
          
          // Calcular estadísticas
          const sumaTotal = data.payload.reduce((total: number, poliza: Poliza) => 
            total + (poliza.Riesgo?.SumaAsegurada || 0), 0);
          setTotalSumaAsegurada(sumaTotal);
          
          const hoy = new Date();
          const tresMesesAtras = new Date();
          tresMesesAtras.setMonth(hoy.getMonth() - 3);
          
          const vigentes = data.payload.filter((poliza: Poliza) => {
            const vigenciaHasta = poliza.VigenciaHasta ? new Date(poliza.VigenciaHasta) : null;
            return vigenciaHasta && vigenciaHasta > hoy;
          }).length;
          setPolizasVigentes(vigentes);
          
          const recientes = data.payload.filter((poliza: Poliza) => {
            const fechaEmision = new Date(poliza.FechaEmisionOriginal);
            return fechaEmision >= tresMesesAtras;
          }).length;
          setPolizasRecientes(recientes);
          
          console.log({ totalSumaAsegurada: sumaTotal, polizasVigentes: vigentes, polizasRecientes: recientes });
          
          // Obtener el ID de la póliza de la URL
          const polizaId = searchParams.get('id');
          if (polizaId) {
            const poliza = data.payload.find((p: Poliza) => p.IdPoliza === parseInt(polizaId));
            if (poliza) {
              setSelectedPoliza(poliza);
            }
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchPolizas();
  }, [router, searchParams]);

  const handleSidebarToggle = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

  const handlePolizaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const polizaId = parseInt(e.target.value);
    const poliza = polizas.find(p => p.IdPoliza === polizaId) || null;
    setSelectedPoliza(poliza);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-AR');
  };

  if (loading) {
    return (
      <div className="flex h-screen">
        <Sidebar onToggle={handleSidebarToggle} />
        <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center`}>
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
      <div className="flex h-screen">
        <Sidebar onToggle={handleSidebarToggle} />
        <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4`}>
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
    <div className="flex h-screen">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 overflow-auto`}>
        <div className="w-full">
          {/* Tarjetas de Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#9A2329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-medium text-gray-500">Suma Asegurada</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedPoliza 
                      ? `$${selectedPoliza.Riesgo.SumaAsegurada.toLocaleString('es-AR')}` 
                      : '-'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#9A2329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-medium text-gray-500">Sección</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedPoliza 
                      ? selectedPoliza.Seccion.Descripcion 
                      : '-'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#9A2329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-medium text-gray-500">Fecha de Emisión</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedPoliza 
                      ? formatDate(selectedPoliza.FechaEmisionOriginal) 
                      : '-'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#9A2329]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-xs font-medium text-gray-500">Asegurado</p>
                  <p className={`font-semibold text-gray-900 ${selectedPoliza ? getTextSizeClass(selectedPoliza.Asegurado.Nombre) : 'text-lg'}`}>
                    {selectedPoliza 
                      ? selectedPoliza.Asegurado.Nombre 
                      : '-'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Detalle de Póliza</h2>
              <Link 
                href="/login/ingreso/polizas"
                className="inline-flex items-center px-4 py-2 bg-[#9A2329] text-white rounded-lg hover:bg-[#7A1C21] transition-colors duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Pólizas
              </Link>
            </div>
            
            <div className="mb-6">
              <label htmlFor="poliza-select" className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar Póliza
              </label>
              <select
                id="poliza-select"
                className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                onChange={handlePolizaChange}
                value={selectedPoliza?.IdPoliza || ''}
              >
                <option value="">Seleccione una póliza</option>
                {polizas.map((poliza) => (
                  <option key={poliza.IdPoliza} value={poliza.IdPoliza}>
                    Póliza #{poliza.PolizaNro} - {poliza.Descripcion}
                  </option>
                ))}
              </select>
            </div>

            {selectedPoliza ? (
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Información General</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">ID Póliza:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.IdPoliza}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Número de Póliza:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.PolizaNro}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Descripción:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Descripcion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Fecha de Emisión:</span>
                        <span className="text-sm text-gray-900">{formatDate(selectedPoliza.FechaEmisionOriginal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Vigencia Desde:</span>
                        <span className="text-sm text-gray-900">{formatDate(selectedPoliza.VigenciaDesde)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Vigencia Hasta:</span>
                        <span className="text-sm text-gray-900">{formatDate(selectedPoliza.VigenciaHasta)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Sección:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Seccion.Descripcion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Tipo de Sección:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Seccion.SeccionTipo.Descripcion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Centro de Costo:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.CentroCosto.Descripcion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Información de Partes</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Tomador:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Tomador.Nombre}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Asegurado:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Asegurado.Nombre}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Productor:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Productor.Cuenta}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Código Productor:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.Productor.Codigo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Suma Asegurada:</span>
                        <span className="text-sm text-gray-900">${selectedPoliza.Riesgo.SumaAsegurada.toLocaleString('es-AR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">Forma de Cobro:</span>
                        <span className="text-sm text-gray-900">{selectedPoliza.FormaCobro.Descripcion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Domicilio</h3>
                    <div className="space-y-3">
                      {selectedPoliza.Domicilio.length > 0 ? (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Calle:</span>
                            <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Calle} {selectedPoliza.Domicilio[0].Numero}</span>
                          </div>
                          {selectedPoliza.Domicilio[0].Piso && (
                            <div className="flex justify-between">
                              <span className="text-sm font-medium text-gray-700">Piso:</span>
                              <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Piso}</span>
                            </div>
                          )}
                          {selectedPoliza.Domicilio[0].Departamento && (
                            <div className="flex justify-between">
                              <span className="text-sm font-medium text-gray-700">Departamento:</span>
                              <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Departamento}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Localidad:</span>
                            <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Localidad}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Provincia:</span>
                            <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Provincia}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Código Postal:</span>
                            <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].CodigoPostal}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">País:</span>
                            <span className="text-sm text-gray-900">{selectedPoliza.Domicilio[0].Pais}</span>
                          </div>
                        </>
                      ) : (
                        <p className="text-sm text-gray-500">No disponible</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Coberturas</h3>
                    <div className="space-y-3">
                      {selectedPoliza.Coberturas.length > 0 ? (
                        <ul className="space-y-2">
                          {selectedPoliza.Coberturas.map((cobertura) => (
                            <li key={cobertura.IdCobertura} className="border-b pb-2">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">{cobertura.Descripcion}</span>
                                <span className="text-sm text-gray-900">${cobertura.SumaAsegurada.toLocaleString('es-AR')}</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">Código: {cobertura.Codigo}</div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">No hay coberturas disponibles</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Seleccione una póliza para ver sus detalles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 