import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img src="https://toppng.com/uploads/preview/breaking-bad-logo-vector-free-download-115742083085nckj9rt6r.png" width="70px" alt="logo"/>
        <NavLink to="/">Home</NavLink>
               
      </nav>
    );
  }
}
export default Navbar;
