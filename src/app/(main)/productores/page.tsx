import Asesoramiento from "@/components/asesoramiento";

export default function Page() {
  const items = [
    
    { icon: "bi-key", label: "Ingreso PAS", href: "https://ingresopas.evolucionseguros.com/", target: "_blank", rel: "noopener noreferrer" },
    { icon: "bi-headset", label: "Soporte PAS", href: "soporte" },
    { icon: "bi-calculator", label: "Cotizador", href: "https://cotizador.evolucionseguros.com/", target: "_blank", rel: "noopener noreferrer" },
    { icon: "bi-exclamation-triangle", label: "Siniestros", href: "siniestros" },
    
  ];

  return (
    <>


      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">OFICINA VIRTUAL PAS</h2>
            <div className="h-1 w-24 mx-auto bg-primary"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map(({ icon, label, href, target, rel }, idx) => (
              <a
                key={idx}
                href={href}
                target={target}
                rel={rel}
                className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <i className={`bi ${icon} text-primary text-4xl mb-4 block`} />
                <h5 className="text-lg font-medium text-gray-800">{label}</h5>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Asesoramiento />
    </>
  );
}
