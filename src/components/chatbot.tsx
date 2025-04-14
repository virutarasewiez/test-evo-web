"use client";

import { useEffect, useState } from 'react';

// Declaración de tipos para Zoho SalesIQ
declare global {
  interface Window {
    $zoho: {
      salesiq: {
        ready: () => void;
      };
    };
  }
}

const Chatbot = ({ isActive = true }: { isActive?: boolean }) => {
  useEffect(() => {
    // Solo cargar el script si el chatbot está activo
    if (isActive) {
      // Inicializar el objeto global de Zoho
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function() {} };

      // Crear y cargar el script de Zoho SalesIQ
      const script = document.createElement('script');
      script.id = 'zsiqscript';
      script.src = 'https://salesiq.zohopublic.com/widget?wc=siq41b6761b0bbcfc1704b99e63e266b0f301e1ea15ff7ab95cfc59dba63e0f2cf3';
      script.defer = true;
      document.body.appendChild(script);

      // Limpieza al desmontar el componente o cuando isActive cambia a false
      return () => {
        try {
          const existingScript = document.getElementById('zsiqscript');
          if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
          }
        } catch (error) {
          console.error('Error al limpiar el script de Zoho SalesIQ:', error);
        }
      };
    }
  }, [isActive]); // El efecto se ejecutará cuando cambie el estado de isActive

  return null; // El componente no renderiza nada visible
};

export default Chatbot;
