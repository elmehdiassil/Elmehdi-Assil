import React, { useState, useRef } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Camera, RefreshCw } from 'lucide-react';

export const VerifiedTalentSection: React.FC = () => {
  const defaultPhoto = '/elmehdi.jpg';
  const fallbackPhoto = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800';

  const [personalPhoto, setPersonalPhoto] = useState<string>(() => {
    return localStorage.getItem('elmehdi_personal_photo') || defaultPhoto;
  });
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPersonalPhoto(result);
        localStorage.setItem('elmehdi_personal_photo', result);
        setImgError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('elmehdi_personal_photo');
    setPersonalPhoto(defaultPhoto);
    setImgError(false);
  };

  return (
    <section id="apropos" className="py-24 bg-slate-50/80 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* À PROPOS DE MOI (Personal Profile with Photo) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Personal Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0554C5] to-blue-400 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-300"></div>
                
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#0554C5]/30 bg-white shadow-2xl">
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  <img
                    src={imgError ? fallbackPhoto : personalPhoto}
                    onError={() => setImgError(true)}
                    alt="Elmehdi Assil - Media Buyer Freelance"
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Upload Overlay Action */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Uploader ma vraie photo personnelle"
                      className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#0554C5]" />
                      <span>Changer ma photo</span>
                    </button>
                    {personalPhoto !== defaultPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        title="Réinitialiser la photo"
                        className="p-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white text-xs backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Floating Verified Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-slate-900 font-['Inter']">Elmehdi Assil</h4>
                      <p className="text-[11px] font-extrabold text-[#0554C5]">Media Buyer Freelance Certifié</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0554C5] flex items-center justify-center font-bold border border-blue-200">
                      <CheckCircle2 className="w-5 h-5 text-[#0554C5]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Bio & Presentation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0554C5]" />
                  À Propos De Moi
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
                  Bonjour, Je Suis <span className="text-[#0554C5]">Elmehdi Assil</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Media Buyer freelance passionné par la performance publicitaire et la rentabilité mesurable. J'aide les entreprises à transformer leurs budgets Meta, Google et TikTok Ads en moteurs de croissance prévisibles.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Contrairement aux agences traditionnelles lourdes et impersonnelles, vous travaillez directement avec moi : un suivi réactif quotidien, une transparence totale sur vos chiffres et des stratégies taillées sur-mesure pour votre marché.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-2xl font-black text-[#0554C5] font-['Inter']">5+ Ans</span>
                  <span className="text-[11px] font-bold text-slate-500">Expérience Media Buying</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-2xl font-black text-slate-900 font-['Inter']">€1.2M+</span>
                  <span className="text-[11px] font-bold text-slate-500">Ad Spend Géré</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-2xl font-black text-[#0554C5] font-['Inter']">4.8x</span>
                  <span className="text-[11px] font-bold text-slate-500">ROAS Moyen Réalisé</span>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs shadow-lg shadow-[#0554C5]/20 transition-all"
                >
                  <span>Discuter de votre projet avec Elmehdi</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
