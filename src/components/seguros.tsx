import Link from 'next/link';

const seguros = [
  {
    id: 1,
    title: 'Protección Personal',
    items: [
      { icon: 'bi-shield-check', text: 'Vida Colectivo', href: '/seguros/productos/pp-vidacolectivo' },
      { icon: 'bi-heart', text: 'Sepelio', href: '/seguros/productos/pp-sepelio' },
      { icon: 'bi-bandaid', text: 'Accidentes Personales', href: '/seguros/productos/pp-accidentespersonales' },
      { icon: 'bi-house-check', text: 'Garantía de Alquiler', href: '/seguros/productos/pp-garantiadealquiler' }
    ]
  },
  {
    id: 2,
    title: 'Protección Familiar',
    items: [
      { icon: 'bi-people', text: 'Combinado Familiar', href: '/seguros/productos/pf-combinadofamiliar' },
      { icon: 'bi-house-gear', text: 'Seguro de Incendio', href: '/seguros/productos/pf-segurodeincendio' },
      { icon: 'bi-mortarboard', text: 'Educación Segura', href: '/seguros/productos/pf-educacionsegura' }
    ]
  },
  {
    id: 3,
    title: 'Protección Empresarial',
    items: [
      { icon: 'bi-building-lock', text: 'Caución', href: '/seguros/productos/pe-caucion' },
      { icon: 'bi-briefcase', text: 'Responsabilidad Civil General', href: '/seguros/productos/pe-responsabilidadcivilgeneral' },
      { icon: 'bi-shop', text: 'Integral de Comercio', href: '/seguros/productos/pe-integraldecomercio' },
      { icon: 'bi-buildings', text: 'Integral de Consorcio', href: '/seguros/productos/pe-integraldeconsorcio' },
      { icon: 'bi-gear', text: 'Seguros Técnicos', href: '/seguros/productos/pe-segurostecnicos' },
      { icon: 'bi-truck', text: 'Transporte de Mercadería', href: '/seguros/productos/pe-transportedemercaderia' },
      { icon: 'bi-hospital', text: 'Praxis Médica', href: '/seguros/productos/pe-praxismedica' }
    ]
  }
];

export default function Seguros() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Elegí la cobertura ideal para vos</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seguros.map((seguro) => (
            <div
              key={seguro.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary text-center mb-4">{seguro.title}</h3>
                <ul className="space-y-3">
                  {seguro.items.map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className="flex items-center text-gray-800 hover:text-primary transition-colors"
                      >
                        <i className={`bi ${item.icon} text-primary text-xl mr-3`}></i>
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href={`/seguros/productos/${seguro.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-hover transition"
                >
                  Más información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
