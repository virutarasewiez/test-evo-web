"use client";

import { useEffect } from 'react';

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

const Chatbot = () => {
  useEffect(() => {
    // Inicializar el objeto global de Zoho
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function() {} };

    // Crear y cargar el script de Zoho SalesIQ
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq41b6761b0bbcfc1704b99e63e266b0f301e1ea15ff7ab95cfc59dba63e0f2cf3';
    script.defer = true;
    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // El componente no renderiza nada visible
};

export default Chatbot;
