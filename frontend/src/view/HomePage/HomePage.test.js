import React from 'react';
import { render, screen, testData } from 'testing';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders correctly', () => {
    render(<HomePage />);

    expect(screen.getByTestId('home-page')).toHaveTextContent(
      testData.homePage
    );
  });
});
