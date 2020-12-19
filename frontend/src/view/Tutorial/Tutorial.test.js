import React from 'react';
import {
  fireEvent,
  render,
  screen,
  testDataTutorial,
  wait,
  within,
} from 'testing';
import { Route } from 'react-router-dom';
import { promiseFn } from './state';
import Tutorial from './Tutorial';

const { slides } = testDataTutorial;

jest.mock('./state', () => ({
  tabValues: {
    TUTORIAL: 'TUTORIAL',
    EXERCISE: 'EXERCISE',
  },
  promiseFn: jest.fn(),
}));

beforeEach(() => {
  promiseFn.mockImplementation(async () => {
    const { default: foo } = await import('testing/testDataTutorial');
    return foo;
  });
});

describe('<Tutorial />', () => {
  it('renders correctly', async () => {
    render(
      <Route path='/:id'>
        <Tutorial />
      </Route>,
      { initialEntries: ['/1'] }
    );

    // wait for loading to finish
    await wait(() => {
      screen.getByText(testDataTutorial.name);
    });

    // description is visible
    screen.getByText(testDataTutorial.description);

    // test slide navigation
    for (let i = 0; i < slides[0].length - 1; i += 1) {
      fireEvent.click(screen.getByTestId('next-step-button'));
    }

    const currentlyVisibleLastStep = slides[0][slides[0].length - 1].text;

    within(screen.getByTestId('slideshow-canvas')).getByText(
      new RegExp(currentlyVisibleLastStep, 'g')
    );

    fireEvent.click(screen.getByTestId('previous-step-button'));
    expect(
      within(screen.getByTestId('slideshow-canvas')).queryByText(
        new RegExp(currentlyVisibleLastStep, 'g')
      )
    ).not.toBeInTheDocument();

    while (screen.queryByTestId('next-step-button')) {
      fireEvent.click(screen.getByTestId('next-step-button'));
    }

    screen.getByText(/végeztél/i);

    // restart the slideshow
    fireEvent.click(screen.getByText(/újrakezdés/i));

    screen.getByText(slides[0][0].text);
    expect(
      screen.queryByText(new RegExp(slides[0][1].text, 'g'))
    ).not.toBeInTheDocument();

    // go to the exercises
    while (screen.queryByTestId('next-step-button')) {
      fireEvent.click(screen.getByTestId('next-step-button'));
    }

    screen.getByText(/végeztél/i);

    fireEvent.click(screen.getByText(/a feladatokhoz/i));

    // exercises is visible
    screen.getByTestId('exercises');

    // navigate to lesson via the tab button
    fireEvent.click(screen.getByText(/lecke/i));
    // the lesson is visible
    screen.getByTestId('tutorial-content');

    // navigate to exercises via the tab button
    fireEvent.click(screen.getByText(/feladatok/i));

    screen.getByTestId('exercises');
  });
});
