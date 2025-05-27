
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 relative z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/90e1220c-cecc-4c6f-b9d0-7fff0bf235c2.png" 
              alt="HKGAI Logo" 
              className="w-10 h-10 object-contain animate-pulse"
            />
          </div>
          <h1 className={`text-xl font-semibold text-gray-900 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
            {t('app.name')}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLanguage('zh-HK')}
            className={`text-sm font-medium transition-colors ${
              language === 'zh-HK' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            } ${language === 'zh-HK' ? 'font-source-han-sans' : ''}`}
          >
            {t('language.zh-hk')}
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => setLanguage('zh-CN')}
            className={`text-sm font-medium transition-colors ${
              language === 'zh-CN' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            } ${language === 'zh-CN' ? 'font-source-han-sans' : ''}`}
          >
            {t('language.zh-cn')}
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => setLanguage('en')}
            className={`text-sm font-medium transition-colors ${
              language === 'en' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('language.en')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
