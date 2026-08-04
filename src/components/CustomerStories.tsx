import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Play, CheckCircle2, MessageCircle } from 'lucide-react';

interface CustomerStoriesProps {
  whatsappNumber: string;
}

export const CustomerStories: React.FC<CustomerStoriesProps> = ({ whatsappNumber }) => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, j\'ai lu vos avis clients et souhaite discuter de mon projet publicitaire.'
  )}`;

  return (
    <section className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Témoignages & Avis Clients
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Ce Que Mes Clients Disent De <span className="text-[#0554C5]">Notre Travail</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Des dirigeants d'entreprises, gérants de restaurants et fondateurs e-commerce partagent leur retour d'expérience.
          </p>
        </div>

        {/* Video Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.filter((t) => t.videoThumbUrl).map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveVideoModal(story.name)}
              className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer border border-slate-200 shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={story.videoThumbUrl}
                alt={story.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Play Button Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0554C5] text-white flex items-center justify-center shadow-xl transition-all duration-200 transform group-hover:scale-110">
                  <Play className="w-6 h-6 fill-white ml-1 text-white" />
                </div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md border border-slate-700">
                  Vidéo {story.videoDuration}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h3 className="font-extrabold text-lg font-['Inter'] text-white">{story.name}</h3>
                <p className="text-xs text-blue-300 font-bold">{story.business}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Written Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between border border-slate-200 hover:border-[#0554C5] shadow-xs hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-normal italic">
                  {testimonial.text}
                </p>
              </div>

              {/* Customer Avatar & Role */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#0554C5] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-tight flex items-center gap-1">
                    {testimonial.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0554C5]" />
                  </h4>
                  <p className="text-xs text-slate-500 font-bold">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Stub */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 space-y-6 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#0554C5] text-white mx-auto flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 fill-white ml-1 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black font-['Inter'] text-slate-900">Témoignage de {activeVideoModal}</h3>
                <p className="text-sm text-slate-600">
                  L'interview complète est disponible sur demande. Voulez-vous contacter Elmehdi pour discuter de votre propre stratégie ?
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="flex-1 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 border border-slate-300 cursor-pointer"
                >
                  Fermer
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Contacter</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
