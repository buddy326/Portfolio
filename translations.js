// Japanese text for every element marked with data-i18n="key" in index.html.
// English is read from the page itself, so only Japanese lives here.
const JA = {
  "page.title": "Aman Monga | ポートフォリオ",

  "nav.about": "自己紹介",
  "nav.experience": "スキル",
  "nav.projects": "プロジェクト",
  "nav.contact": "お問い合わせ",

  "hero.hello": "こんにちは、",
  "hero.role": "フルスタック開発者",
  "hero.cv": "CV（英語）",
  "hero.contact": "連絡先",

  "about.kicker": "はじめまして",
  "about.title": "自己紹介",
  "about.expTitle": "経験",
  "about.expBody": "2年以上<br />フルスタック開発",
  "about.eduTitle": "学歴",
  "about.eduBody": "ソフトウェア工学 学士<br />ビクトリア大学",
  "about.body":
    "カナダ出身のソフトウェアエンジニアです。RAGシステムやバックエンドAPIの構築から、直感的で使いやすいフロントエンドの開発まで、フルスタックとAI/MLの両分野で実務経験があります。" +
    "ただ動くだけでなく、きれいで本当に役立つコードを書くことを大切にしています。" +
    "仕事以外では、ハイキングやライブに出かけたり、ギターで新しい曲のカバーに挑戦したりしています（腕前はまだまだですが）。" +
    "好きな仕事をしながら新しい生活を築くため、最近日本に移住しました。学び続けられる新しい挑戦をいつでも歓迎しています。",

  "exp.kicker": "これまでの",
  "exp.title": "スキル",
  "exp.frontend": "フロントエンド",
  "exp.ai": "AI・データ",
  "exp.backend": "バックエンド・データベース",
  "exp.devops": "DevOps・テスト・ツール",
  "level.adv": "上級",
  "level.int": "中級",
  "level.bas": "初級",

  "proj.kicker": "仕事と個人の",
  "proj.title": "プロジェクト",
  "proj.work": "仕事",
  "proj.personal": "個人",
  "proj.demo": "デモを見る",
  "proj.cvNote":
    '詳しい経歴は <a class="inline-link" href="./assets/FSResume.pdf" target="_blank" rel="noopener">CV（英語）をご覧ください&nbsp;&#8599;</a>',

  "work.chip.web": "Web開発",
  "work.chip.branding": "ブランディング",
  "work.chip.automation": "業務自動化",

  "work.livmora.role": "開発者（業務委託）· カナダ・ビクトリア",
  "work.livmora.dates": "2026年5月 – 現在",
  "work.livmora.summary":
    '地元企業向けにWebサイト、AIツール、業務自動化の仕組みを開発する主任開発者。<a class="inline-link" href="https://prairieinnpub.com/" target="_blank" rel="noopener">The Prairie Inn Pub&nbsp;&#8599;</a> のWebサイトとブランドを全面的にリニューアルしました。',

  "work.sidian.role": "AIエンジニア（業務委託）",
  "work.sidian.dates": "2026年4月 – 2026年5月",
  "work.sidian.summary":
    "ハイブリッド検索、リランキング、ローカルLLMを組み合わせた2段階のRAGパイプラインで、プライバシー法に関するQ&amp;Aシステムを構築しました。",

  "work.ssi.role": "プロダクト開発者（フルタイムインターン・5か月）· カナダ・ビクトリア",
  "work.ssi.dates": "2025年9月 – 2026年1月",
  "work.ssi.summary":
    "船舶設計向けの業界トップクラスの3D CAD/CAMソフトウェア「ShipConstructor」で、バックエンドモジュールの開発とUIの刷新を担当しました。",

  "work.quartech.role": "フルスタック開発者（契約・14か月）· カナダ・ビクトリア",
  "work.quartech.dates": "2023年5月 – 2024年6月",
  "work.quartech.summary":
    "ブリティッシュコロンビア州運輸省の州有不動産管理プラットフォーム「PIMS」で、フルスタックの機能開発を担当しました。",

  "work.cfia.fullName": "カナダ食品検査庁",
  "work.cfia.role": "バックエンドPython開発者（フルタイムインターン・8か月）",
  "work.cfia.dates": "2022年5月 – 2022年12月",
  "work.cfia.summary":
    'オープンソースのウイルス検出プラットフォーム <a class="inline-link" href="https://www.virtool.ca/" target="_blank" rel="noopener">Virtool&nbsp;&#8599;</a> 向けに、REST APIとリアルタイムWebSocketサービスを構築しました。',

  "personal.pingpong": "C++とraylibで作った、ブラウザで遊べるクラシックなポンゲーム。",
  "personal.bullethell": "Cとraylibで作った、ブラウザで遊べるスピード感のある2Dシューティングゲーム。",
  "personal.nasa": "NASAのAPOD APIを使って「今日の天文写真」を表示するReactアプリ。",
  "personal.mangobook": "FastAPIとStreamlitで作った、写真や動画をフィードで共有できる小さなSNSアプリ。",

  "contact.kicker": "お気軽にどうぞ",
  "contact.title": "お問い合わせ",
  "form.name": "お名前",
  "form.email": "メールアドレス",
  "form.message": "メッセージ",
  "form.send": "送信する",
};

// Text that only exists in script.js (contact form status), in both languages.
const MESSAGES = {
  en: {
    sending: "Sending...",
    send: "Send Message",
    success: "Thanks! Your message has been sent.",
    error: "Something went wrong. Please email me directly instead.",
  },
  ja: {
    sending: "送信中...",
    send: "送信する",
    success: "ありがとうございます！メッセージを送信しました。",
    error: "送信できませんでした。お手数ですが、メールで直接ご連絡ください。",
  },
};

const LEVEL_NAMES_JA = {
  Advanced: "上級",
  Intermediate: "中級",
  Basic: "初級",
};
