import React, { useState } from 'react';
import { Calculator, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  whatsappNumber: string;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ whatsappNumber }) => {
  const [budget, setBudget] = useState<number>(3000);
  const [currency, setCurrency] = useState<'DHS' | 'EUR'>('DHS');
  const [sector, setSector] = useState<'ecommerce' | 'restaurant' | 'beauty' | 'services'>('ecommerce');
  const [targetRoas, setTargetRoas] = useState<number>(4.5);
  const [aov, setAov] = useState<number>(250); // Average order value

  // Calculated Metrics
  const projectedRevenue = budget * targetRoas;
  const projectedProfit = projectedRevenue - budget;
  const estimatedOrders = Math.round(projectedRevenue / (aov || 1));
  const estimatedCpa = Math.round(budget / (estimatedOrders || 1));

  const whatsappMessage = `Bonjour Elmehdi, j'ai simulé mon ROI sur votre site :
• Secteur : ${sector}
• Budget Mensuel : ${budget.toLocaleString()} ${currency}
• ROAS Cible : ${targetRoas}x
• Revenu Estimé : ${projectedRevenue.toLocaleString()} ${currency}
• Profit Net Estimé : ${projectedProfit.toLocaleString()} ${currency}

Je souhaite valider ce potentiel avec vous !`;

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="calculator" className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Background Glow Elements in Blue #0554C5 */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#0554C5]" />
            Simulateur Gratuit en Temps Réel
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Calculez votre <span className="text-[#0554C5]">ROI Publicitaire</span> Potentiel
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez combien de chiffre d'affaires et de bénéfices vos campagnes Meta, Google & TikTok Ads peuvent générer chaque mois.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-lg">
            
            {/* Currency Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-sm font-extrabold text-slate-700">Monnaie de calcul :</span>
              <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setCurrency('DHS')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-colors ${
                    currency === 'DHS' ? 'bg-[#0554C5] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  DHS (Maroc)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('EUR')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-colors ${
                    currency === 'EUR' ? 'bg-[#0554C5] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  EUR (€)
                </button>
              </div>
            </div>

            {/* Sector Selector */}
            <div className="space-y-2">
              <label className="text-sm font-extrabold text-slate-800">Votre Secteur d'Activité :</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ecommerce', label: 'E-Commerce' },
                  { id: 'restaurant', label: 'Restaurant' },
                  { id: 'beauty', label: 'Salon Beauté' },
                  { id: 'services', label: 'Services / Lead' }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSector(sec.id as any)}
                    className={`p-3.5 rounded-xl border text-xs font-extrabold text-center transition-all ${
                      sector === sec.id
                        ? 'bg-[#0554C5] text-white border-[#0554C5] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-extrabold text-slate-800">Budget Publicitaire Mensuel :</label>
                <span className="text-2xl font-black text-[#0554C5] font-['Inter']">
                  {budget.toLocaleString()} {currency}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0554C5]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                <span>1 000 {currency}</span>
                <span>25 000 {currency}</span>
                <span>50 000 {currency}+</span>
              </div>
            </div>

            {/* Target ROAS Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-extrabold text-slate-800">ROAS Cible (Retour sur ad spend) :</label>
                <span className="text-2xl font-black text-[#0554C5] font-['Inter']">
                  {targetRoas}x
                </span>
              </div>
              <input
                type="range"
                min={2.0}
                max={10.0}
                step={0.1}
                value={targetRoas}
                onChange={(e) => setTargetRoas(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0554C5]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                <span>2.0x (Conservateur)</span>
                <span>4.5x (Moyenne MediaBuyer)</span>
                <span>10.0x (Scale Agressif)</span>
              </div>
            </div>

            {/* Average Order Value Input */}
            <div className="space-y-2">
              <label className="text-sm font-extrabold text-slate-800">
                Panier Moyen ou Valeur Client ({currency}) :
              </label>
              <input
                type="number"
                min={50}
                max={5000}
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 font-black text-lg focus:outline-none focus:border-[#0554C5]"
                placeholder="Ex: 250"
              />
            </div>

          </div>

          {/* Dynamic Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0554C5]/30 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0554C5] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#0554C5]" />
                Résultats Projetés
              </span>
              <span className="text-[11px] font-extrabold bg-blue-50 text-[#0554C5] px-3 py-1 rounded-full border border-blue-200">
                Garantie Optimisation
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs text-slate-500 font-bold">Chiffre d'Affaires Brut Estimé</div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 font-['Inter'] tracking-tight">
                  {projectedRevenue.toLocaleString()} {currency}
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-blue-50/90 border border-blue-200 space-y-1">
                <div className="text-xs text-[#0554C5] font-bold">Bénéfice Net Ad Spend Estimé</div>
                <div className="text-3xl sm:text-4xl font-black text-[#0554C5] font-['Inter'] tracking-tight">
                  +{projectedProfit.toLocaleString()} {currency}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                  <div className="text-[11px] text-slate-500 font-bold">Ventes / RDV Estimés</div>
                  <div className="text-xl font-black text-slate-900 font-['Inter']">{estimatedOrders}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                  <div className="text-[11px] text-slate-500 font-bold">CPA Estimé</div>
                  <div className="text-xl font-black text-[#0554C5] font-['Inter']">
                    {estimatedCpa} {currency}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-base shadow-lg shadow-[#0554C5]/25 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Obtenir ce résultat sur WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
              <p className="text-[11px] text-slate-500 text-center font-bold mt-3">
                Message pré-rempli transmis instantanément avec vos paramètres.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
