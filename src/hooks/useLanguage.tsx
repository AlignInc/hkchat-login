
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
    'app.name': 'HKChat',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    
    // Login Form
    'login.welcome': '歡迎回來',
    'login.subtitle': '登入您的 HKChat 帳戶',
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
    'register.subtitle': '加入 HKChat 社群',
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
    'terms.content': `港話通 (HKChat) 服務條款

最後更新：2025年05月09日

請仔細閱讀以下條款及細則，因其適用於閣下對港話通 (HKChat) 聊天機器人服務的使用。

港話通 (HKChat) 聊天機器人服務是由香港生成式人工智能研發中心有限公司提供及開放閣下使用，本公司為一家於香港成立的公司，唯一業務識別碼為75807504，註冊地址為香港九龍清水灣香港科技大學李兆基大樓7樓7028室（「HKGAI」、「我們」或「我們的」）。

港話通 (HKChat) 為一個可能通過網站、流動應用程式及/或軟件應用程式提供的生成式人工智能聊天機器人服務（「本服務」）。通過下載、接達及/或使用本服務及其任何網站、應用程式、頁面、功能、資訊及/或內容，即表示閣下同意受本協議的條款約束。

如果閣下不明白或不同意本協議的條款，閣下不應使用本服務並應卸載與本服務相關的任何流動應用程式及/或軟件應用程式。HKGAI有權不時對本服務及這些使用條款（「《使用條款》」或「本協議」）作出對閣下具有約束力的更新或變更，閣下應不時查看這些條款以獲知任何更新。

如果閣下未滿18歲（即未成年人），閣下必須由法定監護人（如家長）作為擔保人接受本協議。如果閣下是以擔保人身份接受本協議，則閣下同意擔保相關未成年人會遵守本協議的條款，且我們可在相關未成年人違約時對閣下執行本協議。

1. 註冊

閣下可能需要提供某些個人資料及/或跟我們註冊使用者帳戶，才能接達本服務，包括但不限於閣下的"智方便"登入詳情、電話號碼及/或向閣下發送的一次性密碼。如果閣下被要求這樣做：

(a) 閣下必須按照我們的要求向我們提供準確、完整、合法及最新的個人資料及註冊資訊；

(b) 閣下應保持閣下的註冊詳情安全及保密，包括為閣下提供接達本服務的任何登入詳情及/或一次性密碼。閣下同意我們無需就任何其他人對閣下使用者帳戶的任何未經授權使用，包括任何透過閣下使用者帳戶未經授權地接達本服務，負上任何責任或承擔任何法律責任。

(c) 閣下授權我們假設以閣下的登入詳情及/或一次性密碼使用本服務的任何人士為閣下。閣下同意對通過其登入詳情接達或使用本服務的任何及所有相關活動負責，並同意不轉移、借出或以其他方式將其使用者帳戶提供給任何其他人使用。

閣下亦同意維護並盡快更新閣下提供給我們的任何資料（包括但不限於任何個人資料），使其保持最新、完整、準確及合法。閣下向我們所提供且與本服務相關的個人資料，包括為創建其使用者帳戶而提供的個人資料，將根據港話通 (HKChat)私隱政策進行處理。

2. 閣下對本服務的使用

閣下確認我們可以在我們唯一的酌情權及不通知閣下的情況下增加、刪除、移除、修改、停用、暫停、終止或限制本服務的某些或所有部分，並且閣下確認：

(i) 閣下可能無法再像該等事件發生之前以相同的範圍使用本服務，或完全無法使用本服務，及

(ii) 在此情況下，HKGAI不會對閣下或任何第三方負上任何法律責任。

閣下同意僅為其個人及非商業目的使用本服務，並對閣下通過本服務提交、輸入及/或傳輸的所有輸入內容及/或輸出內容承擔全部責任。在閣下及HKGAI之間，本服務或其任何部分的任何及所有權利（包括但不限於知識產權）均為並應始終為HKGAI的專屬財產。

作為閣下使用本服務或其任何部分的條件，閣下同意不會：

(a) 將本服務用於任何非法、未經授權或被任何適用法律（無論是刑事或民事）禁止的目的；

(b) 傳輸、輸入、上傳、創建、生成或推廣任何內容（包括但不限於輸入內容或輸出內容）或參與任何對閣下或他人有害的活動，包括可能被視為騷擾、欺凌、辱罵、誹謗、歧視、使人反感、威脅、恐嚇、不雅、淫褻、暴力或粗俗的任何內容或活動；

(c) 侵入、闖入、接達、使用或試圖侵入、闖入、接達或使用我們伺服器的任何其他部分及/或閣下未獲我們授權的任何資料區域，及/或試圖繞過任何過濾或安全措施，或以任何方式干擾、中斷、破壞或限制本服務的正常運作或功能；

我們保留權利但沒有責任在不通知閣下的情況下不時接達閣下的使用者帳戶及/或監控閣下對本服務的接達及使用，以確定閣下是否遵守任何適用法律、規例以及條款及細則，包括但不限於本《使用條款》。

3. 輸入及輸出內容

閣下可能向本服務提供使用者輸入或指令（「輸入內容」）及可能收到由本服務根據閣下的輸入內容而生成的輸出內容（「輸出內容」）。閣下對其向本服務提供、傳輸或上傳的所有輸入內容，以及由此創建或生成的任何輸出內容，承擔全部責任。

通過提交輸入內容，閣下聲明及保證閣下擁有所有必要的權利、許可及準許，以根據本《使用條款》提供及使用該輸入內容，且閣下對本服務的使用，包括但不限於輸入內容的提交或上傳，及/或對任何輸出內容的創建、生成及使用，不會侵犯任何第三方的權利。

4. 知識產權

任何其他作為本服務一部分及/或與本服務相關而被使用及/或提供的材料及/或作品歸我們所有，或已授權我們作有限使用。該內容受版權、商標、專利、設計、商業秘密及/或其他所有權及法律的保護。

5. 免責聲明

閣下自行承擔使用本服務及其任何部分（包括任何輸入內容、輸出內容或該內容）的風險。本服務上或透過本服務提供的所有均以"現狀"及"現有"方式提供給閣下，沒有任何不論明示、默示、法定或其他形式作出的任何類型的保證或條件。

6. 法律責任的限制

在適用法律允許的最大範圍內，閣下同意不要求任何HKGAI方對任何損害、損失或開支（包括法律費用）承擔法律責任。

7. 弟賠

對於直接或間接與閣下的輸入內容、輸出內容或閣下對本服務的使用有關連或相關的任何及所有索賠、訴訟、要求、法律責任、損害、損失、開支及其他費用，閣下在此同意按要求對HKGAI及所有HKGAI方作全額弥償。

8. 終止

我們可以在我們唯一及絕對酌情權下出於任何原因隨時終止閣下對本服務或任何相關服務的任何或全部部分的使用及接達。

如果閣下有任何有關本服務的查詢，請通過電郵service@hkgai.org與我們聯繫，或寫信至香港九龍清水灣香港科技大學李兆基大樓7樓7028室。`,
    
    // Privacy Policy
    'privacy.title': '私隱政策',
    'privacy.content': `港話通 (HKChat) 私隱政策

最後更新：2025年05月09日

本文件說明香港生成式人工智能研發中心有限公司（以下簡稱「HKGAI」、「我們」或「本公司」）如何收集、使用、儲存、披露及保護與您（以下簡稱「閣下」）有關的個人資料，以及閣下在《個人資料（私隱）條例》（香港法例第486章，以下簡稱「PDPO」）及其他適用法律下所享有的權利。

本政策與《港話通 (HKChat) 服務條款》構成一體；若擬使用或繼續使用本服務，請務必詳細閱讀並完全理解本政策。如閣下不同意本政策任何條款，請立即停止使用並卸載相關應用程式。

1. 我們收集的資料類別

資料類別                具體內容                                    收集方式 / 來源
身份識別資料           姓名、身分證明文件號碼、智方便登入識別符        閣下在註冊、身份驗證時主動提供
聯絡資料              電子郵件、電話號碼、通訊地址                  閣下主動提供
裝置與技術資料         IP位址、裝置型號、操作系統、瀏覽器類型        透過Cookies、SDK自動收集
服務使用資料          聊天指令（輸入內容）、模型回應（輸出內容）      於閣下使用服務過程中自動生成
交易與付款資料         信用卡號末四位、付款流水號、結算明細          由第三方支付服務商收集後傳遞
位置資料              基於IP或裝置GPS歸納之粗略地理位置             閣下允許定位服務或網絡請求中自動取得
行銷偏好資料           訂閱狀態、推廣活動互動紀錄                   閣下主動選擇或使用服務過程中生成

我們只收集實際運營所需資料，若某項資訊看似多餘，請立即與我們聯絡提出質疑。

2. 資料收集與使用目的

• 提供核心功能：身份驗證、生成聊天回應、推送通知
• 維運與安全：故障診斷、錯誤追蹤、濫用偵測、備份與恢復
• 產品改進：機器學習模型訓練、特徵測試、統計分析
• 法規遵從：遵守PDPO、反洗錢（AML）、打擊恐怖份子資金（CFT）及其他適用法律
• 行銷與推廣（可選）：透過電子郵件或應用通知向閣下發送產品更新、活動資訊
• 公司交易：如涉及併購、重組或資產出售，為完成盡職審查及移轉作業

3. 資料分享對象

類別                    目的                        保護措施
服務供應商/處理者        協助提供與維運服務            與之簽署資料處理協議(DPA)
關聯公司               內部合規、集中化基礎設施        僅限於必要職能；實施最少權限原則
司法機關、監管機構       法定要求、訴訟程序、執法請求    在符合法定程序及最小化披露原則下配合
潛在收購方             企業交易                     於簽署保密協議後進行脫敏或受控存取

我們不會出售您的個人資料，也不允許第三方用於獨立行銷，除非事先獲得明確同意。

4. 海外資料轉移

為實現全球內容分發及彈性算力，本服務可能將資料傳輸至香港以外之地區（包括但不限於新加坡與美國）。我們將依照PDPO第33條實施等同於香港標準的保障措施，例如歐盟標準合約條款(SCCs)或企業約束規則(BCRs)。

5. 資料保留期限

• 帳戶資料：自最後一次使用服務起計至少保存7年，以符合法規與統計需要
• 聊天紀錄：以雜湊索引方式保存不超過24個月，用於模型安全監控與問責；期滿自動刪除或匿名化
• 備份：在加密存儲中最長保留180天後輪替刪除

6. 資料安全

• 加密：TLS 1.3傳輸加密；靜態資料採用AES-256或同等級加密
• 存取控制：零信任架構、基於角色的授權(RBAC)、多因素驗證(MFA)
• 稽核：定期滲透測試、SOC 2及ISO 27001準則

然而無論措施多嚴謹，網絡傳輸並非絕對安全；如發現安全事故，我們將於合理時間內通報受影響用戶與監管機構。

7. 閣下的權利

在PDPO及（如適用）GDPR等法律下，閣下享有：

• 查閱：索取我們所持有的個人資料副本
• 更正：要求修正不準確或過時資料
• 刪除/匿名化：在符合法定保存要求下，請求刪除或停止處理
• 限制/反對處理：就直接行銷或特定目的提出反對
• 資料可攜性：要求以結構化、常用及機器可讀格式移轉
• 撤回同意：對於基於同意的處理，可隨時撤回

可透過service@hkgai.org提出申請，我們於40日內回覆。若認為我們未妥善處理，可向香港個人資料私隱專員公署(PCPD)投訴。

8. 兒童私隱

本服務僅限18歲或以上人士使用。若閣下未滿18歲，須由法定監護人同意並以監護人身份註冊。若我們得悉在未經監護人同意下收集任何未成年人資料，將立即刪除。

9. Cookies與類似技術

我們使用Cookies、SDK、像素標籤及本地儲存以：

• 記錄登入狀態、偏好及語言
• 進行流量分析與性能監控
• 提供個性化內容與選擇性行銷

閣下可於瀏覽器或裝置設定拒絕部分或全部Cookies，但可能影響服務體驗。

10. 政策更新

我們可能因法律、技術或業務需求而不時修訂本政策。重大變更將於生效前在應用內顯示公告或向註冊電郵發送通知。若閣下在變更生效後繼續使用服務，即視為接受更新後之政策。

11. 聯絡方式

• 電郵：service@hkgai.org
• 郵寄地址：香港九龍清水灣香港科技大學李兆基大樓7樓7028室

如對本政策有任何疑問、請求或投訴，歡迎隨時聯絡我們。我們相信隱私保護是AI服務可持續的基礎，但亦鼓勵用戶保持健康的「零信任」思維，對任何資料請求或輸出內容抱持審慎態度，必要時提出疑問。我們將持續自我檢視並公開改進，讓保護不流於紙上承諾。`,
    
    // Validation Messages
    'validation.email.required': '請輸入電郵地址',
    'validation.email.invalid': '請輸入有效的電郵地址',
    'validation.password.required': '密碼不能為空',
    'validation.name.required': '請輸入姓名',
    'validation.password.mismatch': '密碼不一致',
    'validation.login.failed': '電郵地址或密碼錯誤，請重新輸入',
    
    // Success Messages
    'success.login': '登入成功',
    'success.login.description': '正在跳轉到 HKChat 服務...',
    'success.register': '註冊成功',
    'success.register.description': '歡迎加入 HKChat！',
    
    // iAM Smart
    'iamsmart.connecting': '正在連接智方便',
    'iamsmart.description': '即將跳轉到智方便認證頁面...'
  },
  
  'zh-CN': {
    // Header
    'app.name': 'HKChat',
    'language.zh-hk': '繁',
    'language.zh-cn': '简',
    'language.en': 'EN',
    
    // Login Form
    'login.welcome': '欢迎回来',
    'login.subtitle': '登录您的 HKChat 账户',
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
    'register.subtitle': '加入 HKChat 社区',
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
    'terms.content': `港话通 (HKChat) 服务条款

最后更新：2025年05月09日

请仔细阅读以下条款及细则，因其适用于阁下对港话通 (HKChat) 聊天机器人服务的使用。

港话通 (HKChat) 聊天机器人服务是由香港生成式人工智能研发中心有限公司提供及开放阁下使用，本公司为一家于香港成立的公司，唯一业务识别码为75807504，注册地址为香港九龙清水湾香港科技大学李兆基大楼7楼7028室（「HKGAI」、「我们」或「我们的」）。

港话通 (HKChat) 为一个可能通过网站、流动应用程序及/或软件应用程序提供的生成式人工智能聊天机器人服务（「本服务」）。通过下载、接达及/或使用本服务及其任何网站、应用程序、页面、功能、信息及/或内容，即表示阁下同意受本协议的条款约束。

如果阁下不明白或不同意本协议的条款，阁下不应使用本服务并应卸载与本服务相关的任何流动应用程序及/或软件应用程序。HKGAI有权不时对本服务及这些使用条款（「《使用条款》」或「本协议」）作出对阁下具有约束力的更新或变更，阁下应不时查看这些条款以获知任何更新。

如果阁下未满18岁（即未成年人），阁下必须由法定监护人（如家长）作为担保人接受本协议。如果阁下是以担保人身份接受本协议，则阁下同意担保相关未成年人会遵守本协议的条款，且我们可在相关未成年人违约时对阁下执行本协议。

1. 注册

阁下可能需要提供某些个人资料及/或跟我们注册使用者账户，才能接达本服务，包括但不限于阁下的"智方便"登入详情、电话号码及/或向阁下发送的一次性密码。如果阁下被要求这样做：

(a) 阁下必须按照我们的要求向我们提供准确、完整、合法及最新的个人资料及注册信息；

(b) 阁下应保持阁下的注册详情安全及保密，包括为阁下提供接达本服务的任何登入详情及/或一次性密码。阁下同意我们无需就任何其他人对阁下使用者账户的任何未经授权使用，包括任何透过阁下使用者账户未经授权地接达本服务，负上任何责任或承担任何法律责任。

(c) 阁下授权我们假设以阁下的登入详情及/或一次性密码使用本服务的任何人士为阁下。阁下同意对通过其登入详情接达或使用本服务的任何及所有相关活动负责，并同意不转移、借出或以其他方式将其使用者账户提供给任何其他人使用。

阁下亦同意维护并尽快更新阁下提供给我们的任何资料（包括但不限于任何个人资料），使其保持最新、完整、准确及合法。阁下向我们所提供且与本服务相关的个人资料，包括为创建其使用者账户而提供的个人资料，将根据港话通 (HKChat)隐私政策进行处理。

2. 阁下对本服务的使用

阁下确认我们可以在我们唯一的酌情权及不通知阁下的情况下增加、删除、移除、修改、停用、暂停、终止或限制本服务的某些或所有部分，并且阁下确认：

(i) 阁下可能无法再像该等事件发生之前以相同的范围使用本服务，或完全无法使用本服务，及

(ii) 在此情况下，HKGAI不会对阁下或任何第三方负上任何法律责任。

阁下同意仅为其个人及非商业目的使用本服务，并对阁下通过本服务提交、输入及/或传输的所有输入内容及/或输出内容承担全部责任。在阁下及HKGAI之间，本服务或其任何部分的任何及所有权利（包括但不限于知识产权）均为并应始终为HKGAI的专属财产。

作为阁下使用本服务或其任何部分的条件，阁下同意不会：

(a) 将本服务用于任何非法、未经授权或被任何适用法律（无论是刑事或民事）禁止的目的；

(b) 传输、输入、上传、创建、生成或推广任何内容（包括但不限于输入内容或输出内容）或参与任何对阁下或他人有害的活动，包括可能被视为骚扰、欺凌、辱骂、诽谤、歧视、使人反感、威胁、恐吓、不雅、淫亵、暴力或粗俗的任何内容或活动；

(c) 侵入、闯入、接达、使用或试图侵入、闯入、接达或使用我们服务器的任何其他部分及/或阁下未获我们授权的任何资料区域，及/或试图绕过任何过滤或安全措施，或以任何方式干扰、中断、破坏或限制本服务的正常运作或功能；

我们保留权利但没有责任在不通知阁下的情况下不时接达阁下的使用者账户及/或监控阁下对本服务的接达及使用，以确定阁下是否遵守任何适用法律、规例以及条款及细则，包括但不限于本《使用条款》。

3. 输入及输出内容

阁下可能向本服务提供使用者输入或指令（「输入内容」）及可能收到由本服务根据阁下的输入内容而生成的输出内容（「输出内容」）。阁下对其向本服务提供、传输或上传的所有输入内容，以及由此创建或生成的任何输出内容，承担全部责任。

通过提交输入内容，阁下声明及保证阁下拥有所有必要的权利、许可及准许，以根据本《使用条款》提供及使用该输入内容，且阁下对本服务的使用，包括但不限于输入内容的提交或上传，及/或对任何输出内容的创建、生成及使用，不会侵犯任何第三方的权利。

4. 知识产权

任何其他作为本服务一部分及/或与本服务相关而被使用及/或提供的材料及/或作品归我们所有，或已授权我们作有限使用。该内容受版权、商标、专利、设计、商业秘密及/或其他所有权及法律的保护。

5. 免责声明

阁下自行承担使用本服务及其任何部分（包括任何输入内容、输出内容或该内容）的风险。本服务上或透过本服务提供的所有均以"现状"及"现有"方式提供给阁下，没有任何不论明示、默示、法定或其他形式作出的任何类型的保证或条件。

6. 法律责任的限制

在适用法律允许的最大范围内，阁下同意不要求任何HKGAI方对任何损害、损失或开支（包括法律费用）承担法律责任。

7. 弥偿

对于直接或间接与阁下的输入内容、输出内容或阁下对本服务的使用有关连或相关的任何及所有索赔、诉讼、要求、法律责任、损害、损失、开支及其他费用，阁下在此同意按要求对HKGAI及所有HKGAI方作全额弥偿。

8. 终止

我们可以在我们唯一及绝对酌情权下出于任何原因随时终止阁下对本服务或任何相关服务的任何或全部部分的使用及接达。

如果阁下有任何有关本服务的查询，请通过电邮service@hkgai.org与我们联系，或写信至香港九龙清水湾香港科技大学李兆基大楼7楼7028室。`,
    
    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.content': `港话通 (HKChat) 隐私政策

最后更新：2025年05月09日

本文件说明香港生成式人工智能研发中心有限公司（以下简称「HKGAI」、「我们」或「本公司」）如何收集、使用、储存、披露及保护与您（以下简称「阁下」）有关的个人资料，以及阁下在《个人资料（隐私）条例》（香港法例第486章，以下简称「PDPO」）及其他适用法律下所享有的权利。

本政策与《港话通 (HKChat) 服务条款》构成一体；若拟使用或继续使用本服务，请务必详细阅读并完全理解本政策。如阁下不同意本政策任何条款，请立即停止使用并卸载相关应用程序。

1. 我们收集的资料类别

资料类别                具体内容                                    收集方式 / 来源
身份识别资料           姓名、身份证明文件号码、智方便登入识别符        阁下在注册、身份验证时主动提供
联络资料              电子邮件、电话号码、通讯地址                  阁下主动提供
装置与技术资料         IP地址、装置型号、操作系统、浏览器类型        透过Cookies、SDK自动收集
服务使用资料          聊天指令（输入内容）、模型回应（输出内容）      于阁下使用服务过程中自动生成
交易与付款资料         信用卡号末四位、付款流水号、结算明细          由第三方支付服务商收集后传递
位置资料              基于IP或装置GPS归纳之粗略地理位置             阁下允许定位服务或网络请求中自动取得
行销偏好资料           订阅状态、推广活动互动记录                   阁下主动选择或使用服务过程中生成

我们只收集实际运营所需资料，若某项信息看似多余，请立即与我们联络提出质疑。

2. 资料收集与使用目的

• 提供核心功能：身份验证、生成聊天回应、推送通知
• 维运与安全：故障诊断、错误追踪、滥用侦测、备份与恢复
• 产品改进：机器学习模型训练、特征测试、统计分析
• 法规遵从：遵守PDPO、反洗钱（AML）、打击恐怖分子资金（CFT）及其他适用法律
• 行销与推广（可选）：透过电子邮件或应用通知向阁下发送产品更新、活动信息
• 公司交易：如涉及并购、重组或资产出售，为完成尽职审查及移转作业

3. 资料分享对象

类别                    目的                        保护措施
服务供应商/处理者        协助提供与维运服务            与之签署资料处理协议(DPA)
关联公司               内部合规、集中化基础设施        仅限于必要职能；实施最少权限原则
司法机关、监管机构       法定要求、诉讼程序、执法请求    在符合法定程序及最小化披露原则下配合
潜在收购方             企业交易                     于签署保密协议后进行脱敏或受控存取

我们不会出售您的个人资料，也不允许第三方用于独立行销，除非事先获得明确同意。

4. 海外资料转移

为实现全球内容分发及弹性算力，本服务可能将资料传输至香港以外之地区（包括但不限于新加坡与美国）。我们将依照PDPO第33条实施等同于香港标准的保障措施，例如欧盟标准合约条款(SCCs)或企业约束规则(BCRs)。

5. 资料保留期限

• 账户资料：自最后一次使用服务起计至少保存7年，以符合法规与统计需要
• 聊天记录：以杂凑索引方式保存不超过24个月，用于模型安全监控与问责；期满自动删除或匿名化
• 备份：在加密存储中最长保留180天后轮替删除

6. 资料安全

• 加密：TLS 1.3传输加密；静态资料采用AES-256或同等级加密
• 存取控制：零信任架构、基于角色的授权(RBAC)、多因素验证(MFA)
• 稽核：定期渗透测试、SOC 2及ISO 27001准则

然而无论措施多严谨，网络传输并非绝对安全；如发现安全事故，我们将于合理时间内通报受影响用户与监管机构。

7. 阁下的权利

在PDPO及（如适用）GDPR等法律下，阁下享有：

• 查阅：索取我们所持有的个人资料副本
• 更正：要求修正不准确或过时资料
• 删除/匿名化：在符合法定保存要求下，请求删除或停止处理
• 限制/反对处理：就直接行销或特定目的提出反对
• 资料可携性：要求以结构化、常用及机器可读格式移转
• 撤回同意：对于基于同意的处理，可随时撤回

可透过service@hkgai.org提出申请，我们于40日内回复。若认为我们未妥善处理，可向香港个人资料隐私专员公署(PCPD)投诉。

8. 儿童隐私

本服务仅限18岁或以上人士使用。若阁下未满18岁，须由法定监护人同意并以监护人身份注册。若我们得悉在未经监护人同意下收集任何未成年人资料，将立即删除。

9. Cookies与类似技术

我们使用Cookies、SDK、像素标签及本地储存以：

• 记录登入状态、偏好及语言
• 进行流量分析与性能监控
• 提供个性化内容与选择性行销

阁下可于浏览器或装置设定拒绝部分或全部Cookies，但可能影响服务体验。

10. 政策更新

我们可能因法律、技术或业务需求而不时修订本政策。重大变更将于生效前在应用内显示公告或向注册电邮发送通知。若阁下在变更生效后继续使用服务，即视为接受更新后之政策。

11. 联络方式

• 电邮：service@hkgai.org
• 邮寄地址：香港九龙清水湾香港科技大学李兆基大楼7楼7028室

如对本政策有任何疑问、请求或投诉，欢迎随时联络我们。我们相信隐私保护是AI服务可持续的基础，但亦鼓励用户保持健康的「零信任」思维，对任何资料请求或输出内容抱持审慎态度，必要时提出疑问。我们将持续自我检视并公开改进，让保护不流于纸上承诺。`,
    
    // Validation Messages
    'validation.email.required': '请输入邮箱地址',
    'validation.email.invalid': '请输入有效的邮箱地址',
    'validation.password.required': '密码不能为空',
    'validation.name.required': '请输入姓名',
    'validation.password.mismatch': '密码不一致',
    'validation.login.failed': '邮箱地址或密码错误，请重新输入',
    
    // Success Messages
    'success.login': '登录成功',
    'success.login.description': '正在跳转到 HKChat 服务...',
    'success.register': '注册成功',
    'success.register.description': '欢迎加入 HKChat！',
    
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
    'terms.content': `HKChat Terms of Service

Last Updated: May 09, 2025

Please read the following terms and conditions carefully as they apply to your use of the HKChat chatbot service.

The HKChat chatbot service is provided and made available to you by Hong Kong Generative AI Research and Development Center Limited, a company incorporated in Hong Kong with business registration number 75807504 and registered address at Room 7028, 7/F, Lee Shau Kee Building, The Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong ("HKGAI", "we" or "our").

HKChat is a generative artificial intelligence chatbot service that may be provided through websites, mobile applications and/or software applications ("the Service"). By downloading, accessing and/or using the Service and any of its websites, applications, pages, features, information and/or content, you agree to be bound by the terms of this Agreement.

If you do not understand or agree to the terms of this Agreement, you should not use the Service and should uninstall any mobile applications and/or software applications related to the Service. HKGAI has the right to make updates or changes to the Service and these Terms of Use ("Terms of Use" or "this Agreement") from time to time that are binding on you, and you should review these terms from time to time to learn of any updates.

If you are under 18 years of age (i.e., a minor), you must have a legal guardian (such as a parent) accept this Agreement as a guarantor. If you are accepting this Agreement as a guarantor, you agree to guarantee that the relevant minor will comply with the terms of this Agreement, and we may enforce this Agreement against you if the relevant minor breaches it.

1. Registration

You may need to provide certain personal information and/or register a user account with us to access the Service, including but not limited to your "iAM Smart" login details, phone number and/or one-time passwords sent to you. If you are required to do so:

(a) You must provide us with accurate, complete, legal and up-to-date personal information and registration information as required by us;

(b) You should keep your registration details safe and confidential, including any login details and/or one-time passwords that provide you with access to the Service. You agree that we shall not be liable or legally responsible for any unauthorized use of your user account by any other person, including any unauthorized access to the Service through your user account.

(c) You authorize us to assume that any person using the Service with your login details and/or one-time password is you. You agree to be responsible for any and all related activities that access or use the Service through your login details, and agree not to transfer, lend or otherwise make your user account available to any other person for use.

You also agree to maintain and update as soon as possible any information you provide to us (including but not limited to any personal information) to keep it current, complete, accurate and legal. Personal information you provide to us and related to the Service, including personal information provided to create your user account, will be processed in accordance with the HKChat Privacy Policy.

2. Your Use of the Service

You acknowledge that we may add, delete, remove, modify, disable, suspend, terminate or restrict certain or all parts of the Service at our sole discretion and without notice to you, and you acknowledge that:

(i) You may no longer be able to use the Service to the same extent as before such events occurred, or may not be able to use the Service at all, and

(ii) In such circumstances, HKGAI will not be liable to you or any third party.

You agree to use the Service only for your personal and non-commercial purposes and to take full responsibility for all input content and/or output content that you submit, input and/or transmit through the Service. As between you and HKGAI, any and all rights (including but not limited to intellectual property rights) in the Service or any part thereof are and shall always remain the exclusive property of HKGAI.

As a condition of your use of the Service or any part thereof, you agree not to:

(a) Use the Service for any illegal, unauthorized or prohibited purpose under any applicable law (whether criminal or civil);

(b) Transmit, input, upload, create, generate or promote any content (including but not limited to input content or output content) or engage in any activities that are harmful to you or others, including any content or activities that may be considered harassment, bullying, abuse, defamation, discrimination, offensive, threatening, intimidating, indecent, obscene, violent or vulgar;

(c) Intrude, break into, access, use or attempt to intrude, break into, access or use any other part of our servers and/or any data areas to which you are not authorized by us, and/or attempt to bypass any filtering or security measures, or interfere, interrupt, destroy or limit the normal operation or function of the Service in any way;

We reserve the right but have no obligation to access your user account and/or monitor your access and use of the Service from time to time without notice to you to determine whether you comply with any applicable laws, regulations and terms and conditions, including but not limited to these Terms of Use.

3. Input and Output Content

You may provide user input or instructions to the Service ("Input Content") and may receive output content generated by the Service based on your Input Content ("Output Content"). You are fully responsible for all Input Content that you provide, transmit or upload to the Service, and any Output Content created or generated therefrom.

By submitting Input Content, you represent and warrant that you have all necessary rights, licenses and permissions to provide and use such Input Content in accordance with these Terms of Use, and that your use of the Service, including but not limited to the submission or upload of Input Content, and/or the creation, generation and use of any Output Content, will not infringe the rights of any third party.

4. Intellectual Property

Any other materials and/or works that are used and/or provided as part of the Service and/or in connection with the Service are owned by us or have been licensed to us for limited use. Such content is protected by copyright, trademark, patent, design, trade secret and/or other proprietary and legal rights.

5. Disclaimer

You use the Service and any part thereof (including any Input Content, Output Content or such content) at your own risk. Everything provided on or through the Service is provided to you on an "as is" and "as available" basis, without any warranties or conditions of any kind, whether express, implied, statutory or otherwise.

6. Limitation of Liability

To the maximum extent permitted by applicable law, you agree not to hold any HKGAI party liable for any damages, losses or expenses (including legal fees).

7. Indemnification

You hereby agree to fully indemnify, defend and hold harmless HKGAI and all HKGAI parties upon request for any and all claims, actions, demands, liabilities, damages, losses, expenses and other costs (including but not limited to all legal fees) directly or indirectly related to or arising from your Input Content, Output Content or your use of the Service.

8. Termination

We may terminate your use and access to any or all parts of the Service or any related services at any time for any reason at our sole and absolute discretion.

If you have any inquiries regarding the Service, please contact us by email at service@hkgai.org or write to Room 7028, 7/F, Lee Shau Kee Building, The Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong.`,
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.content': `HKChat Privacy Policy

Last Updated: May 09, 2025

This document explains how Hong Kong Generative AI Research and Development Center Limited (hereinafter referred to as "HKGAI", "we" or "the Company") collects, uses, stores, discloses and protects personal data relating to you (hereinafter referred to as "you"), and your rights under the Personal Data (Privacy) Ordinance (Chapter 486 of the Laws of Hong Kong, hereinafter referred to as "PDPO") and other applicable laws.

This policy forms an integral part of the HKChat Terms of Service; if you intend to use or continue to use the Service, please read and fully understand this policy. If you do not agree to any terms of this policy, please stop using and uninstall the relevant applications immediately.

1. Categories of Data We Collect

Data Category               Specific Content                                    Collection Method / Source
Identity Data              Name, ID document number, iAM Smart login identifier   Actively provided by you during registration and authentication
Contact Data               Email, phone number, correspondence address             Actively provided by you
Device & Technical Data    IP address, device model, operating system, browser type  Automatically collected via Cookies, SDK
Service Usage Data         Chat commands (input content), model responses (output content)  Automatically generated during your use of the service
Transaction & Payment Data Last four digits of credit card, payment serial number, billing details  Collected by third-party payment service providers and transmitted
Location Data              Approximate geographical location based on IP or device GPS  Obtained automatically with your permission for location services or in network requests
Marketing Preference Data  Subscription status, promotional activity interaction records  Actively selected by you or generated during service use

We only collect data necessary for actual operations. If any information seems redundant, please contact us immediately to raise questions.

2. Data Collection and Use Purposes

• Provide core functions: Identity verification, generate chat responses, push notifications
• Operations and security: Fault diagnosis, error tracking, abuse detection, backup and recovery
• Product improvement: Machine learning model training, feature testing, statistical analysis
• Regulatory compliance: Comply with PDPO, Anti-Money Laundering (AML), Counter-Financing of Terrorism (CFT) and other applicable laws
• Marketing and promotion (optional): Send product updates and event information to you via email or app notifications
• Corporate transactions: To complete due diligence and transfer operations if involving mergers, reorganizations or asset sales

3. Data Sharing Recipients

Category                   Purpose                          Protection Measures
Service Providers/Processors  Assist in providing and operating services   Sign data processing agreements (DPA) with them
Affiliated Companies        Internal compliance, centralized infrastructure  Limited to necessary functions; implement least privilege principle
Judicial authorities, regulatory agencies  Legal requirements, litigation procedures, law enforcement requests  Cooperate under compliance with legal procedures and minimization disclosure principles
Potential acquirers        Corporate transactions            Conduct desensitized or controlled access after signing confidentiality agreements

We will not sell your personal data, nor allow third parties to use it for independent marketing, unless we obtain explicit consent in advance.

4. Overseas Data Transfer

To achieve global content distribution and elastic computing power, this service may transmit data to regions outside Hong Kong (including but not limited to Singapore and the United States). We will implement safeguards equivalent to Hong Kong standards in accordance with Section 33 of PDPO, such as EU Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs).

5. Data Retention Period

• Account data: Retained for at least 7 years from the last use of the service to comply with regulations and statistical needs
• Chat records: Retained in hash index format for no more than 24 months for model security monitoring and accountability; automatically deleted or anonymized upon expiration
• Backups: Retained for a maximum of 180 days in encrypted storage before rotation deletion

6. Data Security

• Encryption: TLS 1.3 transmission encryption; static data uses AES-256 or equivalent encryption
• Access control: Zero-trust architecture, role-based authorization (RBAC), multi-factor authentication (MFA)
• Audit: Regular penetration testing, SOC 2 and ISO 27001 standards

However, no matter how rigorous the measures, network transmission is not absolutely secure; if security incidents are discovered, we will notify affected users and regulatory agencies within reasonable time.

7. Your Rights

Under PDPO and (if applicable) GDPR and other laws, you enjoy:

• Access: Request copies of personal data we hold
• Correction: Request correction of inaccurate or outdated data
• Deletion/Anonymization: Request deletion or cessation of processing subject to legal retention requirements
• Restriction/Objection to processing: Object to direct marketing or specific purposes
• Data portability: Request transfer in structured, commonly used and machine-readable format
• Withdraw consent: For processing based on consent, you may withdraw at any time

You can submit applications via service@hkgai.org, and we will respond within 40 days. If you believe we have not handled it properly, you can complain to the Privacy Commissioner for Personal Data (PCPD) in Hong Kong.

8. Children's Privacy

This service is only for persons aged 18 or above. If you are under 18, you must have the consent of a legal guardian and register as a guardian. If we learn that we have collected any minor's data without guardian consent, we will delete it immediately.

9. Cookies and Similar Technologies

We use Cookies, SDK, pixel tags and local storage to:

• Record login status, preferences and language
• Conduct traffic analysis and performance monitoring
• Provide personalized content and selective marketing

You can refuse some or all Cookies in your browser or device settings, but this may affect the service experience.

10. Policy Updates

We may revise this policy from time to time due to legal, technical or business needs. Major changes will be announced in the app or sent to registered emails before taking effect. If you continue to use the service after the changes take effect, you are deemed to accept the updated policy.

11. Contact Information

• Email: service@hkgai.org
• Mailing address: Room 7028, 7/F, Lee Shau Kee Building, The Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong

If you have any questions, requests or complaints about this policy, please feel free to contact us at any time. We believe privacy protection is the foundation for sustainable AI services, but we also encourage users to maintain a healthy "zero trust" mindset, be cautious about any data requests or output content, and raise questions when necessary. We will continue to self-examine and improve publicly, so that protection is not just a paper promise.`,
    
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
