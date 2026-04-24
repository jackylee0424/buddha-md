import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders an ancient-style Diamond Sutra archive with session navigation', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '金剛經講記', level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /第 27 講/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/二十七講金剛經課程藏錄/)).toBeInTheDocument();
  });
});
