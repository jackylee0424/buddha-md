import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the traditional Chinese archive by default', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '金剛經講記', level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /第 27 講/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/二十七講金剛經課程藏錄/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '繁體中文', pressed: true })
    ).toBeInTheDocument();
  });

  it('toggles the website chrome and session content into simplified Chinese', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '簡體中文' }));

    expect(
      screen.getByRole('heading', { name: '金刚经讲记', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/二十七讲金刚经课程藏录/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /第 27 讲/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '简体中文', pressed: true })
    ).toBeInTheDocument();
    expect(screen.getByText(/李瑞烈老师《金刚经》讲记/)).toBeInTheDocument();
  });
});
