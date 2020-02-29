import {
  FETCH_ANIMALS_PENDING,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR
} from "../actions/animal-action";

const initialState = {
  pending: false,
  data: ["data", "data"],
  error: null
};

export default function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANIMALS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true,
        data: ["Loading"],
        error: "Error and Loadong"
      };
    case FETCH_ANIMALS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: "true"
      };
    case FETCH_ANIMALS_ERROR:
      console.log("Error");
      return {
        ...state,
        pending: false,
        data: ["Error"],
        error: action.error
      };
    default:
      return state;
  }
}

export const getAnimals = state => state.data;
export const getAnimalsPending = state => state.pending;
export const getAnimalsError = state => state.error;
