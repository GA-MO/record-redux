const STATE = {
  count: 0,
}
const count = (state = STATE, action) => {
  switch (action.type) {
    case 'ADD': {
      return { ...state, count: state.count + 1 };
    }
    case 'DELETE': {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

export default count;

