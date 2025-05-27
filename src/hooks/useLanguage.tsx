
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
    'register.subtitle': '加入港話通，開始您的AI對話之旅',
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
    'legal.agreement': '使用本服務即表示您同意我們的',
    'legal.terms': '服務條款',
    'legal.and': '和',
    'legal.privacy': '私隱政策',
    'terms.title': '港話通 (HKChat) 服務條款',
    'terms.content': `港話通 (HKChat) 服务条款
最后更新：[09/05/2025] 

请仔细阅读以下条款及细则，因其适用于阁下对港话通 (HKChat) 聊天机器人服务的使用。 港话通 (HKChat) 聊天机器人服务是由香港生成式人工智能研发中心有限公司提供及开放阁下使用，本公司为一家于香港成立的公司，唯一业务识别码为75807504，注册地址为香港九龙清水湾香港科技大学李兆基大楼7楼7028室（"HKGAI"、"我们"或"我们的"）。 港话通 (HKChat) 为一个可能通过网站、流动应用程式及/或软件应用程式提供的生成式人工智能聊天机器人服务（"本服务"）。通过下载、接达及/或使用本服务及其任何网站、应用程式、页面、功能、资讯及/或内容，即表示阁下同意受本协议的条款约束。如果阁下不明白或不同意本协议的条款，阁下不应使用本服务并应卸载与本服务相关的任何流动应用程式及/或软件应用程式。HKGAI有权不时对本服务及这些使用条款（"《使用条款》"或"本协议"）作出对阁下具有约束力的更新或变更，阁下应不时查看这些条款以获知任何更新。 如果阁下未满18岁（即未成年人），阁下必须由法定监护人（如家长）作为担保人接受本协议。如果阁下是以担保人身份接受本协议，则阁下同意担保相关未成年人会遵守本协议的条款，且我们可在相关未成年人违约时对阁下执行本协议。

注册 阁下可能需要提供某些个人资料及/或跟我们注册使用者帐户，才能接达本服务，包括但不限于阁下的"智方便"登入详情、电话号码及/或向阁下发送的一次性密码。如果阁下被要求这样做：- (a)	阁下必须按照我们的要求向我们提供准确、完整、合法及最新的个人资料及注册资讯； (b)	阁下应保持阁下的注册详情安全及保密，包括为阁下提供接达本服务的任何登入详情及/或一次性密码。阁下同意我们无需就任何其他人对阁下使用者帐户的任何未经授权使用，包括任何透过阁下使用者帐户未经授权地接达本服务，负上任何责任或承担任何法律责任。 (c)	阁下授权我们假设以阁下的登入详情及/或一次性密码使用本服务的任何人士为阁下。阁下同意对通过其登入详情接达或使用本服务的任何及所有相关活动负责，并同意不转移、借出或以其他方式将其使用者帐户提供给任何其他人使用。 阁下亦同意维护并尽快更新阁下提供给我们的任何资料（包括但不限于任何个人资料），使其保持最新、完整、准确及合法。阁下向我们所提供且与本服务相关的个人资料，包括为创建其使用者帐户而提供的个人资料，将根据港话通 (HKChat)私隐政策（可在[港话通 (HKChat) 私隐政策]浏览）("私隐政策")进行处理。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 阁下对本服务的使用</h3>

阁下确认我们可以在我们唯一的酌情权及不通知阁下的情况下增加、删除、移除、修改、停用、暂停、终止或限制本服务的某些或所有部分，并且阁下确认：（i）阁下可能无法再像该等事件发生之前以相同的范围使用本服务，或完全无法使用本服务，及（ii）在此情况下，HKGAI不会对阁下或任何第三方负上任何法律责任。 阁下同意仅为其个人及非商业目的使用本服务，并对阁下通过本服务提交、输入及/或传输的所有输入内容及/或输出内容承担全部责任。在阁下及HKGAI之间，本服务或其任何部分的任何及所有权利（包括但不限于知识产权）均为并应始终为HKGAI的专属财产。 作为阁下使用本服务或其任何部分的条件，阁下同意不会：- (a)	将本服务用于任何非法、未经授权或被任何适用法律（无论是刑事或民事）禁止的目的； (b)	传输、输入、上传、创建、生成或推广任何内容（包括但不限于输入内容或输出内容）或参与任何对阁下或他人有害的活动，包括可能被视为骚扰、欺凌、辱骂、诽谤、歧视、使人反感、威胁、恐吓、不雅、淫亵、暴力或粗俗的任何内容或活动； (c)	侵入、闯入、接达、使用或试图侵入、闯入、接达或使用我们伺服器的任何其他部分及/或阁下未获我们授权的任何资料区域，及/或试图绕过任何过滤或安全措施，或以任何方式干扰、中断、破坏或限制本服务的正常运作或功能； (d)	干扰或扰乱与本服务相连的网路，或违反该等网路的规例、政策或程序； (e)	传输、输入、上传、创建、生成或推广任何含有病毒、木马程式、蠕虫、定时炸弹、消磁或任何其他旨在中断、破坏或限制任何与本服务相关的电脑软件或硬件或电讯设备功能的侵害性或破坏力的例行程式的内容（包括但不限于输入内容或输出内容）； (f)	试图重新分发、销售、修改、改编、翻译、逆向工程、反编译、拆解本服务的任何部分，包括但不限于试图查阅与本服务相关的任何应用程式或软件的源代码、算法、模型及/或基础组件； (g)	试图透过密码破解或任何其他方式未经授权接达与本服务相关的任何使用者帐户、登入详情或密码（包括一次性密码）、伺服器、电脑系统或网路，或使用或启动任何自动化系统（例如"机器人"或"网路蜘蛛"）来接达本服务或任何与本服务连接的网路、伺服器或电脑系统； (h)	当阁下已注册使用者帐户时，直接或间接允许他人使用阁下就本服务的登入详情及/或密码； (i)	不诚实地、欺骗性地或恶意地注册多于一个或多个使用者帐户； (j)	未经我们事先书面准许，以任何方式复制、拍照或截图、传达、传输、翻制、框制或分发本服务的任何元件，或就此创作衍生作品； (k)	传输、输入、上传、创建、生成或推广任何受知识产权法律、商业机密、保密权、私隐权或公开权或任何其他适用法律保护的内容（包括但不限于输入内容或输出内容），除非阁下拥有或控制相关权利，或已获得所有必要的同意； (l)	干扰其他使用者的使用及/或享用本服务；及/或 (m)	将本服务中的任何内容或资料储存在伺服器或任何其他储存装置上，或透过系统地下载及/或储存本服务中的任何内容或资料来创建任何资料库。 我们保留权利但没有责任在不通知阁下的情况下不时接达阁下的使用者帐户及/或监控阁下对本服务的接达及使用，以确定阁下是否遵守任何适用法律、规例以及条款及细则，包括但不限于本《使用条款》。我们保留终止阁下使用本服务的权利，无论是因阁下违反本协议或我们认为阁下有任何违反本协议的嫌疑（包括但不限于违反任何被禁止用途），或基于我们认为适当的任何其他理由。 除了根据本《使用条款》使用本服务的有限、非专用、个人、不可转让、不可再授权及可撤销的许可外，阁下绝对不会获得本服务中的或其权利或许可。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 输入及输出内容</h3>

阁下可能向本服务提供使用者输入或指令（"输入内容"）及可能收到由本服务根据阁下的输入内容而生成的输出内容（"输出内容"）。阁下对其向本服务提供、传输或上传的所有输入内容，以及由此创建或生成的任何输出内容，承担全部责任。阁下应确保所有该等输入内容及输出内容遵守本《使用条款》以及任何适用法律。通过提交输入内容，阁下声明及保证阁下拥有所有必要的权利、许可及准许，以根据本《使用条款》提供及使用该输入内容，且阁下对本服务的使用，包括但不限于输入内容的提交或上传，及/或对任何输出内容的创建、生成及使用，不会侵犯任何第三方的权利及/或违反本《使用条款》以及任何适用法律。 在不抵触适用法律及本《使用条款》的情况下，在阁下与HKGAI之间：（a）阁下保留阁下可能于其输入内容拥有或持有的所有权利、所有权及权益；及（b）HKGAI并不主张拥有输出内容的拥有权，并在此向阁下转让HKGAI可能于输出内容拥有的任何权利、所有权及权益。然而，阁下确认由于输出内容是通过人工智能生成的，因本服务的性质，输出内容可能并非独特且可能与本服务的其他使用者收到的输出内容相同或相似。 阁下同意授予我们一项全球性、非专属、无条件、免费、可转让及永久的权利及许可，以使用、分析、传达及/或传输阁下的输入内容及/或输出内容，作提供、维持、开发及改进我们的本服务、遵守适用法律及/或执行我们的《使用条款》之用，为此我们无需提及阁下或向阁下付款或承担任何责任。在法律允许的最大范围内，阁下同意放弃阁下可能于输入内容及输出内容拥有的或涉及输入内容及输出内容的任何精神权利。如果阁下不希望其输入内容或输出内容被用于任何上述目的，阁下必须立即停止使用本服务。 本服务由人工智能驱动，并基于机器学习及大型语言模型，其本质上具有概率性。因此，输出内容有时可能包含事实上的不准确、遗漏、错误，或可能是不完整、不准确、过时或被误解的。阁下确认输出内容并不代表HKGAI的观点。阁下不应将任何输出内容视为权威或可靠的真相来源、事实资讯或专业建议。阁下对评估任何输出内容的准确性、适用性、适合性及合法性负上全部责任，包括在倚赖及使用输出内容之前进行人为审核。阁下不得将任何输出内容用作任何作为或不作为的基础，例如可能对个人产生法律或其他影响的任何决定。阁下应对基于任何输出内容的任何作为、不作为及/或决定承担全部责任，包括但不限于因输出内容的真实性、准确性、可靠性、适合性及/或保密性引起的任何后果。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 知识产权</h3>

在不抵触以上关于输入内容及输出内容的拥有权的第3条的情况下，任何其他作为本服务一部分及/或与本服务相关而被使用及/或提供的材料及/或作品（包括但不限于文字、图像、版面设计、用户界面、图形、标志、图标、品牌、数据汇编、源代码、目标代码、软件及本服务中所包含及/或与本服务相关的其他专有材料，以及其安排或汇编（统称"该内容"））归我们所有，或已授权我们作有限使用。该内容受版权、商标、专利、设计、商业秘密及/或其他所有权及法律的保护。未经我们事先书面同意，阁下对该内容不享有任何权利，并不得自己及促使、协助或便利任何第三方在任何媒体上复制、下载、翻制、修改、发布、传输、上传、展示、重新分发、储存、传达、商业利用、参与转让或销售、创作衍生作品，或以任何方式散布或利用任何该内容，或以其他方式在使用本服务或该内容之全部或部分时侵犯任何人的知识产权。阁下同意不会以本《使用条款》下明确允许以外的任何其他方式使用该内容。 阁下进一步同意，在不抵触以上关于我们对输入内容及输出内容之使用的第3条的情况下，我们可以自由使用、披露、采纳及修改阁下向我们提供的且与本服务相关或在本服务上或通过本服务提供的任何其他想法、概念、技术诀窍、提案、建议、评论及其他通讯及资料（"反馈"），就此我们无需提及阁下、向阁下付款或对阁下承担任何责任。阁下特此放弃并同意放弃所有及任何权利及索赔，包括但不限于与我们使用、披露、采纳及/或修改阁下的任何或全部反馈有关的任何代价、费用、版税、收费及/或其他款项。

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 监控</h3>

我们不会主动监控使用者向本服务、于本服务或通过本服务提交、输入、传输或发送的输入内容或输出内容，也不会保证该内容的准确性、完整性、合法性或质量。可是，我们将考虑有关本服务上或通过本服务提供的输出内容被指称为侵权或不当或非法之投诉。投诉人有责任提交所有相关资料以证实其投诉，并向我们提供我们可能要求的所有资料以支持其投诉。在收到所有相关支持证据后，我们将处理并调查该投诉，并将真诚地采取适当行动，其中可能包括但不限于在我们认为适当的情况下停用、移除或撤下被指称为侵权的内容及材料。我们并不保证我们会在我们认为不适当的情况下就此采取任何行动，且我们不对与该等投诉相关的任何作为或不作为负责。此外，我们保留权利，在我们唯一及绝对酌情权下认为合适并在不发出警告的情况下，从本服务删除或扣起任何内容、输入内容或输出内容。 任何投诉可电邮至service@hkgai.org或以书面方式寄往香港九龙清水湾香港科技大学李兆基大楼7楼7028室。任何侵权投诉或通知应以书面形式提交，并至少包含以下资讯：- (a)	对声称受到侵权的作品以及该作品的拥有者的充分识别 (b)	对声称为侵权或为侵权活动对象的活动或材料的充分识别，以及合理地足够的资料使我们能找出该材料或活动的所在之处； (c)	对该材料或行为如何侵犯权利拥有人的权利的充分描述； (d)	投诉人的地址、联络电话或电邮地址；及 (e)	一项声明，表明（i）尽投诉人所知所信，该投诉中的资讯是属真实准确；（ii）投诉人为版权拥有人或获授权代版权拥有人行事之人；以及（iii）投诉人明白他/她可因作出虚假陈述而招致刑事或民事法律责任。 我们保留权利：（i）要求提供进一步资料以支持投诉；（ii）停用、移除或撤下任何我们认为可能侵犯任何第三方的版权或其他权利或违反任何适用法律的材料；及/或 （iii）限制我们认为侵犯他人任何权利的任何使用者接达本服务或从本服务接达其他地方，以及采取其他行动。`,
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
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">資料類別</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">具體內容</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">收集方式 / 來源</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">身份識別資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">姓名、身分證明文件號碼（如適用）、智方便登入識別符、用戶名、年齡、監護人資料（如屬未成年人）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下在註冊、身份驗證或使用本服務時主動提供</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">聯絡資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">電子郵件、電話號碼、通訊地址</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動提供</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">裝置與技術資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">IP 位址、裝置型號、操作系統、瀏覽器類型、設備語言、裝置識別碼、崩潰日誌</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">透過 Cookies、SDK 或伺服器日誌自動收集</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服務使用資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">聊天指令（輸入內容）、模型回應（輸出內容）、操作記錄、登入時間戳</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">於閣下使用服務過程中自動生成</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">交易與付款資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">信用卡號末四位、付款流水號、結算明細（如適用）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">由第三方支付服務商收集後傳遞</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">位置資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">基於 IP 或裝置 GPS 歸納之粗略地理位置</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下允許定位服務或於網絡請求中自動取得</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">行銷偏好資料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">訂閱狀態、推廣活動互動紀錄</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">閣下主動選擇或使用服務過程中生成</td>
</tr>
</tbody>
</table>
</div>

<strong class="font-semibold text-gray-900">懷疑精神提醒</strong>：我們只收集實際運營所需資料，若某項資訊看似多餘，請立即與我們聯絡提出質疑。

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

<strong class="font-semibold text-gray-900">實話實說</strong>：我們不會出售您的個人資料，也不允許第三方用於獨立行銷，除非事先獲得明確同意。

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
    'register.subtitle': '加入港话通，开始您的AI对话之旅',
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
    'terms.title': '港话通 (HKChat) 服务条款',
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
    'privacy.title': '港话通 (HKChat) 隐私政策',
    'privacy.content': `港话通 (HKChat) 隐私政策
最后更新：2025 年 05 月 09 日

本文件说明香港生成式人工智能研发中心有限公司（以下简称「HKGAI」、「我们」或「本公司」）如何收集、使用、储存、披露及保护与您（以下简称「阁下」）有关的个人资料，以及阁下在《个人资料（私隐）条例》（香港法例第 486 章，以下简称「PDPO」）及其他适用法律下所享有的权利。本政策与《港话通 (HKChat) 服务条款》构成一体；若拟使用或继续使用本服务，请务必详细阅读并完全理解本政策。如阁下不同意本政策任何条款，请立即停止使用并卸载相关应用程序。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 我们收集的资料类别</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">资料类别</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">具体内容</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">收集方式 / 来源</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">身份识别资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">姓名、身份证明文件号码（如适用）、智方便登录识别符、用户名、年龄、监护人资料（如属未成年人）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">阁下在注册、身份验证或使用本服务时主动提供</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">联系资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">电子邮件、电话号码、通讯地址</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">阁下主动提供</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">设备与技术资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">IP 地址、设备型号、操作系统、浏览器类型、设备语言、设备识别码、崩溃日志</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">透过 Cookies、SDK 或服务器日志自动收集</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服务使用资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">聊天指令（输入内容）、模型回应（输出内容）、操作记录、登录时间戳</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">于阁下使用服务过程中自动生成</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">交易与付款资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">信用卡号末四位、付款流水号、结算明细（如适用）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">由第三方支付服务商收集后传递</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">位置资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">基于 IP 或设备 GPS 归纳之粗略地理位置</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">阁下允许定位服务或于网络请求中自动取得</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">营销偏好资料</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">订阅状态、推广活动互动记录</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">阁下主动选择或使用服务过程中生成</td>
</tr>
</tbody>
</table>
</div>

<strong class="font-semibold text-gray-900">怀疑精神提醒</strong>：我们只收集实际运营所需资料，若某项信息看似多余，请立即与我们联系提出质疑。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 资料收集与使用目的</h3>

1.	提供核心功能：身份验证、生成聊天回应、推送通知。
2.	维运与安全：故障诊断、错误追踪、滥用侦测、备份与恢复。
3.	产品改进：机器学习模型训练、特征测试、统计分析。我们可能对输入及输出内容作脱敏后的样本化分析。
4.	法规遵从：遵守 PDPO、反洗钱（AML）、打击恐怖分子资金（CFT）及其他适用法律。
5.	营销与推广（可选）：透过电子邮件或应用通知向阁下发送产品更新、活动信息；阁下可随时退订。
6.	公司交易：如涉及并购、重组或资产出售，为完成尽职审查及移转作业。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 资料分享对象</h3>

<div class="my-6">
<table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">类别</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">目的</th>
<th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">保护措施</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">服务供应商 / 处理者（云端托管、CDN、支付、分析）</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">协助提供与维运服务</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">与之签署资料处理协议 (DPA)，要求遵守保密与安全标准</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">关联公司</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">内部合规、集中化基础设施</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">仅限于必要职能；实施最少权限原则</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">司法机关、监管机构</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">法定要求、诉讼程序、执法请求</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">在符合法定程序及最小化披露原则下配合</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">潜在收购方</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">企业交易</td>
<td class="border border-gray-300 px-4 py-3 text-gray-700">于签署保密协议后进行脱敏或受控存取</td>
</tr>
</tbody>
</table>
</div>

<strong class="font-semibold text-gray-900">实话实说</strong>：我们不会出售您的个人资料，也不允许第三方用于独立营销，除非事先获得明确同意。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 海外资料转移</h3>

为实现全球内容分发及弹性算力，本服务可能将资料传输至香港以外之地区（包括但不限于新加坡与美国）。我们将依照 PDPO 第 33 条实施等同于香港标准的保障措施，例如欧盟标准合约条款 (SCCs) 或企业约束规则 (BCRs)。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 资料保留期限</h3>

•	账户资料：自最后一次使用服务起计至少保存 7 年，以符合法规与统计需要。
•	聊天记录：以散列索引方式保存不超过 24 个月，用于模型安全监控与问责；期满自动删除或匿名化。
•	备份：在加密存储中最长保留 180 天后轮替删除。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. 资料安全</h3>

•	加密：TLS 1.3 传输加密；静态资料采用 AES-256 或同等级加密。
•	存取控制：零信任架构、基于角色的授权 (RBAC)、多因素验证 (MFA)。
•	稽核：定期渗透测试、SOC 2 及 ISO 27001 准则。
•	然而 无论措施多严谨，网络传输并非绝对安全；如发现安全事故，我们将于合理时间内通报受影响用户与监管机构。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. 阁下的权利</h3>

在 PDPO 及（如适用）GDPR 等法律下，阁下享有：

1.	查阅：索取我们所持有的个人资料副本。
2.	更正：要求修正不准确或过时资料。
3.	删除 / 匿名化：在符合法定保存要求下，请求删除或停止处理。
4.	限制 / 反对处理：就直接营销或特定目的提出反对。
5.	资料可携性：要求以结构化、常用及机器可读格式移转。
6.	撤回同意：对于基于同意的处理，可随时撤回；撤回不影响先前基于同意之处理合法性。

可透过 service@hkgai.org 提出申请，我们于 40 日内回复。若认为我们未妥善处理，可向香港个人资料私隐专员公署 (PCPD) 投诉。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. 儿童私隐</h3>

本服务仅限 18 岁或以上人士使用。若阁下未满 18 岁，须由法定监护人同意并以监护人身份注册。若我们得悉在未经监护人同意下收集任何未成年人资料，将立即删除。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies 与类似技术</h3>

我们使用 Cookies、SDK、像素标签及本地存储 以：

•	记录登录状态、偏好及语言；
•	进行流量分析与性能监控；
•	提供个性化内容与选择性营销。

阁下可于浏览器或设备设定拒绝部分或全部 Cookies，但可能影响服务体验。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. 政策更新</h3>

我们可能因法律、技术或业务需求而不时修订本政策。重大变更将于生效前在应用内显示公告或向注册邮箱发送通知。若阁下在变更生效后继续使用服务，即视为接受更新后之政策。

⸻

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. 联系方式</h3>

•	邮箱：service@hkgai.org
•	邮寄地址：香港九龙清水湾香港科技大学李兆基大楼 7 楼 7028 室

如对本政策有任何疑问、请求或投诉，欢迎随时联系我们。我们相信隐私保护是 AI 服务可持续的基础，但亦鼓励用户保持健康的「零信任」思维，对任何资料请求或输出内容抱持审慎态度，必要时提出疑问。我们将持续自我检视并公开改进，让保护不流于纸上承诺。`
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
    'register.subtitle': 'Join HKChat and start your AI conversation journey',
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
    'terms.content': `HKChat Terms of Service
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
• Mailing address: Room 7028, 7/F, Lee Shau Kee Building, Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong

If you have any questions, requests or complaints about this policy, please feel free to contact us at any time. We believe privacy protection is the foundation of sustainable AI services, but we also encourage users to maintain a healthy "zero trust" mindset, being cautious about any data requests or output content, and raising questions when necessary. We will continue to self-examine and openly improve to ensure protection is not just a paper promise.`
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh-HK');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
