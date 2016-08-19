import React, {PropTypes} from "react";
import {Link} from "react-router";

import {dispatch} from "../store";
import {REMOVE_TODO, CHECK_TODO} from "../constants";

function TodoItem({id, name, checked}) {
  return (
    <li>
      {id}: {name} &nbsp;
      <Link to={`/todos/${id}`}>-></Link> &nbsp;
      {checked ? null : <button onClick={() => dispatch({type: CHECK_TODO, id})}>check</button>}
      <button onClick={() => dispatch({type: REMOVE_TODO, id})}>X</button>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default TodoItem;
