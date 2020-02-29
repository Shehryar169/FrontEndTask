import {
  fetchAnimalsPending,
  fetchAnimalsSuccess,
  fetchAnimalsError
} from "../actions/animal-action";

function fetchAnimals() {
  return dispatch => {
    dispatch(fetchAnimalsPending());
    fetch("https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchAnimalsSuccess(res));
        console.log(res);
        return res;
      })
      .catch(error => {
        dispatch(fetchAnimalsError(error));
      });
  };
}

export default fetchAnimals;
