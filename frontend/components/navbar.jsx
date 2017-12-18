import React from 'react';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="navbar">
        <Link style={{textDecoration: "none"}} to="/"><h1 id="navbar-reactor" className="navbar-link">Reactor</h1></Link>
        <Link style={{textDecoration: "none"}} to="/authentication"><h1 id="navbar-login" className="navbar-link">Log In</h1></Link>
      </div>
    )
  }
}

export default Navbar;
