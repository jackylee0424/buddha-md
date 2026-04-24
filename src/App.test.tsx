import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the traditional Chinese archive by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '金剛經講記', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /第 27 講/i })).toBeInTheDocument();
    expect(screen.getByText(/二十七講金剛經課程藏錄/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '繁體中文', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: false })).toBeInTheDocument();
  });

  it('toggles the website chrome and session content into English', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'English' }));

    expect(screen.getByRole('heading', { name: 'Diamond Sutra Lecture Archive', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/An annotated archive of 27 Diamond Sutra sessions/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Session 27/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English', pressed: true })).toBeInTheDocument();
    expect(screen.getByText(/Li Ruilie Diamond Sutra lecture playlist/)).toBeInTheDocument();
    expect(screen.getByText(/The opening lecture explains why the Diamond Sutra is regarded as a highest teaching/i)).toBeInTheDocument();
  });
});
