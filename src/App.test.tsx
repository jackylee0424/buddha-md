import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('renders the traditional Chinese archive by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '金剛經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/二十七講全文閱讀/)).toBeInTheDocument();
    expect(screen.getByText(/金剛經原文/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '繁體中文', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: false })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '金剛經講說之一：經題義理與修行根本', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '金剛經講說之二十七：不取於相、如如不動與信受奉行', level: 3 })).toBeInTheDocument();
    expect(screen.getAllByText('閱讀')).toHaveLength(27);
    expect(screen.getByRole('link', { name: '閱讀經文原文' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: '閱讀全文' })).not.toBeInTheDocument();
    expect(screen.queryByText('已上線全文')).not.toBeInTheDocument();
    expect(screen.queryByText('段落數')).not.toBeInTheDocument();
    expect(screen.queryByText('字數')).not.toBeInTheDocument();
  });

  it('toggles the website chrome into English', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Diamond Sutra Lecture Archive', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Twenty-seven full lecture pages/)).toBeInTheDocument();
    expect(screen.getByText(/full reading pages in Traditional Chinese and English/i)).toBeInTheDocument();
    expect(screen.getByText(/The Diamond Sutra: full text/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
    expect(screen.getByText(/Li Ruilie Diamond Sutra lecture playlist/)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Diamond Sutra Lecture 1: The Meaning of the Title and the Foundations of Practice',
        level: 3
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText('Read')).toHaveLength(27);
    expect(screen.getByRole('link', { name: 'Read the sutra text' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Read lecture page' })).not.toBeInTheDocument();
    expect(screen.queryByText('Full text live')).not.toBeInTheDocument();
    expect(screen.queryByText('Paragraph count')).not.toBeInTheDocument();
    expect(screen.queryByText('Character count')).not.toBeInTheDocument();
  });

  it('opens a full lecture page for lecture 1', async () => {
    window.location.hash = '#/lecture/1';
    render(<App />);

    expect(
      await screen.findByRole('heading', { name: '金剛經講說之一：經題義理與修行根本', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/《金剛般若波羅蜜經》的經題說起/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回首頁總覽' })).toBeInTheDocument();
  });

  it('opens the traditional Chinese sutra text page', async () => {
    window.location.hash = '#/sutra';
    render(<App />);

    expect(await screen.findByRole('heading', { name: '金剛經原文', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/如是我聞。\s*一時，佛在舍衛國祇樹給孤獨園/)).toBeInTheDocument();
    expect(screen.getByText(/若以色見我，以音聲求我，是人行邪道，不能見如來。/)).toBeInTheDocument();
    expect(screen.queryByText(/Thus have I heard\. At one time the Buddha was in Śrāvastī/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '返回首頁總覽' })).toBeInTheDocument();
  });


  it('shows the English lecture page for lecture 1 when English is selected', async () => {
    window.location.hash = '#/lecture/1';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(
      await screen.findByRole('heading', { name: 'Diamond Sutra Lecture 1: The Meaning of the Title and the Foundations of Practice', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/This lecture is available as a full English page\./)).toBeInTheDocument();
    expect(screen.getByText(/This lecture begins with the title of the Vajra Prajna Paramita Sutra\./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back to archive index' })).toBeInTheDocument();
  });

  it('shows the English sutra text page when English is selected', async () => {
    window.location.hash = '#/sutra';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(await screen.findByRole('heading', { name: 'The Diamond Sutra', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Thus have I heard\. At one time the Buddha was in Śrāvastī/)).toBeInTheDocument();
    expect(screen.getByText(/All conditioned phenomena are like dreams, illusions, bubbles, shadows, like dew and like lightning/)).toBeInTheDocument();
    expect(screen.queryByText(/如是我聞。\s*一時，佛在舍衛國祇樹給孤獨園/)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back to archive index' })).toBeInTheDocument();
  });
});
