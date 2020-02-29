import Api from "../api";
export const FETCH_ANIMALS_PENDING = "FETCH_ANIMALS_PENDING";
export const FETCH_ANIMALS_SUCCESS = "FETCH_ANIMALS_SUCCESS";
export const FETCH_ANIMALS_ERROR = "FETCH_ANIMALS_ERROR";

export const loadAnimals = () => dispatch => {
  dispatch({ type: FETCH_ANIMALS_PENDING });
  Api.getAnimals()
    .then(response => response.json())
    .then(
      data =>
        dispatch({ type: FETCH_ANIMALS_PENDING, data }, console.log(data)),
      error =>
        dispatch({
          type: FETCH_ANIMALS_ERROR,
          error: error.message || "Unexpected Error!!!"
        })
    );
};

export function fetchAnimalsPending() {
  return {
    type: FETCH_ANIMALS_PENDING
  };
}

export function fetchAnimalsSuccess(animals) {
  return {
    type: FETCH_ANIMALS_SUCCESS,
    animals: animals
  };
}

export function fetchAnimalsError(error) {
  return {
    type: FETCH_ANIMALS_ERROR,
    error: error
  };
}
