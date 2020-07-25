import axios from "axios";
import { SET_CHARACTERS } from "../actionTypes";
import { SINGLE_CHARACTER } from "../actionTypes";
import { SEARCH_CHARACTER } from "../actionTypes";
export const fetchCharacters = () => async (dispatch, getState) => {
  try {
    const response = await axios(
      "https://www.breakingbadapi.com/api/characters"
    );
    dispatch({
      type: SET_CHARACTERS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const characterDetail = charId => async (dispatch, getState) => {
  try {
    const response = await axios(
      `https://www.breakingbadapi.com/api/characters/${charId}`
    );
    dispatch({
      type: SINGLE_CHARACTER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const characterSearch = search => async (dispatch, getState) => {
  try {
    const response = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${search}`
    );
    dispatch({
      type: SEARCH_CHARACTER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
