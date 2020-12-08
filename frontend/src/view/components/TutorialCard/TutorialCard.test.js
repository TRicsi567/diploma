import React from 'react';
import { render } from 'testing';
import { screen, fireEvent } from '@testing-library/react';
import TutorialCard from './TutorialCard';

describe('<TutorialCard />', () => {
  it('renders correctly', () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <TutorialCard
        title='Test Title'
        description='Test Description'
        difficulty='easy'
        onClick={onClick}
      />
    );

    // title is visible
    screen.getByText(/test title/i);

    // description is visible
    screen.getByText(/test description/i);

    // we display an image placeholder if there is no imgSrc
    screen.getByTestId(/img-placeholder/i);

    rerender(
      <TutorialCard
        title='Test Title'
        description='Test Description'
        difficulty='easy'
        onClick={onClick}
        imageSrc='some/image/url'
      />
    );

    // if we have imageSrc we display the image
    // onClick is called
    fireEvent.click(screen.getByText(/test description/i));
    fireEvent.click(screen.getByText(/test title/i));
    fireEvent.click(screen.getByAltText('tutorial-illustration'));

    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
