import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContactSection } from './components/ContactSection';
import { ClientsSection } from './components/ClientsSection';
import { ServicesGrid } from './components/ServicesGrid';
import { ContactLinksSection } from './components/ContactLinksSection';
import { CustomerStories } from './components/CustomerStories';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
import { WhatsappFloatingWidget } from './components/WhatsappFloatingWidget';
import { WhatsappSettingsModal } from './components/WhatsappSettingsModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [whatsappNumber, setWhatsappNumber] = useState<string>('0627722061');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-['Inter',sans-serif] selection:bg-[#0554C5] selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        whatsappNumber={whatsappNumber}
        onOpenWhatsappSettings={() => setIsSettingsOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Single Page Condensed Continuous Scroll Content */}
      <main className="space-y-0">
        
        {/* 1. Titre accrocheur (Hero) - Titre principal percutant, sans stats ni éléments supplémentaires */}
        <HeroSection
          whatsappNumber={whatsappNumber}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        {/* 2. Formulaire de contact (3 champs : Nom, Email, Téléphone, avec popup/modal) */}
        <ContactSection
          whatsappNumber={whatsappNumber}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        {/* 3. Mes Clients (Boutiques en ligne, agences de services, entrepreneurs e-commerce) */}
        <ClientsSection whatsappNumber={whatsappNumber} />

        {/* 4. Services (Media Buying, Social Media Management, Croissance Organique, Stratégie de Contenu) */}
        <ServicesGrid whatsappNumber={whatsappNumber} />

        {/* 5. Liens de contact (Instagram, Facebook, LinkedIn, WhatsApp, Email) */}
        <ContactLinksSection whatsappNumber={whatsappNumber} />

        {/* 6. Avis clients (reviews avec noms marocains) */}
        <div id="avis">
          <CustomerStories whatsappNumber={whatsappNumber} />
        </div>

        {/* 7. Mon équipe / Partenaires (Abderrahmane - Développeur, Ibrahim - Designer, Daoud - Monteur vidéo) */}
        <PartnersSection whatsappNumber={whatsappNumber} />
      </main>

      {/* Footer */}
      <Footer whatsappNumber={whatsappNumber} />

      {/* Floating WhatsApp Widget */}
      <WhatsappFloatingWidget
        whatsappNumber={whatsappNumber}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* WhatsApp Number Settings Drawer */}
      {isSettingsOpen && (
        <WhatsappSettingsModal
          currentNumber={whatsappNumber}
          onSave={(newNum) => setWhatsappNumber(newNum)}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}

      {/* 3-Field Contact Modal Popup */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}

export default App;
