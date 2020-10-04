export const actions = {
  SET_TUTORIALS: 'SET_TUTORIALS',
};

export const setTutorials = ({ payload }) => ({
  type: actions.SET_TUTORIALS,
  payload,
});

export { actions as default };
