
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Smartphone } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from '@/hooks/useLanguage';

interface AuthFormProps {
  isRegisterMode: boolean;
  onToggleMode: () => void;
  onLegalModalOpen: (type: 'terms' | 'privacy') => void;
}

const AuthForm = ({ isRegisterMode, onToggleMode, onLegalModalOpen }: AuthFormProps) => {
  const { language, t } = useLanguage();
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

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setEmailError('');
    setPasswordError('');
    setNameError('');
    setConfirmPasswordError('');
  };

  const handleToggleMode = () => {
    onToggleMode();
    resetForm();
  };

  return (
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
        {/* iAM Smart Login - Now at the top */}
        <Button
          onClick={handleIAMSmartLogin}
          variant="outline"
          className={`w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-md transition-all duration-200 hover:scale-105 mb-6 ${language === 'en' ? '' : 'font-source-han-sans'}`}
        >
          <Smartphone className="mr-3 w-5 h-5" />
          {t('login.iamsmart')}
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
            onClick={handleToggleMode}
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
          onClick={() => onLegalModalOpen('terms')}
          className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none"
        >
          {t('legal.terms')}
        </button>
        {' '}
        {t('legal.and')}
        {' '}
        <button
          onClick={() => onLegalModalOpen('privacy')}
          className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none"
        >
          {t('legal.privacy')}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
