import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MessageCircle, Phone, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

interface ContactLinksSectionProps {
  whatsappNumber: string;
}

export const ContactLinksSection: React.FC<ContactLinksSectionProps> = ({ whatsappNumber }) => {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
  const formattedWhatsappUrl = `https://wa.me/212${cleanPhone.startsWith('0') ? cleanPhone.slice(1) : cleanPhone}?text=${encodeURIComponent(
    'Bonjour Elmehdi, je vous contacte depuis vos réseaux sociaux pour échanger sur mes campagnes publicitaires.'
  )}`;

  const SOCIAL_LINKS = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct',
      username: '06 27 72 20 61',
      url: formattedWhatsappUrl,
      icon: MessageCircle,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-600 hover:text-white',
      badge: 'Réponse < 15 min',
      isExternal: true
    },
    {
      id: 'email',
      name: 'Email Professionnel',
      username: 'forzama7@gmail.com',
      url: 'mailto:forzama7@gmail.com',
      icon: Mail,
      color: 'bg-blue-50 text-[#0554C5] border-blue-200 hover:bg-[#0554C5] hover:text-white',
      badge: 'Devis & Briefs',
      isExternal: false
    },
    {
      id: 'instagram',
      name: 'Instagram',
      username: '@elmehdiassil',
      url: 'https://instagram.com/elmehdiassil',
      icon: Instagram,
      color: 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 hover:text-white',
      badge: 'Stories & News',
      isExternal: true
    },
    {
      id: 'facebook',
      name: 'Facebook',
      username: 'Elmehdi Assil',
      url: 'https://facebook.com/Elmehdi.Assil',
      icon: Facebook,
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-700 hover:text-white',
      badge: 'Page Pro',
      isExternal: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      username: 'Elmehdi Assil',
      url: 'https://linkedin.com/in/elmehdiassil',
      icon: Linkedin,
      color: 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-700 hover:text-white',
      badge: 'Réseau B2B',
      isExternal: true
    },
    {
      id: 'calendly',
      name: 'Calendly Audit (30 Min)',
      username: 'Réservation En Ligne',
      url: 'https://calendly.com/forzama7/30min',
      icon: Calendar,
      color: 'bg-[#0554C5]/10 text-[#0554C5] border-blue-300 hover:bg-[#0554C5] hover:text-white',
      badge: 'Offert',
      isExternal: true
    }
  ];

  return (
    <section id="reseaux" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-block">
            Contact Direct & Réseaux Sociaux
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Restons En <span className="text-[#0554C5]">Contact Direct</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Rejoignez-moi sur mes canaux officiels pour suivre mon actualité publicitaire ou planifier votre prochaine campagne.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.id}
                href={link.url}
                target={link.isExternal ? '_blank' : '_self'}
                rel={link.isExternal ? 'noopener noreferrer' : ''}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#0554C5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${link.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-black uppercase border border-slate-200">
                    {link.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black font-['Inter'] text-slate-900 group-hover:text-[#0554C5] transition-colors flex items-center gap-1.5">
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0554C5]" />
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-1 font-mono">
                    {link.username}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#0554C5] group-hover:translate-x-1 transition-transform">
                  <span>Accéder à {link.name}</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
