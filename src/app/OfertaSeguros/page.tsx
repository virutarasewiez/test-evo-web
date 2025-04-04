export default function Home() {
  const seguros = [
    { label: "Protección Personal", icon: "bi-person" },
    { label: "Vida Colectivo", icon: "bi-people" },
    { label: "Sepelio", icon: "bi-heartbreak" },
    { label: "Accidentes Personales", icon: "bi-exclamation-triangle" },
    { label: "Garantía de Alquiler", icon: "bi-key" },
    { label: "Más información", icon: "bi-info-circle" },
    { label: "Protección Familiar", icon: "bi-house-heart" },
    { label: "Combinado Familiar", icon: "bi-house-door" },
    { label: "Seguro de Incendio", icon: "bi-fire" },
    { label: "Educación Segura", icon: "bi-book" },
    { label: "Más información", icon: "bi-info-circle" },
    { label: "Protección Empresarial", icon: "bi-building" },
    { label: "Caución", icon: "bi-file-earmark-lock" },
    { label: "Responsabilidad Civil General", icon: "bi-shield-check" },
    { label: "Integral de Comercio", icon: "bi-shop" },
    { label: "Integral de Consorcio", icon: "bi-building-add" },
    { label: "Seguros Técnicos", icon: "bi-cpu" },
    { label: "Transporte de Mercadería", icon: "bi-truck" },
    { label: "Praxis Médica", icon: "bi-hospital" },
    { label: "Praxis Profesionales", icon: "bi-person-vcard" },
  ];

  return (
    <main className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contratá los seguros que tenemos para vos</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto rounded"></div>
          </div>
          
          <p className="text-lg mb-6 text-gray-800">
          
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {seguros.map((seguro, index) => (
            <div
              key={index}
              className="p-3 flex flex-col items-center bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <i className={`${seguro.icon} text-2xl text-red-600`} />
              <div className="mt-2 text-sm text-center text-gray-800">
                {seguro.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
