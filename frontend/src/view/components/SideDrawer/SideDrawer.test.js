import React from 'react';
import { render, screen, fireEvent } from 'testing';
import { Route, Switch } from 'react-router-dom';
import SideDrawer from './SideDrawer';

const WrapperComponent = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Switch>
      <Route exact path='/'>
        <div>
          <button
            type='button'
            onClick={() => {
              setOpen(true);
            }}
          >
            open-menu
          </button>
          <SideDrawer
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {
              setOpen(true);
            }}
          />
        </div>
      </Route>
      <Route path='*'>navigated-away</Route>
    </Switch>
  );
};

describe('<SideDrawer />', () => {
  it('renders correctly', () => {
    render(<WrapperComponent />);

    // menu title is not yet visible
    expect(screen.queryByText(/útmutatók/i)).not.toBeInTheDocument();

    // open menu
    fireEvent.click(screen.getByText('open-menu'));

    // menu title is visible
    screen.getByText(/útmutatók/i);

    // useful links are visible
    screen.getByText(/hasznos linkek/i);

    // submenues are closed
    expect(screen.queryByText(/változók/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/összes/i)).toHaveLength(1);

    // expand all submenus
    fireEvent.click(screen.getByText(/könnyű/i));
    fireEvent.click(screen.getByText(/közepes/i));
    fireEvent.click(screen.getByText(/haladó/i));

    expect(screen.getAllByText(/összes/i)).toHaveLength(4);

    expect(screen.queryByText(/változók/i)).toBeInTheDocument();

    // click on a navigation item
    fireEvent.click(screen.getByText(/változók/i));

    expect(screen.queryByText('open-menu')).not.toBeInTheDocument();

    // navigation occured on item click
    expect(screen.queryByText('navigated-away')).toBeInTheDocument();
  });
});
