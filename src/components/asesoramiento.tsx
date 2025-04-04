export default function Asesoramiento() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Necesitas asesoramiento personalizado?</h2>
        <p className="text-lg mb-6">
          Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>
        <div className="flex justify-center gap-4">
          <a className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-700 transition" href="#">Contáctanos</a>
          <a className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-700 transition" href="#">Oficina Virtual</a>
        </div>
      </div>
    </section>
  );
}