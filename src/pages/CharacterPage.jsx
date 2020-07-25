import React, { Component } from "react";
import { characterDetail } from "../redux/actions/charactersActions";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
class CharacterPage extends Component {
  componentDidMount() {
    this.props.characterDetail(this.props.match.params.characterId);
  }
  render() {
    console.log(this.props.character);
    return this.props.character ? (
      <div className="profile">
        <div className="profile-card">
          <div
            className="profile-image"
            style={{ backgroundImage: `url(${this.props.character[0].img})` }}
          />
        </div>

        <div className="profile-card">
          <div className="profile-card-body">
            <h1>{this.props.character[0].name}</h1>

            <div className="profile-state">
              <span>Birthday:</span>
              {this.props.character[0].birthday}
            </div>
            <div className="profile-state">
              <span>Occupation:</span>
              <ul>
                {this.props.character[0].occupation.map(occ => (
                  <li>{occ}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-card-body">
            <div className="profile-state">
              <span>Status:</span>
              {this.props.character[0].status}
            </div>
            <div className="profile-state">
              <span>Appearance:</span>
              <ul className="appearance">
                {this.props.character[0].appearance.map(app => (
                  <li>{app}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-card-body">
            <div className="profile-state">
              <span>Portrayed:</span>
              {this.props.character[0].portrayed}
            </div>
            <div className="profile-state">
              <span>Series Name:</span>
              {this.props.character[0].category}
            </div>
          </div>
        </div>
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
  return { character: storeState.characterState.character };
};

export default connect(
  mapStatesToProps,
  { characterDetail }
)(CharacterPage);
