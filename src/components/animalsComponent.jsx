import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAnimals } from "../actions/animal-action";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  getAnimalsError,
  getAnimals,
  getAnimalsPending
} from "../reducers/animal-reducer";

class AnimalsComponent extends Component {
  componentDidMount() {
    this.loadAnimals();
    this.props.loadAnimals();
  }
  render() {
    if (this.props.pending) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(u => (
            <tr key={u}></tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => ({
  error: getAnimalsError(state),
  data: getAnimals(state),
  pending: getAnimalsPending(state)
});
const mapDispatchToProps = {
  loadAnimals
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsComponent);
