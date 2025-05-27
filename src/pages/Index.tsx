import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Smartphone } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from '@/hooks/useLanguage';
import LegalModal from '@/components/LegalModal';
import FloatingParticles from '@/components/FloatingParticles';

const Index = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | null }>({
    isOpen: false,
    type: null
  });

  // Auto-focus email input on load
  useEffect(() => {
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.focus();
    }
  }, [isRegisterMode]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setNameError('');
    setConfirmPasswordError('');

    // Validation
    if (!email) {
      setEmailError(t('validation.email.required'));
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(t('validation.email.invalid'));
      return;
    }
    if (!password) {
      setPasswordError(t('validation.password.required'));
      return;
    }
    if (isRegisterMode) {
      if (!name) {
        setNameError(t('validation.name.required'));
        return;
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError(t('validation.password.mismatch'));
        return;
      }
    }

    setIsLoading(true);
    
    // Simulate login/register process
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: t(isRegisterMode ? 'success.register' : 'success.login'),
        description: t(isRegisterMode ? 'success.register.description' : 'success.login.description'),
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: t(isRegisterMode ? 'Register Failed' : 'Login Failed'),
        description: t('validation.login.failed'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleIAMSmartLogin = () => {
    toast({
      title: t('iamsmart.connecting'),
      description: t('iamsmart.description'),
    });
    // Simulate iAM Smart redirect
    setTimeout(() => {
      window.open('https://www.iamsmart.gov.hk/', '_blank');
    }, 500);
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setEmailError('');
    setPasswordError('');
    setNameError('');
    setConfirmPasswordError('');
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
      
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Title Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className={`text-3xl font-bold text-gray-900 mb-2 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
              {t(isRegisterMode ? 'register.title' : 'login.welcome')}
            </h2>
            <p className={`text-gray-600 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
              {t(isRegisterMode ? 'register.subtitle' : 'login.subtitle')}
            </p>
          </div>

          {/* Login/Register Card */}
          <Card className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 animate-scale-in hover-scale transition-all duration-300">
            {/* iAM Smart Login with official icon and logo */}
            <Button
              onClick={handleIAMSmartLogin}
              variant="outline"
              className={`w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-4 rounded-md transition-all duration-200 hover:scale-105 mb-6 flex items-center justify-center space-x-3 ${language === 'en' ? '' : 'font-source-han-sans'}`}
            >
              <div className="flex items-center space-x-3">
                {/* Official iAM Smart colorful icon */}
                <img 
                  src="/lovable-uploads/4516e057-db8b-464c-af1b-b9b69a6b9660.png" 
                  alt="iAM Smart Icon" 
                  className="w-6 h-6 object-contain"
                />
                {/* iAM Smart Logo SVG */}
                <svg width="80" height="24" viewBox="0 0 340 150" className="h-5">
                  <g>
                    <g>
                      <g>
                        <path className="fill-[#3DA08D]" d="M106,19.8c-2.6-5.8-7.7-8.3-13.5-9.5C87,9.2,81.4,8,75.9,6.9c-6.3-1.3-12.5-2.6-18.8-3.8
                          c-4.4-0.9-8.7-2.2-13.2-0.9c-5,1.4-9,5.2-10.8,10.1c-0.8,2.2-1.1,4.6-1.5,6.8c-0.3,1.3-0.5,2.6-0.8,3.9l4.2,0.9
                          c0-0.1,0-0.2,0.1-0.3c1-5.1,1.4-11.3,5.5-14.9c4.2-3.6,8.8-2.8,13.6-1.8c5.6,1.1,11.1,2.3,16.7,3.4c5.8,1.2,11.7,2.4,17.5,3.6
                          c4.1,0.8,8.5,1.3,11.6,4.5c3.7,3.9,3.3,8.6,2.4,13.3c-1,5.1-2.1,10.2-3.1,15.4c-2.1,10.5-4.3,20.9-6.4,31.4
                          c-0.5,2.7,3.6,3.8,4.1,1.1c1.9-9.5,3.9-19.1,5.8-28.6c1.2-5.7,2.3-11.4,3.5-17C107.1,29,108.1,24.5,106,19.8z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path className="fill-[#4D4D4D]" d="M149.1,52.4C149.2,52.4,149.2,52.3,149.1,52.4c0.1-0.1,0.1-0.1,0.1,0c2.5,1.7,4.7,3.3,6.4,4.6
                          c0.5,0.4,1.1,0.6,1.8,0.6c0.7,0,1.2-0.3,1.7-0.7c0.5-0.4,0.7-1,0.6-1.7c-0.1-0.6-0.4-1.1-0.9-1.5c-3-1.9-5.7-3.5-8-4.8
                          c-0.1,0-0.1-0.1-0.1-0.2c0.1-0.2,0.1-0.2,0.3-0.2h8c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-0.9,0.6-1.5c0-0.6-0.2-1.1-0.6-1.5
                          c-0.4-0.4-0.9-0.6-1.5-0.6h-7.4c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.4,0.1-0.9,0.1-1.5V40c0-0.1,0-0.1,0-0.1c0,0,0,0,0.1,0h5.9
                          c0.5,0,1-0.2,1.4-0.6c0.4-0.4,0.6-0.9,0.6-1.4c0-0.6-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.4-0.6H145c0.3-0.7,0.5-1.2,0.7-1.7
                          c0.2-0.6,0.2-1.2-0.2-1.7c-0.3-0.5-0.8-0.8-1.4-0.9c-0.2,0-0.3-0.1-0.5-0.1c-0.5,0-0.9,0.1-1.3,0.3c-0.5,0.3-0.9,0.8-1.1,1.4
                          c-1.1,3-2.6,5.6-4.2,7.6c-0.4,0.5-0.6,1-0.5,1.6c0.1,0.6,0.4,1,0.9,1.4c0.5,0.3,1.1,0.5,1.8,0.4c0.7-0.1,1.2-0.4,1.6-0.9
                          c0.7-0.9,1.3-1.9,2-3c0.1-0.2,0.2-0.3,0.5-0.3h3.6c0.1,0,0.1,0,0.1,0c0,0,0,0,0,0.1v2.7c0,0.6,0,1.1-0.1,1.5c0,0.1,0,0.1,0,0.1
                          c0,0,0,0-0.2,0h-9c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6l8.3,0
                          c-1.3,3.4-4.3,6.2-8.9,8.2c-0.5,0.2-0.8,0.7-0.9,1.2c-0.1,0.5,0.1,1,0.5,1.4c0.4,0.5,1,0.8,1.5,1c0.2,0.1,0.4,0.1,0.7,0.1
                          c0.4,0,0.8-0.1,1.1-0.3C144.1,58,147.2,55.4,149.1,52.4z"/>
                        <path className="fill-[#3E9A87]" d="M167.8,124.8h-8.9l1.8-8.4H155l-1.8,8.4h-8.9l4.8-22.6c0.3-1.3,0.9-2.3,1.8-3c0.9-0.8,2-1.1,3.3-1.1h15.1
                          c1.3,0,2.2,0.4,2.8,1.1c0.6,0.8,0.8,1.8,0.5,3L167.8,124.8z M158.2,101.4l-2.5,11.7h5.6l2.5-11.7H158.2z"/>
                        <path className="fill-[#3093C1]" d="M198.8,124.8h-8.9l3.3-15.5l-9,15.5h-3.7l-2.6-15.5l-3.3,15.5h-3.3L177,98h8.1l2.4,14.6L196,98h8.4
                          L198.8,124.8z"/>
                        <path className="fill-[#EBBD41]" d="M270.9,124.8h-8.3l4-18.5h-4.5l-4,18.5h-8.2l4-18.5h-4.5l-4,18.5h-8.3l4.6-21.4h30.4c1,0,1.7,0.3,2.2,0.9
                          c0.5,0.6,0.6,1.4,0.4,2.4L270.9,124.8z"/>
                        <path className="fill-[#E0792A]" d="M294.6,124.8h-16.7c-1.3,0-2.2-0.4-2.8-1.1c-0.6-0.8-0.8-1.8-0.5-3l1.7-8c0.2-1,0.7-1.8,1.4-2.4
                          c0.8-0.6,1.6-0.9,2.6-0.9h9.4l0.7-3h-8.6l0.6-3h13.5c1,0,1.7,0.3,2.2,0.9c0.5,0.6,0.6,1.4,0.4,2.4L294.6,124.8z M284.6,112.3
                          l-2.1,9.6h4.5l2.1-9.6H284.6z"/>
                        <path className="fill-[#80B244]" d="M318.8,106.3h-8l-4,18.5h-8.3l3.8-18.1c0.2-1,0.7-1.8,1.5-2.4c0.8-0.6,1.6-0.9,2.6-0.9h13L318.8,106.3z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="text-sm font-medium">{t('login.iamsmart')}</span>
              </div>
            </Button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-3 bg-white text-gray-500 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                  {t('login.or')}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isRegisterMode && (
                <div className="space-y-2">
                  <Label htmlFor="name" className={`text-sm font-medium text-gray-700 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                    {t('register.name')}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
                    placeholder={t('register.name.placeholder')}
                    aria-describedby={nameError ? "name-error" : undefined}
                  />
                  {nameError && (
                    <p id="name-error" className={`text-red-600 text-sm ${language === 'en' ? '' : 'font-source-han-sans'}`} role="alert">
                      {nameError}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className={`text-sm font-medium text-gray-700 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                  {t('login.email')}
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
                    placeholder={t('login.email.placeholder')}
                    aria-describedby={emailError ? "email-error" : undefined}
                    autoComplete="email"
                  />
                </div>
                {emailError && (
                  <p id="email-error" className={`text-red-600 text-sm ${language === 'en' ? '' : 'font-source-han-sans'}`} role="alert">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className={`text-sm font-medium text-gray-700 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                  {t('login.password')}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
                    placeholder={t('login.password.placeholder')}
                    aria-describedby={passwordError ? "password-error" : undefined}
                    autoComplete={isRegisterMode ? "new-password" : "current-password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                    aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwordError && (
                  <p id="password-error" className={`text-red-600 text-sm ${language === 'en' ? '' : 'font-source-han-sans'}`} role="alert">
                    {passwordError}
                  </p>
                )}
              </div>

              {isRegisterMode && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className={`text-sm font-medium text-gray-700 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                    {t('register.confirm.password')}
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
                      placeholder={t('register.confirm.password.placeholder')}
                      aria-describedby={confirmPasswordError ? "confirm-password-error" : undefined}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {confirmPasswordError && (
                    <p id="confirm-password-error" className={`text-red-600 text-sm ${language === 'en' ? '' : 'font-source-han-sans'}`} role="alert">
                      {confirmPasswordError}
                    </p>
                  )}
                </div>
              )}

              {!isRegisterMode && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className={`text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:underline transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
                  >
                    {t('login.forgot.password')}
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${language === 'en' ? '' : 'font-source-han-sans'}`}
              >
                {isLoading ? t(isRegisterMode ? 'register.loading' : 'login.loading') : t(isRegisterMode ? 'register.button' : 'login.button')}
              </Button>
            </form>

            {/* Mode Toggle */}
            <div className="text-center mt-6">
              <span className={`text-gray-600 text-sm ${language === 'en' ? '' : 'font-source-han-sans'}`}>
                {t(isRegisterMode ? 'register.have.account' : 'register.no.account')}
              </span>
              {' '}
              <button
                onClick={toggleMode}
                className={`text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:underline transition-colors ${language === 'en' ? '' : 'font-source-han-sans'}`}
              >
                {t(isRegisterMode ? 'register.login.link' : 'register.link')}
              </button>
            </div>
          </Card>

          {/* Legal Disclaimer */}
          <p className={`text-center text-xs text-gray-500 mt-6 leading-relaxed ${language === 'en' ? '' : 'font-source-han-sans'}`}>
            {t('legal.agreement')}
            {' '}
            <button
              onClick={() => openLegalModal('terms')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none"
            >
              {t('legal.terms')}
            </button>
            {' '}
            {t('legal.and')}
            {' '}
            <button
              onClick={() => openLegalModal('privacy')}
              className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none"
            >
              {t('legal.privacy')}
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={`text-sm text-gray-500 ${language === 'en' ? '' : 'font-source-han-sans'}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </footer>

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
