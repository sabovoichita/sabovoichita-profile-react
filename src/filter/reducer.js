export const filter = (state = "", action) => {
  switch (action.type) {
    case "FILTER_CHANGED": {
      return action.filter;
    }
    default:
      return state;
  }
};

export const count = (state = 0, action) => {
  switch (action.type) {
    case "LANGUAGE_LOADED": {
      return action.languages.length;
    }
    case "LANGUAGE_ADDED": {
      return state + 1;
    }
    case "LANGUAGE_REMOVED": {
      return state - 1;
    }
    default:
      return state;
  }
};
