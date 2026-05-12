import { fireEvent, render, screen } from '@testing-library/react';
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
    expect(screen.getByRole('link', { name: '進入金剛經' })).toHaveAttribute('href', '#/diamond');
    expect(screen.getByRole('link', { name: '進入六祖壇經' })).toHaveAttribute('href', '#/platform');
    expect(screen.getByText(/擴充檢核清單/)).toBeInTheDocument();
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
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
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

  it('renders the Platform Sutra book page with source text and first lecture batch', () => {
    window.location.hash = '#/platform';
    render(<App />);

    expect(screen.getByRole('heading', { name: '六祖壇經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/一百零三講六祖壇經課程藏錄/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '閱讀壇經原文' })).toHaveAttribute('href', '#/platform/sutra');
    expect(screen.getByRole('heading', { name: '六祖壇經講說之一：行由、見性與佛性無南北', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '第 004 講', level: 3 })).toBeInTheDocument();
    expect(screen.getAllByText('閱讀')).toHaveLength(3);
    expect(screen.getAllByText('待整理').length).toBeGreaterThan(90);
    expect(screen.getByText(/第 004–103 講待逐批整理/)).toBeInTheDocument();
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
      await screen.findByRole('heading', { name: '六祖壇經講說之一：行由、見性與佛性無南北', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/重新補錄的因緣/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回六祖壇經總覽' })).toBeInTheDocument();
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
});
