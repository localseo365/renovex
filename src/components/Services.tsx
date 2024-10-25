import React from 'react';
import { Flame, Sprout, Shield, Wind } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Flame className="w-8 h-8 text-red-500" />,
      title: 'Restauración post-incendio',
      description: 'Servicio integral de restauración y rehabilitación de propiedades afectadas por incendios y humo. Utilizamos tecnología de última generación para evaluar los daños ocultos y garantizar una restauración completa. Nuestro proceso incluye la limpieza de hollín, la eliminación de residuos tóxicos y la restauración estructural.'
    },
    {
      icon: <Wind className="w-8 h-8 text-red-500" />,
      title: 'Eliminación de olores',
      description: 'Eliminación permanente de olores a humo mediante tecnología avanzada de oxidación térmica y filtración molecular. Tratamos tanto el aire como las superficies afectadas, garantizando la eliminación completa de olores residuales y la purificación del ambiente para que su espacio sea nuevamente habitable.'
    },
    {
      icon: <Sprout className="w-8 h-8 text-red-500" />,
      title: 'Descontaminación',
      description: 'Proceso profesional de descontaminación y limpieza profunda de todas las superficies afectadas por el incendio. Eliminamos partículas nocivas, residuos químicos y otros contaminantes peligrosos. Certificamos la seguridad del espacio para su ocupación mediante pruebas de calidad del aire.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Gestión de seguros',
      description: 'Gestión integral con compañías aseguradoras para agilizar su reclamación. Nuestro equipo especializado documenta exhaustivamente los daños, prepara informes técnicos detallados y colabora directamente con los peritos para garantizar una cobertura adecuada de los trabajos de restauración.'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Servicios especializados de restauración post-incendio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de restauración con técnicas avanzadas y equipos especializados, certificados por las principales organizaciones del sector. Nuestro compromiso es devolver su propiedad a su estado original de manera eficiente y profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}