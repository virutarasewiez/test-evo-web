'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Carrusel() {
  const slides = [
    {
      id: 1,
      image: '/assets/images/carousel-1.jpg',
      title: 'Protección Empresarial',
      description: 'Cuidamos tu negocio, siempre seguro y en crecimiento.',
      link: '/seguros/empresariales',
    },
    {
      id: 2,
      image: '/assets/images/carousel-2.jpg',
      title: 'Protección Personal',
      description: 'La seguridad que necesitás, con la tranquilidad que merecés.',
      link: '/seguros/personales',
    },
    {
      id: 3,
      image: '/assets/images/carousel-3.jpg',
      title: 'Protección Familiar',
      description: 'La mejor cobertura para tu hogar.',
      link: '/seguros/familiares',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden h-[500px] md:h-[600px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative h-[500px] md:h-[600px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full"
              priority={current === slide.id}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white p-4 rounded-xl text-center max-w-xs md:max-w-xl">
              <h2 className="text-xl md:text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm md:text-base mb-4">{slide.description}</p>
              <Link href={slide.link} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md inline-block">
                Conocer más
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
