import React, {PropTypes} from "react";
import {connect} from "react-redux";

import TodoItem from "../components/TodoItem";

function Archive({todos}) {
  return (
    <div>
      <h2>Archive</h2>
      <ul>
        {
          todos.filter((todo) => todo.checked)
               .map((todo, i) => <TodoItem key={i} {...todo} />)
        }
      </ul>
    </div>
  );
}

Archive.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default connect((state) => state)(Archive);
