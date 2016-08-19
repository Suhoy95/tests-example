import React, {PropTypes} from "react";
import {Link} from "react-router";

function App({children}) {
  return (
    <div>
      <div>
        <h1>TODO's</h1>
        <ul>
          <li><Link to="/">TODO List</Link></li>
          <li><Link to="/archive">Archive</Link></li>
        </ul>
      </div>

      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
