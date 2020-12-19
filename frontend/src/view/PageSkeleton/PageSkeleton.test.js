import React from 'react';
import { render, screen, waitForElementToBeRemoved, testData } from 'testing';
import PageSkeleton from './PageSkeleton';
import directus from 'api/directus';

jest.mock('api/directus', () => ({
  __esModule: true,
  default: {
    getItems: jest.fn(),
    getFiles: jest.fn(),
  },
}));

beforeEach(() => {
  directus.getItems.mockImplementation(() => Promise.resolve({ data: {} }));
  directus.getFiles.mockImplementation((collection) => {
    if (collection === 'home') {
      return Promise.resolve({
        data: {
          content: '',
          contact_email: 'emal@example.com',
          contact_phone: '111',
          useful_links: null,
        },
      });
    }
    return Promise.resolve({ data: [] });
  });
});

describe('<PageSkeleton />', () => {
  it('renders correctly', async () => {
    render(
      <PageSkeleton>
        <div>my-content</div>
      </PageSkeleton>,
      { appState: { ...testData, loading: true } }
    );

    await waitForElementToBeRemoved(() =>
      screen.getByTestId('loading-indicator')
    );

    // child prop is displayed
    screen.getByText('my-content');

    expect(directus.getItems).toHaveBeenCalledTimes(2);
    expect(directus.getFiles).toHaveBeenCalledTimes(1);
  });
});
