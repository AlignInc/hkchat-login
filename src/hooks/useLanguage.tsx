import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({
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
    return translations[language as keyof typeof translations][key as keyof typeof translations['en']] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};

const translations = {
  'zh-HK': {
    'app.name': '香港聊天',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文',
    'language.en': 'English',
    'login.welcome': '歡迎回來',
    'login.subtitle': '登錄到您的帳戶',
    'login.email': '電子郵件',
    'login.email.placeholder': '輸入你的電子郵件',
    'login.password': '密碼',
    'login.password.placeholder': '輸入你的密碼',
    'login.button': '登錄',
    'login.loading': '登錄中...',
    'login.forgot.password': '忘記密碼？',
    'login.iamsmart': '使用「智方便」登入',
    'login.or': '或者',
    'register.title': '創建帳戶',
    'register.subtitle': '立即加入我們的社群',
    'register.name': '全名',
    'register.name.placeholder': '輸入你的全名',
    'register.confirm.password': '確認密碼',
    'register.confirm.password.placeholder': '確認你的密碼',
    'register.button': '創建帳戶',
    'register.loading': '創建帳戶中...',
    'register.no.account': '沒有帳戶？',
    'register.link': '註冊',
    'register.have.account': '已經有帳戶？',
    'register.login.link': '登錄',
    'validation.email.required': '電子郵件是必填的',
    'validation.email.invalid': '請輸入有效的電子郵件',
    'validation.password.required': '密碼是必填的',
    'validation.password.mismatch': '密碼不匹配',
    'validation.name.required': '姓名為必填項',
    'validation.login.failed': '登錄失敗，請重試。',
    'success.login': '登錄成功',
    'success.login.description': '歡迎回來！',
    'success.register': '帳戶已建立',
    'success.register.description': '您的帳戶已成功建立。',
    'iamsmart.connecting': '連接到「智方便」',
    'iamsmart.description': '正在重定向到「智方便」身份驗證...',
    'legal.agreement': '使用我們的服務，即表示您同意我們的',
    'legal.terms': '服務條款',
    'legal.and': '和',
    'legal.privacy': '隱私政策',
    'footer.copyright': '© 2024 香港聊天。版權所有。',
    'terms.title': '服務條款',
    'privacy.title': '私隱政策',
    'privacy.content': `
    <div class="privacy-policy-content">
      <section class="policy-section">
        <h2>1.  收集的個人資料類別</h2>
        <p>我們會收集以下幾類個人資料：</p>
        <div class="data-table-container">
          <table class="data-collection-table">
            <thead>
              <tr>
                <th>資料類別</th>
                <th>具體內容</th>
                <th>收集方式/來源</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>身份信息</td>
                <td>姓名、電話號碼、電郵地址</td>
                <td>在用戶註冊時直接提供</td>
              </tr>
              <tr>
                <td>技術數據</td>
                <td>IP地址、瀏覽器類型、設備信息</td>
                <td>自動收集</td>
              </tr>
              <tr>
                <td>使用數據</td>
                <td>聊天記錄、使用模式、偏好設定</td>
                <td>在使用服務期間收集</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="policy-section">
        <h2>2.  使用個人資料的目的</h2>
        <div class="purpose-list">
          <div class="purpose-item">
            <h3>提供服務</h3>
            <p>為您提供聊天服務及相關功能</p>
          </div>
          <div class="purpose-item">
            <h3>客戶支援</h3>
            <p>回覆您的查詢並提供技術支援</p>
          </div>
          <div class="purpose-item">
            <h3>改進服務</h3>
            <p>分析使用模式以改進我們的服務</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>3.  個人資料的披露</h2>
        <p>我們只會在下列情況下披露您的個人資料：</p>
        <div class="disclosure-grid">
          <div class="disclosure-card">
            <h4>法律要求</h4>
            <p>在遵守法律義務或法庭命令時</p>
          </div>
          <div class="disclosure-card">
            <h4>服務供應商</h4>
            <p>與協助我們提供服務的第三方合作夥伴</p>
          </div>
          <div class="disclosure-card">
            <h4>業務轉讓</h4>
            <p>在發生合併、收購或資產出售時</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>4.  數據安全措施</h2>
        <div class="security-measures">
          <div class="measure-item">
            <span class="measure-icon">🔒</span>
            <div>
              <h4>加密傳輸</h4>
              <p>所有數據傳輸均使用SSL/TLS加密</p>
            </div>
          </div>
          <div class="measure-item">
            <span class="measure-icon">🛡️</span>
            <div>
              <h4>訪問控制</h4>
              <p>嚴格限制對個人資料的訪問權限</p>
            </div>
          </div>
          <div class="measure-item">
            <span class="measure-icon">🔄</span>
            <div>
              <h4>定期備份</h4>
              <p>定期數據備份以防止意外丟失</p>
            </div>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>5.  你的權利</h2>
        <p>根據適用的隱私法律，您擁有以下權利：</p>
        <div class="rights-container">
          <div class="right-item">
            <h4>訪問權</h4>
            <p>請求訪問我們持有的關於您的個人資料</p>
          </div>
          <div class="right-item">
            <h4>更正權</h4>
            <p>請求更正不準確或不完整的個人資料</p>
          </div>
          <div class="right-item">
            <h4>刪除權</h4>
            <p>在特定情況下請求刪除您的個人資料</p>
          </div>
          <div class="right-item">
            <h4>限制處理權</h4>
            <p>請求限制處理您的個人資料</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>6.  聯絡我們</h2>
        <div class="contact-info">
          <p>如果您對本隱私政策有任何疑問，請通過以下方式與我們聯繫：</p>
          <div class="contact-details">
            <p><strong>電郵：</strong>privacy@hkchat.com</p>
            <p><strong>地址：</strong>香港中環德輔道中99號</p>
            <p><strong>電話：</strong>+852 1234 5678</p>
          </div>
        </div>
      </section>
    </div>
    `
    ,
    'terms.content': `
    <div class="terms-content">
      <section class="terms-section">
        <h2>1. 條款接受</h2>
        <p>歡迎使用香港聊天服務。通過訪問或使用我們的服務，您同意接受這些服務條款的約束。</p>
      </section>
      <section class="terms-section">
        <h2>2. 服務說明</h2>
        <div class="service-description">
          <p>香港聊天是一個由人工智能驅動的聊天平台，提供以下服務：</p>
          <ul class="service-list">
            <li>智能對話功能</li>
            <li>多語言支持</li>
            <li>個性化聊天體驗</li>
            <li>24/7全天候服務</li>
          </ul>
        </div>
      </section>
      <section class="terms-section">
        <h2>3. 用戶責任</h2>
        <div class="responsibility-grid">
          <div class="responsibility-item">
            <h4>合理使用</h4>
            <p>您同意以合法和適當的方式使用我們的服務</p>
          </div>
          <div class="responsibility-item">
            <h4>帳戶安全</h4>
            <p>您有責任保護您的帳戶信息和密碼</p>
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
              <h4>騷擾或虐待</h4>
              <p>禁止發送騷擾、威脅或虐待內容</p>
            </div>
          </div>
          <div class="prohibition-item">
            <span class="prohibition-icon">🚫</span>
            <div>
              <h4>非法活動</h4>
              <p>禁止將服務用於任何非法活動</p>
            </div>
          </div>
          <div class="prohibition-item">
            <span class="prohibition-icon">🔒</span>
            <div>
              <h4>未經授權的訪問</h4>
              <p>禁止嘗試未經授權訪問系統或其他用戶數據</p>
            </div>
          </div>
        </div>
      </section>
      <section class="terms-section">
        <h2>5. 免責聲明</h2>
        <div class="disclaimer-box">
          <p>本服務按「現狀」提供。我們不保證服務的連續性、準確性或完整性。</p>
        </div>
      </section>
      <section class="terms-section">
        <h2>6. 條款修改</h2>
        <p>我們保留隨時修改這些條款的權利。修改後的條款將在網站上發布後生效。</p>
      </section>
    </div>
    `
  },
  'zh-CN': {
    'app.name': '香港聊天',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文',
    'language.en': 'English',
    'login.welcome': '欢迎回来',
    'login.subtitle': '登录到您的帐户',
    'login.email': '电子邮件',
    'login.email.placeholder': '输入你的电子邮件',
    'login.password': '密码',
    'login.password.placeholder': '输入你的密码',
    'login.button': '登录',
    'login.loading': '登录中...',
    'login.forgot.password': '忘记密码？',
    'login.iamsmart': '使用“智方便”登入',
    'login.or': '或者',
    'register.title': '创建帐户',
    'register.subtitle': '立即加入我们的社群',
    'register.name': '全名',
    'register.name.placeholder': '输入你的全名',
    'register.confirm.password': '确认密码',
    'register.confirm.password.placeholder': '确认你的密码',
    'register.button': '创建帐户',
    'register.loading': '创建帐户中...',
    'register.no.account': '没有帐户？',
    'register.link': '注册',
    'register.have.account': '已经有帐户？',
    'register.login.link': '登录',
    'validation.email.required': '电子邮件是必填的',
    'validation.email.invalid': '请输入有效的电子邮件',
    'validation.password.required': '密码是必填的',
    'validation.password.mismatch': '密码不匹配',
    'validation.name.required': '姓名为必填项',
    'validation.login.failed': '登录失败，请重试。',
    'success.login': '登录成功',
    'success.login.description': '欢迎回来！',
    'success.register': '帐户已建立',
    'success.register.description': '您的帐户已成功建立。',
    'iamsmart.connecting': '连接到“智方便”',
    'iamsmart.description': '正在重定向到“智方便”身份验证...',
    'legal.agreement': '使用我们的服务，即表示您同意我们的',
    'legal.terms': '服务条款',
    'legal.and': '和',
    'legal.privacy': '隐私政策',
    'footer.copyright': '© 2024 香港聊天。版权所有。',
    'terms.title': '服务条款',
    'privacy.title': '隐私政策',
    'privacy.content': `
    <div class="privacy-policy-content">
      <section class="policy-section">
        <h2>1. 收集的个人资料类别</h2>
        <p>我们会收集以下几类个人资料：</p>
        <div class="data-table-container">
          <table class="data-collection-table">
            <thead>
              <tr>
                <th>资料类别</th>
                <th>具体内容</th>
                <th>收集方式/来源</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>身份信息</td>
                <td>姓名、电话号码、电邮地址</td>
                <td>在用户注册时直接提供</td>
              </tr>
              <tr>
                <td>技术数据</td>
                <td>IP地址、浏览器类型、设备信息</td>
                <td>自动收集</td>
              </tr>
              <tr>
                <td>使用数据</td>
                <td>聊天记录、使用模式、偏好设定</td>
                <td>在使用服务期间收集</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="policy-section">
        <h2>2. 使用个人资料的目的</h2>
        <div class="purpose-list">
          <div class="purpose-item">
            <h3>提供服务</h3>
            <p>为您提供聊天服务及相关功能</p>
          </div>
          <div class="purpose-item">
            <h3>客户支援</h3>
            <p>回复您的查询并提供技术支援</p>
          </div>
          <div class="purpose-item">
            <h3>改进服务</h3>
            <p>分析使用模式以改进我们的服务</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>3. 个人资料的披露</h2>
        <p>我们只会在下列情况下披露您的个人资料：</p>
        <div class="disclosure-grid">
          <div class="disclosure-card">
            <h4>法律要求</h4>
            <p>在遵守法律义务或法庭命令时</p>
          </div>
          <div class="disclosure-card">
            <h4>服务供应商</h4>
            <p>与协助我们提供服务的第三方合作伙伴</p>
          </div>
          <div class="disclosure-card">
            <h4>业务转让</h4>
            <p>在发生合并、收购或资产出售时</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>4. 数据安全措施</h2>
        <div class="security-measures">
          <div class="measure-item">
            <span class="measure-icon">🔒</span>
            <div>
              <h4>加密传输</h4>
              <p>所有数据传输均使用SSL/TLS加密</p>
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
              <p>定期数据备份以防止意外丢失</p>
            </div>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>5. 你的权利</h2>
        <p>根据适用的隐私法律，您拥有以下权利：</p>
        <div class="rights-container">
          <div class="right-item">
            <h4>访问权</h4>
            <p>请求访问我们持有的关于您的个人资料</p>
          </div>
          <div class="right-item">
            <h4>更正权</h4>
            <p>请求更正不准确或不完整的个人资料</p>
          </div>
          <div class="right-item">
            <h4>删除权</h4>
            <p>在特定情况下请求删除您的个人资料</p>
          </div>
          <div class="right-item">
            <h4>限制处理权</h4>
            <p>请求限制处理您的个人资料</p>
          </div>
        </div>
      </section>
      <section class="policy-section">
        <h2>6. 联络我们</h2>
        <div class="contact-info">
          <p>如果您对本隐私政策有任何疑问，请通过以下方式与我们联系：</p>
          <div class="contact-details">
            <p><strong>电邮：</strong>privacy@hkchat.com</p>
            <p><strong>地址：</strong>香港中环德辅道中99号</p>
            <p><strong>电话：</strong>+852 1234 5678</p>
          </div>
        </div>
      </section>
    </div>
    `,
    'terms.content': `
    <div class="terms-content">
      <section class="terms-section">
        <h2>1. 条款接受</h2>
        <p>欢迎使用香港聊天服务。通过访问或使用我们的服务，您同意接受这些服务条款的约束。</p>
      </section>
      <section class="terms-section">
        <h2>2. 服务说明</h2>
        <div class="service-description">
          <p>香港聊天是一个由人工智能驱动的聊天平台，提供以下服务：</p>
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
            <h4>合理使用</h4>
            <p>您同意以合法和适当的方式使用我们的服务</p>
          </div>
          <div class="responsibility-item">
            <h4>帐户安全</h4>
            <p>您有责任保护您的帐户信息和密码</p>
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
              <h4>骚扰或虐待</h4>
              <p>禁止发送骚扰、威胁或虐待内容</p>
            </div>
          </div>
          <div class="prohibition-item">
            <span class="prohibition-icon">🚫</span>
            <div>
              <h4>非法活动</h4>
              <p>禁止将服务用于任何非法活动</p>
            </div>
          </div>
          <div class="prohibition-item">
            <span class="prohibition-icon">🔒</span>
            <div>
              <h4>未经授权的访问</h4>
              <p>禁止尝试未经授权访问系统或其他用户数据</p>
            </div>
          </div>
        </div>
      </section>
      <section class="terms-section">
        <h2>5. 免责声明</h2>
        <div class="disclaimer-box">
          <p>本服务按“现状”提供。我们不保证服务的连续性、准确性或完整性。</p>
        </div>
      </section>
      <section class="terms-section">
        <h2>6. 条款修改</h2>
        <p>我们保留随时修改这些条款的权利。修改后的条款将在网站上发布后生效。</p>
      </section>
    </div>
    `
  },
  en: {
    'app.name': 'Hong Kong Chat',
    'language.zh-hk': '繁體中文',
    'language.zh-cn': '简体中文',
    'language.en': 'English',
    'login.welcome': 'Welcome Back',
    'login.subtitle': 'Sign in to your account',
    'login.email': 'Email',
    'login.email.placeholder': 'Enter your email',
    'login.password': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.button': 'Sign In',
    'login.loading': 'Signing in...',
    'login.forgot.password': 'Forgot password?',
    'login.iamsmart': 'Sign in with iAM Smart',
    'login.or': 'or',
    'register.title': 'Create Account',
    'register.subtitle': 'Join our community today',
    'register.name': 'Full Name',
    'register.name.placeholder': 'Enter your full name',
    'register.confirm.password': 'Confirm Password',
    'register.confirm.password.placeholder': 'Confirm your password',
    'register.button': 'Create Account',
    'register.loading': 'Creating account...',
    'register.no.account': "Don't have an account?",
    'register.link': 'Sign up',
    'register.have.account': 'Already have an account?',
    'register.login.link': 'Sign in',
    'validation.email.required': 'Email is required',
    'validation.email.invalid': 'Please enter a valid email',
    'validation.password.required': 'Password is required',
    'validation.password.mismatch': 'Passwords do not match',
    'validation.name.required': 'Name is required',
    'validation.login.failed': 'Login failed. Please try again.',
    'success.login': 'Login Successful',
    'success.login.description': 'Welcome back!',
    'success.register': 'Account Created',
    'success.register.description': 'Your account has been successfully created.',
    'iamsmart.connecting': 'Connecting to iAM Smart',
    'iamsmart.description': 'Redirecting to iAM Smart authentication...',
    'legal.agreement': 'By using our service, you agree to our',
    'legal.terms': 'Terms of Service',
    'legal.and': 'and',
    'legal.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 Hong Kong Chat. All rights reserved.',
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
              <h4>Right to Access</h4>
              <p>Request access to the personal data we hold about you</p>
            </div>
            <div class="right-item">
              <h4>Right to Correction</h4>
              <p>Request correction of inaccurate or incomplete personal data</p>
            </div>
            <div class="right-item">
              <h4>Right to Deletion</h4>
              <p>Request deletion of your personal data under specific circumstances</p>
            </div>
            <div class="right-item">
              <h4>Right to Restrict Processing</h4>
              <p>Request restriction of processing of your personal data</p>
            </div>
          </div>
        </section>

        <section class="policy-section">
          <h2>6. Contact Us</h2>
          <div class="contact-info">
            <p>If you have any questions about this Privacy Policy, please contact us through:</p>
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
          <p>Welcome to Hong Kong Chat service. By accessing or using our service, you agree to be bound by these Terms of Service.</p>
        </section>

        <section class="terms-section">
          <h2>2. Service Description</h2>
          <div class="service-description">
            <p>Hong Kong Chat is an AI-powered chat platform that provides the following services:</p>
            <ul class="service-list">
              <li>Intelligent conversation functionality</li>
              <li>Multi-language support</li>
              <li>Personalized chat experience</li>
              <li>24/7 round-the-clock service</li>
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
