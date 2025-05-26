
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Gradient Background with Noise Texture */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#7B160A] via-[#C52234] to-[#FF6060]"
        style={{
          background: `
            linear-gradient(20deg, #7B160A 0%, #C52234 50%, #FF6060 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Skyline Glow Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15">
        <div className="skyline-glow"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 h-15 bg-[rgba(123,22,10,0.75)] backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Hong Kong SAR Emblem */}
            <a 
              href="https://www.gov.hk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
              aria-label="香港特別行政區區徽，點擊前往政府一站通"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#C52234] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  港
                </div>
              </div>
              <h1 className="text-white text-xl font-medium">港話通</h1>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              繁
            </button>
            <span className="text-white/40">|</span>
            <button className="text-white/60 hover:text-white text-sm font-medium transition-colors">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen pt-15 pb-12 px-4">
        <Card className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-8 animate-fade-in">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold text-white">登入港話通</h1>
              <p className="text-xl text-white/90 font-medium">香港生成式人工智能中心官方服務</p>
            </div>

            {/* Email/Password Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  電郵地址
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200"
                    placeholder="輸入您的電郵地址"
                    aria-describedby={emailError ? "email-error" : undefined}
                    autoComplete="email"
                  />
                </div>
                {emailError && (
                  <p id="email-error" className="text-red-200 text-sm animate-fade-in" role="alert">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">
                  密碼
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200"
                    placeholder="輸入您的密碼"
                    aria-describedby={passwordError ? "password-error" : undefined}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded p-1"
                    aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwordError && (
                  <p id="password-error" className="text-red-200 text-sm animate-fade-in" role="alert">
                    {passwordError}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-white/80 hover:text-white text-sm underline focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1"
                >
                  忘記密碼？
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#C52234] hover:bg-[#B01D2D] text-white font-medium py-3 rounded-xl transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "登入中..." : "以電郵登入"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-transparent text-white/80">或</span>
              </div>
            </div>

            {/* iAM Smart Login */}
            <Button
              onClick={handleIAMSmartLogin}
              variant="outline"
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 font-medium py-3 rounded-xl transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-white/20"
            >
              <Smartphone className="mr-3 w-5 h-5" />
              使用「智方便」登入
            </Button>

            {/* Legal Disclaimer */}
            <p className="text-center text-xs text-white/70 leading-relaxed">
              登入即表示你同意
              <a href="#" className="underline hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1">
                《服務條款》
              </a>
              及
              <a href="#" className="underline hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1">
                《私隱政策》
              </a>
            </p>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 h-12 bg-[rgba(123,22,10,0.75)] backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <p className="text-sm text-white/70">
            © 2024 香港特別行政區政府 版權所有 | 最後修訂日期: 2024年12月
          </p>
        </div>
      </footer>

      <style jsx>{`
        .skyline-glow {
          background: radial-gradient(ellipse at bottom center, rgba(255, 255, 180, 0.15) 0%, transparent 70%);
          height: 100%;
          animation: skyline-pan 30s linear infinite;
        }
        
        @keyframes skyline-pan {
          0% { background-position-x: 0%; }
          100% { background-position-x: 100%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* High contrast mode support */
        @media (forced-colors: active) {
          .bg-white\/20 {
            background-color: Canvas !important;
            border: 2px solid CanvasText !important;
          }
          
          .text-white {
            color: CanvasText !important;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .skyline-glow {
            animation: none;
          }
          
          .animate-fade-in {
            animation: none;
          }
          
          .hover\\:scale-105:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
