import type { Locale } from './siteData';

export const aiAccessLocales: Record<Locale, {
  eyebrow: string;
  heading: string;
  description: string;
  endpointHeading: string;
  endpoints: Array<{ label: string; href: string }>;
  copyInstruction: string;
  copyLabel: string;
  copiedLabel: string;
  prompts: Array<{ id: string; title: string; body: string }>;
}> = {
  'zh-Hant': {
    eyebrow: 'AI / CLI Access',
    heading: '給 AI Agent 使用的原始素材入口',
    description: '除了人類閱讀頁，本站也提供穩定的 manifest、llms.txt、原始文字檔與無第三方函式庫依賴的最小 CLI。代理程式只要安裝 CLI 並使用 --help，就能學會下載整部書的原始文字素材。',
    endpointHeading: '穩定端點',
    endpoints: [
      { label: 'llms.txt', href: '/llms.txt' },
      { label: 'manifest.json', href: '/manifest.json' },
      { label: 'Tangjin manifest', href: '/materials/tangjin/manifest.json' },
      { label: 'CLI', href: '/cli' }
    ],
    copyInstruction: '點擊 Copy，即可把提示詞複製到剪貼簿，再貼給你的 AI agent。',
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
    prompts: [
      {
        id: 'tangjin-book',
        title: '下載 tangjin 整部講記',
        body: `I want to study the Tangjin raw text materials from https://buddha.md.

Please install the minimal CLI, use --help to learn the available commands, then fetch the complete Tangjin corpus into local files.

Steps:
1. Download https://buddha.md/cli as buddha-md.
2. Run: chmod +x buddha-md
3. Run: ./buddha-md --help
4. Run: ./buddha-md fetch --help
5. Fetch the tangjin raw texts into ./buddha-materials.
6. Use the downloaded local files as the source of truth and cite transcript filenames plus lecture numbers.`
      },
      {
        id: 'diamond-book',
        title: '下載金剛經整部講記',
        body: `I want to study the Diamond Sutra raw text materials from https://buddha.md.

Please install the minimal CLI, use --help to learn the available commands, then fetch the complete Diamond Sutra lecture corpus into local files.

Steps:
1. Download https://buddha.md/cli as buddha-md.
2. Run: chmod +x buddha-md
3. Run: ./buddha-md --help
4. Run: ./buddha-md fetch --help
5. Fetch the diamond raw texts into ./buddha-materials.
6. Use the downloaded local files as the source of truth and cite transcript filenames plus lecture numbers.`
      }
    ]
  },
  en: {
    eyebrow: 'AI / CLI Access',
    heading: 'Raw materials for AI agents',
    description: 'In addition to the reading interface, buddha.md exposes stable manifests, llms.txt, raw text files, and a minimal CLI with no third-party library dependencies. Agents can install the CLI and use --help to learn how to download a complete raw-text book corpus.',
    endpointHeading: 'Stable endpoints',
    endpoints: [
      { label: 'llms.txt', href: '/llms.txt' },
      { label: 'manifest.json', href: '/manifest.json' },
      { label: 'Tangjin manifest', href: '/materials/tangjin/manifest.json' },
      { label: 'CLI', href: '/cli' }
    ],
    copyInstruction: 'Click Copy to put a ready-to-send prompt on your clipboard, then paste it into your AI agent.',
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
    prompts: [
      {
        id: 'tangjin-book',
        title: 'Download the full Tangjin book corpus',
        body: `I want to study the Tangjin raw text materials from https://buddha.md.

Please install the minimal CLI, use --help to learn the available commands, then fetch the complete Tangjin corpus into local files.

Steps:
1. Download https://buddha.md/cli as buddha-md.
2. Run: chmod +x buddha-md
3. Run: ./buddha-md --help
4. Run: ./buddha-md fetch --help
5. Fetch the tangjin raw texts into ./buddha-materials.
6. Use the downloaded local files as the source of truth and cite transcript filenames plus lecture numbers.`
      },
      {
        id: 'diamond-book',
        title: 'Download the full Diamond Sutra book corpus',
        body: `I want to study the Diamond Sutra raw text materials from https://buddha.md.

Please install the minimal CLI, use --help to learn the available commands, then fetch the complete Diamond Sutra lecture corpus into local files.

Steps:
1. Download https://buddha.md/cli as buddha-md.
2. Run: chmod +x buddha-md
3. Run: ./buddha-md --help
4. Run: ./buddha-md fetch --help
5. Fetch the diamond raw texts into ./buddha-materials.
6. Use the downloaded local files as the source of truth and cite transcript filenames plus lecture numbers.`
      }
    ]
  }
} as const;
