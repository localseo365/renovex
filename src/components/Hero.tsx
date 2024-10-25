import React from 'react';
import { Phone, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://cdn.rentokil.com/content/local/uk-rsh/images/desktop/main_main_main_banner-main-fire-damage-cleaning-desktop.jpg?auto=format&fit=crop&q=80"
          alt="Servicio de restauración"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Restauración profesional después de incendios en Barcelona
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Servicio especializado de emergencia 24/7 para la restauración y limpieza tras incendios en Barcelona y área metropolitana. Nuestro equipo de expertos certificados utiliza técnicas avanzadas y equipamiento profesional para recuperar su propiedad de los daños causados por el fuego, el humo y el agua. Más de 15 años de experiencia restaurando hogares y negocios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+34690220944"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamada de emergencia
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Consulta gratuita
            </a>
          </div>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <Clock className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-white">Disponibles 24/7 para emergencias en toda Barcelona</span>
          </div>
        </div>
      </div>
    </div>
  );
}