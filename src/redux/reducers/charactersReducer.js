import { SET_CHARACTERS, SEARCH_CHARACTER } from "../actionTypes";
import { SINGLE_CHARACTER } from "../actionTypes";

const initialState = {
  characters: null,
  character: null,
  serachResult: null
};

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, characters: payload };
    case SINGLE_CHARACTER:
      return { ...state, character: payload };
    case SEARCH_CHARACTER:
      return { ...state, serachResult: payload };
    default:
      return state;
  }
};
export default charactersReducer;
