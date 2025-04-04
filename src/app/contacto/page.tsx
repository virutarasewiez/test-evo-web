import FormularioContacto from "@/components/FormularioContacto";

export default function Home() {
  return (
    <main>

<section className="bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Necesitas asesoramiento personalizado?</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded"></div>
        </div>
        
        <p className="text-lg mb-6 text-gray-800">
          Nuestros expertos están listos para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>

      </div>
    </section>

      <FormularioContacto />
    </main>
  );
}
