import React, { Component } from "react";
import { fetchCharacters } from "../redux/actions/charactersActions";
import { connect } from "react-redux";
import CharacterList from "../components/CharacterList";
import Loader from "react-loader-spinner";
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }
  render() {
    return this.props.character ? (
      <div className="Home">
        {this.props.character.map(char => (
          <CharacterList key={char.char_id} char={char} />
        ))}
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          alignItems: "center"
        }}
      >
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
const mapStateToProps = storeState => {
  //console.log(storeState.characterState.characters)
  return { character: storeState.characterState.characters };
};
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(HomePage);
