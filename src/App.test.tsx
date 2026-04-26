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
    expect(screen.getAllByRole('link', { name: '閱讀全文' })).toHaveLength(27);
  });

  it('toggles the website chrome into English', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Diamond Sutra Lecture Archive', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Traditional Chinese full-text pages/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
    expect(screen.getByText(/Li Ruilie Diamond Sutra lecture playlist/)).toBeInTheDocument();
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
});
