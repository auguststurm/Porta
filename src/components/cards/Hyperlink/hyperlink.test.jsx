import React from 'react';
import { render } from '@testing-library/react';
import Hyperlink from '.';

const component = (customProps = {}) => {
  const defaultProps = {
    url: 'https://www.apple.com',
    title: 'Apple'
  };
  const props = {...defaultProps, ...customProps};
  return render(<Hyperlink {...props} />);
};


describe('Hyperlink component', () => {
  
  it('should have a title', () => {
    const { getByText } = component();
    expect(getByText('Link: Apple')).toBeInTheDocument();
  });
  
  it('should have content with url', () => {
    const { getByText } = component();
    expect(getByText('https://www.apple.com')).toBeInTheDocument();
  });
  
  it('should have a button with label', () => {
    const { getByText } = component();
    expect(getByText('Visit Apple')).toBeInTheDocument();
  });
  
});
