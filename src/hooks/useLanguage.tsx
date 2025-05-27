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
    'legal.agreement': '使用本服務即表示您同意我們的',
    'legal.terms': '服務條款',
    'legal.and': '和',
    'legal.privacy': '私隱政策',
    'terms.title': '港話通 (HKChat) 服務條款',
    'terms.content': `<p>港話通 (HKChat) 服務條款</p>
<p>最後更新：[09/05/2025]</p>
<p>請仔細閱讀以下條款及細則，因其適用於閣下對港話通 (HKChat) 聊天機器人服務的使用。 港話通 (HKChat) 聊天機器人服務是由香港生成式人工智能研發中心有限公司提供及開放閣下使用，本公司為一家於香港成立的公司，唯一業務識別碼為75807504，註冊地址為香港九龍清水灣香港科技大學李兆基大樓7樓7028室（"HKGAI"、"我們"或"我們的"）。 港話通 (HKChat) 為一個可能透過網站、流動應用程式及/或軟件應用程式提供的生成式人工智能聊天機器人服務（"本服務"）。透過下載、接達及/或使用本服務及其任何網站、應用程式、頁面、功能、資訊及/或內容，即表示閣下同意受本協議的條款約束。如果閣下不明白或不同意本協議的條款，閣下不應使用本服務並應卸載與本服務相關的任何流動應用程式及/或軟件應用程式。HKGAI有權不時對本服務及這些使用條款（"《使用條款》"或"本協議"）作出對閣下具有約束力的更新或變更，閣下應不時查看這些條款以獲知任何更新。 如果閣下未滿18歲（即未成年人），閣下必須由法定監護人（如家長）作為擔保人接受本協議。如果閣下是以擔保人身份接受本協議，則閣下同意擔保相關未成年人會遵守本協議的條款，且我們可在相關未成年人違約時對閣下執行本協議。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 註冊</h3>
<p>閣下可能需要提供某些個人資料及/或跟我們註冊使用者帳戶，才能接達本服務，包括但不限於閣下的"智方便"登入詳情、電話號碼及/或向閣下發送的一次性密碼。如果閣下被要求這樣做：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>閣下必須按照我們的要求向我們提供準確、完整、合法及最新的個人資料及註冊資訊；</li>
  <li>閣下應保持閣下的註冊詳情安全及保密，包括為閣下提供接達本服务的任何登入詳情及/或一次性密碼。閣下同意我們無需就任何其他人對閣下使用者帳戶的任何未經授權使用，包括任何透過閣下使用者帳戶未經授權地接達本服務，負上任何責任或承擔任何法律責任。</li>
  <li>閣下授權我們假設以閣下的登入詳情及/或一次性密碼使用本服務的任何人士為閣下。閣下同意對透過其登入詳情接達或使用本服務的任何及所有相關活動負責，並同意不轉移、借出或以其他方式將其使用者帳戶提供給任何其他人使用。</li>
</ol>
<p>閣下亦同意維護並盡快更新閣下提供給我們的任何資料（包括但不限於任何個人資料），使其保持最新、完整、準確及合法。閣下向我們所提供且與本服務相關的個人資料，包括為創建其使用者帳戶而提供的個人資料，將根據港話通 (HKChat)私隱政策（可在<a href="/privacy-policy" class="text-blue-600 hover:underline">[港話通 (HKChat) 私隱政策]</a>瀏覽）("私隱政策")進行處理。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 閣下對本服務的使用</h3>
<p>閣下確認我們可以在我們唯一的酌情權及不通知閣下的情況下增加、刪除、移除、修改、停用、暫停、終止或限制本服務的某些或所有部分，並且閣下確認：（i）閣下可能無法再像該等事件發生之前以相同的範圍使用本服務，或完全無法使用本服務，及（ii）在此情況下，HKGAI不會對閣下或任何第三方負上任何法律責任。 閣下同意僅為其個人及非商業目的使用本服務，並對閣下透過本服務提交、輸入及/或傳輸的所有輸入內容及/或輸出內容承擔全部責任。在閣下及HKGAI之間，本服務或其任何部分的任何及所有權利（包括但不限於知識產權）均為並應始終為HKGAI的專屬財產。 作為閣下使用本服務或其任何部分的條件，閣下同意不會：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>將本服務用於任何非法、未經授權或被任何適用法律（無論是刑事或民事）禁止的目的；</li>
  <li>傳輸、輸入、上傳、創建、生成或推廣任何內容（包括但不限於輸入內容或輸出內容）或參與任何對閣下或他人有害的活動，包括可能被視為騷擾、欺凌、辱罵、誹謗、歧視、使人反感、威脅、恐嚇、不雅、淫褻、暴力或粗俗的任何內容或活動；</li>
  <li>侵入、闖入、接達、使用或試圖侵入、闖入、接達或使用我們伺服器的任何其他部分及/或閣下未獲我們授權的任何資料區域，及/或試圖繞過任何過濾或安全措施，或以任何方式干擾、中斷、破壞或限制本服務的正常運作或功能；</li>
  <li>干擾或擾亂與本服務相連的網絡，或違反該等網絡的規例、政策或程序；</li>
  <li>傳輸、輸入、上傳、創建、生成或推廣任何含有病毒、木馬程式、蠕蟲、定時炸彈、消磁或任何其他旨在中斷、破壞或限制任何與本服務相關的電腦軟件或硬件或電訊設備功能的侵害性或破壞力的例行程式的內容（包括但不限於輸入內容或輸出內容）；</li>
  <li>試圖重新分發、銷售、修改、改編、翻譯、逆向工程、反編譯、拆解本服務的任何部分，包括但不限於試圖查閱與本服務相關的任何應用程式或軟件的源代碼、算法、模型及/或基礎組件；</li>
  <li>試圖透過密碼破解或任何其他方式未經授權接達與本服務相關的任何使用者帳戶、登入詳情或密碼（包括一次性密碼）、伺服器、電腦系統或網絡，或使用或啟動任何自動化系統（例如"機器人"或"網絡蜘蛛"）來接達本服務或任何與本服務連接的網絡、伺服器或電腦系統；</li>
  <li>當閣下已註冊使用者帳戶時，直接或間接允許他人使用閣下就本服務的登入詳情及/或密碼；</li>
  <li>不誠實地、欺騙性地或惡意地註冊多於一個或多個使用者帳戶；</li>
  <li>未經我們事先書面准許，以任何方式複製、拍照或截圖、傳達、傳輸、複製、框制或分發本服務的任何元件，或就此創作衍生作品；</li>
  <li>傳輸、輸入、上傳、創建、生成或推廣任何受知識產權法律、商業機密、保密權、私隱權或公開權或任何其他適用法律保護的內容（包括但不限於輸入內容或輸出內容），除非閣下擁有或控制相關權利，或已獲得所有必要的同意；</li>
  <li>干擾其他使用者的使用及/或享用本服務；及/或</li>
  <li>將本服務中的任何內容或資料儲存在伺服器或任何其他儲存裝置上，或透過系統地下載及/或儲存本服務中的任何內容或資料來創建任何資料庫。</li>
</ol>
<p>我們保留權利但沒有責任在不通知閣下的情況下不時接達閣下的使用者帳戶及/或監控閣下對本服務的接達及使用，以確定閣下是否遵守任何適用法律、規例以及條款及細則，包括但不限於本《使用條款》。我們保留終止閣下使用本服務的權利，無論是因閣下違反本協議或我們認為閣下有任何違反本協議的嫌疑（包括但不限於違反任何被禁止用途），或基於我們認為適當的任何其他理由。 除了根據本《使用條款》使用本服務的有限、非專用、個人、不可轉讓、不可再授權及可撤銷的許可外，閣下絕對不會獲得本服務中的或其權利或許。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 輸入及輸出內容</h3>
<p>閣下可能向本服務提供使用者輸入或指令（"輸入內容"）及可能收到由本服務根據閣下的輸入內容而生成的輸出內容（"輸出內容"）。閣下對其向本服務提供、傳輸或上傳的所有輸入內容，以及由此創建或生成的任何輸出內容，承擔全部責任。閣下應確保所有該等輸入內容及輸出內容遵守本《使用條款》以及任何適用法律。透過提交輸入內容，閣下聲明及保證閣下擁有所有必要的權利、許可及准許，以根據本《使用條款》提供及使用該輸入內容，且閣下對本服務的使用，包括但不限於輸入内容的提交或上傳，及/或對任何輸出內容的創建、生成及使用，不會侵犯任何第三方的權利及/或違反本《使用條款》以及任何適用法律。</p>
<p>在不抵觸適用法律及本《使用條款》的情況下，在閣下與HKGAI之間：（a）閣下保留閣下可能於其輸入內容擁有或持有的所有權利、所有權及權益；及（b）HKGAI並不主張擁有輸出內容的擁有權，並在此向閣下轉讓HKGAI可能於輸出內容擁有的任何權利、所有權及權益。然而，閣下確認由於輸出內容是透過人工智能生成的，因本服務的性質，輸出內容可能並非獨特且可能與本服務的其他使用者收到的輸出內容相同或相似。</p>
<p>閣下同意授予我們一項全球性、非專屬、無條件、免費、可轉讓及永久的權利及許可，以使用、分析、傳達及/或傳輸閣下的輸入內容及/或輸出內容，作提供、維持、開發及改進我們的本服務、遵守適用法律及/或執行我們的《使用條款》之用，為此我們無需提及閣下或向閣下付款或承擔任何責任。在法律允許的最大範圍內，閣下同意放棄閣下可能於輸入內容及輸出內容擁有的或涉及輸入內容及輸出內容的任何精神權利。如果閣下不希望其輸入內容或輸出內容被用於任何上述目的，閣下必須立即停止使用本服務。</p>
<p>本服務由人工智能驅動，並基於機器學習及大型語言模型，其本質上具有概率性。因此，輸出內容有時可能包含事實上的不準確、遺漏、錯誤，或可能是不完整、不準確、過時或被誤解的。閣下確認輸出內容並不代表HKGAI的觀點。閣下不應將任何輸出內容視為權威或可靠的真相來源、事實資訊或專業建議。閣下對評估任何輸出內容的準確性、適用性、適合性及合法性負上全部責任，包括在倚賴及使用輸出內容之前進行人為審核。閣下不得將任何輸出內容用作任何作為或不作為的基礎，例如可能對個人產生法律或其他影響的任何決定。閣下應對基於任何輸出內容的任何作為、不作為及/或決定承擔全部責任，包括但不限於因輸出內容的真實性、準確性、可靠性、適合性及/或保密性引起的任何後果。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 知識產權</h3>
<p>在不抵觸以上關於輸入內容及輸出內容的擁有權的第3條的情況下，任何其他作為本服務一部分及/或與本服務相關而被使用及/或提供的材料及/或作品（包括但不限於文字、圖像、版面設計、用戶界面、圖形、標誌、圖標、品牌、數據匯編、源代碼、目標代碼、軟件及本服務中所包含及/或與本服務相關的其他專有材料，以及其安排或匯編（統稱"該內容"））歸我們所有，或已授權我們作有限使用。該內容受版權、商標、專利、設計、商業秘密及/或其他所有權及法律的保護。未經我們事先書面同意，閣下對該內容不享有任何權利，並不得自己及促使、協助或便利任何第三方在任何媒體上複製、下載、複製、修改、發布、傳輸、上傳、展示、重新分發、儲存、傳達、商業利用、參與轉讓或銷售、創作衍生作品，或以任何方式散布或利用任何該內容，或以其他方式在使用本服務或該內容之全部或部分時侵犯任何人的知識產權。閣下同意不會以本《使用條款》下明確允許以外的任何其他方式使用該內容。</p>
<p>閣下進一步同意，在不抵觸以上關於我們對輸入內容及輸出內容之使用的第3條的情況下，我們可以自由使用、披露、採納及修改閣下向我們提供的且與本服務相關或在本服務上或透過本服務提供的任何其他想法、概念、技術訣竅、提案、建議、評論及其他通訊及資料（"反饋"），就此我們無需提及閣下、向閣下付款或對閣下承擔任何責任。閣下特此放棄並同意放棄所有及任何權利及索賠，包括但不限於與我們使用、披露、採納及/或修改閣下的任何或全部反饋有關的任何代價、費用、版稅、收費及/或其他款項。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 監控</h3>
<p>我們不會主動監控使用者向本服務、於本服務或透過本服務提交、輸入、傳輸或發送的輸入內容或輸出內容，也不會保證該內容的準確性、完整性、合法性或質量。可是，我們將考慮有關本服務上或透過本服務提供的輸出內容被指稱為侵權或不當或非法之投訴。投訴人有責任提交所有相關資料以證實其投訴，並向我們提供我們可能要求的所有資料以支持其投訴。在收到所有相關支持證據後，我們將處理並調查該投訴，並將真誠地採取適當行動，其中可能包括但不限於在我們認為適當的情況下停用、移除或撤下被指稱為侵權的內容及材料。我們並不保證我們會在我們認為不適當的情況下就此採取任何行動，且我們不對與該等投訴相關的任何作為或不作為負責。此外，我們保留權利，在我們唯一及絕對酌情權下認為合適並在不發出警告的情況下，從本服務刪除或扣起任何內容、輸入內容或輸出內容。</p>
<p>任何投訴可電郵至service@hkgai.org或以書面方式寄往香港九龍清水灣香港科技大學李兆基大樓7樓7028室。任何侵權投訴或通知應以書面形式提交，並至少包含以下資訊：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>對聲稱受到侵權的作品以及該作品的擁有者的充分識別；</li>
  <li>對聲稱為侵權或為侵權活動對象的活動或材料的充分識別，以及合理地足夠的資料使我們能找出該材料或活動的所在之處；</li>
  <li>對該材料或行為如何侵犯權利擁有人的權利的充分描述；</li>
  <li>投訴人的地址、聯絡電話或電郵地址；及</li>
  <li>一項聲明，表明（i）盡投訴人所知所信，該投訴中的資訊是屬真實準確；（ii）投訴人為版權擁有人或獲授權代版權擁有人行事之人；以及（iii）投訴人明白他/她可因作出虛假陳述而招致刑事或民事法律責任。</li>
</ol>
<p>我們保留權利：</p>
<ol type="i" style="list-style-type: lower-roman; padding-left: 20px;">
  <li>要求提供進一步資料以支持投訴；</li>
  <li>停用、移除或撤下任何我們認為可能侵犯任何第三方的版權或其他權利或違反任何適用法律的材料；及/或</li>
  <li>限制我們認為侵犯他人任何權利的任何使用者接達本服務或從本服務接達其他地方，以及採取其他行動。</li>
</ol>`,
    'privacy.title': '港話通 (HKChat) 私隱政策',
    'privacy.content': `<p>港話通 (HKChat) 私隱政策</p>
<p>最後更新：2025 年 05 月 09 日</p>
<p>本文件說明香港生成式人工智能研發中心有限公司（以下簡稱「HKGAI」、「我們」或「本公司」）如何收集、使用、儲存、披露及保護與您（以下簡稱「閣下」）有關的個人資料，以及閣下在《個人資料（私隱）條例》（香港法例第 486 章，以下簡稱「PDPO」）及其他適用法律下所享有的權利。本政策與《港話通 (HKChat) 服務條款》構成一體；若擬使用或繼續使用本服務，請務必詳細閱讀並完全理解本政策。如閣下不同意本政策任何條款，請立即停止使用並卸載相關應用程式。</p>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">懷疑精神提醒</strong>：我們只收集實際運營所需資料，若某項資訊看似多餘，請立即與我們聯絡提出質疑。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 資料收集與使用目的</h3>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>提供核心功能：身份驗證、生成聊天回應、推送通知。</li>
  <li>維運與安全：故障診斷、錯誤追蹤、濫用偵測、備份與恢復。</li>
  <li>產品改進：機器學習模型訓練、特徵測試、統計分析。我們可能對輸入及輸出內容作脫敏後的樣本化分析。</li>
  <li>法規遵從：遵守 PDPO、反洗錢（AML）、打擊恐怖份子資金（CFT）及其他適用法律。</li>
  <li>行銷與推廣（可選）：透過電子郵件或應用通知向閣下發送產品更新、活動資訊；閣下可隨時退訂。</li>
  <li>公司交易：如涉及併購、重組或資產出售，為完成盡職審查及移轉作業。</li>
</ol>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">實話實說</strong>：我們不會出售您的個人資料，也不允許第三方用於獨立行銷，除非事先獲得明確同意。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 海外資料轉移</h3>
<p>為實現全球內容分發及彈性算力，本服務可能將資料傳輸至香港以外之地區（包括但不限於新加坡與美國）。我們將依照 PDPO 第 33 條實施等同於香港標準的保障措施，例如歐盟標準合約條款 (SCCs) 或企業約束規則 (BCRs)。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 資料保留期限</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>帳戶資料：自最後一次使用服務起計至少保存 7 年，以符合法規與統計需要。</li>
  <li>聊天紀錄：以雜湊索引方式保存不超過 24 個月，用於模型安全監控與問責；期滿自動刪除或匿名化。</li>
  <li>備份：在加密存儲中最長保留 180 天後輪替刪除。</li>
</ul>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. 資料安全</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>加密：TLS 1.3 傳輸加密；靜態資料採用 AES-256 或同等級加密。</li>
  <li>存取控制：零信任架構、基於角色的授權 (RBAC)、多因素驗證 (MFA)。</li>
  <li>稽核：定期滲透測試、SOC 2 及 ISO 27001 準則。</li>
</ul>
<p>然而 無論措施多嚴謹，網絡傳輸並非絕對安全；如發現安全事故，我們將於合理時間內通報受影響用戶與監管機構。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. 閣下的權利</h3>
<p>在 PDPO 及（如適用）GDPR 等法律下，閣下享有：</p>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>查閱：索取我們所持有的個人資料副本。</li>
  <li>更正：要求修正不準確或過時資料。</li>
  <li>刪除 / 匿名化：在符合法定保存要求下，請求刪除或停止處理。</li>
  <li>限制 / 反對處理：就直接行銷或特定目的提出反對。</li>
  <li>資料可攜性：要求以結構化、常用及機器可讀格式移轉。</li>
  <li>撤回同意：對於基於同意的處理，可隨時撤回；撤回不影響先前基於同意之處理合法性。</li>
</ol>
<p>可透過 service@hkgai.org 提出申請，我們於 40 日內回覆。若認為我們未妥善處理，可向香港個人資料私隱專員公署 (PCPD) 投訴。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. 兒童私隱</h3>
<p>本服務僅限 18 歲或以上人士使用。若閣下未滿 18 歲，須由法定監護人同意並以監護人身份註冊。若我們得悉在未經監護人同意下收集任何未成年人資料，將立即刪除。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies 與類似技術</h3>
<p>我們使用 Cookies、SDK、像素標籤及本地儲存 以：</p>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>記錄登入狀態、偏好及語言；</li>
  <li>進行流量分析與性能監控；</li>
  <li>提供個性化內容與選擇性行銷。</li>
</ul>
<p>閣下可於瀏覽器或裝置設定拒絕部分或全部 Cookies，但可能影響服務體驗。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. 政策更新</h3>
<p>我們可能因法律、技術或業務需求而不時修訂本政策。重大變更將於生效前在應用內顯示公告或向註冊電郵發送通知。若閣下在變更生效後繼續使用服務，即視為接受更新後之政策。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. 聯絡方式</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>電郵：service@hkgai.org</li>
  <li>郵寄地址：香港九龍清水灣香港科技大學李兆基大樓 7 樓 7028 室</li>
</ul>
<p>如對本政策有任何疑問、請求或投訴，歡迎隨時聯絡我們。我們相信隱私保護是 AI 服務可持續的基礎，但亦鼓勵用戶保持健康的「零信任」思維，對任何資料請求或輸出內容抱持審慎態度，必要時提出疑問。我們將持續自我檢視並公開改進，讓保護不流於紙上承諾。</p>`
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
    'legal.agreement': '使用本服务即表示您同意我们的',
    'legal.terms': '服务条款',
    'legal.and': '和',
    'legal.privacy': '隐私政策',
    'terms.title': '港话通 (HKChat) 服务条款',
    'terms.content': `<p>港话通 (HKChat) 服务条款</p>
<p>最后更新：[09/05/2025]</p>
<p>请仔细阅读以下条款及细则，因其适用于阁下对港话通 (HKChat) 聊天机器人服务的使用。 港话通 (HKChat) 聊天机器人服务是由香港生成式人工智能研发中心有限公司提供及开放阁下使用，本公司为一家于香港成立的公司，唯一业务识别码为75807504，注册地址为香港九龙清水湾香港科技大学李兆基大楼7楼7028室（"HKGAI"、"我们"或"我们的"）。 港话通 (HKChat) 为一个可能通过网站、流动应用程式及/或软件应用程式提供的生成式人工智能聊天机器人服务（"本服务"）。通过下载、接达及/或使用本服务及其任何网站、应用程式、页面、功能、资讯及/或内容，即表示阁下同意受本协议的条款约束。如果阁下不明白或不同意本协议的条款，阁下不应使用本服务并应卸载与本服务相关的任何流动应用程式及/或软件应用程式。HKGAI有权不时对本服务及这些使用条款（"《使用条款》"或"本协议"）作出对阁下具有约束力的更新或变更，阁下应不时查看这些条款以获知任何更新。 如果阁下未满18岁（即未成年人），阁下必须由法定监护人（如家长）作为担保人接受本协议。如果阁下是以担保人身份接受本协议，则阁下同意担保相关未成年人会遵守本协议的条款，且我们可在相关未成年人违约时对阁下执行本协议。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. 注册</h3>
<p>阁下可能需要提供某些个人资料及/或跟我们注册使用者帐户，才能接达本服务，包括但不限于阁下的"智方便"登入详情、电话号码及/或向阁下发送的一次性密码。如果阁下被要求这样做：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>阁下必须按照我们的要求向我们提供准确、完整、合法及最新的个人资料及注册资讯；</li>
  <li>阁下应保持阁下的注册详情安全及保密，包括为阁下提供接达本服务的任何登入详情及/或一次性密码。阁下同意我们无需就任何其他人对阁下使用者帐户的任何未经授权使用，包括任何透过阁下使用者帐户未经授权地接达本服务，负上任何责任或承担任何法律责任。</li>
  <li>阁下授权我们假设以阁下的登入详情及/或一次性密码使用本服务的任何人士为阁下。阁下同意对通过其登入详情接达或使用本服务的任何及所有相关活动负责，并同意不转移、借出或以其他方式将其使用者帐户提供给任何其他人使用。</li>
</ol>
<p>阁下亦同意维护并尽快更新阁下提供给我们的任何资料（包括但不限于任何个人资料），使其保持最新、完整、准确及合法。阁下向我们所提供且与本服务相关的个人资料，包括为创建其使用者帐户而提供的个人资料，将根据港话通 (HKChat)私隐政策（可在<a href="/privacy-policy" class="text-blue-600 hover:underline">[港话通 (HKChat) 隐私政策]</a>浏览）("私隐政策")进行处理。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 阁下对本服务的使用</h3>
<p>阁下确认我们可以在我们唯一的酌情权及不通知阁下的情况下增加、删除、移除、修改、停用、暂停、终止或限制本服务的某些或所有部分，并且阁下确认：（i）阁下可能无法再像该等事件发生之前以相同的范围使用本服务，或完全无法使用本服务，及（ii）在此情况下，HKGAI不会对阁下或任何第三方负上任何法律责任。 阁下同意仅为其个人及非商业目的使用本服务，并对阁下通过本服务提交、输入及/或传输的所有输入内容及/或输出内容承担全部责任。在阁下及HKGAI之间，本服务或其任何部分的任何及所有权利（包括但不限于知识产权）均为并应始终为HKGAI的专属财产。 作为阁下使用本服务或其任何部分的条件，阁下同意不会：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>将本服务用于任何非法、未经授权或被任何适用法律（无论是刑事或民事）禁止的目的；</li>
  <li>传输、输入、上传、创建、生成或推广任何内容（包括但不限于输入内容或输出内容）或参与任何对阁下或他人有害的活动，包括可能被视为骚扰、欺凌、辱骂、诽谤、歧视、使人反感、威胁、恐吓、不雅、淫亵、暴力或粗俗的任何内容或活动；</li>
  <li>侵入、闯入、接达、使用或试图侵入、闯入、接达或使用我们伺服器的任何其他部分及/或阁下未获我们授权的任何资料区域，及/或试图绕过任何过滤或安全措施，或以任何方式干扰、中断、破坏或限制本服务的正常运作或功能；</li>
  <li>干扰或扰乱与本服务相连的网路，或违反该等网路的规例、政策或程序；</li>
  <li>传输、输入、上传、创建、生成或推广任何含有病毒、木马程式、蠕虫、定时炸弹、消磁或任何其他旨在中断、破坏或限制任何与本服务相关的电脑软件或硬件或电讯设备功能的侵害性或破坏力的例行程式的内容（包括但不限于输入内容或输出内容）；</li>
  <li>试图重新分发、销售、修改、改编、翻译、逆向工程、反编译、拆解本服务的任何部分，包括但不限于试图查阅与本服务相关的任何应用程式或软件的源代码、算法、模型及/或基础组件；</li>
  <li>试图透过密码破解或任何其他方式未经授权接达与本服务相关的任何使用者帐户、登入详情或密码（包括一次性密码）、伺服器、电脑系统或网路，或使用或启动任何自动化系统（例如"机器人"或"网路蜘蛛"）来接达本服务或任何与本服务连接的网路、伺服器或电脑系统；</li>
  <li>当阁下已注册使用者帐户时，直接或间接允许他人使用阁下就本服务的登入详情及/或密码；</li>
  <li>不诚实地、欺骗性地或恶意地注册多于一个或多个使用者帐户；</li>
  <li>未经我们事先书面准许，以任何方式复制、拍照或截图、传达、传输、翻制、框制或分发本服务的任何元件，或就此创作衍生作品；</li>
  <li>传输、输入、上传、创建、生成或推广任何受知识产权法律、商业机密、保密权、私隐权或公开权或任何其他适用法律保护的内容（包括但不限于输入内容或输出内容），除非阁下拥有或控制相关权利，或已获得所有必要的同意；</li>
  <li>干扰其他使用者的使用及/或享用本服务；及/或</li>
  <li>将本服务中的任何内容或资料储存在伺服器或任何其他储存装置上，或透过系统地下载及/或储存本服务中的任何内容或资料来创建任何资料库。</li>
</ol>
<p>我们保留权利但没有责任在不通知阁下的情况下不时接达阁下的使用者帐户及/或监控阁下对本服务的接达及使用，以确定阁下是否遵守任何适用法律、规例以及条款及细则，包括但不限于本《使用条款》。我们保留终止阁下使用本服务的权利，无论是因阁下违反本协议或我们认为阁下有任何违反本协议的嫌疑（包括但不限于违反任何被禁止用途），或基于我们认为适当的任何其他理由。 除了根据本《使用条款》使用本服务的有限、非专用、个人、不可转让、不可再授权及可撤销的许可外，阁下绝对不会获得本服务中的或其权利或许可。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. 输入及输出内容</h3>
<p>阁下可能向本服务提供使用者输入或指令（"输入内容"）及可能收到由本服务根据阁下的输入内容而生成的输出内容（"输出内容"）。阁下对其向本服务提供、传输或上传的所有输入内容，以及由此创建或生成的任何输出内容，承担全部责任。阁下应确保所有该等输入内容及输出内容遵守本《使用条款》以及任何适用法律。通过提交输入内容，阁下声明及保证阁下拥有所有必要的权利、许可及准许，以根据本《使用条款》提供及使用该输入内容，且阁下对本服务的使用，包括但不限于输入内容的提交或上传，及/或对任何输出内容的创建、生成及使用，不会侵犯任何第三方的权利及/或违反本《使用条款》以及任何适用法律。</p>
<p>在不抵触适用法律及本《使用条款》的情况下，在阁下与HKGAI之间：（a）阁下保留阁下可能于其输入内容拥有或持有的所有权利、所有权及权益；及（b）HKGAI并不主张拥有输出内容的拥有权，并在此向阁下转让HKGAI可能于输出内容拥有的任何权利、所有权及权益。然而，阁下确认由于输出内容是通过人工智能生成的，因本服务的性质，输出内容可能并非独特且可能与本服务的其他使用者收到的输出内容相同或相似。</p>
<p>阁下同意授予我们一项全球性、非专属、无条件、免费、可转让及永久的权利及许可，以使用、分析、传达及/或传输阁下的输入内容及/或输出内容，作提供、维持、开发及改进我们的本服务、遵守适用法律及/或执行我们的《使用条款》之用，为此我们无需提及阁下或向阁下付款或承担任何责任。在法律允许的最大范围内，阁下同意放弃阁下可能于输入内容及输出内容拥有的或涉及输入内容及输出内容的任何精神权利。如果阁下不希望其输入内容或输出内容被用于任何上述目的，阁下必须立即停止使用本服务。</p>
<p>本服务由人工智能驱动，并基于机器学习及大型语言模型，其本质上具有概率性。因此，输出内容有时可能包含事实上的不准确、遗漏、错误，或可能是不完整、不准确、过时或被误解的。阁下确认输出内容并不代表HKGAI的观点。阁下不应将任何输出内容视为权威或可靠的真相来源、事实资讯或专业建议。阁下对评估任何输出内容的准确性、适用性、适合性及合法性负上全部责任，包括在倚赖及使用输出内容之前进行人为审核。阁下不得将任何输出内容用作任何作为或不作为的基础，例如可能对个人产生法律或其他影响的任何决定。阁下应对基于任何输出内容的任何作为、不作为及/或决定承担全部责任，包括但不限于因输出内容的真实性、准确性、可靠性、适合性及/或保密性引起的任何后果。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 知识产权</h3>
<p>在不抵触以上关于输入内容及输出内容的拥有权的第3条的情况下，任何其他作为本服务一部分及/或与本服务相关而被使用及/或提供的材料及/或作品（包括但不限于文字、图像、版面设计、用户界面、图形、标志、图标、品牌、数据汇编、源代码、目标代码、软件及本服务中所包含及/或与本服务相关的其他专有材料，以及其安排或汇编（统称"该内容"））归我们所有，或已授权我们作有限使用。该内容受版权、商标、专利、设计、商业秘密及/或其他所有权及法律的保护。未经我们事先书面同意，阁下对该内容不享有任何权利，并不得自己及促使、协助或便利任何第三方在任何媒体上复制、下载、翻制、修改、发布、传输、上传、展示、重新分发、储存、传达、商业利用、参与转让或销售、创作衍生作品，或以任何方式散布或利用任何该内容，或以其他方式在使用本服务或该内容之全部或部分时侵犯任何人的知识产权。阁下同意不会以本《使用条款》下明确允许以外的任何其他方式使用该内容。</p>
<p>阁下进一步同意，在不抵触以上关于我们对输入内容及输出内容之使用的第3条的情况下，我们可以自由使用、披露、采纳及修改阁下向我们提供的且与本服务相关或在本服务上或通过本服务提供的任何其他想法、概念、技术诀窍、提案、建议、评论及其他通讯及资料（"反馈"），就此我们无需提及阁下、向阁下付款或对阁下承担任何责任。阁下特此放弃并同意放弃所有及任何权利及索赔，包括但不限于与我们使用、披露、采纳及/或修改阁下的任何或全部反馈有关的任何代价、费用、版税、收费及/或其他款项。</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 监控</h3>
<p>我们不会主动监控使用者向本服务、于本服务或通过本服务提交、输入、传输或发送的输入内容或输出内容，也不会保证该内容的准确性、完整性、合法性或质量。可是，我们将考虑有关本服务上或通过本服务提供的输出内容被指称为侵权或不当或非法之投诉。投诉人有责任提交所有相关资料以证实其投诉，并向我们提供我们可能要求的所有资料以支持其投诉。在收到所有相关支持证据后，我们将处理并调查该投诉，并将真诚地采取适当行动，其中可能包括但不限于在我们认为适当的情况下停用、移除或撤下被指称为侵权的内容及材料。我们并不保证我们会在我们认为不适当的情况下就此采取任何行动，且我们不对与该等投诉相关的任何作为或不作为负责。此外，我们保留权利，在我们唯一及绝对酌情权下认为合适并在不发出警告的情况下，从本服务删除或扣起任何内容、输入内容或输出内容。</p>
<p>任何投诉可电邮至service@hkgai.org或以书面方式寄往香港九龙清水湾香港科技大学李兆基大楼7楼7028室。任何侵权投诉或通知应以书面形式提交，并至少包含以下资讯：</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>对声称受到侵权的作品以及该作品的拥有者的充分识别；</li>
  <li>对声称为侵权或为侵权活动对象的活动或材料的充分识别，以及合理地足够的资料使我们能找出该材料或活动的所在之处；</li>
  <li>对该材料或行为如何侵犯权利拥有人的权利的充分描述；</li>
  <li>投诉人的地址、联络电话或电邮地址；及</li>
  <li>一项声明，表明（i）尽投诉人所知所信，该投诉中的资讯是属真实准确；（ii）投诉人为版权拥有人或获授权代版权拥有人行事之人；以及（iii）投诉人明白他/她可因作出虚假陈述而招致刑事或民事法律责任。</li>
</ol>
<p>我们保留权利：</p>
<ol type="i" style="list-style-type: lower-roman; padding-left: 20px;">
  <li>要求提供进一步资料以支持投诉；</li>
  <li>停用、移除或撤下任何我们认为可能侵犯任何第三方的版权或其他权利或违反任何适用法律的材料；及/或</li>
  <li>限制我们认为侵犯他人任何权利的任何使用者接达本服务或从本服务接达其他地方，以及采取其他行动。</li>
</ol>`,
    'privacy.title': '港话通 (HKChat) 隐私政策',
    'privacy.content': `<p>港话通 (HKChat) 隐私政策</p>
<p>最后更新：2025 年 05 月 09 日</p>
<p>本文件说明香港生成式人工智能研发中心有限公司（以下简称「HKGAI」、「我们」或「本公司」）如何收集、使用、储存、披露及保护与您（以下简称「阁下」）有关的个人资料，以及阁下在《个人资料（私隐）条例》（香港法例第 486 章，以下简称「PDPO」）及其他适用法律下所享有的权利。本政策与《港话通 (HKChat) 服务条款》构成一体；若拟使用或继续使用本服务，请务必详细阅读并完全理解本政策。如阁下不同意本政策任何条款，请立即停止使用并卸载相关应用程序。</p>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">怀疑精神提醒</strong>：我们只收集实际运营所需资料，若某项信息看似多余，请立即与我们联系提出质疑。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. 资料收集与使用目的</h3>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>提供核心功能：身份验证、生成聊天回应、推送通知。</li>
  <li>维运与安全：故障诊断、错误追踪、滥用侦测、备份与恢复。</li>
  <li>产品改进：机器学习模型训练、特征测试、统计分析。我们可能对输入及输出内容作脱敏后的样本化分析。</li>
  <li>法规遵从：遵守 PDPO、反洗钱（AML）、打击恐怖分子资金（CFT）及其他适用法律。</li>
  <li>营销与推广（可选）：透过电子邮件或应用通知向阁下发送产品更新、活动信息；阁下可随时退订。</li>
  <li>公司交易：如涉及并购、重组或资产出售，为完成尽职审查及移转作业。</li>
</ol>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">实话实说</strong>：我们不会出售您的个人资料，也不允许第三方用于独立营销，除非事先获得明确同意。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. 海外资料转移</h3>
<p>为实现全球内容分发及弹性算力，本服务可能将资料传输至香港以外之地区（包括但不限于新加坡与美国）。我们将依照 PDPO 第 33 条实施等同于香港标准的保障措施，例如欧盟标准合约条款 (SCCs) 或企业约束规则 (BCRs)。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. 资料保留期限</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>账户资料：自最后一次使用服务起计至少保存 7 年，以符合法规与统计需要。</li>
  <li>聊天记录：以散列索引方式保存不超过 24 个月，用于模型安全监控与问责；期满自动删除或匿名化。</li>
  <li>备份：在加密存储中最长保留 180 天后轮替删除。</li>
</ul>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. 资料安全</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>加密：TLS 1.3 传输加密；静态资料采用 AES-256 或同等级加密。</li>
  <li>存取控制：零信任架构、基于角色的授权 (RBAC)、多因素验证 (MFA)。</li>
  <li>稽核：定期渗透测试、SOC 2 及 ISO 27001 准则。</li>
</ul>
<p>然而 无论措施多严谨，网络传输并非绝对安全；如发现安全事故，我们将于合理时间内通报受影响用户与监管机构。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. 阁下的权利</h3>
<p>在 PDPO 及（如适用）GDPR 等法律下，阁下享有：</p>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>查阅：索取我们所持有的个人资料副本。</li>
  <li>更正：要求修正不准确或过时资料。</li>
  <li>删除 / 匿名化：在符合法定保存要求下，请求删除或停止处理。</li>
  <li>限制 / 反对处理：就直接营销或特定目的提出反对。</li>
  <li>资料可携性：要求以结构化、常用及机器可读格式移转。</li>
  <li>撤回同意：对于基于同意的处理，可随时撤回；撤回不影响先前基于同意之处理合法性。</li>
</ol>
<p>可透过 service@hkgai.org 提出申请，我们于 40 日内回复。若认为我们未妥善处理，可向香港个人资料私隐专员公署 (PCPD) 投诉。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. 儿童私隐</h3>
<p>本服务仅限 18 岁或以上人士使用。若阁下未满 18 岁，须由法定监护人同意并以监护人身份注册。若我们得悉在未经监护人同意下收集任何未成年人资料，将立即删除。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies 与类似技术</h3>
<p>我们使用 Cookies、SDK、像素标签及本地存储 以：</p>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>记录登录状态、偏好及语言；</li>
  <li>进行流量分析与性能监控；</li>
  <li>提供个性化内容与选择性营销。</li>
</ul>
<p>阁下可于浏览器或设备设定拒绝部分或全部 Cookies，但可能影响服务体验。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. 政策更新</h3>
<p>我们可能因法律、技术或业务需求而不时修订本政策。重大变更将于生效前在应用内显示公告或向注册邮箱发送通知。若阁下在变更生效后继续使用服务，即视为接受更新后之政策。</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. 联系方式</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>邮箱：service@hkgai.org</li>
  <li>邮寄地址：香港九龙清水湾香港科技大学李兆基大楼 7 楼 7028 室</li>
</ul>
<p>如对本政策有任何疑问、请求或投诉，欢迎随时联系我们。我们相信隐私保护是 AI 服务可持续的基础，但亦鼓励用户保持健康的「零信任」思维，对任何资料请求或输出内容抱持审慎态度，必要时提出疑问。我们将持续自我检视并公开改进，让保护不流于纸上承诺。</p>`
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
    'terms.content': `<p>HKChat Terms of Service</p>
<p>Last Updated: [09/05/2025]</p>
<p>Please read these terms and conditions carefully as they apply to your use of the HKChat chatbot service. The HKChat chatbot service is provided and made available to you by Hong Kong Generative AI Research and Development Centre Limited, a company incorporated in Hong Kong with business registration number 75807504 and registered address at Room 7028, 7/F, Lee Shau Kee Building, Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong ("HKGAI", "we" or "our"). HKChat is a generative artificial intelligence chatbot service that may be provided through websites, mobile applications and/or software applications ("the Service"). By downloading, accessing and/or using the Service and any of its websites, applications, pages, features, information and/or content, you agree to be bound by the terms of this Agreement. If you do not understand or agree to the terms of this Agreement, you should not use the Service and should uninstall any mobile applications and/or software applications related to the Service. HKGAI has the right to make updates or changes to the Service and these Terms of Use ("Terms of Use" or "this Agreement") from time to time that are binding on you, and you should review these terms from time to time to be aware of any updates. If you are under 18 years of age (i.e., a minor), you must have a legal guardian (such as a parent) accept this Agreement as a guarantor. If you accept this Agreement as a guarantor, you agree to guarantee that the relevant minor will comply with the terms of this Agreement, and we may enforce this Agreement against you in the event of a breach by the relevant minor.</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">1. Registration</h3>
<p>You may need to provide certain personal information and/or register a user account with us to access the Service, including but not limited to your "iAM Smart" login details, phone number and/or one-time passwords sent to you. If you are required to do so:</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>You must provide us with accurate, complete, legal and up-to-date personal information and registration information as required by us;</li>
  <li>You should keep your registration details secure and confidential, including any login details and/or one-time passwords that provide you with access to the Service. You agree that we need not be liable or bear any legal responsibility for any unauthorized use of your user account by any other person, including any unauthorized access to the Service through your user account.</li>
  <li>You authorize us to assume that any person using the Service with your login details and/or one-time password is you. You agree to be responsible for any and all relevant activities that access or use the Service through your login details, and agree not to transfer, lend or otherwise make your user account available for use by any other person.</li>
</ol>
<p>You also agree to maintain and promptly update any information you provide to us (including but not limited to any personal information) to keep it current, complete, accurate and legal. Personal information you provide to us and related to the Service, including personal information provided to create your user account, will be processed in accordance with the HKChat Privacy Policy (available at <a href="/privacy-policy" class="text-blue-600 hover:underline">[HKChat Privacy Policy]</a>) ("Privacy Policy").</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. Your Use of the Service</h3>
<p>You acknowledge that we may, in our sole discretion and without notice to you, add, delete, remove, modify, disable, suspend, terminate or restrict some or all parts of the Service, and you acknowledge that: (i) you may no longer be able to use the Service to the same extent as before such events occurred, or may not be able to use the Service at all, and (ii) in such circumstances, HKGAI will not be legally liable to you or any third party. You agree to use the Service solely for your personal and non-commercial purposes and take full responsibility for all input and/or output you submit, enter and/or transmit through the Service. As between you and HKGAI, any and all rights (including but not limited to intellectual property rights) in the Service or any part thereof are and shall always remain the exclusive property of HKGAI. As a condition of your use of the Service or any part thereof, you agree that you will not:</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>Use the Service for any illegal, unauthorized or prohibited purpose under any applicable law (whether criminal or civil);</li>
  <li>Transmit, input, upload, create, generate or promote any content (including but not limited to input or output) or engage in any activities that are harmful to you or others, including any content or activities that may be considered harassment, bullying, abuse, defamation, discrimination, offensive, threatening, intimidating, indecent, obscene, violent or vulgar;</li>
  <li>Intrude, break into, access, use or attempt to intrude, break into, access or use any other part of our servers and/or any data areas not authorized by us, and/or attempt to bypass any filtering or security measures, or in any way interfere with, interrupt, destroy or limit the normal operation or functionality of the Service;</li>
  <li>Interfere with or disrupt networks connected to the Service, or violate the regulations, policies or procedures of such networks;</li>
  <li>Transmit, input, upload, create, generate or promote any content (including but not limited to input or output) containing viruses, Trojan horses, worms, time bombs, cancelbots, or any other invasive or destructive routines intended to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment related to the Service;</li>
  <li>Attempt to redistribute, sell, modify, adapt, translate, reverse engineer, decompile, disassemble any part of the Service, including but not limited to attempting to access the source code, algorithms, models and/or underlying components of any applications or software related to the Service;</li>
  <li>Attempt to gain unauthorized access to any user accounts, login details or passwords (including one-time passwords), servers, computer systems or networks related to the Service through password cracking or any other means, or use or launch any automated system (such as "bots" or "web spiders") to access the Service or any networks, servers or computer systems connected to the Service;</li>
  <li>When you have registered a user account, directly or indirectly allow others to use your login details and/or password for the Service;</li>
  <li>Dishonestly, fraudulently or maliciously register more than one user account;</li>
  <li>Without our prior written permission, copy, photograph or screenshot, communicate, transmit, reproduce, frame or distribute any component of the Service in any way, or create derivative works thereof;</li>
  <li>Transmit, input, upload, create, generate or promote any content (including but not limited to input or output) protected by intellectual property laws, trade secrets, confidentiality rights, privacy rights or publicity rights or any other applicable law, unless you own or control the relevant rights, or have obtained all necessary consents;</li>
  <li>Interfere with other users' use and/or enjoyment of the Service; and/or</li>
  <li>Store any content or materials from the Service on a server or any other storage device, or create any database by systematically downloading and/or storing any content or materials from the Service.</li>
</ol>
<p>We reserve the right, but have no obligation, to access your user account and/or monitor your access to and use of the Service from time to time without notice to you, to determine whether you are complying with any applicable laws, regulations, and terms and conditions, including but not limited to these Terms of Use. We reserve the right to terminate your use of the Service, whether due to your breach of this Agreement or our suspicion of any breach of this Agreement by you (including but not limited to violation of any prohibited uses), or for any other reason we deem appropriate. Other than the limited, non-exclusive, personal, non-transferable, non-sublicensable and revocable license to use the Service in accordance with these Terms of Use, you will acquire absolutely no rights or licenses in or to the Service.</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">3. Input and Output Content</h3>
<p>You may provide user input or instructions to the Service ("Input Content") and may receive output content generated by the Service based on your Input Content ("Output Content"). You are fully responsible for all Input Content you provide, transmit or upload to the Service, and any Output Content created or generated therefrom. You shall ensure that all such Input Content and Output Content comply with these Terms of Use and any applicable laws. By submitting Input Content, you represent and warrant that you have all necessary rights, licenses and permissions to provide and use such Input Content in accordance with these Terms of Use, and that your use of the Service, including but not limited to the submission or uploading of Input Content, and/or the creation, generation and use of any Output Content, will not infringe any third party's rights and/or violate these Terms of Use and any applicable laws.</p>
<p>Without prejudice to applicable law and these Terms of Use, as between you and HKGAI: (a) you retain all rights, title and interest you may have or hold in your Input Content; and (b) HKGAI does not claim ownership of the Output Content and hereby assigns to you any rights, title and interest HKGAI may have in the Output Content. However, you acknowledge that because the Output Content is generated by artificial intelligence, due to the nature of the Service, the Output Content may not be unique and may be identical or similar to Output Content received by other users of the Service.</p>
<p>You agree to grant us a worldwide, non-exclusive, unconditional, royalty-free, transferable and perpetual right and license to use, analyze, communicate and/or transmit your Input Content and/or Output Content for the purposes of providing, maintaining, developing and improving our Service, complying with applicable laws and/or enforcing our Terms of Use, for which we shall have no obligation to refer to you, pay you or incur any liability to you. To the maximum extent permitted by law, you agree to waive any moral rights you may have in or relating to the Input Content and Output Content. If you do not wish your Input Content or Output Content to be used for any of the above purposes, you must immediately cease using the Service.</p>
<p>The Service is driven by artificial intelligence and based on machine learning and large language models, which are inherently probabilistic. Therefore, Output Content may sometimes contain factual inaccuracies, omissions, errors, or may be incomplete, inaccurate, outdated or misinterpreted. You acknowledge that Output Content does not represent the views of HKGAI. You should not treat any Output Content as an authoritative or reliable source of truth, factual information or professional advice. You are solely responsible for evaluating the accuracy, suitability, appropriateness and legality of any Output Content, including conducting human review before relying on and using the Output Content. You must not use any Output Content as the basis for any action or inaction, such as any decision that may have legal or other effects on individuals. You shall be solely responsible for any actions, inactions and/or decisions based on any Output Content, including but not limited to any consequences arising from the truthfulness, accuracy, reliability, suitability and/or confidentiality of the Output Content.</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. Intellectual Property</h3>
<p>Without prejudice to Section 3 above regarding ownership of Input Content and Output Content, any other materials and/or works used and/or provided as part of the Service and/or in connection with the Service (including but not limited to text, images, layout design, user interface, graphics, logos, icons, brands, data compilations, source code, object code, software and other proprietary materials contained in and/or related to the Service, and their arrangement or compilation (collectively "the Content")) are owned by us or licensed to us for limited use. The Content is protected by copyright, trademark, patent, design, trade secret and/or other proprietary rights and laws. Without our prior written consent, you have no rights in the Content and shall not, and shall not cause, assist or facilitate any third party to, copy, download, reproduce, modify, publish, transmit, upload, display, redistribute, store, communicate, commercially exploit, participate in the transfer or sale of, create derivative works from, or in any way distribute or exploit any of the Content, or otherwise infringe any person's intellectual property rights in using all or part of the Service or the Content. You agree not to use the Content in any manner other than as expressly permitted under these Terms of Use.</p>
<p>You further agree that, without prejudice to Section 3 above regarding our use of Input Content and Output Content, we may freely use, disclose, adopt and modify any other ideas, concepts, know-how, proposals, suggestions, comments and other communications and materials provided by you to us in connection with or on or through the Service ("Feedback"), for which we shall have no obligation to refer to you, pay you or incur any liability to you. You hereby waive and agree to waive any and all rights and claims, including but not limited to any consideration, fees, royalties, charges and/or other payments, in connection with our use, disclosure, adoption and/or modification of any or all of your Feedback.</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. Monitoring</h3>
<p>We do not actively monitor Input Content or Output Content submitted, entered, transmitted or sent by users to, on or through the Service, nor do we guarantee the accuracy, completeness, legality or quality of such content. However, we will consider complaints that Output Content provided on or through the Service is alleged to be infringing, inappropriate or illegal. The complainant is responsible for submitting all relevant information to substantiate their complaint and for providing us with all information we may request to support their complaint. Upon receipt of all relevant supporting evidence, we will process and investigate the complaint and will, in good faith, take appropriate action, which may include, but is not limited to, disabling, removing or taking down the allegedly infringing content and materials as we deem appropriate. We do not guarantee that we will take any action in circumstances we deem inappropriate, and we are not responsible for any act or omission in connection with such complaints. Furthermore, we reserve the right, in our sole and absolute discretion, as we deem appropriate and without warning, to remove or withhold any content, Input Content or Output Content from the Service.</p>
<p>Any complaints may be emailed to service@hkgai.org or sent in writing to Room 7028, 7/F, Lee Shau Kee Building, Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong. Any infringement complaint or notice should be submitted in writing and contain at least the following information:</p>
<ol type="a" style="list-style-type: lower-alpha; padding-left: 20px;">
  <li>Sufficient identification of the work claimed to have been infringed and the owner of such work;</li>
  <li>Sufficient identification of the activity or material claimed to be infringing or to be the subject of infringing activity, and reasonably sufficient information to enable us to locate the material or activity;</li>
  <li>A sufficient description of how the material or act infringes the rights of the rights holder;</li>
  <li>The complainant's address, contact telephone number or email address; and</li>
  <li>A statement that (i) to the best of the complainant's knowledge and belief, the information in the complaint is true and accurate; (ii) the complainant is the copyright owner or a person authorized to act on behalf of the copyright owner; and (iii) the complainant understands that he/she may incur criminal or civil liability for making false statements.</li>
</ol>
<p>We reserve the right to:</p>
<ol type="i" style="list-style-type: lower-roman; padding-left: 20px;">
  <li>Request further information to support a complaint;</li>
  <li>Disable, remove or take down any material that we believe may infringe any third party's copyright or other rights or violate any applicable law; and/or</li>
  <li>Restrict access to the Service or access from the Service to other places for any user whom we believe is infringing any rights of others, and take other actions.</li>
</ol>`,
    'privacy.title': 'HKChat Privacy Policy',
    'privacy.content': `<p>HKChat Privacy Policy</p>
<p>Last Updated: May 9, 2025</p>
<p>This document explains how Hong Kong Generative AI Research and Development Centre Limited (hereinafter referred to as "HKGAI", "we" or "the Company") collects, uses, stores, discloses and protects personal data relating to you (hereinafter referred to as "you"), and your rights under the Personal Data (Privacy) Ordinance (Cap. 486, Laws of Hong Kong, hereinafter referred to as "PDPO") and other applicable laws. This policy forms an integral part of the "HKChat Terms of Service"; if you intend to use or continue to use this Service, please read and fully understand this policy in detail. If you do not agree to any terms of this policy, please immediately stop using and uninstall the relevant applications.</p>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">Skeptical Reminder</strong>: We only collect data necessary for actual operations. If any information seems redundant, please contact us immediately to raise questions.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">2. Data Collection and Usage Purposes</h3>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>Provide core functions: Identity verification, generate chat responses, push notifications.</li>
  <li>Operations and security: Fault diagnosis, error tracking, abuse detection, backup and recovery.</li>
  <li>Product improvement: Machine learning model training, feature testing, statistical analysis. We may conduct anonymized sample analysis of input and output content.</li>
  <li>Regulatory compliance: Comply with PDPO, anti-money laundering (AML), counter-terrorist financing (CFT) and other applicable laws.</li>
  <li>Marketing and promotion (optional): Send product updates and event information via email or app notifications; you can unsubscribe at any time.</li>
  <li>Corporate transactions: For due diligence and transfer operations in case of mergers, reorganizations or asset sales.</li>
</ol>

<p>⸻</p>

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
<p><strong class="font-semibold text-gray-900">Truth be told</strong>: We will not sell your personal data, nor allow third parties to use it for independent marketing unless explicit consent is obtained in advance.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">4. Cross-border Data Transfer</h3>
<p>To achieve global content distribution and flexible computing power, this Service may transfer data to regions outside Hong Kong (including but not limited to Singapore and the United States). We will implement safeguards equivalent to Hong Kong standards in accordance with Section 33 of the PDPO, such as EU Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs).</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">5. Data Retention Period</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Account data: Retained for at least 7 years from the last use of the service to comply with regulatory and statistical needs.</li>
  <li>Chat records: Stored with hash indexing for no more than 24 months for model security monitoring and accountability; automatically deleted or anonymized upon expiration.</li>
  <li>Backups: Retained for a maximum of 180 days in encrypted storage before rotational deletion.</li>
</ul>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">6. Data Security</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Encryption: TLS 1.3 transmission encryption; static data using AES-256 or equivalent encryption.</li>
  <li>Access control: Zero-trust architecture, role-based authorization (RBAC), multi-factor authentication (MFA).</li>
  <li>Audit: Regular penetration testing, SOC 2 and ISO 27001 standards.</li>
</ul>
<p>However, no matter how rigorous the measures, network transmission is not absolutely secure; if security incidents are discovered, we will notify affected users and regulatory agencies within a reasonable time.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">7. Your Rights</h3>
<p>Under the PDPO and (if applicable) GDPR and other laws, you have the right to:</p>
<ol style="list-style-type: decimal; padding-left: 20px;">
  <li>Access: Request copies of personal data we hold about you.</li>
  <li>Correction: Request correction of inaccurate or outdated data.</li>
  <li>Deletion / Anonymization: Request deletion or cessation of processing subject to legal retention requirements.</li>
  <li>Restriction / Objection to processing: Object to direct marketing or specific purposes.</li>
  <li>Data portability: Request transfer in structured, commonly used and machine-readable format.</li>
  <li>Withdraw consent: For consent-based processing, consent can be withdrawn at any time; withdrawal does not affect the lawfulness of processing based on consent before withdrawal.</li>
</ol>
<p>Requests can be made via service@hkgai.org, and we will respond within 40 days. If you believe we have not handled your request properly, you can complain to the Privacy Commissioner for Personal Data (PCPD) in Hong Kong.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">8. Children's Privacy</h3>
<p>This Service is only for persons aged 18 or above. If you are under 18, you must have the consent of a legal guardian and register as a guardian. If we learn that we have collected any minor's data without parental consent, we will delete it immediately.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">9. Cookies and Similar Technologies</h3>
<p>We use Cookies, SDKs, pixel tags and local storage to:</p>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Record login status, preferences and language;</li>
  <li>Conduct traffic analysis and performance monitoring;</li>
  <li>Provide personalized content and selective marketing.</li>
</ul>
<p>You can refuse some or all Cookies in your browser or device settings, but this may affect the service experience.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">10. Policy Updates</h3>
<p>We may revise this policy from time to time due to legal, technical or business needs. Material changes will be announced in the app or sent to registered emails before taking effect. If you continue to use the service after the changes take effect, you are deemed to accept the updated policy.</p>

<p>⸻</p>

<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">11. Contact Information</h3>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Email: service@hkgai.org</li>
  <li>Mailing address: Room 7028, 7/F, Lee Shau Kee Building, Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong</li>
</ul>
<p>If you have any questions, requests or complaints about this policy, please feel free to contact us at any time. We believe privacy protection is the foundation of sustainable AI services, but we also encourage users to maintain a healthy "zero trust" mindset, being cautious about any data requests or output content, and raising questions when necessary. We will continue to self-examine and openly improve to ensure protection is not just a paper promise.</p>`
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
    // Basic fallback to the key itself if translation is missing,
    // or you could default to 'en' or 'zh-CN' if a specific language's key is missing.
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};