"use client";

import { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError('Por favor, complete los campos obligatorios');
      return;
    }
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo simulamos el envío
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    
    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setEnviado(false);
    }, 3000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">


        {enviado ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p className="font-bold">¡Gracias por contactarnos!</p>
            <p>Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
            {error && (
              <div className="bg-primary-light border border-primary text-primary px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-800 font-medium mb-2">
                  Nombre completo <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Correo electrónico <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="telefono" className="block text-gray-800 font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-gray-800 font-medium mb-2">
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="cotizacion">Cotización</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="consulta">Consulta general</option>
                  <option value="siniestro">Siniestro</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-800 font-medium mb-2">
                Mensaje <span className="text-primary">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white text-lg px-8 py-3 rounded-lg hover:bg-primary-hover transition"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 