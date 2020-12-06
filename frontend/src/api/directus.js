import DirectusSDK from '@directus/sdk-js';

const {
  REACT_APP_API_BASE_URL,
  REACT_APP_ACCESS_TOKEN,
  REACT_APP_PROJECT_NAME = 'C++',
} = process.env || {};

const client = new DirectusSDK({
  url: REACT_APP_API_BASE_URL,
  project: REACT_APP_PROJECT_NAME,
  storage: window.localStorage,
  token: REACT_APP_ACCESS_TOKEN,
});

export { client as default };
