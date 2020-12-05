import React from 'react';
import { render } from 'testing';
import { screen } from '@testing-library/react';
import TabPanel from './TabPanel';

describe('<TabPanel />', () => {
  it('renders correctly', () => {
    const { rerender } = render(
      <TabPanel
        index='12'
        value='12'
        className='test-class-name'
        data-testid='root'>
        <div>some content</div>
      </TabPanel>
    );
    expect(screen.getByTestId('root')).toHaveClass('test-class-name');

    // the children of the component is visible
    screen.getByText(/some content/i);

    rerender(
      <TabPanel
        index='12'
        value='almafa'
        className='test-class-name'
        data-testid='root'>
        <div>some content</div>
      </TabPanel>
    );

    // if the index and value doesn't equals we display nothing
    expect(screen.queryByTestId('root')).not.toBeInTheDocument();
    expect(screen.queryByText(/some content/i)).not.toBeInTheDocument();
  });
});
