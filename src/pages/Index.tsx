
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Smartphone } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Auto-focus email input on load
  useEffect(() => {
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.focus();
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    // Validation
    if (!email) {
      setEmailError('請輸入電郵地址');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('請輸入有效的電郵地址');
      return;
    }
    if (!password) {
      setPasswordError('密碼不能為空');
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "登入成功",
        description: "正在跳轉到港話通服務...",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "登入失敗",
        description: "電郵地址或密碼錯誤，請重新輸入",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleIAMSmartLogin = () => {
    toast({
      title: "正在連接智方便",
      description: "即將跳轉到智方便認證頁面...",
    });
    // Simulate iAM Smart redirect
    setTimeout(() => {
      window.open('https://www.iamsmart.gov.hk/', '_blank');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">港</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">港話通</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              繁
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">歡迎回來</h2>
            <p className="text-gray-600">登入您的港話通帳戶</p>
          </div>

          {/* Login Card */}
          <Card className="bg-white border border-gray-200 shadow-sm rounded-lg p-8">
            <form onSubmit={handleEmailLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  電郵地址
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="輸入您的電郵地址"
                    aria-describedby={emailError ? "email-error" : undefined}
                    autoComplete="email"
                  />
                </div>
                {emailError && (
                  <p id="email-error" className="text-red-600 text-sm" role="alert">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  密碼
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="輸入您的密碼"
                    aria-describedby={passwordError ? "password-error" : undefined}
                    autoComplete="current-password"
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
                  <p id="password-error" className="text-red-600 text-sm" role="alert">
                    {passwordError}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:underline"
                >
                  忘記密碼？
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "登入中..." : "登入"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">或</span>
              </div>
            </div>

            {/* iAM Smart Login */}
            <Button
              onClick={handleIAMSmartLogin}
              variant="outline"
              className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-md transition-colors"
            >
              <Smartphone className="mr-3 w-5 h-5" />
              使用「智方便」登入
            </Button>
          </Card>

          {/* Legal Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
            登入即表示你同意
            <a href="#" className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none">
              《服務條款》
            </a>
            及
            <a href="#" className="text-blue-600 hover:text-blue-800 underline transition-colors focus:outline-none">
              《私隱政策》
            </a>
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 香港特別行政區政府 版權所有
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
