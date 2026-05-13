import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('renders the clean book-centered landing page by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '佛經講記典藏', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '金剛經', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '六祖壇經', level: 3 })).toBeInTheDocument();
    const zhEntryLinks = screen.getAllByRole('link', { name: '進入' });
    expect(zhEntryLinks[0]).toHaveAttribute('href', '#/diamond');
    expect(zhEntryLinks[1]).toHaveAttribute('href', '#/platform');
    expect(screen.getByText(/擴充檢核清單/)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: '給 AI Agent 使用的原始素材入口', level: 2 })).not.toBeInTheDocument();
    expect(screen.queryByText('AI / CLI ACCESS')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '下載金剛經原始文字', level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '下載 tangjin 原始文字', level: 4 })).toBeInTheDocument();
    expect(screen.getAllByText(/curl -fsSL https:\/\/buddha\.md\/install\.sh \| sh/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/buddha-md --help/).length).toBeGreaterThan(0);
    expect(screen.getByText(/buddha-md fetch tangjin/)).toBeInTheDocument();
    expect(screen.getByText(/buddha-md fetch diamond/)).toBeInTheDocument();
    expect(screen.queryByText(/\.\/buddha-md/)).not.toBeInTheDocument();
    expect(screen.queryByText(/fetch platform/)).not.toBeInTheDocument();
    expect(screen.queryByText(/--lecture/)).not.toBeInTheDocument();
    expect(screen.queryByText(/--all/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '繁體中文', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: false })).toBeInTheDocument();
  });

  it('toggles the landing page chrome into English', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Buddhist Lecture Library', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Diamond Sutra', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Platform Sutra', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Enter Diamond Sutra' })).toHaveAttribute('href', '#/diamond');
    expect(screen.getByRole('link', { name: 'Enter Platform Sutra' })).toHaveAttribute('href', '#/platform');
    expect(screen.getByText(/Expansion checklist/)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Raw materials for AI agents', level: 2 })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Download Diamond Sutra raw texts', level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Download Tangjin raw texts', level: 4 })).toBeInTheDocument();
    expect(screen.getByText(/Download Tangjin texts:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
  });

  it('copies a book-card CLI prompt from the landing page', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true
    });

    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Copy' })[1]);

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('curl -fsSL https://buddha.md/install.sh | sh'));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('buddha-md --help'));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('buddha-md fetch tangjin'));
    expect(await screen.findByRole('button', { name: 'Copied' })).toBeInTheDocument();
  });

  it('renders the Diamond Sutra book page with its existing archive', () => {
    window.location.hash = '#/diamond';
    render(<App />);

    expect(screen.getByRole('heading', { name: '金剛經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/二十七講全文閱讀/)).toBeInTheDocument();
    expect(screen.getByText(/金剛經原文/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '金剛經講說之一：經題義理與修行根本', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '金剛經講說之二十七：不取於相、如如不動與信受奉行', level: 3 })).toBeInTheDocument();
    expect(screen.getAllByText('閱讀')).toHaveLength(27);
    expect(screen.getByRole('link', { name: '閱讀經文原文' })).toHaveAttribute('href', '#/diamond/sutra');
    expect(screen.queryByText('已上線全文')).not.toBeInTheDocument();
    expect(screen.queryByText('段落數')).not.toBeInTheDocument();
    expect(screen.queryByText('字數')).not.toBeInTheDocument();
  });

  it('renders the Platform Sutra book page with all Tangjin transcript pages live', () => {
    window.location.hash = '#/platform';
    render(<App />);

    expect(screen.getByRole('heading', { name: '六祖壇經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/一百零三講六祖壇經課程藏錄/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '閱讀壇經原文' })).toHaveAttribute('href', '#/platform/sutra');
    expect(screen.getByRole('heading', { name: '六祖壇經講說第 001 講：行由、法寶與佛性無南北', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '六祖壇經講說第 004 講：清淨識、雲日譬喻與神秀偈', level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/第九清淨識被譬喻為雲層上常照的太陽/)).toBeInTheDocument();
    expect(screen.getAllByText('閱讀')).toHaveLength(103);
    expect(screen.queryByText('待整理')).not.toBeInTheDocument();
    expect(screen.getByText(/第 001–103 講繁體中文逐字稿已上線/)).toBeInTheDocument();
  });

  it('shows transcript-grounded English summaries on the Platform Sutra archive', () => {
    window.location.hash = '#/platform';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Platform Sutra Lecture Archive', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/The ninth pure consciousness is compared to the sun above the clouds/)).toBeInTheDocument();
    expect(screen.getByText(/The final lecture cites transmission records/)).toBeInTheDocument();
    expect(screen.getAllByText('Read')).toHaveLength(103);
  });

  it('opens a full Diamond Sutra lecture page for lecture 1', async () => {
    window.location.hash = '#/diamond/lecture/1';
    render(<App />);

    expect(
      await screen.findByRole('heading', { name: '金剛經講說之一：經題義理與修行根本', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/《金剛般若波羅蜜經》的經題說起/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回首頁總覽' })).toBeInTheDocument();
  });

  it('opens a full Platform Sutra lecture page for lecture 1', async () => {
    window.location.hash = '#/platform/lecture/1';
    render(<App />);

    expect(
      await screen.findByRole('heading', { name: '六祖壇經講說第 001 講：行由、法寶與佛性無南北', level: 1 })
    ).toBeInTheDocument();
    expect(await screen.findByText(/對於初期的錄影機不好/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回六祖壇經總覽' })).toBeInTheDocument();
  });

  it('opens a late Platform Sutra Tangjin transcript page', async () => {
    window.location.hash = '#/platform/lecture/103';
    render(<App />);

    expect(await screen.findByRole('heading', { name: '六祖壇經講說第 103 講：四十三法嗣、自性三寶與諡號流傳', level: 1 })).toBeInTheDocument();
    expect(await screen.findByText(/上期剛好說到這裡/)).toBeInTheDocument();
    expect(screen.getByText(/本講已接入繁體中文 tangjin 逐字稿全文/)).toBeInTheDocument();
  });

  it('opens the traditional Chinese Diamond Sutra text page', async () => {
    window.location.hash = '#/diamond/sutra';
    render(<App />);

    expect(await screen.findByRole('heading', { name: '金剛經原文', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/如是我聞。\s*一時，佛在舍衛國祇樹給孤獨園/)).toBeInTheDocument();
    expect(screen.getByText(/若以色見我，以音聲求我，是人行邪道，不能見如來。/)).toBeInTheDocument();
    expect(screen.queryByText(/Thus have I heard\. At one time the Buddha was in Śrāvastī/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回首頁總覽' })).toBeInTheDocument();
  });

  it('opens the traditional Chinese Platform Sutra text page', async () => {
    window.location.hash = '#/platform/sutra';
    render(<App />);

    expect(await screen.findByRole('heading', { name: '六祖壇經原文', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/菩提自性，本來清淨/)).toBeInTheDocument();
    expect(screen.getByText(/定慧一體，不是二/)).toBeInTheDocument();
    expect(screen.queryByText(/The bodhi self-nature is originally pure/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回六祖壇經總覽' })).toBeInTheDocument();
  });

  it('shows the English Diamond lecture page for lecture 1 when English is selected', async () => {
    window.location.hash = '#/diamond/lecture/1';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(
      await screen.findByRole('heading', { name: 'Diamond Sutra Lecture 1: The Meaning of the Title and the Foundations of Practice', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/This lecture is available as a full English page\./)).toBeInTheDocument();
    expect(screen.getByText(/This lecture begins with the title of the Vajra Prajna Paramita Sutra\./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back to archive index' })).toBeInTheDocument();
  });

  it('shows the English Platform Sutra text page when English is selected', async () => {
    window.location.hash = '#/platform/sutra';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(await screen.findByRole('heading', { name: 'The Platform Sutra', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/our essence of mind, which is the seed or kernel of enlightenment, is pure by nature/i)).toBeInTheDocument();
    expect(screen.getByText(/There is no sudden or gradual in the Dharma/i)).toBeInTheDocument();
    expect(screen.queryByText(/菩提自性，本來清淨/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back to Platform Sutra index' })).toBeInTheDocument();
  });

  it('shows built-in CLI help at every command level without package dependencies', () => {
    const runHelp = (...args: string[]) => execFileSync('sh', ['public/cli', ...args], {
      cwd: process.cwd(),
      encoding: 'utf8'
    });

    const topHelp = runHelp('--help');
    expect(topHelp).toContain('buddha-md minimal CLI');
    expect(topHelp).toContain('curl -fsSL https://buddha.md/install.sh | sh');
    expect(topHelp).toContain('buddha-md fetch tangjin');
    expect(topHelp).toContain('No Node, Python, npm, pip');

    const fetchHelp = runHelp('fetch', '--help');
    expect(fetchHelp).toContain('Fetch one complete book corpus of raw text files');
    expect(fetchHelp).toContain('buddha-md fetch tangjin [--out DIR]');
    expect(fetchHelp).toContain('book-level only for stable AI-agent workflows');

    expect(runHelp('fetch', 'tangjin', '--help')).toContain('DIR/tangjin/tangjin001.txt');
    expect(runHelp('fetch', 'diamond', '--help')).toContain('DIR/diamond/gold01.txt');
    expect(runHelp('manifest', 'tangjin', '--help')).toContain('Platform Sutra / Tangjin raw texts');
    expect(runHelp('bundle', 'tangjin', '--help')).toContain('Tangjin corpus');
    expect(runHelp('list', '--help')).toContain('top-level machine-readable manifest');

    const cliSource = readFileSync('public/cli', 'utf8');
    expect(cliSource.startsWith('#!/bin/sh')).toBe(true);
    expect(cliSource).not.toMatch(/\b(require|import)\b/);
  });

  it('installs the CLI from install.sh via curl', () => {
    const installDir = mkdtempSync(join(tmpdir(), 'buddha-md-install-'));
    try {
      execFileSync('sh', ['public/install.sh'], {
        cwd: process.cwd(),
        encoding: 'utf8',
        env: {
          ...process.env,
          BUDDHA_MD_BASE_URL: `file://${process.cwd()}/public`,
          BUDDHA_MD_INSTALL_DIR: installDir
        }
      });
      const installedHelp = execFileSync(join(installDir, 'buddha-md'), ['--help'], { encoding: 'utf8' });
      expect(installedHelp).toContain('buddha-md minimal CLI');
      expect(installedHelp).toContain('buddha-md fetch tangjin');
    } finally {
      rmSync(installDir, { recursive: true, force: true });
    }
  });
});
