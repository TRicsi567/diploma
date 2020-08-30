import actions from './actions';

const initialState = {
  levelEasyOpen: false,
  levelIntermediateOpen: false,
  levelHardOpen: false,
};

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.TOGGLE_EASY_OPEN: {
      return { ...state, levelEasyOpen: !state.levelEasyOpen };
    }
    case actions.TOGGLE_INTERMEDIATE_OPEN: {
      return { ...state, levelIntermediateOpen: !state.levelIntermediateOpen };
    }
    case actions.TOGGLE_HARD_OPEN: {
      return { ...state, levelHardOpen: !state.levelHardOpen };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
