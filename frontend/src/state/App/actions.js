export const actions = {
  SET_TUTORIALS: 'SET_TUTORIALS',
  SET_HOME_PAGE_CONTENT: 'SET_HOME_PAGE_CONTENT',
};

export const setTutorials = ({ payload }) => ({
  type: actions.SET_TUTORIALS,
  payload,
});

export const setHomePageContent = ({ payload }) => ({
  type: actions.SET_HOME_PAGE_CONTENT,
  payload,
});

export { actions as default };
