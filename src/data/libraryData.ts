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
  copyLabel: string;
  copiedLabel: string;
  books: Array<{
    key: 'diamond' | 'platform';
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    sourceLabel: string;
    sourceUrl: string;
    href: string;
    cliPromptTitle: string;
    cliPromptBody: string;
  }>;
}> = {
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    title: '佛經講記',
    subtitle: '經書為中心之講記、原文與譯文',
    description: '以李瑞烈老師之《金剛經》與《六祖壇經》講座逐字稿；各書頁再承載原典與後續擴充進度。',
    heroKicker: '書目 · 原典 · 講記',
    languageToggleLabel: '語文切換',
    languages: {
      'zh-Hant': '繁體中文',
      en: 'English'
    },
    entriesHeading: '典藏',
    entriesDescription: '典藏講記，全文閱讀，AI問答。',
    progressHeading: '擴充檢核清單',
    copyLabel: 'Copy Prompts',
    copiedLabel: 'Copied',
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
        subtitle: '金剛經二十七講講講全文 (李瑞烈老師)',
        description: '保留既有《金剛經講記》完整 archive、二十七講全文頁，以及繁體中文／英文切換的《金剛經》原文頁。',
        ctaLabel: '進入',
        sourceLabel: '李瑞烈老師《金剛經》講記',
        sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
        href: '#/diamond',
        cliPromptTitle: '讓AI Agent來回答金剛經講記相關問題，複製後貼給你的AI Agent',
        cliPromptBody: `Install CLI via curl:
curl -fsSL https://buddha.md/install.sh | sh
Use buddha-md --help to learn about this CLI tool.
Download Diamond Sutra texts:
buddha-md fetch diamond
Respond to questions based on lecture notes and source texts.`
      },
      {
        key: 'platform',
        title: '六祖壇經',
        subtitle: '六祖壇經一百零三講講全文 (李瑞烈老師) ',
        description: '《六祖壇經》講記來源、Wikisource 繁體原文、公開英文譯本來源，並開放一百零三講繁體中文逐字稿全文頁。',
        ctaLabel: '進入',
        sourceLabel: '李瑞烈老師《六祖壇經》講記',
        sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
        href: '#/platform',
        cliPromptTitle: '讓AI Agent來回答六祖壇經講記相關問題，複製後貼給你的AI Agent',
        cliPromptBody: `Install CLI via curl:
curl -fsSL https://buddha.md/install.sh | sh
Use buddha-md --help to learn about this CLI tool.
Download Tangjin texts:
buddha-md fetch tangjin
Respond to questions based on lecture notes and source texts.`
      }
    ]
  },
  en: {
    htmlLang: 'en',
    title: 'Buddhist Library',
    subtitle: 'Book-centered lecture notes from Mr. Li Ruilie, source texts, and translations',
    description: 'The website aims to provide a Buddhist library entry point for the Diamond Sutra and the Platform Sutra. Each book owns its source text, lecture archive, and expansion checklist.',
    heroKicker: 'Books · Texts · Lectures',
    languageToggleLabel: 'Language switcher',
    languages: {
      'zh-Hant': '繁體中文',
      en: 'English'
    },
    entriesHeading: 'Book Entries',
    entriesDescription: 'Each book has its own home, source-text reading page, and lecture-note pages, so future books can reuse the same pattern.',
    progressHeading: 'Expansion checklist',
    copyLabel: 'Copy Prompts',
    copiedLabel: 'Copied',
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
        description: 'The existing Diamond Sutra lecture archive and twenty-seven lecture pages remain intact, along with the source-text page with Traditional Chinese and English toggle.',
        ctaLabel: 'Enter',
        sourceLabel: 'Li Ruilie Diamond Sutra playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=PvFx_UBTp9c&list=PLQP2d9x3sdYYfYK955L0rfZO3TPoRX5yQ',
        href: '#/diamond',
        cliPromptTitle: 'Let AI Agent answer Diamond Sutra questions, copy and paste this to your AI Agent to get started',
        cliPromptBody: `Install CLI via curl:
curl -fsSL https://buddha.md/install.sh | sh

Use buddha-md --help to learn about this CLI tool.

Download Diamond Sutra texts:
buddha-md fetch diamond`
      },
      {
        key: 'platform',
        title: 'Platform Sutra',
        subtitle: 'Chinese text, English reading, and 103 lectures',
        description: 'The Platform Sutra has a source-text page, English reading mode, and lecture archive. All 103 lectures now have their own pages in Traditional Chinese.',
        ctaLabel: 'Enter',
        sourceLabel: 'Li Ruilie Platform Sutra playlist',
        sourceUrl: 'https://www.youtube.com/watch?v=Hd8BTiyvYj0&list=PLQP2d9x3sdYbE28-gEPp2nw5tmQyI8G12',
        href: '#/platform',
        cliPromptTitle: 'Let AI Agent answer Platform Sutra questions, copy and paste this to your AI Agent to get started',
        cliPromptBody: `Install CLI via curl:
curl -fsSL https://buddha.md/install.sh | sh

Use buddha-md --help to learn about this CLI tool.

Download Tangjin texts:
buddha-md fetch tangjin`
      }
    ]
  }
} as const;
