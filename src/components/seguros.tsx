import Link from 'next/link';

const seguros = [
  {
    id: 1,
    title: 'Protección Personal',
    items: [
      { icon: 'bi-shield-check', text: 'Vida Colectivo' },
      { icon: 'bi-heart', text: 'Sepelio' },
      { icon: 'bi-bandaid', text: 'Accidentes Personales' },
      { icon: 'bi-house-check', text: 'Garantía de Alquiler' }
    ]
  },
  {
    id: 2,
    title: 'Protección Familiar',
    items: [
      { icon: 'bi-people', text: 'Combinado Familiar' },
      { icon: 'bi-house-gear', text: 'Seguro de Incendio' },
      { icon: 'bi-mortarboard', text: 'Educación Segura' }
    ]
  },
  {
    id: 3,
    title: 'Protección Empresarial',
    items: [
      { icon: 'bi-building-lock', text: 'Caución' },
      { icon: 'bi-briefcase', text: 'Responsabilidad Civil General' },
      { icon: 'bi-shop', text: 'Integral de Comercio' },
      { icon: 'bi-buildings', text: 'Integral de Consorcio' },
      { icon: 'bi-gear', text: 'Seguros Técnicos' },
      { icon: 'bi-truck', text: 'Transporte de Mercadería' },
      { icon: 'bi-hospital', text: 'Praxis Médica' }
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
                    <li key={index} className="flex items-center text-gray-800">
                      <i className={`bi ${item.icon} text-primary text-xl mr-3`}></i>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="#"
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
