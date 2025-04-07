import Link from 'next/link';

export default function Asesoramiento() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Necesitas asesoramiento personalizado?</h2>
        <p className="text-lg mb-6 text-gray-800">
          Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contacto" className="bg-primary text-white text-lg px-6 py-3 rounded-lg hover:bg-primary-hover transition">
            Contáctanos
          </Link>
          <Link href="/oficinavirtual" className="bg-primary text-white text-lg px-6 py-3 rounded-lg hover:bg-primary-hover transition">
            Oficina Virtual
          </Link>
        </div>
      </div>
    </section>
  );
}