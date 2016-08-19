import React, {PropTypes} from "react";
import {connect} from "react-redux";

import CreateTodoForm from "./CreateTodoForm";
import TodoItem from "../components/TodoItem";

function ActiveTodos({todos}) {
  return (
    <div>
      <h2>ActiveTodos</h2>
      <ul>
        {
          todos.filter((todo) => !todo.checked)
               .map((todo, i) => <TodoItem key={i} {...todo} />)
        }
      </ul>
      <CreateTodoForm />
    </div>
  );
}

ActiveTodos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default connect((state) => state)(ActiveTodos);
