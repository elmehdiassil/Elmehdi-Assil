import React from 'react';
import { Code2, Palette, Video, Users, CheckCircle2, MessageCircle } from 'lucide-react';

interface PartnersSectionProps {
  whatsappNumber: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, j\'aimerais en savoir plus sur les services de votre équipe (Media buying, landing page, vidéos).'
  )}`;

  const PARTNERS = [
    {
      name: 'Abderrahmane',
      role: 'Développeur Web & Tracking',
      icon: Code2,
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Développement et intégration de landing pages haute conversion, configuration avancée du Pixel Meta, Google Tag Manager et de la Conversions API (CAPI) côté serveur.',
      skills: ['Développement Web', 'Tracking CAPI', 'Pixels & GTM'],
      badgeColor: 'bg-blue-50 text-[#0554C5] border-blue-200'
    },
    {
      name: 'Ibrahim',
      role: 'Designer UI/UX & Visuels Publicitaires',
      icon: Palette,
      avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Conception graphique des créatifs ad (bannières, carrousels, graphismes), déclinaison de l\'identité visuelle et optimisation ergonomique pour captiver l\'attention.',
      skills: ['UI/UX Design', 'Créatifs Meta & Google', 'Branding'],
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      name: 'Daoud',
      role: 'Monteur Vidéo / Video Editor (UGC & Reels)',
      icon: Video,
      avatarUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Montage dynamique des vidéos UGC (User Generated Content), sous-titrage percutant, effets de rythme et formats courts taillés pour le Hook Rate sur TikTok & Instagram.',
      skills: ['Montage UGC', 'Reels & TikTok Ads', 'Motion Design'],
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0554C5]" />
            Écosystème & Partenaires De Confiance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Les Partenaires Avec Qui <span className="text-[#0554C5]">Je Collabore</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Pour vous offrir des campagnes publicitaires 360° performantes (visuels percutants, intégrations web ultra-rapides et montages vidéo viraux), je travaille avec des experts passionnés.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner, idx) => {
            const Icon = partner.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-6 group shadow-xs hover:shadow-xl relative overflow-hidden"
              >
                <div className="space-y-5">
                  
                  {/* Avatar & Role Icon */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={partner.avatarUrl}
                        alt={partner.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0554C5]/30 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#0554C5] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-black font-['Inter'] text-slate-900">
                        {partner.name}
                      </h3>
                      <p className="text-xs font-extrabold text-[#0554C5] mt-0.5">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Contribution Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {partner.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[11px] font-extrabold px-3 py-1 rounded-lg border ${partner.badgeColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Verified Status */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-[#0554C5]" />
                  <span>Partenaire certifié Elmehdi Assil</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-['Inter']">
              Besoin d'une formule tout-en-un (Pubs + Vidéos + Landing Page) ?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Nous synchronisons le media buying, le design et la vidéo pour un lancement d'acquisition clé en main.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs inline-flex items-center gap-2 shadow-lg shrink-0 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Discuter de l'équipe sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
