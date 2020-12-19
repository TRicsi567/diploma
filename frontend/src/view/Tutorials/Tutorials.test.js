import React from 'react';
import { Route } from 'react-router-dom';
import { fireEvent, render, screen, testData } from 'testing';
import Tutorials from './Tutorials';

jest.mock('view/Tutorial', () => ({
  __esModule: true,
  default: () => <div>I'm a fake tutorial</div>,
}));

const { tutorials } = testData;

const tutorialCount = Object.values(tutorials).reduce(
  (sum, curr) => sum + curr.length,
  0
);

const Wrapper = () => (
  <Route path='/tutorials'>
    <Tutorials />
  </Route>
);

describe('<Tutorials />', () => {
  it('No filter screen renders correctly', () => {
    render(<Wrapper />, { initialEntries: ['/tutorials'] });

    expect(screen.getAllByTestId('tutorial-card')).toHaveLength(tutorialCount);

    fireEvent.click(screen.getAllByTestId('tutorial-card')[0]);
    screen.getByText(/i'm a fake tutorial/i);
  });

  it('Filter screen renders correctly', () => {
    render(<Wrapper />, { initialEntries: ['/tutorials/easy'] });

    expect(screen.getAllByTestId('tutorial-card')).toHaveLength(
      tutorials.easy.length
    );

    fireEvent.click(screen.getAllByTestId('tutorial-card')[0]);

    screen.getByText(/i'm a fake tutorial/i);
  });

  it('Tutorial route', () => {
    render(<Wrapper />, { initialEntries: ['/tutorials/easy/alma'] });

    screen.getByText(/i'm a fake tutorial/i);
  });
});
