export const actions = {
  SET_TUTORIALS: 'SET_TUTORIALS',
  SET_HOME_PAGE_CONTENT: 'SET_HOME_PAGE_CONTENT',
  SET_LOADING: 'SET_LOADING',
};

export const setTutorials = ({ payload }) => ({
  type: actions.SET_TUTORIALS,
  payload,
});

export const setHomePageContent = ({ homePage, contact, usefulLinks }) => ({
  type: actions.SET_HOME_PAGE_CONTENT,
  payload: {
    homePage,
    contact,
    usefulLinks,
  },
});

export const setLoading = ({ payload }) => ({
  type: actions.SET_LOADING,
  payload,
});

export { actions as default };
