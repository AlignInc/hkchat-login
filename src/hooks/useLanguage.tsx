import { createContext, useContext, useState } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};

const translations = {
  'zh-HK': {
    'app.name': '港話通',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文', 
    'language.en': 'English',
    'login.welcome': '歡迎回來',
    'login.subtitle': '登入您的帳戶繼續聊天',
    'login.email': '電子郵箱',
    'login.email.placeholder': '請輸入您的電子郵箱',
    'login.password': '密碼',
    'login.password.placeholder': '請輸入您的密碼',
    'login.forgot.password': '忘記密碼？',
    'login.button': '登入',
    'login.loading': '登入中...',
    'login.or': '或',
    'login.iamsmart': '使用 iAM Smart 登入',
    'register.title': '建立新帳戶',
    'register.subtitle': '註冊以開始您的聊天體驗',
    'register.name': '全名',
    'register.name.placeholder': '請輸入您的全名',
    'register.confirm.password': '確認密碼',
    'register.confirm.password.placeholder': '請再次輸入密碼',
    'register.button': '註冊',
    'register.loading': '註冊中...',
    'register.have.account': '已有帳戶？',
    'register.login.link': '立即登入',
    'register.no.account': '還沒有帳戶？',
    'register.link': '立即註冊',
    'validation.email.required': '請輸入電子郵箱',
    'validation.email.invalid': '請輸入有效的電子郵箱格式',
    'validation.password.required': '請輸入密碼',
    'validation.password.mismatch': '兩次密碼輸入不一致',
    'validation.name.required': '請輸入姓名',
    'validation.login.failed': '登入失敗，請檢查您的憑證',
    'success.login': '登入成功',
    'success.login.description': '歡迎回來！正在載入您的聊天室...',
    'success.register': '註冊成功',
    'success.register.description': '您的帳戶已建立，歡迎使用港話通！',
    'iamsmart.connecting': '正在連接 iAM Smart',
    'iamsmart.description': '正在重定向到 iAM Smart 登入頁面...',
    'footer.copyright': '© 2024 港話通。保留所有權利。',
    'legal.agreement': '使用本服務即表示您同意我們的',
    'legal.terms': '服務條款',
    'legal.and': '和',
    'legal.privacy': '私隱政策',
    'terms.title': '服務條款',
    'privacy.title': '私隱政策',
    'privacy.content': `
      <div class="privacy-policy-content">
        <section class="policy-section">
          <h2>1. 收集的個人資料類別</h2>
          <p>我們收集以下類別的個人資料：</p>
          
          <div class="data-table-container">
            <table class="data-collection-table">
              <thead>
                <tr>
                  <th>資料類別</th>
                  <th>具體內容</th>
                  <th>收集方式 / 來源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>身份識別資料</td>
                  <td>姓名、電話號碼、電子郵箱地址</td>
                  <td>用戶註冊時直接提供</td>
                </tr>
                <tr>
                  <td>技術資料</td>
                  <td>IP地址、瀏覽器類型、設備資訊</td>
                  <td>自動收集</td>
                </tr>
                <tr>
                  <td>使用資料</td>
                  <td>聊天記錄、使用習慣、偏好設置</td>
                  <td>服務使用過程中收集</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>2. 個人資料的使用目的</h2>
          <div class="purpose-list">
            <div class="purpose-item">
              <h3>服務提供</h3>
              <p>為您提供聊天服務和相關功能</p>
            </div>
            <div class="purpose-item">
              <h3>客戶支援</h3>
              <p>回應您的查詢和提供技術支援</p>
            </div>
            <div class="purpose-item">
              <h3>服務改進</h3>
              <p>分析使用模式以改善我們的服務</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>3. 個人資料的披露</h2>
          <p>我們只會在以下情況下披露您的個人資料：</p>
          
          <div class="disclosure-grid">
            <div class="disclosure-card">
              <h4>法律要求</h4>
              <p>遵守法律義務或法院命令時</p>
            </div>
            <div class="disclosure-card">
              <h4>服務提供商</h4>
              <p>與協助我們提供服務的第三方合作夥伴</p>
            </div>
            <div class="disclosure-card">
              <h4>業務轉讓</h4>
              <p>在合併、收購或資產出售的情況下</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>4. 資料保安措施</h2>
          <div class="security-measures">
            <div class="measure-item">
              <span class="measure-icon">🔒</span>
              <div>
                <h4>加密傳輸</h4>
                <p>所有數據傳輸均採用SSL/TLS加密</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🛡️</span>
              <div>
                <h4>存取控制</h4>
                <p>嚴格限制對個人資料的存取權限</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🔄</span>
              <div>
                <h4>定期備份</h4>
                <p>定期備份數據以防止意外丟失</p>
              </div>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. 您的權利</h2>
          <p>根據適用的私隱法律，您享有以下權利：</p>
          
          <div class="rights-container">
            <div class="right-item">
              <h4>查閱權</h4>
              <p>要求查閱我們持有的您的個人資料</p>
            </div>
            <div class="right-item">
              <h4>更正權</h4>
              <p>要求更正不準確或不完整的個人資料</p>
            </div>
            <div class="right-item">
              <h4>刪除權</h4>
              <p>在特定情況下要求刪除您的個人資料</p>
            </div>
            <div class="right-item">
              <h4>限制處理權</h4>
              <p>要求限制對您個人資料的處理</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>6. 聯絡我們</h2>
          <div class="contact-info">
            <p>如您對本私隱政策有任何疑問，請通過以下方式聯絡我們：</p>
            <div class="contact-details">
              <p><strong>電子郵箱：</strong> privacy@hkchat.com</p>
              <p><strong>地址：</strong> 香港中環德輔道中99號</p>
              <p><strong>電話：</strong> +852 1234 5678</p>
            </div>
          </div>
        </section>
      </div>
    `,
    'terms.content': `
      <div class="terms-content">
        <section class="terms-section">
          <h2>1. 接受條款</h2>
          <p>歡迎使用港話通聊天服務。通過存取或使用我們的服務，您同意受這些服務條款約束。</p>
        </section>

        <section class="terms-section">
          <h2>2. 服務描述</h2>
          <div class="service-description">
            <p>港話通是一個AI驅動的聊天平台，提供以下服務：</p>
            <ul class="service-list">
              <li>智能對話功能</li>
              <li>多語言支援</li>
              <li>個人化聊天體驗</li>
              <li>24/7全天候服務</li>
            </ul>
          </div>
        </section>

        <section class="terms-section">
          <h2>3. 用戶責任</h2>
          <div class="responsibility-grid">
            <div class="responsibility-item">
              <h4>適當使用</h4>
              <p>您同意以合法和適當的方式使用我們的服務</p>
            </div>
            <div class="responsibility-item">
              <h4>帳戶安全</h4>
              <p>您有責任保護您的帳戶資訊和密碼</p>
            </div>
            <div class="responsibility-item">
              <h4>內容責任</h4>
              <p>您對通過服務發送的所有內容負責</p>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>4. 禁止行為</h2>
          <div class="prohibited-actions">
            <div class="prohibition-item">
              <span class="prohibition-icon">⚠️</span>
              <div>
                <h4>騷擾或辱罵</h4>
                <p>禁止發送騷擾、威脅或辱罵性內容</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🚫</span>
              <div>
                <h4>非法活動</h4>
                <p>禁止使用服務進行任何非法活動</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🔒</span>
              <div>
                <h4>未經授權存取</h4>
                <p>禁止嘗試未經授權存取系統或其他用戶資料</p>
              </div>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>5. 免責聲明</h2>
          <div class="disclaimer-box">
            <p>本服務按"現況"提供。我們不保證服務的連續性、準確性或完整性。</p>
          </div>
        </section>

        <section class="terms-section">
          <h2>6. 修改條款</h2>
          <p>我們保留隨時修改這些條款的權利。修改後的條款將在網站上公佈後生效。</p>
        </section>
      </div>
    `
  },
  'zh-CN': {
    'app.name': '港话通',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文',
    'language.en': 'English',
    'login.welcome': '欢迎回来',
    'login.subtitle': '登录您的账户继续聊天',
    'login.email': '电子邮箱',
    'login.email.placeholder': '请输入您的电子邮箱',
    'login.password': '密码',
    'login.password.placeholder': '请输入您的密码',
    'login.forgot.password': '忘记密码？',
    'login.button': '登录',
    'login.loading': '登录中...',
    'login.or': '或',
    'login.iamsmart': '使用 iAM Smart 登录',
    'register.title': '创建新账户',
    'register.subtitle': '注册以开始您的聊天体验',
    'register.name': '全名',
    'register.name.placeholder': '请输入您的全名',
    'register.confirm.password': '确认密码',
    'register.confirm.password.placeholder': '请再次输入密码',
    'register.button': '注册',
    'register.loading': '注册中...',
    'register.have.account': '已有账户？',
    'register.login.link': '立即登录',
    'register.no.account': '还没有账户？',
    'register.link': '立即注册',
    'validation.email.required': '请输入电子邮箱',
    'validation.email.invalid': '请输入有效的电子邮箱格式',
    'validation.password.required': '请输入密码',
    'validation.password.mismatch': '两次密码输入不一致',
    'validation.name.required': '请输入姓名',
    'validation.login.failed': '登录失败，请检查您的凭证',
    'success.login': '登录成功',
    'success.login.description': '欢迎回来！正在加载您的聊天室...',
    'success.register': '注册成功',
    'success.register.description': '您的账户已创建，欢迎使用港话通！',
    'iamsmart.connecting': '正在连接 iAM Smart',
    'iamsmart.description': '正在重定向到 iAM Smart 登录页面...',
    'footer.copyright': '© 2024 港话通。保留所有权利。',
    'legal.agreement': '使用本服务即表示您同意我们的',
    'legal.terms': '服务条款',
    'legal.and': '和',
    'legal.privacy': '隐私政策',
    'terms.title': '服务条款',
    'privacy.title': '隐私政策',
    'privacy.content': `
      <div class="privacy-policy-content">
        <section class="policy-section">
          <h2>1. 收集的个人资料类别</h2>
          <p>我们收集以下类别的个人资料：</p>
          
          <div class="data-table-container">
            <table class="data-collection-table">
              <thead>
                <tr>
                  <th>资料类别</th>
                  <th>具体内容</th>
                  <th>收集方式 / 来源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>身份识别资料</td>
                  <td>姓名、电话号码、电子邮箱地址</td>
                  <td>用户注册时直接提供</td>
                </tr>
                <tr>
                  <td>技术资料</td>
                  <td>IP地址、浏览器类型、设备信息</td>
                  <td>自动收集</td>
                </tr>
                <tr>
                  <td>使用资料</td>
                  <td>聊天记录、使用习惯、偏好设置</td>
                  <td>服务使用过程中收集</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>2. 个人资料的使用目的</h2>
          <div class="purpose-list">
            <div class="purpose-item">
              <h3>服务提供</h3>
              <p>为您提供聊天服务和相关功能</p>
            </div>
            <div class="purpose-item">
              <h3>客户支持</h3>
              <p>回应您的查询和提供技术支持</p>
            </div>
            <div class="purpose-item">
              <h3>服务改进</h3>
              <p>分析使用模式以改善我们的服务</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>3. 个人资料的披露</h2>
          <p>我们只会在以下情况下披露您的个人资料：</p>
          
          <div class="disclosure-grid">
            <div class="disclosure-card">
              <h4>法律要求</h4>
              <p>遵守法律义务或法院命令时</p>
            </div>
            <div class="disclosure-card">
              <h4>服务提供商</h4>
              <p>与协助我们提供服务的第三方合作伙伴</p>
            </div>
            <div class="disclosure-card">
              <h4>业务转让</h4>
              <p>在合并、收购或资产出售的情况下</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>4. 资料保安措施</h2>
          <div class="security-measures">
            <div class="measure-item">
              <span class="measure-icon">🔒</span>
              <div>
                <h4>加密传输</h4>
                <p>所有数据传输均采用SSL/TLS加密</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🛡️</span>
              <div>
                <h4>访问控制</h4>
                <p>严格限制对个人资料的访问权限</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🔄</span>
              <div>
                <h4>定期备份</h4>
                <p>定期备份数据以防止意外丢失</p>
              </div>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. 您的权利</h2>
          <p>根据适用的隐私法律，您享有以下权利：</p>
          
          <div class="rights-container">
            <div class="right-item">
              <h4>查阅权</h4>
              <p>要求查阅我们持有的您的个人资料</p>
            </div>
            <div class="right-item">
              <h4>更正权</h4>
              <p>要求更正不准确或不完整的个人资料</p>
            </div>
            <div class="right-item">
              <h4>删除权</h4>
              <p>在特定情况下要求删除您的个人资料</p>
            </div>
            <div class="right-item">
              <h4>限制处理权</h4>
              <p>要求限制对您个人资料的处理</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>6. 联系我们</h2>
          <div class="contact-info">
            <p>如您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
            <div class="contact-details">
              <p><strong>电子邮箱：</strong> privacy@hkchat.com</p>
              <p><strong>地址：</strong> 香港中环德辅道中99号</p>
              <p><strong>电话：</strong> +852 1234 5678</p>
            </div>
          </div>
        </section>
      </div>
    `,
    'terms.content': `
      <div class="terms-content">
        <section class="terms-section">
          <h2>1. 接受条款</h2>
          <p>欢迎使用港话通聊天服务。通过访问或使用我们的服务，您同意受这些服务条款约束。</p>
        </section>

        <section class="terms-section">
          <h2>2. 服务描述</h2>
          <div class="service-description">
            <p>港话通是一个AI驱动的聊天平台，提供以下服务：</p>
            <ul class="service-list">
              <li>智能对话功能</li>
              <li>多语言支持</li>
              <li>个性化聊天体验</li>
              <li>24/7全天候服务</li>
            </ul>
          </div>
        </section>

        <section class="terms-section">
          <h2>3. 用户责任</h2>
          <div class="responsibility-grid">
            <div class="responsibility-item">
              <h4>适当使用</h4>
              <p>您同意以合法和适当的方式使用我们的服务</p>
            </div>
            <div class="responsibility-item">
              <h4>账户安全</h4>
              <p>您有责任保护您的账户信息和密码</p>
            </div>
            <div class="responsibility-item">
              <h4>内容责任</h4>
              <p>您对通过服务发送的所有内容负责</p>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>4. 禁止行为</h2>
          <div class="prohibited-actions">
            <div class="prohibition-item">
              <span class="prohibition-icon">⚠️</span>
              <div>
                <h4>骚扰或辱骂</h4>
                <p>禁止发送骚扰、威胁或辱骂性内容</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🚫</span>
              <div>
                <h4>非法活动</h4>
                <p>禁止使用服务进行任何非法活动</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🔒</span>
              <div>
                <h4>未经授权访问</h4>
                <p>禁止尝试未经授权访问系统或其他用户资料</p>
              </div>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>5. 免责声明</h2>
          <div class="disclaimer-box">
            <p>本服务按"现状"提供。我们不保证服务的连续性、准确性或完整性。</p>
          </div>
        </section>

        <section class="terms-section">
          <h2>6. 修改条款</h2>
          <p>我们保留随时修改这些条款的权利。修改后的条款将在网站上公布后生效。</p>
        </section>
      </div>
    `
  },
  en: {
    'app.name': 'HK Chat',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文',
    'language.en': 'English',
    'login.welcome': 'Welcome Back',
    'login.subtitle': 'Sign in to your account to continue chatting',
    'login.email': 'Email',
    'login.email.placeholder': 'Enter your email address',
    'login.password': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.forgot.password': 'Forgot password?',
    'login.button': 'Sign In',
    'login.loading': 'Signing in...',
    'login.or': 'or',
    'login.iamsmart': 'Sign in with iAM Smart',
    'register.title': 'Create New Account',
    'register.subtitle': 'Sign up to start your chat experience',
    'register.name': 'Full Name',
    'register.name.placeholder': 'Enter your full name',
    'register.confirm.password': 'Confirm Password',
    'register.confirm.password.placeholder': 'Enter your password again',
    'register.button': 'Sign Up',
    'register.loading': 'Signing up...',
    'register.have.account': 'Already have an account?',
    'register.login.link': 'Sign in now',
    'register.no.account': "Don't have an account?",
    'register.link': 'Sign up now',
    'validation.email.required': 'Please enter your email',
    'validation.email.invalid': 'Please enter a valid email format',
    'validation.password.required': 'Please enter your password',
    'validation.password.mismatch': 'Passwords do not match',
    'validation.name.required': 'Please enter your name',
    'validation.login.failed': 'Login failed, please check your credentials',
    'success.login': 'Login Successful',
    'success.login.description': 'Welcome back! Loading your chat room...',
    'success.register': 'Registration Successful',
    'success.register.description': 'Your account has been created, welcome to HK Chat!',
    'iamsmart.connecting': 'Connecting to iAM Smart',
    'iamsmart.description': 'Redirecting to iAM Smart login page...',
    'footer.copyright': '© 2024 HK Chat. All rights reserved.',
    'legal.agreement': 'By using this service, you agree to our',
    'legal.terms': 'Terms of Service',
    'legal.and': 'and',
    'legal.privacy': 'Privacy Policy',
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'privacy.content': `
      <div class="privacy-policy-content">
        <section class="policy-section">
          <h2>1. Categories of Personal Data Collected</h2>
          <p>We collect the following categories of personal data:</p>
          
          <div class="data-table-container">
            <table class="data-collection-table">
              <thead>
                <tr>
                  <th>Data Category</th>
                  <th>Specific Content</th>
                  <th>Collection Method / Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Identity Information</td>
                  <td>Name, phone number, email address</td>
                  <td>Directly provided during user registration</td>
                </tr>
                <tr>
                  <td>Technical Data</td>
                  <td>IP address, browser type, device information</td>
                  <td>Automatically collected</td>
                </tr>
                <tr>
                  <td>Usage Data</td>
                  <td>Chat history, usage patterns, preference settings</td>
                  <td>Collected during service usage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>2. Purposes for Using Personal Data</h2>
          <div class="purpose-list">
            <div class="purpose-item">
              <h3>Service Provision</h3>
              <p>To provide you with chat services and related functionalities</p>
            </div>
            <div class="purpose-item">
              <h3>Customer Support</h3>
              <p>To respond to your inquiries and provide technical support</p>
            </div>
            <div class="purpose-item">
              <h3>Service Improvement</h3>
              <p>To analyze usage patterns to improve our services</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>3. Disclosure of Personal Data</h2>
          <p>We will only disclose your personal data in the following circumstances:</p>
          
          <div class="disclosure-grid">
            <div class="disclosure-card">
              <h4>Legal Requirements</h4>
              <p>When complying with legal obligations or court orders</p>
            </div>
            <div class="disclosure-card">
              <h4>Service Providers</h4>
              <p>With third-party partners who assist us in providing services</p>
            </div>
            <div class="disclosure-card">
              <h4>Business Transfers</h4>
              <p>In the event of mergers, acquisitions, or asset sales</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>4. Data Security Measures</h2>
          <div class="security-measures">
            <div class="measure-item">
              <span class="measure-icon">🔒</span>
              <div>
                <h4>Encrypted Transmission</h4>
                <p>All data transmission uses SSL/TLS encryption</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🛡️</span>
              <div>
                <h4>Access Control</h4>
                <p>Strict limitation of access rights to personal data</p>
              </div>
            </div>
            <div class="measure-item">
              <span class="measure-icon">🔄</span>
              <div>
                <h4>Regular Backups</h4>
                <p>Regular data backups to prevent accidental loss</p>
              </div>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. Your Rights</h2>
          <p>Under applicable privacy laws, you have the following rights:</p>
          
          <div class="rights-container">
            <div class="right-item">
              <h4>Right of Access</h4>
              <p>Request to access your personal data that we hold</p>
            </div>
            <div class="right-item">
              <h4>Right of Rectification</h4>
              <p>Request correction of inaccurate or incomplete personal data</p>
            </div>
            <div class="right-item">
              <h4>Right of Erasure</h4>
              <p>Request deletion of your personal data under specific circumstances</p>
            </div>
            <div class="right-item">
              <h4>Right to Restrict Processing</h4>
              <p>Request restriction on the processing of your personal data</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>6. Contact Us</h2>
          <div class="contact-info">
            <p>If you have any questions about this Privacy Policy, please contact us through the following means:</p>
            <div class="contact-details">
              <p><strong>Email:</strong> privacy@hkchat.com</p>
              <p><strong>Address:</strong> 99 Des Voeux Road Central, Central, Hong Kong</p>
              <p><strong>Phone:</strong> +852 1234 5678</p>
            </div>
          </div>
        </section>
      </div>
    `,
    'terms.content': `
      <div class="terms-content">
        <section class="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>Welcome to HK Chat service. By accessing or using our service, you agree to be bound by these Terms of Service.</p>
        </section>

        <section class="terms-section">
          <h2>2. Service Description</h2>
          <div class="service-description">
            <p>HK Chat is an AI-powered chat platform that provides the following services:</p>
            <ul class="service-list">
              <li>Intelligent conversation features</li>
              <li>Multi-language support</li>
              <li>Personalized chat experience</li>
              <li>24/7 around-the-clock service</li>
            </ul>
          </div>
        </section>

        <section class="terms-section">
          <h2>3. User Responsibilities</h2>
          <div class="responsibility-grid">
            <div class="responsibility-item">
              <h4>Appropriate Use</h4>
              <p>You agree to use our service in a legal and appropriate manner</p>
            </div>
            <div class="responsibility-item">
              <h4>Account Security</h4>
              <p>You are responsible for protecting your account information and password</p>
            </div>
            <div class="responsibility-item">
              <h4>Content Responsibility</h4>
              <p>You are responsible for all content sent through the service</p>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>4. Prohibited Conduct</h2>
          <div class="prohibited-actions">
            <div class="prohibition-item">
              <span class="prohibition-icon">⚠️</span>
              <div>
                <h4>Harassment or Abuse</h4>
                <p>Prohibited from sending harassing, threatening, or abusive content</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🚫</span>
              <div>
                <h4>Illegal Activities</h4>
                <p>Prohibited from using the service for any illegal activities</p>
              </div>
            </div>
            <div class="prohibition-item">
              <span class="prohibition-icon">🔒</span>
              <div>
                <h4>Unauthorized Access</h4>
                <p>Prohibited from attempting unauthorized access to systems or other user data</p>
              </div>
            </div>
          </div>
        </section>

        <section class="terms-section">
          <h2>5. Disclaimer</h2>
          <div class="disclaimer-box">
            <p>This service is provided "as is". We do not guarantee the continuity, accuracy, or completeness of the service.</p>
          </div>
        </section>

        <section class="terms-section">
          <h2>6. Modification of Terms</h2>
          <p>We reserve the right to modify these terms at any time. Modified terms will take effect after being published on the website.</p>
        </section>
      </div>
    `
  }
};
