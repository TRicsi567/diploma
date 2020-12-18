// https://github.com/mui-org/material-ui/blob/next/packages/material-ui-utils/src/debounce.js
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
export default function debounce(func, wait = 166) {
  function debounced(...args) {
    func.apply(this, args);
  }

  debounced.clear = () => {};

  return debounced;
}
