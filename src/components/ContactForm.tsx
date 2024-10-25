import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contacte con nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos disponibles 24/7 para emergencias. Contacte con nosotros para una consulta gratuita.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Teléfono de Emergencia</p>
                  <a href="tel:+34690220944" className="text-red-600 hover:text-red-700">
                    690 22 09 44
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@renovex.es" className="text-red-600 hover:text-red-700">
                    info@renovex.es
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-600">Carrer d'Isaac Albéniz, 2-8, 08950 Esplugues de Llobregat, Barcelona</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Disponibilidad</p>
                  <p className="text-gray-600">24 horas, 7 días a la semana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Solicite una Consulta Gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}