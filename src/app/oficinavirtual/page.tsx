import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Oficinavirtual from "@/components/oficinavirtual";
import Asesoramiento from "@/components/asesoramiento";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolución Seguros",
  description: "La mejor cobertura para tu tranquilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>

        <main className="min-h-screen">

          <Oficinavirtual />
          <Asesoramiento />
        </main>

      </body>
    </html>
  );
}