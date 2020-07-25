import React, { Component } from "react";
import { connect } from "react-redux";
import { characterSearch } from "../redux/actions/charactersActions";
import CharacterList from "../components/CharacterList";
import Loader from "react-loader-spinner";
class CharacterSearchPage extends Component {
  componentDidMount() {
    this.props.characterSearch(this.props.match.params.searchToken);
  }
  render() {
    return this.props.chars ? (
      <div className="Home">
        {this.props.chars.map(char => (
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
const mapStatesToProps = storeState => {
  console.log(storeState.characterState.serachResult)
  return{ chars: storeState.characterState.serachResult}
};
export default connect(
  mapStatesToProps,
  { characterSearch }
)(CharacterSearchPage);
