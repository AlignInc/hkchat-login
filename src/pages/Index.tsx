
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';
import LegalModal from '@/components/LegalModal';
import FloatingParticles from '@/components/FloatingParticles';

const Index = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | null }>({
    isOpen: false,
    type: null
  });

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const openLegalModal = (type: 'terms' | 'privacy') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <FloatingParticles />
      
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <AuthForm 
          isRegisterMode={isRegisterMode}
          onToggleMode={toggleMode}
          onLegalModalOpen={openLegalModal}
        />
      </main>

      <Footer />

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        type={legalModal.type || 'terms'}
      />
    </div>
  );
};

export default Index;
