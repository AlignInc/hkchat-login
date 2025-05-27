import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh-HK' | 'zh-CN' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'zh-CN': {
    'app.name': '港话通',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    'login.welcome': '欢迎使用港话通',
    'login.subtitle': '连接香港，智慧对话',
    'login.email': '邮箱地址',
    'login.email.placeholder': '请输入您的邮箱地址',
    'login.password': '密码',
    'login.password.placeholder': '请输入您的密码',
    'login.forgot.password': '忘记密码？',
    'login.button': '登录',
    'login.loading': '登录中...',
    'login.iamsmart': '使用「智方便」登录',
    'login.or': '或',
    'register.title': '创建新账户',
    'register.subtitle': '加入港话通，开始您的未来之旅',
    'register.name': '姓名',
    'register.name.placeholder': '请输入您的全名',
    'register.confirm.password': '确认密码',
    'register.confirm.password.placeholder': '请再次输入密码',
    'register.button': '注册',
    'register.loading': '注册中...',
    'register.have.account': '已有账户？',
    'register.login.link': '立即登录',
    'register.no.account': '还没有账户？',
    'register.link': '立即注册',
    'validation.email.required': '请输入邮箱地址',
    'validation.email.invalid': '请输入有效的邮箱地址',
    'validation.password.required': '请输入密码',
    'validation.password.mismatch': '密码不一致',
    'validation.name.required': '请输入姓名',
    'validation.login.failed': '登录失败，请检查您的凭据',
    'success.login': '登录成功',
    'success.login.description': '欢迎回来！',
    'success.register': '注册成功',
    'success.register.description': '欢迎加入港话通！',
    'iamsmart.connecting': '正在连接「智方便」',
    'iamsmart.description': '正在重定向至政府「智方便」平台',
    'footer.copyright': '© 2025 香港生成式人工智能研发中心有限公司。保留所有权利。',
    'legal.agreement': '使用本服务即表示您同意我们的',
    'legal.terms': '服务条款',
    'legal.and': '和',
    'legal.privacy': '隐私政策',
    'terms.title': '服务条款',
    'terms.content': `
1. 服务协议

本服务条款（"条款"）适用于您对HKGAI平台（"平台"）的使用。通过访问或使用我们的服务，您同意受这些条款的约束。

2. 账户责任

a) 您有责任维护账户信息的准确性和安全性
b) 您必须立即通知我们任何未经授权的账户使用
c) 您对在您账户下发生的所有活动负责

3. 使用规则

a) 您同意仅将服务用于合法目的
b) 禁止上传恶意软件或有害内容
c) 禁止干扰或破坏服务的正常运行
d) 禁止侵犯他人的知识产权

4. 知识产权

a) 平台上的所有内容均受知识产权法保护
b) 您保留对您上传内容的所有权，但授予我们使用许可
c) 我们保留对平台技术和设计的所有权利

5. 隐私保护

我们承诺保护您的隐私。请查看我们的隐私政策以了解我们如何收集、使用和保护您的信息。

6. 服务变更

我们保留随时修改或终止服务的权利，恕不另行通知。我们将努力提前通知重大变更。

7. 责任限制

在法律允许的最大范围内，我们对因使用本服务而产生的任何间接、偶然或后果性损害不承担责任。

8. 争议解决

本条款受中华人民共和国香港特别行政区法律管辖。任何争议应通过仲裁解决。

9. 联系我们

如有任何问题，请通过以下方式联系我们：
- 邮箱：support@hkgai.com
- 地址：香港中环金融街1号

⸻

最后更新时间：2024年1月1日`,

    'privacy.title': '隐私政策',
    'privacy.content': `
1. 信息收集

我们收集以下类型的个人信息以提供更好的服务：

资料类别	具体内容	收集方式 / 来源
个人识别信息	姓名、电子邮箱地址、电话号码	用户注册时主动提供
技术信息	IP地址、浏览器类型、设备信息	自动收集
使用数据	登录时间、使用功能、操作记录	服务使用过程中自动记录

我们只收集为提供服务所必需的信息，不会收集敏感个人信息。

2. 信息使用

我们使用收集的信息用于：

a) 提供和维护我们的服务
b) 改善用户体验和服务质量
c) 发送重要通知和更新
d) 防范欺诈和安全威胁
e) 遵守法律法规要求

3. 信息共享

我们严格限制信息共享，仅在以下情况下可能共享您的信息：

類別	目的	保護措施
技术服务提供商	维护和改善服务	严格的数据处理协议
法律要求	遵守法律法规	仅提供法律要求的最小信息
业务转让	公司合并或收购	确保继续保护用户隐私

我们不会向第三方出售、交易或转让您的个人信息。

4. 信息安全

我们采用行业标准的安全措施保护您的信息：

a) 数据加密传输和存储
b) 访问控制和身份验证
c) 定期安全审计和更新
d) 员工隐私培训和保密协议

5. 数据保留

我们仅在必要期间保留您的个人信息：

a) 账户活跃期间持续保留
b) 账户删除后30天内完全清除
c) 法律要求保留的信息按法定期限保存

6. 您的权利

您对个人信息享有以下权利：

a) 查看和更新个人信息
b) 删除账户和个人数据
c) 限制信息处理
d) 数据可携性
e) 撤回同意

7. Cookie使用

我们使用Cookie来改善您的体验：

a) 必要Cookie：维持登录状态和基本功能
b) 分析Cookie：了解网站使用情况
c) 您可以通过浏览器设置管理Cookie偏好

8. 第三方链接

我们的服务可能包含第三方网站链接。我们不对这些网站的隐私做法负责，建议您查看其隐私政策。

9. 儿童隐私

我们的服务不面向16岁以下儿童。如果我们发现收集了儿童信息，将立即删除。

10. 政策更新

我们可能会更新此隐私政策。重大变更将通过邮件或网站通知告知您。

11. 联系我们

关于隐私问题，请联系：
- 隐私官邮箱：privacy@hkgai.com
- 地址：香港中环金融街1号

⸻

最后更新时间：2024年1月1日`
  },
  'zh-HK': {
    'app.name': '港话通',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    'login.welcome': '欢迎使用港话通',
    'login.subtitle': '连接香港，智慧对话',
    'login.email': '邮箱地址',
    'login.email.placeholder': '请输入您的邮箱地址',
    'login.password': '密码',
    'login.password.placeholder': '请输入您的密码',
    'login.forgot.password': '忘记密码？',
    'login.button': '登录',
    'login.loading': '登录中...',
    'login.iamsmart': '使用「智方便」登录',
    'login.or': '或',
    'register.title': '创建新账户',
    'register.subtitle': '加入港话通，开始您的未来之旅',
    'register.name': '姓名',
    'register.name.placeholder': '请输入您的全名',
    'register.confirm.password': '确认密码',
    'register.confirm.password.placeholder': '请再次输入密码',
    'register.button': '注册',
    'register.loading': '注册中...',
    'register.have.account': '已有账户？',
    'register.login.link': '立即登录',
    'register.no.account': '还没有账户？',
    'register.link': '立即注册',
    'validation.email.required': '请输入邮箱地址',
    'validation.email.invalid': '请输入有效的邮箱地址',
    'validation.password.required': '请输入密码',
    'validation.password.mismatch': '密码不一致',
    'validation.name.required': '请输入姓名',
    'validation.login.failed': '登录失败，请检查您的凭据',
    'success.login': '登录成功',
    'success.login.description': '欢迎回来！',
    'success.register': '注册成功',
    'success.register.description': '欢迎加入港话通！',
    'iamsmart.connecting': '正在连接「智方便」',
    'iamsmart.description': '正在重定向至政府「智方便」平台',
    'footer.copyright': '© 2025 香港生成式人工智能研发中心有限公司。保留所有权利。',
    'legal.agreement': '使用本服务即表示您同意我们的',
    'legal.terms': '服务条款',
    'legal.and': '和',
    'legal.privacy': '隐私政策',
    'terms.title': '服務條款',
    'terms.content': `
1. 服務協議

本服務條款（「條款」）適用於您對HKGAI平台（「平台」）的使用。通過訪問或使用我們的服務，您同意受這些條款的約束。

2. 賬戶責任

a) 您有責任維護賬戶信息的準確性和安全性
b) 您必須立即通知我們任何未經授權的賬戶使用
c) 您對在您賬戶下發生的所有活動負責

3. 使用規則

a) 您同意僅將服務用於合法目的
b) 禁止上傳惡意軟件或有害內容
c) 禁止干擾或破壞服務的正常運行
d) 禁止侵犯他人的知識產權

4. 知識產權

a) 平台上的所有內容均受知識產權法保護
b) 您保留對您上傳內容的所有權，但授予我們使用許可
c) 我們保留對平台技術和設計的所有權利

5. 隱私保護

我們承諾保護您的隱私。請查看我們的隱私政策以了解我們如何收集、使用和保護您的信息。

6. 服務變更

我們保留隨時修改或終止服務的權利，恕不另行通知。我們將努力提前通知重大變更。

7. 責任限制

在法律允許的最大範圍內，我們對因使用本服務而產生的任何間接、偶然或後果性損害不承擔責任。

8. 爭議解決

本條款受中華人民共和國香港特別行政區法律管轄。任何爭議應通過仲裁解決。

9. 聯絡我們

如有任何問題，請通過以下方式聯絡我們：
- 郵箱：support@hkgai.com
- 地址：香港中環金融街1號

⸻

最後更新時間：2024年1月1日`,

    'privacy.title': '隱私政策',
    'privacy.content': `
1. 信息收集

我們收集以下類型的個人信息以提供更好的服務：

資料類別	具體內容	收集方式 / 來源
個人識別信息	姓名、電子郵箱地址、電話號碼	用戶註冊時主動提供
技術信息	IP地址、瀏覽器類型、設備信息	自動收集
使用數據	登錄時間、使用功能、操作記錄	服務使用過程中自動記錄

我們只收集為提供服務所必需的信息，不會收集敏感個人信息。

2. 信息使用

我們使用收集的信息用於：

a) 提供和維護我們的服務
b) 改善用戶體驗和服務質量
c) 發送重要通知和更新
d) 防範欺詐和安全威脅
e) 遵守法律法規要求

3. 信息共享

我們嚴格限制信息共享，僅在以下情況下可能共享您的信息：

類別	目的	保護措施
技術服務提供商	維護和改善服務	嚴格的數據處理協議
法律要求	遵守法律法規	僅提供法律要求的最小信息
業務轉讓	公司合併或收購	確保繼續保護用戶隱私

我們不會向第三方出售、交易或轉讓您的個人信息。

4. 信息安全

我們採用行業標準的安全措施保護您的信息：

a) 數據加密傳輸和存儲
b) 訪問控制和身份驗證
c) 定期安全審計和更新
d) 員工隱私培訓和保密協議

5. 數據保留

我們僅在必要期間保留您的個人信息：

a) 賬戶活躍期間持續保留
b) 賬戶刪除後30天內完全清除
c) 法律要求保留的信息按法定期限保存

6. 您的權利

您對個人信息享有以下權利：

a) 查看和更新個人信息
b) 刪除賬戶和個人數據
c) 限制信息處理
d) 數據可攜性
e) 撤回同意

7. Cookie使用

我們使用Cookie來改善您的體驗：

a) 必要Cookie：維持登錄狀態和基本功能
b) 分析Cookie：了解網站使用情況
c) 您可以通過瀏覽器設置管理Cookie偏好

8. 第三方鏈接

我們的服務可能包含第三方網站鏈接。我們不對這些網站的隱私做法負責，建議您查看其隱私政策。

9. 兒童隱私

我們的服務不面向16歲以下兒童。如果我們發現收集了兒童信息，將立即刪除。

10. 政策更新

我們可能會更新此隱私政策。重大變更將通過郵件或網站通知告知您。

11. 聯絡我們

關於隱私問題，請聯絡：
- 隐私官郵箱：privacy@hkgai.com
- 地址：香港中環金融街1號

⸻

最後更新時間：2024年1月1日`
  },
  'en': {
    'app.name': 'HKChat',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    'login.welcome': 'Welcome to HKChat',
    'login.subtitle': 'Connecting Hong Kong, Smart Conversations',
    'login.email': 'Email Address',
    'login.email.placeholder': 'Enter your email address',
    'login.password': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.forgot.password': 'Forgot password?',
    'login.button': 'Sign In',
    'login.loading': 'Signing in...',
    'login.iamsmart': 'Sign in with iAM Smart',
    'login.or': 'or',
    'register.title': 'Create New Account',
    'register.subtitle': 'Join HKChat and start your journey of future',
    'register.name': 'Full Name',
    'register.name.placeholder': 'Enter your full name',
    'register.confirm.password': 'Confirm Password',
    'register.confirm.password.placeholder': 'Enter password again',
    'register.button': 'Register',
    'register.loading': 'Registering...',
    'register.have.account': 'Already have an account?',
    'register.login.link': 'Sign in now',
    'register.no.account': "Don't have an account?",
    'register.link': 'Register now',
    'validation.email.required': 'Please enter your email address',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.password.required': 'Please enter your password',
    'validation.password.mismatch': 'Passwords do not match',
    'validation.name.required': 'Please enter your name',
    'validation.login.failed': 'Login failed, please check your credentials',
    'success.login': 'Login Successful',
    'success.login.description': 'Welcome back!',
    'success.register': 'Registration Successful',
    'success.register.description': 'Welcome to HKChat!',
    'iamsmart.connecting': 'Connecting to iAM Smart',
    'iamsmart.description': 'Redirecting to government iAM Smart platform',
    'footer.copyright': '© 2025 Hong Kong Generative AI Research and Development Centre Limited. All rights reserved.',
    'legal.agreement': 'By using this service, you agree to our',
    'legal.terms': 'Terms of Service',
    'legal.and': 'and',
    'legal.privacy': 'Privacy Policy',
    'terms.title': 'HKChat Terms of Service',
    'terms.content': `
HKChat Terms of Service
Last Updated: May 9, 2025

Please read these terms and conditions carefully as they apply to your use of the HKChat chatbot service. The HKChat chatbot service is provided and made available to you by Hong Kong Generative AI Research and Development Centre Limited, a company incorporated in Hong Kong with business registration number 75807504 and registered address at Room 7028, 7/F, Lee Shau Kee Building, Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong ("HKGAI", "we" or "our"). HKChat is a generative artificial intelligence chatbot service that may be provided through websites, mobile applications and/or software applications ("the Service"). By downloading, accessing and/or using the Service and any of its websites, applications, pages, features, information and/or content, you agree to be bound by the terms of this Agreement. If you do not understand or agree to the terms of this Agreement, you should not use the Service and should uninstall any mobile applications and/or software applications related to the Service. HKGAI has the right to make updates or changes to the Service and these Terms of Use ("Terms of Use" or "this Agreement") from time to time that are binding on you, and you should review these terms from time to time to be aware of any updates. If you are under 18 years of age (i.e., a minor), you must have a legal guardian (such as a parent) accept this Agreement as a guarantor. If you accept this Agreement as a guarantor, you agree to guarantee that the relevant minor will comply with the terms of this Agreement, and we may enforce this Agreement against you in the event of a breach by the relevant minor.

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. Registration</h3>

You may need to provide certain personal information and/or register a user account with us to access the Service, including but not limited to your "iAM Smart" login details, phone number and/or one-time passwords sent to you. If you are required to do so: (a) You must provide us with accurate, complete, legal and up-to-date personal information and registration information as required by us; (b) You should keep your registration details secure and confidential, including any login details and/or one-time passwords that provide you with access to the Service. You agree that we need not be liable or bear any legal responsibility for any unauthorized use of your user account by any other person, including any unauthorized access to the Service through your user account. (c) You authorize us to assume that any person using the Service with your login details and/or one-time password is you. You agree to be responsible for any and all relevant activities that access or use the Service through your login details, and agree not to transfer, lend or otherwise make your user account available for use by any other person. You also agree to maintain and promptly update any information you provide to us (including but not limited to any personal information) to keep it current, complete, accurate and legal. Personal information you provide to us and related to the Service, including personal information provided to create your user account, will be processed in accordance with the HKChat Privacy Policy (available at [HKChat Privacy Policy]) ("Privacy Policy").

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. Your Use of the Service</h3>

You acknowledge that we may add, delete, remove, modify, disable, suspend, terminate or restrict certain or all parts of the Service at our sole discretion and without notice to you, and you acknowledge that: (i) you may no longer be able to use the Service to the same extent as before such events occurred, or may not be able to use the Service at all, and (ii) in such circumstances, HKGAI will not be legally liable to you or any third party. You agree to use the Service solely for your personal and non-commercial purposes and take full responsibility for all input and/or output you submit, enter and/or transmit through the Service. As between you and HKGAI, any and all rights (including but not limited to intellectual property rights) in the Service or any part thereof are and shall always remain the exclusive property of HKGAI. As a condition of your use of the Service or any part thereof, you agree that you will not: (a) use the Service for any illegal, unauthorized or prohibited purpose under any applicable law (whether criminal or civil); (b) transmit, enter, upload, create, generate or promote any content (including but not limited to input or output) or engage in any activities that are harmful to you or others, including any content or activities that may be considered harassment, bullying, abuse, defamation, discrimination, offensive, threatening, intimidating, indecent, obscene, violent or vulgar; (c) intrude, break into, access, use or attempt to intrude, break into, access or use any other part of our servers and/or any data areas not authorized by us, and/or attempt to bypass any filtering or security measures, or in any way interfere with, interrupt, destroy or limit the normal operation or functionality of the Service...

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. Input and Output Content</h3>

You may provide user input or instructions to the Service ("Input Content") and may receive output content generated by the Service based on your Input Content ("Output Content"). You are fully responsible for all Input Content you provide, transmit or upload to the Service, and any Output Content created or generated therefrom. You should ensure that all such Input Content and Output Content comply with these Terms of Use and any applicable laws...

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. Intellectual Property</h3>

Without prejudice to Section 3 above regarding ownership of Input Content and Output Content, any other materials and/or works used and/or provided as part of the Service and/or in connection with the Service (including but not limited to text, images, layout design, user interface, graphics, logos, icons, brands, data compilations, source code, object code, software and other proprietary materials contained in and/or related to the Service, and their arrangement or compilation (collectively "the Content")) are owned by us or licensed to us for limited use...

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. Monitoring</h3>

We do not actively monitor Input Content or Output Content submitted, entered, transmitted or sent by users to, on or through the Service, nor do we guarantee the accuracy, completeness, legality or quality of such content. However, we will consider complaints that Output Content provided on or through the Service is alleged to be infringing, inappropriate or illegal...`,
    'privacy.title': 'HKChat Privacy Policy',
    'privacy.content': `HKChat Privacy Policy
Last Updated: May 9, 2025

This document explains how Hong Kong Generative AI Research and Development Centre Limited (hereinafter referred to as "HKGAI", "we" or "the Company") collects, uses, stores, discloses and protects personal data relating to you (hereinafter referred to as "you"), and your rights under the Personal Data (Privacy) Ordinance (Cap. 486, Laws of Hong Kong, hereinafter referred to as "PDPO") and other applicable laws. This policy forms an integral part of the "HKChat Terms of Service"; if you intend to use or continue to use this Service, please read and fully understand this policy in detail. If you do not agree to any terms of this policy, please immediately stop using and uninstall the relevant applications.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. Categories of Data We Collect</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Category</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Specific Content</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Collection Method / Source</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Identity Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Name, ID document number (if applicable), iAM Smart login identifier, username, age, guardian data (if minor)</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Actively provided by you during registration, identity verification or service use</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Contact Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Email, phone number, mailing address</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Actively provided by you</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Device & Technical Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">IP address, device model, operating system, browser type, device language, device identifier, crash logs</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Automatically collected through Cookies, SDK or server logs</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Service Usage Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Chat commands (input content), model responses (output content), operation records, login timestamps</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Automatically generated during your use of the service</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Transaction & Payment Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Last four digits of credit card, payment reference number, settlement details (if applicable)</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Collected by third-party payment service providers and transmitted</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Location Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Approximate geographical location based on IP or device GPS</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Obtained automatically when you allow location services or in network requests</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Marketing Preference Data</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Subscription status, promotional activity interaction records</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Actively chosen by you or generated during service use</td>
</tr>
</tbody>
</table>
</div>

<strong class="font-semibold text-gray-900">Skeptical Reminder</strong>: We only collect data necessary for actual operations. If any information seems redundant, please contact us immediately to raise questions.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. Data Collection and Usage Purposes</h3>

1. Provide core functions: Identity verification, generate chat responses, push notifications.
2. Operations and security: Fault diagnosis, error tracking, abuse detection, backup and recovery.
3. Product improvement: Machine learning model training, feature testing, statistical analysis. We may conduct anonymized sample analysis of input and output content.
4. Regulatory compliance: Comply with PDPO, anti-money laundering (AML), counter-terrorist financing (CFT) and other applicable laws.
5. Marketing and promotion (optional): Send product updates and event information via email or app notifications; you can unsubscribe at any time.
6. Corporate transactions: For due diligence and transfer operations in case of mergers, reorganizations or asset sales.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. Data Sharing Recipients</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Category</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Protection Measures</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Service Providers / Processors (cloud hosting, CDN, payment, analytics)</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Assist in providing and operating services</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Sign data processing agreements (DPA) with them, requiring compliance with confidentiality and security standards</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Affiliated Companies</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Internal compliance, centralized infrastructure</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Limited to necessary functions only; implement principle of least privilege</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Judicial Authorities, Regulatory Agencies</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Legal requirements, litigation procedures, law enforcement requests</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Cooperate in compliance with legal procedures and minimization disclosure principles</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">Potential Acquirers</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Corporate transactions</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">Conduct anonymized or controlled access after signing confidentiality agreements</td>
</tr>
</tbody>
</table>
</div>

<strong class="font-semibold text-gray-900">Truth be told</strong>: We will not sell your personal data, nor allow third parties to use it for independent marketing unless explicit consent is obtained in advance.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. Cross-border Data Transfer</h3>

To achieve global content distribution and flexible computing power, this Service may transfer data to regions outside Hong Kong (including but not limited to Singapore and the United States). We will implement safeguards equivalent to Hong Kong standards in accordance with Section 33 of the PDPO, such as EU Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs).

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. Data Retention Period</h3>

• Account data: Retained for at least 7 years from the last use of the service to comply with regulatory and statistical needs.
• Chat records: Stored with hash indexing for no more than 24 months for model security monitoring and accountability; automatically deleted or anonymized upon expiration.
• Backups: Retained for a maximum of 180 days in encrypted storage before rotational deletion.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. Data Security</h3>

• Encryption: TLS 1.3 transmission encryption; static data using AES-256 or equivalent encryption.
• Access control: Zero-trust architecture, role-based authorization (RBAC), multi-factor authentication (MFA).
• Audit: Regular penetration testing, SOC 2 and ISO 27001 standards.
• However, no matter how rigorous the measures, network transmission is not absolutely secure; if security incidents are discovered, we will notify affected users and regulatory agencies within a reasonable time.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. Your Rights</h3>

Under the PDPO and (if applicable) GDPR and other laws, you have the right to:

1. Access: Request copies of personal data we hold about you.
2. Correction: Request correction of inaccurate or outdated data.
3. Deletion / Anonymization: Request deletion or cessation of processing subject to legal retention requirements.
4. Restriction / Objection to processing: Object to direct marketing or specific purposes.
5. Data portability: Request transfer in structured, commonly used and machine-readable format.
6. Withdraw consent: For consent-based processing, consent can be withdrawn at any time; withdrawal does not affect the lawfulness of processing based on consent before withdrawal.

Requests can be made via service@hkgai.org, and we will respond within 40 days. If you believe we have not handled your request properly, you can complain to the Privacy Commissioner for Personal Data (PCPD) in Hong Kong.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. Children's Privacy</h3>

This Service is only for persons aged 18 or above. If you are under 18, you must have the consent of a legal guardian and register as a guardian. If we learn that we have collected any minor's data without parental consent, we will delete it immediately.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies and Similar Technologies</h3>

We use Cookies, SDKs, pixel tags and local storage to:

• Record login status, preferences and language;
• Conduct traffic analysis and performance monitoring;
• Provide personalized content and selective marketing.

You can refuse some or all Cookies in your browser or device settings, but this may affect the service experience.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. Policy Updates</h3>

We may revise this policy from time to time due to legal, technical or business needs. Material changes will be announced in the app or sent to registered emails before taking effect. If you continue to use the service after the changes take effect, you are deemed to accept the updated policy.

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. Contact Information</h3>

• Email: service@hkgai.org
• Mailing address: Room 7028
