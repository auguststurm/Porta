import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// 
test('renders header branding', () => {
  const { getByText } = render(<App />);
  const brandText = getByText(/PORTA/i);
  expect(brandText).toBeInTheDocument();
});
