import React from 'react';
import { render } from '@testing-library/react';
import Search from '.';

const component = (customProps = {}) => {
  const defaultProps = {
    url: 'https://www.amazon.com/s?k=',
    title: 'Amazon'
  };
  const props = {...defaultProps, ...customProps};
  return render(<Search {...props} />);
};

describe('Search component', () => {
  
  it('should have a title', () => {
    const { getByText } = component();
    expect(getByText('Search: Amazon')).toBeInTheDocument();
  });
  
  it('should have an input label', () => {
    const { getByText } = component();
    expect(getByText('Keywords:')).toBeInTheDocument();
  });

  it('should have prefix displayed', () => {
    const { getByText } = component({ prefix: 'Laptop'});
    expect(getByText('Amazon » Laptop')).toBeInTheDocument();
  });
  
});
