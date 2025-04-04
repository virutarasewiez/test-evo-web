export default function Oficinavirtual() {
    const items = [
      { icon: "bi-person-circle", label: "Ingreso Clientes", href: "https://ingresopas.evolucionseguros.com/" },
      { icon: "bi-key", label: "Ingreso PAS", href: "https://ingresopas.evolucionseguros.com/" },
      { icon: "bi-headset", label: "Soporte PAS", href: "#" },
      { icon: "bi-calculator", label: "Cotizador", href: "https://cotizador.evolucionseguros.com/" },
      { icon: "bi-file-earmark-text", label: "Convenio UOM", href: "#" },
      { icon: "bi-building", label: "Ingreso Grupo Olmos", href: "#" },
      { icon: "bi-exclamation-triangle", label: "Siniestros", href: "#" },
      { icon: "bi-envelope", label: "Contacto", href: "#" },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-800" >OFICINA VIRTUAL</h2>
            <div className="h-1 w-24 mx-auto bg-red-600"></div>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map(({ icon, label, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <i className={`bi ${icon} text-red-600 text-4xl mb-4 block`} />
                <h5 className="text-lg font-medium text-gray-800">{label}</h5>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  