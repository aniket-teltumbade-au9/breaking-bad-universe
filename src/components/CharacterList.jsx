import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharacterList extends Component {
  render() {
    return (
      <Link to={`/character/${this.props.char.char_id}`} className="card"  >
        <div
          className="img"
          style={{ backgroundImage: `url(${this.props.char.img})` }}
          alt="Sample"
        />
        <div className="text">
          <h3>{this.props.char.name}</h3>
        </div>
      </Link>
    );
  }
}
export default CharacterList;
