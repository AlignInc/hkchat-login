
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 py-4 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className={`text-sm text-gray-500 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
