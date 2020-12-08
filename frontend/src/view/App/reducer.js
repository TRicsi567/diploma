import actions from './actions';

const initialState = {
  tutorials: { easy: [], intermediate: [], professional: [] },
  homePage: null,
  loading: true,
  contact: {
    email: '',
    phone: '',
    links: {},
  },
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.SET_TUTORIALS: {
      return { ...state, tutorials: { ...payload } };
    }
    case actions.SET_HOME_PAGE_CONTENT: {
      const { homePage, contact, usefulLinks } = payload;
      return { ...state, homePage, contact, usefulLinks };
    }
    case actions.SET_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
