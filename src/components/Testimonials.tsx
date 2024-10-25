import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      role: "Propietaria de Vivienda",
      content: "Excelente servicio de emergencia. Llegaron en menos de una hora y el trabajo de restauración fue impecable.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Hotel",
      content: "Profesionales altamente cualificados. Minimizaron el impacto en nuestro negocio durante todo el proceso.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Administradora de Fincas",
      content: "Su experiencia con las aseguradoras facilitó enormemente el proceso de reclamación.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Opiniones de clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor referencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}