export type Language = "en" | "ph" | "jp" | "kr" | "cn";

export const languages: { code: Language; label: string; flag: string; countryCode: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸", countryCode: "US" },
  { code: "ph", label: "Filipino", flag: "🇵🇭", countryCode: "PH" },
  { code: "jp", label: "日本語", flag: "🇯🇵", countryCode: "JP" },
  { code: "kr", label: "한국어", flag: "🇰🇷", countryCode: "KR" },
  { code: "cn", label: "中文", flag: "🇨🇳", countryCode: "CN" },
];

export const translations = {
  en: {
    nav: {
      modules: "Modules",
      features: "Features",
      testimonials: "Testimonials",
      faq: "FAQ",
      login: "Log in",
    },
    hero: {
      headline: "Make your business systematic and easy to manage",
      subtitle:
        "We provide our clients with a wide range of services, including enterprise-wide organizational structure, personnel management, task management, finance and warehouse management, and many other facilities.",
      cta: "Submit your application",
    },
    moduleTabs: {
      taskManagement: "Task Management",
      crm: "CRM",
      hrManagement: "HR Management",
      finance: "Finance",
      contracts: "Contracts",
      warehouse: "Warehouse",
      lms: "LMS",
    },
    problems: {
      sectionLabel: "Common Problems",
      heading: "Why businesses need a unified ERP",
      subtitle: "These are the most common operational challenges that veenERP solves for our clients.",
      items: [
        {
          heading: "Issues with the Organizational Structure",
          body: "Many businesses struggle with unclear hierarchies and responsibilities. Without a proper organizational structure, communication breaks down and accountability is lost, leading to inefficiencies across departments.",
        },
        {
          heading: "Lack of control and monitoring over employee tasks",
          body: "Without centralized task management, managers lose visibility into what employees are working on. Deadlines are missed with no clear audit trail, causing delays in project delivery and customer dissatisfaction.",
        },
        {
          heading: "No clear plan or system for employee skill development",
          body: "Talent development is often neglected when companies lack a learning management system. Without structured training, employee skills stagnate and companies fail to build the workforce they need to grow.",
        },
        {
          heading: "Failure to keep track of enterprise expenses",
          body: "Failure to organize cost optimization efforts includes not recording every expense made by the enterprise and not conducting periodic analyses of expenses. This is one of the main factors that leads to the company being trapped in a cycle of financial difficulties.",
        },
      ],
    },
    features: {
      taskManagement: {
        label: "Task Management",
        heading: "Increase your team's efficiency with structured task management",
        body: "Organize your team's work seamlessly. Assign tasks, set priorities and deadlines, track progress in real time, and ensure every project is delivered on time — all in one clear, intuitive interface.",
        link: "Learn more",
      },
      crm: {
        label: "CRM",
        heading: "Improve your customer relationships and strategic approach",
        body: "Enhance your customer relationships with an effective CRM system. It allows for seamless management of lead managers, call center agents, and sales funnels.",
        link: "Learn more",
      },
      hr: {
        label: "HR Management",
        heading: "Make your HR management easier by improving your management skills",
        body: "By enhancing your abilities, you can streamline HR processes, effectively handle employee relations, improve organizational efficiency, and foster a positive workplace culture.",
        link: "Learn more",
      },
      finance: {
        label: "Finance",
        heading: "Keep full control over your company's financial operations",
        body: "Monitor income, expenses, and profit in real time. Automate financial reports, manage budgets, and gain insights that help you make confident, data-driven business decisions.",
        link: "Learn more",
      },
      contracts: {
        label: "Contracts",
        heading: "Manage all your contracts efficiently in one place",
        body: "Track contract status, renewal dates, and obligations across all your business relationships. Eliminate lost agreements and missed deadlines with a centralized contract management system.",
        link: "Learn more",
      },
      warehouse: {
        label: "Warehouse",
        heading: "Optimize your warehouse operations and inventory control",
        body: "Get real-time visibility into your stock levels, automate reorder points, track goods movement, and eliminate inventory discrepancies with a powerful warehouse management system.",
        link: "Learn more",
      },
      lms: {
        label: "LMS",
        heading: "Build a skilled and capable workforce with structured learning",
        body: "Create and manage training programs, track employee progress, and ensure your team stays up to date with the skills and knowledge needed to drive business growth.",
        link: "Learn more",
      },
    },
    testimonials: {
      sectionLabel: "Testimonials",
      heading: "What our clients say",
      subtitle: "Hear from businesses that have transformed their operations with veenERP.",
      items: [
        {
          quote:
            "veenERP has completely transformed how we manage our operations. The task management and HR modules alone have saved us over 20 hours per week.",
          name: "Maria Santos",
          role: "COO, PhilFirst Trading",
        },
        {
          quote:
            "The finance and warehouse modules are incredibly powerful. We now have full visibility into our inventory and cash flow in real time.",
          name: "Jun Yamamoto",
          role: "CFO, AsiaLink Corp",
        },
        {
          quote:
            "Implementation was smooth and the support team was excellent. We went live in under 2 weeks and have never looked back.",
          name: "David Kim",
          role: "CEO, KoreaTech Solutions",
        },
      ],
    },
    faq: {
      sectionLabel: "FAQ",
      heading: "Common questions",
      subtitle: "Everything you need to know before getting started.",
      items: [
        {
          q: "Can I use veenERP on multiple devices?",
          a: "Yes. veenERP is a fully web-based platform that works on any device — desktop, tablet, or smartphone. Access your data securely from anywhere, anytime.",
        },
        {
          q: "How secure is my company's data?",
          a: "Security is our highest priority. We use end-to-end encryption, role-based access control, daily encrypted backups, and two-factor authentication. Our infrastructure is hosted on SOC 2-aligned cloud servers.",
        },
        {
          q: "What payment options are available?",
          a: "We accept monthly and annual payment plans. Annual plans include a discount. We support major credit cards, online banking, and enterprise invoicing for larger organizations.",
        },
        {
          q: "What languages does veenERP support?",
          a: "veenERP supports English, Filipino, Japanese, Korean, and Chinese (Simplified). You can switch languages from the platform's settings at any time.",
        },
        {
          q: "Is there a free trial available?",
          a: "Yes. All plans include a 14-day free trial with no credit card required. You can explore all features and decide if veenERP is the right fit for your business.",
        },
        {
          q: "How long does implementation typically take?",
          a: "Most businesses go live within 1–2 weeks for standard configurations. Our team provides dedicated onboarding support and training throughout the process.",
        },
      ],
    },
    cta: {
      heading: "Ready to get started?",
      subtitle: "Submit your application and our team will reach out within 24 hours.",
      phoneLabel: "Phone number",
      phonePlaceholder: "+1 (555) 000-0000",
      directionLabel: "Company direction",
      directionPlaceholder: "e.g. Retail, Manufacturing, Finance...",
      submitButton: "Submit your application",
      submittedHeading: "Thank you!",
      submittedBody: "We've received your application and will contact you within 24 hours.",
    },
    footer: {
      tagline: "The enterprise resource planning platform built for modern, growing businesses.",
      navHeading: "Navigation",
      links: {
        modules: "Modules",
        features: "Features",
        testimonials: "Testimonials",
        faq: "FAQ",
        privacy: "Privacy Policy",
      },
      contactHeading: "Contact",
      phone: "+1 (555) 021-0000",
      email: "info@veenerp.com",
      address: "San Francisco, CA, United States",
      copyright: "© {year} veenERP. All rights reserved.",
      systemsOperational: "All systems operational",
    },
  },

  ph: {
    nav: {
      modules: "Mga Module",
      features: "Mga Feature",
      testimonials: "Mga Testimonya",
      faq: "FAQ",
      login: "Mag-log in",
    },
    hero: {
      headline: "Gawing sistematiko at madaling pamahalaan ang iyong negosyo",
      subtitle:
        "Nagbibigay kami sa aming mga kliyente ng malawak na hanay ng mga serbisyo, kabilang ang organisasyonal na istruktura, pamamahala ng tauhan, pamamahala ng gawain, pananalapi at pamamahala ng bodega, at marami pang ibang pasilidad.",
      cta: "Isumite ang iyong aplikasyon",
    },
    moduleTabs: {
      taskManagement: "Pamamahala ng Gawain",
      crm: "CRM",
      hrManagement: "Pamamahala ng HR",
      finance: "Pananalapi",
      contracts: "Mga Kontrata",
      warehouse: "Bodega",
      lms: "LMS",
    },
    problems: {
      sectionLabel: "Mga Karaniwang Problema",
      heading: "Bakit kailangan ng mga negosyo ang isang pinagsamang ERP",
      subtitle: "Ito ang mga pinakakaraniwang hamon sa operasyon na nilulutas ng veenERP para sa aming mga kliyente.",
      items: [
        {
          heading: "Mga Isyu sa Organisasyonal na Istruktura",
          body: "Maraming negosyo ang nahihirapan sa malinaw na hierarchy at responsibilidad. Nang walang wastong organisasyonal na istruktura, nasisira ang komunikasyon at nawawala ang pananagutan.",
        },
        {
          heading: "Kawalan ng kontrol at pagmamasid sa mga gawain ng empleyado",
          body: "Nang walang sentralisadong pamamahala ng gawain, nawawalan ang mga manager ng visibility sa ginagawa ng mga empleyado. Nami-miss ang mga deadline nang walang malinaw na audit trail.",
        },
        {
          heading: "Walang malinaw na plano o sistema para sa pagpapaunlad ng kasanayan ng empleyado",
          body: "Ang pagpapaunlad ng talento ay madalas na napapabayaan kapag ang mga kumpanya ay walang sistema ng pamamahala ng pagkatuto. Nang walang structured na pagsasanay, nag-stagnate ang mga kasanayan ng empleyado.",
        },
        {
          heading: "Pagkabigo sa pagsubaybay ng mga gastusin ng negosyo",
          body: "Kasama sa pagkabigo sa pag-aayos ng mga pagsisikap sa pag-optimize ng gastos ang hindi pagtatala ng bawat gastos ng negosyo at hindi pagsasagawa ng pana-panahong pagsusuri ng mga gastos.",
        },
      ],
    },
    features: {
      taskManagement: {
        label: "Pamamahala ng Gawain",
        heading: "Pataasin ang kahusayan ng iyong koponan sa pamamagitan ng nakastrukturang pamamahala ng gawain",
        body: "Ayusin ang trabaho ng iyong koponan nang maayos. Magtalaga ng mga gawain, magtakda ng mga priority at deadline, subaybayan ang progreso sa real time.",
        link: "Matuto pa",
      },
      crm: {
        label: "CRM",
        heading: "Pagbutihin ang iyong mga relasyon sa customer at estratehikong pamamaraan",
        body: "Palakasin ang iyong mga relasyon sa customer gamit ang isang epektibong CRM system. Nagbibigay-daan ito para sa seamless na pamamahala ng mga lead manager, ahente ng call center, at mga sales funnel.",
        link: "Matuto pa",
      },
      hr: {
        label: "Pamamahala ng HR",
        heading: "Gawing mas madali ang iyong pamamahala ng HR sa pamamagitan ng pagpapahusay ng iyong mga kasanayan",
        body: "Sa pamamagitan ng pagpapahusay ng iyong mga kakayahan, maaari mong i-streamline ang mga proseso ng HR, epektibong hawakan ang mga relasyon ng empleyado, at mapaunlad ang isang positibong kultura sa lugar ng trabaho.",
        link: "Matuto pa",
      },
      finance: {
        label: "Pananalapi",
        heading: "Panatilihin ang buong kontrol sa mga operasyong pinansyal ng iyong kumpanya",
        body: "Subaybayan ang kita, gastos, at kita sa real time. I-automate ang mga ulat sa pananalapi, pamahalaan ang mga badyet, at makakuha ng mga insight para sa mga desisyon na batay sa data.",
        link: "Matuto pa",
      },
      contracts: {
        label: "Mga Kontrata",
        heading: "Pamahalaan ang lahat ng iyong mga kontrata nang mahusay sa isang lugar",
        body: "Subaybayan ang status ng kontrata, mga petsa ng pag-renew, at mga obligasyon sa lahat ng iyong mga relasyon sa negosyo. Alisin ang mga nawalag na kasunduan at napalampas na mga deadline.",
        link: "Matuto pa",
      },
      warehouse: {
        label: "Bodega",
        heading: "I-optimize ang iyong mga operasyon sa bodega at kontrol sa imbentaryo",
        body: "Makakuha ng real-time na visibility sa iyong mga antas ng stock, i-automate ang mga reorder point, subaybayan ang paggalaw ng mga kalakal.",
        link: "Matuto pa",
      },
      lms: {
        label: "LMS",
        heading: "Bumuo ng isang mahusay at may kakayahang lakas-paggawa sa pamamagitan ng nakastrukturang pagkatuto",
        body: "Lumikha at pamahalaan ng mga programa sa pagsasanay, subaybayan ang progreso ng empleyado, at tiyaking napapanahon ang iyong koponan sa mga kasanayan.",
        link: "Matuto pa",
      },
    },
    testimonials: {
      sectionLabel: "Mga Testimonya",
      heading: "Ano ang sinasabi ng aming mga kliyente",
      subtitle: "Marinig mula sa mga negosyong nagbago ng kanilang mga operasyon gamit ang veenERP.",
      items: [
        {
          quote: "Ganap na binago ng veenERP ang aming pamamahala ng operasyon. Ang task management at HR modules ay nakatipid sa amin ng mahigit 20 oras bawat linggo.",
          name: "Maria Santos",
          role: "COO, PhilFirst Trading",
        },
        {
          quote: "Ang finance at warehouse modules ay napaka-kapangyarihan. Mayroon na kaming buong visibility sa aming imbentaryo at daloy ng pera sa real time.",
          name: "Jun Yamamoto",
          role: "CFO, AsiaLink Corp",
        },
        {
          quote: "Ang implementasyon ay maayos at ang support team ay kahanga-hanga. Nag-live kami sa loob ng wala pang 2 linggo.",
          name: "David Kim",
          role: "CEO, KoreaTech Solutions",
        },
      ],
    },
    faq: {
      sectionLabel: "FAQ",
      heading: "Mga karaniwang tanong",
      subtitle: "Lahat ng kailangan mong malaman bago magsimula.",
      items: [
        {
          q: "Maaari ko bang gamitin ang veenERP sa maraming device?",
          a: "Oo. Ang veenERP ay isang ganap na web-based na platform na gumagana sa anumang device — desktop, tablet, o smartphone. I-access ang iyong data nang ligtas mula sa kahit saan, anumang oras.",
        },
        {
          q: "Gaano kaligtas ang data ng aking kumpanya?",
          a: "Ang seguridad ang aming pinakamataas na priyoridad. Gumagamit kami ng end-to-end na encryption, role-based access control, araw-araw na naka-encrypt na mga backup, at two-factor authentication.",
        },
        {
          q: "Anong mga opsyon sa pagbabayad ang magagamit?",
          a: "Tumatanggap kami ng buwanan at taunang mga plano sa pagbabayad. Sumusuporta kami sa mga pangunahing credit card, online banking, at enterprise invoicing para sa malalaking organisasyon.",
        },
        {
          q: "Anong mga wika ang sinusuportahan ng veenERP?",
          a: "Sinusuportahan ng veenERP ang Ingles, Filipino, Hapon, Koreano, at Tsino (Pinasimple). Maaari kang lumipat ng mga wika mula sa mga setting ng platform anumang oras.",
        },
        {
          q: "Mayroon bang libreng pagsubok?",
          a: "Oo. Lahat ng mga plano ay may kasamang 14-araw na libreng pagsubok nang walang credit card. Maaari mong tuklasin ang lahat ng feature at magpasya kung ang veenERP ay angkop para sa iyong negosyo.",
        },
        {
          q: "Gaano katagal ang implementasyon?",
          a: "Karamihan sa mga negosyo ay live sa loob ng 1–2 linggo para sa mga karaniwang configuration. Nagbibigay ang aming koponan ng dedicated na suporta sa onboarding at pagsasanay sa buong proseso.",
        },
      ],
    },
    cta: {
      heading: "Handa na bang magsimula?",
      subtitle: "Isumite ang iyong aplikasyon at makikipag-ugnayan sa iyo ang aming koponan sa loob ng 24 na oras.",
      phoneLabel: "Numero ng telepono",
      phonePlaceholder: "+63 (9XX) XXX-XXXX",
      directionLabel: "Direksyon ng kumpanya",
      directionPlaceholder: "hal. Tingi, Pagmamanupaktura, Pananalapi...",
      submitButton: "Isumite ang iyong aplikasyon",
      submittedHeading: "Salamat!",
      submittedBody: "Natanggap namin ang iyong aplikasyon at makikipag-ugnayan sa iyo sa loob ng 24 na oras.",
    },
    footer: {
      tagline: "Ang enterprise resource planning platform na itinayo para sa mga modernong, lumalaking negosyo.",
      navHeading: "Nabigasyon",
      links: {
        modules: "Mga Module",
        features: "Mga Feature",
        testimonials: "Mga Testimonya",
        faq: "FAQ",
        privacy: "Patakaran sa Privacy",
      },
      contactHeading: "Makipag-ugnayan",
      phone: "+1 (555) 021-0000",
      email: "info@veenerp.com",
      address: "San Francisco, CA, Estados Unidos",
      copyright: "© {year} veenERP. Lahat ng karapatan ay nakalaan.",
      systemsOperational: "Lahat ng system ay gumagana",
    },
  },

  jp: {
    nav: {
      modules: "モジュール",
      features: "機能",
      testimonials: "お客様の声",
      faq: "よくある質問",
      login: "ログイン",
    },
    hero: {
      headline: "ビジネスを体系的で管理しやすくする",
      subtitle:
        "企業全体の組織構造、人材管理、タスク管理、財務・倉庫管理など、幅広いサービスをご提供します。",
      cta: "申し込みを送信する",
    },
    moduleTabs: {
      taskManagement: "タスク管理",
      crm: "CRM",
      hrManagement: "HR管理",
      finance: "財務",
      contracts: "契約",
      warehouse: "倉庫",
      lms: "LMS",
    },
    problems: {
      sectionLabel: "よくある課題",
      heading: "企業が統合ERPを必要とする理由",
      subtitle: "veenERPがクライアントのために解決する最も一般的な業務上の課題をご紹介します。",
      items: [
        {
          heading: "組織構造の問題",
          body: "多くの企業が明確な階層と責任の所在に苦しんでいます。適切な組織構造がなければ、コミュニケーションが破綻し、説明責任が失われ、部門をまたいだ非効率が生じます。",
        },
        {
          heading: "従業員タスクの管理・監視不足",
          body: "集中型のタスク管理がないと、管理職は従業員が何をしているかを把握できなくなります。明確な監査証跡もなくデッドラインが守られず、プロジェクトの遅延や顧客の不満につながります。",
        },
        {
          heading: "従業員スキル開発のための明確な計画やシステムがない",
          body: "学習管理システムがないと、人材育成が疎かになりがちです。体系的なトレーニングがなければ、従業員のスキルは停滞し、成長に必要な人材を確保できません。",
        },
        {
          heading: "企業支出の把握不足",
          body: "コスト最適化の取り組みの整理に失敗することには、企業が行うすべての支出を記録しないこと、定期的な支出分析を行わないことが含まれます。これが財務困難の悪循環にはまる主な要因の1つです。",
        },
      ],
    },
    features: {
      taskManagement: {
        label: "タスク管理",
        heading: "体系的なタスク管理でチームの効率を向上させる",
        body: "チームの業務をシームレスに整理します。タスクの割り当て、優先度と期限の設定、リアルタイムの進捗追跡で、すべてのプロジェクトを期限内に完了させます。",
        link: "詳細を見る",
      },
      crm: {
        label: "CRM",
        heading: "顧客関係と戦略的アプローチを改善する",
        body: "効果的なCRMシステムで顧客関係を強化します。リードマネージャー、コールセンターエージェント、セールスファネルのシームレスな管理を実現します。",
        link: "詳細を見る",
      },
      hr: {
        label: "HR管理",
        heading: "HR管理を簡単にすることで管理スキルを向上させる",
        body: "能力を向上させることで、HRプロセスの効率化、従業員関係の適切な管理、組織効率の改善、ポジティブな職場文化の育成が可能になります。",
        link: "詳細を見る",
      },
      finance: {
        label: "財務",
        heading: "会社の財務業務を完全にコントロールする",
        body: "収益、支出、利益をリアルタイムで監視します。財務レポートを自動化し、予算を管理し、データに基づいた自信ある意思決定を支援するインサイトを得ます。",
        link: "詳細を見る",
      },
      contracts: {
        label: "契約",
        heading: "すべての契約を1か所で効率的に管理する",
        body: "すべてのビジネス関係における契約状況、更新日、義務を追跡します。集中型契約管理システムで、紛失した契約書や期限切れを排除します。",
        link: "詳細を見る",
      },
      warehouse: {
        label: "倉庫",
        heading: "倉庫業務と在庫管理を最適化する",
        body: "在庫レベルをリアルタイムで可視化し、補充ポイントを自動化し、商品の移動を追跡し、強力な倉庫管理システムで在庫の不一致を排除します。",
        link: "詳細を見る",
      },
      lms: {
        label: "LMS",
        heading: "体系的な学習で熟練した有能な人材を育成する",
        body: "トレーニングプログラムを作成・管理し、従業員の進捗を追跡し、チームがビジネス成長に必要なスキルと知識を維持できるようにします。",
        link: "詳細を見る",
      },
    },
    testimonials: {
      sectionLabel: "お客様の声",
      heading: "お客様のご意見",
      subtitle: "veenERPで業務を変革した企業の声をご紹介します。",
      items: [
        {
          quote: "veenERPは私たちの運営管理を完全に変革しました。タスク管理とHRモジュールだけで、週に20時間以上を節約できています。",
          name: "マリア・サントス",
          role: "COO、PhilFirst Trading",
        },
        {
          quote: "財務と倉庫モジュールは非常に強力です。在庫とキャッシュフローをリアルタイムで完全に把握できるようになりました。",
          name: "山本 純",
          role: "CFO、AsiaLink Corp",
        },
        {
          quote: "導入はスムーズで、サポートチームは素晴らしかった。2週間以内に本番稼動し、以来振り返ったことはありません。",
          name: "デビッド・キム",
          role: "CEO、KoreaTech Solutions",
        },
      ],
    },
    faq: {
      sectionLabel: "よくある質問",
      heading: "よくある質問",
      subtitle: "始める前に知っておくべきことすべて。",
      items: [
        {
          q: "複数のデバイスでveenERPを使用できますか？",
          a: "はい。veenERPは完全にWebベースのプラットフォームで、デスクトップ、タブレット、スマートフォンなど、あらゆるデバイスで動作します。どこからでもいつでも安全にデータにアクセスできます。",
        },
        {
          q: "会社のデータはどのくらい安全ですか？",
          a: "セキュリティは最優先事項です。エンドツーエンド暗号化、ロールベースのアクセス制御、毎日の暗号化バックアップ、二要素認証を実装しています。",
        },
        {
          q: "どのような支払い方法が利用できますか？",
          a: "月払いおよび年払いプランをご用意しています。年払いプランには割引があります。主要なクレジットカード、オンラインバンキング、大規模組織向けのエンタープライズ請求に対応しています。",
        },
        {
          q: "veenERPはどの言語をサポートしていますか？",
          a: "veenERPは英語、フィリピン語、日本語、韓国語、中国語（簡体字）をサポートしています。プラットフォームの設定からいつでも言語を切り替えることができます。",
        },
        {
          q: "無料トライアルはありますか？",
          a: "はい。すべてのプランにクレジットカード不要の14日間無料トライアルが含まれています。すべての機能を試して、veenERPがお客様のビジネスに最適かどうかをご確認ください。",
        },
        {
          q: "導入にはどのくらいの時間がかかりますか？",
          a: "標準的な設定の場合、ほとんどの企業が1〜2週間以内に本番稼動します。チームが導入プロセス全体を通じて専任のオンボーディングサポートとトレーニングを提供します。",
        },
      ],
    },
    cta: {
      heading: "始める準備はできましたか？",
      subtitle: "申し込みを送信してください。私たちのチームが24時間以内にご連絡します。",
      phoneLabel: "電話番号",
      phonePlaceholder: "+81 XX-XXXX-XXXX",
      directionLabel: "会社の方向性",
      directionPlaceholder: "例：小売、製造、金融...",
      submitButton: "申し込みを送信する",
      submittedHeading: "ありがとうございます！",
      submittedBody: "お申し込みを受け付けました。24時間以内にご連絡いたします。",
    },
    footer: {
      tagline: "現代の成長するビジネスのために構築されたエンタープライズリソースプランニングプラットフォーム。",
      navHeading: "ナビゲーション",
      links: {
        modules: "モジュール",
        features: "機能",
        testimonials: "お客様の声",
        faq: "よくある質問",
        privacy: "プライバシーポリシー",
      },
      contactHeading: "お問い合わせ",
      phone: "+1 (555) 021-0000",
      email: "info@veenerp.com",
      address: "サンフランシスコ、カリフォルニア州、米国",
      copyright: "© {year} veenERP. All rights reserved.",
      systemsOperational: "全システム正常稼働中",
    },
  },

  kr: {
    nav: {
      modules: "모듈",
      features: "기능",
      testimonials: "고객 후기",
      faq: "자주 묻는 질문",
      login: "로그인",
    },
    hero: {
      headline: "비즈니스를 체계적으로, 쉽게 관리하세요",
      subtitle:
        "기업 전반의 조직 구조, 인사 관리, 업무 관리, 재무 및 창고 관리 등 다양한 서비스를 제공합니다.",
      cta: "신청서 제출하기",
    },
    moduleTabs: {
      taskManagement: "업무 관리",
      crm: "CRM",
      hrManagement: "HR 관리",
      finance: "재무",
      contracts: "계약",
      warehouse: "창고",
      lms: "LMS",
    },
    problems: {
      sectionLabel: "일반적인 문제",
      heading: "기업이 통합 ERP를 필요로 하는 이유",
      subtitle: "veenERP가 고객에게 해결하는 가장 일반적인 운영 과제입니다.",
      items: [
        {
          heading: "조직 구조 문제",
          body: "많은 기업이 명확한 계층 구조와 책임 분담에 어려움을 겪고 있습니다. 적절한 조직 구조 없이는 커뮤니케이션이 무너지고 책임 소재가 불분명해져 부서 전반에 걸쳐 비효율이 발생합니다.",
        },
        {
          heading: "직원 업무에 대한 통제 및 모니터링 부재",
          body: "중앙화된 업무 관리 없이는 관리자가 직원의 업무 현황을 파악하기 어렵습니다. 명확한 감사 추적 없이 마감일이 지켜지지 않아 프로젝트 지연과 고객 불만이 발생합니다.",
        },
        {
          heading: "직원 역량 개발을 위한 명확한 계획이나 시스템 부재",
          body: "학습 관리 시스템이 없으면 인재 개발이 소홀해지기 쉽습니다. 체계적인 교육 없이는 직원 역량이 정체되어 성장에 필요한 인력을 확보하지 못하게 됩니다.",
        },
        {
          heading: "기업 지출 추적 실패",
          body: "비용 최적화 노력을 정리하지 못하는 것은 기업의 모든 지출을 기록하지 않고 주기적인 지출 분석을 수행하지 않는 것을 포함합니다. 이것이 회사가 재정적 어려움의 악순환에 빠지게 되는 주요 요인 중 하나입니다.",
        },
      ],
    },
    features: {
      taskManagement: {
        label: "업무 관리",
        heading: "체계적인 업무 관리로 팀 효율을 높이세요",
        body: "팀의 업무를 원활하게 정리하세요. 업무 할당, 우선순위 및 마감일 설정, 실시간 진행 상황 추적으로 모든 프로젝트를 제때 완료하세요.",
        link: "자세히 보기",
      },
      crm: {
        label: "CRM",
        heading: "고객 관계와 전략적 접근 방식을 개선하세요",
        body: "효과적인 CRM 시스템으로 고객 관계를 강화하세요. 영업 담당자, 콜센터 상담원, 세일즈 퍼널의 원활한 관리가 가능합니다.",
        link: "자세히 보기",
      },
      hr: {
        label: "HR 관리",
        heading: "관리 역량을 향상시켜 HR 관리를 더 쉽게 만드세요",
        body: "역량을 강화함으로써 HR 프로세스를 간소화하고, 직원 관계를 효과적으로 관리하며, 조직 효율성을 높이고 긍정적인 직장 문화를 조성할 수 있습니다.",
        link: "자세히 보기",
      },
      finance: {
        label: "재무",
        heading: "회사의 재무 운영을 완전히 통제하세요",
        body: "수익, 지출, 이익을 실시간으로 모니터링하세요. 재무 보고서를 자동화하고, 예산을 관리하며, 데이터 기반 의사결정을 지원하는 인사이트를 얻으세요.",
        link: "자세히 보기",
      },
      contracts: {
        label: "계약",
        heading: "모든 계약을 한 곳에서 효율적으로 관리하세요",
        body: "모든 비즈니스 관계의 계약 상태, 갱신일, 의무 사항을 추적하세요. 중앙화된 계약 관리 시스템으로 분실된 계약서와 마감일 초과를 방지하세요.",
        link: "자세히 보기",
      },
      warehouse: {
        label: "창고",
        heading: "창고 운영과 재고 관리를 최적화하세요",
        body: "재고 수준을 실시간으로 파악하고, 재주문 시점을 자동화하며, 상품 이동을 추적하고, 강력한 창고 관리 시스템으로 재고 불일치를 해소하세요.",
        link: "자세히 보기",
      },
      lms: {
        label: "LMS",
        heading: "체계적인 학습으로 숙련된 인재를 육성하세요",
        body: "교육 프로그램을 만들고 관리하며, 직원 진행 사항을 추적하고, 팀이 비즈니스 성장에 필요한 역량을 유지할 수 있도록 하세요.",
        link: "자세히 보기",
      },
    },
    testimonials: {
      sectionLabel: "고객 후기",
      heading: "고객들의 이야기",
      subtitle: "veenERP로 운영을 혁신한 기업들의 이야기를 들어보세요.",
      items: [
        {
          quote: "veenERP는 저희의 운영 관리 방식을 완전히 바꿔놓았습니다. 업무 관리와 HR 모듈만으로도 주당 20시간 이상을 절약하고 있습니다.",
          name: "Maria Santos",
          role: "COO, PhilFirst Trading",
        },
        {
          quote: "재무 및 창고 모듈은 매우 강력합니다. 이제 재고와 현금 흐름을 실시간으로 완전히 파악할 수 있게 되었습니다.",
          name: "Jun Yamamoto",
          role: "CFO, AsiaLink Corp",
        },
        {
          quote: "도입이 원활했고 지원팀이 훌륭했습니다. 2주 이내에 운영을 시작했고 이후로 후회한 적이 없습니다.",
          name: "David Kim",
          role: "CEO, KoreaTech Solutions",
        },
      ],
    },
    faq: {
      sectionLabel: "자주 묻는 질문",
      heading: "자주 묻는 질문",
      subtitle: "시작하기 전에 알아야 할 모든 것.",
      items: [
        {
          q: "여러 기기에서 veenERP를 사용할 수 있나요?",
          a: "네. veenERP는 완전한 웹 기반 플랫폼으로 데스크톱, 태블릿, 스마트폰 등 모든 기기에서 작동합니다. 언제 어디서나 안전하게 데이터에 접근할 수 있습니다.",
        },
        {
          q: "회사 데이터는 얼마나 안전한가요?",
          a: "보안은 최우선 과제입니다. 종단간 암호화, 역할 기반 접근 제어, 매일 암호화된 백업, 이중 인증을 구현하고 있습니다.",
        },
        {
          q: "어떤 결제 방법을 사용할 수 있나요?",
          a: "월간 및 연간 결제 플랜을 제공합니다. 연간 플랜에는 할인이 포함됩니다. 주요 신용카드, 온라인 뱅킹, 대규모 조직을 위한 기업 청구서 발행을 지원합니다.",
        },
        {
          q: "veenERP는 어떤 언어를 지원하나요?",
          a: "veenERP는 영어, 필리핀어, 일본어, 한국어, 중국어(간체)를 지원합니다. 플랫폼 설정에서 언제든지 언어를 전환할 수 있습니다.",
        },
        {
          q: "무료 체험판이 있나요?",
          a: "네. 모든 플랜에는 신용카드 없이 14일 무료 체험이 포함되어 있습니다. 모든 기능을 사용해보고 veenERP가 적합한지 확인할 수 있습니다.",
        },
        {
          q: "도입에 얼마나 걸리나요?",
          a: "표준 구성의 경우 대부분의 기업이 1~2주 이내에 운영을 시작합니다. 팀이 전체 프로세스에 걸쳐 맞춤형 온보딩 지원과 교육을 제공합니다.",
        },
      ],
    },
    cta: {
      heading: "시작할 준비가 되셨나요?",
      subtitle: "신청서를 제출하시면 24시간 이내에 팀에서 연락드리겠습니다.",
      phoneLabel: "전화번호",
      phonePlaceholder: "+82 10-XXXX-XXXX",
      directionLabel: "회사 방향",
      directionPlaceholder: "예: 소매, 제조, 금융...",
      submitButton: "신청서 제출하기",
      submittedHeading: "감사합니다!",
      submittedBody: "신청서를 받았습니다. 24시간 이내에 연락드리겠습니다.",
    },
    footer: {
      tagline: "현대적이고 성장하는 비즈니스를 위해 구축된 기업 자원 계획 플랫폼.",
      navHeading: "내비게이션",
      links: {
        modules: "모듈",
        features: "기능",
        testimonials: "고객 후기",
        faq: "자주 묻는 질문",
        privacy: "개인정보 처리방침",
      },
      contactHeading: "연락처",
      phone: "+1 (555) 021-0000",
      email: "info@veenerp.com",
      address: "샌프란시스코, 캘리포니아, 미국",
      copyright: "© {year} veenERP. 모든 권리 보유.",
      systemsOperational: "모든 시스템 정상 운영 중",
    },
  },

  cn: {
    nav: {
      modules: "模块",
      features: "功能",
      testimonials: "客户评价",
      faq: "常见问题",
      login: "登录",
    },
    hero: {
      headline: "让您的业务系统化，轻松管理",
      subtitle:
        "我们为客户提供广泛的服务，包括企业级组织结构、人员管理、任务管理、财务和仓库管理等众多设施。",
      cta: "提交申请",
    },
    moduleTabs: {
      taskManagement: "任务管理",
      crm: "客户关系管理",
      hrManagement: "人力资源管理",
      finance: "财务",
      contracts: "合同",
      warehouse: "仓库",
      lms: "学习管理系统",
    },
    problems: {
      sectionLabel: "常见问题",
      heading: "企业为何需要统一的ERP系统",
      subtitle: "以下是veenERP为客户解决的最常见运营挑战。",
      items: [
        {
          heading: "组织结构问题",
          body: "许多企业在明确层级和职责方面存在困难。没有合适的组织结构，沟通就会崩溃，问责制就会丧失，导致各部门效率低下。",
        },
        {
          heading: "缺乏对员工任务的控制和监督",
          body: "没有集中式任务管理，管理人员就无法了解员工的工作内容。在没有明确审计追踪的情况下，截止日期被错过，导致项目交付延迟和客户不满。",
        },
        {
          heading: "没有明确的员工技能发展计划或系统",
          body: "当公司缺乏学习管理系统时，人才发展往往被忽视。没有结构化培训，员工技能停滞不前，企业无法建立所需的人才队伍。",
        },
        {
          heading: "无法追踪企业支出",
          body: "无法组织成本优化工作包括未记录企业的每一笔支出以及未进行定期的支出分析。这是导致公司陷入财务困境循环的主要因素之一。",
        },
      ],
    },
    features: {
      taskManagement: {
        label: "任务管理",
        heading: "通过结构化任务管理提升团队效率",
        body: "无缝整理团队工作。分配任务、设置优先级和截止日期、实时跟踪进度，确保每个项目按时完成——一切尽在一个直观的界面中。",
        link: "了解更多",
      },
      crm: {
        label: "客户关系管理",
        heading: "改善客户关系和战略方法",
        body: "通过有效的CRM系统增强客户关系。实现对销售人员、呼叫中心代理和销售漏斗的无缝管理。",
        link: "了解更多",
      },
      hr: {
        label: "人力资源管理",
        heading: "通过提升管理技能使HR管理更轻松",
        body: "通过提升能力，您可以简化HR流程，有效处理员工关系，提高组织效率，并培育积极的工作场所文化。",
        link: "了解更多",
      },
      finance: {
        label: "财务",
        heading: "全面掌控公司财务运营",
        body: "实时监控收入、支出和利润。自动化财务报告，管理预算，获取帮助您做出自信、数据驱动的商业决策的洞察。",
        link: "了解更多",
      },
      contracts: {
        label: "合同",
        heading: "在一处高效管理所有合同",
        body: "跟踪所有业务关系中的合同状态、续签日期和义务。通过集中合同管理系统消除丢失协议和错过截止日期的问题。",
        link: "了解更多",
      },
      warehouse: {
        label: "仓库",
        heading: "优化仓库运营和库存管理",
        body: "实时了解库存水平，自动化补货点，跟踪货物流动，通过强大的仓库管理系统消除库存差异。",
        link: "了解更多",
      },
      lms: {
        label: "学习管理系统",
        heading: "通过结构化学习建立熟练且有能力的劳动力",
        body: "创建和管理培训计划，跟踪员工进度，确保您的团队随时掌握推动业务增长所需的技能和知识。",
        link: "了解更多",
      },
    },
    testimonials: {
      sectionLabel: "客户评价",
      heading: "我们的客户怎么说",
      subtitle: "听听那些用veenERP改变运营的企业怎么说。",
      items: [
        {
          quote: "veenERP完全改变了我们管理运营的方式。仅任务管理和HR模块就每周为我们节省了20多个小时。",
          name: "Maria Santos",
          role: "首席运营官，PhilFirst Trading",
        },
        {
          quote: "财务和仓库模块非常强大。我们现在可以实时全面了解库存和现金流。",
          name: "Jun Yamamoto",
          role: "首席财务官，AsiaLink Corp",
        },
        {
          quote: "实施过程顺畅，支持团队非常出色。我们在不到2周内上线，从此一路顺风。",
          name: "David Kim",
          role: "首席执行官，KoreaTech Solutions",
        },
      ],
    },
    faq: {
      sectionLabel: "常见问题",
      heading: "常见问题",
      subtitle: "开始前您需要了解的一切。",
      items: [
        {
          q: "我可以在多个设备上使用veenERP吗？",
          a: "可以。veenERP是一个完全基于Web的平台，可在任何设备上运行——桌面、平板或智能手机。您可以随时随地安全访问数据。",
        },
        {
          q: "我的公司数据有多安全？",
          a: "安全是我们的最高优先级。我们实施端到端加密、基于角色的访问控制、每日加密备份和双因素身份验证。",
        },
        {
          q: "有哪些付款方式？",
          a: "我们提供月付和年付方案。年付方案享有折扣。我们支持主要信用卡、网络银行以及面向大型组织的企业发票。",
        },
        {
          q: "veenERP支持哪些语言？",
          a: "veenERP支持英语、菲律宾语、日语、韩语和中文（简体）。您可以随时从平台设置中切换语言。",
        },
        {
          q: "有免费试用吗？",
          a: "有。所有方案均包含14天免费试用，无需信用卡。您可以探索所有功能并决定veenERP是否适合您的业务。",
        },
        {
          q: "实施通常需要多长时间？",
          a: "大多数企业在标准配置下1-2周内即可上线。我们的团队在整个过程中提供专属的入职支持和培训。",
        },
      ],
    },
    cta: {
      heading: "准备好开始了吗？",
      subtitle: "提交您的申请，我们的团队将在24小时内与您联系。",
      phoneLabel: "电话号码",
      phonePlaceholder: "+86 XXX-XXXX-XXXX",
      directionLabel: "公司方向",
      directionPlaceholder: "例如：零售、制造、金融...",
      submitButton: "提交申请",
      submittedHeading: "谢谢！",
      submittedBody: "我们已收到您的申请，将在24小时内与您联系。",
    },
    footer: {
      tagline: "为现代化、成长型企业构建的企业资源规划平台。",
      navHeading: "导航",
      links: {
        modules: "模块",
        features: "功能",
        testimonials: "客户评价",
        faq: "常见问题",
        privacy: "隐私政策",
      },
      contactHeading: "联系我们",
      phone: "+1 (555) 021-0000",
      email: "info@veenerp.com",
      address: "美国加利福尼亚州旧金山",
      copyright: "© {year} veenERP. 保留所有权利。",
      systemsOperational: "所有系统正常运行",
    },
  },
};

export type Translations = typeof translations.en;
