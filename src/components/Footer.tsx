import React from 'react';
import { MessageCircle, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  const formattedWhatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, je vous contacte depuis le site.'
  )}`;

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Bio (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center">
              <span className="font-['Inter'] font-black text-2xl tracking-tighter text-white uppercase">
                ELMEHDI <span className="text-[#0554C5]">ASSIL</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Media Buyer freelance certifié Meta, Google & TikTok Ads. Spécialiste de la gestion de campagnes d'acquisition payante et stratégie digitale pour E-Commerce, boutiques et services.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/elmehdiassil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/Elmehdi.Assil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/elmehdiassil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:forzama7@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Links Column (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs font-['Inter'] uppercase tracking-wider">
              Sections Du Site
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#hero" className="hover:text-[#0554C5] transition-colors">
                  1. Accueil (Hero)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0554C5] transition-colors">
                  2. Formulaire De Contact
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#0554C5] transition-colors">
                  3. Mes Clients
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0554C5] transition-colors">
                  4. Services (Media Buying, SMM, SEO)
                </a>
              </li>
              <li>
                <a href="#reseaux" className="hover:text-[#0554C5] transition-colors">
                  5. Liens & Réseaux
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#0554C5] transition-colors">
                  6. Avis Clients
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#0554C5] transition-colors">
                  7. Mon Équipe / Partenaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-extrabold text-white text-xs font-['Inter'] uppercase tracking-wider">
              Coordonnées Directes
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0554C5] shrink-0" />
                <a href="tel:0627722061" className="hover:text-blue-400 font-mono font-bold transition-colors">
                  06 27 72 20 61
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#0554C5] shrink-0" />
                <a href={formattedWhatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  WhatsApp Direct (06 27 72 20 61)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0554C5] shrink-0" />
                <a href="mailto:forzama7@gmail.com" className="hover:text-blue-400 font-mono transition-colors break-all">
                  forzama7@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Elmehdi Assil - Tous droits réservés.</p>
          <p className="text-slate-400">Maroc & International</p>
        </div>

      </div>
    </footer>
  );
};
