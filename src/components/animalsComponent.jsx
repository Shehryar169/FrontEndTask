import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import {
  loadAnimals,
  SuccessAnimals,
  EndAnimals,
  fetchAnimals
} from "../actions/animal-action";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class AnimalsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredItems: null };
  }

  filterList = event => {
    let items = this.props.data;
    items = items.filter(item => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filteredItems: items });
  };

  componentDidMount() {
    this.props.fetchAnimals();
  }
  render() {
    if (this.props.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }
    if (this.state.filteredItems) {
      return (
        <div>
          <form>
            <fieldset className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search"
                onChange={this.filterList}
              />
            </fieldset>
          </form>
          <ul className="list-group">
            {this.state.filteredItems.map((u, index) => (
              <li className="list-group-item" key={index}>
                {u}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={this.filterList}
            />
          </fieldset>
        </form>
        <ul className="list-group">
          {this.props.data.map((u, index) => (
            <li className="list-group-item" key={index}>
              {u}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  data: state.data,
  pending: state.pending
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsComponent);
