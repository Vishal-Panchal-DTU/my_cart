import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Cart
          </a>
        </div>
      </nav>

    );
  }
}

export default Navbar;