import React from 'react';
import { render, screen, testDataTutorial, wait } from 'testing';
import { MemoryRouter, Route } from 'react-router-dom';
import { promiseFn } from './state';
import Tutorial from './Tutorial';

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
      <MemoryRouter initialEntries={['/1']}>
        <Route path='/:id'>
          <Tutorial />
        </Route>
      </MemoryRouter>
    );

    // wait for loading to finish
    await wait(() => {
      screen.getByText(testDataTutorial.name);
    });

    // description is visible
    screen.getByText(testDataTutorial.description);
  });
});
