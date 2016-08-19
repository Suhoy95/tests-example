import React, {PropTypes} from "react";
import {Link} from "react-router";

function App({children}) {
  return (
    <div>
      <div className="header">
        <h1>TODO's</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="children">
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
