const API_BASE_ADDRESS = "https://jsonplaceholder.typicode.com/todos/1";
export default class Api {
  static getAnimals() {
    const uri = API_BASE_ADDRESS;
    return fetch(uri, {
      method: "GET"
    });
  }
}
