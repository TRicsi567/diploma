import { render } from '@testing-library/react';

const WrapperComponent = () => {};

const customRender = (node, options) => {
  render(node, { ...options });
};
