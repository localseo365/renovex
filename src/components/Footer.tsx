import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Renovex</h3>
            <p className="text-gray-400">
              Especialistas en restauración y limpieza post-incendio en Barcelona
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Restauración post-incendio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Eliminación de olores</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Descontaminación</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Gestión de seguros</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+34690220944" className="text-gray-400 hover:text-white">690 22 09 44</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@renovex.es" className="text-gray-400 hover:text-white">info@renovex.es</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-gray-400">Carrer d'Isaac Albéniz, 2-8, 08950 Esplugues de Llobregat, Barcelona</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Certificaciones</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">ISO 9001:2015</li>
              <li className="text-gray-400">IICRC Certified Firm</li>
              <li className="text-gray-400">Certificación AENOR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Renovex. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}