import actions from './actions';

const initialState = {
  easy: {
    open: false,
    label: 'Könnyű',
  },
  intermediate: {
    open: false,
    label: 'Közepes',
  },
  professional: {
    open: false,
    label: 'Haladó',
  },
};

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.TOGGLE_EASY_OPEN: {
      const { open } = state.easy;
      return { ...state, easy: { ...state.easy, open: !open } };
    }
    case actions.TOGGLE_INTERMEDIATE_OPEN: {
      const { open } = state.intermediate;

      return { ...state, intermediate: { ...state.intermediate, open: !open } };
    }
    case actions.TOGGLE_PROFESSIONAL_OPEN: {
      const { open } = state.professional;

      return { ...state, professional: { ...state.professional, open: !open } };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
