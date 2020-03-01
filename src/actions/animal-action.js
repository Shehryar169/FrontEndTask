import Api from "../api";
export const FETCH_ANIMALS_PENDING = "FETCH_ANIMALS_PENDING";
export const FETCH_ANIMALS_SUCCESS = "FETCH_ANIMALS_SUCCESS";
export const FETCH_ANIMALS_ERROR = "FETCH_ANIMALS_ERROR";
export const FILTER_ANIMALS = "FILTER_ANIMALS";

export const loadAnimals = data => dispatch => {
  return { type: FETCH_ANIMALS_PENDING };
};

export const SuccessAnimals = data => {
  console.log("inside of sucees action");
  return { type: FETCH_ANIMALS_SUCCESS, payload: data };
};

export const EndAnimals = data => dispatch => {
  return { type: FETCH_ANIMALS_ERROR, payload: data };
};

export const filterAnimals = data => {
  return {
    type: FILTER_ANIMALS,
    payload: data
  };
};

export function fetchAnimals() {
  return dispatch => {
    dispatch(loadAnimals());
    return fetch(
      "https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json"
    )
      .then(res => res.json())
      .then(json => {
        dispatch(SuccessAnimals(json));
        return json;
      })
      .catch(error => dispatch(EndAnimals(error)));
  };
}
