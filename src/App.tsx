import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Flame, Camera, MapPin, MessageSquare, Building2, ClipboardCheck } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;