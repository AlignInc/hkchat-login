import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh-HK' | 'zh-CN' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'zh-HK': {
    // Header
    'app.name': '港話通',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    
    // Login Form
    'login.welcome': '歡迎回來',
    'login.subtitle': '登入您的港話通帳戶',
    'login.email': '電郵地址',
    'login.email.placeholder': '輸入您的電郵地址',
    'login.password': '密碼',
    'login.password.placeholder': '輸入您的密碼',
    'login.forgot.password': '忘記密碼？',
    'login.button': '登入',
    'login.loading': '登入中...',
    'login.or': '或',
    'login.iamsmart': '使用「智方便」登入',
    
    // Register
    'register.no.account': '還沒有帳戶？',
    'register.link': '立即註冊',
    'register.title': '建立新帳戶',
    'register.subtitle': '加入港話通社群',
    'register.name': '姓名',
    'register.name.placeholder': '輸入您的姓名',
    'register.confirm.password': '確認密碼',
    'register.confirm.password.placeholder': '再次輸入您的密碼',
    'register.button': '註冊',
    'register.loading': '註冊中...',
    'register.have.account': '已有帳戶？',
    'register.login.link': '立即登入',
    
    // Legal
    'legal.agreement': '登入即表示你同意',
    'legal.terms': '《服務條款》',
    'legal.privacy': '《私隱政策》',
    'legal.and': '及',
    
    // Footer
    'footer.copyright': '© 2025 香港生成式人工智能研發中心 版權所有',
    
    // Terms of Service
    'terms.title': '服務條款',
    'terms.content': `1. 服務說明
港話通是由香港生成式人工智能研發中心提供的生成式人工智能服務平台。

2. 用戶責任
用戶需確保提供的信息準確無誤，並承諾不會濫用本服務。

3. 服務限制
我們保留隨時修改或終止服務的權利。

4. 隱私保護
我們承諾保護用戶隱私，詳情請參閱私隱政策。

5. 免責聲明
本服務按「現狀」提供，我們不對服務的準確性或可靠性作出保證。

6. 適用法律
本條款受香港特別行政區法律管轄。`,
    
    // Privacy Policy
    'privacy.title': '私隱政策',
    'privacy.content': `1. 信息收集
我們收集您提供的個人信息以提供更好的服務。

2. 信息使用
您的信息僅用於改善服務質量和用戶體驗。

3. 信息分享
我們不會向第三方分享您的個人信息，除非法律要求。

4. 數據安全
我們採用業界標準的安全措施保護您的數據。

5. Cookie使用
我們使用Cookie來改善網站功能和用戶體驗。

6. 聯繫我們
如有私隱相關問題，請聯繫我們的客服團隊。`,
    
    // Validation Messages
    'validation.email.required': '請輸入電郵地址',
    'validation.email.invalid': '請輸入有效的電郵地址',
    'validation.password.required': '密碼不能為空',
    'validation.name.required': '請輸入姓名',
    'validation.password.mismatch': '密碼不一致',
    'validation.login.failed': '電郵地址或密碼錯誤，請重新輸入',
    
    // Success Messages
    'success.login': '登入成功',
    'success.login.description': '正在跳轉到港話通服務...',
    'success.register': '註冊成功',
    'success.register.description': '歡迎加入港話通！',
    
    // iAM Smart
    'iamsmart.connecting': '正在連接智方便',
    'iamsmart.description': '即將跳轉到智方便認證頁面...'
  },
  
  'zh-CN': {
    // Header
    'app.name': '港话通',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    
    // Login Form
    'login.welcome': '欢迎回来',
    'login.subtitle': '登录您的港话通账户',
    'login.email': '邮箱地址',
    'login.email.placeholder': '输入您的邮箱地址',
    'login.password': '密码',
    'login.password.placeholder': '输入您的密码',
    'login.forgot.password': '忘记密码？',
    'login.button': '登录',
    'login.loading': '登录中...',
    'login.or': '或',
    'login.iamsmart': '使用「智方便」登录',
    
    // Register
    'register.no.account': '还没有账户？',
    'register.link': '立即注册',
    'register.title': '创建新账户',
    'register.subtitle': '加入港话通社区',
    'register.name': '姓名',
    'register.name.placeholder': '输入您的姓名',
    'register.confirm.password': '确认密码',
    'register.confirm.password.placeholder': '再次输入您的密码',
    'register.button': '注册',
    'register.loading': '注册中...',
    'register.have.account': '已有账户？',
    'register.login.link': '立即登录',
    
    // Legal
    'legal.agreement': '登录即表示您同意',
    'legal.terms': '《服务条款》',
    'legal.privacy': '《隐私政策》',
    'legal.and': '及',
    
    // Footer
    'footer.copyright': '© 2025 香港生成式人工智能研发中心 版权所有',
    
    // Terms of Service
    'terms.title': '服务条款',
    'terms.content': `1. 服务说明
港话通是由香港生成式人工智能研发中心提供的生成式人工智能服务平台。

2. 用户责任
用户需确保提供的信息准确无误，并承诺不会滥用本服务。

3. 服务限制
我们保留随时修改或终止服务的权利。

4. 隐私保护
我们承诺保护用户隐私，详情请参阅隐私政策。

5. 免责声明
本服务按「现状」提供，我们不对服务的准确性或可靠性作出保证。

6. 适用法律
本条款受香港特别行政区法律管辖。`,
    
    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.content': `1. 信息收集
我们收集您提供的个人信息以提供更好的服务。

2. 信息使用
您的信息仅用于改善服务质量和用户体验。

3. 信息分享
我们不会向第三方分享您的个人信息，除非法律要求。

4. 数据安全
我们采用业界标准的安全措施保护您的数据。

5. Cookie使用
我们使用Cookie来改善网站功能和用户体验。

6. 联系我们
如有隐私相关问题，请联系我们的客服团队。`,
    
    // Validation Messages
    'validation.email.required': '请输入邮箱地址',
    'validation.email.invalid': '请输入有效的邮箱地址',
    'validation.password.required': '密码不能为空',
    'validation.name.required': '请输入姓名',
    'validation.password.mismatch': '密码不一致',
    'validation.login.failed': '邮箱地址或密码错误，请重新输入',
    
    // Success Messages
    'success.login': '登录成功',
    'success.login.description': '正在跳转到港话通服务...',
    'success.register': '注册成功',
    'success.register.description': '欢迎加入港话通！',
    
    // iAM Smart
    'iamsmart.connecting': '正在连接智方便',
    'iamsmart.description': '即将跳转到智方便认证页面...'
  },
  
  'en': {
    // Header
    'app.name': 'HKChat',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    
    // Login Form
    'login.welcome': 'Welcome Back',
    'login.subtitle': 'Sign in to your HKChat account',
    'login.email': 'Email Address',
    'login.email.placeholder': 'Enter your email address',
    'login.password': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.forgot.password': 'Forgot Password?',
    'login.button': 'Sign In',
    'login.loading': 'Signing in...',
    'login.or': 'or',
    'login.iamsmart': 'Sign in with iAM Smart',
    
    // Register
    'register.no.account': "Don't have an account?",
    'register.link': 'Sign up now',
    'register.title': 'Create New Account',
    'register.subtitle': 'Join the HKChat community',
    'register.name': 'Full Name',
    'register.name.placeholder': 'Enter your full name',
    'register.confirm.password': 'Confirm Password',
    'register.confirm.password.placeholder': 'Re-enter your password',
    'register.button': 'Sign Up',
    'register.loading': 'Signing up...',
    'register.have.account': 'Already have an account?',
    'register.login.link': 'Sign in now',
    
    // Legal
    'legal.agreement': 'By signing in, you agree to our',
    'legal.terms': 'Terms of Service',
    'legal.privacy': 'Privacy Policy',
    'legal.and': 'and',
    
    // Footer
    'footer.copyright': '© 2025 Hong Kong Generative AI Research and Development Center. All rights reserved.',
    
    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.content': `1. Service Description
HKChat is a generative AI service platform provided by Hong Kong Generative AI Research and Development Center.

2. User Responsibilities
Users must ensure the accuracy of provided information and promise not to misuse this service.

3. Service Limitations
We reserve the right to modify or terminate the service at any time.

4. Privacy Protection
We are committed to protecting user privacy. Please refer to our Privacy Policy for details.

5. Disclaimer
This service is provided "as is" and we make no warranties regarding the accuracy or reliability of the service.

6. Applicable Law
These terms are governed by the laws of the Hong Kong Special Administrative Region.`,
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.content': `1. Information Collection
We collect personal information you provide to deliver better services.

2. Information Usage
Your information is used solely to improve service quality and user experience.

3. Information Sharing
We do not share your personal information with third parties unless required by law.

4. Data Security
We employ industry-standard security measures to protect your data.

5. Cookie Usage
We use cookies to improve website functionality and user experience.

6. Contact Us
For privacy-related questions, please contact our customer service team.`,
    
    // Validation Messages
    'validation.email.required': 'Please enter your email address',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.password.required': 'Password cannot be empty',
    'validation.name.required': 'Please enter your name',
    'validation.password.mismatch': 'Passwords do not match',
    'validation.login.failed': 'Incorrect email or password. Please try again.',
    
    // Success Messages
    'success.login': 'Login Successful',
    'success.login.description': 'Redirecting to HKChat services...',
    'success.register': 'Registration Successful',
    'success.register.description': 'Welcome to HKChat!',
    
    // iAM Smart
    'iamsmart.connecting': 'Connecting to iAM Smart',
    'iamsmart.description': 'Redirecting to iAM Smart authentication page...'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh-HK');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
