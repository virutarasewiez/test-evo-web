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
    // { label: "Combinado Familiar", icon: "bi-house-door" },
    // { label: "Seguro de Incendio", icon: "bi-fire" },
    // { label: "Educación Segura", icon: "bi-book" },
    // { label: "Más información", icon: "bi-info-circle" },
    // { label: "Protección Empresarial", icon: "bi-building" },
    { label: "Caución", icon: "bi-file-earmark-lock", href: "/seguros/productos/pe-caucion" },
    { label: "Responsabilidad Civil General", icon: "bi-shield-check", href: "/seguros/productos/pe-responsabilidadcivilgeneral" },
    { label: "Integral de Comercio", icon: "bi-shop", href: "/seguros/productos/pe-integraldecomercio" },
    { label: "Integral de Consorcio", icon: "bi-building-add", href: "/seguros/productos/pe-integraldeconsorcio" },
    { label: "Seguros Técnicos", icon: "bi-cpu", href: "/seguros/productos/pe-segurostecnicos" },
    { label: "Transporte de Mercadería", icon: "bi-truck", href: "/seguros/productos/pe-transportedemercaderia" },
    { label: "Praxis Médica", icon: "bi-hospital", href: "/seguros/productos/pe-praxismedica" },
    { label: "Praxis Profesionales", icon: "bi-person-vcard", href: "/seguros/productos/pe-praxisprofesionales" },
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
