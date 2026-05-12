import type { Locale } from './siteData';

export const libraryLocales: Record<Locale, {
  htmlLang: string;
  title: string;
  subtitle: string;
  description: string;
  heroKicker: string;
  languageToggleLabel: string;
  languages: Record<Locale, string>;
  entriesHeading: string;
  entriesDescription: string;
  progressHeading: string;
  progressItems: string[];
  books: Array<{
    key: 'diamond' | 'platform';
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    sourceLabel: string;
    sourceUrl: string;
    href: string;
  }>;
}> = {
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    title: '佛經講記典藏',
    subtitle: '以書為中心整理講記、原文與譯文',
    description: '首頁改為乾淨的藏書入口，先集中呈現《金剛經》與《六祖壇經》兩部書；各書頁再承載原典、講記 archive 與後續擴充進度。',
    heroKicker: '書目 · 原典 · 講記',
    languageToggleLabel: '語文切換',
    languages: {
      'zh-Hant': '繁體中文',
      en: 'English'
    },
    entriesHeading: '兩部主典入口',
    entriesDescription: '每一部書都有獨立首頁、原文閱讀頁與逐講講記頁，後續新增書目時可沿用同一套結構。',
    progressHeading: '擴充檢核清單',
    progressItems: [
      '首頁已改為 book-centered 入口，只保留《金剛經》與《六祖壇經》兩個主要方向。',
      '《金剛經》既有二十七講與原文頁保留，移入獨立書頁。',
      '《六祖壇經》已建立原文／英文閱讀頁與講記 archive。',
      '《六祖壇經》103 講繁體中文 tangjin 逐字稿全文頁已全部上線，預覽卡提供短摘要。'
    ],
    books: [
      {
        key: 'diamond',
        title: '金剛經',
        subtitle: '二十七講講記與經文原典',
        description: '保留既有《金剛經講記》完整 archive、二十七講全文頁，以及繁體中文／英文切換的《金剛經》原文頁。',
        ctaLabel: '進入金剛經',
        sourceLabel: '李瑞烈老師《金剛經》講記 playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
        href: '#/diamond'
      },
      {
        key: 'platform',
        title: '六祖壇經',
        subtitle: '壇經原文、英文譯文與 103 講全文',
        description: '《六祖壇經》獨立書頁已接入 tangjin 講記來源、Wikisource 繁體原文、公開英文譯本來源，並開放 103 講繁體中文逐字稿全文頁。',
        ctaLabel: '進入六祖壇經',
        sourceLabel: '六祖壇經講記 YouTube playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
        href: '#/platform'
      }
    ]
  },
  en: {
    htmlLang: 'en',
    title: 'Buddhist Lecture Library',
    subtitle: 'Book-centered lecture notes, source texts, and translations',
    description: 'The landing page is now a clean library entry point for the Diamond Sutra and the Platform Sutra. Each book owns its source text, lecture archive, and expansion checklist.',
    heroKicker: 'Books · Texts · Lectures',
    languageToggleLabel: 'Language switcher',
    languages: {
      'zh-Hant': '繁體中文',
      en: 'English'
    },
    entriesHeading: 'Two main book entries',
    entriesDescription: 'Each book has its own home, source-text reading page, and lecture-note pages, so future books can reuse the same pattern.',
    progressHeading: 'Expansion checklist',
    progressItems: [
      'Landing page refactored into a book-centered entry with only Diamond Sutra and Platform Sutra as the primary paths.',
      'The existing twenty-seven Diamond Sutra lectures and source-text page remain intact inside the Diamond Sutra book page.',
      'The Platform Sutra now has a source-text page, English reading mode, and lecture archive.',
      'All 103 Platform Sutra Tangjin transcript pages are live in Traditional Chinese, with short preview-card summaries.'
    ],
    books: [
      {
        key: 'diamond',
        title: 'Diamond Sutra',
        subtitle: 'Twenty-seven lectures plus source text',
        description: 'Keeps the existing Diamond Sutra lecture archive, all twenty-seven full lecture pages, and the Chinese/English source-text reading route.',
        ctaLabel: 'Enter Diamond Sutra',
        sourceLabel: 'Li Ruilie Diamond Sutra lecture playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
        href: '#/diamond'
      },
      {
        key: 'platform',
        title: 'Platform Sutra',
        subtitle: 'Chinese text, English reading, and 103 lectures',
        description: 'Adds a dedicated Platform Sutra book page wired to the Tangjin lecture source, Wikisource Traditional Chinese text, a public English translation source, and all 103 Traditional Chinese transcript pages.',
        ctaLabel: 'Enter Platform Sutra',
        sourceLabel: 'Platform Sutra lecture playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
        href: '#/platform'
      }
    ]
  }
} as const;
