import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowRight, Sliders, Calendar, Send } from 'lucide-react';

interface NavbarProps {
  whatsappNumber: string;
  onOpenWhatsappSettings: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  whatsappNumber,
  onOpenWhatsappSettings,
  onOpenContactModal
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const formattedWhatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, je vous contacte pour discuter de mes campagnes publicitaires.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Text Only Elmehdi Assil */}
          <a href="#" className="flex items-center group">
            <span className="font-['Inter',sans-serif] font-black text-2xl tracking-tighter text-slate-900 uppercase hover:text-[#0554C5] transition-colors">
              Elmehdi <span className="text-[#0554C5]">Assil</span>
            </span>
          </a>

          {/* Desktop Navigation Links - Exact 6 Section Jump Targets */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
            <a href="#contact" className="hover:text-[#0554C5] transition-colors">
              Contact
            </a>
            <a href="#clients" className="hover:text-[#0554C5] transition-colors">
              Mes Clients
            </a>
            <a href="#services" className="hover:text-[#0554C5] transition-colors">
              Services
            </a>
            <a href="#reseaux" className="hover:text-[#0554C5] transition-colors">
              Liens & Réseaux
            </a>
            <a href="#avis" className="hover:text-[#0554C5] transition-colors">
              Avis Clients
            </a>
            <a href="#equipe" className="hover:text-[#0554C5] transition-colors">
              Mon Équipe
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWhatsappSettings}
              title="Configurer le numéro WhatsApp"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-slate-200"
            >
              <Sliders className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm transition-all duration-200 shadow-md shadow-[#0554C5]/20 active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Devis Gratuit</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 border border-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-2 shadow-lg">
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Formulaire de Contact
          </a>
          <a
            href="#clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Mes Clients
          </a>
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Services
          </a>
          <a
            href="#reseaux"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Contact & Réseaux
          </a>
          <a
            href="#avis"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Avis Clients
          </a>
          <a
            href="#equipe"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#0554C5]"
          >
            Mon Équipe
          </a>
          
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3 rounded-xl bg-[#0554C5] text-white font-extrabold text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Demander Un Devis (Formulaire)</span>
            </button>
            <a
              href={formattedWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
