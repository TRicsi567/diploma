import DirectusSDK from '@directus/sdk-js';

const { REACT_APP_API_BASE_URL } = process.env || {};

const client = new DirectusSDK({
  url: REACT_APP_API_BASE_URL,
  project: 'c++',
  storage: window.localStorage,
});

export { client as default };
