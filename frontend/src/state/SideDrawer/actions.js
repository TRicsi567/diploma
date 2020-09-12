const actions = {
  TOGGLE_EASY_OPEN: 'TOGGLE_EASY_OPEN',
  TOGGLE_INTERMEDIATE_OPEN: 'TOGGLE_INTERMEDIATE_OPEN',
  TOGGLE_PROFESSIONAL_OPEN: 'TOGGLE_PROFESSIONAL_OPEN',
};

export const toggleEasy = () => ({
  type: actions.TOGGLE_EASY_OPEN,
});

export const toggleIntermediate = () => ({
  type: actions.TOGGLE_INTERMEDIATE_OPEN,
});

export const toggleProfessional = () => ({
  type: actions.TOGGLE_PROFESSIONAL_OPEN,
});

export { actions as default };
