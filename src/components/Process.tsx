import React from 'react';
import { PhoneCall, ClipboardCheck, Wrench, Home } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <PhoneCall className="w-6 h-6 text-red-500" />,
      title: '1. Contacto de emergencia',
      description: 'Respuesta inmediata 24/7 a su llamada de emergencia'
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-red-500" />,
      title: '2. Evaluación',
      description: 'Inspección detallada y plan de restauración personalizado'
    },
    {
      icon: <Wrench className="w-6 h-6 text-red-500" />,
      title: '3. Restauración',
      description: 'Proceso de limpieza y restauración profesional'
    },
    {
      icon: <Home className="w-6 h-6 text-red-500" />,
      title: '4. Entrega',
      description: 'Devolución de su propiedad en condiciones óptimas'
    }
  ];

  return (
    <section id="proceso" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proceso de restauración
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Metodología probada para garantizar resultados excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-16px)] h-[2px] bg-red-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}