import React from 'react';
import { render } from '@testing-library/react';
import Header from './header.jsx';

const component = (customProps = {}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<Header {...props} />);
}

describe('Header', () => {
  
  it('should have site branding', () => {
    const { getByText } = component();
    expect(getByText('PORTA')).toBeInTheDocument();
  });
  
});
