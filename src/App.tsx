/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-mai-dark' : 'text-mai-dark'}`}>
            MAI <span className="text-mai-gold">BEAUTY</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mai-dark hover:text-mai-gold transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mai-dark text-white px-6 py-2 rounded-full hover:bg-mai-gold transition-all duration-300 text-sm font-medium"
          >
            AGENDAR CITA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-mai-dark">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-mai-dark text-lg font-medium border-b border-gray-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mai-dark text-white text-center py-3 rounded-full font-medium"
              >
                AGENDAR POR WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          alt="MAI Beauty Center Hero"
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-mai-beige/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white uppercase tracking-[0.3em] text-sm mb-4 block font-medium"
        >
          Bienvenidos a MAI Beauty Center
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight"
        >
          Realza tu belleza <br /> <span className="italic">natural</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto"
        >
          Cuidado experto y personalizado en el corazón de García, N.L.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-mai-dark px-8 py-4 rounded-full font-medium hover:bg-mai-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <MessageCircle size={20} className="text-green-500 group-hover:text-white" />
            AGENDAR POR WHATSAPP
          </a>
          <a
            href="#servicios"
            className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
          >
            VER SERVICIOS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-mai-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527799822340-474058a67bb0?auto=format&fit=crop&q=80&w=800"
                alt="Interior del salón"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-mai-gold font-serif text-4xl font-bold mb-1">5+</p>
              <p className="text-mai-dark text-sm uppercase tracking-widest font-medium">Años de Experiencia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-mai-dark">Pasión por el detalle y la excelencia</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              En MAI Beauty Center, creemos que la belleza es una expresión de bienestar personal. Nos dedicamos a ofrecer servicios de alta calidad en un ambiente profesional, higiénico y acogedor.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nuestro equipo de profesionales capacitadas se enfoca en brindar una atención personalizada, utilizando productos de marcas líderes para garantizar resultados excepcionales en cada visita.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-mai-gold mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-mai-dark">Higiene Total</h4>
                  <p className="text-sm text-gray-500">Protocolos estrictos de seguridad.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-mai-gold mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-mai-dark">Expertas</h4>
                  <p className="text-sm text-gray-500">Personal altamente capacitado.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-serif text-mai-dark">Experiencias de Belleza</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-mai-beige rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-mai-dark">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.items.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-bold text-mai-dark">{item.price}</span>
                    </div>
                  ))}
                  <p className="text-xs text-mai-gold italic font-medium">Y más servicios disponibles...</p>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hola, me gustaría agendar una cita para ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-mai-dark text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-mai-gold transition-colors text-sm font-bold"
                >
                  AGENDAR AHORA
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    { title: "Atención Personalizada", desc: "Cada cliente es único, adaptamos nuestros servicios a tus necesidades." },
    { title: "Productos de Alta Calidad", desc: "Solo utilizamos marcas profesionales que cuidan tu piel y cabello." },
    { title: "Higiene y Seguridad", desc: "Mantenemos los más altos estándares de limpieza en cada herramienta." },
    { title: "Profesionales Capacitadas", desc: "Nuestro equipo está en constante actualización de tendencias." }
  ];

  return (
    <section className="py-24 bg-mai-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">¿Por qué elegirnos?</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Comprometidos con tu mejor versión</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="w-10 h-10 bg-mai-gold/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-mai-gold" size={24} />
                  </div>
                  <h4 className="text-xl font-serif">{point.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/5">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800"
                alt="Beauty treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-mai-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-serif text-mai-dark">Lo que dicen nuestras clientas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-mai-gold text-mai-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <h4 className="font-bold text-mai-dark">{t.name}</h4>
              <div className="absolute top-8 right-8 text-mai-pink/20">
                <Star size={48} className="fill-current" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-mai-dark">¿Tienes alguna duda?</h2>
            <p className="text-gray-600 mb-10">Estamos aquí para ayudarte. Déjanos un mensaje o contáctanos directamente por teléfono o WhatsApp.</p>
            
            <div className="space-y-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-mai-beige rounded-full flex items-center justify-center group-hover:bg-mai-gold transition-colors">
                  <Phone className="text-mai-gold group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Llámanos</p>
                  <p className="text-mai-dark font-medium">{BUSINESS_INFO.phone}</p>
                </div>
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-mai-beige rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="text-mai-gold group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-mai-dark font-medium">Enviar mensaje directo</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mai-beige rounded-full flex items-center justify-center">
                  <Clock className="text-mai-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Horarios</p>
                  {BUSINESS_INFO.hours.map((h) => (
                    <p key={h.day} className="text-mai-dark text-sm">{h.day}: {h.time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-mai-beige p-8 md:p-12 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-mai-gold outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Teléfono</label>
                  <input type="tel" className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-mai-gold outline-none" placeholder="Tu teléfono" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-mai-gold outline-none resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-mai-dark text-white py-4 rounded-xl font-bold hover:bg-mai-gold transition-colors">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="ubicacion" className="py-24 bg-mai-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mai-gold uppercase tracking-widest text-sm font-bold mb-4 block">Ubicación</span>
          <h2 className="text-4xl md:text-5xl font-serif text-mai-dark">Visítanos en Plaza Domena</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.649230553138!2d-100.4855555!3d25.7511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866299f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sPlaza%20Domena!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps MAI Beauty Center"
            ></iframe>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-12 h-12 bg-mai-beige rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-mai-gold" size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2">Dirección</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=25.7511111,-100.4855555`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mai-dark text-white text-center py-4 rounded-xl font-bold hover:bg-mai-gold transition-colors mb-4"
            >
              CÓMO LLEGAR
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-mai-dark text-mai-dark text-center py-4 rounded-xl font-bold hover:bg-mai-dark hover:text-white transition-all"
            >
              AGENDAR CITA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-wider text-mai-dark block mb-6">
              MAI <span className="text-mai-gold">BEAUTY</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Realzando tu belleza natural con manos expertas y productos de la más alta calidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-mai-beige rounded-full flex items-center justify-center text-mai-dark hover:bg-mai-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-mai-beige rounded-full flex items-center justify-center text-mai-dark hover:bg-mai-gold hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-mai-dark uppercase tracking-widest text-xs mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#inicio" className="hover:text-mai-gold transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-mai-gold transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-mai-gold transition-colors">Servicios</a></li>
              <li><a href="#ubicacion" className="hover:text-mai-gold transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-mai-dark uppercase tracking-widest text-xs mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#servicios" className="hover:text-mai-gold transition-colors">Cejas y Pestañas</a></li>
              <li><a href="#servicios" className="hover:text-mai-gold transition-colors">Uñas y Manicure</a></li>
              <li><a href="#servicios" className="hover:text-mai-gold transition-colors">Corte y Color</a></li>
              <li><a href="#servicios" className="hover:text-mai-gold transition-colors">Depilación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-mai-dark uppercase tracking-widest text-xs mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mai-gold shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mai-gold shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center">
            © {new Date().getFullYear()} MAI Beauty Center. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-mai-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-mai-gold transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all duration-300"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-mai-dark px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        ¿Cómo podemos ayudarte?
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
