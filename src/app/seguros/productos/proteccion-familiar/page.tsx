import Asesoramiento from "@/components/asesoramiento";
import Link from "next/link";

export default function Home() {
  const seguros = [
    // { label: "Protección Personal", icon: "bi-person" },
    // { label: "Vida Colectivo", icon: "bi-people" },
    // { label: "Sepelio", icon: "bi-heartbreak" },
    // { label: "Accidentes Personales", icon: "bi-exclamation-triangle" },
    // { label: "Garantía de Alquiler", icon: "bi-key" },
    // { label: "Más información", icon: "bi-info-circle" },
    // { label: "Protección Familiar", icon: "bi-house-heart" },
    { label: "Combinado Familiar", icon: "bi-house-door", href: "/seguros/productos/pf-combinadofamiliar" },
    { label: "Seguro de Incendio", icon: "bi-fire", href: "/seguros/productos/pf-segurodeincendio" },
    { label: "Educación Segura", icon: "bi-book", href: "/seguros/productos/pf-educacionsegura" },
    // { label: "Más información", icon: "bi-info-circle" },
    // { label: "Protección Empresarial", icon: "bi-building" },
    // { label: "Caución", icon: "bi-file-earmark-lock" },
    // { label: "Responsabilidad Civil General", icon: "bi-shield-check" },
    // { label: "Integral de Comercio", icon: "bi-shop" },
    // { label: "Integral de Consorcio", icon: "bi-building-add" },
    // { label: "Seguros Técnicos", icon: "bi-cpu" },
    // { label: "Transporte de Mercadería", icon: "bi-truck" },
    // { label: "Praxis Médica", icon: "bi-hospital" },
    // { label: "Praxis Profesionales", icon: "bi-person-vcard" },
  ];

  return (
    <main className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contratá los seguros que tenemos para vos</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
          </div>
          
          <p className="text-lg mb-6 text-gray-800">
          
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {seguros.map((seguro, index) => (
            <Link
              key={index}
              href={seguro.href}
              className="p-3 flex flex-col items-center justify-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(16.666%-0.75rem)] max-w-[200px] bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition hover:bg-gray-200"
            >
              <i className={`${seguro.icon} text-2xl text-primary`} />
              <div className="mt-2 text-sm text-center text-gray-800">
                {seguro.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Asesoramiento />
    </main>
  );
}
