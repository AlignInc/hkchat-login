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
    'app.name': '港話通',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    'login.welcome': '歡迎使用港話通',
    'login.subtitle': '連結香港，智慧對話',
    'login.email': '電郵地址',
    'login.email.placeholder': '請輸入您的電郵地址',
    'login.password': '密碼',
    'login.password.placeholder': '請輸入您的密碼',
    'login.forgot.password': '忘記密碼？',
    'login.button': '登入',
    'login.loading': '登入中...',
    'login.iamsmart': '使用「智方便」登入',
    'login.or': '或',
    'register.title': '建立新帳戶',
    'register.subtitle': '加入港話通，開始您的未來之旅',
    'register.name': '姓名',
    'register.name.placeholder': '請輸入您的全名',
    'register.confirm.password': '確認密碼',
    'register.confirm.password.placeholder': '請再次輸入密碼',
    'register.button': '註冊',
    'register.loading': '註冊中...',
    'register.have.account': '已有帳戶？',
    'register.login.link': '立即登入',
    'register.no.account': '還沒有帳戶？',
    'register.link': '立即註冊',
    'validation.email.required': '請輸入電郵地址',
    'validation.email.invalid': '請輸入有效的電郵地址',
    'validation.password.required': '請輸入密碼',
    'validation.password.mismatch': '密碼不一致',
    'validation.name.required': '請輸入姓名',
    'validation.login.failed': '登入失敗，請檢查您的憑據',
    'success.login': '登入成功',
    'success.login.description': '歡迎回來！',
    'success.register': '註冊成功',
    'success.register.description': '歡迎加入港話通！',
    'iamsmart.connecting': '正在連接「智方便」',
    'iamsmart.description': '正在重定向至政府「智方便」平台',
    'footer.copyright': '© 2025 香港生成式人工智能研發中心有限公司。保留所有權利。',
    'legal': {
      'agreement': '使用本服務即表示您同意我們的',
      'terms': '服務條款',
      'and': '和',
      'privacy': '隱私政策',
      'terms.title': '服務條款',
      'privacy.title': '隱私政策',
      'terms.content': `
# 服務條款

**生效日期：** 2024年1月1日

## 1. 接受條款
歡迎使用 HKChat 服務。通過訪問或使用我們的服務，您同意受這些服務條款的約束。

## 2. 服務說明
HKChat 是一個智能聊天應用程序，為用戶提供便捷的通訊和資訊服務。

## 3. 用戶責任
### 3.1 帳戶安全
- 您有責任維護您的帳戶安全
- 請勿與他人分享您的登錄憑據
- 如發現帳戶異常活動，請立即通知我們

### 3.2 使用規範
- 不得發布非法、有害或冒犯性內容
- 不得干擾或破壞服務的正常運作
- 遵守適用的法律法規

## 4. 知識產權
服務中的所有內容和功能均受知識產權法保護。未經授權，不得複製、修改或分發。

## 5. 隱私保護
我們重視您的隱私。請查閱我們的隱私政策以了解數據處理方式。

## 6. 服務變更
我們保留隨時修改或終止服務的權利，並會提前通知用戶重大變更。

## 7. 免責聲明
服務按「現狀」提供，我們不提供任何明示或暗示的保證。

## 8. 責任限制
在法律允許的最大範圍內，我們不對任何間接、偶然或特殊損害承擔責任。

## 9. 爭議解決
任何爭議將根據香港法律解決，並提交香港法院管轄。

## 10. 聯繫我們
如有任何問題，請通過以下方式聯繫我們：
- 電子郵件：support@hkchat.ai
- 地址：香港中環金融街1號

---

© 2024 HKChat. 保留所有權利。
      `,
      'privacy.content': `
# 隱私政策

**生效日期：** 2024年1月1日  
**最後更新：** 2024年1月1日

## 1. 概述
HKChat（「我們」、「本公司」）重視用戶隱私，致力於保護您的個人資料。本隱私政策說明我們如何收集、使用和保護您的信息。

## 2. 信息收集
### 2.1 您主動提供的信息
- 註冊信息（姓名、電子郵件地址）
- 個人資料設置
- 聊天內容和通訊記錄

### 2.2 自動收集的信息
- 設備信息（IP地址、瀏覽器類型）
- 使用數據（訪問時間、使用功能）
- Cookie和類似技術

## 3. 信息使用
我們使用收集的信息用於：
- 提供和改善服務
- 處理用戶請求和支持
- 發送重要通知
- 進行安全監控和詐欺防範
- 符合法律要求

## 4. 信息分享
### 4.1 我們不會出售個人信息
我們承諾不會向第三方出售您的個人資料。

### 4.2 有限分享情況
僅在以下情況下分享信息：
- 獲得您的明確同意
- 法律要求或法律程序
- 保護用戶和公眾安全
- 業務轉讓（如合併或收購）

## 5. 數據安全
### 5.1 安全措施
- 加密傳輸和存儲
- 訪問控制和身份驗證
- 定期安全審核
- 員工隱私培訓

### 5.2 數據保留
- 帳戶信息：帳戶存續期間
- 聊天記錄：根據用戶設置
- 系統日誌：最多12個月

## 6. 您的權利
根據適用法律，您享有以下權利：
- 訪問您的個人資料
- 更正不準確信息
- 刪除個人資料
- 限制處理
- 數據可攜性
- 反對處理

## 7. Cookie政策
我們使用Cookie改善用戶體驗：
- 必要Cookie：確保網站正常運作
- 功能Cookie：記住用戶偏好
- 分析Cookie：了解使用情況

您可以通過瀏覽器設置管理Cookie偏好。

## 8. 兒童隱私
我們的服務不針對13歲以下兒童。如發現收集了兒童信息，我們會立即刪除。

## 9. 跨境傳輸
您的數據可能被傳輸到其他司法管轄區。我們確保採取適當保護措施。

## 10. 政策更新
我們可能會更新本隱私政策。重大變更將通過電子郵件或網站通知告知用戶。

## 11. 聯繫我們
關於隱私問題，請聯繫：
- **隱私專員：** privacy@hkchat.ai
- **地址：** 香港中環金融街1號
- **電話：** +852 1234 5678

---

© 2024 HKChat. 保留所有權利。
      `
    }
  },
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
    'legal': {
      'agreement': '使用本服务即表示您同意我们的',
      'terms': '服务条款',
      'and': '和',
      'privacy': '隐私政策',
      'terms.title': '港话通 (HKChat) 服务条款',
      'privacy.title': '港话通 (HKChat) 隐私政策',
      'terms.content': `港话通 (HKChat) 服务条款
最后更新：[09/05/2025] 

请仔细阅读以下条款及细则，因其适用于阁下对港话通 (HKChat) 聊天机器人服务的使用。 港话通 (HKChat) 聊天机器人服务是由香港生成式人工智能研发中心有限公司提供及开放阁下使用，本公司为一家于香港成立的公司，唯一业务识别码为75807504，注册地址为香港九龙清水湾香港科技大学李兆基大楼7楼7028室（"HKGAI"、"我们"或"我们的"）。 港话通 (HKChat) 为一个可能通过网站、流动应用程式及/或软件应用程式提供的生成式人工智能聊天机器人服务（"本服务"）。通过下载、接达及/或使用本服务及其任何网站、应用程式、页面、功能、资讯及/或内容，即表示阁下同意受本协议的条款约束。如果阁下不明白或不同意本协议的条款，阁下不应使用本服务并应卸载与本服务相关的任何流动应用程式及/或软件应用程式。HKGAI有权不时对本服务及这些使用条款（"《使用条款》"或"本协议"）作出对阁下具有约束力的更新或变更，阁下应不时查看这些条款以获知任何更新。 如果阁下未满18岁（即未成年人），阁下必须由法定监护人（如家长）作为担保人接受本协议。如果阁下是以担保人身份接受本协议，则阁下同意担保相关未成年人会遵守本协议的条款，且我们可在相关未成年人违约时对阁下执行本协议。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 注册</h3>

阁下可能需要提供某些个人资料及/或跟我们注册使用者帐户，才能接达本服务，包括但不限于阁下的"智方便"登入详情、电话号码及/或向阁下发送的一次性密码。如果阁下被要求这样做：- (a)	阁下必须按照我们的要求向我们提供准确、完整、合法及最新的个人资料及注册资讯； (b)	阁下应保持阁下的注册详情安全及保密，包括为阁下提供接达本服务的任何登入详情及/或一次性密码。阁下同意我们无需就任何其他人对阁下使用者帐户的任何未经授权使用，包括任何透过阁下使用者帐户未经授权地接达本服务，负上任何责任或承担任何法律责任。 (c)	阁下授权我们假设以阁下的登入详情及/或一次性密码使用本服务的任何人士为阁下。阁下同意对通过其登入详情接达或使用本服务的任何及所有相关活动负责，并同意不转移、借出或以其他方式将其使用者帐户提供给任何其他人使用。 阁下亦同意维护并尽快更新阁下提供给我们的任何资料（包括但不限于任何个人资料），使其保持最新、完整、准确及合法。阁下向我们所提供且与本服务相关的个人资料，包括为创建其使用者帐户而提供的个人资料，将根据港话通 (HKChat)私隐政策（可在[港话通 (HKChat) 私隐政策]浏览）("私隐政策")进行处理。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 阁下对本服务的使用</h3>

阁下确认我们可以在我们唯一的酌情权及不通知阁下的情况下增加、删除、移除、修改、停用、暂停、终止或限制本服务的某些或所有部分，并且阁下确认：（i）阁下可能无法再像该等事件发生之前以相同的范围使用本服务，或完全无法使用本服务，及（ii）在此情况下，HKGAI不会对阁下或任何第三方负上任何法律责任。 阁下同意仅为其个人及非商业目的使用本服务，并对阁下通过本服务提交、输入及/或传输的所有输入内容及/或输出内容承担全部责任。在阁下及HKGAI之间，本服务或其任何部分的任何及所有权利（包括但不限于知识产权）均为并应始终为HKGAI的专属财产。 作为阁下使用本服务或其任何部分的条件，阁下同意不会：- (a)	将本服务用于任何非法、未经授权或被任何适用法律（无论是刑事或民事）禁止的目的； (b)	传输、输入、上传、创建、生成或推广任何内容（包括但不限于输入内容或输出内容）或参与任何对阁下或他人有害的活动，包括可能被视为骚扰、欺凌、辱骂、诽谤、歧视、使人反感、威胁、恐吓、不雅、淫亵、暴力或粗俗的任何内容或活动； (c)	侵入、闯入、接达、使用或试图侵入、闯入、接达或使用我们伺服器的任何其他部分及/或阁下未获我们授权的任何资料区域，及/或试图绕过任何过滤或安全措施，或以任何方式干扰、中断、破坏或限制本服务的正常运作或功能； (d)	干扰或扰乱与本服务相连的网路，或违反该等网路的规例、政策或程序； (e)	传输、输入、上传、创建、生成或推广任何含有病毒、木马程式、蠕虫、定时炸弹、消磁或任何其他旨在中断、破坏或限制任何与本服务相关的电脑软件或硬件或电讯设备功能的侵害性或破坏力的例行程式的内容（包括但不限于输入内容或输出内容）； (f)	试图重新分发、销售、修改、改编、翻译、逆向工程、反编译、拆解本服务的任何部分，包括但不限于试图查阅与本服务相关的任何应用程式或软件的源代码、算法、模型及/或基础组件； (g)	试图透过密码破解或任何其他方式未经授权接达与本服务相关的任何使用者帐户、登入详情或密码（包括一次性密码）、伺服器、电脑系统或网路，或使用或启动任何自动化系统（例如"机器人"或"网路蜘蛛"）来接达本服务或任何与本服务连接的网路、伺服器或电脑系统； (h)	当阁下已注册使用者帐户时，直接或间接允许他人使用阁下就本服务的登入详情及/或密码； (i)	不诚实地、欺骗性地或恶意地注册多于一个或多个使用者帐户； (j)	未经我们事先书面准许，以任何方式复制、拍照或截图、传达、传输、翻制、框制或分发本服务的任何元件，或就此创作衍生作品； (k)	传输、输入、上传、创建、生成或推广任何受知识产权法律、商业机密、保密权、私隐权或公开权或任何其他适用法律保护的内容（包括但不限于输入内容或输出内容），除非阁下拥有或控制相关权利，或已获得所有必要的同意； (l)	干扰其他使用者的使用及/或享用本服务；及/或 (m)	将本服务中的任何内容或资料储存在伺服器或任何其他储存装置上，或透过系统地下载及/或储存本服务中的任何内容或资料来创建任何资料库。 我们保留权利但没有责任在不通知阁下的情况下不时接达阁下的使用者帐户及/或监控阁下对本服务的接达及使用，以确定阁下是否遵守任何适用法律、规例以及条款及细则，包括但不限于本《使用条款》。我们保留终止阁下使用本服务的权利，无论是因阁下违反本协议或我们认为阁下有任何违反本协议的嫌疑（包括但不限于违反任何被禁止用途），或基于我们认为适当的任何其他理由。 除了根据本《使用条款》使用本服务的有限、非专用、个人、不可转让、不可再授权及可撤销的许可外，阁下绝对不会获得本服务中的或其权利或许可。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 输入及输出内容</h3>

阁下可能向本服务提供使用者输入或指令（"输入内容"）及可能收到由本服务根据阁下的输入内容而生成的输出内容（"输出内容"）。阁下对其向本服务提供、传输或上传的所有输入内容，以及由此创建或生成的任何输出内容，承担全部责任。阁下应确保所有该等输入内容及输出内容遵守本《使用条款》以及任何适用法律。通过提交输入内容，阁下声明及保证阁下拥有所有必要的权利、许可及准许，以根据本《使用条款》提供及使用该输入内容，且阁下对本服务的使用，包括但不限于输入内容的提交或上传，及/或对任何输出内容的创建、生成及使用，不会侵犯任何第三方的权利及/或违反本《使用条款》以及任何适用法律。 在不抵触适用法律及本《使用条款》的情况下，在阁下与HKGAI之间：（a）阁下保留阁下可能于其输入内容拥有或持有的所有权利、所有权及权益；及（b）HKGAI并不主张拥有输出内容的拥有权，并在此向阁下转让HKGAI可能于输出内容拥有的任何权利、所有权及权益。然而，阁下确认由于输出内容是通过人工智能生成的，因本服务的性质，输出内容可能并非独特且可能与本服务的其他使用者收到的输出内容相同或相似。 阁下同意授予我们一项全球性、非专属、无条件、免费、可转让及永久的权利及许可，以使用、分析、传达及/或传输阁下的输入内容及/或输出内容，作提供、维持、开发及改进我们的本服务、遵守适用法律及/或执行我们的《使用条款》之用，为此我们无需提及阁下或向阁下付款或承担任何责任。在法律允许的最大范围内，阁下同意放弃阁下可能于输入内容及输出内容拥有的或涉及输入内容及输出内容的任何精神权利。如果阁下不希望其输入内容或输出内容被用于任何上述目的，阁下必须立即停止使用本服务。 本服务由人工智能驱动，并基于机器学习及大型语言模型，其本质上具有概率性。因此，输出内容有时可能包含事实上的不准确、遗漏、错误，或可能是不完整、不准确、过时或被误解的。阁下确认输出内容并不代表HKGAI的观点。阁下不应将任何输出内容视为权威或可靠的真相来源、事实资讯或专业建议。阁下对评估任何输出内容的准确性、适用性、适合性及合法性负上全部责任，包括在倚赖及使用输出内容之前进行人为审核。阁下不得将任何输出内容用作任何作为或不作为的基础，例如可能对个人产生法律或其他影响的任何决定。阁下应对基于任何输出内容的任何作为、不作为及/或决定承担全部责任，包括但不限于因输出内容的真实性、准确性、可靠性、适合性及/或保密性引起的任何后果。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 知识产权</h3>

在不抵触以上关于输入内容及输出内容的拥有权的第3条的情况下，任何其他作为本服务一部分及/或与本服务相关而被使用及/或提供的材料及/或作品（包括但不限于文字、图像、版面设计、用户界面、图形、标志、图标、品牌、数据汇编、源代码、目标代码、软件及本服务中所包含及/或与本服务相关的其他专有材料，以及其安排或汇编（统称"该内容"））归我们所有，或已授权我们作有限使用。该内容受版权、商标、专利、设计、商业秘密及/或其他所有权及法律的保护。未经我们事先书面同意，阁下对该内容不享有任何权利，并不得自己及促使、协助或便利任何第三方在任何媒体上复制、下载、翻制、修改、发布、传输、上传、展示、重新分发、储存、传达、商业利用、参与转让或销售、创作衍生作品，或以任何方式散布或利用任何该内容，或以其他方式在使用本服务或该内容之全部或部分时侵犯任何人的知识产权。阁下同意不会以本《使用条款》下明确允许以外的任何其他方式使用该内容。 阁下进一步同意，在不抵触以上关于我们对输入内容及输出内容之使用的第3条的情况下，我们可以自由使用、披露、采纳及修改阁下向我们提供的且与本服务相关或在本服务上或通过本服务提供的任何其他想法、概念、技术诀窍、提案、建议、评论及其他通讯及资料（"反馈"），就此我们无需提及阁下、向阁下付款或对阁下承担任何责任。阁下特此放弃并同意放弃所有及任何权利及索赔，包括但不限于与我们使用、披露、采纳及/或修改阁下的任何或全部反馈有关的任何代价、费用、版税、收费及/或其他款项。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 监控</h3>

我们不会主动监控使用者向本服务、于本服务或通过本服务提交、输入、传输或发送的输入内容或输出内容，也不会保证该内容的准确性、完整性、合法性或质量。可是，我们将考虑有关本服务上或通过本服务提供的输出内容被指称为侵权或不当或非法之投诉。投诉人有责任提交所有相关资料以证实其投诉，并向我们提供我们可能要求的所有资料以支持其投诉。在收到所有相关支持证据后，我们将处理并调查该投诉，并将真诚地采取适当行动，其中可能包括但不限于在我们认为适当的情况下停用、移除或撤下被指称为侵权的内容及材料。我们并不保证我们会在我们认为不适当的情况下就此采取任何行动，且我们不对与该等投诉相关的任何作为或不作为负责。此外，我们保留权利，在我们唯一及绝对酌情权下认为合适并在不发出警告的情况下，从本服务删除或扣起任何内容、输入内容或输出内容。 任何投诉可电邮至service@hkgai.org或以书面方式寄往香港九龙清水湾香港科技大学李兆基大楼7楼7028室。任何侵权投诉或通知应以书面形式提交，并至少包含以下资讯：- (a)	对声称受到侵权的作品以及该作品的拥有者的充分识别 (b)	对声称为侵权或为侵权活动对象的活动或材料的充分识别，以及合理地足够的资料使我们能找出该材料或活动的所在之处； (c)	对该材料或行为如何侵犯权利拥有人的权利的充分描述； (d)	投诉人的地址、联络电话或电邮地址；及 (e)	一项声明，表明（i）尽投诉人所知所信，该投诉中的资讯是属真实准确；（ii）投诉人为版权拥有人或获授权代版权拥有人行事之人；以及（iii）投诉人明白他/她可因作出虚假陈述而招致刑事或民事法律责任。 我们保留权利：（i）要求提供进一步资料以支持投诉；（ii）停用、移除或撤下任何我们认为可能侵犯任何第三方的版权或其他权利或违反任何适用法律的材料；及/或 （iii）限制我们认为侵犯他人任何权利的任何使用者接达本服务或从本服务接达其他地方，以及采取其他行动。`,
      'privacy.content': `港话通 (HKChat) 私隱政策
最後更新：2025 年 05 月 09 日

本文件說明香港生成式人工智能研發中心有限公司（以下簡稱「HKGAI」、「我們」或「本公司」）如何收集、使用、儲存、披露及保護與您（以下簡稱「閣下」）有關的個人資料，以及閣下在《個人資料（私隱）條例》（香港法例第 486 章，以下簡稱「PDPO」）及其他適用法律下所享有的權利。本政策與《港話通 (HKChat) 服務條款》構成一體；若擬使用或繼續使用本服務，請務必詳細閱讀並完全理解本政策。如閣下不同意本政策任何條款，請立即停止使用並卸載相關應用程式。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 我們收集的資料類別</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">資料类别</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">具体内容</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">收集方式 / 来源</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">身份识别资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">姓名、身份证明文件号码（如适用）、智方便登录识别符、用户名、年龄、监护人资料（如属未成年人）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下在注册、身份验证或使用本服务时主動提供</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">联系资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">电子邮件、电话号码、通讯地址</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動提供</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">设备与技术资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">IP 地址、设备型号、操作系统、浏览器类型、设备语言、设备识别码、崩溃日志</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">透過 Cookies、SDK 或服务器日志自动收集</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服务使用资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">聊天指令（输入内容）、模型回应（输出内容）、操作记录、登录时间戳</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">于閣下使用服務過程中自动生成</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">交易与付款资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">信用卡号末四位、付款流水号、结算明细（如适用）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">由第三方支付服务商收集后传递</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">位置资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">基于 IP 或设备 GPS 归纳之粗略地理位置</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下允许定位服务或於網絡請求中自動取得</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">营销偏好资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">訂閱狀態、推廣活動互動記錄</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動選擇或使用服務過程中生成</td>
</tr>
</tbody>
</table>
</div>

我們只收集實際運營所需資料，若某項資訊看似多餘，請立即與我們聯絡提出質疑。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 資料收集與使用目的</h3>

1.	提供核心功能：身份驗證、生成聊天回應、推送通知。
2.	維運與安全：故障診斷、錯誤追蹤、濫用偵測、備份與恢復。
3.	產品改進：機器學習模型訓練、特徵測試、統計分析。我們可能對輸入及輸出內容作脫敏後的樣本化分析。
4.	法規遵從：遵守 PDPO、反洗錢（AML）、打擊恐怖份子資金（CFT）及其他適用法律。
5.	行銷與推廣（可選）：透過電子郵件或應用通知向閣下發送產品更新、活動資訊；閣下可隨時退訂。
6.	公司交易：如涉及併購、重組或資產出售，為完成盡職審查及移轉作業。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 資料分享對象</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">類別</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">目的</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">保護措施</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服務供應商 / 處理者（雲端託管、CDN、支付、分析）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">協助提供與維運服務</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">與之簽署資料處理協議 (DPA)，要求遵守保密與安全標準</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">關聯公司</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">內部合規、集中化基礎設施</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">僅限於必要職能；實施最少權限原則</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">司法機關、監管機構</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">法定要求、訴訟程序、執法請求</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">在符合法定程序及最小化披露原則下配合</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">潛在收購方</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">企業交易</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">於簽署保密協議後進行脫敏或受控存取</td>
</tr>
</tbody>
</table>
</div>

我們不會出售您的個人資料，也不允許第三方用於獨立行銷，除非事先獲得明確同意。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 海外資料轉移</h3>

為實現全球內容分發及彈性算力，本服務可能將資料傳輸至香港以外之地區（包括但不限於新加坡與美國）。我們將依照 PDPO 第 33 條實施等同於香港標準的保障措施，例如歐盟標準合約條款 (SCCs) 或企業約束規則 (BCRs)。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 資料保留期限</h3>

•	帳戶資料：自最後一次使用服務起計至少保存 7 年，以符合法規與統計需要。
•	聊天紀錄：以雜湊索引方式保存不超過 24 個月，用於模型安全監控與問責；期滿自動刪除或匿名化。
•	備份：在加密存儲中最長保留 180 天後輪替刪除。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. 資料安全</h3>

•	加密：TLS 1.3 傳輸加密；靜態資料採用 AES-256 或同等級加密。
•	存取控制：零信任架構、基於角色的授權 (RBAC)、多因素驗證 (MFA)。
•	稽核：定期滲透測試、SOC 2 及 ISO 27001 準則。
•	然而 無論措施多嚴謹，網絡傳輸並非絕對安全；如發現安全事故，我們將於合理時間內通報受影響用戶與監管機構。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. 閣下的權利</h3>

在 PDPO 及（如適用）GDPR 等法律下，閣下享有：

1.	查閱：索取我們所持有的個人資料副本。
2.	更正：要求修正不準確或過時資料。
3.	刪除 / 匿名化：在符合法定保存要求下，請求刪除或停止處理。
4.	限制 / 反對處理：就直接行銷或特定目的提出反對。
5.	資料可攜性：要求以結構化、常用及機器可讀格式移轉。
6.	撤回同意：對於基於同意的處理，可隨時撤回；撤回不影響先前基於同意之處理合法性。

可透過 service@hkgai.org 提出申請，我們於 40 日內回覆。若認為我們未妥善處理，可向香港個人資料私隱專員公署 (PCPD) 投訴。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. 兒童私隱</h3>

本服務僅限 18 歲或以上人士使用。若閣下未滿 18 歲，須由法定監護人同意並以監護人身份註冊。若我們得悉在未經監護人同意下收集任何未成年人資料，將立即刪除。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies 與類似技術</h3>

我們使用 Cookies、SDK、像素標籤及本地儲存 以：

•	記錄登入狀態、偏好及語言；
•	進行流量分析與性能監控；
•	提供個性化內容與選擇性行銷。

閣下可於瀏覽器或裝置設定拒絕部分或全部 Cookies，但可能影響服務體驗。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. 政策更新</h3>

我們可能因法律、技術或業務需求而不時修訂本政策。重大變更將於生效前在應用內顯示公告或向註冊電郵發送通知。若閣下在變更生效後繼續使用服務，即視為接受更新後之政策。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. 聯絡方式</h3>

•	電郵：service@hkgai.org
•	郵寄地址：香港九龍清水灣香港科技大學李兆基大樓 7 樓 7028 室

如對本政策有任何疑問、請求或投訴，歡迎隨時聯絡我們。我們相信隱私保護是 AI 服務可持續的基礎，但亦鼓勵用戶保持健康的「零信任」思維，對任何資料請求或輸出內容抱持審慎態度，必要時提出疑問。我們將持續自我檢視並公開改進，讓保護不流於紙上承諾。`
    },
    'privacy.title': '港話通 (HKChat) 私隱政策',
    'privacy.content': `港話通 (HKChat) 私隱政策
最後更新：2025 年 05 月 09 日

本文件說明香港生成式人工智能研發中心有限公司（以下簡稱「HKGAI」、「我們」或「本公司」）如何收集、使用、儲存、披露及保護與您（以下簡稱「閣下」）有關的個人資料，以及閣下在《個人資料（私隱）條例》（香港法例第 486 章，以下簡稱「PDPO」）及其他適用法律下所享有的權利。本政策與《港話通 (HKChat) 服務條款》構成一體；若擬使用或繼續使用本服務，請務必詳細閱讀並完全理解本政策。如閣下不同意本政策任何條款，請立即停止使用並卸載相關應用程式。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 我們收集的資料類別</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">資料类别</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">具体内容</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">收集方式 / 来源</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">身份识别资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">姓名、身份证明文件号码（如适用）、智方便登录识别符、用户名、年龄、监护人资料（如属未成年人）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下在注册、身份验证或使用本服务时主動提供</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">联系资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">电子邮件、电话号码、通讯地址</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動提供</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">设备与技术资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">IP 地址、设备型号、操作系统、浏览器类型、设备语言、设备识别码、崩溃日志</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">透過 Cookies、SDK 或服务器日志自动收集</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服务使用资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">聊天指令（输入内容）、模型回应（输出内容）、操作记录、登录时间戳</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">于閣下使用服務過程中自动生成</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">交易与付款资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">信用卡号末四位、付款流水号、结算明细（如适用）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">由第三方支付服务商收集后传递</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">位置资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">基于 IP 或设备 GPS 归纳之粗略地理位置</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下允许定位服务或於網絡請求中自動取得</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">营销偏好资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">訂閱狀態、推廣活動互動記錄</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動選擇或使用服務過程中生成</td>
</tr>
</tbody>
</table>
</div>

我們
