export const languages = (state = [], action) => {
  // console.warn("rootReducer", state, action);
  switch (action.type) {
    case "LANGUAGE_LOADED": {
      return action.languages;
    }
    case "LANGUAGE_ADDED": {
      return [...state, action.language];
    }
    case "LANGUAGE_REMOVED": {
      return state.filter((language) => language.id !== action.id);
    }
    default:
      return state;
  }
};
