import React from 'react';

export default function Gallery() {
  const projects = [
    {
      before: "https://www.servicemaster-restorationbysimons.com/wp-content/uploads/2020/01/Fire-Damage-Restoration-ServiceMaster-Restore-Chicago-IL-1-1.jpg?auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      title: "Restauración residencial"
    },
    {
      before: "https://www.calpine.co.uk/wp-content/uploads/2021/07/fire-cleaning.jpg?auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      title: "Recuperación comercial"
    },
    {
      before: "https://www.servicemaster-restorationbysimons.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-9.44.32-AM-e1581965433823.png?auto=format&fit=crop&q=80",
      after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
      title: "Limpieza industrial"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Galería de proyectos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reales de nuestros servicios de restauración
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={project.before} alt="Antes" className="object-cover w-full h-48" />
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-sm rounded">
                  Antes
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={project.after} alt="Después" className="object-cover w-full h-48" />
                </div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-sm rounded">
                  Después
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}