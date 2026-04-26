import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('renders the traditional Chinese archive by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '金剛經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/前二十七講全文頁面/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '繁體中文', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: false })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /第 01 講.*以經解心，以行證義/, level: 3 })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /^閱讀 / })).toHaveLength(27);
    expect(screen.queryByRole('link', { name: '閱讀全文' })).not.toBeInTheDocument();
    expect(screen.queryByText('已上線全文')).not.toBeInTheDocument();
    expect(screen.queryByText('段落數')).not.toBeInTheDocument();
    expect(screen.queryByText('字數')).not.toBeInTheDocument();
  });

  it('toggles the website chrome into English', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Diamond Sutra Lecture Archive', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Lecture pages and English rollout/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
    expect(screen.getByText(/Li Ruilie Diamond Sutra lecture playlist/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Session 01.*Why the sutra matters/, level: 3 })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /^Read / })).toHaveLength(27);
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


  it('shows the English lecture page for lecture 1 when English is selected', async () => {
    window.location.hash = '#/lecture/1';
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(
      await screen.findByRole('heading', { name: 'Diamond Sutra Lecture 1: The Meaning of the Title and the Foundations of Practice', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/This lecture now has a full English page\./)).toBeInTheDocument();
    expect(screen.getByText(/This lecture begins with the title of the Vajra Prajna Paramita Sutra\./)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back to archive index' })).toBeInTheDocument();
  });
});
