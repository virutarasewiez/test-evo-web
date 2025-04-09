import Carrusel from "@/components/carrusel";
import Asesoramiento from "@/components/asesoramiento";
import Seguros from "@/components/seguros";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <>
      <Carrusel />
      <Seguros />
      <Asesoramiento />
      <Chatbot />
    </>
  );
}
