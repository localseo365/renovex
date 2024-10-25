import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Renovex</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-red-600">Servicios</a>
            <a href="#proceso" className="text-gray-700 hover:text-red-600">Proceso</a>
            <a href="#galeria" className="text-gray-700 hover:text-red-600">Galería</a>
            <a href="#testimonios" className="text-gray-700 hover:text-red-600">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-red-600">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+34690220944" className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              690 22 09 44
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#servicios" className="block px-3 py-2 text-gray-700">Servicios</a>
            <a href="#proceso" className="block px-3 py-2 text-gray-700">Proceso</a>
            <a href="#galeria" className="block px-3 py-2 text-gray-700">Galería</a>
            <a href="#testimonios" className="block px-3 py-2 text-gray-700">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}