import {
  FETCH_ANIMALS_PENDING,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR
} from "../actions/animal-action";

const initialState = {
  pending: false,
  data: [],
  error: ""
};

export default function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANIMALS_PENDING:
      return {
        ...state,
        pending: true,
        error: "Pending"
      };
    case FETCH_ANIMALS_SUCCESS:
      console.log("sharryar.....", action.payload);
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: action.payload.error
      };
    case FETCH_ANIMALS_ERROR:
      console.log("Error");
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      console.log(state);
      return state;
  }
}

export const getAnimals = state => state.data;
export const getAnimalsPending = state => state.pending;
export const getAnimalsError = state => state.error;
