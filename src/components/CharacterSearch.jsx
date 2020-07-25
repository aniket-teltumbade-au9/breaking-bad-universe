import React, { Component } from "react";
import { throttle } from "lodash";
import { characterSearch } from "../redux/actions/charactersActions";
import { withRouter } from "react-router-dom";

class CharacterSearch extends Component {
  state = {
    result: null
  };
  handleSearch = evt => {
    this.setState({
      result: evt.target.value
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.history.push(`/search/${this.state.result}`);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          alignItems: "center"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Character..."
            onChange={this.handleSearch}
            defaultValue={this.state.result}
          />
          <span role="img" aria-labelledby="search">
            🔍
          </span>
        </form>
      </div>
    );
  }
}
export default withRouter(CharacterSearch);
