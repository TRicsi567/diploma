import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// needed for code mirror, document mock
document.createRange = () => {
  const range = {
    getBoundingClientRect: jest.fn(),
    getClientRects: jest.fn(() => ({
      item: () => null,
      length: 0,
    })),
    setEnd: jest.fn(),
    setStart: jest.fn(),
  };

  return range;
};

// scrollTo mock
Element.prototype.scrollTo = () => {};
