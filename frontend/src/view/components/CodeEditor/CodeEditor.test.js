import React from 'react';
import { render, fireEvent, screen, within, wait } from 'testing';
import axios from 'api/axios';
import CodeEditor from './CodeEditor';

jest.mock('utils/debounce');

jest.mock('api/axios', () => ({
  __esModule: true,
  default: {
    post: jest.fn(),
  },
}));

beforeEach(() => {
  axios.post.mockImplementation(() =>
    Promise.resolve({
      data: { stdout: 'test-output', stderr: 'test-err' },
    })
  );
});

describe('<CodeEditor />', () => {
  it('renders correctly', async () => {
    const { container } = render(<CodeEditor className='test-class-name' />);

    expect(container.firstChild).toHaveClass('test-class-name');

    // the code panel is displayed initially
    expect(screen.getByTestId('code-tab')).toBeVisible();
    expect(screen.getByTestId('argument-list-tab')).not.toBeVisible();
    expect(screen.getByTestId('output-tab')).not.toBeVisible();

    const codeInput = within(screen.getByTestId('code-tab')).getByRole(
      'textbox'
    );

    fireEvent.change(codeInput, { target: { value: 'almafa' } });

    expect(codeInput).toHaveValue('almafa');

    fireEvent.click(screen.getByText(/arguments/i));

    // arguments tab is visible
    expect(screen.getByTestId('code-tab')).not.toBeVisible();
    expect(screen.getByTestId('argument-list-tab')).toBeVisible();
    expect(screen.getByTestId('output-tab')).not.toBeVisible();

    // add an argumentum
    expect(
      screen.queryByPlaceholderText('1. argumentum')
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(/hozzáadás/i));

    fireEvent.change(screen.getByPlaceholderText('1. argumentum'), {
      target: { value: 'arg1' },
    });

    fireEvent.click(screen.getByText(/fordít/i));

    // wait for submission process to finish
    await wait(() => {
      expect(screen.getByText(/fordít/i)).not.toBeDisabled();
    });
    expect(axios.post).toHaveBeenCalledTimes(1);

    await wait(() => {
      expect(screen.getByTestId('output-tab')).toBeVisible();
    });
    // output tab is visible
    expect(screen.getByTestId('code-tab')).not.toBeVisible();
    expect(screen.getByTestId('argument-list-tab')).not.toBeVisible();

    screen.getByText(/test-output/i);
  });
});
