import actions from './actions';

const initialState = {
  tutorials: { easy: [], intermediate: [], professional: [] },
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.SET_TUTORIALS: {
      return { ...state, tutorials: { ...payload } };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
