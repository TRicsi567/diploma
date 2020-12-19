import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { render, screen, fireEvent } from 'testing';
import NotFoundPage from '.';

describe('<NotFoundPage />', () => {
  it('renders correctly', () => {
    render(
      <Switch>
        <Route path='/some-invalid-route' exact>
          <NotFoundPage />
        </Route>
        <Route path='/' exact>
          mock-home
        </Route>
      </Switch>,
      { initialEntries: ['/some-invalid-route'] }
    );

    screen.getByText(/404/i);
    screen.getByText(/a keresett oldal nem található/i);

    // home navigation works
    expect(screen.queryByText('mock-home')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/a főoldalra/i));
    screen.getByText('mock-home');
  });
});
